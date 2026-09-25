import React from 'react';
import { PhoneIcon } from '@heroicons/react/20/solid';

export default function TopHeader() {
    return (
        <div className="w-full items-center justify-between text-xs font-semibold h-13 hidden md:flex bg-[#5A4125] text-[#E3D6BF]">
            <div className='flex w-full h-full container mx-auto'>
                {/* Navigation moved to MainHeader, keep a spacer for layout balance */}
                <div className="flex-1"></div>

                {/* Phone Number Section */}
                <div className="flex h-full items-center px-6 shrink-0 gap-2" style={{ backgroundColor: '#2F9BA0', color: 'var(--color-brand-dark)' }}>
                    <PhoneIcon className="h-5 w-5" />
                    <span className="font-semibold text-base whitespace-nowrap">800 LUCRU</span>
                </div>
            </div>
        </div>
    );
}
