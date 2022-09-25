type CategoryBarItemProps = {
  items: any[];
};

const CategoryBarItem = (props: CategoryBarItemProps) => {
  const { items } = props;
  return (
    <>
      {Array.isArray(items) &&
        items.map((item, index) => (
          <div
            className="d-flex w-xs-100 w-sm-100 w-md-25 cursor-pointer bg-white mx-auto mx-sm-auto rounded mt-2 mx-md-1 py-2 px-3"
            key={index}
          >
            <img src={item.iconSrc} className="d-inline-block img-fluid px-2" />
            <span className="d-flex align-items-center justify-content-center">
              {item.name}
            </span>
          </div>
        ))}
    </>
  );
};

export default CategoryBarItem;
