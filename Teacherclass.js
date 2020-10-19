
class Teacher extends Student{
    constructor(Id,Name,Email,mobile_number,Salary,Subjects){
        super(Id,Name,Email,mobile_number);
        this.Salary = Salary;
        this.Subjects = Subjects;}

        salary(){
            return Number(this.Salary);
        }
        subjects(){
            return Array.from(this.Subjects.split(','));
        }

    }
    let teacher1 = new Teacher('96432','Sadi','Sadi@orange.com','0777788888','800',' English,Arabic,Math,scienc');
    // console.log(teacher1);
    console.log(teacher1.salary());
    console.log(teacher1.subjects());
