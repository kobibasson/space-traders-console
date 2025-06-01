# ScannedShip

The ship that was scanned. Details include information about the ship that could be detected by the scanner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The globally unique identifier of the ship. | [default to undefined]
**registration** | [**ShipRegistration**](ShipRegistration.md) |  | [default to undefined]
**nav** | [**ShipNav**](ShipNav.md) |  | [default to undefined]
**frame** | [**ScannedShipFrame**](ScannedShipFrame.md) |  | [optional] [default to undefined]
**reactor** | [**ScannedShipReactor**](ScannedShipReactor.md) |  | [optional] [default to undefined]
**engine** | [**ScannedShipEngine**](ScannedShipEngine.md) |  | [default to undefined]
**mounts** | [**Array&lt;ScannedShipMountsInner&gt;**](ScannedShipMountsInner.md) | List of mounts installed in the ship. | [optional] [default to undefined]

## Example

```typescript
import { ScannedShip } from 'spacetraders-sdk';

const instance: ScannedShip = {
    symbol,
    registration,
    nav,
    frame,
    reactor,
    engine,
    mounts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
