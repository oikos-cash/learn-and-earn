---
title: "Minter"
metaTitle: "Minter: Stake to Mint"
metaDescription: "Stake to Mint"
---
### What is Oikos Minter?
Minter is the front-end interface for OKS holders to become minters and generate synthetic assets for the network, manage their staking and collect their share of rewards.

Users must acquire Oikos Network Tokens (OKS) before staking and earning rewards. OKS can be acquired directly via [PancakeSwap](https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a). Once a user has acquired OKS, they will open the Minter and connect with the wallet that contains the tokens. 
Users will see a homepage with their wallet details on the left and functionality options on the right.

#### Wallets

The platform allows various wallet options from which to choose from:
- MetaMask
- MathWallet
- BSCWallet

#### Login with MetaMask
![Minter Login](minterLogin.gif)
*Connect your MetaMask wallet to continue*

- Go to the [Oikos Minter](https://minter.oikos.cash/)
- Select MetaMask
- Select your wallet address within the MetaMask pop-up
- Click 'Next' button located on the lower left side
- Click 'Connect'

### Introduction to Staking
Staking is the way many cryptocurrencies verify their transactions, and it allows participants to earn rewards on their holdings. But what is crypto staking? Staking cryptocurrencies is a process that involves committing your crypto assets to support a network and confirm transactions. It's available with cryptocurrencies that use the proof-of-stake model to process payments. This is a more energy-efficient alternative to the original proof-of-work model. Proof of work requires mining devices that use computing power to solve mathematical equations. Staking can be a great way to use your crypto to generate passive income, especially because some cryptocurrencies offer high interest rates for staking.

### Stake to Mint
To stake OKS and mint oUSD click the ‘Mint’ box. Input the amount of oUSD you would like to mint, triggering the corresponding OKS that will be staked. Please take note of the estimated collateralization ratio (c-ratio), and BSC fees. Users can easily stake all of their OKS by clicking the ‘Max’ button in the oUSD box.

![Stake to Mint](minterStakeToMint.gif)
*Note: After minting oUSD, there is an 8 hour waiting period before you can burn it.*

#### Instructions
- Inside Minter, click the 'Mint' button
- Input amount manually or click 'Max'
- Click 'Mint now'
- Click 'Confirm' in MetaMask pop-up
- Enjoy weekly rewards

Once the transaction is confirmed, you should have oUSD in your wallet now. You can use these Synths as you wish, like as capital for trading on Oikos Exchange. One important thing to note here is that if the debt pool value fluctuates, then the individual debt of stakers will also fluctuate. Hence, it is quite possible that stakers need to pay/burn more or less the amount of synths than they have generated.

### Claim rewards
By clicking the ‘Claim’ box on the Minter homepage, users can keep track of and claim their rewards, broken down by Synth exchange fees and OKS staking rewards from inflation. It will also display when the next reward period ends and whether a claim is open or closed based on the current collateralization ratio. Users need to manually claim the rewards every week, otherwise, after 2 weeks any unclaimed rewards will be forfeited and distributed to all the other OKS stakers.

![Minter Claim](minterClaim.gif)
*Before claiming, stakers have to ensure that C-Ratio is above 500%*

Every week, a snapshot of all OKS stakers is taken and they are awarded fees from the Exchange fee pool, as well as OKS rewards. They can both be claimed in a single action. Your current collateralization ratio must be on the target collateralization ratio, or else you will be locked out from claiming your fees and rewards.

### Transfer 

![Minter Transfer](minterTransfer.gif)
*Users shouldn't use this to transfer to exchange addresses*

Users can use the Minter application to transfer BNB, OKS, and oUSD to another user.

### Trade

![Minter Trade](minterTrade.gif)
*Quickly trade any synth to oUSD inside here*

The Minter application allows you to trade your synths only with oUSD. For more trading pairs, you can use the Oikos Exchange, which we explain in this guide.

### Escrow 

![Minter Escrow](minterEscrow.gif)
*Users can vest here after rewards have been escrowed for 12 months*

Stakers can claim the OKS staking rewards through the Minter portal. Every week, OKS stakers can claim OKS staking rewards, depending upon their staking proportion. Users can withdraw the rewards but it will be escrowed for 12 months, which can be seen from the Escrow tab.

