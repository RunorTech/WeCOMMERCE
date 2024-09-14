

const WaterMarker = ({w, h} : Size ) => {
    
    return (
        <svg width={w} height={h} viewBox='0 0 227 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 61.1395C0 55.1999 5.16729 50.5816 11.0696 51.2459L187.039 71.052C209.597 73.591 228.703 54.5844 226.282 32.0133C223.76 8.50255 199.379 -6.00841 177.511 2.98631L13.7433 70.3471C7.19098 73.0422 0 68.2245 0 61.1395Z' fill='url(#grad1)' />
            <defs>
                <linearGradient id='grad1' x1='851.318' y1='47.553' x2='756.751' y2='339.402' gradientUnits='userSpaceOnUse'><stop offset="0%" stopColor="purple" /><stop offset="100%" stopColor="#b7fd18" /></linearGradient>
            </defs>
        </svg>
    )
}

export default WaterMarker
