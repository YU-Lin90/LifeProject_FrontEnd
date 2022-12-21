import { useNavigate } from 'react-router-dom';

function Home() {

  const navi = useNavigate();
  return (
    <>
      首頁
      <p
        className="flexSetCenter pointer"
        onClick={() => {
          navi('/weather');
        }}
      >
        氣象
      </p>
    </>
  );
}
export default Home;