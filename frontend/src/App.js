import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('YOUR_API_GATEWAY_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult({ error: 'Failed to analyze sentiment.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{padding: '2rem', fontFamily: 'Arial'}}>
      <h2>Sentiment Analysis Web App (AWS Comprehend)</h2>
      <textarea
        rows={5}
        cols={50}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text to analyze..."
      />
      <br />
      <button onClick={analyzeSentiment} disabled={loading || !text.trim()}>
        {loading ? 'Analyzing...' : 'Analyze Sentiment'}
      </button>
      <div style={{marginTop: '1rem'}}>
        {result && result.error && <span style={{color: 'red'}}>{result.error}</span>}
        {result && result.sentiment && (
          <>
            <h3>Result:</h3>
            <div>Sentiment: <b>{result.sentiment}</b></div>
            <pre>{JSON.stringify(result.scores, null, 2)}</pre>
          </>
        )}
      </div>
    </div>
  );
}

export default App;