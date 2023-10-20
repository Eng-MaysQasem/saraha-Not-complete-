import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
<div className="container text-center my-5">
  <div className="user my-3">
    <i className="fas fa-user-secret user-icon" />
    <h4 className="login">Login</h4>
  </div>
  <div className="card p-5 w-50 m-auto">
    <form method="POST" action="/handleLogin">
      <input className="form-control" placeholder="Enter your email" type="text" name="email" />
      <input className="form-control my-4 " placeholder="Enter your Password" type="text" name="password" />
      <button className="btn btn-default-outline my-4 w-100 rounded">Login</button>
      <p><Link className="text-muted forgot btn" href>I Forgot My Password</Link></p>
      <Link className="btn btn-default-outline" href="register.html">Register</Link>
    </form>
  </div>
</div>


  )
}


