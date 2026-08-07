import React from 'react';

export const Map: React.FC = () => {
  return (
    <div className="w-full h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative">
      <iframe
        title="Lions Club Anakkara Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.340058197734!2d77.1264423!3d9.6083042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b064c1b1dfa2ab9%3A0x86bb7a5e3f4db3b2!2sAnakkara%2C%20Kerala%20685512!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale flex filter transition-all duration-500 hover:grayscale-0"
      />
    </div>
  );
};
