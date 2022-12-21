import LaguageChoose from './LaguageChoose';
import LoginButton from './LoginButton';
import NavLogo from './NavLogo';
function NavigationBar() {
  return (
    <>
      <nav className="navBar">
        <NavLogo />
        <LaguageChoose />
        <LoginButton />
      </nav>
    </>
  );
}
export default NavigationBar;
