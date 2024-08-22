/* eslint-disable react/prop-types */

const Sun = ({color = '#FF4e00'}) => {
    return (
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <line className="sun-line" x1="50" y1="0" x2="50" y2="30" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="75" y1="5" x2="65" y2="25" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="90" y1="25" x2="70" y2="35" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="95" y1="50" x2="80" y2="50" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="90" y1="75" x2="70" y2="65" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="75" y1="95" x2="65" y2="75" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="50" y1="100" x2="50" y2="70" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="25" y1="95" x2="35" y2="75" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="10" y1="75" x2="30" y2="65" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="5" y1="50" x2="20" y2="50" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="10" y1="25" x2="30" y2="35" stroke={color} strokeWidth="3" />
            <line className="sun-line" x1="25" y1="5" x2="35" y2="25" stroke={color} strokeWidth="3" />
        </svg>

    );
};

export default Sun;