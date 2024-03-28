import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    securityQuestion: "",
    securityAnswer: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      validationErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone number is invalid";
    }
    if (!formData.securityQuestion) {
      validationErrors.securityQuestion = "Security question is required";
    }
    if (!formData.securityAnswer) {
      validationErrors.securityAnswer = "Security answer is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length === 0) {
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        securityQuestion: formData.securityQuestion,
        securityAnswer: formData.securityAnswer,
      };
      setRegisteredUsers([...registeredUsers, newUser]);
      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        securityQuestion: "",
        securityAnswer: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div>
          <label>Please select your security question:</label>
          <select
            name="securityQuestion"
            value={formData.securityQuestion}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="What is your mother's maiden name?">
              What is your mother's maiden name?
            </option>
            <option value="What city were you born in?">
              What city were you born in?
            </option>
            <option value="What is the name of your first pet?">
              What is the name of your first pet?
            </option>
          </select>
          {errors.securityQuestion && <span>{errors.securityQuestion}</span>}
        </div>
        <div>
          <label>Your Answer:</label>
          <input
            type="text"
            name="securityAnswer"
            value={formData.securityAnswer}
            onChange={handleChange}
          />
          {errors.securityAnswer && <span>{errors.securityAnswer}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
      <h2>Registered Users</h2>
      <ul>
        {registeredUsers.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} - {user.email} - {user.phone} -{" "}
            {user.securityQuestion} - {user.securityAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistrationForm;
