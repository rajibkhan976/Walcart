import Logo from "../../public/Logo.svg";
import SearchBox from "./SearchBox";
import HeaderMidRight from "./HeaderMidRight";

const HeaderMid = () => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 col-md-2">
          <img src={Logo.src} className="d-inline-block img-fluid" />
        </div>
        <div className="col-12 col-md-4">
          <SearchBox />
        </div>
        <div className="col-12 col-md-6">
          <HeaderMidRight />
        </div>
      </div>
    </div>
  );
};

export default HeaderMid;
