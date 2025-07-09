import React from 'react'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center p-1 rounded w-100 bg-primary'>
        <div className='d-flex'>
            <img className="bg-transparent rounded" src='go_swift_logo.jpeg' alt='logo' style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}/><h3>WIFT</h3>
        </div>
       
        <div className='d-flex justify-content-center align-items-center p-1'>
             <div className="rounded-circle bg-light p-3 m-1 fs-4" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                   EH
                                </div>
            <div>
                Ervin Howel
            </div>
        </div>

    </div>
  )
}

export default Navbar