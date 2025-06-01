# MarketTradeGood


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | [**TradeSymbol**](TradeSymbol.md) |  | [default to undefined]
**type** | **string** | The type of trade good (export, import, or exchange). | [default to undefined]
**tradeVolume** | **number** | This is the maximum number of units that can be purchased or sold at this market in a single trade for this good. Trade volume also gives an indication of price volatility. A market with a low trade volume will have large price swings, while high trade volume will be more resilient to price changes. | [default to undefined]
**supply** | [**SupplyLevel**](SupplyLevel.md) |  | [default to undefined]
**activity** | [**ActivityLevel**](ActivityLevel.md) |  | [optional] [default to undefined]
**purchasePrice** | **number** | The price at which this good can be purchased from the market. | [default to undefined]
**sellPrice** | **number** | The price at which this good can be sold to the market. | [default to undefined]

## Example

```typescript
import { MarketTradeGood } from 'spacetraders-sdk';

const instance: MarketTradeGood = {
    symbol,
    type,
    tradeVolume,
    supply,
    activity,
    purchasePrice,
    sellPrice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
