import React from 'react'
import {Link} from 'react-router-dom';
function List() {
  return (
   <div className='box1'>

   {/* <div className="box1">
    <ul>
      <li className='nav-item item montserrat'>
      <li><Link to='/Box2'>HOME</Link></li>
        <Link to='/Box3'>ABOUT US</Link></li>
      <li><Link to='/Box6'>SERVICE</Link></li>
    
      <li><Link to='/Box11'>PRICING</Link></li>
      <li><Link to='/Box14'>BLOG</Link></li>
      <li><Link to='/Forms'>FORM</Link></li>
    </ul>
  </div> */}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="assets/images/ping.png" alt="" className="ping" />
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
{/* <li className='nav-item item montserrat'> */}
  <li className='nav-item'><Link class="nav-link" to='/Box2'>HOME</Link></li>
  <li className='nav-item'><Link class="nav-link" to='/Box3'>ABOUT </Link></li>
  <li  className='nav-item'><Link class="nav-link" to='/Box6'>SERVICE</Link></li>
  <li  className='nav-item'><Link class="nav-link" to='/Box11'>PRICING</Link></li>
  <li  className='nav-item'><Link class="nav-link" to='/Box14'>BLOG</Link></li>
  <li  className='nav-item'><Link class="nav-link" to='/Forms'>FORM</Link></li>
  {/* </li> */}
</ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </div>
  )
}

export default List

