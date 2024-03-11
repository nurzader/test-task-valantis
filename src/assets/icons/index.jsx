import React from 'react';

export const Spinner = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{margin: '0 auto', background: 'none', display: 'block'}}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <g transform="translate(80,50)">
                <g transform="rotate(0)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="1">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.875s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.875s"
                        ></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(71.21320343559643,71.21320343559643)">
                <g transform="rotate(45)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="0.875">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.75s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.75s"
                        ></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(50,80)">
                <g transform="rotate(90)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="0.75">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.625s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.625s"
                        ></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(28.786796564403577,71.21320343559643)">
                <g transform="rotate(135)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="0.625">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.5s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.5s"
                        ></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(20,50.00000000000001)">
                <g transform="rotate(180)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="0.5">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.375s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.375s"
                        ></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(28.78679656440357,28.786796564403577)">
                <g transform="rotate(225)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="0.375">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.25s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.25s"
                        ></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(49.99999999999999,20)">
                <g transform="rotate(270)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="0.25">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.125s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.125s"
                        ></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(71.21320343559643,28.78679656440357)">
                <g transform="rotate(315)">
                    <circle cx="0" cy="0" r="7" fill="#000000" fillOpacity="0.125">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="0s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="0s"
                        ></animate>
                    </circle>
                </g>
            </g>
        </svg>
    );
};

export const SearchIcon = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="9.80547"
                cy="9.80547"
                r="7.49047"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.0153 15.4042L17.9519 18.3333"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const HeartIcon = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.39323 9.66527C1.49906 6.8736 2.54406 3.68277 5.4749 2.7386C7.01656 2.2411 8.71823 2.53443 9.9999 3.4986C11.2124 2.5611 12.9766 2.24443 14.5166 2.7386C17.4474 3.68277 18.4991 6.8736 17.6057 9.66527C16.2141 14.0903 9.9999 17.4986 9.9999 17.4986C9.9999 17.4986 3.83156 14.1419 2.39323 9.66527Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.3333 5.58331C14.225 5.87165 14.855 6.66748 14.9308 7.60165"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const BagIcon = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7614 17.9166H6.80492C4.24962 17.9166 2.28928 16.9937 2.84611 13.279L3.49447 8.24463C3.83772 6.39108 5.02002 5.6817 6.0574 5.6817H14.5395C15.5921 5.6817 16.7058 6.44448 17.1024 8.24463L17.7508 13.279C18.2237 16.5741 16.3167 17.9166 13.7614 17.9166Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.8759 5.49865C13.8759 3.51026 12.264 1.89835 10.2756 1.89835V1.89835C9.31806 1.89429 8.39839 2.27182 7.7199 2.94744C7.04141 3.62307 6.66 4.54114 6.66 5.49865H6.66"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.747 9.25151H12.7088"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.88807 9.25151H7.84993"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const ArrowRightIcon = () => {
    return (
        <svg
            width="23"
            height="12"
            viewBox="0 0 23 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.9991 6.08536H1"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.8926 1L21.9989 6.08541L16.8926 11.1708"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const TwitterIcon = () => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="14" cy="14" r="13.5" stroke="#D4D4D8" />
            <path
                d="M20.2071 10.9831C19.7881 11.1693 19.3458 11.2857 18.8802 11.3556C19.3458 11.0762 19.7183 10.6339 19.8812 10.0985C19.4389 10.3546 18.9501 10.5408 18.4146 10.6572C17.9956 10.2149 17.3904 9.93555 16.7386 9.93555C15.4815 9.93555 14.4572 10.9598 14.4572 12.2169C14.4572 12.4031 14.4805 12.5661 14.5271 12.729C12.6415 12.6359 10.9421 11.728 9.80141 10.3313C9.61518 10.6805 9.49878 11.0529 9.49878 11.472C9.49878 12.2634 9.89453 12.9618 10.5231 13.3808C10.1506 13.3576 9.80141 13.2644 9.4755 13.1015V13.1248C9.4755 14.2422 10.267 15.1733 11.3145 15.3828C11.1283 15.4294 10.9188 15.4527 10.7093 15.4527C10.5696 15.4527 10.4067 15.4294 10.267 15.4061C10.5696 16.314 11.4077 16.9891 12.4087 16.9891C11.6172 17.5943 10.6395 17.9668 9.56862 17.9668C9.38239 17.9668 9.19616 17.9668 9.0332 17.9435C10.0575 18.5953 11.2447 18.9678 12.5483 18.9678C16.7618 18.9678 19.0665 15.476 19.0665 12.4497C19.0665 12.3566 19.0665 12.2402 19.0665 12.1471C19.5088 11.8444 19.9045 11.4487 20.2071 10.9831Z"
                fill="#090914"
            />
        </svg>
    );
};

