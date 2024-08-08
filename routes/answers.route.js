import express from "express"; 
const router = express.Router(); 

let answerkey =  [
  {
    "id": "1",
    "question": "What is the capital of France?",
    "correctOptions": ["Paris"],
    "choices": ["Paris", "London", "Berlin", "Madrid"]
  },
  {
    "id": "2",
    "question": "Which of these are planets in our solar system?",
    "correctOptions": ["Earth", "Mars", "Jupiter"],
    "choices": ["Earth", "Mars", "Jupiter", "Sun"]
  },
  {
    "id": "3",
    "question": "What is the largest ocean on Earth?",
    "correctOptions": ["Pacific Ocean"],
    "choices": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"]
  },
  {
    "id": "4",
    "question": "Which of these are programming languages?",
    "correctOptions": ["Java", "Python", "C++"],
    "choices": ["Java", "Python", "C++", "HTML"]
  },
  {
    "id": "5",
    "question": "What is the chemical symbol for gold?",
    "correctOptions": ["Au"],
    "choices": ["Ag", "Au", "Pb", "Fe"]
  },
  {
    "id": "6",
    "question": "What is the smallest planet in our solar system?",
    "correctOptions": ["Mercury"],
    "choices": ["Venus", "Mars", "Mercury", "Earth"]
  },
  {
    "id": "7",
    "question": "Which of these are types of clouds?",
    "correctOptions": ["Cumulus", "Stratus", "Nimbus"],
    "choices": ["Cumulus", "Stratus", "Nimbus", "Cirrus"]
  },
  {
    "id": "8",
    "question": "What is the boiling point of water?",
    "correctOptions": ["100°C"],
    "choices": ["90°C", "100°C", "110°C", "120°C"]
  },
  {
    "id": "9",
    "question": "Which of these are elements on the periodic table?",
    "correctOptions": ["Oxygen", "Hydrogen"],
    "choices": ["Oxygen", "Hydrogen", "Helium", "Carbon"]
  },
  {
    "id": "10",
    "question": "What is the capital of Japan?",
    "correctOptions": ["Tokyo"],
    "choices": ["Tokyo", "Seoul", "Beijing", "Bangkok"]
  }
]; 

let selectedAnswers = []; 

router.get("/", function (request, response) {
  response.send(selectedAnswers);
});

router.post("/", function(request, response) {
    const bodydata = request.body; 
    let totalScore = 0; 
    const results = [];

    answerkey.forEach((question) => {
        const userAnswer = bodydata.find(answer => answer.id === question.id);
        const userSelectedOptions = userAnswer ? userAnswer.Ans : [];
        const correctOptionIndices = question.correctOptions.map(correctOption => 
            question.choices.indexOf(correctOption).toString()
        );

        const isCorrect = JSON.stringify(userSelectedOptions) === JSON.stringify(question.correctOptions);
        if (isCorrect) {
            totalScore++;
        }

        results.push({
            id: question.id,
            question: question.question,
            userSelectedOptions: userSelectedOptions,
            correctOptions: correctOptionIndices,  
            choices: question.choices,
            response: isCorrect ? "correct" : "wrong"
        });
    });

    const totalQuestions = answerkey.length;
    const scorePercentage = (totalScore / totalQuestions) * 100;

    selectedAnswers = bodydata; 
    response.send({ totalScore, scorePercentage, results });
});

export default router;
