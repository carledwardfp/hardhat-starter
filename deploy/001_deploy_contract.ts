import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { DEV_NETWORKS, networkConfig } from "../helper-hardhat-config"
import { verify } from "../utils/verify"

const deployContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, ethers, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const isDev = DEV_NETWORKS.includes(network.name)

  if (isDev) {
    // mocks here
  } else {
  }

  const args: any[] = []

  log("\n----------------------------------------")
  const raffle = await deploy("Contract", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  log("----------------------------------------\n")

  if (network.name === "goerli" && process.env.ETHERSCAN_KEY) {
    await verify(raffle.address, args)
  }
}

export default deployContract
deployContract.tags = ["all", "contract"]
