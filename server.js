const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const openaiApiKey = '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'; // Replace with your OpenAI API key
const openaiApiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${openaiApiKey}`,
};

app.post('/generate-answer', express.json(), async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await axios.post(
      openaiApiUrl,
      {
        prompt,
        max_tokens: 50, // Adjust as needed
        n: 1,
        stop: null,
        temperature: 0.5,
      },
      { headers }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      res.send(response.data.choices[0].text.trim());
    } else {
      res.send('Sorry, I could not generate an answer.');
    }
  } catch (error) {
    console.error('Error fetching answer:', error);
    res.status(500).send('Error fetching answer. Please try again later.');
  }
});

app.get('/api/related-topics', (req, res) => {
    res.json([
      { topic: 'Topic 1' },
      { topic: 'Topic 2' },
      { topic: 'Topic 3' },
    ]);
  });
  
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
