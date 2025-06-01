# ShipRequirements

The requirements for installation on a ship

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**power** | **number** | The amount of power required from the reactor. | [optional] [default to undefined]
**crew** | **number** | The number of crew required for operation. | [optional] [default to undefined]
**slots** | **number** | The number of module slots required for installation. | [optional] [default to undefined]

## Example

```typescript
import { ShipRequirements } from 'spacetraders-sdk';

const instance: ShipRequirements = {
    power,
    crew,
    slots,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
