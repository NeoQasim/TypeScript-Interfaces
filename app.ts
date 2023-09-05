type User = {
    name: string
    age: number
    address?: string
}

const user: User = {
    name: "qasim",
    age: 18,
    address: "not availble"

}
const user2: User = {
    name: "ali",
    age: 21
}

function login(userdata: User) {
    console.log(userdata)
}
login(user)




interface Transaction {
    payeeraccountnumber: number
    payeeaccount: number

}
interface BankAccount {
    acountnumber: number
    accountholder: string
    balance: number
    isactive: boolean
    transaction: Transaction[]
}
const transaction1: Transaction = {
    payeeaccount: 1,
    payeeraccountnumber: 23
}
const transaction2: Transaction = {
    payeeaccount: 11,
    payeeraccountnumber: 231
}
const bankAccount: BankAccount = {
    acountnumber: 1,
    accountholder: "me",
    balance: 2000,
    isactive: true,
    transaction: [transaction2]
}
console.log(bankAccount);

interface Bookinfo {
    title: string,
    author: string,
    price: number,
}
interface EBookinfo {
    title: string,
    author: string,
    price: number,
    file_format: "jpg"

}

interface Books extends Bookinfo {
    title: string,
    author: string,
    price: number
}

interface Ebooks extends Bookinfo {
    file_size: number
    author: string,
}
interface Audiobooks extends Bookinfo {
    vocals: string
}
const book1: Ebooks = {
    title: "Title here",
    author: "Author name",
    price: 350,
    file_size: 3624,
}
