// src/components/Catalog.js
import React, { useState } from 'react';
import './Catalog.css';
import { catalogItems } from '../data';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: '',
    itemType: '',
    location: ''
  });
  const [filteredItems, setFilteredItems] = useState(catalogItems);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const results = catalogItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(results);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
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
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <form onSubmit={handleFilterSubmit} className="filter-form">
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
            <option value="mattress">Mattress</option>
            <option value="diningTable">Dining Table</option>
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

      <div className="catalog-items">
        {filteredItems.map(item => (
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

export default Catalog;
