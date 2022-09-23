import ArrowDown from "../../public/ArrowDown.svg";
import { useState, useRef } from "react";

type DropDownProps = {
  items?: string[];
  imgSrc?: string;
  iconSrc?: string;
  isActive?: boolean;
  isSpecial?: boolean;
  helpTxt?: string;
};

const Dropdown = (props: DropDownProps) => {
  const {
    items = [],
    imgSrc = "",
    iconSrc = "",
    isActive = false,
    isSpecial = false,
    helpTxt = "",
  } = props;

  const [selectedItem, setSelectedItem] = useState<string>(items[0]);
  const [showItems, setShowItems] = useState<boolean>(false);
  const dropdownContainer = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`d-inline-block ${
        isActive ? "bg-danger py-2 px-3 rounded-top" : ""
      }`}
      style={{ position: "relative" }}
    >
      <div className="d-flex" ref={dropdownContainer}>
        {imgSrc && (
          <img
            src={imgSrc}
            className="d-inline-block img-fluid"
            style={{ cursor: "pointer" }}
          />
        )}
        <div className="d-flex flex-column">
          {helpTxt && (
            <span
              className="d-inline-block text-white-50 ps-2"
              style={{ fontSize: "0.8rem" }}
            >
              {helpTxt}
            </span>
          )}
          <span
            className={`d-inline-block px-2 ${
              isSpecial ? "text-danger" : "text-white"
            }`}
          >
            {selectedItem}
          </span>
        </div>
        <img
          src={iconSrc ? iconSrc : ArrowDown.src}
          className="d-inline-block img-fluid px-1"
          style={{ cursor: "pointer" }}
          onClick={() => setShowItems(!showItems)}
        />
      </div>
      <div
        className={`d-flex flex-column bg-dark ${
          isActive ? "mt-2 px-4" : isSpecial ? "px-4" : ""
        }`}
        style={{
          position: "absolute",
          zIndex: "10",
          left: "0",
          fontSize: "0.99rem",
        }}
      >
        {items &&
          Array.isArray(items) &&
          showItems &&
          items.map((item, index) => (
            <span
              key={index}
              className="d-inline-block py-2 px-4 text-white"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedItem(item), setShowItems(false);
              }}
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
