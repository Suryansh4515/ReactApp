import React from 'react';

export default function Page8 (){
    const StyleSheet={
        width: '100%',
        height: '373px',
        top: '6316px',
        background: 'linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 100%)',
        
    }
    const s1={
        width:'274px',
        fontFamily: 'Reptile, sans-serif',
        fontSize: '33px',
        lineHeight: '43.14px',
    }
    return(
        <div style={StyleSheet}>
            <div className='absolute text-left pl-12 pt-16 text-black opacity-80'>
                <div style={s1}>With Diana, you’re in control of your health, your every day, and your story.</div>
            </div>
        </div>
    );
}