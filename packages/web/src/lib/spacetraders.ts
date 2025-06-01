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

const accountConfig = new Configuration({
	accessToken: process.env.SPACE_TRADERS_ACCOUNT_TOKEN, // Use the correct env variable
	basePath: "https://api.spacetraders.io/v2",
});

const agentConfig = new Configuration({
	accessToken: process.env.SPACE_TRADERS_TOKEN, // Use the correct env variable
	basePath: "https://api.spacetraders.io/v2",
});

export const agentsClient = new AgentsApi(accountConfig);
export const contractsClient = new ContractsApi(agentConfig);
export const dataClient = new DataApi(agentConfig);
export const factionsClient = new FactionsApi(agentConfig);
export const fleetClient = new FleetApi(agentConfig);
export const globalClient = new GlobalApi(accountConfig);
export const systemsClient = new SystemsApi(agentConfig);
