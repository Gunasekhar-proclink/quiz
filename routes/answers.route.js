import express from "express" 
const router = express.Router(); 

const answerkey = [
    {
        "id": "1",
        "Ans": "A"
    },
    {
        "id": "2",
        "Ans": ["A", "C", "D"]
    },
    {
        "id": "3",
        "Ans": "A"
    },
    {
        "id": "4",
        "Ans": ["A", "B", "C", "E", "F"]
    },
    {
        "id": "5",
        "Ans": "A"
    }
]
router.get("/", function (request, response) {
    response.send(answerkey);
  });
  
  // /movies/99 |: makes the id variable
  router.get("/:id", function (request, response) {
    const answerid = request.params.id;
    const answer = answerkey.find((m) => m.id == answerid);
    if (!answer) {
      response.status(404).send(" Error 404 ! Movie Not found");
    } else {
      response.send(answer);
    }
  });

export default router