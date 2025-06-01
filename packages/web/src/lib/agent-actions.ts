"use server";

import { globalClient, agentsClient } from "./spacetraders";
import { revalidatePath } from "next/cache";
import type { Agent, FactionSymbol } from "@space-traders-console/spacetraders-sdk";

// Simple return type for the registration function
export type RegisterAgentResult = 
  | { success: true; token: string; error?: never }
  | { error: string; success?: never; token?: never };

/**
 * Register a new agent in the SpaceTraders universe
 */
export async function registerNewAgent(formData: FormData): Promise<RegisterAgentResult> {
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

    // The SDK response already has the correct structure
    const token = response.data.data.token;

    // For a real app, you'd need to store this token securely
    console.log("New agent token:", token);

    // Revalidate the path to refresh the data
    revalidatePath("/agent");
    return { success: true, token };
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
export async function getAgentData(): Promise<Agent[] | null> {
  try {
    const response = await agentsClient.getAgents();
    return response.data.data;
  } catch (error) {
    console.error("Error fetching agents data:", 
      error instanceof Error ? error.message : String(error)
    );
    return null;
  }
}
