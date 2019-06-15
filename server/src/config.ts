import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    mongo: {
        url: `mongodb://${process.env['MONGO_USER']}:${process.env['MONGO_PASS']}@${process.env['MONGO_HOST']}:${process.env['MONGO_PORT']}/codesurf`
    }
};