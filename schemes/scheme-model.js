const db = require('../data/db-config');

module.exports ={
    find,
    findById,
    findSteps,
    add,
    addStep,
    remove,
    update
}

function find() {
    return db('schemes');
}
function findById(id){
    return db('schemes')
    .where({id})
    .first()
}
function findSteps(id) {
    return db('schemes as s')
    .join('steps as st', 's.id', 'st.scheme_id' )
    .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions', 'st.scheme_id')
    .where('s.id', id);
}
//ASYNC RETURNS OBJECTS AFTER DB FETCH
async function add (scheme) {
    console.log(scheme);
    const [id] = await db('schemes').insert(scheme) //inserts new data and abstracts the id
    return db('schemes').where({id}).first() //return db call for row that matches the abstracted id
}
function addStep (steps, scheme_id) {
    return db('steps')
    .where({scheme_id})
    .insert(steps, 'id');
}
function remove(id){
    return db('schemes')
    .where({id})
    .del();
}
function update(changes, id){
    return db('schemes')
    .where({id})
    .update(changes);
}