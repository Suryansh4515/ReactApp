import React from 'react';
import Line from '../media/icons/Line 7line.svg'
import tube from '../media/icons/Group.svg'
import star from '../media/icons/Vectorstar.svg'
import call from '../media/icons/Task - Dyeus WebD/icon/phone-call.svg'

export default function AboutDiana () {
    const styleSheet = {
        width: '100%',
        height: '1690px',
        background: 'linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 33.33%, rgba(213, 224, 255, 0) 100%)',
    }

    const sheet1 ={
        fontFamily: 'Reptile',
        fontWeight: '500',
        fontSize: '33px',
    
    }
    const sheet2 ={
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        fontSize: '18px',

    }
    const sheet3 ={
        fontFamily: 'Poppins, sans-serif',
        width: '300px',
        height: '75px',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '179%',

    }

    const sheet5 ={
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '700',
        fontSize: '22px',
    }
    const sheet6 ={
        width: '303px',
        
        fontSize: '33px',
        lineHeight: '134%',
    }
    const sheet7={
        fontFamily: 'DM sans, sans-serif',
        fontSize:'16px',
        fontWeight: '800',
        width:'308px',
        
    }
    const sheet8={
        fontFamily: 'DM sans, sans-serif',
        fontWeight: '400',
        width: '309px',
        fontSize:'16px',
        lineHeight: '179%',
    }
    const sheet9={
        fontFamily: 'DM sans, sans-serif',
        fontWeight: '400',
        width: '309px',
        fontSize:'16px',
        lineHeight: '28.64px',
    }

    return (
        <div className='justify-center content-center items-center' style={styleSheet}>
            <div>
                <div style={sheet1}className='pt-24 text-[#1B1B50]'>About Diana</div>
                <div style={sheet2} className='mt-8 text-[#1B1B50] text-lg'>A platform that looks out for you</div>
                <div style={sheet3} className='mt-9 text-left m-auto text-[#000000] '>Diana empowers you to understand how your body works so you can look and feel your best.</div>
            </div>
            <img className='mt-8 m-auto' src={Line} alt="" />
            <div className='mt-10'>
                <div style={sheet5} className='text-[#1B1B50]'>Our Philosophy</div>
                <div style={sheet6} className='mt-10 m-auto text-[#1B1B50]' >Sustainable wellness is a big-picture, inside out approach</div>
                <h1 style={sheet7} className='mt-10 m-auto text-[#1B1B50]' >Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.</h1> 
                <div style={sheet7} className='mt-10 m-auto text-[#1B1B50]'>That’s why we’ve created an integrated ecosystem of:</div>
            </div>
            <img className='mt-8 m-auto' src={tube} alt=""/>
            <div style={sheet8} className='mt-10 m-auto'>Consciously formulated products that deliver feel-good results fast </div>
            <img className='mt-8 m-auto' src={star} alt=""/>
            <div style={sheet8} className='mt-10 m-auto'>In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</div>
            <img className='mt-8 m-auto' src={call} alt=""/>
            <div style={sheet8} className='mt-10 m-auto'>In-app consultation portals that connect you with compassionate wellness experts</div>
            <div style={sheet8} className='mt-14 m-auto'>Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</div>

        </div>
    );
}