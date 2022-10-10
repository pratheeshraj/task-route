import React from 'react'

const Edit = () => {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
            <div className='form-group'>
                <label>User Name</label>
                <input type={"text"} className="form-control" />
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='form-group'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
            <label>country</label>
            <select className='form-control'>
                <option>India</option>
                <option>America</option>
                <option>China</option>
            </select>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
            <label>State</label>
            <select className='form-control'>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Karnadaka</option>
            </select>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
            <label>City</label>
            <select className='form-control'>
                <option>India</option>
                <option>America</option>
                <option>China</option>
            </select>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
            <label>Phone Number</label>
            <input type="text" className='form-control'/>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
            <label>Date Of Birth</label>
            <input type="date" className='form-control'/>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
            <label>Gender</label>
            <select className='form-control'>
                <option>female</option>
                <option>male</option>
            </select>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className='form-group'>
            <button className='btn btn-primary'>submit</button>
        </div>
        </div>
    </div>
</div>
  )
}

export default Edit