import { useState } from 'react'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import linkedin from '../assets/linkedin.png'
import illustration from '../assets/illustration_create_a_count.svg'
import { Outlet } from 'react-router-dom'
import '../Login.css'

function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <>
       <main>
      <h2>Sign in</h2>
      <div className="social-midia">
        <a href="#">
          <img src={google} alt="Google" />
        </a>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
      <div className="or">
        <span>OR</span>
      </div>
      <form action="/buscador">
        <label for="email">
          <span>E-mail</span>
          <input type="email" name="email" id="email"  onChange={(text)=>setEmail(text)} />
        </label>
        <label for="password">
          <span>Password</span>
          <input type="password" name="password" id="password" onChange={(text)=>setSenha(text)} />
        </label>

<Outlet/>
        <input type="submit" value="Login" id="button" />
      </form>
    </main>
    <section className="images">
      <img
        src={illustration}
        id="images"
        alt="Create Account illustration"
      />
      <div className="circle"></div>
    </section>
    <Outlet/>
    </>
  )
}

export default Login
