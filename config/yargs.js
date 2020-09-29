const description = {
    demand:true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer.'
}

const complete = {
    demand:true,
    alias:'c',
    desc: 'Actualización de estado de la tarea'
    }

const argv = require('yargs')
                .command('create','crear una tarea por hacer', {
                    description
                })
                .command('update','Actualizar informacion de la tarea', {
                    description,
                    complete
                }).command('List', 'Listado de tareas', {

                }).command('delete','Eliminar una tarea',{
                    description
                }).command('getTaskByComplete','Retornar las tareas por Complete', {
                    complete
                })
                .help()
                .argv;

module.exports= {argv}