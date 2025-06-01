# ScannedWaypoint

A waypoint that was scanned by a ship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the waypoint. | [default to undefined]
**type** | [**WaypointType**](WaypointType.md) |  | [default to undefined]
**systemSymbol** | **string** | The symbol of the system. | [default to undefined]
**x** | **number** | Position in the universe in the x axis. | [default to undefined]
**y** | **number** | Position in the universe in the y axis. | [default to undefined]
**orbitals** | [**Array&lt;WaypointOrbital&gt;**](WaypointOrbital.md) | List of waypoints that orbit this waypoint. | [default to undefined]
**faction** | [**WaypointFaction**](WaypointFaction.md) |  | [optional] [default to undefined]
**traits** | [**Array&lt;WaypointTrait&gt;**](WaypointTrait.md) | The traits of the waypoint. | [default to undefined]
**chart** | [**Chart**](Chart.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ScannedWaypoint } from 'spacetraders-sdk';

const instance: ScannedWaypoint = {
    symbol,
    type,
    systemSymbol,
    x,
    y,
    orbitals,
    faction,
    traits,
    chart,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
