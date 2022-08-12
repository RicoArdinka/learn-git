const chai = require('chai');
const expect = chai.expect;
const api = require('../api/task-api');
const dataTarget = require('../data/data-target.json');
const jsonSchema = require('../schemas/user-schema.json');
let isiData;

chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe('Alltesting | API Test for task week 3', async() => {
    before('Seeding data user from id ', async() => { 
        let response = await api.postUser(dataTarget);
        isiData = Object.assign(response.body);
        expect(response.status).to.equal(200);
    });

    after('Remove data user ', async() => {
        let response = await api.deleteUser(isiData);
        expect(response.status).to.equal(200);
    });

    it('Testcase1 | GET id user with valid data then can access', async() => {

        const idYgAkanDicari = '';
        
        const response = await api.getIdUser(idYgAkanDicari);
        expect(response.body);
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(idYgAkanDicari);
        expect(response.body).has.jsonSchema(jsonSchema);
    });

    it('Testcase2 | GET id user with invalid data then data not found', async() => {

        let idYgAkanDicari = ''

        let response = await api.getIdUser(idYgAkanDicari);
        expect(response.body);
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal('ER-01');
        expect(response.body.message).to.equal('user not found');
    });


    it('Testcase3 | PUT update data occupation and nationality then data success update', async () => {
        isiData.occupation = 'QA automation';
        isiData.nationality = 'vietnam';

        let response = await api.putUser(isiData);
        expect(response.status).to.equal(200);
        expect(response.body.occupation).to.equal('QA automation');
        expect(response.body.nationality).to.equal('vietnam');
        expect(response.body).has.jsonSchema(jsonSchema);
    });

    it('Testcase4 | PUT update data when age value 0 then data cannot update', async() => {
        isiData.age = 0;
        
        let response = await api.putUser(isiData);
        expect(response.body);
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal('ER-03');
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
    });

    it('Testcase5 | PUT update data when hobbies empty array then data cannot update', async() => {
        isiData.hobbies = [];
        
        let response = await api.putUser(isiData);
        expect(response.body);
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal('ER-03');
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
    });


    it('Testcase6 | PUT update data when id value null then data not found', async() => {
        isiData.id = null;
        
        let response = await api.putUser(isiData);
        expect(response.body);
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal('ER-01');
        expect(response.body.message).to.equal('user not found');
    }); 
});