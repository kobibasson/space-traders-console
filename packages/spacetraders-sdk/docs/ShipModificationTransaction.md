# ShipModificationTransaction

Result of a transaction for a ship modification, such as installing a mount or a module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**waypointSymbol** | **string** | The symbol of the waypoint where the transaction took place. | [default to undefined]
**shipSymbol** | **string** | The symbol of the ship that made the transaction. | [default to undefined]
**tradeSymbol** | **string** | The symbol of the trade good. | [default to undefined]
**totalPrice** | **number** | The total price of the transaction. | [default to undefined]
**timestamp** | **string** | The timestamp of the transaction. | [default to undefined]

## Example

```typescript
import { ShipModificationTransaction } from 'spacetraders-sdk';

const instance: ShipModificationTransaction = {
    waypointSymbol,
    shipSymbol,
    tradeSymbol,
    totalPrice,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
