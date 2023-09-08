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
    // console.log(userdata)
}
login(user)

type ID = number | string
function print(id: ID) {

    if (typeof id === "string") {
        console.log(id.toString(), "=====ssssssssssssssss========");
    }
    else {
        console.log(id);
    }
}

print('23')


// interface Transaction {
//     payeeraccountnumber: number
//     payeeaccount: number

// }
// interface BankAccount {
//     acountnumber: number
//     accountholder: string
//     balance: number
//     isactive: boolean
//     transaction: Transaction[]
// }
// const transaction1: Transaction = {
//     payeeaccount: 1,
//     payeeraccountnumber: 23
// }
// const transaction2: Transaction = {
//     payeeaccount: 11,
//     payeeraccountnumber: 231
// }
// const bankAccount: BankAccount = {
//     acountnumber: 1,
//     accountholder: "me",
//     balance: 2000,
//     isactive: true,
//     transaction: [transaction2]
// }
// console.log(bankAccount);

// interface Bookinfo {
//     title: string,
//     author: string,
//     price: number,
// }
// interface EBookinfo extends Bookinfo {
//     file_size: number
//     file_format: string

// }

// // interface Audiobooks extends EBookinfo {
// //     vocals: string

// // }
// // const eBook1: EBookinfo = {
// //     title: "Title here",
// //     author: "Author name",
// //     price: 350,
// //     file_format: "pdf",
// //     file_size: 1024
// // }
// // const aBook1: Audiobooks = {
// //     title: "Audio book title ",
// //     author: "Audiobooks Author",
// //     price: 456,
// //     file_size: 1024,
// //     vocals: "Audio vocals",
// //     file_format: "mp3"
// // }

