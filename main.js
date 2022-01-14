const createStudent = (name, grade) => {
    const newKid = {
    name: name,
    grade: grade
    }     
return newKid
}
let brandNewStudent = createStudent("Airris",12)
console.log(brandNewStudent)

const addMathGrade = (studentMath) => {
    studentMath.math = "B"

    return studentMath
}

brandNewStudent = addMathGrade(brandNewStudent)
console.log(brandNewStudent)

const addHistoryGrade = (studentHistory) => {
    studentHistory.history = "C"

    return studentHistory
}

brandNewStudent = addHistoryGrade(brandNewStudent)
console.log(brandNewStudent)

const addScienceGrade = (studentScience) => {
    studentScience.science = "A"

    return studentScience
}

brandNewStudent = addScienceGrade(brandNewStudent)
console.log(brandNewStudent)
