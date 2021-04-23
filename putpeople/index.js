
'use strict'


const peopleModel = require('./people.schema.js');
const dynamoose = require('dynamoose')
const {v4:uuid} = require('uuid')
exports.handler = async(event) =>{
  let data ; 
  let id = event.pathParameters && event.pathParameters.id
  
    try {
      const {name, phone}= JSON.parse(event.body)
      data = await peopleModel.query('id').eq(id).exec();
      let record = new peopleModel({id,name, phone})
     data = await record.save()
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
