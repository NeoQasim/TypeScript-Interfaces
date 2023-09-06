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
const eBook1 = {
    title: "Title here",
    author: "Author name",
    price: 350,
    file_format: "pdf",
    file_size: 1024
};
const aBook1 = {
    title: "Audio book title ",
    author: "Audiobooks Author",
    price: 456,
    file_size: 1024,
    vocals: "Audio vocals",
    file_format: "mp3"
};
console.log(eBook1);
console.log(aBook1);
export {};
