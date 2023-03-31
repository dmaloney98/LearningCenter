import React, { useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import Results from './components/Results';
import Feedback from './components/Feedback';
import Quiz from './components/Quiz';

const App = () => {
  const [query, setQuery] = useState('');
  const [explanation, setExplanation] = useState('');
  const [relatedTopics, setRelatedTopics] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    try {
      const response = await axios.post('/api/search', { query: searchQuery });
      setExplanation(response.data.explanation);
      setRelatedTopics(response.data.relatedTopics);
    } catch (error) {
      console.error('Error fetching data from back-end:', error);
    }
  };

  const handleUpVote = async () => {
    try {
      await axios.post('/api/feedback/upvote', { query });
      console.log('User upvoted');
    } catch (error) {
      console.error('Error sending upvote feedback:', error);
    }
  };

  const handleDownVote = async () => {
    try {
      await axios.post('/api/feedback/downvote', { query });
      console.log('User downvoted');
    } catch (error) {
      console.error('Error sending downvote feedback:', error);
    }
  };

  return (
    <div>
      <h1>Your Website Title</h1>
      <SearchBox onSubmit={handleSearch} />
      <Results explanation={explanation} relatedTopics={relatedTopics} />
      <Feedback onUpVote={handleUpVote} onDownVote={handleDownVote} />
      <Quiz questions={quizQuestions} />
    </div>
  );
};

export default App;
