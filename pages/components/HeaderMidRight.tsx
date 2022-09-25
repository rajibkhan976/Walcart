import UserIcon from "../../public/UserIcon.svg";
import FavoriteIcon from "../../public/FavoriteIcon.svg";
import CartIcon from "../../public/CartIcon.svg";
import { useState } from "react";
import { connect } from "react-redux";

const HeaderMidRight = ({ counter }: any) => {
  console.log(counter);
  const [favoriteCount, setFavoriteCount] = useState<number>(2);
  const [cartCount, setCartCount] = useState<number>(3);

  return (
    <div className="row">
      <div className="col-4 d-flex justify-content-center">
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <img src={UserIcon.src} className="d-inline-block img-fluid" />
          </div>
          <div className="col-8 d-flex flex-column justify-content-start text-white">
            <span className="">Sign In</span>
            <span className="">Account</span>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center">
        <div
          className="d-inline-block"
          style={{ position: "relative", zIndex: "0" }}
        >
          <img src={FavoriteIcon.src} className="d-inline-block img-fluid" />
          <span className="bg-danger rounded-circle d-flex justify-content-center align-items-center badge custom-badge">
            {favoriteCount}
          </span>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center">
        <div
          className="d-inline-block"
          style={{ position: "relative", zIndex: "0" }}
        >
          <img src={CartIcon.src} className="d-inline-block img-fluid" />
          <span className="bg-danger rounded-circle d-flex justify-content-center align-items-center badge custom-badge">
            {counter}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  counter: state.counter.value,
});

export default connect(mapStateToProps, null)(HeaderMidRight);
