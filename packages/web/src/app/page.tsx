import { LandingDisplayCard } from "@/components/landing-display-card";
import "@/globals.css";

export default function LandingPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<LandingDisplayCard />
		</div>
	);
}
