if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var CoursetroContract = web3.eth.contract("");

var Coursetro = CoursetroContract.at('PASTE CONTRACT ADDRESS HERE');
console.log(Coursetro);

Coursetro.getInstructor(function(error, result){
    if(!error)
        {
            $("#instructor").html(result[0]+' ('+result[1]+' years old)');
            console.log(result);
        }
    else {
        console.error(error);
    }
});

$("#button").click(function() {
    Coursetro.setInstructor($("#name").val(), $("#age").val());
});