import ArrowRight from "../../public/ArrowRight.svg";
import { useState, useRef, useEffect } from "react";

type SidebarMenuProps = {
  items?: any[];
};

const SidebarMenu = (props: SidebarMenuProps) => {
  const { items } = props;
  const [isActive, setIsActive] = useState<number[]>([]);
  const [isSubItemActive, setSubItemIsActive] = useState<number[]>([]);
  const [leftCoOrd, setLeftCoOrd] = useState<number>(0);
  const [subItemLeftCoOrd, setSubItemLeftCoOrd] = useState<number>(0);
  const sidebarMenuContainer = useRef<HTMLDivElement>(null);
  const subItemContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarMenuContainer && sidebarMenuContainer.current) {
      setLeftCoOrd(sidebarMenuContainer.current.offsetWidth);
    }
  }, [sidebarMenuContainer]);

  useEffect(() => {
    if (subItemContainer && subItemContainer.current) {
      setSubItemLeftCoOrd(subItemContainer.current.offsetWidth);
    }
  }, [subItemContainer]);

  return (
    <div className="col-12 col-md-3 mt-4 rounded shadow-sm bg-white">
      <div className="d-flex flex-column">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <div
              className={`row cursor-pointer border-b position-relative pt-md-1 pb-md-2 ${
                isActive.includes(index) ? "bg-active" : ""
              }`}
              key={index}
              ref={sidebarMenuContainer}
              onClick={() => setIsActive([index])}
            >
              <div className="col-10 pt-2">
                <div className="row">
                  <div className="col-2">
                    <img
                      src={item.iconSrc}
                      className="d-inline-block img-fluid"
                    />
                  </div>
                  <div className="col-10">{item.name}</div>
                </div>
              </div>
              <div className="col-2 d-flex align-items-center justify-content-end">
                <img
                  src={ArrowRight.src}
                  className={`d-inline-block img-fluid`}
                />
              </div>
              {/*Medium and large screen*/}
              <div className="d-flex flex-column d-sm-flex flex-sm-column d-md-none bg-white mt-2">
                {isActive.includes(index) &&
                  Array.isArray(item.subCategories) &&
                  item.subCategories.map((subCat: any, subCatIndex: number) => (
                    <div
                      className={`row px-0 position-relative border-b d-flex d-sm-flex d-md-none`}
                      key={`${index}_${subCatIndex + 1}`}
                      onClick={() => setSubItemIsActive([subCatIndex])}
                    >
                      <div
                        className={`col-10 d-inline-block py-2 text-dark cursor-pointer`}
                      >
                        {subCat.name}
                      </div>
                      {Array.isArray(subCat.categoriesOfSubCategory) &&
                        subCat.categoriesOfSubCategory.length > 0 && (
                          <div className="col-2 d-flex align-items-center justify-content-end">
                            <img
                              src={ArrowRight.src}
                              className={`d-inline-block img-fluid`}
                            />
                          </div>
                        )}
                      <div
                        className={`px-0 d-flex flex-column bg-white shadow-sm`}
                      >
                        {isSubItemActive.includes(subCatIndex) &&
                          Array.isArray(subCat.categoriesOfSubCategory) &&
                          subCat.categoriesOfSubCategory.map(
                            (catOfSubCat: any, catOfSubCatIndex: number) => (
                              <div
                                className="d-inline-block py-2 px-4 text-dark cursor-pointer"
                                key={`${index}_${subCatIndex + 1}_${
                                  catOfSubCatIndex + 1
                                }`}
                              >
                                {catOfSubCat.name}
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  ))}
              </div>
              {/*Small and extra small screen*/}
              <div
                className="col-9 position-absolute d-none d-sm-none d-md-flex flex-md-column rounded shadow-sm z-10 bg-white"
                style={{
                  left: `${leftCoOrd}px`,
                  top: "0",
                }}
                ref={subItemContainer}
              >
                {isActive.includes(index) &&
                  Array.isArray(item.subCategories) &&
                  item.subCategories.map((subCat: any, subCatIndex: number) => (
                    <div
                      className="row position-relative border-b px-2 d-none d-sm-none d-md-flex"
                      key={`${index}_${subCatIndex + 1}`}
                      onClick={() => setSubItemIsActive([subCatIndex])}
                    >
                      <div className="col-10 d-inline-block py-2 text-dark cursor-pointer">
                        {subCat.name}
                      </div>
                      {Array.isArray(subCat.categoriesOfSubCategory) &&
                        subCat.categoriesOfSubCategory.length > 0 && (
                          <div className="col-2 d-flex align-items-center justify-content-end">
                            <img
                              src={ArrowRight.src}
                              className={`d-inline-block img-fluid`}
                            />
                          </div>
                        )}
                      <div
                        className="px-0 position-absolute d-flex flex-column rounded shadow-sm bg-white w-75"
                        style={{
                          left: `${subItemLeftCoOrd}px`,
                          top: "0",
                        }}
                      >
                        {isSubItemActive.includes(subCatIndex) &&
                          Array.isArray(subCat.categoriesOfSubCategory) &&
                          subCat.categoriesOfSubCategory.map(
                            (catOfSubCat: any, catOfSubCatIndex: number) => (
                              <div
                                className="d-none d-sm-none d-md-inline-block border-b py-2 px-4 text-dark cursor-pointer"
                                key={`${index}_${subCatIndex + 1}_${
                                  catOfSubCatIndex + 1
                                }`}
                              >
                                {catOfSubCat.name}
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
