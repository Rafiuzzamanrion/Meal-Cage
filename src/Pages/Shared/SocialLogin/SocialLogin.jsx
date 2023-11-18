import {useContext} from 'react';
import google from '/google.png'
import {AuthContext} from '../../../Providers/AuthProvider';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
   
    const navigate = useNavigate()
    

    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
           
            const saveUser = {name:loggedInUser.displayName,email:loggedInUser.email}
            console.log(saveUser)
              fetch('https://meal-cage-server.vercel.app/users',{
                method:'POST',
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(() =>{
                navigate('/')
                  Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'You have successfully created/logged in to your account !!',
                    showConfirmButton: false,
                    timer: 1500
                  })
             
                  // ========= end of posting ===========
                
                
              })
        }) 
        .catch(error =>{
          console.log(error.message)
          
        })}
    return (
        <div>
            <div>
            <div className="text-center my-3">OR</div>
            <div className="text-center"><button onClick={handleGoogleLogin} className="btn btn-outline  text-teal-500 hover:bg-teal-500 hover:border-none"> <div className="avatar">
  <div className="w-8 rounded-full">
    <img src={google} />
  </div>
</div></button></div>
        </div>
        </div>
    );
};

export default SocialLogin;