import { useNavigate } from 'react-router-dom';

function Footer() {
  const navi = useNavigate();
  const GithubIcon = () => (
    <a href="https://github.com/YU-Lin90">
      <i className="pointer fa-brands fa-github"></i>
    </a>
  );
  const TwittewIcon = () => <i className="pointer fa-brands fa-twitter"></i>;
  const FbIcon = () => <i className="pointer fa-brands fa-facebook"></i>;
  const IgIcon = () => <i className="pointer fa-brands fa-instagram"></i>;
  return (
    <>
      <footer>
        <div className="disf jc-se ai-c w100p">
          <div className="w50p padH20">
            <h1>ゆう</h1>
          </div>
          <div className="w50p disf jc-fe padH20">
            <h3 className="padH20 ">
              <GithubIcon />
            </h3>
            <h3 className="padH20 ">
              <TwittewIcon />
            </h3>
            <h3 className="padH20 ">
              <FbIcon />
            </h3>
            <h3 className="padH20 ">
              <IgIcon />
            </h3>
          </div>
        </div>
        <div className="footerDivideLine"></div>
      </footer>
    </>
  );
}
export default Footer;
