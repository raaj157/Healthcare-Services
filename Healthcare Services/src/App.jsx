import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

function App() {
  const [services, setServices] = useState([]);

  // Add new service
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  // Update a service
  const updateService = (index, updatedService) => {
    const updatedServices = services.map((service, i) => 
      i === index ? updatedService : service
    );
    setServices(updatedServices);
  };

  // Delete a service
  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <ServiceForm addService={addService} />
      <ServiceList services={services} updateService={updateService} deleteService={deleteService} />
    </div>
  );
}

export default App;
