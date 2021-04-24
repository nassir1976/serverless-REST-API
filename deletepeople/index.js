'use strict';
const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');

exports.handler = async(event) => {
  console.log('event======',event)

  let data;
  
  try{
  const id = event.id
    await peopleModel.delete({"id": id});
    
  }catch(e){
    return {
      statusCode: 500,
      body: e.message,
    }
  }
  let response = {
    statusCode: 200,
    body: JSON.stringify(data),
  }
  console.log(response.body);
  return response;
}