import React from 'react'

export default function Counter(props) {
    return (
        
            <svg width="154" height="182" viewBox="0 0 154 182" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="129" height="181" rx="31.5" fill="#FAFF15" stroke="black"/>
<rect x="12" y="45" width="107" height="66" fill="#433B3B"/>
<rect x="21" y="54" width="89" height="49" fill="#C4C4C4"/>
<rect x="27" y="66" width="79" height="29" fill="#252020"/> 
    <text x="45" y="86" fill="white">  {props.counter}</text> 

<g filter="url(#filter0_d)">
<rect x="53" y="7" width="24" height="13" fill="#D8C0C0"/>
<rect x="53.5" y="7.5" width="23" height="12" stroke="#8E8484"/>
</g>
<g filter="url(#filter1_d)">
<path onClick={()=>{
   props.increment()
}} d="M81 28.5C81 37.0604 74.0604 44 65.5 44C56.9396 44 50 37.0604 50 28.5C50 19.9396 56.9396 13 65.5 13C74.0604 13 81 19.9396 81 28.5Z" fill="#C4C4C4"/>
<path  d="M80.5 28.5C80.5 36.7843 73.7843 43.5 65.5 43.5C57.2157 43.5 50.5 36.7843 50.5 28.5C50.5 20.2157 57.2157 13.5 65.5 13.5C73.7843 13.5 80.5 20.2157 80.5 28.5Z" stroke="#8E8484"/>
</g>
<path onClick={()=>{
    console.log("Reset Clicked")
    props.reset()
}} d="M130 67L153 68.6429V87.125L130 90V67Z" fill="#333030"/>
<line x1="152.97" y1="69.59" x2="129.97" y2="68.1961" stroke="black" stroke-opacity="0.37"/>
<line x1="152.97" y1="70.9839" x2="129.97" y2="69.59" stroke="black" stroke-opacity="0.37"/>
<line x1="152.97" y1="72.3779" x2="129.97" y2="70.9839" stroke="black" stroke-opacity="0.37"/>
<line x1="152.97" y1="73.7718" x2="129.97" y2="72.3779" stroke="black" stroke-opacity="0.37"/>
<line x1="152.97" y1="75.1658" x2="129.97" y2="73.7718" stroke="black" stroke-opacity="0.37"/>
<line x1="152.97" y1="76.5597" x2="129.97" y2="75.1658" stroke="black" stroke-opacity="0.37"/>
<line x1="153.06" y1="86.3146" x2="130.06" y2="89.1024" stroke="black" stroke-opacity="0.37"/>
<line x1="153.06" y1="84.9206" x2="130.06" y2="87.7085" stroke="black" stroke-opacity="0.37"/>
<line x1="153.06" y1="83.5267" x2="130.06" y2="86.3146" stroke="black" stroke-opacity="0.37"/>
<line x1="153.06" y1="82.1327" x2="130.06" y2="84.9206" stroke="black" stroke-opacity="0.37"/>
<line x1="153.06" y1="80.7388" x2="130.06" y2="83.5267" stroke="black" stroke-opacity="0.37"/>
<line x1="153.06" y1="77.9509" x2="130.06" y2="80.7388" stroke="black" stroke-opacity="0.37"/>
<line x1="152.334" y1="77.9536" x2="130.031" y2="79.3475" stroke="black" stroke-opacity="0.37"/>
<line x1="152.287" y1="77.2573" x2="129.984" y2="76.5604" stroke="black" stroke-opacity="0.37"/>
<line x1="153.015" y1="77.2573" x2="130.015" y2="77.9543" stroke="black" stroke-opacity="0.37"/>
<line x1="153.06" y1="79.3449" x2="130.06" y2="82.1327" stroke="black" stroke-opacity="0.37"/>
<defs>
<filter id="filter0_d" x="49" y="7" width="32" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="46" y="13" width="39" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

       
    )
}
