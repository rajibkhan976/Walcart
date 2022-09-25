import ImageThree from "../../public/ImageThree.svg";
import ImageFour from "../../public/ImageFour.svg";
import ImageFive from "../../public/ImageFive.svg";
import Image from "next/image";

const HomeContent = () => {
  return (
    <div className="col-12 col-md-9 mt-4 position-relative z-0">
      <div className="row">
        <div className="col-12 col-md-6">
          <Image src={ImageThree.src} width={557} height={346} priority />
        </div>
        <div className="col-12 col-md-3 d-flex flex-column">
          <div className="mt-1 mt-sm-1 mt-md-0 mx-auto">
            <Image src={ImageFour.src} width={277} height={159} priority />
          </div>
          <div className="mt-2 mt-sm-2 mt-md-4 mx-auto">
            <Image src={ImageFive.src} width={276} height={165} priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
