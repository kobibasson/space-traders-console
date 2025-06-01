# Shipyard

Shipyard details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the shipyard. The symbol is the same as the waypoint where the shipyard is located. | [default to undefined]
**shipTypes** | [**Array&lt;ShipyardShipTypesInner&gt;**](ShipyardShipTypesInner.md) | The list of ship types available for purchase at this shipyard. | [default to undefined]
**transactions** | [**Array&lt;ShipyardTransaction&gt;**](ShipyardTransaction.md) | The list of recent transactions at this shipyard. | [optional] [default to undefined]
**ships** | [**Array&lt;ShipyardShip&gt;**](ShipyardShip.md) | The ships that are currently available for purchase at the shipyard. | [optional] [default to undefined]
**modificationsFee** | **number** | The fee to modify a ship at this shipyard. This includes installing or removing modules and mounts on a ship. In the case of mounts, the fee is a flat rate per mount. In the case of modules, the fee is per slot the module occupies. | [default to undefined]

## Example

```typescript
import { Shipyard } from 'spacetraders-sdk';

const instance: Shipyard = {
    symbol,
    shipTypes,
    transactions,
    ships,
    modificationsFee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
