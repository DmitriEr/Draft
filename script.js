const person = new User("Dmitrii", "Thispassword");

console.log(person);

const personSecond = new Student("DmitriiEr", "Iamboss", "DmitriiFrontend");

console.log(personSecond);

const personThird = new Usersecond();

personThird.name = "     IVan    ";
console.log(personThird.name);

// к методу класса можно обратиться если перед методом написать static
// в другом случае можно обращаться только к объекту создавемому с помощью конструктора класса
console.log(Usersecond.getId());
/*
// call
let color = document.querySelector("body")
function changeColor(backgroundColor, number) {
    console.log(this);
    console.log(number);
    this.style.background= backgroundColor;
}

changeColor.call(color, "#ff2200", 777);
*/
// apply
let color = document.querySelector("body")
function changeColor(backgroundColor, number) {
    console.log(this);
    console.log(number);
    this.style.background= backgroundColor;
}

changeColor.apply(color, ["#ff2200", 7]);

// bind - привязывается один раз, call и apply - каждый раз