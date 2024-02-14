import { db } from ".."



import { migrate } from "drizzle-orm/neon-http/migrator";
// import { migrate } from "drizzle-orm/neon-serverless/migrator";


async function main() {
    await migrate(db, {migrationsFolder: "./drizzle"})    
    
}

main()