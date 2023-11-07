import {useContext, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {Link, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";
import bg from '../../assets/others/authentication.gif'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate();

    const {createUser,updateUserProfile} = useContext(AuthContext)

     // -----------------alert----------------------

  const alertSuccess = <div className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>You have successfully created an account !!</span>
</div>;
const alertError1 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least one Uppercase Character !</span>
</div>
const alertError2 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least one LowerCase Character !</span>
</div>
const alertError3 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least one Special Symbol !</span>
</div>
const alertError4 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least 8 Character !</span>
</div>
const alertError5 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: The email already in use !!</span>
</div>

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email,password)

          // validation or pass expression
          if (!/^(?=.*[A-Z]).*$/.test(password)) {
            setError(alertError1)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
            setSuccess('')
            
        return ;
          }
        else  if (!/^(?=.*[a-z]).*$/.test(password)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
            setError(alertError2)
            setSuccess('')
            return ;
          }
         else if (!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
            setError( alertError3)
            setSuccess('')
            return;

    }
    else if(!password.length >= 8){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
      setError(alertError4)
      setSuccess('')
      return;
    }


        
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'You have successfully Created an account',
              showConfirmButton: false,
              timer: 1500
            })
            setSuccess(alertSuccess)
            setError('')
            console.log(user)

            updateUserProfile(name,photo)
            .then(()=>{
              // ========= posting user info to database ==========
              const saveUser = {name:name,email:email}
              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(data =>{
                if(data.insertedId){
                  Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'You have successfully created an account !!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setSuccess(alertSuccess)
                  setError('')
                  navigate('/')
                  // ========= end of posting ===========
                }
                
              })


             
            })
            .catch(error=>console.log(error))
        })
        .catch(error =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
            setError(alertError5)
            setSuccess('')
            console.log(error)
        })

    }
    return (
     
      <div>
         <Helmet>
      <title>Bistro-Boss | Sign up</title>
          </Helmet>
          <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2">
            
          <img className="rounded-xl" src={bg} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={ handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
            <div className='text-success mt-1'>{success}</div>
            <div className='text-danger mt-1'>{error}</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
               
                <input className="btn btn-success hover:bg-transparent hover:border-b-8" type="submit" value="Sign Up" />
              </div>
              <p>Already have an account ? <Link className='text-success font-bold' to='/login'> Login</Link></p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
};

export default SignUp;