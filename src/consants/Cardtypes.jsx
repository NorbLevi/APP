import React from 'react'
import styles, {layout} from '../style'
import { discount } from '../assets'
import Purchase from './Purchase'

const Cardtypes = () => (
    <section className={layout.section}>
        <div className='flex flex-col mr-4 text-center mb-3'>
            <h4 className="font-poppins font-semibold text-white text-[30px] leading-[23.4px] mb-2">
                Tourist Card
            </h4>
            
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] md-2'>
            <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
            <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For {" "}
            <span className='text-white'>1 Month</span> Account
            </p>
            </div>

            <div className={layout.sectionInfo}>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            </div>

            <p className=' font-poppins font-bold text-gradient text-[40px]'>25.00$</p>
            <Purchase styles="mt-5"/>
        </div>
        <div className='flex flex-col mr-4 text-center mb-3'>
            <h4 className="font-poppins font-semibold text-white text-[30px] leading-[23.4px] mb-2">
                Work visa
            </h4>
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] md-2'>
            <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
            <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For {" "}
            <span className='text-white'>1 Month</span> Account
            </p>
            </div>

            <div className={layout.sectionInfo}>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            </div>

            <p className=' font-poppins font-bold text-gradient text-[40px]'>25.00$</p>
            <Purchase styles="mt-5"/>
        </div>

        <div className='flex flex-col mr-4 text-center mb-3'>
            <h4 className="font-poppins font-semibold text-white text-[30px] leading-[23.4px] mb-2">
                Student visa
            </h4>
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] md-2'>
            <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
            <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For {" "}
            <span className='text-white'>1 Month</span> Account
            </p>
            </div>
            <div className={layout.sectionInfo}>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            </div>

            <p className=' font-poppins font-bold text-gradient text-[40px]'>25.00$</p>
            <Purchase styles="mt-5"/>
        </div>
    </section>
  )


export default Cardtypes