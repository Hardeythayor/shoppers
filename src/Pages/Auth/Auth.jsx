import React from 'react'
import '../CSS/Auth.css'

const Auth = () => {
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign In</h1>
          <div className="loginsignup-fields">
            <div>
              <input type="text" class="form-control" placeholder="Fullname" />
            </div>
            <div>
              <input type="text" class="form-control" placeholder="Promo code" />
            </div>
          </div>
          <div className="d-grid">
            <button className='btn btn-danger btn-block'>Continue</button>
          </div>
          <p className="loginsignup-login">
            {/* Already  have an account? 
            <span> Login here</span> */}
            <div className="loginsignup-agree">
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> 
                  By continuing, I agree to the terms of use & privacy policy
                </label>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth
