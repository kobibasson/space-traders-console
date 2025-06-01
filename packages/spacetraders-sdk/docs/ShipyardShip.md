# ShipyardShip



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ShipType**](ShipType.md) |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**supply** | [**SupplyLevel**](SupplyLevel.md) |  | [default to undefined]
**activity** | [**ActivityLevel**](ActivityLevel.md) |  | [optional] [default to undefined]
**purchasePrice** | **number** |  | [default to undefined]
**frame** | [**ShipFrame**](ShipFrame.md) |  | [default to undefined]
**reactor** | [**ShipReactor**](ShipReactor.md) |  | [default to undefined]
**engine** | [**ShipEngine**](ShipEngine.md) |  | [default to undefined]
**modules** | [**Array&lt;ShipModule&gt;**](ShipModule.md) |  | [default to undefined]
**mounts** | [**Array&lt;ShipMount&gt;**](ShipMount.md) |  | [default to undefined]
**crew** | [**ShipyardShipCrew**](ShipyardShipCrew.md) |  | [default to undefined]

## Example

```typescript
import { ShipyardShip } from 'spacetraders-sdk';

const instance: ShipyardShip = {
    type,
    name,
    description,
    supply,
    activity,
    purchasePrice,
    frame,
    reactor,
    engine,
    modules,
    mounts,
    crew,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
