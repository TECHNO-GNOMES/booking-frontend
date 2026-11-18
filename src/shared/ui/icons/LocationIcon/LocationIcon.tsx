import React from 'react';

export const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    
    <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >

        <path
            d="M12 21C16 17 19 13.5 19 9.5C19 5.35786 15.866 2 12 2C8.13401 2 5 5.35786 5 9.5C5 13.5 8 17 12 21Z"
            stroke="black"
            stroke-width="1"
            stroke-linecap="round"
            troke-linejoin="round" 
        />

        <circle
            cx="12"
            cy="9.5"
            r="3"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round" 
        />
    </svg>
)