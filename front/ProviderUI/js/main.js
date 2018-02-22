if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

console.log(web3.eth.accounts[0]);
$("#button").click(function() {
    web3.eth.defaultAccount = web3.eth.accounts[0];
    var EtherContract = web3.eth.contract([ { "constant": true, "inputs": [ { "name": "providerAd", "type": "address" } ], "name": "getProvider", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "uint256" } ], "name": "getMetadata", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "ressourceID", "type": "uint256" }, { "name": "ressourceType", "type": "uint256" }, { "name": "minDeposit", "type": "uint256" }, { "name": "status", "type": "uint8" }, { "name": "commission", "type": "uint256" }, { "name": "freeCancelDate", "type": "uint256" }, { "name": "startDate", "type": "uint256" }, { "name": "endDate", "type": "uint256" }, { "name": "metaDataLink", "type": "string" } ], "name": "addAvailabilities", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "displayAvailabilities", "outputs": [], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "uint256" } ], "name": "getAvailability", "outputs": [ { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint8", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getListAvailabilities", "outputs": [ { "components": [ { "name": "_provider", "type": "address" }, { "name": "_signatureProof", "type": "bytes32" }, { "name": "_resourceId", "type": "uint256" }, { "name": "_type", "type": "uint256" }, { "name": "_minDeposit", "type": "uint256" }, { "name": "_commission", "type": "uint256" }, { "name": "_freeCancelDate", "type": "uint256" }, { "name": "_startDate", "type": "uint256" }, { "name": "_endDate", "type": "uint256" }, { "name": "_bookingStatus", "type": "uint8" }, { "name": "_metaDataLink", "type": "string" } ], "name": "", "type": "tuple[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "providerAddress", "type": "address" }, { "name": "name", "type": "string" } ], "name": "addProvider", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]);

    var Ether = EtherContract.at(web3.eth.accounts[0]);
    console.log(Ether);

    // Ether.setInstructor($("#name").val(), $("#age").val());
    Ether.addProvider(web3.eth.accounts[0], "Sin");

    console.log(Ether.getProvider(web3.eth.accounts[0]));
    console.log(Ether.addAvailabilities(
        1,
        1,
        "REQUESTED",
        $("#commission").val(),
        $("#cancel_deadline").val(),
        2,
        3,
        $("#meta_link").val()
    ));
});
