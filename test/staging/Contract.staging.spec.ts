import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { ethers, network } from "hardhat"
import { DEV_NETWORKS } from "../../helper-hardhat-config"

DEV_NETWORKS.includes(network.name)
  ? describe.skip
  : describe("Contract (Staging)", function () {
      let contract: any // update with typechain generated type
      let deployer: SignerWithAddress

      beforeEach(async function () {
        const signers = await ethers.getSigners()
        deployer = signers[0]
        contract = await ethers.getContract("Contract", deployer)
      })
    })
