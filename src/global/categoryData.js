import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import StatusSelector from "../components/StatusSelector";
import { Link } from "react-router-dom";

const data = [
  {
    image: (<img className='h-[50px] m-auto' src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591"/>),
    id: <div className="font-[400]">1</div>,
    name: <div className="font-[400]">Cat. Name</div>,
    productsByCat: <div className="font-[400]">email@emai.ma</div>,
    products: <div className="text-[14px] w-fit px-[5px] font-[400] rounded bg-[#0388CC] text-[#fff]">
    3
  </div>,
    lastUpdate: <div className="font-[400]">01/01/01</div>,
    view: (
      <Link to='/category-details?tab=1&id=0'><div className="bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
    folder: true,
    nodes:[
      {
        id: 1,
        name: "Cat. Name",
        productsByCat: "email@emai.ma",
        products: 3,
        lastUpdate: "01/01/01",
        view: (
          <div className="bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
            <FontAwesomeIcon icon={faEye} />
          </div>
        ),
      },
    ]
  },
  {
    image: (<img className='h-[50px] m-auto' src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591"/>),
    id: <div className="font-[400]">2</div>,
    name: <div className="font-[400]">Cat. Name</div>,
    productsByCat: <div className="font-[400]">email@emai.ma</div>,
    products: <div className="text-[14px] w-fit px-[5px] font-[400] rounded bg-[#0388CC] text-[#fff]">
    3
  </div>,
    lastUpdate: <div className="font-[400]">01/01/01</div>,
    view: (
      <Link to='/category-details?tab=1&id=0'><div className="bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
        <FontAwesomeIcon icon={faEye} />
      </div></Link>
    ),
    folder: true,
    nodes:[
      {
        id: 1,
        name: "Cat. Name",
        productsByCat: "email@emai.ma",
        products: 3,
        lastUpdate: "01/01/01",
        view: (
          <div className="bg-[#0388CC] cursor-pointer rounded w-fit px-3 py-[2px] text-[white] text-center">
            <FontAwesomeIcon icon={faEye} />
          </div>
        ),
      },
    ]
  },
];

export default data;
