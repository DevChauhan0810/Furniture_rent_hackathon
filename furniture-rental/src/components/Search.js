import React, { useState, useEffect } from 'react';
import './Homepage.css'; // Import your CSS file

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search logic based on searchQuery
    // For example, filter items from catalog based on searchQuery
    const results = catalogItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display catalog items */}
      <div className="catalog-items">
        {catalogItems.map(item => (
          <div className="item" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
