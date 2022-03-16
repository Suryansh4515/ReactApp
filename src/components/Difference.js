import React from 'react';

export default function Difference (){
    const styleSheet = {
        width: '100%',
        height: '841px',
        top: '1690px',
        background: 'linear-gradient(165.41deg, #D99EC9 0%, rgba(246, 240, 196, 0) 100%)',

    }
    const s1={
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '700',
        width: '295px',
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
        lineHeight: '180%',
        
    }
    return(
        <div className="pl-8 text-left justify-center content-center items-center" style={styleSheet}>
            <div style={s1} className='pt-10 text-[#1B1B50]'>What makes us different?</div>
            <div style={s2} className='pt-10 text-[#1B1B50]'>Reimagining and rewiring self-care</div>
            <div style={s3} className='mt-7'>
            You care about conscious consumption, and so do we.
            <br /><br />
            When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best 
            <br /><br />
            We collaborate with researchers and doctors to
            <br />
            <br />
            <ul className='list-disc ml-4'>
                <li>Help you get granular about your health and self-care with personalized insights, and</li>
                <br />
                <li>Equip you with simple, sustainable products that get the job done</li>
            </ul>
            <br />
            No to-the-moon-and-back claims in this neck of the woods.
            <br />
            <br />
            We’re just solving real problems for real people here.
            </div>
        </div>
        
    );
}