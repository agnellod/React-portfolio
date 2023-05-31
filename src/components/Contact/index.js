import React, {useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [formErrors, setFormErrors] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const { name, email, message } = formData;
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    };
  
    const validateForm = () => {
      let errors = {};
      let isValid = true;
  
      if (!name) {
        errors.name = 'Name is required';
        isValid = false;
      }
  
      if (!email) {
        errors.email = 'Email is required';
        isValid = false;
      } else if (
        !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)
      ) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
      }
  
      if (!message) {
        errors.message = 'Message is required';
        isValid = false;
      }
  
      setFormErrors(errors);
      return isValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log(formData);
        setFormData({ name: '', email: '', message: '' });
      }
    };
  
    return (
      <div className="container mt-5">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <div className="invalid-feedback">{formErrors.name}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <div className="invalid-feedback">{formErrors.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };
export default Contact;