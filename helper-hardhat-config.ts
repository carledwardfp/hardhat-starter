export const DEV_NETWORKS = ["localhost", "hardhat"]

export interface networkConfigItem {
  blockConfirmations?: number
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  goerli: {
    blockConfirmations: 6,
  },
}

export const frontEndAbiFile = process.env.FRONT_END_ABI_FILE || ""
export const frontEndContractsFile = process.env.FRONT_END_CONTRACTS_FILE || ""
