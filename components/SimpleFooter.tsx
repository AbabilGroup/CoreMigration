import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const SimpleFooter = () => {
  return (
    <div className="w-full bg-white py-10 border-t border-gray-100 flex flex-col lg:hidden justify-center items-center text-center px-4 gap-6">
      
      <SocialLinks className="text-[#A5A5A5]" iconClassName="w-5 h-5 hover:text-[#006A80] transition-colors" />

      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3 text-[13px] text-[#A5A5A5] font-medium">
        <Link href="/contact-us" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Contact Us</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Whistleblowing</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Terms & Conditions</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Privacy Policy</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Quality Policy</Link>
      </div>
    </div>
  );
};

export default SimpleFooter;
