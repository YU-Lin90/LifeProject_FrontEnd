import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
function IndexPage() {
  return (
    <>
      <NavigationBar />
      <div className="underNavBar">
        <Outlet />
      </div>
    </>
  );
}
export default IndexPage;
