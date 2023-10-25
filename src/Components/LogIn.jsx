import React from 'react'
import styles from '../style'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import Register from './Register'



const LogIn = ({ extiModal}) => {

    const [Registermodal, setRegisterModal] = useState(false)
    
    return(
        <div className={`bg-black-gradient flex-col fixed h-[100%] w-[100%] top-0 right-0 ${styles.flexCenter}  z-20`}>
            <div className='flex flex-row justify-end mb-4 w-[500px]'>
            <AiOutlineCloseCircle className={` text-white text-[30px]`} onClick={() => extiModal(false)}/>
            </div>
            <div className='flex flex-col items-center justify-center bg-primary w-[500px] h-[500px] rounded-[20px] flip'>
                <form className='items-center justify-center text-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>Log in</h1>
                <div className={`${styles.flexCenter} flex flex-col`}>
                    <p className={`${styles.paragraph}`}> Email </p>
                    <input type="text" className='w-[400px] h-[50px] rounded-[20px] placeholder:text-center text-center focus:outline-none' placeholder='Email'/>
                </div>
                <div className={`${styles.flexCenter} flex flex-col mt-[15px]`}>
                    <p className={`${styles.paragraph}`}> Password </p>
                    <input type="text" className='w-[400px] h-[50px] rounded-[20px] placeholder:text-center text-center focus:outline-none' placeholder='Password' />
                </div>

                <div className={`${styles.flexCenter} mt-5 w-[500px]`}>
                    <p className={`${styles.paragraph} hover:underline cursor-pointer`} onClick={() => setRegisterModal(true)} >Create <span className='text-gradient'>Account</span></p>
                </div>

                <div className='flex flex-row mr-5 ml-5 justify-between mt-[20px]'>
                <button type='button' 
                className={`py-4 px-6 mr-[20px] w-[180px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px] ${styles}`}
                onClick={() => extiModal(false)}
                >
                    Cancel
                </button>

                    <button type='button' className={`py-4 px-6 w-[180px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px] ${styles}`}>
                        <span>Log In</span>
                    </button>
                </div>
                </form>
                <div>
                    <p className={`${styles.paragraph} mt-4 cursor-pointer hover:underline`}>Forgot <span className='text-gradient  cursor-pointer'> Password</span></p>
                </div>
            </div>
           
            {Registermodal  && <Register extiRegisterModal={setRegisterModal}/>}
        </div>
    )}
export default LogIn