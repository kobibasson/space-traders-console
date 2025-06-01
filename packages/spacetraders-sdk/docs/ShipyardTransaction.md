# ShipyardTransaction

Results of a transaction with a shipyard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**waypointSymbol** | **string** | The symbol of the waypoint. | [default to undefined]
**shipSymbol** | **string** | The symbol of the ship type (e.g. SHIP_MINING_DRONE) that was the subject of the transaction. Contrary to what the name implies, this is NOT the symbol of the ship that was purchased. | [default to undefined]
**shipType** | **string** | The symbol of the ship type (e.g. SHIP_MINING_DRONE) that was the subject of the transaction. | [default to undefined]
**price** | **number** | The price of the transaction. | [default to undefined]
**agentSymbol** | **string** | The symbol of the agent that made the transaction. | [default to undefined]
**timestamp** | **string** | The timestamp of the transaction. | [default to undefined]

## Example

```typescript
import { ShipyardTransaction } from 'spacetraders-sdk';

const instance: ShipyardTransaction = {
    waypointSymbol,
    shipSymbol,
    shipType,
    price,
    agentSymbol,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
