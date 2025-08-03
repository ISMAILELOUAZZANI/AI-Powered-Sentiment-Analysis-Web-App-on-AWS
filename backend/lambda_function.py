import json
import boto3

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        text = body.get('text', '')
        if not text:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'No text provided.'})
            }
        comprehend = boto3.client('comprehend')
        response = comprehend.detect_sentiment(Text=text, LanguageCode='en')
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'sentiment': response['Sentiment'],
                'scores': response['SentimentScore']
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }