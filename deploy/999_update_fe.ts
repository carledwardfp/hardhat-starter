import fs from "fs"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers, network } from "hardhat"
import {
  frontEndAbiFile,
  frontEndContractsFile,
} from "../helper-hardhat-config"

const updateUI: DeployFunction = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Writing to front end...")
    await updateContractAddresses()
    await updateAbi()
    console.log("Front end written!")
  }
}

async function updateContractAddresses() {
  const contract = await ethers.getContract("Raffle")
  const contractAddresses = JSON.parse(
    fs.readFileSync(frontEndContractsFile, "utf8")
  )
  contractAddresses[network.config.chainId!] = contract.address
  fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}

async function updateAbi() {
  const contract = await ethers.getContract("Contract")
  fs.writeFileSync(
    frontEndAbiFile,
    contract.interface.format(ethers.utils.FormatTypes.json) as string
  )
}

export default updateUI
updateUI.tags = ["all", "frontend"]
