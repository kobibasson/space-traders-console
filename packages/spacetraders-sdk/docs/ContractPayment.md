# ContractPayment

Payments for the contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onAccepted** | **number** | The amount of credits received up front for accepting the contract. | [default to undefined]
**onFulfilled** | **number** | The amount of credits received when the contract is fulfilled. | [default to undefined]

## Example

```typescript
import { ContractPayment } from 'spacetraders-sdk';

const instance: ContractPayment = {
    onAccepted,
    onFulfilled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
