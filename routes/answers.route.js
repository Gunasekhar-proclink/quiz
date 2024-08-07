import express from "express"; 
const router = express.Router(); 

let answerkey = [
  {
    "id": "1",
    "answer": ["A"]
  },
  {
    "id": "2",
    "answer": ["A", "C", "D"]
  },
  {
    "id": "3",
    "answer": ["A"]
  },
  {
    "id": "4",
    "answer": ["A", "B", "C"]
  },
  {
    "id": "5",
    "answer": ["A"]
  },
  {
    "id": "6",
    "answer": ["A"]
  },
  {
    "id": "7",
    "answer": ["A", "B", "C"]
  },
  {
    "id": "8",
    "answer": ["A"]
  },
  {
    "id": "9",
    "answer": ["A", "C"]
  },
  {
    "id": "10",
    "answer": ["A"]
  }
] ; 

let selectedAnswers = []; 
let totalScore = 0; 

router.get("/", function (request, response) {
  response.send(selectedAnswers);
});

router.post("/", function(request, response) {
    const bodydata = request.body; 

    totalScore = 0; 
    answerkey.forEach((question) => {
        const userAnswer = bodydata.find(answer => answer.id === question.id);
        
        if (userAnswer) {
            const isCorrect = JSON.stringify(userAnswer.Ans) === JSON.stringify(question.Ans);
            if (isCorrect) {
                totalScore++;
            }
        }
    });
    selectedAnswers = bodydata; 
    response.send({ totalScore });
});

export default router;