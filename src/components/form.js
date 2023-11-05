// ReservationForm.js

import React, { useState } from 'react';
import '../styles/form.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    houseNumber: '',
    streetName: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    table: '',
    numberOfPeople: '',
    cardNumber: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    houseNumber: '',
    streetName: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    table: '',
    numberOfPeople: '',
    cardNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error when the user makes a change
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Basic validation for required fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '' && key !== 'pincode') {
        newFormErrors[key] = 'This field is required';
        isValid = false;
      }
    });

    // Custom validation for pincode
    const pincodePattern = /^\d{6}$/;
    if (!pincodePattern.test(formData.pincode)) {
      newFormErrors.pincode = 'Invalid pincode';
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3001/api/submitReservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Handle successful form submission, e.g., show a success message
          console.log('Form submitted successfully!');
        } else {
          // Handle errors, e.g., show an error message
          console.error('Error submitting the form');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-section">
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.name && <div className="form-error">{formErrors.name}</div>}
      </div>

      <div className="form-section">
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.email && <div className="form-error">{formErrors.email}</div>}
      </div>

      <div className="form-section">
        <label className="form-label"> 
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.phoneNumber && <div className="form-error">{formErrors.phoneNumber}</div>}
      </div>
      <div className="form-section">
        <h2>Reservation Details</h2>
        <label className="form-label">
          Reservation Table:
          <input
            type="text"
            name="table"
            value={formData.table}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.table && <div className="form-error">{formErrors.table}</div>}
      </div>

      <div className="form-section">
        <label className="form-label">
          Number of People:
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.numberOfPeople && <div className="form-error">{formErrors.numberOfPeople}</div>}
      </div>

      <div className="form-section">
        <h2>Address</h2>
        <label className="form-label">
          House Number:
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.houseNumber && <div className="form-error">{formErrors.houseNumber}</div>}
      </div>

      <div className="form-section">
        <label className="form-label">
          Street Name:
          <input
            type="text"
            name="streetName"
            value={formData.streetName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.streetName && <div className="form-error">{formErrors.streetName}</div>}
      </div>

      <div className="form-section">
        <label className="form-label">
          Area:
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.area && <div className="form-error">{formErrors.area}</div>}
      </div>

      <div className="form-section">
        <label className="form-label">
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.city && <div className="form-error">{formErrors.city}</div>}
      </div>

      <div className="form-section">
        <label className="form-label">
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.state && <div className="form-error">{formErrors.state}</div>}
      </div>

      <div className="form-section">
        <label className="form-label">
          Pincode:
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.pincode && <div className="form-error">{formErrors.pincode}</div>}
      </div>

      <div className="form-section">
        <h2>Card Details</h2>
        <label className="form-label">
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        {formErrors.cardNumber && <div className="form-error">{formErrors.cardNumber}</div>}
      </div>

      <div className="form-section">
        <button type="submit" className="form-button">
          Reserve
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
