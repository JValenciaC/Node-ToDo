const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = todo.create(argv.description);
        //console.log(tarea);
        break;

    case 'list':
        let list = todo.getList();
        
        console.log(list);
        for (let task of list) {
            console.log('---------------Taks ---------------'.green);
            console.log(task.description);
            console.log(task.complete);
            console.log('------------------------------------'.green);
        } 
        
        break;
    
    case 'getTaskByComplete':
        let listOfTaskCompleted = todo.getTaskByComplete(argv.complete);
        
        if(listOfTaskCompleted.length === 0)
        {
            console.log('--- No se encontraron resultados -----');
        }else{
            for (let task of listOfTaskCompleted) {
                console.log('---------------Taks ---------------'.green);
                console.log(task.description);
                console.log(task.complete);
                console.log('------------------------------------'.green);
            }  
        }
        break;

    case 'update':
        let updated = todo.update(argv.description, argv.complete);
        console.log(updated);
        break;
    
    case 'delete':
        let deleted = todo.deleted(argv.description);
        console.log(deleted);
            break;
    default:
        console.log('comando no reconocido');
        break;
}