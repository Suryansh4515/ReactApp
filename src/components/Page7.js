import React from 'react';
import button from '../media/icons/Button5.svg'
import image from '../media/icons/image3.png'
export default function Page7 (){
    const StyleSheet={
        width: '100%',
        height: '660px',
        top: '5709px',
        background: '#F66E6E',

    }
    const s1={
        fontFamily: 'Reptile, sans-serif',
        fontSize: '32px',
        lineHeight: '43.14px',
    }
    const s2={
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '300',
        width:'308px',
        fontSize: '14px',
        lineHeight: '28.91px', 
    }
    return(
        <div style={StyleSheet}>
            <div className='absolute text-left pl-8 pt-10 text-white opacity-90'>
                <div style={s1}>Get your personalized period box</div>
            </div>
            <img className=' pt-[105px]' src={image} alt="" />
            <div style={s2} className='ml-8 text-left  leading-loose opacity-90'>
                Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. 
            </div>
            <img className=' pl-9 pt-6 pr-2' src={button} alt="" />

        </div>
    );
}