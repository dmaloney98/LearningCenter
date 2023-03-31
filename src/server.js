const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route for generating an answer
app.post('/api/generate-answer', (req, res) => {
  const { prompt } = req.body;

  // Implement your logic to generate an answer based on the user's search query
  const answer = `Answer for the search query "${prompt}"`;

  res.json({ answer });
});

// Route for fetching related topics
app.post('/api/related-topics', (req, res) => {
  // Replace the static list with a dynamic list of related topics based on the user's query or search history
  const relatedTopics = [
    'Related Topic 1',
    'Related Topic 2',
    'Related Topic 3',
  ];
  res.json({ relatedTopics });
});

// Route for handling user feedback
app.post('/api/feedback', (req, res) => {
  const { feedbackType } = req.body;

  // Implement your logic to handle user feedback, e.g., store feedback in a database
  if (feedbackType === 'upvote') {
    console.log('User upvoted');
  } else if (feedbackType === 'downvote') {
    console.log('User downvoted');
  }

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
