//premitive data types--  String,Number,boolean,null,undefined,symbol,bigInt

let numbersys= 50;
console.log(typeof numbersys);

let nameofPerson= "Nandkumar";
console.log(typeof nameofPerson);


let isCandidateRetends= true;
console.log(typeof isCandidateRetends);

let valueOfVariable= null;                          // --- null has Object datatype
console.log(typeof valueOfVariable);


let valueOfNumber= undefined;
console.log(typeof valueOfNumber);

let identification= Symbol;                         // --- symbol has function datatype
console.log(typeof identification);

let bigInteger= 89898989898989n;                    // --- n is used to indicate bigint and data type will be bigint
console.log(typeof bigInteger);



//non-premitive datatypes/Reference-type data types-- Array, Object,Function
const languages= ["JAVA","JS","SQL","PYTHON"];
console.log(typeof languages);                           // --- array has Object datatype

let myObject={
nameofEmp: "Nandkumar",
designation: "QA Engineer",
joining: "May 2024",
Organization: "Velotio"
}
console.log(typeof myObject);


 function myfunction(){                                         // function has function dataType
console.log("Printing datatype of function"+typeof myfunction());
 }