import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa6';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const SocialLinks = ({ className = '', iconClassName = '' }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="https://www.facebook.com/CoreMigration01/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
        <FaFacebookF className={iconClassName || "w-4 h-4"} />
      </a>
      <a href="https://www.instagram.com/coremigration/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
        <FaInstagram className={iconClassName || "w-4 h-4"} />
      </a>
      <a href="https://www.youtube.com/@CoreMigration" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
        <FaYoutube className={iconClassName || "w-4 h-4"} />
      </a>
      <a href="https://x.com/CoreMigration" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
        <FaXTwitter className={iconClassName || "w-4 h-4"} />
      </a>
      <a href="https://www.linkedin.com/company/core-migration01/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
        <FaLinkedinIn className={iconClassName || "w-4 h-4"} />
      </a>
      <a href="https://www.pinterest.com/coremigration/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
        <FaPinterestP className={iconClassName || "w-4 h-4"} />
      </a>
    </div>
  );
};

export default SocialLinks;