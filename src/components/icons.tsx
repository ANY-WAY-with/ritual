import type { SVGProps } from "react";

/** Trailing arrow used inside CTA pills/buttons (fills currentColor). */
export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M5.6 0L12.6 5.6L5.6 11.2V7H1.22392e-07L0 4.2L5.6 4.2L5.6 0Z" fill="currentColor" />
    </svg>
  );
}

/** Larger right arrow (feature/utility). */
export function ArrowLongIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8.5 0.224365L18.5 8.22436L8.5 16.2244V10.2244H0.5L0.5 6.22437L8.5 6.22437L8.5 0.224365Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Down caret used by nav dropdown triggers (Solutions, Resources). */
export function CaretDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 4L4 9L0 4H3V0H5V4H8Z" fill="currentColor" />
    </svg>
  );
}

/** Heart in footer "Made with ♥ in San Francisco". */
export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="love"
      {...props}
    >
      <path
        d="M11 3.53321L9.1127 1.70179C7.02808 -0.321113 3.64825 -0.321225 1.56351 1.70179C-0.521227 3.7248 -0.521112 7.00457 1.56351 9.02747L11 18.1846L20.4365 9.02747C22.5212 7.00446 22.5211 3.72469 20.4365 1.70179C18.3519 -0.321113 14.972 -0.321225 12.8873 1.70179L11 3.53321Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Double quotation mark used in testimonials. */
export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="58"
      height="44"
      viewBox="0 0 58 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5122 0.199219C9.63129 0.199219 0 9.83051 0 21.7114H1.91865L1.19093e-05 21.7114V28.8822C1.19093e-05 36.8027 6.4209 43.2236 14.3415 43.2236C22.262 43.2236 28.6829 36.8027 28.6829 28.8822C28.6829 21.094 22.4749 14.7557 14.7373 14.5461L21.5122 0.199219Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.195 0.199219C38.3141 0.199219 28.6828 9.83051 28.6828 21.7114H30.6013L28.6826 21.7114V28.8822C28.6826 36.8027 35.1035 43.2236 43.0241 43.2236C50.9447 43.2236 57.3655 36.8027 57.3655 28.8822C57.3655 21.094 51.1576 14.7558 43.4201 14.5461L50.195 0.199219Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** The DITTO. wordmark logo (renders in currentColor). viewBox 1320x215. */
export function DittoWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1320 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ditto"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104.521 5.14307H0V214.185H104.521C162.246 214.185 209.042 167.389 209.042 109.664C209.042 51.9386 162.246 5.14307 104.521 5.14307ZM104.526 158.961C131.754 158.961 153.828 136.888 153.828 109.659C153.828 82.4303 131.754 60.3571 104.526 60.3571C77.297 60.3571 55.2238 82.4303 55.2238 109.659C55.2238 136.888 77.297 158.961 104.526 158.961Z"
        fill="currentColor"
      />
      <path
        d="M451.891 5.14307H242.85V66.3273H316.803V152.606H242.85V214.185H451.891L451.892 152.606H377.939V66.3273H451.892L451.891 5.14307Z"
        fill="currentColor"
      />
      <path
        d="M694.741 5.14307H485.7V66.2792H559.653V214.185H620.789V66.2792H694.742L694.741 5.14307Z"
        fill="currentColor"
      />
      <path
        d="M937.591 5.14307H728.55V66.2792H802.503V214.185H863.639V66.2792H937.592L937.591 5.14307Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1078.38 0.224365C1019.3 0.224365 971.4 48.121 971.4 107.204C971.4 166.288 1019.3 214.185 1078.38 214.185C1137.46 214.185 1185.36 166.288 1185.36 107.204C1185.36 48.121 1137.46 0.224365 1078.38 0.224365ZM1078.38 157.661C1106.24 157.661 1128.84 135.069 1128.84 107.2C1128.84 79.3303 1106.24 56.7377 1078.38 56.7377C1050.51 56.7377 1027.91 79.3303 1027.91 107.2C1027.91 135.069 1050.51 157.661 1078.38 157.661Z"
        fill="currentColor"
      />
      <circle cx="1269.58" cy="163.769" r="50.4159" fill="currentColor" />
    </svg>
  );
}
