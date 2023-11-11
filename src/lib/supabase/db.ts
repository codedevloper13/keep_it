/** @format */

// Importing necessary modules from drizzle-orm and other libraries
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

// Load environment variables from a .env file
dotenv.config({ path: ".env" });

// Check if the DATABASE_URL environment variable is set
if (!process.env.DATABASE_URL) {
	console.log("No Database URL Found");
}

// Create a PostgreSQL client using the DATABASE_URL from the environment variables
const client = postgres(process.env.DATABASE_URL as string, { max: 1 });

// Create a drizzle instance with the PostgreSQL client and the specified schema
const db = drizzle(client, { schema });

// Define a function to perform database migration
const migrateDb = async () => {
	try {
		console.log("Migrating Database");
		// Use the migrate function to apply migrations to the database
		await migrate(db, { migrationsFolder: "migrations" });
		console.log("Successfully Migrated");
	} catch (error) {
		console.log("Error Migrating Database", error);
	}
};

// Export the drizzle instance for use in other parts of the application
export default db;
// Call the migrateDb function to execute the database migration when needed
migrateDb();
