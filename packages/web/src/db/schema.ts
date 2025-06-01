import { globalClient, systemsClient } from "@/lib/spacetraders";
import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const agents = pgTable("agents", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	symbol: text("symbol").notNull().unique(),
	accountId: text("account_id").notNull(),
    startingFaction: text("starting_faction").notNull(),
    headquarters: text("headquarters").notNull(),
    shipCount: integer("ship_count").notNull(),
    credits: integer("credits").notNull(),
	token: text("token").notNull(),
});