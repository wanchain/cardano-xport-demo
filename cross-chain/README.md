# Contracts Description

> NOTE: Some scripts are for both asset and XPort crosschain scenarios, and some scripts for asset crosschain only are not listed here.

* ### GroupNFT (Common for Asset/XPort Crosschain)
     Responsible to mint a NFT Token such as GroupNFTToken and AdminNFTToken.
  
* #### GroupNFTToken
    GroupNFTToken stores important parameters for crosschain, such as GPK, in inline datum
  
* #### AdminNFTToken
    AdminNFTToken stores Administator parameters, such as all Administators's PK of and the Authorization thresholds, in inline datum

* ### GroupNFTHolder (Common for Asset/XPort Crosschain)
    The contract holds the GroupNFT.

* ### AdminNFTHolder (Common for Asset/XPort Crosschain)
    The contract holds the AdminNFTToken minted via GroupNFT. Any management operations must be authorized by the AdminNFTHolder.

* ### InboundToken
    Responsible to mint InboundToken which represent a inbound msg from other chain,the asset name is a unique parameter which prepresent the remote origin contract.

* ### CheckToken
    Responsible to mint CheckToken which represent a certain type of permission which is determined by the XXXCheck contract, such as InboundCheckToken <--> InboundMintCheck

* ### InboundMintCheck
    The contract holds the InboundCheckToken minted via CheckToken, is responsible for Mint operation of InboundToken is authorized. 

* ### OutboundToken
    Responsible to mint OutboundToken which represent a outbound msg to other chain,the asset name is a fixed value.

* ### XPort
    The contract holds the OutboundToken minted via OutboundToken, and each OutboundToken is bound to a datum containing outbound msg. 
      
<br />
<br />

# How to compile

## 1. prepare compile environment (with nix-shell )
```shell
git clone https://github.com/IntersectMBO/plutus-apps.git
cd plutus-apps
git checkout v1.0.0-alpha1
nix-shell --extra-experimental-features flakes
```

## 2. compile contract

```shell
cd {project_path}/cross-chain
nix --extra-experimental-features "nix-command flakes" run .#cross-chain:exe:cross-chain --print-build-logs
```

## 3. compile result
All contracts compilecode is in {project_path}/cross-chain/generated-plutus-scripts
