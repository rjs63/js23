// variables are used to store the data.
// variable declaration should contains a-z, A-Z, 0-9, $,_
//`` backtick operator used to define the paragraph (multiline string)
// also known as template literal introduse in ES6

var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = `${sub_one}<==>${sub_two}`;
console.log(mern_stack); // ReactJs<==>NodeJS

var table_name = "Employees";
var sal = 50000;
var sql_query1 = `select * from ${table_name} where e_sal>50000`;
console.log(sql_query1);

//5 types of numbers possible in JS
// decimal,double,hexadecimal(prefix 0x),octal(0o),binary(prefix with 0b)!

var decimal_num = 100;
var double_num = 100.1234;
var hexadecimal_num = 0x123AB;
var binary_num = 0b1011;
console.log(decimal_num,hexadecimal_num,binary_num);

//boolean (true,false)

var flag = true;
var flag1 = false;
console.log(flag,flag1);

// important ** undefine,null

var x;
console.log(x);  // undefine (value occupie the memory but no use of that value)

x = null;
console.log(x);  // null  (value is not there)