 'use strict';


const peopleModel = require('./people.schema.js');
const dynamoose = require('dynamoose')
// const {v4:uuid} = require('uuid')
exports.handler = async(event) =>{
  let data ; 
  let id = event.pathParameters && event.pathParameters.id
  
    try {
      data = await peopleModel.query('id').eq(id).exec();
      let record = new peopleModel({id})
     data = await record.delete()
    }catch(e){
      return{
        statusCode :500,
        body: e.message
      }
    }
    let response ={
      statusCode:200,
      body:JSON.stringify(data)
    }
    return response
  }
