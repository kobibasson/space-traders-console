# MarketTransaction

Result of a transaction with a market.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**waypointSymbol** | **string** | The symbol of the waypoint. | [default to undefined]
**shipSymbol** | **string** | The symbol of the ship that made the transaction. | [default to undefined]
**tradeSymbol** | **string** | The symbol of the trade good. | [default to undefined]
**type** | **string** | The type of transaction. | [default to undefined]
**units** | **number** | The number of units of the transaction. | [default to undefined]
**pricePerUnit** | **number** | The price per unit of the transaction. | [default to undefined]
**totalPrice** | **number** | The total price of the transaction. | [default to undefined]
**timestamp** | **string** | The timestamp of the transaction. | [default to undefined]

## Example

```typescript
import { MarketTransaction } from 'spacetraders-sdk';

const instance: MarketTransaction = {
    waypointSymbol,
    shipSymbol,
    tradeSymbol,
    type,
    units,
    pricePerUnit,
    totalPrice,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
