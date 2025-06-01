# SystemWaypoint

Waypoint details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the waypoint. | [default to undefined]
**type** | [**WaypointType**](WaypointType.md) |  | [default to undefined]
**x** | **number** | Relative position of the waypoint on the system\&#39;s x axis. This is not an absolute position in the universe. | [default to undefined]
**y** | **number** | Relative position of the waypoint on the system\&#39;s y axis. This is not an absolute position in the universe. | [default to undefined]
**orbitals** | [**Array&lt;WaypointOrbital&gt;**](WaypointOrbital.md) | Waypoints that orbit this waypoint. | [default to undefined]
**orbits** | **string** | The symbol of the parent waypoint, if this waypoint is in orbit around another waypoint. Otherwise this value is undefined. | [optional] [default to undefined]

## Example

```typescript
import { SystemWaypoint } from 'spacetraders-sdk';

const instance: SystemWaypoint = {
    symbol,
    type,
    x,
    y,
    orbitals,
    orbits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
