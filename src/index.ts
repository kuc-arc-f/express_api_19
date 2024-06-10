
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
import 'dotenv/config'
//
import todoRouter from './routes/todos';
//import commonRouter from './routes/commonRouter';
//
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
console.log("env=", process.env.NODE_ENV)
console.log("EXTERNAL_API_URL=", process.env.EXTERNAL_API_URL)
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/todos', todoRouter);
//
app.get('/*', (req: any, res: any) => {
  try {
    res.send("hello!!!");
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
