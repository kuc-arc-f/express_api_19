import LibConfig from './LibConfig';
//require('dotenv').config();
import LibTurso from './LibTurso';
//
const  LibTodo = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  getItems :async function(req: any){
    const retObj = {ret: "NG", data: [], message: ""};
    try {
      const body = req.body;      
      if(req.body){
      console.log(body.userId);
      const client = await LibTurso.getClient();
      const resulte = await client.execute("SELECT * FROM test ORDER BY id DESC LIMIT 100;");
      //console.log(resulte.rows);
      return resulte.rows;        
      }
      return [];      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems:' +err);
    }          
  },    
  /**
  * 
  * @param
  *
  * @return
  */
  getItem :async function(id: number){
    try {
      return {};      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem:' +err);
    }          
  },
  /**
  * 
  * @param
  *
  * @return
  */
  addTodo :async function(req: any){
    try {
//console.log(LibConfig.OK_CODE);
console.log(req.body);
      const body = req.body;
      return {
        ret: LibConfig.OK_CODE, data: {} 
      };
    } catch (err) {
      console.error(err);
      throw new Error('Error , addTodo: '+ err);
    }    
  },
  /**
  * 
  * @param
  *
  * @return
  */
  updateTodo :async function(req: any){
    try {
      //console.log(LibConfig.OK_CODE);
      console.log(req.body);
      const body = req.body;
      return {
        ret: LibConfig.OK_CODE, data: {} 
      };
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateTodo: '+ err);
    }    
  },  
  /**
  * 
  * @param
  *
  * @return
  */
  deleteTodo :async function(req: any){
    try {
      //console.log(LibConfig.OK_CODE);
      console.log(req.body);
      const body = req.body;
//console.log(result);
      return {
        ret: LibConfig.OK_CODE, data: body 
      };
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteTodo: '+ err);
    }    
  }, 
  /**
  * 
  * @param
  *
  * @return
  */ 
  test1 :async function(req: any){
    try {
      const body = req.body;      
      return [];      
    } catch (err) {
      console.error(err);
      throw new Error('Error , test1:' +err);
    }          
  },            
}
export default LibTodo;
