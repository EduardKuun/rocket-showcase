import { Box, useTheme } from '@mui/material';
import { CSSProperties } from '@mui/material/styles/createMixins';
import React, { useMemo } from 'react';

interface Props {
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
}

const RelaunchDaySvg = ({ width, height, style }: Props) => {
  const theme = useTheme();
  const color = useMemo(() => theme.palette.primary.main, [theme]);

  return (
    <svg
      data-name='Layer 1'
      width={width}
      height={height}
      viewBox='0 0 754.00024 750.35999'
      version='1.1'
      id='svg222'
      xmlns='http://www.w3.org/2000/svg'
      style={{ maxWidth: '100%', ...style }}
    >
      <defs id='defs138'>
        <linearGradient
          id='b13d5aa8-7d59-4aa5-8b0c-a1087af90b05-44'
          x1='632.93073'
          y1='457.00247'
          x2='719.74066'
          y2='457.00247'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#fff' id='stop132' />
          <stop offset='1' stopColor='#fff' stopOpacity='0.3' id='stop134' />
        </linearGradient>
        <linearGradient
          id='b216fe78-eea0-4fe3-b1f5-9d415c27bb0d-45'
          x1='578.93073'
          y1='243.00246'
          x2='665.74066'
          y2='243.00246'
          gradientTransform='translate(-222.99992,-74.82)'
        />
        <linearGradient
          id='linearGradient702'
          gradientUnits='userSpaceOnUse'
          x1='632.93073'
          y1='457.00247'
          x2='719.74066'
          y2='457.00247'
          gradientTransform='translate(-222.99992,-74.82)'
        />
      </defs>
      <path
        d='m 754.00008,377 a 376.64732,376.64732 0 0 1 -321.59,372.95 h -102.11 c -0.16,0.13995 -5.82,0.41 -5.82,0.41 -0.94995,-0.13 -1.91,-0.27 -2.86,-0.41 q -10.905,-1.605 -21.61,-3.83 a 372.65332,372.65332 0 0 1 -81.03,-26.75 c -0.27,-0.12 -0.53,-0.25 -0.8,-0.37 a 371.02329,371.02329 0 0 1 -41.87,-22.81 c -0.34,-0.21 -0.67,-0.42 -1,-0.63 -0.57,-0.36 -1.13,-0.71 -1.69,-1.08 -0.18,-0.11 -0.36,-0.22 -0.54,-0.34 a 376.057,376.057 0 0 1 -34.67,-25.24 c -0.54,-0.43 -1.07995,-0.88 -1.62,-1.32 q -3.255,-2.7 -6.45,-5.46 c -0.02,-0.01 -0.03,-0.03 -0.05,-0.04 A 380.6518,380.6518 0 0 1 99.320076,632 c -0.03,-0.04 -0.07,-0.07 -0.1,-0.11 a 376.23856,376.23856 0 0 1 -88.33,-164.6 c -0.12,-0.44 -0.22,-0.87 -0.33,-1.31 A 378.13889,378.13889 0 0 1 7.5990865e-5,377 C 7.5990865e-5,168.79 168.79008,0 377.00008,0 c 208.21,0 377,168.79 377,377 z'
        fill='#3f3d56'
        id='path140'
      />
      <path
        d='m 411.85355,432.6162 32.97053,-38.59855 32.97058,-38.59855 18.61242,-21.7895 c 1.02981,-1.2056 -0.55938,-3.08643 -1.58915,-1.88088 l -32.97058,38.59855 -32.97057,38.59855 -18.61242,21.78951 c -1.02981,1.2056 0.55938,3.08642 1.58915,1.88087 z'
        opacity='0.8'
        fill='url(#b13d5aa8-7d59-4aa5-8b0c-a1087af90b05-44)'
        id='path142'
        style={{
          fill: 'url(#linearGradient702)',
        }}
      />
      <rect
        x='386.81006'
        y='336.40997'
        width='34.099979'
        height='413.54004'
        fill='#2f2e41'
        id='rect144'
      />
      <polygon
        points='408.73,709.14 408.51,749.95 406.31,749.95 406.53,709.14 406.74,671.44 406.85,650.5 407.68,500.64 407.75,488.22 409.95,488.23 409.88,500.61 409.05,650.87 408.95,668.78 '
        fill={color}
        id='polygon146'
        transform='translate(7.5990865e-5)'
      />
      <path
        d='m 427.03093,341.90983 h -46.204 c -0.67058,-7.23824 0.99769,-14.528 5.2942,-21.87563 l 1.30636,-8.927 h 31.90275 l 1.50484,8.814 c 4.47017,5.95554 6.202,13.47561 6.19585,21.98863 z'
        fill='#2f2e41'
        id='path148'
      />
      <path
        d='m 420.31822,312.20727 h -32.92189 a 2.20019,2.20019 0 0 1 -2.13943,-2.71366 l 5.54447,-23.102 a 2.2002,2.2002 0 0 1 2.13944,-1.68672 h 21.83293 a 2.2002,2.2002 0 0 1 2.13944,1.68672 l 5.54448,23.102 a 2.2002,2.2002 0 0 1 -2.13944,2.71366 z'
        fill='#2f2e41'
        id='path150'
      />
      <path
        d='m 403.86008,273.15 a 11.56351,11.56351 0 0 0 -11.55,11.56 v 11.55 h 23.1 v -11.55 a 11.56351,11.56351 0 0 0 -11.55,-11.56 z'
        fill='#2f2e41'
        id='path152'
      />
      <polygon
        points='391.051,647.927 391.051,622.109 312.765,723.714 323.592,726.213 384.388,647.927 '
        fill='#2f2e41'
        id='polygon154'
        transform='translate(7.5990865e-5)'
      />
      <polygon
        points='419.831,647.927 419.831,622.109 498.117,723.714 487.29,726.213 426.494,647.927 '
        fill='#2f2e41'
        id='polygon156'
        transform='translate(7.5990865e-5)'
      />
      <path
        d='m 649.38008,245.25 v 392.4 a 378.72351,378.72351 0 0 1 -82.45,65.08 V 245.25 Z'
        fill='#2f2e41'
        id='path158'
      />
      <rect
        x='634.38672'
        y='295.22385'
        width='54.133881'
        height='54.133881'
        fill='#2f2e41'
        id='rect160'
      />
      <rect
        x='601.90637'
        y='114.50001'
        width='12.49243'
        height='141.58092'
        fill='#2f2e41'
        id='rect162'
      />
      <g opacity='0.4' id='g168' transform='translate(7.5990865e-5)'>
        <path
          d='m 796.93,320.07 h -7 v 457.48 q 3.52736,-2.06131 7,-4.20514 z'
          transform='translate(-223,-74.82001)'
          fill='#e6e6e6'
          id='path164'
        />
        <rect x='601.90631' y='114.5' width='7' height='130.75' fill='#e6e6e6' id='rect166' />
      </g>
      <rect
        x='583.16772'
        y='309.79837'
        width='44.972759'
        height='24.984871'
        fill={color}
        id='rect170'
      />
      <circle cx='146.93333' cy='244.84669' r='66.192596' fill='#e6e6e6' id='circle172' />
      <circle cx='140.42259' cy='199.27147' r='7.59587' fill='#cbcbcb' id='circle174' />
      <circle cx='153.44409' cy='275.23016' r='7.59587' fill='#cbcbcb' id='circle176' />
      <circle cx='182.74245' cy='232.91032' r='5.4256201' fill='#cbcbcb' id='circle178' />
      <circle cx='120.89034' cy='250.27232' r='17.36199' fill='#cbcbcb' id='circle180' />
      <circle cx='252.01497' cy='349.21277' r='3.5764899' fill={color} id='circle182' />
      <polygon
        points='280.037,404.048 278.252,405.821 279.434,407.011 281.219,405.238 282.992,407.023 284.182,405.841 282.409,404.056 284.194,402.283 283.012,401.093 281.227,402.866 279.454,401.081 278.264,402.263 '
        fill='#e6e6e6'
        id='polygon184'
        transform='translate(7.5990865e-5)'
      />
      <polygon
        points='294.343,300.33 292.558,302.103 293.74,303.293 295.525,301.52 297.298,303.305 298.488,302.123 296.715,300.338 298.5,298.565 297.318,297.375 295.533,299.148 293.76,297.363 292.57,298.545 '
        fill='#e6e6e6'
        id='polygon186'
        transform='translate(7.5990865e-5)'
      />
      <path
        d='m 342.27908,100.55584 c -3.862,2.5732 -7.81471,-3.55124 -3.87846,-6.01018 3.86178,-2.57304 7.81446,3.5514 3.87846,6.01018 z'
        fill='#e6e6e6'
        id='path188'
      />
      <polygon
        points='114.461,365.83 112.004,365.292 111.645,366.93 114.102,367.469 113.564,369.926 115.202,370.285 115.741,367.827 118.198,368.366 118.557,366.728 116.1,366.189 116.638,363.731 115,363.372 '
        fill='#e6e6e6'
        id='polygon190'
        transform='translate(7.5990865e-5)'
      />
      <polygon
        points='490.461,70.83 488.004,70.292 487.645,71.93 490.102,72.469 489.564,74.926 491.202,75.285 491.741,72.827 494.198,73.366 494.557,71.728 492.1,71.189 492.638,68.731 491,68.372 '
        fill='#e6e6e6'
        id='polygon192'
        transform='translate(7.5990865e-5)'
      />
      <polygon
        points='682.461,229.83 680.004,229.292 679.645,230.93 682.102,231.469 681.564,233.926 683.202,234.285 683.741,231.827 686.198,232.366 686.557,230.728 684.1,230.189 684.638,227.731 683,227.372 '
        fill='#e6e6e6'
        id='polygon194'
        transform='translate(7.5990865e-5)'
      />
      <polygon
        points='218.364,109.608 215.906,109.07 215.547,110.708 218.005,111.247 217.467,113.705 219.105,114.063 219.644,111.606 222.101,112.144 222.46,110.506 220.003,109.967 220.541,107.51 218.903,107.151 '
        fill='#e6e6e6'
        id='polygon196'
        transform='translate(7.5990865e-5)'
      />
      <circle cx='455.33972' cy='188.55084' r='3.5764899' fill={color} id='circle198' />
      <polygon
        points='424.461,241.83 422.004,241.292 421.645,242.93 424.102,243.469 423.564,245.926 425.202,246.285 425.741,243.827 428.198,244.366 428.557,242.728 426.1,242.189 426.638,239.731 425,239.372 '
        fill='#e6e6e6'
        id='polygon200'
        transform='translate(7.5990865e-5)'
      />
      <polygon
        points='519.364,197.608 516.906,197.07 516.547,198.708 519.005,199.247 518.467,201.705 520.105,202.063 520.644,199.606 523.101,200.144 523.46,198.506 521.003,197.967 521.541,195.51 519.903,195.151 '
        fill='#e6e6e6'
        id='polygon202'
        transform='translate(7.5990865e-5)'
      />
      <path
        d='m 357.85355,218.6162 32.97053,-38.59855 32.97058,-38.59855 18.61242,-21.7895 c 1.02981,-1.2056 -0.55938,-3.08643 -1.58915,-1.88088 l -32.97058,38.59855 -32.97057,38.59855 -18.61242,21.78951 c -1.02981,1.2056 0.55938,3.08642 1.58915,1.88087 z'
        opacity='0.8'
        fill='url(#b216fe78-eea0-4fe3-b1f5-9d415c27bb0d-45)'
        id='path204'
        style={{
          fill: 'url(#b216fe78-eea0-4fe3-b1f5-9d415c27bb0d-45)',
        }}
      />
      <rect x='385.49371' y='646.9693' width='6' height='102.02313' fill='#e6e6e6' id='rect206' />
      <path
        d='m 405.54008,272.6 a 11.57294,11.57294 0 0 0 -8.55,11.15 v 0.1 a 2.21112,2.21112 0 0 0 -1.51,1.58 l -5.54,23.11 a 2.18494,2.18494 0 0 0 2.01,2.69 l -0.04,0.27 -0.15,1 -2.26,7 c -4.29,7.34 -4.66,14.21 -3.99,21.45 h 5.98 v 280.51 l -78.04,101.3 5.74,1.32 -0.91,1.18006 -10.83,-2.5 78.04,-101.3 V 340.95 l -4.99,-0.45 c -0.67,-7.24 0.71,-13.66 5,-21 l 0.26,-7 0.15,-1 0.04,-0.27 a 2.18494,2.18494 0 0 1 -2.01,-2.69 l 5.54,-23.11 a 2.21112,2.21112 0 0 1 1.51,-1.58 v -0.1 a 11.56351,11.56351 0 0 1 11.55,-11.56 11.4326,11.4326 0 0 1 3,0.41 z'
        fill='#e6e6e6'
        id='path208'
      />
      <polygon
        points='491.062,724.081 431.177,646.969 425.594,646.969 425.594,647.506 485.974,725.255 '
        fill='#e6e6e6'
        id='polygon210'
        transform='translate(7.5990865e-5)'
      />
      <path
        d='m 514.88008,709.14 v 18.85 a 374.5016,374.5016 0 0 1 -82.47,21.96 h -123 c -3.15,-0.57 -6.29,-1.18005 -9.4,-1.83 v -38.98 z'
        fill='#2f2e41'
        id='path212'
      />
      <path
        d='m 409.05008,650.87 c -0.7,-0.12 -1.44,-0.24 -2.2,-0.37 -4.47,-0.72 -9.86,-1.54 -16.04,-2.39 q -0.63,-0.09 -1.29,-0.18 c -5.1,-0.69 -10.71,-1.39 -16.76,-2.08 -33.17,-3.73 -79.5,-6.72 -126.78,-2.61 1.17,-4.7 2.25,-9.4 3.27,-14.08 l -45.28,7.01 48.86,-24.85 a 692.68108,692.68108 0 0 0 9.48,-77.18 l -24.46,3.78 25.01,-12.72 c 1.79,-32.03 0.95,-53.35 0.95,-53.35 0,0 -81.81,42.53 -147.23,107.53 -2.4,-8.46 -5.03,-16.81 -7.83,-25.01 l -35.140004,29.4 28.970004,-46.52 A 689.19984,689.19984 0 0 0 70.800076,466.28 l -18.98,15.88 14.84,-23.82 c -15.02,-28.35 -26.76,-46.17 -26.76,-46.17 0,0 -13.39,21.94 -29.34,55.81 a 376.3031,376.3031 0 0 0 88.76,166.02 380.10848,380.10848 0 0 0 31.020004,30.12 q 3.19491,2.76 6.45,5.46 a 377.473,377.473 0 0 0 36.29,26.56 c 0.74,0.48 1.48,0.95 2.23,1.42 a 375.11665,375.11665 0 0 0 124.7,50.56 c 3.11,0.65 6.25,1.26 9.4,1.83 0.77,0.13995 1.54,0.28 2.31,0.41 h 12.76 c 0,0 5.66,-0.27 5.82,-0.41 15.85,-13.87006 30.22,-27.89 42.61,-40.81 2.82,-2.93 5.53,-5.81006 8.14,-8.61 l -21.38,-12.47 27.44,5.88 c 1.26,-1.39 2.5,-2.76 3.7,-4.1 6.16,-6.88 11.5,-13.11 15.93,-18.4 0.76,-0.92 1.5,-1.8 2.21,-2.66 8.07,-9.74 12.51,-15.68 12.51,-15.68 0,0 -4.46,-0.91 -12.41,-2.23 z'
        fill='#2f2e41'
        id='path214'
      />
      <path
        d='m 385.49008,340.95 h -5.98 c -0.67,-7.24 1,-14.53 5.29,-21.87006 l 0.96,-6.57995 0.15,-1 h 6 l -0.15,1 -0.96,6.58001 c -4.29,7.34 -5.96,14.63 -5.29,21.87006 h 5.98'
        fill={color}
        id='path216'
      />
      <rect x='385.49005' y='427.5' width='6' height='73' fill={color} id='rect218' />
      <circle cx='606.50006' cy='114.50001' r='11' fill={color} id='circle220' />
    </svg>
  );
};

export default RelaunchDaySvg;
