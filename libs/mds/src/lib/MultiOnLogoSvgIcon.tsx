import * as React from 'react';

type SvgSize = `${number}${'px' | '%' | 'em' | 'rem' | 'vw' | 'vh'}`;

interface MultiOnLogoSvgIconProps extends React.SVGProps<SVGSVGElement> {
  logocolor?: 'black' | 'white';
  size?: SvgSize;
}

export const MultiOnLogoSvgIcon = ({
  logocolor,
  size = '100%',
  ...props
}: MultiOnLogoSvgIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 288 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="#clip0_26_3">
        <path
          d="M65.3615 193.126C83.8799 180.518 102.909 159.66 118.209 133.344C133.509 107.028 142.207 80.1576 144 57.8232L222.638 78.6384C222.631 35.208 187.43 0 144 0C100.569 0 65.3615 35.208 65.3615 78.6384V193.126ZM217.123 202.687C196.941 192.953 169.365 186.905 138.924 186.811C108.482 186.718 80.8631 192.622 60.6239 202.234L39.3335 123.725C1.7207 145.44 -11.1673 193.536 10.5479 231.149C32.2631 268.762 80.3591 281.65 117.972 259.934L217.123 202.687ZM248.666 123.725L149.515 66.4776C151.178 88.8192 159.725 115.726 174.866 142.135C190.008 168.545 208.929 189.511 227.376 202.234H227.383L170.035 259.927C207.648 281.642 255.744 268.754 277.459 231.142C299.167 193.529 286.279 145.44 248.666 123.725Z"
          fill={logocolor}
        />
      </g>
      <defs>
        <clipPath id="clip0_26_3">
          <rect width="288" height="270.72" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MultiOnLogoSvgIcon;
