import React, { useState } from 'react';
import './Homepage.css'; // Import your CSS file

const Homepage = () => {
  const [filters, setFilters] = useState({
    priceRange: '',
    itemType: '',
    location: ''
  });
  const [filteredItems, setFilteredItems] = useState([]);

  // Function to handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  // Function to handle filter submission
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Implement filter logic based on filters object
    // For example, filter items from catalog based on selected filters
    let results = [...catalogItems];

    if (filters.priceRange) {
      results = results.filter(item => item.price <= filters.priceRange);
    }

    if (filters.itemType) {
      results = results.filter(item => item.type === filters.itemType);
    }

    if (filters.location) {
      results = results.filter(item => item.location === filters.location);
    }

    setFilteredItems(results);
  };

  return (
    <div className="container">
      <form onSubmit={handleFilterSubmit}>
        <label>
          Price Range:
          <input
            type="number"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Item Type:
          <select
            name="itemType"
            value={filters.itemType}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="sofa">Sofa</option>
            <option value="bed">Bed</option>
            <option value="chair">Chair</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          />
        </label>
        <button type="submit">Apply Filters</button>
      </form>

      {/* Display filtered items */}
      {filteredItems.length > 0 && (
        <div className="filtered-results">
          <h3>Filtered Results:</h3>
          <ul>
            {filteredItems.map(item => (
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
