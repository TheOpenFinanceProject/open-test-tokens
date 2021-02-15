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
  deployer.deploy(Migrations);

  await deployer.deploy(UniswapV2ERC20)


  
  .then(
  	async function () {
 		console.log(`   address public UniswapV2ERC20 = ${UniswapV2ERC20.address}\n`);
  	})
};
