import express from 'express';
const router = express.Router();
//import LibTodo from '../lib/LibTodo';
import 'dotenv/config';
import LibTurso from '../lib/LibTurso';
/**
* 
* @param
*
* @return
*/
router.get('/test', async function(req: any, res: any) {
  try {
    const client = await LibTurso.getClient();
    //console.log("url=", process.env.API_URL);
//    const resulte = await client.execute("SELECT * FROM test");
    const resulte = await client.execute("SELECT * FROM test");
    console.log(resulte.rows);
    //return res.json(response.data);
    return res.json({data: resulte.rows});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/
router.post('/get_list', async function(req: any, res: any) {
  try {
    const retObj = {ret: "NG", data: [], message: ""};
    if(req.body){
    //console.log("url=", process.env.API_URL);
      const client = await LibTurso.getClient();
      const resulte = await client.execute("SELECT * FROM test ORDER BY id DESC LIMIT 100;");
//console.log(resulte.rows);
      retObj.ret = "OK";
      //@ts-ignore
      retObj.data = resulte.rows;
      return res.json(retObj);
    }
    return res.json(retObj);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/
router.post('/get', async function(req: any, res: any) {
  try {
    const retObj = {ret: "NG", data: [], message: ""};
    if(req.body){
      const body = req.body;
console.log(body);
    //console.log("url=", process.env.API_URL);
      const client = await LibTurso.getClient();
      const sql = `SELECT * FROM test WHERE id=${body.id};`;
      const resulte = await client.execute(sql);
//console.log(resulte.rows);
      //@ts-ignore
      if(resulte.rows.length > 0){
        retObj.ret = "OK";
        retObj.data = resulte.rows[0];
      }
      return res.json(retObj);
    }
    return res.json(retObj);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/
router.post('/delete', async function(req: any, res: any) {
  try {
    const retObj = {ret: "NG", data: [], message: ""};
    if(req.body){
      const body = req.body;
console.log(body);
    //console.log("url=", process.env.API_URL);
      const client = await LibTurso.getClient();
      const sql = `DELETE FROM test WHERE id=${body.id};`;
      const resulte = await client.execute(sql);
//console.log(resulte.rows);
//      if(resulte.rows.length > 0){
//        retObj.data = resulte.rows[0];
//      }
      retObj.ret = "OK";
      return res.json(retObj);
    }
    return res.json(retObj);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/
router.post('/create', async function(req: any, res: any) {
  try {
    const retObj = {ret: "NG", data: [], message: ""};
    if(req.body){
      const body = req.body;
console.log(body);
      const sql = `
      INSERT INTO test (title, content) VALUES(
      '${body.title}' , '${body.content}'
      )
      `;
console.log("sql=", sql);
      const client = await LibTurso.getClient();
      const resulte = await client.execute(sql);
//console.log(resulte.rows);
      retObj.ret = "OK";
      //@ts-ignore
      retObj.data = resulte.rows;
      return res.json(retObj);
    }
    return res.json(retObj);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
