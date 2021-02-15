const OpenAAVE = artifacts.require("OpenAAVE");
const OpenBUSD = artifacts.require("OpenBUSD");
const OpenCOMPOUND = artifacts.require("OpenCOMPOUND");
const OpenLINK = artifacts.require("OpenLINK");
const OpenRUPIAH = artifacts.require("OpenRUPIAH");
const OpenUNI = artifacts.require("OpenUNI");
const OpenUSDT = artifacts.require("OpenUSDT");
const OpenWBTC = artifacts.require("OpenWBTC");
const OpenWETH = artifacts.require("OpenWETH");
const OpenBAT = artifacts.require("OpenBAT");


module.exports = async function (deployer) {
	await deployer.deploy(OpenAAVE)
	await deployer.deploy(OpenBUSD)
	await deployer.deploy(OpenCOMPOUND)
	await deployer.deploy(OpenLINK)
	await deployer.deploy(OpenRUPIAH)
	await deployer.deploy(OpenUNI)
	await deployer.deploy(OpenUSDT)
	await deployer.deploy(OpenWBTC)
	await deployer.deploy(OpenWETH)
	await deployer.deploy(OpenBAT)
	.then(
		async function () {
			console.log(`   Test Token OpenAAVE = ${OpenAAVE.address}\n`);
			console.log(`   Test Token OpenBUSD = ${OpenBUSD.address}\n`);
			console.log(`   Test Token OpenCOMPOUND = ${OpenCOMPOUND.address}\n`);
			console.log(`   Test Token OpenLINK = ${OpenLINK.address}\n`);
			console.log(`   Test Token OpenRUPIAH = ${OpenRUPIAH.address}\n`);
			console.log(`   Test Token OpenUNI = ${OpenUNI.address}\n`);
			console.log(`   Test Token OpenUSDT = ${OpenUSDT.address}\n`);
			console.log(`   Test Token OpenWBTC = ${OpenWBTC.address}\n`);
			console.log(`   Test Token OpenWETH = ${OpenWETH.address}\n`);
			console.log(`   Test Token OpenBAT = ${OpenBAT.address}\n`);
		})
};
