'use client';

import { useActionState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select"; // Added SelectTrigger, SelectValue, SelectContent
import { Button } from "@/components/ui/button";
import { registerNewAgent } from "@/lib/agent-actions";

// Define form state type
type FormState = {
  message: string;
  success: boolean;
};

// Component for creating a new agent
export function AgentRegistrationForm() {
  // Initialize form state with the server action
  const initialState: FormState = { message: '', success: false };
  
  // Create a client wrapper around the server action
  const clientAction = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
    // Call the server action and return a state object
    const result = await registerNewAgent(formData);
    
    if (result.error) {
      return { message: result.error, success: false };
    }
    
    return { message: 'Agent registered successfully!', success: true };
  };
  
  const [state, formAction] = useActionState(clientAction, initialState);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register New Agent</CardTitle>
        <CardDescription>Create your SpaceTraders agent</CardDescription>
      </CardHeader>
      <CardContent>
        {state.message && (
          <div className={`p-3 mb-4 rounded-md ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {state.message}
          </div>
        )}
        
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="symbol">Agent Symbol (Callsign)</Label>
            <Input
              id="symbol"
              name="symbol"
              placeholder="COSMIC_TRADER"
              required
            />
            <p className="text-xs text-muted-foreground">
              Your unique callsign in the SpaceTraders universe. Must be unique,
              3-14 characters, uppercase letters and underscores only.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="faction">Starting Faction</Label>
            {/* For Radix Select, we need to handle the value for form submission. 
                A common way is to use a hidden input that gets updated onValueChange, 
                or ensure the Select component itself correctly integrates with native forms if it's designed to.
                For simplicity here, assuming the `name` prop on Select (if it's a Radix wrapper around native select) or a custom handler works.
                If it's a fully custom Radix Select, `name` attribute on `Select` itself won't submit its value directly.
            */}
            <Select name="faction" required>
              <SelectTrigger id="faction">
                <SelectValue placeholder="Select a faction" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="COSMIC">COSMIC - Cosmic Engineers</SelectItem>
                <SelectItem value="VOID">VOID - Voidfarers</SelectItem>
                <SelectItem value="GALACTIC">GALACTIC - Galactic Federation</SelectItem>
                <SelectItem value="QUANTUM">QUANTUM - Quantum Federation</SelectItem>
                <SelectItem value="DOMINION">DOMINION - Stellar Dominion</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Your starting faction determines your headquarters location.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>

          <Button type="submit" className="w-full">
            Register Agent
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
