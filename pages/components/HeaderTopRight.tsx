import Dropdown from "./Dropdown";

const HeaderTopRight = () => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-start justify-content-sm-center">
      <div className="d-inline-block">
        <a
          className="link-light"
          href="/about"
          style={{ textDecoration: "none" }}
        >
          Order Tracking
        </a>
      </div>
      <div className="d-inline-flex ms-0 ms-sm-5">
        <Dropdown items={["English", "Bangla"]} />
      </div>
      <div className="d-inline-block ms-0 ms-sm-5">
        <Dropdown items={["USD", "BDT"]} />
      </div>
    </div>
  );
};

export default HeaderTopRight;
