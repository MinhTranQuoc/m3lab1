import React, { useState } from "react";
import "../assets/css/Registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    securityQuestion: "",
    securityAnswer: "",
  });
  const [errors, setErrors] = useState({});
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const REGEX = {
    firstName:
      /^[a-zA-Z ỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ']+$/,
    lastName:
      /^[a-zA-Z ỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ']+$/,
    password: /^[A-Za-z\d@$!%*?&]{8,}$/,
    confirmPassword: /^[A-Za-z\d@$!%*?&]{8,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^[0-9]{9,15}$/,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = "First Name is required";
    } else if (!REGEX.firstName.test(formData.firstName)) {
      validationErrors.firstName = "First Name is invalid";
    }
    if (!formData.lastName) {
      validationErrors.lastName = "Last Name is required";
    } else if (!REGEX.lastName.test(formData.lastName)) {
      validationErrors.lastName = "Last Name is invalid";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (!REGEX.password.test(formData.password)) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Password do not match";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!REGEX.email.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone is required";
    } else if (!REGEX.phone.test(formData.phone)) {
      validationErrors.phone = "Phone is invalid";
    }
    if (!formData.securityQuestion) {
      validationErrors.securityQuestion = "Security question is required";
    }
    if (!formData.securityAnswer) {
      validationErrors.securityAnswer = "Security answer is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
      };
      setRegisteredUsers(...registeredUsers, newUser);
      setFormData({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        securityQuestion: "",
        securityAnswer: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="h-screen bg-blue-400 flex justify-end items-center">
      <div className="h-5/6 w-5/6 bg-white rounded-l-full flex justify-end ">
        <div className="w-5/6 h-full mr-16">
          <h1 className="text-center pt-16 pb-6 title">Apply as a employee</h1>
          <form
            action=""
            className=" text-xl mt-4 flex justify-around "
            onSubmit={handleSubmit}
          >
            <div className="grow w-1/2 flex justify-center">
              <div className="w-4/5 shrink-0">
                <div className="pt-3">
                  <input
                    className="bg-slate-100 border px-2 py-1 w-full"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <p className=" text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    className="bg-slate-100 border px-2 py-1 w-full "
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className=" text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    className="bg-slate-100 border px-2 py-1 w-full"
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className=" text-xs text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    className="bg-slate-100 border px-2 py-1 w-full"
                    type="text"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && (
                    <p className=" text-xs text-red-500">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="grow w-1/2 flex justify-center">
              <div className="w-4/5 shrink-0">
                <div className="pt-3">
                  <input
                    className="bg-slate-100 border px-2 py-1 w-full"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className=" text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    className="bg-slate-100 border px-2 py-1 w-full"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                  />
                  {errors.phone && (
                    <p className=" text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div className="pt-3">
                  <select
                    className="bg-slate-100 border px-2 py-1 w-full text-gray-400"
                    name="securityQuestion"
                    value={formData.securityQuestion}
                    onChange={handleChange}
                  >
                    <option value="">Security question</option>
                    <option value="What was the name of your first pet?">
                      What was the name of your first pet?
                    </option>
                    <option value="What is the name of your favorite teacher?">
                      What is the name of your favorite teacher?
                    </option>
                    <option value="What is the make and model of your first car?">
                      What is the make and model of your first car?
                    </option>
                    <option value="What is the name of your favorite book?">
                      What is the name of your favorite book?
                    </option>
                    <option value="What is your favorite food?">
                      What is your favorite food?
                    </option>
                  </select>
                  {errors.securityQuestion && (
                    <p className=" text-xs text-red-500">
                      {errors.securityQuestion}
                    </p>
                  )}
                </div>
                <div className="pt-3">
                  <input
                    className="bg-slate-100 border px-2 py-1 w-full"
                    type="text"
                    name="securityAnswer"
                    value={formData.securityAnswer}
                    onChange={handleChange}
                    placeholder="Security question"
                  />
                  {errors.securityAnswer && (
                    <p className=" text-xs text-red-500">
                      {errors.securityAnswer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="py-2 submit-button mt-5 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
