


import React, { useState } from 'react';
import styles from './FormContainer.modules.css'; // Import your CSS module

const FormContainer = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Contact Us</h2>
      {isSuccess && <div className={styles.successMessage}>Thank you for your message! We will get back to you soon.</div>}
      {isError && <div className={styles.errorMessage}>Oops! There was a problem submitting your message.</div>}
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
