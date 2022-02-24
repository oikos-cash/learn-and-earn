---
title: "Liquidations"
metaTitle: "Liquidations FAQ"
metaDescription: "How liquidations work, risks for stakers, how much liquidators receive"
---
### Introduction

The liquidation mechanism is an important component that plays a central role in the protocol’s stability. Apart from the issuance c-ratio, it ensures synth holders that their holdings are protected in case of a significant price shock. Liquidation consists of redeeming synths for staked OKS when the issuer collateralization ratio falls below 200%. This FAQ is meant to explain in detail how the mechanism works.

### Benefits of adding liquidation to the system
- Liquidation ensures intrinsic value for the Synths, by enabling direct redemption of the underlying collateral. This gives synth holders confidence that the assets they hold can be directly exchanged for the OKS backing them, therefore, maintaining the active collateralization ratio at the issuance ratio level.
- This, in turn, creates stronger incentives for a healthy active collateralization ratio (visible on our [Stats page](https://stats.oikos.cash)), as other participants can actively improve the active collateralization ratio by directly redeeming undercollateralized Synths for OKS.
- It provides a solution to staking wallets that have been abandoned or whose private keys have been lost, as they will no longer drag down the active collateralization ratio.
![Liquidations Dashboard](https://miro.medium.com/max/700/1*p4OsdgG3bqKAX5_Or-WKSA.png)
 *Source: [Oikos Stats](https://stats.oikos.cash)*

### How will liquidation work in practice?
- If a staker’s collateralization ratio drops below 200%, then their wallet will be flagged as at-risk and subject to a **14 days** time delay. During this period, they can either add more OKS collateral or burn oUSD to increase their collateralization ratio back to 500%.
- If, after the two-week time delay period, the OKS staker’s collateralization ratio is still below the target of 200%, their OKS can be liquidated.
- Anyone (e.g., William) can contribute to the liquidation of an under-collateralized staker (e.g., Pedro). William calls the liquidateDelinquentAccount function, which burns his Synths, unlocks some of Pedro’s staked OKS, and sends this OKS to William. These amounts are determined by the liquidation penalty, which determines what kind of bonus OKS William receives for liquidating Pedro.
- Pedro can only be liquidated up to a collateralization ratio of 500%.

### What are the risks for stakers?
- The risk for stakers is that should they fail to manage their collateralization ratio, then if it crosses the liquidation threshold, they have a period of time **(currently 14 days)** to fix it before they risk losing some of their OKS collateral.
- If the OKS price could somehow be manipulated to decrease dramatically, it would need to be kept low for 14 days for the staker’s OKS to be at risk.

### How much OKS do liquidators receive?
Let us assume the following scenario:
- Target collateralization-ratio: 500%
- Liquidation ratio: 200%
- Liquidation penalty: 10%
- Liquidation delay: 14 days
- OKS value: $0.005

Pedro has staked **250,000 OKS** and his collateralization ratio reaches 200%, and he has a debt of 333 oUSD.
Pedro does not manage his C-Ratio during this time, so after 14 days his collateralization ratio is still at 200%.
To work out how much oUSD will fix this account, he can use this formula: 

| O = (r * D — V) / (r — (1 + P) |
|-------|
where:
- **O** = oUSD debt required to burn to fully fix Pedro’s collateralization ratio
- **r** = target C-Ratio *(e.g., 5)*
- **D** = debt balance (e.g., 333)
- **V** = value in USD of staked OKS (e.g., $1250)
- **p** = liquidation penalty (e.g. 0.1)

This results in **106.4102564102564 oUSD**. William can use 106.4102564102564 oUSD to fix Pedro’s collateralization ratio to 500%, which gets burned to increase his collateralization ratio to 500%.
The OKS he receives is calculated using this formula: 

| R = (O * (1 + P)) / Q |
|-------|
where:
- **R** = OKS liquidation reward
- **O** = oUSD debt required to burn to fully fix Pedro’s collateralization ratio (e.g., 106.410256410)
- **P** = liquidation penalty (e.g., 0.1)
- **Q** = OKS Market Price ($0.005)

This results in **23,410.2564102 of Pedro’s OKS** going to William. In this scenario, Pedro’s debt is reduced to 226 oUSD, and he still has 226,000 OKS staked, with a collateralization ratio of 500%.

We hope this FAQ has cleared some of your doubts about the liquidation mechanism. 

*If you have got any more questions, please come join us in our [Telegram group](https://t.me/oikoscash).*