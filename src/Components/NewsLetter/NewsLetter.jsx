import React, { useState } from 'react'
import './NewsLetter.css'
import { errorNotify, successNotify } from '../../utils/toaster'
import axiosInstance from '../../hooks/axiosInstance'

const NewsLetter = () => {
  const[isLoading, setIsLoading] = useState(false)
  const[validationError, setValidationError] = useState({})

  //  state to hold form data
  const [email, setEmail] = useState('')

  //  method to submit form
  const handleSubmit  = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    await axiosInstance
        .post(`/newsletter`, {email})
        .then((res) => {
            successNotify(res.data.message)
            setEmail('')
        })
        .catch(error => {
            if(error.response.status === 422) {
                setValidationError(error.response.data)
                errorNotify('An error occured!')
            } else {
            console.log(error.response.data.message)
                errorNotify('An error occured. Please, try again or reload page.')
            }
        })
        .finally(() => {
            setIsLoading(false)
        });
  } 

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers in your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div class="input-group mb-0">
        <input 
          type="email" 
          placeholder="Enter your email" 
          name='email'
          required
          value={email}
          onChange={(e) =>  setEmail(e.target.value)}
        />
        <button class="btn btn-dark" type="button" onClick={handleSubmit}>
          {!isLoading && 'Subscribe'}
          {isLoading && 
              <span>
                  <div className="spinner-grow text-light" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-danger" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>
              </span>
          }
        </button>
      </div>
      {validationError.email && <small className='text-danger m-0'>{validationError.email[0]}</small>}
    </div>
  )
}

export default NewsLetter
