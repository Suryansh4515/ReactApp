import React from 'react';
import button from '../media/icons/Button3.svg'
import image from '../media/icons/image1.png'
export default function Period (){
    const StyleSheet={
        width: '100%',
        height: '760px',
        top: '4244px',
        background: 'linear-gradient(176.88deg, #F3B8BC 2.58%, #FFDAD4 93.07%)',
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
        <div style={StyleSheet} className='text-left'>
            <div className='pl-8 pt-10'>
                <div style={s1}>Track your period</div>
                <div style={s2} className='pl-1 pt-4'>Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. </div>
                <img className=' pt-4 pr-6' src={button} alt=""/>
            </div>
            <img className=' pt-5' src={image} alt=""/>
        </div>
    );
}