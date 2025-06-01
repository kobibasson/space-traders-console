# ShipFuel

Details of the ship\'s fuel tanks including how much fuel was consumed during the last transit or action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **number** | The current amount of fuel in the ship\&#39;s tanks. | [default to undefined]
**capacity** | **number** | The maximum amount of fuel the ship\&#39;s tanks can hold. | [default to undefined]
**consumed** | [**ShipFuelConsumed**](ShipFuelConsumed.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ShipFuel } from 'spacetraders-sdk';

const instance: ShipFuel = {
    current,
    capacity,
    consumed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
