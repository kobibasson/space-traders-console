# Waypoint

A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the waypoint. | [default to undefined]
**type** | [**WaypointType**](WaypointType.md) |  | [default to undefined]
**systemSymbol** | **string** | The symbol of the system. | [default to undefined]
**x** | **number** | Relative position of the waypoint on the system\&#39;s x axis. This is not an absolute position in the universe. | [default to undefined]
**y** | **number** | Relative position of the waypoint on the system\&#39;s y axis. This is not an absolute position in the universe. | [default to undefined]
**orbitals** | [**Array&lt;WaypointOrbital&gt;**](WaypointOrbital.md) | Waypoints that orbit this waypoint. | [default to undefined]
**orbits** | **string** | The symbol of the parent waypoint, if this waypoint is in orbit around another waypoint. Otherwise this value is undefined. | [optional] [default to undefined]
**faction** | [**WaypointFaction**](WaypointFaction.md) |  | [optional] [default to undefined]
**traits** | [**Array&lt;WaypointTrait&gt;**](WaypointTrait.md) | The traits of the waypoint. | [default to undefined]
**modifiers** | [**Array&lt;WaypointModifier&gt;**](WaypointModifier.md) | The modifiers of the waypoint. | [optional] [default to undefined]
**chart** | [**Chart**](Chart.md) |  | [optional] [default to undefined]
**isUnderConstruction** | **boolean** | True if the waypoint is under construction. | [default to undefined]

## Example

```typescript
import { Waypoint } from 'spacetraders-sdk';

const instance: Waypoint = {
    symbol,
    type,
    systemSymbol,
    x,
    y,
    orbitals,
    orbits,
    faction,
    traits,
    modifiers,
    chart,
    isUnderConstruction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
