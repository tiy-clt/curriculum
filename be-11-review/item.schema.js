const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    /* The human-friendly name of the item */
    name: { type: String, required: true },
    /* Medium-sized image URL for the item */
    image: { type: String, required: true },
    /* Full price */
    price: { type: Number },
    /* Aggregated review score */
    reviews: { type: Number },
    /* Potentially long text block summarizing the product */
    description: { type: String },
    /* Weight, in ounces */
    weight: { type: Number },
    /* Short text-based descriptions of the product */
    highlights: [{
        type: String
    }],
});

const model = mongoose.model('Item', schema);

module.exports = model;
