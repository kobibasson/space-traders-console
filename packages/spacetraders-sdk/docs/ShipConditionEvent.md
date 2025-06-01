# ShipConditionEvent

An event that represents damage or wear to a ship\'s reactor, frame, or engine, reducing the condition of the ship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** |  | [default to undefined]
**component** | **string** |  | [default to undefined]
**name** | **string** | The name of the event. | [default to undefined]
**description** | **string** | A description of the event. | [default to undefined]

## Example

```typescript
import { ShipConditionEvent } from 'spacetraders-sdk';

const instance: ShipConditionEvent = {
    symbol,
    component,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
