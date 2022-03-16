import React from 'react';
import BatteryIcon from '../media/icons/battery.svg'
import WifiIcon from '../media/icons/wifi.svg'
import NetworkIcon from '../media/icons/network.svg'

export default function NotificationBar () {

    const timeStyle = {
        fontFamily: 'SF Pro Display, sans-serif',
        lineHeight: '18px',
        letterSpacing: '0.0703846',
        fontWeight: '500',
    }

    return(
        <div className="flex justify-between bg-white p-3">
            <p className='pl-5 font-bold' style={timeStyle}>9:41</p>
            <div className='flex gap-x-1'>
                <img src={NetworkIcon} className='h-3'/>
                <img src={WifiIcon} className='h-3'/>
                <img src={BatteryIcon} className='h-3'/>
            </div>
        </div>
    );
}