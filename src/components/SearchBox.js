import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const generateAnswerURL = "http://localhost:3001/api/generate-answer";
  const relatedTopicsURL = "http://localhost:3001/api/related-topics";

  const getAnswer = async (query) => {
    try {
      const response = await axios.post(generateAnswerURL, { prompt: query });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer('Error fetching answer. Please try again later.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchQuery) return;
    getAnswer(searchQuery);

    // Get related topics
    try {
      const response = await axios.post(relatedTopicsURL, { prompt: searchQuery });
      console.log('Related topics:', response.data.relatedTopics);
    } catch (error) {
      console.error('Error fetching related topics:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Enter your search query..."
        />
        <button type="submit">Search</button>
      </form>
      {answer && (
        <div>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
