# ShipCargo

Ship cargo details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **number** | The max number of items that can be stored in the cargo hold. | [default to undefined]
**units** | **number** | The number of items currently stored in the cargo hold. | [default to undefined]
**inventory** | [**Array&lt;ShipCargoItem&gt;**](ShipCargoItem.md) | The items currently in the cargo hold. | [default to undefined]

## Example

```typescript
import { ShipCargo } from 'spacetraders-sdk';

const instance: ShipCargo = {
    capacity,
    units,
    inventory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
