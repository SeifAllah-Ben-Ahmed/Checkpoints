const stripeAPI = require("../config/stripe");
const Order = require("../models/Order");

async function createCheckoutSession(req, res) {
    const domainURL = process.env.WEB_APP;
    const { line_items, customer_email } = req.body;

    // check req.body line_items,customer_email
    if (!line_items || !customer_email) {
        return res
            .status(400)
            .send({ errors: [{ msg: "missing required session parameters" }] });
    }
    try {
        const session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items,
            customer_email,
            success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainURL}/canceled`,
            shipping_address_collection: { allowed_countries: ["GB", "US"] },
        });
        const order = await Order.create({
            sessionID: session.id,
            lineItems: line_items,
            customerEmail: customer_email,
        });
        res.status(201).send({
            msg: "Products payed Successfuly",
            sessionID: session.id,
        });
    } catch (error) {
        res.status(400).send({
            errors: [{ msg: "an error occured, unable to create session" }],
        });
    }
}
module.exports = createCheckoutSession;
