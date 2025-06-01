# ConstructionMaterial

The details of the required construction materials for a given waypoint under construction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tradeSymbol** | [**TradeSymbol**](TradeSymbol.md) |  | [default to undefined]
**required** | **number** | The number of units required. | [default to undefined]
**fulfilled** | **number** | The number of units fulfilled toward the required amount. | [default to undefined]

## Example

```typescript
import { ConstructionMaterial } from 'spacetraders-sdk';

const instance: ConstructionMaterial = {
    tradeSymbol,
    required,
    fulfilled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
