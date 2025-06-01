import { db } from "@/db";
import { agents } from "@/db/schema";
import {
	AgentsApi,
	ContractsApi,
	DataApi,
	FactionsApi,
	FleetApi,
	GlobalApi,
	SystemsApi,
	Configuration,
} from "@space-traders-console/spacetraders-sdk";
import { eq } from "drizzle-orm";

const accountConfig = new Configuration({
	accessToken: process.env.SPACE_TRADERS_ACCOUNT_TOKEN, // Use the correct env variable
	basePath: "https://api.spacetraders.io/v2",
});

export const agentsClient = new AgentsApi(accountConfig);

export const globalClient = new GlobalApi(accountConfig);

export const getClient = async (agentSymbol: string) => {
	const agent = await db.query.agents.findFirst({
		where: eq(agents.symbol, agentSymbol),
	});

	if (!agent) {
		throw new Error("Agent not found");
	}

	const agentConfig = new Configuration({
		accessToken: agent.token,
		basePath: "https://api.spacetraders.io/v2",
	});

	const contractsClient = new ContractsApi(agentConfig);
	const dataClient = new DataApi(agentConfig);
	const factionsClient = new FactionsApi(agentConfig);
	const fleetClient = new FleetApi(agentConfig);
	const systemsClient = new SystemsApi(agentConfig);

	return {
		contractsClient,
		dataClient,
		factionsClient,
		fleetClient,
		systemsClient,
		globalClient,
	};
};
