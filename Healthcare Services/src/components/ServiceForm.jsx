import React, { useState } from 'react';

const ServiceForm = ({ addService }) => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceName && description && price) {
      addService({ name: serviceName, description, price });
      setServiceName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Service Name</label>
        <input 
          type="text" 
          value={serviceName} 
          onChange={(e) => setServiceName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Price</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;
