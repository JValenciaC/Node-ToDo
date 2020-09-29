//const { require } = require("yargs");

const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data , (err) => {
        if(err) throw new Error('can´t save data', err); 
    }); 
}

const loadDB = () => {
    try {
       listToDo =  require('../db/data.json');   
    } catch (error) {
        listToDo = [];
    }
}

const create = (description) => {
    
    loadDB();

     let toDo = {
        description,
        complete: 'false'
    };

    listToDo.push(toDo);
    saveDB();

    return toDo; 
}

const getList = () => {

    loadDB();
    return listToDo;
} 

const getTaskByComplete = (complete) => {

   loadDB();
   return listToDo.filter(task => task.complete == complete);
   
}


const update = (description, complete = true) => {

    loadDB();

    let index = listToDo.findIndex( task => task.description === description);
    if (index >= 0)    {
        listToDo[index].complete = complete;
        saveDB();
        return true;
    }else {
        return false;
    }
} 


const deleted = (description) => {

    loadDB();
 
    let listToDeleted = listToDo.filter(task => task.description !== description);

    if (listToDo.length === listToDeleted.length)
    {
        return false;
    }
    else {
        listToDo = listToDeleted;
        saveDB();
        return true;
    }
        
    


 /*    let index = listToDo.findIndex( task => task.description === description);
    if (index >= 0)    {
       console.log(index);
        listToDo.splice(index,1);
        saveDB();
        return true;
    }else {
        return false;
    }  */
} 


module.exports = {
      create,
      getList,
      update,
      deleted,
      getTaskByComplete 
    };