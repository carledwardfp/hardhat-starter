import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { deployments, ethers, network } from "hardhat"
import { DEV_NETWORKS } from "../../helper-hardhat-config"

!DEV_NETWORKS.includes(network.name)
  ? describe.skip
  : describe("Contract (Unit)", function () {
      let contract: any // update with typechain generated type
      let accounts: SignerWithAddress[]

      beforeEach(async function () {
        const signers = await ethers.getSigners()
        accounts = signers
        await deployments.fixture(["all"])
        contract = await ethers.getContract("Contract")
      })
    })
