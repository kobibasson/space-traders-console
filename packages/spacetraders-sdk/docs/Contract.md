# Contract

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the contract. | [default to undefined]
**factionSymbol** | **string** | The symbol of the faction that this contract is for. | [default to undefined]
**type** | **string** | Type of contract. | [default to undefined]
**terms** | [**ContractTerms**](ContractTerms.md) |  | [default to undefined]
**accepted** | **boolean** | Whether the contract has been accepted by the agent | [default to false]
**fulfilled** | **boolean** | Whether the contract has been fulfilled | [default to false]
**expiration** | **string** | Deprecated in favor of deadlineToAccept | [default to undefined]
**deadlineToAccept** | **string** | The time at which the contract is no longer available to be accepted | [optional] [default to undefined]

## Example

```typescript
import { Contract } from 'spacetraders-sdk';

const instance: Contract = {
    id,
    factionSymbol,
    type,
    terms,
    accepted,
    fulfilled,
    expiration,
    deadlineToAccept,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
