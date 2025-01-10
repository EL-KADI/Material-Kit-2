import { SiAmazongames } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { FaRegLaughWink } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import GamesComponent from "../Game/Game";
import { HashLink as Link } from "react-router-hash-link";
import NewsComponent from "../News/News";
import QuotesComponent from "../Quotes/Quotes";
import JokeComponent from "../Joke/Joke";
import backImage from "../../assets/images/back.jpeg";
import frontImage from "../../assets/images/front.jpeg";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('../../Imges/bg-presentation.88963029.jpeg')] bg-cover bg-center lg:bg-top w-full h-auto contain-none  ">
        <div className="flex flex-col justify-center h-80 ">
          <h1 className="text-center mt-auto  dark:text-customclr  text-white text-5xl font-bold font-serif">
            Material Kit 2 React
          </h1>
          <br />
          <p className="text-center text-xs dark:text-customclr  text-white  sm:text-xl">
            Free & Open Source Web UI Kit built over ReactJS & MUI. Join
            <br />
            over 1.6 million developers around the world.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div
        className="w-[97%]  mx-auto bg-[#ffffff] rounded-lg -translate-y-14  shadow-[0px_-5px_4px_#DCDEE3] bg-gradient-to-b from-[#e0e1e3] via-[#ffffff] to-[#ffffff]
 dark:bg-[#111827] dark:shadow-[0px_-5px_4px_#111827] dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#111827] dark:to-[#313e5a] z-20 relative"
      >
        <div className="justify-center md:flex block ">
          <div className=" pt-8 md:pt-14">
            <h3 className="text-center  font-semibold font-sans text-[#1a73e8] dark:text-[#5d96e1] text-5xl">
              70+
            </h3>
            <h3 className="mt-4 text-center text-xl text-[#344767] dark:text-white dark:font-bold">
              Coded Elements
            </h3>
            <p className="mt-2 text-center mx-auto text-sm text-[#344767b7] dark:text-white max-w-72 ">
              From buttons, to inputs, navbars, alerts or cards, you are covered
            </p>
          </div>
          <div className="border-e-2 h-[200px] hidden absolute translate-x-20 md:translate-x-44 md:block xl:translate-x-72 translate-y-1/4"></div>
          <div className="sm:mx-40 mx-0 lg:mx-64 mt-14  px-10 md:px-0 sm:p-5 md:border-e-0 md:border-s-0 sm:mt-10">
            <h3 className="text-center font-semibold font-sans text-[#1a73e8] dark:text-[#5d96e1] text-5xl">
              15+
            </h3>
            <h3 className="mt-4 text-center text-xl text-[#344767] dark:text-white dark:font-bold">
              Design Blocks
            </h3>
            <p className="mt-2 text-center mx-auto text-sm text-[#344767b7] dark:text-white max-w-72 ">
              Mix the sections, change the colors and unleash your creativity
            </p>
          </div>
          <div className="border-e-2 h-[200px] hidden absolute -translate-x-20 md:-translate-x-44 md:block xl:-translate-x-72 translate-y-1/4"></div>
          <div className="mt-14 ">
            <h3 className="text-center text-[#1a73e8] dark:text-[#5d96e1] font-semibold font-sans text-5xl">
              4
            </h3>
            <h3 className="mt-4 text-center text-xl text-[#344767] dark:text-white dark:font-bold">
              Pages
            </h3>
            <p className="mt-2 text-center mx-auto text-sm text-[#344767b7] dark:text-white max-w-72  ">
              Save 3-4 weeks of work when you use our pre-made pages for your
              website
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
      </div>
      <div
        className="w-[97%]   mx-auto bg-[#ffffff] rounded-lg -translate-y-20  
 dark:bg-[#313e5a] shadow-[0px_-5px_4px_#DCDEE3] dark:shadow-[0px_-5px_4px_#313e5a] "
      >
        <div className="d-flex justify-center  lg:ms-48 lg:justify-normal ">
          <div className="pt-8 w-96 md:pt-14 ">
            <div className="md:flex md:flex-col lg:flex-row block w-full h-full">
              <div className=" rounded-lg relative group transition-all duration-1000 hover:rotate-y-180 z-40 overflow-hidden ">
                <img
                  src={backImage}
                  alt="one"
                  className="w-full rounded-lg left-0 top-0 bottom-0 right-0 group-hover:opacity-0 transition-all duration-1000"
                />
                <img
                  src={frontImage}
                  alt="two"
                  className="w-full h-[480px] opacity-0 rounded-lg group-hover:rotate-y-180 absolute left-0 top-0 bottom-0 right-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div
                  className=" absolute z-30 left-0 top-0 bottom-0 right-0 bg-[#64B0F1] dark:bg-[#2d5c82] 
group-hover:opacity-0 opacity-85 rounded-lg transition-all duration-1000 "
                >
                  <div className="flex justify-center flex-col align-middle h-full ">
                    <h3 className="text-center text-2xl  text-[#000000] dark:text-white dark:font-extrabold font-bold">
                      Feel the Material Kit
                    </h3>
                    <p className="mt-2 text-center  mx-auto text-sm  text-[#000000] dark:text-white max-w-72">
                      From buttons, to inputs, navbars, alerts or cards, you are
                      covered
                    </p>
                  </div>
                </div>
                <div className=" absolute  z-30 left-0 top-0 bottom-0 right-0 bg-[#64B0F1] dark:bg-[#2d5c82]  group-hover:opacity-85  opacity-0 rounded-lg group-hover:rotate-y-180 transition-all duration-1000">
                  <div className="flex justify-center flex-col align-middle h-full  rounded-lg ">
                    <h3 className="text-center text-2xl  text-[#000000] dark:text-white dark:font-extrabold font-bold ">
                      Discover More
                    </h3>
                    <p className="mt-2 text-center mx-auto text-sm text-[#000000] dark:text-white max-w-72 ">
                      You will save a lot of time going from prototyping to
                      full-functional code because all elements are implemented.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2 lg:flex lg:flex-col xs:grid place-items-center mx-auto ">
                <div className="lg:ms-6 mt-8 lg:block sm:flex sm:flex-col xs:grid place-items-center mx-auto text-center justify-center">
                  <div className=" dark:bg-stone-700 bg-stone-400 text-center rounded-lg cursor-pointer py-2 px-2  mb-8 grid place-items-center hover:scale-105 transition-all duration-500 ">
                    <Link to={"#Games"}>
                      <SiAmazongames className="text-5xl text-center dark:text-zinc-900 text-neutral-700 mx-auto" />
                      <p className="w-40 text-sm dark:text-indigo-300 text-teal-950">
                        Are you ready to explore the best games? Click the
                        button below to discover the games and their amazing
                        websites!
                      </p>
                    </Link>
                  </div>

                  <div className=" dark:bg-stone-700 bg-stone-400  text-center rounded-lg cursor-pointer py-2 px-2 grid place-items-center hover:scale-105 transition-all duration-500 ">
                    <Link to={"#Quotes"}>
                      <FaLightbulb className="text-5xl pb-3 text-center text-yellow-200 dark:text-yellow-400 mx-auto" />

                      <p className="w-40 text-sm dark:text-indigo-300 text-teal-950">
                        Looking for some inspiration? Explore a collection of
                        quotes and sayings that will uplift your spirit and
                        spark your creativity!
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-2 lg:block sm:flex-col grid place-items-center  mx-auto justify-center ">
                <div className="lg:ms-6  lg:block sm:flex sm:flex-col xs:grid place-items-center mx-auto text-center justify-center">
                  <div className=" dark:bg-stone-700 bg-stone-400 text-center rounded-lg cursor-pointer py-2 px-2 lg:ms-52 mt-8 xl:ms-96 mx-auto text-5xl w-max grid place-items-center hover:scale-105 transition-all duration-500 ">
                    <Link to={"#News"}>
                      <GiNewspaper className="text-5xl text-center text-teal-700 dark:text-gray-800 pb-1 mx-auto" />

                      <p className="w-40 text-sm dark:text-indigo-300 text-teal-950">
                        Stay up-to-date with the latest headlines! Access a
                        world of news articles and updates in real-time through
                        NewsAPI, and never miss a story again!
                      </p>
                    </Link>
                  </div>

                  <div className=" dark:bg-stone-700 bg-stone-400 text-center rounded-lg cursor-pointer py-2 px-2 lg:ms-52 mt-8 lg:mt-4 xl:ms-96 mx-auto text-5xl w-max grid place-items-center hover:scale-105 transition-all duration-500 ">
                    <Link to={"#Joke"}>
                      <FaRegLaughWink className="text-5xl text-center pb-3 text-amber-300 dark:text-amber-300 mx-auto" />
                      <p className="w-40 text-sm  dark:text-indigo-300 text-teal-950">
                        In need of a good laugh? Explore a collection of
                        hilarious jokes and funny quotes powered by JokeAPI to
                        brighten your day!
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center  mx-auto align-middle mt-32">
          <div className="mx-auto text-center">
            <h2 className="dark:text-white text-[#344767] text-4xl font-bold">
              Huge collection of sections
            </h2>
            <p className="dark:text-white text-[#344767] max-w-md mt-4">
              We have created multiple options for you to put together and
              customise into pixel perfect pages.
            </p>
          </div>
        </div>
        <div className=" container-fluid mt-16">
          <div className="row">
            <GamesComponent />
            <NewsComponent />
            <QuotesComponent />
            <JokeComponent />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
