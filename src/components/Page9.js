import React from 'react';
import FacebookIcon from '../media/icons/Task - Dyeus WebD (1)/icon/facebook.svg'
import TwitterIcon from '../media/icons/Task - Dyeus WebD (2)/icon/twitter.svg'
import ArrowIcon from '../media/icons/Task - Dyeus WebD (3)/icon/chevron-right.svg'
import Line from '../media/icons/seperate.svg'
import Activate from '../media/icons/Activate.svg'
export default function Page9 (){
    const StyleSheet={
        width: '100%',
        height: '400px',
        top: '6693px',
        background: '#050506',

        
    }
    const s1={
        fontFamily: 'Poppins, sans-serif',
        fontSize: '9px',
        lineHeight: '28.91px',
    }
    const s3={
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '12px',
    }
    return(
        <div style={StyleSheet} className='text-white text-left'>
            <img className='absolute pl-[266px] pt-[55px]' src={FacebookIcon} alt=""/>
            <img className='absolute pl-[306px] pt-[55px]' src={TwitterIcon} alt=""/>
            <div className='pl-9 pt-[121px] text-sm space-y-3' style={{fontFamily: "DM Sans"}}>
            <a className='flex gap-x-2'>
                    Products
                    <img className='w-[20px]' src={ArrowIcon} alt=""/>
                </a> 

                <a className='flex gap-x-2'>
                    Our Science
                    <img className='w-[20px]' src={ArrowIcon} alt=""/>
                </a> 

                <a className='flex gap-x-2'>
                    Vision & Mission
                    <img className='w-[20px]' src={ArrowIcon} alt=""/>
                </a> 

                <a className='flex gap-x-2'>
                    About Us
                    <img className='w-[20px]' src={ArrowIcon} alt=""/>
                </a>
            </div>
            <img className='mt-8 m-auto' src={Line} alt=""/>

            <div className='pl-9'>
                <div className='mt-4' style={s1}>
                    Subscribe to our Newsletter
                </div>

                <div className='text-black flex mt-2 space-x-2'>
                    <div className='h-[30px] w-[216px] border-2 border-white-100 rounded bg-white bg-opacity-60'>
                        <div style={s3} className='pl-2 pt-1'>
                        Enter your email...
                        </div>
                    </div>
                    <img className='m-auto' src={Activate} alt=""/>
                </div>
            </div>

        </div>
    );
}