import Nav from '../components/Nav';

type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
