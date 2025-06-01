# Agent

Agent details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** | Account ID that is tied to this agent. Only included on your own agent. | [optional] [default to undefined]
**symbol** | **string** | Symbol of the agent. | [default to undefined]
**headquarters** | **string** | The headquarters of the agent. | [default to undefined]
**credits** | **number** | The number of credits the agent has available. Credits can be negative if funds have been overdrawn. | [default to undefined]
**startingFaction** | **string** | The faction the agent started with. | [default to undefined]
**shipCount** | **number** | How many ships are owned by the agent. | [default to undefined]

## Example

```typescript
import { Agent } from 'spacetraders-sdk';

const instance: Agent = {
    accountId,
    symbol,
    headquarters,
    credits,
    startingFaction,
    shipCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
