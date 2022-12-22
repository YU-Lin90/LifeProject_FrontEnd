import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
function IndexPage() {
  return (
    <>
      <NavigationBar />
      <div className="underNavBar">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default IndexPage;
