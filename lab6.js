function askPassword(ok,fail){
    let password = prompt("Password?",'');
    if(password == "rockstar") ok.call(user);
    else fail();
}
let user ={
    name: 'John',
    loginOk(){
        alert(`${this.name} logged in`);
    },
    loginFail(){
        alert(`${this.name} failed to log in`);
    },

};

// Solution for Question 1

askPassword(()=>user.loginOk.call(user),()=>user.loginFail.call(user));
askPassword(()=>user.loginOk.apply(user),()=>user.loginFail.apply(user));
askPassword(user.loginOk.bind(user),user.loginFail.bind(user));






let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {

console.log(this.title + ": " + student
);
}.bind(this)); // we bind it here to get the desired out put
}
};

group.showList();


