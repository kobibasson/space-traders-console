import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Load environment variables
dotenv.config();

// Check if DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables");
}

// Create the connection and drizzle instance
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle({ client: sql, schema });