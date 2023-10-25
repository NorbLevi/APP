import React from 'react'
import styles, {layout} from '../style'
import { faqs } from '.'
import { quotes } from '../assets'

const FAQ = () =>  (
        <section>
            <div className={`flex flex-col ${styles.paddingX} text-center`}>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>FAQ'S</h1>
                {faqs.map((quiz) => (
                    <div key={quiz.id} className={`${layout.section} text-left`}>
                        <h2 className={`${styles.heading2} mr-3`}>{quiz.question}</h2>
                        <div className=''>
                            <img src={quotes} alt="Quote" className="w-[42.6px] h-[27.6px] object-contain"/>
                            <p className={`${styles.paragraph} mt-5`}>{quiz.Ans}</p>
                        <div className={`text-left mt-3`}>
                            <img src={quiz.img} className='w-[48px] h-[48px] rounded-full ' alt={quiz.Name} />
                            <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{quiz.title}</p>
                            <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{quiz.Name}</h4>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )


export default FAQ