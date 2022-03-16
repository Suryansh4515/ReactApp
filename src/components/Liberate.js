import React from 'react';
import Button from '../media/icons/Button.svg'
import NoNasties from '../media/icons/pexels-karolina-grabowska-4041391.png'

export default function Liberate (){
    const styleSheet = {
        width: '100%',
        height: '370px',
        top: '2566px',
        background: '#DCE9E9',


    }
    const s1={
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '700',
        width: '335px',
        fontSize: '22px',
    }
    const s2={
        fontFamily: 'Reptile, sans-serif',
        fontSize: '32px',  
    }
    const s3={
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '300',
        fontSize: '14px',
        width: '308px',
        lineHeight: '206.5%',
    }
    const s4={
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
        width:'335px',
        fontSize: '22px',
        lineHeight: '33px',
    }
    const s5={
        backgroundImage: 'NoNasties',
    }
    return (
        <div >
            <div style={styleSheet} className="pl-8 text-left justify-center content-center items-center" >
                <div style={s1} className='pt-9 text-[#1B1B50]'>Liberate your everyday wellness</div>
                <div style={s2} className='pt-9 text-[#1B1B50]'>Reimagining and rewiring self-care</div>
                <br />
                <div style={s3}>Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.</div>
            </div>
            <div  className="pt-20 h-[562px]" style={{backgroundImage: `url(${NoNasties})`}} >
                <img className='pl-6' src={Button} />
                <div style={s4} className='mt-6 pl-6'>#NoNasties, we promise!</div>
            
            </div>
        </div>
    );
}