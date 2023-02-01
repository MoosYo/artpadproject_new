const SocialButton = ({type = "", className, style}) => {

    if (type === "instagram") return (
        <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
            <rect width="51" height="35" rx="8" fill="url(#paint0_linear_862_1431)" />
            <path
                d="M32.5835 14.5742C32.5755 13.9746 32.4632 13.381 32.2518 12.8199C32.0684 12.3466 31.7883 11.9167 31.4293 11.5578C31.0704 11.1989 30.6406 10.9188 30.1673 10.7354C29.6134 10.5275 29.0282 10.4151 28.4367 10.4029C27.6751 10.3689 27.4337 10.3594 25.5004 10.3594C23.5672 10.3594 23.3194 10.3594 22.5633 10.4029C21.9721 10.4152 21.3872 10.5276 20.8335 10.7354C20.3602 10.9187 19.9303 11.1987 19.5713 11.5577C19.2124 11.9166 18.9324 12.3465 18.7491 12.8199C18.5407 13.3734 18.4286 13.9584 18.4174 14.5497C18.3833 15.312 18.373 15.5535 18.373 17.4868C18.373 19.42 18.373 19.667 18.4174 20.4238C18.4293 21.016 18.5409 21.6003 18.7491 22.1552C18.9327 22.6284 19.2129 23.0582 19.572 23.4169C19.931 23.7757 20.361 24.0557 20.8343 24.2389C21.3865 24.4552 21.9715 24.5756 22.5641 24.5951C23.3265 24.6292 23.568 24.6395 25.5012 24.6395C27.4345 24.6395 27.6823 24.6395 28.4383 24.5951C29.0298 24.5835 29.615 24.4713 30.1689 24.2634C30.6421 24.0798 31.0718 23.7996 31.4307 23.4408C31.7896 23.0819 32.0697 22.6521 32.2533 22.179C32.4615 21.6248 32.5732 21.0405 32.585 20.4476C32.6191 19.686 32.6294 19.4445 32.6294 17.5105C32.6278 15.5773 32.6278 15.3318 32.5835 14.5742ZM25.4957 21.1427C23.4738 21.1427 21.8358 19.5047 21.8358 17.4828C21.8358 15.4609 23.4738 13.8229 25.4957 13.8229C26.4663 13.8229 27.3972 14.2085 28.0836 14.8949C28.77 15.5812 29.1555 16.5121 29.1555 17.4828C29.1555 18.4535 28.77 19.3844 28.0836 20.0707C27.3972 20.7571 26.4663 21.1427 25.4957 21.1427ZM29.3012 14.541C29.1891 14.5411 29.0781 14.5191 28.9745 14.4762C28.8709 14.4334 28.7768 14.3705 28.6975 14.2912C28.6183 14.212 28.5554 14.1178 28.5125 14.0143C28.4697 13.9107 28.4477 13.7996 28.4478 13.6875C28.4478 13.5755 28.4699 13.4646 28.5127 13.3611C28.5556 13.2576 28.6184 13.1636 28.6976 13.0844C28.7769 13.0052 28.8709 12.9423 28.9744 12.8995C29.0779 12.8566 29.1888 12.8345 29.3008 12.8345C29.4128 12.8345 29.5238 12.8566 29.6273 12.8995C29.7307 12.9423 29.8248 13.0052 29.904 13.0844C29.9832 13.1636 30.046 13.2576 30.0889 13.3611C30.1318 13.4646 30.1538 13.5755 30.1538 13.6875C30.1538 14.1594 29.7723 14.541 29.3012 14.541Z"
                fill="white" />
            <path
                d="M25.4946 19.8602C26.8076 19.8602 27.8719 18.7958 27.8719 17.4828C27.8719 16.1699 26.8076 15.1055 25.4946 15.1055C24.1816 15.1055 23.1172 16.1699 23.1172 17.4828C23.1172 18.7958 24.1816 19.8602 25.4946 19.8602Z"
                fill="white" />
            <defs>
                <linearGradient id="paint0_linear_862_1431" x1="0" y1="0" x2="55.4273" y2="9.69882"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BD279D" />
                    <stop offset="0.528809" stopColor="#F0283B" />
                    <stop offset="1" stopColor="#FDBD57" />
                    <stop offset="1" stopColor="#FDBD57" />
                </linearGradient>
            </defs>
        </svg>
    );

    if (type === "telegram") return (
        <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
            <rect width="51" height="35" rx="8" fill="#25A2E0"/>
            <g clipPath="url(#clip0_862_1435)">
                <path d="M33.4576 9.68567L16.6244 16.2105C15.9471 16.5143 15.7179 17.1228 16.4607 17.453L20.7791 18.8325L31.2205 12.3462C31.7906 11.9389 32.3743 12.0475 31.8721 12.4955L22.9043 20.6571L22.6226 24.1111C22.8835 24.6444 23.3613 24.6469 23.666 24.3818L26.1471 22.0221L30.3963 25.2204C31.3832 25.8077 31.9202 25.4287 32.1326 24.3523L34.9197 11.0868C35.209 9.76182 34.7156 9.17801 33.4576 9.68567Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_862_1435">
                    <rect width="19" height="19" fill="white" transform="translate(16 8)"/>
                </clipPath>
            </defs>
        </svg>
    );

    if (type === "facebook") return (
        <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
            <rect width="51" height="35" rx="8" fill="#0066FF"/>
            <path d="M27.0846 18.6882H29.0638L29.8555 15.5215H27.0846V13.9382C27.0846 13.1227 27.0846 12.3548 28.668 12.3548H29.8555V9.69482C29.5974 9.66078 28.6228 9.58398 27.5937 9.58398C25.4443 9.58398 23.918 10.8958 23.918 13.3048V15.5215H21.543V18.6882H23.918V25.4173H27.0846V18.6882Z" fill="white"/>
        </svg>
    );

    if (type === "twitter") return (
        <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
            <rect width="51" height="35" rx="8" fill="#03A9F4"/>
            <path d="M33.7804 12.7493C33.1708 13.0264 32.5137 13.2085 31.8329 13.2956C32.5296 12.876 33.0679 12.211 33.3212 11.4114C32.6642 11.8073 31.9358 12.0843 31.1679 12.2427C30.5425 11.5618 29.6637 11.166 28.6662 11.166C26.8058 11.166 25.2858 12.686 25.2858 14.5623C25.2858 14.8314 25.3175 15.0927 25.3729 15.3381C22.5546 15.1956 20.045 13.8418 18.3746 11.7914C18.0817 12.2902 17.9154 12.876 17.9154 13.4935C17.9154 14.6731 18.5092 15.7181 19.4275 16.3118C18.8654 16.3118 18.3429 16.1535 17.8838 15.916V15.9398C17.8838 17.5864 19.0554 18.9639 20.6071 19.2727C20.1089 19.409 19.5859 19.428 19.0792 19.3281C19.2942 20.003 19.7153 20.5935 20.2833 21.0167C20.8513 21.4398 21.5376 21.6744 22.2458 21.6873C21.0454 22.6376 19.5573 23.1513 18.0262 23.1439C17.7571 23.1439 17.4879 23.1281 17.2188 23.0964C18.7229 24.0623 20.5121 24.6243 22.4279 24.6243C28.6662 24.6243 32.0942 19.4468 32.0942 14.9581C32.0942 14.8077 32.0942 14.6652 32.0862 14.5148C32.7512 14.0398 33.3212 13.4381 33.7804 12.7493Z" fill="white"/>
        </svg>
    );

    if (type === "discord") return (
        <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
            <rect width="51" height="35" rx="8" fill="#5662F6"/>
            <path d="M31.254 12.219C30.201 11.7281 29.061 11.3719 27.8735 11.1661C27.8631 11.1657 27.8528 11.1677 27.8432 11.1718C27.8336 11.1759 27.8251 11.182 27.8181 11.1898C27.6756 11.4511 27.5094 11.7915 27.3985 12.0527C26.139 11.8627 24.8581 11.8627 23.5985 12.0527C23.4877 11.7836 23.3215 11.4511 23.171 11.1898C23.1631 11.174 23.1394 11.1661 23.1156 11.1661C21.9281 11.3719 20.796 11.7281 19.7352 12.219C19.7273 12.219 19.7194 12.2269 19.7115 12.2348C17.5581 15.4569 16.9644 18.5919 17.2573 21.6952C17.2573 21.7111 17.2652 21.7269 17.281 21.7348C18.706 22.7798 20.0756 23.4131 21.4294 23.8327C21.4531 23.8406 21.4769 23.8327 21.4848 23.8169C21.8015 23.3815 22.0865 22.9223 22.3319 22.4394C22.3477 22.4077 22.3319 22.3761 22.3002 22.3681C21.849 22.194 21.4215 21.9881 21.0019 21.7506C20.9702 21.7348 20.9702 21.6873 20.994 21.6636C21.081 21.6002 21.1681 21.529 21.2552 21.4656C21.271 21.4498 21.2948 21.4498 21.3106 21.4577C24.034 22.7006 26.971 22.7006 29.6627 21.4577C29.6785 21.4498 29.7023 21.4498 29.7181 21.4656C29.8052 21.5369 29.8923 21.6002 29.9794 21.6715C30.011 21.6952 30.011 21.7427 29.9715 21.7586C29.5598 22.004 29.1244 22.2019 28.6731 22.3761C28.6415 22.384 28.6335 22.4236 28.6415 22.4473C28.8948 22.9302 29.1798 23.3894 29.4885 23.8248C29.5123 23.8327 29.536 23.8406 29.5598 23.8327C30.9215 23.4131 32.291 22.7798 33.716 21.7348C33.7319 21.7269 33.7398 21.7111 33.7398 21.6952C34.0881 18.109 33.1619 14.9977 31.2856 12.2348C31.2777 12.2269 31.2698 12.219 31.254 12.219ZM22.7435 19.8031C21.9281 19.8031 21.2473 19.0511 21.2473 18.1248C21.2473 17.1986 21.9123 16.4465 22.7435 16.4465C23.5827 16.4465 24.2477 17.2065 24.2398 18.1248C24.2398 19.0511 23.5748 19.8031 22.7435 19.8031ZM28.2615 19.8031C27.446 19.8031 26.7652 19.0511 26.7652 18.1248C26.7652 17.1986 27.4302 16.4465 28.2615 16.4465C29.1006 16.4465 29.7656 17.2065 29.7577 18.1248C29.7577 19.0511 29.1006 19.8031 28.2615 19.8031Z" fill="white"/>
        </svg>
    );

    return (
        <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
            <rect width="51" height="35" rx="8" fill="#CD3ED0"/>
            <path d="M28.9504 19.084C29.0137 18.5615 29.0612 18.039 29.0612 17.5007C29.0612 16.9623 29.0137 16.4398 28.9504 15.9173H31.6262C31.7529 16.424 31.832 16.9544 31.832 17.5007C31.832 18.0469 31.7529 18.5773 31.6262 19.084M27.5491 23.4857C28.0241 22.6069 28.3883 21.6569 28.6416 20.6673H30.977C30.21 21.988 28.9932 22.9885 27.5491 23.4857ZM27.3512 19.084H23.6462C23.567 18.5615 23.5195 18.039 23.5195 17.5007C23.5195 16.9623 23.567 16.4319 23.6462 15.9173H27.3512C27.4224 16.4319 27.4779 16.9623 27.4779 17.5007C27.4779 18.039 27.4224 18.5615 27.3512 19.084ZM25.4987 23.8023C24.8416 22.8523 24.3112 21.7994 23.9866 20.6673H27.0108C26.6862 21.7994 26.1558 22.8523 25.4987 23.8023ZM22.332 14.334H20.0204C20.7795 13.0097 21.9954 12.0077 23.4404 11.5157C22.9654 12.3944 22.6091 13.3444 22.332 14.334ZM20.0204 20.6673H22.332C22.6091 21.6569 22.9654 22.6069 23.4404 23.4857C21.9984 22.9882 20.7842 21.9876 20.0204 20.6673ZM19.3712 19.084C19.2445 18.5773 19.1654 18.0469 19.1654 17.5007C19.1654 16.9544 19.2445 16.424 19.3712 15.9173H22.047C21.9837 16.4398 21.9362 16.9623 21.9362 17.5007C21.9362 18.039 21.9837 18.5615 22.047 19.084M25.4987 11.1911C26.1558 12.1411 26.6862 13.2019 27.0108 14.334H23.9866C24.3112 13.2019 24.8416 12.1411 25.4987 11.1911ZM30.977 14.334H28.6416C28.3938 13.3535 28.0269 12.407 27.5491 11.5157C29.0058 12.0144 30.217 13.0198 30.977 14.334ZM25.4987 9.58398C21.1208 9.58398 17.582 13.1465 17.582 17.5007C17.582 19.6003 18.4161 21.6139 19.9008 23.0986C20.6359 23.8337 21.5086 24.4168 22.4691 24.8147C23.4296 25.2125 24.4591 25.4173 25.4987 25.4173C27.5983 25.4173 29.612 24.5832 31.0966 23.0986C32.5813 21.6139 33.4154 19.6003 33.4154 17.5007C33.4154 16.461 33.2106 15.4316 32.8127 14.4711C32.4149 13.5106 31.8318 12.6379 31.0966 11.9027C30.3615 11.1676 29.4888 10.5845 28.5283 10.1866C27.5678 9.78876 26.5383 9.58398 25.4987 9.58398Z" fill="white"/>
        </svg>
    );
}

export default SocialButton