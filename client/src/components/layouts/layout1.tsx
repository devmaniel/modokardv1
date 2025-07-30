import Navbar from "../comp-588";

interface Layout1Props {
  children: React.ReactNode;
}

const Layout1 = ({ children }: Layout1Props) => {
  return (
    <>
      <Navbar />
      {children}
      {/* Footer */}
    </>
  );
};

export default Layout1