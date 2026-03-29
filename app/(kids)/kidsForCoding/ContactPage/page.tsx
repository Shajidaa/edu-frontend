'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function IframeGoogleForm() {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    try {
     
      const iframeLocation = iframeRef.current?.contentWindow?.location.href;
      
     
      console.log("Still on form:", iframeLocation);
    } catch (error) {
      
    //   router.push('/kidsForCoding/booking');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden p-6 border border-gray-100">
        <iframe
          ref={iframeRef}
          src={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL} 
          width="100%"
          height="800"
          className="border-none"
          title="Google Form"
          onLoad={handleLoad}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}