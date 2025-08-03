import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const analyzeSentiment = async () => {
    const response = await fetch('YOUR_API_GATEWAY_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{padding: '2rem'}}>
      <h2>Sentiment Analysis App (AWS Comprehend)</h2>
      <textarea rows={5} cols={50} value={text} onChange={e => setText(e.target.value)} />
      <br />
      <button onClick={analyzeSentiment}>Analyze Sentiment</button>
      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;