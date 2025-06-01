# ShipNav

The navigation information of the ship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemSymbol** | **string** | The symbol of the system. | [default to undefined]
**waypointSymbol** | **string** | The symbol of the waypoint. | [default to undefined]
**route** | [**ShipNavRoute**](ShipNavRoute.md) |  | [default to undefined]
**status** | [**ShipNavStatus**](ShipNavStatus.md) |  | [default to undefined]
**flightMode** | [**ShipNavFlightMode**](ShipNavFlightMode.md) |  | [default to undefined]

## Example

```typescript
import { ShipNav } from 'spacetraders-sdk';

const instance: ShipNav = {
    systemSymbol,
    waypointSymbol,
    route,
    status,
    flightMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
