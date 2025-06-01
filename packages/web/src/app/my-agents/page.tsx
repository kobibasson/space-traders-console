import { Suspense } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getMyAgents } from "@/lib/agent-actions";
import { AgentRegistrationForm } from "@/app/my-agents/components/agent-registration-form";

import type { Agent } from "@space-traders-console/spacetraders-sdk";

// Server component to display a single agent's data
async function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{agent.symbol}</CardTitle>
        <CardDescription>Faction: {agent.startingFaction}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Credits</p>
            <p className="font-mono font-medium">{agent.credits.toLocaleString()}</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Headquarters</p>
            <p className="font-mono font-medium">{agent.headquarters}</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Ships</p>
            <p className="font-mono font-medium">{agent.shipCount}</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Account ID</p>
            <p className="font-mono font-medium truncate">{agent.accountId}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}



// Component to display all agents
async function AgentsList({ agents }: { agents: Agent[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AgentCard key={agent.symbol} agent={agent} />
        ))}
      </div>
    </div>
  );
}

export default async function AgentPage() {
  const agents = await getMyAgents();

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Register New Agent</CardTitle>
            <CardDescription>Create a new agent in the SpaceTraders universe</CardDescription>
          </CardHeader>
          <CardContent>
            <AgentRegistrationForm />
          </CardContent>
        </Card>
      </div>
      
      {agents && agents.length > 0 ? (
        <AgentsList agents={agents} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No Agents Found</CardTitle>
            <CardDescription>Register your first agent to get started</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
