// Data Structures
const courseInfo = {
    id: 451,
    name: 'Introduction to JavaScript'
};

console.log(courseInfo);// this display an object

const assignmentGroup = {
    id: 12345,
    name: 'Fundamentals of JavaScript',
    course_id: 451,
    group_weight: 25,
    assignments: [
        {id: 1, name:'Declare a Variable', due_date: '2023-01-25', points_possible: 50},
        {id: 2, name:'Write a Function', due_date: '2023-02-27', points_possible: 150},
        {id: 3, name:'Code the World', due_date: '2023-11-15', points_possible: 500},

    ]
};

console.log(assignmentGroup)

const studentSubmissions = [
    {student_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
    {student_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
    {student_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 } },
    {student_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
]