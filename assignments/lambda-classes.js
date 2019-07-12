// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
}

class Instructor extends Person{
    constructor(instrProps){
        super(instrProps);
        this.specialty = instrProps.specialty;
        this.favLanguage = instrProps.favLanguage;
        this.catchPrase = instrProps.catchPrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    };
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    };
    
  /*  gradeRandomizer(student){
        let numTurns = Math.random() * 20;
        let newGrade = student.grade;
        function increaseGrade(aGrade){
            aGrade++;
        }
        function decreaseGrade(aGrade) {
            aGrade--;
        }
        let randomGrades = [increaseGrade(), decreaseGrade()];
        for(let i=0; i< numTurns; i++){
            //Pick a random function
            let funcNum = Math.round(Math.random() * randomGrades.length);
            //Call function
            newGrade = randomGrades[funcNum](newGrade);
        }
        student.grade = newGrade;
    }
*/
}

class Student extends Person{
    constructor(studProps){
        super(studProps);
        this.previousBackground = studProps.previousBackground;
        this.className = studProps.className;
        this.favSubjects = studProps.favSubjects;
        this.grade = studProps.grade || 75;
    }
    listsSubjects(){
        this.favSubjects.forEach((subject)=>console.log(subject));
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
    graduate(){this.grade >= 70?console.log(`${this.name} is eligible to graduate`):console.log(`${this.name} is not eligible to graduate at this time.`)}
       
    
    
}

class ProgramManager extends Instructor {
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    };
    debugCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
}

const john = new Student( {
name: "John Bradley",
age: 23,
location: "Atlanta, GA", 
previousBackground: "CSR, brick layer",
className: "Full Stack Web Dev",
favSubjects: ["English", "Math", "Social Studies", "Science"],
grade: 80
})
john.listsSubjects();
john.PRAssignment("English");
john.sprintChallenge("CSS");
john.graduate();

const angelP = new Instructor( 
    {
        name: "Angel Perez",
        age: 35,
        location: "Sacramento, CA",
        specialty: "Front End Web Development",
        favLanguage: "Javascript",
        catchPhrase: "JS your way into my heart"
    }
)
angelP.demo("Classes");
angelP.grade(john, "Javascript I");
//angelP.gradeRandomizer(john);
john.graduate();