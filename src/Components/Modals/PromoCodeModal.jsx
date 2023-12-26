import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axiosInstance from '../../hooks/axiosInstance';
import { errorNotify, successNotify } from '../../utils/toaster'
import { useNavigate } from 'react-router-dom';

const PromoCodeModal = ({ show, closeModal, productId }) => {
    const[isLoading, setIsLoading] = useState(false)
    const[validationError, setValidationError] = useState({})
    const navigate = useNavigate()

    //  state to hold form data
    const [formData, setFormData] = useState({
        promoCode: ''
    })

    //  method to reset form fields to empty
    const resetForm  = () => {
        setFormData({
            promoCode: ''
        })
    }

    //  method to call then modal is closed
    const handleClose = () => {
        resetForm()
        closeModal()
    }

    //  listen for changes on form inputs and store in state
    const handleChange = (e) => {
        const {name, value}  = e.target

        setFormData(prevFormData => (
        {...prevFormData, [name]: value}
        ))
    }

    //  method to submit form
    const handleSubmit  = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        if(formData.promoCode && formData.promoCode !== 'Rolex&Gold2024') {
            errorNotify('Invalid Promo Code')
            setIsLoading(false)
        } else {
            setIsLoading(false)
            successNotify('Access Granted')
            handleClose()
            localStorage.setItem('promoCode', 'Rolex&Gold2024')
            navigate(`/products/${productId}`)
            window.scrollTo(0,0)
        }
    }

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
            <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Promo code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='mb-3'>
                    <label htmlFor='status' style={{display: 'block'}}>
                        <span></span>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='promoCode'
                            onChange={handleChange}
                            value={formData.promoCode}
                            placeholder='Enter Promo Code'
                            required
                        />
                    </label>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="link" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="danger" type='submit'>
                    {!isLoading && 'Submit'}
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
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
          <ToastContainer />
    </div>
  )
}

export default PromoCodeModal
