import { useNavigate } from 'react-router-dom';
import { useLaguage } from '../Context/LaguageProvider';
function NavLogo() {
  const { laguage } = useLaguage();
  const CHLogo = () => (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5C2.15407 1.9946 4.05833 3.27201 2.55061 4.46108M2.55061 4.46108C2.53415 4.47407 2.51728 4.48704 2.5 4.5C0.9 5.7 1.86708 4.97405 2.55061 4.46108Z"
        stroke="var(--subColor)"
      />
      <path d="M1 7C5 10.5 4 0.500001 1 14" stroke="var(--subColor)" />
      <path
        d="M2.5 8.5C3 17 3 16 2.5 17C2.1 17.8 2 18 2 18"
        stroke="var(--subColor)"
      />
      <path d="M5 13L3 10" stroke="var(--subColor)" />
      <path d="M5 6C13.5 6 17 2 13.5 5" stroke="var(--subColor)" />
      <path
        d="M10 1C9.6608 3.45923 8.96779 7.24739 8 10.5336M4.5 17C5.06962 16.7559 5.60751 16.1489 6.10862 15.2962M8 10.5336C11.8333 10.0224 18.3 10.3 13.5 15.5C11.1 15.9 7.57241 15.5308 6.10862 15.2962M8 10.5336C7.45266 12.3921 6.81743 14.09 6.10862 15.2962"
        stroke="var(--subColor)"
      />
    </svg>
  );
  const JPLogo = () => (
    <svg
      width="45"
      height="30"
      viewBox="0 0 45 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6C2 10.6667 3.6 20.2 2 21C4 16.5 16 -7.5 21.5 12C25.9 27.6 11.6667 23.8333 4 20"
        stroke="var(--subColor)"
      />
      <path
        d="M12 1C13.8333 9.83333 16.2 27.8 11 29"
        stroke="var(--subColor)"
      />
      <path d="M25.5 6C30.1667 3 40.4 -1.2 44 6" stroke="var(--subColor)" />
      <path
        d="M27 12.5C34 8.83333 45.9 6.5 37.5 26.5"
        stroke="var(--subColor)"
      />
    </svg>
  );
  const ENLogo = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1C6.5 7.5 4 8 2.5 15.5C3.81557 10.5 5.5 0 8 2"
        stroke="var(--subColor)"
      />
      <path d="M9.99998 2C9 28 14.6 9.9 15 1.5" stroke="var(--subColor)" />
    </svg>
  );
  const navi = useNavigate();
  return (
    <>
      <div
        className="navLogo"
        onClick={() => {
          navi('/');
        }}
      >
        {laguage === 0 ? <CHLogo /> : laguage === 1 ? <JPLogo /> : <ENLogo />}
      </div>
    </>
  );
}
export default NavLogo;
