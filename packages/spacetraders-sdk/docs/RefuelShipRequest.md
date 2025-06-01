# RefuelShipRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**units** | **number** | The amount of fuel to fill in the ship\&#39;s tanks. When not specified, the ship will be refueled to its maximum fuel capacity. If the amount specified is greater than the ship\&#39;s remaining capacity, the ship will only be refueled to its maximum fuel capacity. The amount specified is not in market units but in ship fuel units. | [optional] [default to undefined]
**fromCargo** | **boolean** | Wether to use the FUEL thats in your cargo or not. Default: false | [optional] [default to undefined]

## Example

```typescript
import { RefuelShipRequest } from 'spacetraders-sdk';

const instance: RefuelShipRequest = {
    units,
    fromCargo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
