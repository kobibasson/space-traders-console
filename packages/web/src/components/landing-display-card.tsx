import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function LandingDisplayCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Space Traders Console</CardTitle>
        <CardDescription className="text-center pt-2">
          Manage your intergalactic empire, recruit agents, and conquer the cosmos!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <p className="mb-6 text-center">
          Welcome, intrepid space explorer! Begin your journey by managing your agents.
        </p>
        <Link href="/agent" passHref>
          <Button size="lg">Go to My Agents</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
