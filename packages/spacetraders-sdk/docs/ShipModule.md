# ShipModule

A module can be installed in a ship and provides a set of capabilities such as storage space or quarters for crew. Module installations are permanent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the module. | [default to undefined]
**capacity** | **number** | Modules that provide capacity, such as cargo hold or crew quarters will show this value to denote how much of a bonus the module grants. | [optional] [default to undefined]
**range** | **number** | Modules that have a range will such as a sensor array show this value to denote how far can the module reach with its capabilities. | [optional] [default to undefined]
**name** | **string** | Name of this module. | [default to undefined]
**description** | **string** | Description of this module. | [default to undefined]
**requirements** | [**ShipRequirements**](ShipRequirements.md) |  | [default to undefined]

## Example

```typescript
import { ShipModule } from 'spacetraders-sdk';

const instance: ShipModule = {
    symbol,
    capacity,
    range,
    name,
    description,
    requirements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
