# ShipReactor

The reactor of the ship. The reactor is responsible for powering the ship\'s systems and weapons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol of the reactor. | [default to undefined]
**name** | **string** | Name of the reactor. | [default to undefined]
**description** | **string** | Description of the reactor. | [default to undefined]
**condition** | **number** | The repairable condition of a component. A value of 0 indicates the component needs significant repairs, while a value of 1 indicates the component is in near perfect condition. As the condition of a component is repaired, the overall integrity of the component decreases. | [default to undefined]
**integrity** | **number** | The overall integrity of the component, which determines the performance of the component. A value of 0 indicates that the component is almost completely degraded, while a value of 1 indicates that the component is in near perfect condition. The integrity of the component is non-repairable, and represents permanent wear over time. | [default to undefined]
**powerOutput** | **number** | The amount of power provided by this reactor. The more power a reactor provides to the ship, the lower the cooldown it gets when using a module or mount that taxes the ship\&#39;s power. | [default to undefined]
**requirements** | [**ShipRequirements**](ShipRequirements.md) |  | [default to undefined]
**quality** | **number** | The overall quality of the component, which determines the quality of the component. High quality components return more ships parts and ship plating when a ship is scrapped. But also require more of these parts to repair. This is transparent to the player, as the parts are bought from/sold to the marketplace. | [default to undefined]

## Example

```typescript
import { ShipReactor } from 'spacetraders-sdk';

const instance: ShipReactor = {
    symbol,
    name,
    description,
    condition,
    integrity,
    powerOutput,
    requirements,
    quality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