export const FacebookIcon = () => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="14" cy="14" r="14" fill="black" />
            <path
                d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
                fill="white"
            />
        </svg>
    );
};

export const InstagramIcon = () => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="14" cy="14" r="13.5" stroke="#D4D4D8" />
            <path
                d="M14.0008 8.44721C15.8095 8.44721 16.0237 8.45398 16.7382 8.48656C17.1678 8.49182 17.5933 8.5707 17.9962 8.71979C18.2884 8.83248 18.5538 9.00511 18.7753 9.22656C18.9967 9.44802 19.1694 9.71339 19.282 10.0056C19.4311 10.4085 19.51 10.8341 19.5153 11.2637C19.5475 11.9782 19.5546 12.1924 19.5546 14.0011C19.5546 15.8098 19.5479 16.024 19.5153 16.7385C19.51 17.1681 19.4311 17.5936 19.282 17.9966C19.1694 18.2888 18.9967 18.5541 18.7753 18.7756C18.5538 18.997 18.2884 19.1697 17.9962 19.2824C17.5933 19.4315 17.1678 19.5103 16.7382 19.5156C16.024 19.5479 15.8098 19.5549 14.0008 19.5549C12.1917 19.5549 11.9775 19.5482 11.2633 19.5156C10.8337 19.5103 10.4082 19.4315 10.0053 19.2824C9.71307 19.1697 9.44769 18.997 9.22624 18.7756C9.00479 18.5541 8.83216 18.2888 8.71947 17.9966C8.57038 17.5936 8.4915 17.1681 8.48624 16.7385C8.45398 16.024 8.44689 15.8098 8.44689 14.0011C8.44689 12.1924 8.45366 11.9782 8.48624 11.2637C8.4915 10.8341 8.57038 10.4085 8.71947 10.0056C8.83216 9.71339 9.00479 9.44802 9.22624 9.22656C9.44769 9.00511 9.71307 8.83248 10.0053 8.71979C10.4082 8.5707 10.8337 8.49182 11.2633 8.48656C11.9779 8.4543 12.192 8.44721 14.0008 8.44721ZM14.0008 7.22656C12.162 7.22656 11.9304 7.2343 11.2079 7.26721C10.6456 7.27839 10.0893 7.38485 9.56269 7.58205C9.11092 7.75226 8.70172 8.019 8.36366 8.36366C8.01869 8.70184 7.75172 9.11127 7.5814 9.56334C7.3842 10.09 7.27775 10.6463 7.26656 11.2085C7.2343 11.9304 7.22656 12.162 7.22656 14.0008C7.22656 15.8395 7.2343 16.0711 7.26721 16.7937C7.27839 17.3559 7.38485 17.9122 7.58205 18.4388C7.75218 18.8908 8.01892 19.3002 8.36366 19.6385C8.70191 19.9832 9.11133 20.25 9.56334 20.4201C10.09 20.6173 10.6463 20.7238 11.2085 20.7349C11.9311 20.7672 12.1617 20.7756 14.0014 20.7756C15.8411 20.7756 16.0717 20.7679 16.7943 20.7349C17.3565 20.7238 17.9128 20.6173 18.4395 20.4201C18.8893 20.2457 19.2978 19.9794 19.6389 19.6381C19.98 19.2968 20.246 18.8882 20.4201 18.4382C20.6173 17.9115 20.7238 17.3553 20.735 16.793C20.7672 16.0711 20.775 15.8395 20.775 14.0008C20.775 12.162 20.7672 11.9304 20.7343 11.2079C20.7231 10.6456 20.6167 10.0893 20.4195 9.56269C20.2493 9.11068 19.9826 8.70126 19.6379 8.36301C19.2996 8.01828 18.8902 7.75153 18.4382 7.5814C17.9115 7.3842 17.3553 7.27775 16.793 7.26656C16.0711 7.2343 15.8395 7.22656 14.0008 7.22656Z"
                fill="#090914"
            />
            <path
                d="M14.0021 10.5234C13.3141 10.5234 12.6416 10.7275 12.0695 11.1097C11.4974 11.492 11.0515 12.0353 10.7882 12.6709C10.5249 13.3066 10.4561 14.006 10.5903 14.6808C10.7245 15.3556 11.0558 15.9755 11.5423 16.462C12.0288 16.9485 12.6487 17.2798 13.3235 17.414C13.9983 17.5482 14.6977 17.4794 15.3334 17.2161C15.969 16.9528 16.5123 16.5069 16.8946 15.9348C17.2768 15.3627 17.4809 14.6902 17.4809 14.0021C17.4809 13.0795 17.1144 12.1947 16.462 11.5423C15.8096 10.8899 14.9248 10.5234 14.0021 10.5234ZM14.0021 16.2602C13.5555 16.2602 13.119 16.1278 12.7476 15.8797C12.3763 15.6315 12.0869 15.2789 11.916 14.8663C11.7451 14.4537 11.7003 13.9996 11.7875 13.5616C11.8746 13.1236 12.0897 12.7213 12.4055 12.4055C12.7213 12.0897 13.1236 11.8746 13.5616 11.7875C13.9996 11.7003 14.4537 11.7451 14.8663 11.916C15.2789 12.0869 15.6315 12.3763 15.8797 12.7476C16.1278 13.119 16.2602 13.5555 16.2602 14.0021C16.2602 14.601 16.0223 15.1754 15.5988 15.5988C15.1754 16.0223 14.601 16.2602 14.0021 16.2602Z"
                fill="#090914"
            />
            <path
                d="M17.6176 11.1981C18.0665 11.1981 18.4305 10.8341 18.4305 10.3852C18.4305 9.93621 18.0665 9.57227 17.6176 9.57227C17.1686 9.57227 16.8047 9.93621 16.8047 10.3852C16.8047 10.8341 17.1686 11.1981 17.6176 11.1981Z"
                fill="#090914"
            />
        </svg>
    );
};

