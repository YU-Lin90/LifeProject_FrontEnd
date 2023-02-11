import { useState } from 'react';
import { useFunc } from '../../Context/FunctionProvider';
import NewCounter from './NewCounter';
function MemberCounter() {
  const { loginCheckGetFetch } = useFunc();
  const [updateState, setUpdateState] = useState(0);
  return (
    <>
      <div>
        <h2>會員計數器</h2>
        <NewCounter setUpdateState={setUpdateState} />
      </div>
    </>
  );
}
export default MemberCounter;
