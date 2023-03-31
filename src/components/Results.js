import React from 'react';

const Results = ({ explanation, relatedTopics }) => {
  return (
    <div>
      <h2>Explanation</h2>
      <p>{explanation}</p>
      <h2>Related Topics</h2>
      <ul>
        {relatedTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
