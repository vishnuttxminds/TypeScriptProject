let myEmptyMap = new Map<string, number>();

let student = new Map<string, string>([
    ["key1", "value1"],
    ["key2", "value2"]
]);

student.set('name','Gopal')
student.set('school','Koothattukulam')

for (let key of student.keys()) {
    console.log(key);                  
}

for (let value of student.values()) {
    console.log(value);               
}


for (let entry of student.entries()) {
    console.log('entiries >> ' ,entry[0], entry[1]); 
}

for (let [key, value] of student) {
    console.log('values >> ' ,key, value);          
}

let studentName = student.get("name")

console.log('is available : ' , student.has('name'));

// let isDeleted = student.delete("school");
// student.clear();	
let count = student.size;



// console.log(count);
