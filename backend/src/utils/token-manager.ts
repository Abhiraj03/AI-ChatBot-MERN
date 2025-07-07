import jwt from "jsonwebtoken";

export const createToken = (id:string, email:string, expiresIn) => {
    const payload = { id, email };
    const SECRET = process.env.JWT_SECRET;
    const token = jwt.sign(payload, SECRET, {
        expiresIn: "7d",
    });
    return token;
};