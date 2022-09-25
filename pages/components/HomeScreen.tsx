import SidebarMenu from "./SidebarMenu";
import LaptopIcon from "../../public/LaptopIcon.svg";
import HomeLivingIcon from "../../public/HomeLivingIcon.svg";
import StationaryIcon from "../../public/StationaryIcon.svg";
import HomeApplianceIcon from "../../public/HomeApplianceIcon.svg";
import KitchenApplianceIcon from "../../public/KitchenApplianceIcon.svg";
import ElectronicApplianceIcon from "../../public/ElectronicApplianceIcon.svg";
import FastFoodIcon from "../../public/FastFoodIcon.svg";
import MoreIcon from "../../public/MoreIcon.svg";
import HomeContent from "./HomeContent";
import HomeCategoryBar from "./HomeCategoryBar";

const categories = [
  {
    name: "Laptop and Desktop",
    iconSrc: LaptopIcon.src,
    subCategories: [],
  },
  {
    name: "Home Living",
    iconSrc: HomeLivingIcon.src,
    subCategories: [],
  },
  {
    name: "Book and Stationary",
    iconSrc: StationaryIcon.src,
    subCategories: [
      {
        name: "Laptop and Desktop",
        categoriesOfSubCategory: [],
      },
      {
        name: "Home Living",
        categoriesOfSubCategory: [],
      },
      {
        name: "Book and Stationary",
        categoriesOfSubCategory: [
          {
            name: "Laptop and Desktop",
          },
          {
            name: "Home Living",
          },
          {
            name: "Book and Stationary",
          },
          {
            name: "Home Appliances",
          },
        ],
      },
      {
        name: "Home Appliances",
        categoriesOfSubCategory: [],
      },
      {
        name: "Book and Stationary",
        categoriesOfSubCategory: [],
      },
      {
        name: "Electronics Appliances",
        categoriesOfSubCategory: [],
      },
      {
        name: "Fast Food and Snacks",
        categoriesOfSubCategory: [],
      },
      {
        name: "More Categories",
        categoriesOfSubCategory: [],
      },
    ],
  },
  {
    name: "Home Appliances",
    iconSrc: HomeApplianceIcon.src,
    subCategories: [],
  },
  {
    name: "Book and Stationary",
    iconSrc: KitchenApplianceIcon.src,
    subCategories: [],
  },
  {
    name: "Electronics Appliances",
    iconSrc: ElectronicApplianceIcon.src,
    subCategories: [],
  },
  {
    name: "Fast Food and Snacks",
    iconSrc: FastFoodIcon.src,
    subCategories: [],
  },
  {
    name: "More Categories",
    iconSrc: MoreIcon.src,
    subCategories: [],
  },
];

const HomeScreen = () => {
  return (
    <div className="row px-2">
      <SidebarMenu items={categories} />
      <HomeContent />
      <HomeCategoryBar />
    </div>
  );
};

export default HomeScreen;
