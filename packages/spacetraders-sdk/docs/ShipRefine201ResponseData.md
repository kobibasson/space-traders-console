# ShipRefine201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargo** | [**ShipCargo**](ShipCargo.md) |  | [default to undefined]
**cooldown** | [**Cooldown**](Cooldown.md) |  | [default to undefined]
**produced** | [**Array&lt;ShipRefine201ResponseDataProducedInner&gt;**](ShipRefine201ResponseDataProducedInner.md) | Goods that were produced by this refining process. | [default to undefined]
**consumed** | [**Array&lt;ShipRefine201ResponseDataProducedInner&gt;**](ShipRefine201ResponseDataProducedInner.md) | Goods that were consumed during this refining process. | [default to undefined]

## Example

```typescript
import { ShipRefine201ResponseData } from 'spacetraders-sdk';

const instance: ShipRefine201ResponseData = {
    cargo,
    cooldown,
    produced,
    consumed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
