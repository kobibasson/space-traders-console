# Chart

The chart of a system or waypoint, which makes the location visible to other agents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**waypointSymbol** | **string** | The symbol of the waypoint. | [optional] [default to undefined]
**submittedBy** | **string** | The agent that submitted the chart for this waypoint. | [optional] [default to undefined]
**submittedOn** | **string** | The time the chart for this waypoint was submitted. | [optional] [default to undefined]

## Example

```typescript
import { Chart } from 'spacetraders-sdk';

const instance: Chart = {
    waypointSymbol,
    submittedBy,
    submittedOn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
