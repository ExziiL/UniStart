import mongoose, { Schema, models } from "mongoose";

export const dateSchema = new Schema({
    semester:{ 
        type: String,
        required: true,
    },
    infos: [{
        title: {
            type: String,
            required: true
        },
        dates: {
            type: [String],
            required: true
        },
        annotation: {
            type: String,
            required: false
        }
    }]
});

const UniDate = models.UniDate || mongoose.model('UniDate', dateSchema);
export default UniDate;