# ShipFuelConsumed

An object that only shows up when an action has consumed fuel in the process. Shows the fuel consumption data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount of fuel consumed by the most recent transit or action. | [default to undefined]
**timestamp** | **string** | The time at which the fuel was consumed. | [default to undefined]

## Example

```typescript
import { ShipFuelConsumed } from 'spacetraders-sdk';

const instance: ShipFuelConsumed = {
    amount,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
