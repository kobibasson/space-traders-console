# InstallMount201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | [**Agent**](Agent.md) |  | [default to undefined]
**mounts** | [**Array&lt;ShipMount&gt;**](ShipMount.md) | List of installed mounts after the installation of the new mount. | [default to undefined]
**cargo** | [**ShipCargo**](ShipCargo.md) |  | [default to undefined]
**transaction** | [**ShipModificationTransaction**](ShipModificationTransaction.md) |  | [default to undefined]

## Example

```typescript
import { InstallMount201ResponseData } from 'spacetraders-sdk';

const instance: InstallMount201ResponseData = {
    agent,
    mounts,
    cargo,
    transaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
