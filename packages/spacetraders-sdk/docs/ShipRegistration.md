# ShipRegistration

The public registration information of the ship

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The agent\&#39;s registered name of the ship | [default to undefined]
**factionSymbol** | **string** | The symbol of the faction the ship is registered with | [default to undefined]
**role** | [**ShipRole**](ShipRole.md) |  | [default to undefined]

## Example

```typescript
import { ShipRegistration } from 'spacetraders-sdk';

const instance: ShipRegistration = {
    name,
    factionSymbol,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
