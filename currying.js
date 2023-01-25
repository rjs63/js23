// let tnt = {
//     firstName: "johny",
//     lastName: "gaddar",
//     printFullName: function () {
//         console.log(this.firstName +""+ this.lastName);
//     }
// }
//   tnt.printFullName();

// call, aplly, bind method 

// call as function borrower

let user = {
    firstname: "john",
    lastname: "wick",
    
    }

 let printFullname= function () {
    console.log(this.firstname +""+ this.lastname);
}
printFullname.call(user);
