import Dropdown from "./Dropdown";
import MenuBarIcon from "../../public/MenuBarIcon.svg";
import CaretIcon from "../../public/CaretIcon.svg";
import LargeArrowDown from "../../public/LargeArrowDown.svg";
import DiscountIcon from "../../public/DiscountIcon.svg";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-2 d-flex align-items-end">
        <Dropdown
          items={["Top Categories"]}
          imgSrc={MenuBarIcon.src}
          iconSrc={CaretIcon.src}
          isActive
        />
      </div>
      <div className="col-12 col-md-2 mt-2 mt-md-0 d-flex align-items-center">
        <Dropdown items={["Exclusive Deals"]} iconSrc={LargeArrowDown.src} />
      </div>
      <div className="col-12 col-md-2 mt-2 mt-md-0 d-flex align-items-center">
        <Dropdown items={["Smart Watches"]} iconSrc={LargeArrowDown.src} />
      </div>
      <div className="col-12 col-md-2 mt-2 mt-md-0 d-flex align-items-center">
        <a
          className="link-light"
          href="/about"
          style={{ textDecoration: "none" }}
        >
          Cell Phone
        </a>
      </div>
      <div className="col-12 col-md-2 mt-2 mt-md-0 d-flex align-items-center">
        <a
          className="link-light"
          href="/about"
          style={{ textDecoration: "none" }}
        >
          Head Phone
        </a>
      </div>
      <div className="col-12 col-md-2 mt-2 mt-md-0">
        <Dropdown
          items={["Super Discount"]}
          imgSrc={DiscountIcon.src}
          iconSrc={LargeArrowDown.src}
          helpTxt={"Only this weekend"}
          isSpecial
        />
      </div>
    </div>
  );
};

export default Navbar;
