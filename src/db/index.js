import dotenv from "dotenv"

dotenv.config()

const config = {
    client: "mysql",
    connection: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "mibase",
    },
    pool: { min: 0, max: 7 },
};

export default config;