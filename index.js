import express from "express"; 
import cors from 'cors'; // Default Import 
import questionRouter from './routes/questions.route.js'
import answersRouter from './routes/answers.route.js'
const app = express();


app.use(cors()) // Cross-Origin Resource Sharing
app.use(express.json()) // Automatically convertes our data into json format . 

const PORT = process.env.PORT || 4000 ;

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
}); // callback function

app.use("/questions" , questionRouter)
app.use("/answers" , answersRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); // Which port should it listen to // call back function it only prints when the serve is started .
 
