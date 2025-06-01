# Cooldown

A cooldown is a period of time in which a ship cannot perform certain actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipSymbol** | **string** | The symbol of the ship that is on cooldown | [default to undefined]
**totalSeconds** | **number** | The total duration of the cooldown in seconds | [default to undefined]
**remainingSeconds** | **number** | The remaining duration of the cooldown in seconds | [default to undefined]
**expiration** | **string** | The date and time when the cooldown expires in ISO 8601 format | [optional] [default to undefined]

## Example

```typescript
import { Cooldown } from 'spacetraders-sdk';

const instance: Cooldown = {
    shipSymbol,
    totalSeconds,
    remainingSeconds,
    expiration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
