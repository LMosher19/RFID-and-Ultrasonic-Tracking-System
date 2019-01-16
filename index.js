/***********************************************************************************
*                                    From Keyboard
* 
*                              Start Date : 11 / 30 / 2018
*  
* 
*                              Copyright : Lucas Mosher 2018
**********************************************************************************/

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function findIndex(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return i;
        }
    }
    
    console.log('student not found in class')
}
/***********************************************************************************
*                                  Classroom object
*              Raspberry Pi Specific RFID handling code based on input 
* 
*                      used for storing the students in a class
*                              functionally an array
**********************************************************************************/
class classroom{

    constructor(teachersName, studentRoster) {
        this.teachersName = teachersName;
        this.roster = studentRoster;
        this.students = new Array;
    }

    addStudentRoster(student) {
        if(!containsObject(student, this.roster)) {
            this.roster.push(student);
        }
        else{
            console.log('Student already on roster')
        }
    }

    removeStudentRoster(student) {
        if(containsObject(student, this.roster)) {
            let index =  findIndex(student, this.roster);
            this.roster.splice(index, 1);
         }

         else{
             console.log('Student not on roster')
         }
    }

    addStudentInClass(student) {
        if(!containsObject(student, this.students)) {
            this.students.push(student);
        }

        else{
            console.log('Student already in class');
        }
    }
    
    removeStudentInClass(student) {
        if(containsObject(student, this.students)) {
            let index =  findIndex(student, this.students); 
            this.students.splice(index, 1);
        }

        else{
            console.log('Student already left class')
        }
    }

    addStudent(studentIDNum) {
        let index = -1;

        for(let n of this.roster) { //; n < this.roster.length; n ++) {
            
            if(n.getIDNum === studentIDNum) {
                this.addStudentInClass(n)
            }
            /*
            if(studentIDNum === this.roster[n].getIDnum) {
                index = n;
                console.log('your mom')
            } */
        }
        
      //  this.addStudentInClass(this.roster[index]);
    }

    printClass() {
        for(let n of this.students) {
            console.log(n)
        }
    }
}

/***********************************************************************************
*                                  student object
*                              
*                   Is each student. Placed into each classroom object
*                     functions as each student. will be checked and 
*                         retrieved when the device is inputed.         
*********************************************************************************/

class student{
    constructor(studentName, studentIDNum) {
        this.studentName = studentName;
        this.studentIDNum = studentIDNum;
    }

    changeName(studentName) {
       this.studentName = studentName;
    }

    changeIDNum(studentIDNum) {
        this.studentIDNum = studentIDNum;
    }

    getIDNum() {
        return this.studentIDNum;
    }

    getName() {
        return this.studentName;
    }
}
let kid2 = new student('Lucas Mosher', 'c000000000000000000000')
let kid1 = new student('Zane Foulk', 'C402A085301441020F66170000E2003')
let class1 = new classroom('meckley',[])
class1.addStudentRoster(kid1)
class1.addStudentRoster(kid2)

class1.addStudent(kid1.getIDnum);

class1.addStudent(kid2.getIDNum)

class1.printClass();

