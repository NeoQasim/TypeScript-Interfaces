const user = {
    name: "qasim",
    age: 18,
    address: "not availble"
};
const user2 = {
    name: "ali",
    age: 21
};
function login(userdata) {
    console.log(userdata);
}
login(user);
const transaction1 = {
    payeeaccount: 1,
    payeeraccountnumber: 23
};
const transaction2 = {
    payeeaccount: 11,
    payeeraccountnumber: 231
};
const bankAccount = {
    acountnumber: 1,
    accountholder: "me",
    balance: 2000,
    isactive: true,
    transaction: [transaction2]
};
console.log(bankAccount);
export {};
