# Ship

Ship details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The globally unique identifier of the ship in the following format: &#x60;[AGENT_SYMBOL]-[HEX_ID]&#x60; | [default to undefined]
**registration** | [**ShipRegistration**](ShipRegistration.md) |  | [default to undefined]
**nav** | [**ShipNav**](ShipNav.md) |  | [default to undefined]
**crew** | [**ShipCrew**](ShipCrew.md) |  | [default to undefined]
**frame** | [**ShipFrame**](ShipFrame.md) |  | [default to undefined]
**reactor** | [**ShipReactor**](ShipReactor.md) |  | [default to undefined]
**engine** | [**ShipEngine**](ShipEngine.md) |  | [default to undefined]
**cooldown** | [**Cooldown**](Cooldown.md) |  | [default to undefined]
**modules** | [**Array&lt;ShipModule&gt;**](ShipModule.md) | Modules installed in this ship. | [default to undefined]
**mounts** | [**Array&lt;ShipMount&gt;**](ShipMount.md) | Mounts installed in this ship. | [default to undefined]
**cargo** | [**ShipCargo**](ShipCargo.md) |  | [default to undefined]
**fuel** | [**ShipFuel**](ShipFuel.md) |  | [default to undefined]

## Example

```typescript
import { Ship } from 'spacetraders-sdk';

const instance: Ship = {
    symbol,
    registration,
    nav,
    crew,
    frame,
    reactor,
    engine,
    cooldown,
    modules,
    mounts,
    cargo,
    fuel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
