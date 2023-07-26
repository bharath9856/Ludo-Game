
class Person{
    constructor(name,phone){
        this.name = name;
        this.mobile_no = phone;
    }

    getPersonalDetails(){
        console.log("name:",this.name,"\n","Phone_no:",this.mobile_no)
    }
}

class Employee extends Person{
    constructor(n,p,s,c){
        super(n,p)  // This keyword is used to access properties on an object literal or class, or invoke a superclass's constructor.
        this.salary = s;
        this.company = c;
    }
    getEmployeeDetails(){
        console.log("Employee")
    }
    
}


var p1 = new Person("xyz",34534645745);
var e1 = new Employee("xyz",34534645745,45000,"sun");
// console.log(p1);
console.log(e1.getPersonalDetails());
