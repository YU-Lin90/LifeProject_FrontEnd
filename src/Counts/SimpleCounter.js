import { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);
  //記數函式
  function changeCount(count) {
    setCount((v) => v + count);
  }
  //讀取
  function loadCount() {
    const savedCount = Number(localStorage.getItem('localCount'));
    if (!!savedCount) {
      setCount(savedCount);
    }
  }
  //儲存
  function saveCount() {
    if (count !== 0) {
      localStorage.setItem('localCount', count);
    }
  }
  //刪除
  function deleteCount() {
    localStorage.removeItem('localCount');
  }
  return (
    <>
      <div>
        <h2 className="flexSetCenter marb10">簡易計數器</h2>
        <div className="flexSetCenter marb10">
          <p
            className="marr5"
            onClick={() => {
              changeCount(-1);
            }}
          >
            -
          </p>
          <p className="marr5">{count}</p>
          <p
            onClick={() => {
              changeCount(1);
            }}
          >
            +
          </p>
        </div>
        <div className="flexSetCenter marb10">
          <button
            className="marr5"
            onClick={() => {
              saveCount();
            }}
          >
            記數儲存
          </button>
          <button
            className="marr5"
            onClick={() => {
              loadCount();
            }}
          >
            記數讀取
          </button>
          <button
            onClick={() => {
              deleteCount();
            }}
          >
            刪除紀錄
          </button>
        </div>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          歸零
        </button>
      </div>
    </>
  );
}
export default SimpleCounter;
