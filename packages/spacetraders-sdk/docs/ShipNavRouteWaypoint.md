# ShipNavRouteWaypoint

The destination or departure of a ships nav route.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the waypoint. | [default to undefined]
**type** | [**WaypointType**](WaypointType.md) |  | [default to undefined]
**systemSymbol** | **string** | The symbol of the system. | [default to undefined]
**x** | **number** | Position in the universe in the x axis. | [default to undefined]
**y** | **number** | Position in the universe in the y axis. | [default to undefined]

## Example

```typescript
import { ShipNavRouteWaypoint } from 'spacetraders-sdk';

const instance: ShipNavRouteWaypoint = {
    symbol,
    type,
    systemSymbol,
    x,
    y,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
