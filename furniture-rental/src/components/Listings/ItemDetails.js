import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemDetails = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details based on itemId from API or mock data
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`/api/items/${itemId}`); // Replace with your API endpoint
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item details:', error);
        // Handle error (show message or redirect to error page)
      }
    };

    fetchItemDetails();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>; // Handle loading state while fetching item details
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      {/* Add more item details or options */}
    </div>
  );
};

export default ItemDetails;
