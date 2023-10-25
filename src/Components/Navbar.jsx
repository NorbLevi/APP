import React from 'react'

import { close, logo, menu} from '../assets'
import {navLinks} from '../consants'
import { useState } from 'react'
import LogIn from './LogIn'
import Auth from './Register'

const Navbar = () => {

    const [toogele, SetToogle] = useState(false)

    const [modal, setModal] = useState(false)
    const [Registermodal, setRegisterModal] = useState(false)
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegisterSuccess = () => {
        setIsRegistered(true);
        setModal(false); // Close the registration modal
      };

  return (
    
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='hoo' className='w-[124px] h-[32px]'/>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
                >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}

                {isRegistered ? (
                        <li>
                            <img src={userIcon} alt='User' className='w-[28px] h-[28px] cursor-pointer' />
                        </li>
                        ) : (
                        <div className='flex flex-row justify-between w-[220px]'>
                            <button
                            type='button'
                            className={`py-2 px-3 w-[100px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px]`}
                            onClick={() => setModal(true)}
                            >
                            Log In
                            </button>
                            <div className='divider' />
                            <button
                            type='button'
                            className={`py-2 px-3 w-[100px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px]`}
                            onClick={() => setRegisterModal(true)}
                            >
                            Sign Up
                            </button>
                        </div>
                        )}
            

            {modal  && <LogIn extiModal={setModal}/>}
            {Registermodal  && <Auth extiRegisterModal={setRegisterModal}/>}
        </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toogele ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain'
            onClick={() => SetToogle((prev) => !prev)}
            />

            <div className={`${toogele ? 'flex ' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                >
                <a href={`#${nav.id}`}>
                {nav.title}
                </a>
                </li>
                ))}

                        <div className='flex flex-row justify-between w-[220px]'>
                            <button
                            type='button'
                            className={`py-2 px-3 w-[100px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px]`}
                            onClick={() => setModal(true)}
                            >
                            Log In
                            </button>
                            <div className='divider' />
                            <button
                            type='button'
                            className={`py-2 px-3 w-[100px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px]`}
                            onClick={() => setRegisterModal(true)}
                            >
                            Sign Up
                            </button>
                        </div>

                        
                        {modal  && <LogIn extiModal={setModal}/>}
                        {Registermodal  && <Auth extiRegisterModal={setRegisterModal}/>}
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default Navbar