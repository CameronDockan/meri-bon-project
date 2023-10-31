import * as React from "react";

const SnowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="50px"
    height="50px"
    viewBox="0 0 96 96"
    enableBackground="new 0 0 96 96"
    xmlSpace="preserve"
    {...props}
  >
    <g id="Base" display="none" />
    <g id="Dibujo">
      <g>
        <path className="weather-icon-path" fill="aliceBlue" d="M66,40c-0.507,0-1.112,0.079-1.689,0.184C62.218,33.012,55.663,28,48,28c-7.664,0-14.219,5.012-16.312,12.184 C31.112,40.079,30.508,40,30,40c-6.065,0-11,4.935-11,11s4.935,11,11,11h36c6.065,0,11-4.935,11-11S72.065,40,66,40z M66,58H30 c-3.859,0-7-3.141-7-7s3.141-7,7-7c0.277,0,0.723,0.068,1.194,0.162V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.226 C36.269,36.524,41.632,32,48,32c6.371,0,11.735,4.529,12.808,10.784V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837 C65.278,44.069,65.726,44,66,44c3.859,0,7,3.141,7,7S69.859,58,66,58z" />
        <circle className="weather-icon-circle" fill="aliceBlue" cx={39} cy={66} r={2} />
        <circle className="weather-icon-circle" fill="aliceBlue" cx={57} cy={66} r={2} />
        <circle className="weather-icon-circle" fill="aliceBlue" cx={48} cy={72} r={2} />
        <circle className="weather-icon-circle" fill="aliceBlue" cx={57} cy={78} r={2} />
        <circle className="weather-icon-circle" fill="aliceBlue" cx={48} cy={84} r={2} />
        <circle className="weather-icon-circle" fill="aliceBlue" cx={39} cy={78} r={2} />
      </g>
    </g>
  </svg>
);
export default SnowIcon;
