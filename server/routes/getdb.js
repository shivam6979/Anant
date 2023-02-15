import {DynamoDBClient, GetItemCommand} from '@aws-sdk/client-dynamodb';
const ddbClient = new DynamoDBClient({region:'ap-south-1'});

const getItem = async()=>{
    const params = {
        TableName:"classroom-training-bucket",
        key:{
            // classroom- training-bucket:
        }
    }
}