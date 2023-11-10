import { IconBrandNodejs, IconBrandReact } from "@tabler/icons-react";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";
import Contactme from "./Contactme";
const url = "https://incredible-alfajores-bd4b95.netlify.app/";
const url1 = "https://meek-daffodil-459320.netlify.app/";
const Inicio = () => {
  return (
    <section className=" ">
      <div className="max-w-md  mx-auto  p-4 flex  items-center justify-center ">
        <img
          className="rounded-full  w-32 mt-8  shadow-lg shadow-blue-700/50 "
          src="imgs/andrea.jpg"
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="122"
          height="118"
          viewBox="0 0 122 118"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.4098 82.3961C22.4098 82.3961 22.4097 82.3962 22.5406 82.4696C22.612 82.6015 22.6121 82.6014 22.6121 82.6014L22.6194 82.5975L22.6419 82.5854L22.7304 82.5381C22.8083 82.4966 22.9232 82.4358 23.071 82.3587C23.3665 82.2043 23.7933 81.9844 24.3184 81.7224C25.3686 81.1984 26.8109 80.5066 28.3798 79.8348C29.9492 79.1627 31.6423 78.512 33.1948 78.0692C34.753 77.6247 36.1485 77.396 37.1322 77.5498L37.1786 77.2534C36.126 77.0888 34.6764 77.3346 33.1125 77.7807C31.5429 78.2284 29.8369 78.8845 28.2617 79.559C26.6859 80.2337 25.2381 80.9283 24.1845 81.454C23.6575 81.7169 23.229 81.9376 22.9321 82.0927C22.9253 82.0963 22.9185 82.0998 22.9119 82.1033C22.9569 82.0197 23.0077 81.9251 23.0634 81.8203C23.3077 81.3613 23.649 80.7058 24.0374 79.9195C24.8139 78.3474 25.78 76.2498 26.5356 74.1524C27.2892 72.0601 27.8408 69.9485 27.7722 68.3559C27.7379 67.5585 27.5475 66.8708 27.1285 66.3831C26.7048 65.8899 26.0675 65.6241 25.1923 65.6327L25.1952 65.9326C26.0049 65.9248 26.5483 66.1682 26.9009 66.5786C27.2582 66.9945 27.4396 67.6048 27.4725 68.3688C27.5383 69.8988 27.0054 71.963 26.2533 74.0507C25.5031 76.1332 24.5424 78.2196 23.7684 79.7866C23.3815 80.5698 23.0417 81.2226 22.7986 81.6794C22.677 81.9078 22.5797 82.0872 22.5128 82.2094C22.4794 82.2705 22.4536 82.3173 22.4361 82.3488L22.4163 82.3844L22.4098 82.3961ZM22.5406 82.4696L22.6121 82.6014L22.1564 82.848L22.4098 82.3961L22.5406 82.4696Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.8032 46.1121C47.9197 53.056 36.4218 62.813 29.4709 74.0641L29.7261 74.2218C36.6424 63.0266 48.0952 53.3022 60.9455 46.3762C73.7959 39.4502 88.0301 35.3302 100.5 35.3302V35.0302C87.9696 35.0302 73.6867 39.1683 60.8032 46.1121Z"
            fill="white"
          />
        </svg>

        <section className="animate-fade-in-y  p-4 ">
          <h1 className="text-white text-lx font-Source_Code_Pro text-lg ">
            Hello I'm Andrea Perez
          </h1>
        </section>
      </div>
      <section className="max-w-md  mx-auto p-4 ">
        <h2 className="text-white text-center text-2xl font-Source_Code_Pro">
          About me
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit
          eaque voluptates rem doloribus expedita, laudantium perferendis
          reiciendis voluptatibus autem odit suscipit praesentium earum
          quibusdam repudiandae tempora eum dolorum sint!
        </p>
      </section>
      <h2 className="text-white text-2xl font-Source_Code_Pro text-center mt-16 ">
        Skills
      </h2>
      <div className="flex justify-center  m-5 text-white ">
        <span className="">
          {" "}
          <IconBrandHtml5
            size={48}
            className="hover:bg-indigo-600 rounded-3xl p-1"
          />
        </span>
        <span className="">
          {" "}
          <IconBrandCss3
            size={48}
            className="hover:bg-indigo-600 rounded-3xl p-1"
          />
        </span>
        <span className="">
          {" "}
          <IconBrandJavascript
            size={48}
            className="hover:bg-indigo-600 rounded-3xl p-1"
          />
        </span>
        <span className="">
          {" "}
          <IconBrandReact
            size={48}
            className="hover:bg-indigo-600 rounded-3xl p-1"
          />
        </span>
        <span className="">
          {" "}
          <IconBrandNodejs
            size={48}
            className="hover:bg-indigo-600 rounded-3xl p-1"
          />
        </span>
      </div>
      <section>
        <p className="text-white text-2xl font-Source_Code_Pro text-center mt-16 mb-14">
          Portfolio
        </p>
        <div className=" mx-auto   grid px-3 gap-9 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] lg:w-1000px m-auto">
          <div className="max-w-[230px] mx-auto relative  rounded-md p-1   shadow-lg shadow-black  ">
            <img
              className="w-auto rounded-lg "
              src="imgs/e-commer.png"
              alt=""
            />
            <div className="  text-white p-2 rounded-lg ">
              <h1 className=" text-2xl font-semibold">E-commerce</h1>
              <p className="mt-1">
                Html Css Js..{" "}
                <Link className="hover:text-sky-700 cursor-pointer" to={url1}>
                  Ver mas
                </Link>
              </p>
            </div>
          </div>
          <div className="max-w-[230px] mx-auto   rounded-md p-1  shadow-lg shadow-black   ">
            <img
              className="w-auto  rounded-lg "
              src="imgs/pokemons.png "
              alt=""
            />
            <div className="  text-white p-1 rounded-lg ">
              <h1 className=" text-2xl font-semibold">Pokedex</h1>
              <p className="mt-1">
                React router y Redux..{" "}
                <Link className="hover:text-sky-700 cursor-pointer" to={url}>
                  Ver mas
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[230px] mx-auto relative  rounded-md p-1  shadow-lg shadow-black ">
            <img
              className="w-auto  rounded-lg  "
              src="imgs/ricky_morty.png "
              alt=""
            />
            <div className="  text-white p-1 rounded-lg ">
              <h1 className=" text-2xl font-semibold">Ricky y Morty</h1>
              <p className="mt-1">
                React inputs controlados, rederizado condicional..
                <Link className="hover:text-sky-700 cursor-pointer" to={url}>
                  Ver mas
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[230px] mx-auto relative  rounded-md p-1  shadow-lg shadow-black ">
            <img
              className="w-auto rounded-lg "
              src="imgs/clima.png "
              alt=""
            />
            <div className="  text-white p-1 rounded-lg ">
              <h1 className=" text-2xl font-semibold">Weather app</h1>
              <p className="mt-1">
                React useEffect y consumo de API..{" "}
                <Link className="hover:text-sky-700 cursor-pointer" to={url}>
                  Ver mas
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[230px] mx-auto relative  rounded-md p-1  shadow-lg shadow-black ">
            <img
              className="w-auto rounded-lg "
              src="imgs/crud.png "
              alt=""
            />
            <div className="  text-white p-1 rounded-lg ">
              <h1 className=" text-2xl font-semibold">Crud users</h1>
              <p className="mt-1">
                React CRUD’s y métodos HTTP..{" "}
                <Link className="hover:text-sky-700 cursor-pointer" to={url}>
                  Ver mas
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[230px] mx-auto relative  rounded-md p-1  shadow-lg shadow-black ">
            <img
              className="w-auto rounded-lg "
              src="imgs/cooki.png "
              alt=""
            />
            <div className="  text-white p-1 rounded-lg ">
              <h1 className=" text-2xl font-semibold">Fortune cookie</h1>
              <p className="mt-1">
                React t, props, UseState..{" "}
                <Link className="hover:text-sky-700 cursor-pointer" to={url}>
                  Ver mas
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contactme />
    </section>
  );
};

export default Inicio;
