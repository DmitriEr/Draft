let a = {
    name: "Dmitrii",
    age: "17",
    group: function() {
        if(this.age < 15) {
            return "You're young";
        } else {
            return "hello world";
        }
    }
}

console.log(a);

let b = {
    hobby: "front-end",
    __proto__: a
}

console.log(b)