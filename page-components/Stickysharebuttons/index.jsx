// components/StickyShareButtons.js

import React from 'react';

const StickyShareButtons = () => {
  // Define your social media sharing links here

  const socialMediaLinks = [
    { name: 'Facebook', iconClass: 'fab fa-facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', iconClass: 'fab fa-twitter', url: 'https://www.twitter.com' },
    // Add more social media platforms here
  ];
  return (
    <div className="fixed bottom-10 right-10 z-10 flex flex-col gap-2">
      {socialMediaLinks.map((platform, index) => (
        <a
          key={index}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
        >
          <i className={platform.iconClass}></i>
          <span className="ml-2">{platform.name}</span>
        </a>
      ))}
    </div>
  );
};

export default StickyShareButtons;
