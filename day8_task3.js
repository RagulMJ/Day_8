class person{
    constructor(Name,Age,Mobile_No,profession,Hobbies,Home_City){
        this.Name=Name;
        this.Age=Age;
        this.Mobile_No=Mobile_No;
        this.profession=profession;
        this.Hobbies=Hobbies;
        this.Home_City=Home_City;
    }
    getDetail(){
        console.log(`Person Details:
        Name       : ${this.Name}
        Age        : ${this.Age}
        Contact No : ${this.Mobile_No}
        Profession : ${this.profession}
        Hobbies    : ${this.Hobbies}
        City       : ${this.Home_City}`);
    }
}
const PerDtls = new person("Ragul",35,8015195350,"Software developer","Games","Tiruvannamalai")
PerDtls.getDetail()