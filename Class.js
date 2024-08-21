class Student{
    constructor(id,name,age){
        this.id=id
        this.name=name
        this.age=age
    }
    set setName(name){
        this.name=name
    }
    get stdInfo()
    {
        return "Id:"+this.id+" Name:"+this.name+" Age:"+this.age
    }
}

let std1=new Student("1231",'Xor', 15)
console.log(std1)
std1.setName="Aoxer"
console.log(std1)
console.log(std1.stdInfo)