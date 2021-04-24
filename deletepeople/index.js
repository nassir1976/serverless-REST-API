

'use strict'


const peopleModel = require('./people.schema.js');
const dynamoose = require('dynamoose')
const { v4: uuid } = require('uuid')

exports.handler = async (event) => {
  try {
    let data;
    const id = event.pathParameters && event.pathParameters.id;


    if (id) {
      const result = await peopleModel.query('id').eq(id).exec();
      data = result[0];
    } else {
      data = await peopleModel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message,
    };
  }

};






