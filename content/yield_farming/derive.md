---
title: "Derive Finance"
metaTitle: "Yield Farming with Derive and Oikos"
metaDescription: "Yield Farming with Derive and Oikos"
---
### Providing Liquidity on Derive Finance
Users need to hold oUSD and one or more of the other supported stablecoins (DAI, USDC, USDT) in the same wallet. Users can acquire oUSD by: 
- Staking OKS on the [Oikos Minter](https://minter.oikos.cash/)
- With BNB directly on [PancakeSwap](https://pancakeswap.com/)
- In the stablecoin (USDC, DAI, USDT, OUSD) DEX [Derive Finance](https://derive.fi/) 
### Entering the LP Pool
![LP Derive](minterLPDeriveAddLiquidity.gif)
*Derive.fi currently supports MetaMask and BSCWallet*

After acquiring oUSD, navigate to Derive Finance, and connect to the supported wallet which was used to acquire oUSD. Once connected, click ‘Deposit’ and click ‘Stablecoin Pool’ to view token balances and a breakdown for adding liquidity. Selecting ‘Deposit’ will trigger an approval notification for oUSD and each stablecoin selected.

![LP Derive](minterLPDeriveAddLiquidity2.gif)
*If successful, users will receive the proper confirmation*

After confirming these transactions allowing Derive Finance to transfer the target assets out of your wallet, another prompt will automatically be followed with a ‘contract interaction’ notification. Confirm this transaction for the assets to be deposited in the Derive smart contracts in exchange for the DeriveUSD LP tokens, which are automatically deposited into the connected wallet.
### Staking LP Token
![Derive First Time](minterLPDeriveFirstTime.gif)
*The rewards contract only needs to be approved the first time*

The next step is very similar to the [PancakeSwap tutorial](/liquidity/pancake). Head over to https://minter.oikos.cash/ and connect with the same wallet. Click the ‘LP Rewards’ tab in the top right and select the Stablecoin (oUSD) Derive option. Click ‘Unlock’ and accept the transaction to approve the Stablecoin (oUSD) Derive contract to transfer your DeriveUSD tokens.

![Derive ](minterLPDeriveStakeLPToken.gif)
*Staked LP Tokens won't be visible in your wallet*

After confirming, users will see their DeriveUSD token balance, their amount currently staked, and any OKS rewards they’ve accumulated. Simply select the ‘Stake Tokens’ option and confirm the transaction to begin earning OKS rewards on a weekly basis.

![Derive](minterLPDeriveStakeLPToken2.gif)
*OKS rewards can be claimed anytime*
