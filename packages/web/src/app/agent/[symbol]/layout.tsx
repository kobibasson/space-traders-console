import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { agents } from "@/db/schema";
import { eq } from "drizzle-orm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function AgentLayout({
  children,
  params,
}: {
  children: React.ReactNode;
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
    <>
      <Card>
        <CardHeader>
          <CardTitle>Agent: {agent.symbol}</CardTitle>
          <CardDescription>Manage your SpaceTraders agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 pb-4 border-b">
            <Button asChild variant="ghost" className="text-sm">
              <Link href={`/agent/${agent.symbol}/overview`}>Overview</Link>
            </Button>
            <Button asChild variant="ghost" className="text-sm">
              <Link href={`/agent/${agent.symbol}/contracts`}>Contracts</Link>
            </Button>
            <Button asChild variant="ghost" className="text-sm">
              <Link href={`/agent/${agent.symbol}/fleet`}>Fleet</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        {children}
      </div>
    </>
  );
}
