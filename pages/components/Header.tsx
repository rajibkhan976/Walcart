import HeaderTop from "./HeaderTop";
import HeaderMid from "./HeaderMid";
import HeaderBottom from "./HeaderBottom";

const Header = (props: any) => {
  return (
    <div className="row bg-dark">
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
    </div>
  );
};

export default Header;
