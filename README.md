# AI-Powered Sentiment Analysis Web App on AWS

A full-stack project using AWS Lambda, Amazon Comprehend, API Gateway, and React.

---

## Architecture

```
User → Web Frontend (React) → API Gateway → Lambda Function → Amazon Comprehend
```

---

## 🚀 Backend Deployment (AWS Lambda & API Gateway)

1. **Package Lambda Function**
   - Zip `lambda_function.py` (no extra packages needed if using AWS Lambda's default Python 3.8+ runtime).

2. **Create Lambda Function**
   - Go to AWS Lambda Console.
   - Create a new function (Python 3.8+).
   - Upload your zipped code or paste it into the inline editor.
   - Attach IAM permissions for `AmazonComprehendFullAccess`.

3. **Set Up API Gateway**
   - Create a new REST API.
   - Add a POST endpoint (e.g., `/analyze`).
   - Integrate it with your Lambda function.
   - Enable CORS.
   - Deploy the API and note the endpoint URL.

---

## 💻 Frontend Setup (React)

1. `cd frontend`
2. Run `npm install`
3. In `src/App.js`, replace `YOUR_API_GATEWAY_ENDPOINT` with your deployed API Gateway endpoint.
4. Run locally: `npm start`
5. (Optional) Deploy on AWS Amplify or S3+CloudFront for production.

---

## 📝 Example Usage

- Enter some text and click "Analyze Sentiment".
- The app will show the detected sentiment and confidence scores.

---

## 🧑‍🎓 Learning Outcomes

- Use AWS Lambda and API Gateway for serverless AI apps.
- Integrate Amazon Comprehend for NLP.
- Build and connect a React frontend.
- Deploy full-stack apps on AWS.

---

**Feel free to extend this project (authentication, logging, multilingual support, etc.)!**