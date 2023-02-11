import { useNavigate } from 'react-router-dom';
import UpdateData from './UpdateData';
function Home() {
  const navi = useNavigate();
  return (
    <>
      首頁
      <p
        className="flexSetCenter pointer marb10"
        onClick={() => {
          navi('/weather');
        }}
      >
        氣象預報
      </p>
      <p
        className="flexSetCenter pointer marb10"
        onClick={() => {
          navi('/schedule');
        }}
      >
        行程表
      </p>
      <p
        className="flexSetCenter pointer marb10"
        onClick={() => {
          navi('/counter');
        }}
      >
        計數器
      </p>
      {/* <UpdateData /> */}
    </>
  );
}
export default Home;
