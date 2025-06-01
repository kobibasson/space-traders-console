# ContractTerms

The terms to fulfill the contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deadline** | **string** | The deadline for the contract. | [default to undefined]
**payment** | [**ContractPayment**](ContractPayment.md) |  | [default to undefined]
**deliver** | [**Array&lt;ContractDeliverGood&gt;**](ContractDeliverGood.md) | The cargo that needs to be delivered to fulfill the contract. | [optional] [default to undefined]

## Example

```typescript
import { ContractTerms } from 'spacetraders-sdk';

const instance: ContractTerms = {
    deadline,
    payment,
    deliver,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
