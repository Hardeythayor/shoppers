import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        {/* <!-- Nav tabs --> */}
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#home">Description</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#menu1">Reviews (122)</a>
            </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div className="tab-content">
            <div className="tab-pane container active" id="home">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quis assumenda hic accusamus quod, eligendi aliquam delectus a, 
                    id dolores, aut omnis. Omnis, corrupti perferendis. 
                    Assumenda dolorum aut ab eos ipsam?
                </p>
            </div>
            <div className="tab-pane container fade" id="menu1">2</div>
        </div>
    </div>
  )
}

export default DescriptionBox
