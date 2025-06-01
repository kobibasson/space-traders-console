# DeliverContractRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipSymbol** | **string** | Symbol of a ship located in the destination to deliver a contract and that has a good to deliver in its cargo. | [default to undefined]
**tradeSymbol** | **string** | The symbol of the good to deliver. | [default to undefined]
**units** | **number** | Amount of units to deliver. | [default to undefined]

## Example

```typescript
import { DeliverContractRequest } from 'spacetraders-sdk';

const instance: DeliverContractRequest = {
    shipSymbol,
    tradeSymbol,
    units,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
