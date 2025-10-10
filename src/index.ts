import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 9000;
const host =process.env.HOST || "127.0.0.1"
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});