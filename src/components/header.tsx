import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import podbang from "../images/podbang.png";
import { Logo } from "../pages/logo";
import { useMe } from "../hooks/useMe";
import { Link } from "react-router-dom";
import routes from "../routes";

export const Header: React.FC = () => {
  const { data } = useMe();
  return (
    <header className="py-2 px-1 border-b border-gray-200">
      <div className="w-full mx-auto flex justify-between items-center">
        <Logo logoFile={podbang} option={"w-40 cursor-pointer"} />
        <div className="flex justify-center items-center">
          <Link to={routes.profile}>
            <div className="mr-5 border border-sky-400 py-1.5 px-4 text-sm text-sky-500 rounded-3xl cursor-pointer">
              {data?.me.name ? `${data.me.name} 님` : "로그인"}
            </div>
          </Link>

          <FontAwesomeIcon
            icon={faSearch}
            className="text-2xl mr-5 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl mr-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-start lg:relative lg:-top-10 lg:-mb-7">
        <div className="flex justify-between items-center mx-3">
          <div className="mr-8 hover:font-bold text-gray-700 cursor-pointer text-lg font-medium">
            홈
          </div>
          <div className="mr-8 hover:font-bold text-gray-700 cursor-pointer text-lg font-medium">
            순위
          </div>
          <div className="mr-8 hover:font-bold text-gray-700 cursor-pointer text-lg font-medium">
            매거진
          </div>
          <div className="mr-8 hover:font-bold text-gray-700 cursor-pointer text-lg font-medium">
            오디오북
          </div>
          <div className="mr-8 hover:font-bold text-gray-700 cursor-pointer text-lg font-medium">
            뮤직팟
          </div>
          <div className="mr-8 hover:font-bold text-gray-700 cursor-pointer text-lg font-medium">
            카테고리
          </div>
        </div>
      </div>
    </header>
  );
};
