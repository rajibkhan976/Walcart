import BasketIcon from "../../public/BasketIcon.svg";
import DressIcon from "../../public/DressIcon.svg";
import EAIcon from "../../public/EAIcon.svg";
import FastFoodColoredIcon from "../../public/FastFoodColoredIcon.svg";
import LaptopColoredIcon from "../../public/LaptopColoredIcon.svg";
import ProfileIcon from "../../public/ProfileIcon.svg";
import SnacksIcon from "../../public/SnacksIcon.svg";
import CategoryBarItem from "./CategoryBarItem";

const categories = [
  {
    name: "Laptop and Desktop",
    iconSrc: EAIcon.src,
  },
  {
    name: "Home Living",
    iconSrc: ProfileIcon.src,
  },
  {
    name: "Book and Stationary",
    iconSrc: DressIcon.src,
  },
  {
    name: "Home Appliances",
    iconSrc: SnacksIcon.src,
  },
  {
    name: "Book and Stationary",
    iconSrc: ProfileIcon.src,
  },
  {
    name: "Electronics Appliances",
    iconSrc: BasketIcon.src,
  },
  {
    name: "Fast Food and Snacks",
    iconSrc: LaptopColoredIcon.src,
  },
  {
    name: "More Categories",
    iconSrc: FastFoodColoredIcon.src,
  },
];

const HomeCategoryBar = () => {
  return (
    <>
      <div className="col-12 mt-2 mt-sm-2 mt-md-5">
        <h5 className="">Popular Product Categories</h5>
        <div
          className="col-12 col-md-10 d-flex flex-nowrap flex-sm-nowrap flex-md-wrap flex-column flex-sm-column flex-md-row py-4"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <CategoryBarItem items={categories} />
        </div>
      </div>
    </>
  );
};

export default HomeCategoryBar;
