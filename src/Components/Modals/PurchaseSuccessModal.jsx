import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axiosInstance from '../../hooks/axiosInstance';
import { errorNotify, successNotify } from '../../utils/toaster'
import { NavLink, useNavigate } from 'react-router-dom';

const PurchaseSuccessModal = ({ show, closeModal, user}) => {
    const navigate = useNavigate()

    //  method to call then modal is closed
    const handleClose = () => {
        closeModal()
    }


  return (
    <div>
      <Modal show={show} 
        onHide={handleClose} centered 
        backdrop="static"
        keyboard={false}
        >
            <Form>
              <Modal.Body>
                <div>
                    <div className='text-center success-icon'>
                        <i className='mdi mdi-check-circle-outline text-center'></i>
                    </div>
                    {/* <p>Dear {user}</p> */}
                    <p>Your order have been received and will be processed accordingly.</p>
                    <p>
                        Watch documents, bills, and delivery details will be sent 
                        to the mobile number and email you have provided. Be on the lookout for them. 
                    </p>
                    <p>
                        Please Understand that the purchase of luxury items like Rolexes 
                        requires proper documentation which may take some hours to process.
                    </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
                <NavLink 
                    className='btn btn-success' 
                    type='button'
                    to='/'
                >
                    Continue Shopping
                </NavLink>
              </Modal.Footer>
            </Form>
          </Modal>
          <ToastContainer />
    </div>
  )
}

export default PurchaseSuccessModal
