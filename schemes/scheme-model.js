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
    .join('steps as st')
    .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions', 'st.scheme_id')
    .where('st.scheme_id', id);
}
function add (scheme) {
    return db('schemes').insert(scheme, 'id');
}
function addStep (steps, scheme_id) {
    return db('steps')
    .where('steps.scheme_id', '=', scheme_id)
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