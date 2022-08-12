const httpCall = require('supertest');
const serverAPI = httpCall('http://localhost:1234');

function getIdUser(inputId){
    return serverAPI.get(`/v1/users/${inputId}`)
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json');
}

function postUser(bodyRequestData){
    return serverAPI.post('/v1/users')
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
    .send(bodyRequestData);
}

function putUser(bodyRequestData){
    return serverAPI.put('/v1/users')
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
    .send(bodyRequestData);
}

function deleteUser(){
    return serverAPI.del('/v1/users/removeAll')
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application');
}

module.exports ={
    getIdUser,
    postUser,
    putUser,
    deleteUser
};