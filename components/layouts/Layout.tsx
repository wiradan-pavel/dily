import { Header, LocationPopup } from '../widgets';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <LocationPopup />
      {/* footer */}
    </>
  );
};

export default Layout;
