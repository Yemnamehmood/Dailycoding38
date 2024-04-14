//DAY 38
//TASK 1 (Creating a Map)
let countries = new Map<string, string>();
countries.set("Pakistan","Islamabad");
countries.set("China","Beijing");
countries.set("Australia","Canberra");
console.log(countries);
//It shows the countries that we set in map and also shows their capitals.

//TASK 2 (Using function to checking capital of canada) using if/else statement
function logcapitalofcanada (countires: Map<string , string>) : void {
    if (countires.has("Canada")) {
        console.log(`The Capital Of Canada is ${countires.get("Canada")}`);
    } else {
        console.log("Canada is not in the Map.");
    }
}
//Assuming countries map from task 1 
logcapitalofcanada(countries);
//It shows the else statement only 

//TASK 3 (Creating Map to store student IDs keys and names values)
let students = new Map<number, string>();
students.set (1, "Yemna");
students.set(2, "Shayan");
students.set(3, "Amna");

//using forEach method because (`forEach` in TypeScript: Iterate over array elements easily.)
students.forEach((name , id) => {
    console.log(`Student ID: ${id} , Name: ${name}`);
});