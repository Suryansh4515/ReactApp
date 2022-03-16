import React from 'react';
import button from '../media/icons/Button4.svg'
import image from '../media/icons/image2.png'
export default function Consult (){
    const StyleSheet={
        width: '100%',
        height: '710px',
        top: '4999px',
        background: 'linear-gradient(270deg, #DADAE4 0.25%, #EEEEF0 24.33%, #F8F8F8 52.08%, #FEFEFE 100%)',


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
            <div className='text-left pl-8 pt-12'>
                <div style={s1}>Consult with wellness experts</div>
                <div style={s2} className='pl-1 pt-6'>Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. </div>
                <img className=' pt-6 pr-6' src={button} alt=""/>
            </div>
            <img className=' pt-11' src={image} alt=""/>
        </div>
    );
}