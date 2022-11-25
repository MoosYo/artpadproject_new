export default function Medium(props) {
   return (
      <svg
         {...props}
         viewBox="0 0 48 48"
         width={props.width ? props.width : "48"}
         height={props.height ? props.height : "48"}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
      >
         <g clip-path="url(#a)">
            <path fill="#2E2C2B" d="M48 0H0v48h48V0Z" />
            <path
               fill="#fff"
               d="M11.455 16.053A1.25 1.25 0 0 0 11.048 15l-3.01-3.627v-.542h9.348l7.226 15.848 6.353-15.848h8.912v.542l-2.574 2.468a.753.753 0 0 0-.286.722V32.7a.752.752 0 0 0 .286.722l2.514 2.468v.542H27.17v-.542l2.605-2.528c.256-.256.256-.331.256-.722v-14.66L22.79 36.372h-.98l-8.43-18.391v12.326a1.7 1.7 0 0 0 .467 1.414l3.387 4.11v.54H7.631v-.54l3.387-4.11c.362-.375.524-.9.437-1.414V16.053Z"
            />
         </g>
         <defs>
            <clipPath id="a">
               <path fill="#fff" d="M0 0h48v48H0z" />
            </clipPath>
         </defs>
      </svg>
   );
}
