import {useContext, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";
import bg from '../../assets/others/authentication2.png'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";





const Login = () => {
  

  const {logInUser} = useContext(AuthContext)
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'
  


  const alertSuccess = <div className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>You have successfully Logged In !!</span>
</div>;

  const handleLogin = event =>{
    
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email,password)
    .then(result =>{
  
      const user = result.user;
      setSuccess(alertSuccess);
      setError(' ')
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'You have successfully Logged in',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from,{replace:true});
      
      console.log(user)
    })
    .catch(error =>{ 
      setError(<div className="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Wrong! You have entered a wrong password</span>
    </div>)
    
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Your password is wrong',
      showConfirmButton: false,
      timer: 1500
    })
    setSuccess('')
      console.log(error)
    })
  }
    return (
    <div>
       <Helmet>
        <title>MealCage | Login</title>
            </Helmet>
       <div className="hero min-h-screen ">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center md:w-1/2">
      
     <img className="" src={bg} alt="" />
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <div className='text-danger mt-2'>{error}</div>
        <div className='text-success mt-2'>{success}</div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-accent input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-accent input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input className="btn bg-teal-500 text-black border-2 hover:border-teal-500 hover:bg-transparent hover:border-b-8" type="submit" value="Login" />
        </div>
        <p>New to Bistro-boss ? <Link className='text-teal-500 font-bold' to='/signup'> Sign Up</Link></p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  </div>
</div>
    </div>
    );
};

export default Login;