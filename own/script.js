let persons = [

    { name: "John", age: 25, city: "NewYork" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London" },
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" }

];

let n = 0;

let ask = prompt('City').toUpperCase()

for (item of persons) {

    if (ask == item.city.toUpperCase()) {
        
        console.log(item.name);

        n += item.age

    }
 
}
console.log(n);


addn()
function addn() {

    let name = prompt('add name')
    let age = prompt('add age')
    let city = prompt('add city')

    if (isNaN(name) && isNaN(city) && !isNaN(age)) {

        age = parseFloat(age)

        persons.push({name, age, city})

        console.log(persons);
    }
    
    
}











