import React from 'react';
import Button1 from '../media/icons/Button1.svg'
import pic1 from '../media/icons/Picture1.svg'
import pic2 from '../media/icons/Picture2.svg'
import pic3 from '../media/icons/Picture3.svg'
import pic4 from '../media/icons/Picture4.svg'



export default function Track (){
    const StyleSheet={
        width: '100%',
        height: '770px',
        top: '3472px',
        background: 'linear-gradient(180deg, #FFF6FB 0%, #FFFFFF 100%)',

    }
    const s1={
        fontFamily: 'Reptile, sans-serif',
        fontSize: '32px',
        lineHeight: '28.91px',
    }
    const s2={
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '300',
        width:'308px',
        fontSize: '14px',
        lineHeight: '28.91px',
    }
    return(
        <div style={StyleSheet} className="text-left justify-center content-center items-center">
            <div className='pl-8'>
                <div style={s1} className='pt-9'>Track your mood</div>
                <div style={s2} className='pt-6'>All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.</div>
                <img className=' pt-4 pr-6' src={Button1} />
                </div>
            <div className='ml-4  mt-7 grid grid-cols-2 gap-x-3 gap-y-7'>
                <img className='col-span-1' src={pic1}/>
                <img className='col-span-1' src={pic2}/>
                <img className='col-span-1' src={pic3}/>
                <img className='col-span-1' src={pic4}/>
            </div>
        </div>
    );
}