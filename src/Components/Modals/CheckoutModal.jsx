import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axiosInstance from '../../hooks/axiosInstance';
import { errorNotify, successNotify } from '../../utils/toaster'
import PurchaseSuccessModal from './PurchaseSuccessModal';

const CheckoutModal = ({ show, closeModal, productId }) => {
    const[isLoading, setIsLoading] = useState(false)
    const[validationError, setValidationError] = useState({})

    // create modal show state
    const [showSuccess, setShowSuccess] = useState(false);

    //  state to hold form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        houseNumber: '',
        streetName: '',
        city: '',
        country: '',
        isRead: false,
        productId: ''
    })

    //  method to reset form fields to empty
    const resetForm  = () => {
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            houseNumber: '',
            streetName: '',
            city: '',
            country: '',
            isRead: false,
            productId: ''
        })
    }

    //  method to call then modal is closed
    const handleClose = () => {
        resetForm()
        closeModal()
    }

    //  close modal
    const handleCloseSuccess = () => setShowSuccess(false);

    //  listen for changes on form inputs and store in state
    const handleChange = (e) => {
        const {name, value, type, checked}  = e.target

        setFormData(prevFormData => (
            {...prevFormData, [name]: type === "checkbox" ? checked : value}
        ))
    }

    //  method to submit form
    const handleSubmit  = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        formData.productId = productId
        await axiosInstance
            .post(`/products/purchase`, formData)
            .then((res) => {
                successNotify(res.data.message)
                handleClose()
                setShowSuccess(true)
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
    <>
        <div>
        <Modal show={show} onHide={handleClose} centered>
                <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>Firstname</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='firstname'
                                onChange={handleChange}
                                value={formData.firstname}
                                required
                            />
                        </label>
                        {validationError.firstname && <small className='text-danger my-1'>{validationError.firstname[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>Lastname</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='lastname'
                                onChange={handleChange}
                                value={formData.lastname}
                                required
                            />
                        </label>
                        {validationError.lastname && <small className='text-danger my-1'>{validationError.lastname[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>Email</span>
                            <input 
                                type='email' 
                                className='form-control' 
                                name='email'
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </label>
                        {validationError.email && <small className='text-danger my-1'>{validationError.email[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>Phone Number</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='phone'
                                onChange={handleChange}
                                value={formData.phone}
                                required
                            />
                        </label>
                        {validationError.phone && <small className='text-danger my-1'>{validationError.phone[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>House Number</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='houseNumber'
                                onChange={handleChange}
                                value={formData.houseNumber}
                                required
                            />
                        </label>
                        {validationError.houseNumber && <small className='text-danger my-1'>{validationError.houseNumber[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>Street Name</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='streetName'
                                onChange={handleChange}
                                value={formData.streetName}
                                required
                            />
                        </label>
                        {validationError.streetName && <small className='text-danger my-1'>{validationError.streetName[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>City</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='city'
                                onChange={handleChange}
                                value={formData.city}
                                required
                            />
                        </label>
                        {validationError.city && <small className='text-danger my-1'>{validationError.city[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='status' style={{display: 'block'}}>
                            <span>Country</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='country'
                                onChange={handleChange}
                                value={formData.country}
                                required
                            />
                        </label>
                        {validationError.country && <small className='text-danger my-1'>{validationError.country[0]}</small>}
                    </div>
                    <div className='mb-3'>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="isRead" 
                                checked={formData.isRead}
                                onChange={handleChange}
                                name='isRead'
                            />
                            <label className="form-check-label" htmlFor='isRead'>
                                I agree to the <a
                                    className='text-success text-decoration-none'
                                    href={'/terms'}
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Terms and Conditions </a>  of purchase
                            </label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="link" onClick={handleClose}>
                    Close
                    </Button>
                    <Button 
                        variant="danger" 
                        type='submit'
                        disabled = {formData.isRead === false}
                    >
                        {!isLoading && 'Proceed to checkout'}
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
        <PurchaseSuccessModal show={showSuccess} closeModal={handleCloseSuccess} user={formData.name}/>
    </>
  )
}

export default CheckoutModal
