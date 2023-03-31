import React from 'react';
import axios from 'axios';

const Feedback = ({ onUpVote, onDownVote }) => {
  const handleUpVote = async () => {
    try {
      await axios.post('/api/feedback', { feedbackType: 'upvote' });
      onUpVote();
    } catch (error) {
      console.error('Error submitting upvote feedback:', error);
    }
  };

  const handleDownVote = async () => {
    try {
      await axios.post('/api/feedback', { feedbackType: 'downvote' });
      onDownVote();
    } catch (error) {
      console.error('Error submitting downvote feedback:', error);
    }
  };

  return (
    <div>
      <button onClick={handleUpVote}>Upvote</button>
      <button onClick={handleDownVote}>Downvote</button>
    </div>
  );
};

export default Feedback;
