import express from "express" ; 
import { v4 as uuidv4 } from "uuid"; // Named Import 
const router = express.Router(); 


let questions = [
    {
        "id": "1",
        "Questions": "What is the capital of France?",
        "question_type": "MCQ",
        "Choices": ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        "id": "2",
        "Questions": "Which of these are planets in our solar system?",
        "question_type": "MCA",
        "Choices": ["Earth", "Moon", "Mars", "Jupiter"]
    },
    {
        "id": "3",
        "Questions": "What is the largest ocean on Earth?",
        "question_type": "MCQ",
        "Choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
    },
    {
        "id": "4",
        "Questions": "Which of these are programming languages?",
        "question_type": "MCA",
        "Choices": ["Java", "Python", "C++", "English"]
    },
    {
        "id": "5",
        "Questions": "What is the chemical symbol for gold?",
        "question_type": "MCQ",
        "Choices": ["Au", "Ag", "Cu", "Fe"]
    }
]

// /movies -> movies
router.get("/", function (request, response) {
    response.send(questions);
  });
  
  // /movies/99 |: makes the id variable
  router.get("/:id", function (request, response) {
    const questionid = request.params.id;
    const question = questions.find((m) => m.id == questionid);
    if (!question) {
      response.status(404).send(" Error 404 ! Movie Not found");
    } else {
      response.send(question);
    }
  });

  export default router