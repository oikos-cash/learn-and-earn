---
title: "PancakeSwap"
metaTitle: "Yield Farming with PancakeSwap and Oikos"
metaDescription: "Yield Farming with PancakeSwap and Oikos"
---
### Providing Liquidity on PancakeSwap
To provide oUSD liquidity, users must hold BNB and oUSD in the same wallet. oUSD can be minted by staking OKS on [Oikos Minter](https://minter.oikos.cash/), can be acquired with BNB directly on PancakeSwap or in the stablecoin (USDC,DAI,USDT) DEX Derive Finance. To acquire LP tokens open this link and make sure you’re inside the ‘Add Liquidity’ section. BNB will automatically be selected on the top line, and make sure oUSD is selected on the bottom.

![PancakeSwap LP Add Liquidity](minterLPPancakeSwapAddLiquidity.gif)
*Users will need to enable oUSD to provide the liquidity the first time*

### Entering the LP Pool

Enter the amount of oUSD to add to the liquidity pool. The BNB value on top will automatically populate based on the current exchange rate shown at the bottom. After confirming the deposit amount, click ‘Supply’ and approve the transaction prompt. Once the transaction is confirmed, users will see their pool share updated with the percentage and total BNB + oUSD amount. The transaction will automatically stake the BNB and oUSD in the PancakeSwap contract and issue liquidity provider tokens (CAKE-LP) to the connected wallet in return. 

![PancakeSwap First Time](minterLPPancakeSwapFirstTime.gif)
*The rewards contract only needs to be approved the first time*

### Staking LP Token

Next, go to the [Oikos Minter](https://minter.oikos.cash/) and connect the same wallet. Select the ‘LP Rewards’ tab on the top right, and click the PancakeSwap V2 BNB/OUSD option. Click ‘Unlock’ to approve the smart contract and view the CAKE-LP balance, the amount currently staked, and any accumulated OKS rewards.

![PancakeSwap Stake LP Token](minterLPPancakeSwapStakeLPToken.gif)
*Staked LP Tokens won't be visible in your wallet*

Click ‘Stake Tokens’, confirm the transaction, and voila! OKS rewards will automatically accumulate in a smart contract for users to withdraw.
