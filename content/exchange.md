---
title: "Exchange"
metaTitle: "How to use Oikos Exchange"
metaDescription: "How to use Oikos Exchange"
---
### Login

![Exchange Login](exchangeLogin.gif)
*Metamask is the preferred web3 wallet*

To get started, you need a BEP-20 compatible wallet. Open the official [Oikos Exchange](https://oikos.exchange/) portal and click on the “Connect wallet” button in the upper right corner of the page.

If you’re new to the Oikos Exchange, you can start trading through the following methods:
- Purchase oUSD on [Derive Finance](https://derive.fi/)
- Purchase oUSD with BNB on [PancakeSwap](https://pancakeswap.finance/swap/0x6bf2be9468314281cd28a94c35f967cafd388325?inputCurrency=BNB)
- Borrow oBNB via the [Oikos Exchange Loans](https://oikos.exchange/#/loans)

### Markets

![Exchange Markets](exchangeMarkets.gif)
*There are three base synths available from which users can select the desired one*

Users can see the different trading pairs available on Oikos Exchange from the Market tab. You can easily see the basic trading details of any Synth pair like last traded price, 24-hour low, 24-hour high, 24-hour volume, etc.

### Synths

![Exchange Synths](exchangeSynths.gif)
*Inside this section users can view all the assets available*

The “Synth” section has a full overview of all the assets available on the platform.

### Trade

![Exchange Trade](exchangeTrade2.gif)
*Here you can find all the graphs and charts related to the market*

Click on the “Trade” button to view all the chart information. You can switch between the 1/4/24hrs and 1 week/1 month schedules to explore changes in price. To view all the pairs, click on the button in the upper left corner of the “Trade” page. At the moment of writing this, there are 11 pairs available. In the upper right corner of the “Trade” section, you can see information about your wallet: the estimated wallet value and the amount of Synth available. The information on all your orders is located below in the “Your orders” section.

![Exchange Trade Synth](exchangeTradeSynthWOusd.gif)
*Fees are distributed among the stakers who are providing liquidity*

Let’s choose the oUSD/oBNB pair. In the upper right corner, select the amount of oUSD you wish to swap or you can also choose to swap 25% / 50% / 75% / 100% of your wallet’s balance. After you type in the amount of oUSD, you can find out how much you’ll get in oBNB. The fee users pay is distributed among the stakers on the Oikos Minter who are providing liquidity. You are free to change the Gas price by clicking on the “Edit” button.The Custom Gas price is chosen by default. So if you are okay with all the commissions, just click on the “Confirm trade” button.

### Assets

![Exchange Assets](exchangeAssets.gif)
*Users can see their asset distribution and more information here*

Check the details of your assets from the Assets tab.

### Fee Reclamations

After every trade on the Oikos Exchange there is a waiting period on interacting with the Synth they have just traded into (burn, transfer, etc.). This period serves as a buffer for oracles to verify prices and confirm if the user owes, or is owed, Synths from the trade.

If the trade results in an outstanding balance, the next time the user exchanges, transfers or burns that Synth, the `settle` function is called to settle the debt. If they are owed, they receive Synths, otherwise the remainder is paid to the feePool from their Synths the next time they burn, exchange or transfer. 

*Note:*
*The transfer function on a Synth will never settle automatically; `settle` must first be called, or `transferAndSettle`.*