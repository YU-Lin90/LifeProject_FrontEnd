import { useAuth } from '../Context/AuthProvider';
import SimpleCounter from './SimpleCounter';
import MemberCounter from './MemberCounter';
function Counts() {
  const { auth } = useAuth();
  return (
    <>
      <SimpleCounter />
      {/* 有登入才有會員用計數器 */}
      {auth ? <MemberCounter /> : null}
    </>
  );
}
export default Counts;
