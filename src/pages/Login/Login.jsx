import { useState } from "react"
import "./Login.css"
import { login, signup } from "../../firebase";
import chill_spinner from '../../assets/cards/chill_spinner.gif'


const Login = () => {
  const [signState, setSignState] = useState("Sign in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(signState === "Sign in"){
      await login(email, password);
    }else {
      await signup(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading?<div className="login-spinner">
      <img src={chill_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src="/chill-logo.png" className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign up" ? <input value={name} onChange={(e)=>{setName(e.target.value)}} 
          type="text" placeholder="Username" /> : <></>}
          
          <input 
          value={email} onChange={(e)=>{setEmail(e.target.value)}}
          type="email" placeholder="Your email" />
          <input 
          value={password} onChange={(e)=>{setPassword(e.target.value)}}
          type="password" placeholder="Password"/>
          <button onClick={user_auth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Ingat saya</label>
            </div>
            <p>Butuh Bantuan?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign in" ?
               <p>Belum punya akun? <span onClick={()=> {setSignState("Sign up")}}>Daftar sekarang</span></p>
              : <p>Sudah punya akun? <span onClick={()=> {setSignState("Sign in")}}>Masuk</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
