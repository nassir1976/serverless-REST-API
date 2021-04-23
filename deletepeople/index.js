'use strict';
const peopleModel = require('./people.schema.js');
const dynamoose = require('dynamoose')
// const {v4:uuid} = require('uuid')
exports.handler = async (event) => {
  let data;
  let id = event.pathParameters && event.pathParameters.id

  try {
    let result = await peopleModel.delete({ id: id })
    console.log(result)
  } catch (e) {

    return {
      statusCode: 500,
      response: e.message,
    }
  }

  let response = {
    statusCode: 200,
    body: JSON.stringify({}),
  };


  console.log(response.body)
  return response;


}

