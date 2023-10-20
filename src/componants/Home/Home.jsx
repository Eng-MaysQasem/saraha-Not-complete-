import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div class="container text-center my-5">
    <h4>Sarahah allows you to receive constructive feedback from your friends and co-workers</h4>
    <div class="buttons d-flex justify-content-center align-items-center  flex-column">
        <Link to="login.html" class="btn btn-default-outline my-4"><i class="fas fa-user"></i> Login</Link>
        <Link to="register.html" class="btn btn-default-outline"><i class="far fa-edit"></i> Register</Link>
    </div>
</div>

  )
}

