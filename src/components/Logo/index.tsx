import * as S from './styles'

export type LogoProps = {
  withTitle?: boolean
  size?: 'small' | 'normal' | 'large'
}

const Logo = ({ withTitle = false, size = 'normal' }: LogoProps) => (
  <S.Wrapper withTitle={withTitle} size={size}>
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${withTitle ? '265' : '107'} 107`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#logo1)">
        {withTitle && (
          <path
            d="M149.176 83.36c-2.784 0-5.928-.24-9.432-.72-1.92-.24-3.24-.744-3.96-1.512-.72-.768-1.032-2.016-.936-3.744.336-4.752 1.128-10.608 2.376-17.568 1.248-7.008 2.76-13.752 4.536-20.232.336-1.2 1.008-2.04 2.016-2.52s2.328-.72 3.96-.72c2.928 0 4.392.816 4.392 2.448 0 .672-.144 1.44-.432 2.304-1.248 3.84-2.496 9-3.744 15.48-1.248 6.432-2.136 12.576-2.664 18.432 1.44.144 3.072.216 4.896.216 8.4 0 14.664-2.544 18.792-7.632 4.176-5.088 6.264-11.88 6.264-20.376 0-5.712-1.632-10.128-4.896-13.248-3.264-3.12-7.872-4.68-13.824-4.68-3.84 0-7.656.6-11.448 1.8-3.744 1.2-7.128 2.784-10.152 4.752a3.474 3.474 0 0 1-2.016.648c-.816 0-1.464-.336-1.944-1.008-.48-.72-.72-1.584-.72-2.592 0-1.152.192-2.088.576-2.808.384-.768 1.032-1.464 1.944-2.088 3.312-2.256 7.2-3.96 11.664-5.112 4.464-1.2 8.76-1.8 12.888-1.8 5.856 0 10.92 1.032 15.192 3.096 4.272 2.016 7.56 4.992 9.864 8.928 2.304 3.936 3.456 8.688 3.456 14.256 0 7.248-1.44 13.584-4.32 19.008-2.88 5.376-7.08 9.552-12.6 12.528-5.52 2.976-12.096 4.464-19.728 4.464Zm78.188-22.464c.624 0 1.104.312 1.44.936.336.624.504 1.416.504 2.376 0 2.304-.696 3.672-2.088 4.104-2.88 1.008-6.048 1.584-9.504 1.728-.912 4.032-2.712 7.272-5.4 9.72-2.688 2.4-5.736 3.6-9.144 3.6-2.88 0-5.352-.696-7.416-2.088-2.016-1.392-3.552-3.24-4.608-5.544-1.056-2.304-1.585-4.8-1.585-7.488 0-3.648.697-6.888 2.089-9.72 1.392-2.88 3.312-5.112 5.76-6.696 2.448-1.632 5.16-2.448 8.136-2.448 3.648 0 6.576 1.272 8.784 3.816 2.256 2.496 3.576 5.592 3.96 9.288 2.256-.144 4.944-.624 8.064-1.44.384-.096.72-.144 1.008-.144Zm-23.616 14.832c1.536 0 2.856-.624 3.96-1.872 1.152-1.248 1.92-3.048 2.304-5.4a10.218 10.218 0 0 1-3.456-3.96 12.027 12.027 0 0 1-1.152-5.184c0-.768.072-1.536.216-2.304h-.36c-1.92 0-3.528.936-4.824 2.808-1.248 1.824-1.872 4.416-1.872 7.776 0 2.64.504 4.656 1.512 6.048 1.056 1.392 2.28 2.088 3.672 2.088Zm45.156-6.624c.624 0 1.104.288 1.44.864.384.576.576 1.368.576 2.376 0 1.728-.408 3.216-1.224 4.464-1.344 2.064-3.12 3.672-5.328 4.824-2.16 1.152-4.752 1.728-7.776 1.728-4.608 0-8.184-1.368-10.728-4.104-2.544-2.784-3.816-6.528-3.816-11.232 0-3.312.696-6.384 2.088-9.216 1.392-2.88 3.312-5.16 5.76-6.84 2.496-1.68 5.304-2.52 8.424-2.52 2.784 0 5.016.84 6.696 2.52 1.68 1.632 2.52 3.864 2.52 6.696 0 3.312-1.2 6.168-3.6 8.568-2.352 2.352-6.384 4.224-12.096 5.616 1.152 2.208 3.096 3.312 5.832 3.312 1.968 0 3.576-.456 4.824-1.368 1.296-.912 2.784-2.448 4.464-4.608.576-.72 1.224-1.08 1.944-1.08Zm-11.808-12.6c-1.776 0-3.288 1.032-4.536 3.096-1.2 2.064-1.8 4.56-1.8 7.488v.144c2.832-.672 5.064-1.68 6.696-3.024 1.632-1.344 2.448-2.904 2.448-4.68 0-.912-.264-1.632-.792-2.16-.48-.576-1.152-.864-2.016-.864Z"
            fill="#000"
            fillOpacity=".67"
          />
        )}
        <g filter="url(#logo2)">
          <path
            d="M109.972 35.685c-1.875-27.12-31.403-37.407-50.619-21.509L70.602 24.93c9.373 13.56-2.813 24.314-16.873 16.833L30.763 65.142c-4.218 5.143.469 12.624 7.499 8.884l26.247-25.25 2.812 2.339-25.778 26.651c-3.281 5.611 2.343 11.222 8.905 7.482l25.31-25.25 3.28 2.338L53.26 88.521c-4.218 5.61 2.812 12.624 8.437 7.948l40.307-39.743c8.905-11.69 7.968-21.041 7.968-21.041Z"
            fill="#04D361"
          />
          <path
            d="m50.917 38.958-7.968-8.884-23.435 23.378c-5.624 5.144 1.875 15.43 8.905 8.417l22.498-22.911Z"
            fill="#04D361"
          />
          <path
            d="M54.666 13.709C49.511 9.5 34.981-.786 16.234 12.773-3.576 27.1 7.327 52.985 14.826 58.596c-.937-2.806 1.875-7.014 3.281-8.417l22.497-22.91-7.499-7.014 2.344-1.87 19.685 19.637C65.446 48.31 75.757 34.75 67.32 26.334c0 0-7.345-8.29-12.655-12.624Z"
            fill="#04D361"
          />
          <path
            d="M109.972 35.685c-1.875-27.12-31.403-37.407-50.619-21.509L70.602 24.93c9.373 13.56-2.813 24.314-16.873 16.833L30.763 65.142c-4.218 5.143.469 12.624 7.499 8.884l26.247-25.25 2.812 2.339-25.778 26.651c-3.281 5.611 2.343 11.222 8.905 7.482l25.31-25.25 3.28 2.338L53.26 88.521c-4.218 5.61 2.812 12.624 8.437 7.948l40.307-39.743c8.905-11.69 7.968-21.041 7.968-21.041Z"
            stroke="#000"
            strokeWidth=".5"
          />
          <path
            d="m50.917 38.958-7.968-8.884-23.435 23.378c-5.624 5.144 1.875 15.43 8.905 8.417l22.498-22.911Z"
            stroke="#000"
            strokeWidth=".5"
          />
          <path
            d="M54.666 13.709C49.511 9.5 34.981-.786 16.234 12.773-3.576 27.1 7.327 52.985 14.826 58.596c-.937-2.806 1.875-7.014 3.281-8.417l22.497-22.91-7.499-7.014 2.344-1.87 19.685 19.637C65.446 48.31 75.757 34.75 67.32 26.334c0 0-7.345-8.29-12.655-12.624Z"
            stroke="#000"
            strokeWidth=".5"
          />
        </g>
      </g>
      <defs>
        <filter
          id="logo1"
          x=".75"
          y="5.75"
          width="254.17"
          height="100.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="logo2"
          x="4.75"
          y="5.75"
          width="105.5"
          height="96.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Logo
