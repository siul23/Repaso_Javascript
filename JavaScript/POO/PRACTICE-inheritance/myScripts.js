class Animal{
    constructor(name, weight, age){
        this.name = name
        this.weight = weight
        this.age = age
    }
    information(){
        return `${this.name} - ${this.age} KG.-${this.weight} years old`
    }
}

class Dog extends Animal{
    constructor(name, weight, age, race){
        super(name, weight, age)
        this.race = race
    }
    information(){
        return `${this.name} - ${this.age} KG.-${this.weight} years old \
        - ${this.race}`
    }
}


class Cat extends Animal{
    constructor(name, weight, age, sex){
        super(name, weight, age)
        this.sex = sex
    }
    information(){
        return `${this.name} - ${this.age} KG.-${this.weight} years old \
        - ${this.sex}`
    }
}

class Rabbit extends Animal{
    constructor(name, weight, age, color){
        super(name, weight, age)
        this.color = color
    }
    information(){
        return `${this.name} - ${this.age} KG.-${this.weight} years old \
        - ${this.color}`
    }
}

//dog
let perro1 = new Dog('Clifford',24,6,'Pug')
//cat 
let cat1 = new Cat('Kira',16,5,'Female')
//rabbit
let rabbit1 = new Rabbit('Roman',5,1,'Brown')

function showAnimals(){
    let list = document.getElementById('animalsList')

    for(let animal of [perro1, cat1, rabbit1]){
        let item = document.createElement('li')
        item.innerText = animal.information()
        list.appendChild(item)
    }
}