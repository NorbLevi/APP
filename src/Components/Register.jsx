import { useState } from "react"
import { auth, googleAuthProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import styles from "../style"

 const Auth = ({ extiRegisterModal, setIsRegistered}) =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () =>{
        try{
        await createUserWithEmailAndPassword(auth, email, password)

        extiRegisterModal();
        }catch(err){
            console.error(err)
        }
    };

    const signinwithGoogle = async () =>{
        try{
        await signInWithPopup(auth, googleAuthProvider)
        }catch(err){
            console.error(err)
        }
    };


    return(
        <div className={`bg-black-gradient  flex-col fixed h-[100%] w-[100%] top-0 right-0 ${styles.flexCenter}  z-20  regist_form`}>
            <div className='flex flex-row justify-end mb-4 w-[500px]'>
            <AiOutlineCloseCircle className={` text-white text-[30px]`} onClick={() => extiRegisterModal(false)}/>
            </div >
            <div className='flex flex-col items-center justify-center bg-primary w-[500px] h-[500px]  sm:left-5 rounded-[20px] form_cont'>
            
                <form className={`items-center justify-center text-center mt-1 `}>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] mb-0'>Sign Up</h1>
                    <div className={`${styles.flexCenter} flex flex-col input_field`}>
                        <p className={`${styles.paragraph}`}>Email</p>
                    <input placeholder="Email" 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)} 
                    className='w-[400px] h-[50px]  rounded-[20px] placeholder:text-center text-center focus:outline-none'/>
                    </div>

                    <div  className={`${styles.flexCenter} flex flex-col mt-[15px] input_field`}>
                        <p className={`${styles.paragraph}`}>Password</p>
                    <input 
                    placeholder="Password" 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-[400px] h-[50px] rounded-[20px] placeholder:text-center text-center focus:outline-none'
                    />
                    </div>
                </form>

                <div className={`${styles.flexCenter} mt-5 w-[500px] input_field`}>
                    <FcGoogle className="text-[30px]"/>
                <p onClick={signinwithGoogle} className={`${styles.paragraph} hover:underline cursor-pointer`}>
                    Sign In With Google
                </p>
                </div>

            <div className=" mt-3 ss:flex-col">
                <button on onClick={() => extiRegisterModal(false)} className={`py-4 px-6 mr-[20px] w-[180px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px]  ${styles}`}>Cancel</button>
                <button onClick={signIn} className={`py-4 px-6 mr-[20px] w-[180px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px] ${styles} `}>Sign in</button>
            </div>
            
            
            
            </div>

            
        </div>
    )
}

export default Auth;