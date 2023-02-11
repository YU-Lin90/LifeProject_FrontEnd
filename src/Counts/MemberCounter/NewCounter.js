import { useState } from 'react';
import { useFunc } from '../../Context/FunctionProvider';
//新增計數器功能
function NewCounter({ setUpdateState }) {
  const { loginCheckGetFetch } = useFunc();
  const [counterName, setCounterName] = useState('');
  const [startValue, setStartValue] = useState(0);
  //memberCounts
  async function createNewCounter() {
    const res = await loginCheckGetFetch(
      `memberCounts/createNewRow?startValue=${startValue}&countName=${counterName}`,
      'memberAuth'
    );
    if (res.success) {
      setCounterName('');
      setStartValue(0);
      setUpdateState((v) => v + 1);
    }
    console.log(res);
  }
  return (
    <>
      <div>
        <h3>新增新計數</h3>
        <div>
          <label htmlFor="IdForNewCounterName">計數器名稱</label>
          <input
            id="IdForNewCounterName"
            value={counterName}
            onChange={(e) => {
              setCounterName(e.target.value);
            }}
            placeholder="新計數器名稱"
          />
        </div>
        <div>
          <label htmlFor="IdForNewCounterValue">起始值</label>
          <input
            id="IdForNewCounterValue"
            value={startValue}
            type="number"
            onChange={(e) => {
              setStartValue(Number(e.target.value));
            }}
          />
        </div>
        <div>
          <button onClick={createNewCounter}>新增</button>
        </div>
      </div>
    </>
  );
}
export default NewCounter;
