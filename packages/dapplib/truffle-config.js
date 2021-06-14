require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rifle ridge comic install fork bottom trumpet'; 
let testAccounts = [
"0x273a6293d889525acfee2617ba9174063ff2df57e0b7c993dd9a4ca60ce922d1",
"0xc75b227eb7089278b8b17f4ecac4964e199afd1c13a66ab6a4f33507d7929ea1",
"0xe10d3386f8a9717d173ae7dfc9b61ea12f083aaf87980a1caf3586e24adee8ef",
"0xe99f34a3fdfce7434be14d4b22c5c62e9f4eb2bc55cccc6697a567c445338872",
"0x328388d2346594ca0bf22acf49d426ea5304c92546e69fc350ef294814cde717",
"0xadd60b3f07107773d240d4897bb42ec50240ebf3ffc6db4f22523745192ae9bd",
"0x79730b1527880ec4b621e01d201b605d31d62f5658070373795f291cc77604c3",
"0x54e730e7d76e11206a21bc8473274d48bfd16c6145a3a2cf6190a534ff13c514",
"0xd2a1ea676cca2bb800138eb7d733536e0e651ab16010105c4f7f03318f7e327a",
"0xd7e0e2a33d9c689f39b9480e2c9f424984695782ebe8f70bc817d3bc38bfcb86"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

