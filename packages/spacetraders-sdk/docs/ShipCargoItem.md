# ShipCargoItem

The type of cargo item and the number of units.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | [**TradeSymbol**](TradeSymbol.md) |  | [default to undefined]
**name** | **string** | The name of the cargo item type. | [default to undefined]
**description** | **string** | The description of the cargo item type. | [default to undefined]
**units** | **number** | The number of units of the cargo item. | [default to undefined]

## Example

```typescript
import { ShipCargoItem } from 'spacetraders-sdk';

const instance: ShipCargoItem = {
    symbol,
    name,
    description,
    units,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
