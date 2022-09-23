const HeaderTopLeft = () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      <a
        className="link-light"
        href="/about"
        style={{ textDecoration: "none" }}
      >
        About Us
        <span className="px-3">|</span>
      </a>
      <a
        className="link-light"
        href="/about"
        style={{ textDecoration: "none" }}
      >
        My Account
        <span className="px-3">|</span>
      </a>
      <a
        className="link-light"
        href="/about"
        style={{ textDecoration: "none" }}
      >
        Featured Products
        <span className="px-3">|</span>
      </a>
      <a
        className="link-light"
        href="/about"
        style={{ textDecoration: "none" }}
      >
        Contact
      </a>
    </div>
  );
};

export default HeaderTopLeft;
