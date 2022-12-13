import { run } from "hardhat"

export async function verify(address: string, args: any[]) {
  console.log("\n----------------------------------------")
  try {
    await run("verify:verify", {
      address,
      constructorArguments: args,
    })
  } catch (error: any) {
    if (error.message?.toLowerCase()?.includes("already verified")) {
      console.log("Already Verified")
    } else {
      console.error(error)
    }
  }
  console.log("----------------------------------------\n")
}
