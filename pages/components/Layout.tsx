import Header from "./Header";

type LayoutProps = {
  children?: React.ReactElement;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="col-12">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
