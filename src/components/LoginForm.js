
import React, { useState } from 'react';

const LoginForm = () => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(input);
      setInput({ username: '', email: '', password: '', confirm_password: '' });
      alert('Form submitted successfully');
    }
  };
  const validate = () => {
    const newErrors = {};
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <div className='container'>
      <div className='form-wrapper'>
        <h1>
          GROCERY STORE
        </h1>
        <h2 className='text-center mb-4'>SIGNUP FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username' className='form-label'>
              USERNAME:
            </label>
            <input
              type='text'
              name='username'
              value={input.username || ''}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter username'
            />
            <div className='text-danger form-text'>{errors.username}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              EMAIL ADDRESS:
            </label>
            <input
              type='text'
              name='email'
              value={input.email || ''}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter Email'
            />
            <div className='text-danger form-text'>{errors.email}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='password' className='form-label'>
              PASSWORD:
            </label>
            <input
              type='password'
              name='password'
              value={input.password || ''}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter password'
            />
            <div className='text-danger form-text'>{errors.password}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='confirm-password' className='form-label'>
              CONFIRM PASSWORD:
            </label>
            <input
              type='password'
              name='confirm_password'
              value={input.confirm_password || ''}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter confirm password'
            />
            <div className='text-danger form-text'>{errors.confirm_password}</div>
          </div>
          <input type='submit' value='SUBMIT' className='btn btn-submit mx-auto mb-3' />
        </form>
      </div>
    </div>
  );
};
export default LoginForm;