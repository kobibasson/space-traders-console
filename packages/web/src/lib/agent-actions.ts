"use server";

import { globalClient, agentsClient } from "./spacetraders";
import { revalidatePath } from "next/cache";
import type {
	Agent,
	FactionSymbol,
} from "@space-traders-console/spacetraders-sdk";
import { db } from "@/db";
import { agents } from "@/db/schema";

export async function registerNewAgent(formData: FormData) {
	const symbol = formData.get("symbol") as string;
	const faction = formData.get("faction") as string;
	const email = formData.get("email") as string;

	if (!symbol || !faction) {
		return { error: "Symbol and faction are required" };
	}

	try {
		// Cast the faction to the expected enum type
		const factionSymbol = faction as FactionSymbol;

		const response = await globalClient.register({
			symbol,
			faction: factionSymbol,
			email,
		});
    const agent = response.data.data.agent;
		await db.insert(agents).values({
			symbol: agent.symbol,
			accountId: agent.accountId ?? "Unknown",
			startingFaction: response.data.data.faction.symbol,
			headquarters: agent.headquarters,
			shipCount: agent.shipCount,
			credits: agent.credits,
			token: response.data.data.token,
		});

		
		revalidatePath("/my-agents");
		return { success: true };
	} catch (error) {
		console.error(
			"Error registering new agent:",
			error instanceof Error ? error.message : String(error),
		);
		return { error: "Failed to register agent. Please try again." };
	}
}

/**
 * Get all agents data
 */
export async function getMyAgents() {
	try {
		const myAgents = await db.query.agents.findMany()
		return myAgents;
	} catch (error) {
		console.error(
			"Error fetching agents data:",
			error instanceof Error ? error.message : String(error),
		);
		return null;
	}
}
