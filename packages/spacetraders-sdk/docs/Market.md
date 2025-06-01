# Market

Market details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the market. The symbol is the same as the waypoint where the market is located. | [default to undefined]
**exports** | [**Array&lt;TradeGood&gt;**](TradeGood.md) | The list of goods that are exported from this market. | [default to undefined]
**imports** | [**Array&lt;TradeGood&gt;**](TradeGood.md) | The list of goods that are sought as imports in this market. | [default to undefined]
**exchange** | [**Array&lt;TradeGood&gt;**](TradeGood.md) | The list of goods that are bought and sold between agents at this market. | [default to undefined]
**transactions** | [**Array&lt;MarketTransaction&gt;**](MarketTransaction.md) | The list of recent transactions at this market. Visible only when a ship is present at the market. | [optional] [default to undefined]
**tradeGoods** | [**Array&lt;MarketTradeGood&gt;**](MarketTradeGood.md) | The list of goods that are traded at this market. Visible only when a ship is present at the market. | [optional] [default to undefined]

## Example

```typescript
import { Market } from 'spacetraders-sdk';

const instance: Market = {
    symbol,
    exports,
    imports,
    exchange,
    transactions,
    tradeGoods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
