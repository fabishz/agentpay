const hre = require("hardhat");

async function main() {
    const AgentPay = await hre.ethers.getContractFactory("AgentPay");
    const agentPay = await AgentPay.deploy();

    await agentPay.waitForDeployment();

    console.log("AgentPay deployed to:", await agentPay.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
