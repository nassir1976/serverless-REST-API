'use strict';

// You can require any external dependencies here
const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');


// All Serverless functions (AWS and Azure) are "async" ...
exports.handler = async (event) => {
  let data;
  let id = event.pathParameters && event.pathParameters.id
  try {
    if (id) {
      data = await peopleModel.query('id').eq(id).exec()
    } else {
      data = await peopleModel.scan().exec();
    }

    console.log("it worked")
    // const {name, phone} = JSON.parse(event.body);

    // create an id
    // const id = uuid();

    // // Save it
    // const record = new peopleModel({id, name, phone});
    // const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (e) {

    return {
      statusCode: 500,
      body: e.message,
    };

  }

};