import { Schema, model } from "mongoose";

export type Address = {
    address: string;
    city: string;
    postalCode: string;
    country: string;
};

export type UserType = {
    id: number,
    name: string,
    lastName: string,
    email: string;
    phoneNumber: string;
    website: string;
    address: Address
};

const UserSchema = new Schema<UserType>({
    id: { type: String, default: Date.now, required: true },
    name: { type: String, default: '', trim: true, maxlength: 100, required: true },
    lastName: { type: String, default: '', trim: true, maxlength: 100, required: true },
    email: { type: String, default: '', trim: true, maxlength: 100, required: true },
    phoneNumber: { type: String, default: '', trim: true, maxlength: 100, required: true },
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