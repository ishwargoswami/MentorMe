import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios';
import "./Service.css";

const Service = () => {
  const [addService, setAddService] = useState(false);
  const [formData, setFormData] = useState({
    domain: '',
    title: '',
    date: '',
    time: '',
    duration: '',
    amount: ''
  });
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/services');
      setServiceData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenServiceModal = () => {
    setAddService(true);
  };

  const handleCloseServiceModal = () => {
    setAddService(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/create-service', formData);
      if (response.status === 201) {
        alert('Service added successfully');
        setFormData({
          domain: '',
          title: '',
          date: '',
          time: '',
          duration: '',
          amount: ''
        });
        handleCloseServiceModal();
        fetchData();
      } else {
        alert('Failed to add service');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to add service');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/services/${id}`);
      if (response.status === 200) {
        alert('Service deleted successfully');
        fetchData(); // Refresh data after deleting a service
      } else {
        alert('Failed to delete service');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to delete service');
    }
  };

  return (
    <div className="sm-container">
      <div className="sm-left">
        <Sidebar />
      </div>

      <div className="sm-right">
        <div className="sm-upper">
          <div className="s-title">
            Service
          </div>

          <div>
            <button id="btn-serv" onClick={handleOpenServiceModal}>
              Create New Service
            </button>
          </div>
        </div>

        <div className="sm-lower">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Amount</th>
                <th>Action</th> 
              </tr>
            </thead>
            <tbody>
              {serviceData.map((service, index) => (
                <tr key={index}>
                  <td>{service.domain}</td>
                  <td>{service.title}</td>
                  <td>{service.date}</td>
                  <td>{service.time}</td>
                  <td>{service.duration}</td>
                  <td>{service.amount}</td>
                  <td><button onClick={() => handleDelete(service._id)}>Delete</button></td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {addService && (
            <div className="serv-modal">
              <div className="serv-modal-content">
                <div className="serv-modal-title">
                  <h2>Add Service</h2>
                  <IoCloseSharp id="service-cl" onClick={handleCloseServiceModal} />
                </div>

                <div className="content">
                  <form onSubmit={handleSubmit}>
                    <div className="first">
                      <div className='form-group1'>
                        <div className="details">
                          <select
                            id="domain"
                            name="domain"
                            value={formData.domain}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Service</option>
                            <option value="call">1:1 call</option>
                            <option value="webinar">Webinar</option>
                            <option value="PriorityDM">Direct Message</option>
                          </select>
                          <input
                            type="text"
                            required
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Add Title"
                          />
                          <input
                            type="date"
                            required
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            placeholder="Date"
                          />
                          <input
                            type="time"
                            required
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            placeholder="Time"
                          />
                          <input
                            type="number"
                            required
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="Duration in hour"
                          />
                          <input
                            type="number"
                            required
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Amount (in ₹)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="serviceform">
                      <button type="submit">Add Service</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

      </div>
    </div>
  );
};

export default Service;
