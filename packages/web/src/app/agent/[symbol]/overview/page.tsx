import { notFound } from 'next/navigation';
import { db } from '@/db';
import { agents } from '@/db/schema';
import { eq } from 'drizzle-orm';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getClient } from '@/lib/spacetraders';

export default async function AgentOverviewPage({
  params,
}: {
  params: { symbol: string };
}) {
  // Get the agent from the database
  const agent = await db.query.agents.findFirst({
    where: eq(agents.symbol, params.symbol),
  });

  // If agent doesn't exist, return 404
  if (!agent) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Agent Status</CardTitle>
          <CardDescription>Current state of your agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Credits</p>
              <p className="font-mono font-medium">{agent.credits.toLocaleString()}</p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Ships</p>
              <p className="font-mono font-medium">{agent.shipCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Agent Details</CardTitle>
          <CardDescription>Base information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Headquarters</p>
              <p className="font-mono font-medium">{agent.headquarters}</p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Faction</p>
              <p className="font-mono font-medium">{agent.startingFaction}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
