CREATE TABLE "agents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"symbol" text NOT NULL,
	"account_id" text NOT NULL,
	"starting_faction" text NOT NULL,
	"headquarters" text NOT NULL,
	"ship_count" integer NOT NULL,
	"credits" integer NOT NULL,
	"token" text NOT NULL,
	CONSTRAINT "agents_symbol_unique" UNIQUE("symbol")
);
