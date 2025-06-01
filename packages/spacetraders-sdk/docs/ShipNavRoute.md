# ShipNavRoute

The routing information for the ship\'s most recent transit or current location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ShipNavRouteWaypoint**](ShipNavRouteWaypoint.md) |  | [default to undefined]
**origin** | [**ShipNavRouteWaypoint**](ShipNavRouteWaypoint.md) |  | [default to undefined]
**departureTime** | **string** | The date time of the ship\&#39;s departure. | [default to undefined]
**arrival** | **string** | The date time of the ship\&#39;s arrival. If the ship is in-transit, this is the expected time of arrival. | [default to undefined]

## Example

```typescript
import { ShipNavRoute } from 'spacetraders-sdk';

const instance: ShipNavRoute = {
    destination,
    origin,
    departureTime,
    arrival,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
