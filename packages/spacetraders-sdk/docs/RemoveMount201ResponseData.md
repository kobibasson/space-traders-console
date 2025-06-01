# RemoveMount201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | [**Agent**](Agent.md) |  | [default to undefined]
**mounts** | [**Array&lt;ShipMount&gt;**](ShipMount.md) | List of installed mounts after the removal of the selected mount. | [default to undefined]
**cargo** | [**ShipCargo**](ShipCargo.md) |  | [default to undefined]
**transaction** | [**ShipModificationTransaction**](ShipModificationTransaction.md) |  | [default to undefined]

## Example

```typescript
import { RemoveMount201ResponseData } from 'spacetraders-sdk';

const instance: RemoveMount201ResponseData = {
    agent,
    mounts,
    cargo,
    transaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
