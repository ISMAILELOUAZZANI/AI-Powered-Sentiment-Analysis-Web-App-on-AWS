import json
import boto3

def lambda_handler(event, context):
    body = json.loads(event['body'])
    text = body.get('text', '')
    comprehend = boto3.client('comprehend')
    response = comprehend.detect_sentiment(Text=text, LanguageCode='en')
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps({'sentiment': response['Sentiment'], 'scores': response['SentimentScore']})
    }