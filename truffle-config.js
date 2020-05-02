require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot jar rifle night umbrella coral light army gate'; 
let testAccounts = [
"0xb43b446b6358596ce6b5d8da8216a9ca2c61cceaf9176972329b8bc3852fc717",
"0x2f6ee66767e74cb1c74d256de0d18a253099e1a15be6695d2310876ae70ff3f5",
"0xc85f18e1f92c43c50a44f58e1658201d0259c87fa42b9bdd32e2437714f31924",
"0x3b649f08481ed10d9a25209c792be59e40a9b694715fbf187cc94bf38df981bd",
"0x74f83e8d5b28e8d5a8b7d81bfe0df47fc0cff125d1e1f3f06e2894a41bd0c5ae",
"0xf54bf7d48e422fa3a468e55c158caed9a98e6d13f12fb990616684a95af2a158",
"0x9ebc2fb5062f481b85dc07b4f1b3357cfd98d27ab748b7fd7c5b54012c14e8bd",
"0x583e8c2eae270fc78daa54e8ee06e2343fd8c8274f1ff27000767ade4f937a48",
"0x960df6c8506b9983fba1f35b6fa22e68b3ae18b006e3ef9b4fbf3e4b0be1fc3a",
"0x4318c583a5589c700f8dc2305d7496863e93337bad20619ebb29bc5fd02a5397"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
