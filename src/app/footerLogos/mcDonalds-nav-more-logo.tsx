
export default function McDonaldsMoreLogo({
    className,
    isSelected,
} : {
    className: string,
    isSelected: boolean,
}) {

    const unSelectedColor: string = "#adadad";
    const selectedColor: string = "#f4be43";
    const finalColor: string = isSelected ? selectedColor : unSelectedColor;

    return(
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32px" 
        height="32px" 
        viewBox="0 0 24 24" 
        id="three-dots"
    >
        <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="rotate(0)">
            <rect id="Rectangle" width="24" height="24" fill="none"/>
            <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke={finalColor} fill={finalColor} stroke-miterlimit="10" stroke-width="0.7"/>
            <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)" stroke={finalColor} fill={finalColor} stroke-miterlimit="10" stroke-width="0.7"/>
            <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)" stroke={finalColor} fill={finalColor} stroke-miterlimit="10" stroke-width="0.7"/>
        </g>
    </svg>
    );
}