const person = {
    name: "gomnam",
    walk (){
        console.log(this);
    }
}
person.walk();
// {name: 'gomnam', walk: ƒ}
// ==>> in method this Reference to Object

// function teach (){
//     console.log(this);
// }
// teach();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ==>> in regular function, this Reference to dom


function Teach (title) {
    this.title = title ;
    console.log(this);
}
const teach = new Teach("amar");
// Teach {title: 'amar'}
// ==>> in constructor function, this Reference object 


const person2 = {
    name: "gomnam",
    students : ["a", "b", "c"],
    teach () {
        this.students.forEach(function (student){
            console.log(this._name, student);
            // this in function Reference to object window
        });
    },
};
person2.teach();
// undefined 'a'
// undefined 'b'
// undefined 'c'


// how solve that?
// solution 1
// forEach get tow arguman
const person3 = {
    _name: "gomnam",
    students : ["a", "b", "c"],
    teach () {
        this.students.forEach(function (student){
            console.log(this._name, student);
            // this in function Reference to object window
        },{_name : "amar"});
    },
};
person3.teach();
// amar a
// amar b
// amar c


// but this solution is not the best onemptied.try again
const person4 = {
    _name: "gomnam",
    students : ["a", "b", "c"],
    teach () {
        this.students.forEach(function (student){
            console.log(this._name, student);
            // this in function Reference to object window
        },this);
    },
};
person4.teach();
// gomnam a
// gomnam b
// gomnam c

console.log("*********2**********");
//solution 2
function speak(){
    console.log(this);
}
speak();
// Window
// this in regular function reference to window Object


// use method (call apply bind) to change this reference
speak.call({name:"gomnam"});
// {name: 'gomnam'}


// we can define object Independent
const obj ={
    name:"amar"
};
speak.call(obj);
// {name: 'amar'}


speak.apply(obj);
// {name: 'amar'}

// bind method have return
const fun = speak.bind(obj);
fun();
// {name: 'amar'}


const person5 = {
    _name: "gomnam",
    students : ["a", "b", "c"],
    teach () {
        this.students.forEach(
            function (student){
                console.log(this._name, student);
                // this in function Reference to object window
        }.bind(this));
    },
};
person5.teach();
// gomnam a
// gomnam b
// gomnam c


console.log("*********3**********");

// 3 solution
// use arrow function
const person6 = {
    _name: "gomnam",
    students : ["a", "b", "c"],
    teach () {
        this.students.forEach((student) =>{
            console.log(this._name, student);
        });
    },
};
person6.teach();
// gomnam a
// gomnam b
// gomnam c