import React, { useState } from 'react';

const ServiceList = ({ services, updateService, deleteService }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    const service = services[index];
    setEditName(service.name);
    setEditDescription(service.description);
    setEditPrice(service.price);
  };

  const handleUpdate = (index) => {
    updateService(index, { name: editName, description: editDescription, price: editPrice });
    setEditingIndex(null);
  };

  return (
    <div>
      <h2>Service List</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
                <button className="update-btn" onClick={() => handleUpdate(index)}>Update</button>
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {service.name}</p>
                <p><strong>Description:</strong> {service.description}</p>
                <p><strong>Price:</strong> ${service.price}</p>
                <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => deleteService(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
