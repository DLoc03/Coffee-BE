import req from 'supertest';
import app from '../server';
import { json } from 'body-parser';

const SECOND=1000;
jest.setTimeout(70*SECOND);

const existUser = {
    id:2,
    userName:"richardle265",
    email:"2115241@dlu.edu.vn",
    password:"123456",
    roldeID:0
}


describe("POST: /api/login",()=>{
    describe("Login is Successfully",()=>{
        test('should return status 200', async() => {
            const res = await req(app).post("/api/login").send({
                email:"2115241@dlu.edu.vn",
                password:"123456"
            })
            expect(res.statusCode).toBe(200);
        })
    })
    describe("Email or Password is wrong",()=>{
        test('should return status 500', async() => {
            const bodyData = [
                {email:"2115241@dlu.edu.vn"},
                {password:"12345"}
            ]
            for(const body of bodyData){
                const res = await req(app).post("/api/login").set(body)
                expect(res.statusCode).toBe(500);
            }
         })
    })
})

describe("GET:/api/get-all-user",()=>{
    describe("when id is undefined",()=>{
        test('should return status 500', async() => {
            const res = (await req(app).get("/api/get-all-user").send({
                id:3
            }));
            expect(res.statusCode).toBe(500);
         })
    })
})



// describe("DELETE: /api/delete-user",()=>{
//     describe("when userID is undefined",()=>{
//         test('should return status 500', async() => { 
//             const res = await req(app).delete("/api/delete-user").send({
//                 id:1
//             })
//             expect(res.statusCode).toBe(500)
//          })
//     })
// })