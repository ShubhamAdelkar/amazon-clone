const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('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')

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello, Shubham!"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!', total);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd"
        });

        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        response.status(500).send({
            error: 'Error creating payment intent',
        });
    }
});

// Listen to commands
exports.api = onRequest(app);
