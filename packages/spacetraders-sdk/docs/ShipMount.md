# ShipMount

A mount is installed on the exterier of a ship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbo of this mount. | [default to undefined]
**name** | **string** | Name of this mount. | [default to undefined]
**description** | **string** | Description of this mount. | [optional] [default to undefined]
**strength** | **number** | Mounts that have this value, such as mining lasers, denote how powerful this mount\&#39;s capabilities are. | [optional] [default to undefined]
**deposits** | **Array&lt;string&gt;** | Mounts that have this value denote what goods can be produced from using the mount. | [optional] [default to undefined]
**requirements** | [**ShipRequirements**](ShipRequirements.md) |  | [default to undefined]

## Example

```typescript
import { ShipMount } from 'spacetraders-sdk';

const instance: ShipMount = {
    symbol,
    name,
    description,
    strength,
    deposits,
    requirements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
