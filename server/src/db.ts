import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    id: { type: Number, min: 1,  default: Date.now, required: true },
    name: { type: String, default: '', trim: true, maxlength: 100, required: true },
    lastName: { type: String, default: '', trim: true, maxlength: 100, required: true },
    email: { type: String, default: '', trim: true, maxlength: 100, required: true },
    address: {
        city: { type: String, default: '', trim: true, maxlength: 100 },
        postalCode: { type: String, default: '', trim: true, maxlength: 7 },
        address: { type: String, default: '', trim: true, maxlength: 100 },
        country: { type: String, default: '', trim: true, maxlength: 2 },
    },
    password: { type: String, default: '', trim: true, maxlength: 100, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const User = model('User', UserSchema);