export const GitIcon = () => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="14" cy="14" r="13.5" stroke="#D4D4D8" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.6068 7.22656C11.0159 7.22656 8.12695 10.1155 8.12695 13.7065C8.12695 16.5684 9.98992 18.9984 12.5549 19.8624C12.8789 19.9164 12.9869 19.7274 12.9869 19.5384C12.9869 19.3764 12.9869 18.9714 12.9869 18.4314C11.1779 18.8364 10.7999 17.5674 10.7999 17.5674C10.5029 16.8114 10.0709 16.6224 10.0709 16.6224C9.47693 16.2174 10.1249 16.2174 10.1249 16.2174C10.7729 16.2714 11.1239 16.8924 11.1239 16.8924C11.6909 17.8914 12.6359 17.5944 13.0139 17.4324C13.0679 17.0004 13.2299 16.7304 13.4189 16.5684C11.9879 16.4064 10.4759 15.8394 10.4759 13.3555C10.4759 12.6535 10.7189 12.0595 11.1509 11.6275C11.0969 11.4655 10.8539 10.8175 11.2049 9.89952C11.2049 9.89952 11.7449 9.73752 12.9869 10.5745C13.4999 10.4395 14.0669 10.3585 14.6068 10.3585C15.1468 10.3585 15.7138 10.4395 16.2268 10.5745C17.4688 9.73752 18.0088 9.89952 18.0088 9.89952C18.3598 10.7905 18.1438 11.4385 18.0628 11.6275C18.4678 12.0865 18.7378 12.6535 18.7378 13.3555C18.7378 15.8394 17.2258 16.3794 15.7678 16.5414C16.0108 16.7304 16.1998 17.1354 16.1998 17.7294C16.1998 18.5934 16.1998 19.2954 16.1998 19.5114C16.1998 19.6734 16.3078 19.8894 16.6588 19.8354C19.2238 18.9984 21.0867 16.5684 21.0867 13.7065C21.0867 10.1155 18.1978 7.22656 14.6068 7.22656Z"
                fill="#090914"
            />
        </svg>
    );
};

export const LeftIcon = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2325 4.18414C10.4622 4.423 10.4547 4.80282 10.2159 5.0325L7.06566 8L10.2159 10.9675C10.4547 11.1972 10.4622 11.577 10.2325 11.8159C10.0028 12.0547 9.62299 12.0622 9.38413 11.8325L5.78413 8.4325C5.66648 8.31938 5.59999 8.16321 5.59999 8C5.59999 7.83679 5.66648 7.68062 5.78413 7.5675L9.38413 4.1675C9.62299 3.93782 10.0028 3.94527 10.2325 4.18414Z"
                fill="#626262"
            />
        </svg>
    );
};

export const RightIcon = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.76751 11.8159C5.53783 11.577 5.54528 11.1972 5.78414 10.9675L8.93434 8L5.78414 5.0325C5.54528 4.80282 5.53783 4.423 5.76751 4.18413C5.99718 3.94527 6.37701 3.93782 6.61587 4.1675L10.2159 7.5675C10.3335 7.68062 10.4 7.83679 10.4 8C10.4 8.16321 10.3335 8.31938 10.2159 8.4325L6.61587 11.8325C6.37701 12.0622 5.99718 12.0547 5.76751 11.8159Z"
                fill="#626262"
            />
        </svg>
    );
};
