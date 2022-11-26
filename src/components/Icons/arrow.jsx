export default function Arrow(props) {
   return (
      <svg
         {...props}
         width={props.width ? props.width : "10"}
         height={props.height ? props.height : "14"}
         viewBox="0 0 10 14"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path d="m1 13 7-6-7-6" stroke="#fff" strokeWidth="2" />
      </svg>
   );
}
