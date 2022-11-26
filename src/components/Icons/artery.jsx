export default function Artery(props) {
   return (
      <svg
         {...props}
         width={props.width ? props.width : "33"}
         height={props.height ? props.height : "33"}
         viewBox="0 0 33 33"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M16.14 32.5c8.92 0 16.14-7.16 16.14-16S25.06.5 16.14.5A16.07 16.07 0 0 0 0 16.5c0 8.84 7.23 16 16.14 16Z"
            fill="#246CF6"
         />
         <path
            d="M16.14 32.5c8.92 0 16.14-7.16 16.14-16S25.06.5 16.14.5A16.07 16.07 0 0 0 0 16.5c0 8.84 7.23 16 16.14 16Z"
            fill="url(#a)"
         />
         <path
            d="M16.14 32.5c8.92 0 16.14-7.16 16.14-16S25.06.5 16.14.5A16.07 16.07 0 0 0 0 16.5c0 8.84 7.23 16 16.14 16Z"
            fill="url(#b)"
         />
         <path
            d="M16.14 32.5c8.92 0 16.14-7.16 16.14-16S25.06.5 16.14.5A16.07 16.07 0 0 0 0 16.5c0 8.84 7.23 16 16.14 16Z"
            fill="url(#c)"
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.43 7.2c1.06-.73 2.5.01 2.54 1.28v15.8a1.62 1.62 0 0 1-3.23.03V11.58l-3.52 2.43c-.73.5-1.72.33-2.23-.38l-.02-.03a1.6 1.6 0 0 1 .38-2.21l.03-.02 6.05-4.17Z"
            fill="#fff"
         />
         <defs>
            <radialGradient
               id="a"
               cx="0"
               cy="0"
               r="1"
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(6 29 -39 8 2.02 29)"
            >
               <stop stopColor="#E06BF8" />
               <stop offset="1" stopColor="#F8876B" stopOpacity="0" />
            </radialGradient>
            <radialGradient
               id="b"
               cx="0"
               cy="0"
               r="1"
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(-16 16 -25 -25 32.58 32.5)"
            >
               <stop stopColor="#00BF98" />
               <stop offset="1" stopColor="#00BF98" stopOpacity="0" />
            </radialGradient>
            <radialGradient
               id="c"
               cx="0"
               cy="0"
               r="1"
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(0 31 -40 0 32.28 -8)"
            >
               <stop stopColor="#E06BF8" />
               <stop offset="1" stopColor="#E06BF8" stopOpacity="0" />
            </radialGradient>
         </defs>
      </svg>
   );
}
