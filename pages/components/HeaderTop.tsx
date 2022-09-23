import HeaderTopLeft from "./HeaderTopLeft";
import HeaderTopRight from "./HeaderTopRight";

const HeaderTop = (props: any) => {
  return (
    <div className="col-12 py-4">
      <div className="row">
        <div className="col-12 col-md-6">
          <HeaderTopLeft />
        </div>
        <div className="col-12 col-md-6 mt-2 mt-sm-0">
          <HeaderTopRight />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
