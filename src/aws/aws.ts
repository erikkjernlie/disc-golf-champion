import * as AWS from "aws-sdk";
import { User } from "src/models/client/userModel";

const docClient = new AWS.DynamoDB.DocumentClient();

export const fetchData = async (tableName: string, setScores: any) => {
  try {
    console.log("tableName", tableName);
    var params = {
      TableName: tableName,
    };

    docClient.scan(params, function (err, data) {
      if (!err) {
        console.log("err", err);
        console.log("data", data);
        setScores(data.Items);
      }
    });
  } catch (error) {
    setScores([]);
  }
};

export const putData = async (tableName: string, key: string) => {
  var params = {
    TableName: tableName,
    Key: {
      name: key,
    },
    UpdateExpression: "set score = score + :val",

    ExpressionAttributeValues: {
      ":val": 1,
    },
    ReturnValues: "UPDATED_NEW", // will get the returned value
  };
  docClient.update(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      return data;
    }
  });
};

export const updateChampion = async (tableName: string, key: string) => {
  console.log("current champion", key);
  var params = {
    TableName: tableName,
    Key: {
      name: "champion",
    },
    AttributeUpdates: {
      "currentChampion": {
        Action: "PUT",
        Value: key,
      },
    },
  };
  docClient.update(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      return data;
    }
  });
};
