# Canvas animation using ES2015 Classes
Based on a youtube tutorial, what I did new is using **CLASSES** instead of **Object with function Constructor**.
### This
```javascript
class Person {
    constructor(strName, numAge) {
        this.name = strName;
        this.age = numAge;
    }

    info() {
        return `((Class::Person) named ${this.name} & of age ${this.age})`
    }
}

let objPerson = new Person("Ali",33);
console.log(objPerson.info());
```

### Instead of this
```javascript
function Person(name){
  this.name = strName
  this.age = numAge
  this.info = function(){
    return `((Object::Person) named ${this.name} & of age ${this.age})`
  } 
} 
let objPerson = new Person("Bob",44);
console.log(objPerson.info());
```


