let data = { name: "John", age: 30 };

let jsonString = JSON.stringify(data);

console.log(data)
console.log(jsonString)

//Not so surprising

class Person  {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static from(obj){
        const instance = new Person(obj.name, obj.age);
        return instance;
    }
}

let linda = new Person('Linda', 39);
let marcus = new Person('Marcus', 44);
let brian = new Person('Brian', 1000);

let persons = [linda, marcus, data, brian];
console.log(persons);
for (i=0; i<persons.length; i++) {
    console.log(persons[i]);
}
// Both are objects but different

let jsonArray = JSON.stringify(persons);

console.log(jsonArray);
// Both types are now objects without a prototype
// Can we deserialize all into objects from the class prototype?

let objarray = JSON.parse(jsonArray);
console.log(objarray);
for (i=0; i<objarray.length; i++) {
    console.log(objarray[i]);
}
// So objects but not objects of class Person


for (i=0; i<objarray.length;i++){
    let classobject = Person.from(objarray[i]);
    console.log(classobject)
}




