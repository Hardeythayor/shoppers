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
        name: '',
        email: '',
        phone: '',
        address: '',
        isRead: false,
        productId: ''
    })

    //  method to reset form fields to empty
    const resetForm  = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            isRead: false
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
                            <span>Name</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                name='name'
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                        </label>
                        {validationError.name && <small className='text-danger my-1'>{validationError.name[0]}</small>}
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
                            <span>Delivery Address</span>
                            <textarea 
                                className='form-control' 
                                name='address'
                                onChange={handleChange}
                                value={formData.address}
                                required
                                rows={3}
                            ></textarea>
                        </label>
                        {validationError.address && <small className='text-danger my-1'>{validationError.address[0]}</small>}
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
