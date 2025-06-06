# ShipFrame

The frame of the ship. The frame determines the number of modules and mounting points of the ship, as well as base fuel capacity. As the condition of the frame takes more wear, the ship will become more sluggish and less maneuverable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol of the frame. | [default to undefined]
**name** | **string** | Name of the frame. | [default to undefined]
**description** | **string** | Description of the frame. | [default to undefined]
**condition** | **number** | The repairable condition of a component. A value of 0 indicates the component needs significant repairs, while a value of 1 indicates the component is in near perfect condition. As the condition of a component is repaired, the overall integrity of the component decreases. | [default to undefined]
**integrity** | **number** | The overall integrity of the component, which determines the performance of the component. A value of 0 indicates that the component is almost completely degraded, while a value of 1 indicates that the component is in near perfect condition. The integrity of the component is non-repairable, and represents permanent wear over time. | [default to undefined]
**moduleSlots** | **number** | The amount of slots that can be dedicated to modules installed in the ship. Each installed module take up a number of slots, and once there are no more slots, no new modules can be installed. | [default to undefined]
**mountingPoints** | **number** | The amount of slots that can be dedicated to mounts installed in the ship. Each installed mount takes up a number of points, and once there are no more points remaining, no new mounts can be installed. | [default to undefined]
**fuelCapacity** | **number** | The maximum amount of fuel that can be stored in this ship. When refueling, the ship will be refueled to this amount. | [default to undefined]
**requirements** | [**ShipRequirements**](ShipRequirements.md) |  | [default to undefined]
**quality** | **number** | The overall quality of the component, which determines the quality of the component. High quality components return more ships parts and ship plating when a ship is scrapped. But also require more of these parts to repair. This is transparent to the player, as the parts are bought from/sold to the marketplace. | [default to undefined]

## Example

```typescript
import { ShipFrame } from 'spacetraders-sdk';

const instance: ShipFrame = {
    symbol,
    name,
    description,
    condition,
    integrity,
    moduleSlots,
    mountingPoints,
    fuelCapacity,
    requirements,
    quality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
