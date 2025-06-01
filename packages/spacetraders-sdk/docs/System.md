# System

System details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the system. | [default to undefined]
**sectorSymbol** | **string** | The symbol of the sector. | [default to undefined]
**constellation** | **string** | The constellation that the system is part of. | [optional] [default to undefined]
**name** | **string** | The name of the system. | [optional] [default to undefined]
**type** | [**SystemType**](SystemType.md) |  | [default to undefined]
**x** | **number** | Relative position of the system in the sector in the x axis. | [default to undefined]
**y** | **number** | Relative position of the system in the sector in the y axis. | [default to undefined]
**waypoints** | [**Array&lt;SystemWaypoint&gt;**](SystemWaypoint.md) | Waypoints in this system. | [default to undefined]
**factions** | [**Array&lt;SystemFaction&gt;**](SystemFaction.md) | Factions that control this system. | [default to undefined]

## Example

```typescript
import { System } from 'spacetraders-sdk';

const instance: System = {
    symbol,
    sectorSymbol,
    constellation,
    name,
    type,
    x,
    y,
    waypoints,
    factions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
