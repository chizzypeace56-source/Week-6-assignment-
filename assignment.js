
// WEEK 6 ASSIGNMENT
// STUDENT RECORDS MANAGER

// 1. Create an array of students
const students = [
    {
        name: "Chinaza",
        age: 22,
        course: "Radiography",
        score: 85
    },
    {
        name: "David",
        age: 23,
        course: "Computer Science",
        score: 45
    },
    {
        name: "Peace",
        age: 21,
        course: "Web Development",
        score: 75
    },
    {
        name: "Michael",
        age: 24,
        course: "Medicine",
        score: 58
    },
    {
        name: "Grace",
        age: 20,
        course: "Biochemistry",
        score: 92
    }
];

// 2. Function to calculate students' grades
function getGrade(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "F";
    }
}

// 3. Function to display each student's information
function displayStudent(student) {
    console.log(
        student.name + " (" + student.age + 
        ") is studying " + student.course +
        " and scored " + student.score +
        " - Grade " + getGrade(student.score)
    );
}

// 4. Use forEach to display all students
console.log("===== ALL STUDENTS =====");

students.forEach(displayStudent);

// 5. Use filter to find students who passed
const passedStudents = students.filter(function(student) {
    return student.score >= 50;
});

console.log("===== STUDENTS WHO PASSED =====");
console.log(passedStudents);

// 6. Use map to display only students' names
const studentNames = students.map(function(student) {
    return student.name;
});

console.log("===== STUDENT NAMES =====");
console.log(studentNames);

// 7. BONUS: Calculate the average score
function averageScore(students) {
    const total = students.reduce(function(sum, student) {
        return sum + student.score;
    }, 0);

    return total / students.length;
}

console.log("===== AVERAGE SCORE =====");
console.log(averageScore(students));
