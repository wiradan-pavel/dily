import { Header } from '../widgets';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* footer */}
    </>
  );
};

export default Layout;
