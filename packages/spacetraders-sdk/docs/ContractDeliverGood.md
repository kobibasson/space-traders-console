# ContractDeliverGood

The details of a delivery contract. Includes the type of good, units needed, and the destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tradeSymbol** | **string** | The symbol of the trade good to deliver. | [default to undefined]
**destinationSymbol** | **string** | The destination where goods need to be delivered. | [default to undefined]
**unitsRequired** | **number** | The number of units that need to be delivered on this contract. | [default to undefined]
**unitsFulfilled** | **number** | The number of units fulfilled on this contract. | [default to undefined]

## Example

```typescript
import { ContractDeliverGood } from 'spacetraders-sdk';

const instance: ContractDeliverGood = {
    tradeSymbol,
    destinationSymbol,
    unitsRequired,
    unitsFulfilled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
