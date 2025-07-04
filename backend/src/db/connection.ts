import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Connect to MongoDB Server.");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Disconnect to MongoDB Server.");
    }
}

export {connectToDatabase, disconnectFromDatabase}