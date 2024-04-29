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
];

// Validate course assignment
function processStudentData (course, assignmentGroup, submissons){
    // verify that the assignmnet group belongs to the course
    if(assignmentGroup.course_id !== course.id) {
        throw new Error('AssignmnetGroup course ID does not match the course ID');
    }
}


const assignment = [
    {id: 1, name:'Declare a Variable', due_date: '2023-01-25', points_possible: 50},
    {id: 2, name:'Write a Function', due_date: '2023-02-27', points_possible: 150},
    {id: 3, name:'Code the World', due_date: '2023-11-15', points_possible: 500},

]
// Function to filter Assignment
function filterAssignment(assignments) {
    const currentDate = new Date();
    return assignments.filter(function(assignmnet){
        return new Date(assignmnet.due_at) <= currentDate;
    });
}

console.log(filterAssignment(assignment))  //Could not able to display filtered assignment


// Process Submission
function processSubmissons(submissions, assignments) {
    const results = {};
    submissions,forEach(function(submission) {
        const asignment = assignments.find(function(a) {
            return a.id === submission.assignment_id;
        });
        if(!assignment) return //Ignore submission for assignments not due yet

        const percentageScore = (submission.submission.score / assignment.points_possible) * 100;
        if (!(submission.learner_id in results)) {
            results[submission.learner_id] = {id: submission.student_id, score: [] };
            
        }
        results[submission.student_id].score.push({
            assignmentId: assignment.id,
            score: percentageScore
        });
    });
    return results;
}

// Calculate Weighted Average
function calculateWeightedAverages(results) {
    for (let learnerId in results) {
        const learner = results[learnerId];
        const totalWeightedScore = learner.scores.reduce((total, curr) => total + curr.score, 0);
        const totalWeight = learner.scores.length * 100; // Equal weighting assumed
        learner.average = totalWeightedScore / totalWeight;
    }
    return Object.values(results);
}


// Main Function
function compileLearnerResults(courseInfo, assignmentGroup, learnerSubmissions) {
    try {
        validateCourseAssignment(courseInfo, assignmentGroup);
        const relevantAssignments = filterRelevantAssignments(assignmentGroup.assignments);
        const interimResults = processSubmissions(learnerSubmissions, relevantAssignments);
        const finalResults = calculateWeightedAverages(interimResults);
        console.log("Learner Results:", JSON.stringify(finalResults, null, 2));
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Running the Function
console.assertlog(compileLearnerResults(courseInfo, assignmentGroup, learnerSubmissions));
