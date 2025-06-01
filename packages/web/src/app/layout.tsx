import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { getMyAgents } from "@/lib/agent-actions";
import "@/globals.css";

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	// Fetch agents for the sidebar
	const agents = await getMyAgents() || [];

	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex h-screen overflow-hidden items-center">
						<MainNav agents={agents} />
						<main className="overflow-auto p-4">
							{children}
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
