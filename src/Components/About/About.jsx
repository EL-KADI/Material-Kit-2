import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
export default function About() {
  return (
    <>
     <Navbar />
      <div className=" container  dark:bg-[#111827] h-screen  dark:shadow-[0px_-5px_4px_#111827] dark:bg-gradient-to-b dark:from-[#1b263d] dark:via-[#111827] dark:to-[#313e5a]">
        <div className="row   h-screen">
          <div className="col-12 col-lg-4  mt-28 lg:mt-0 col-xl-4 flex-col justify-center d-flex align-items-center align-content-center ">
            <h2 className="text-5xl text-cyan-700 dark:text-sky-400">5,234</h2>
            <h2 className="text-xl my-4 text-cyan-950  dark:text-sky-600">
              Projects
            </h2>
            <p className="text-slate-600  dark:text-slate-400 text-center">
              Of “high-performing” level are led by a certified project manager
            </p>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 flex-col my-12  justify-center d-flex align-items-center align-content-center ">
            <h2 className="text-5xl text-cyan-700 dark:text-sky-400">3,400+</h2>
            <h2 className="text-xl my-4 text-cyan-950  dark:text-sky-600">
              Hours
            </h2>
            <p className="text-slate-600  dark:text-slate-400 text-center">
              That meets quality standards required by our users
            </p>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 flex-col  justify-center d-flex align-items-center align-content-center ">
            <h2 className="text-5xl text-cyan-700 dark:text-sky-400">24/7</h2>
            <h2 className="text-xl my-4 text-cyan-950  dark:text-sky-600">
              Support
            </h2>
            <p className="text-slate-600  dark:text-slate-400 text-center">
              Actively engage team members that finishes on time
            </p>
            
          </div>
        </div>

      </div>
      <div className=" container  dark:bg-[#313e5a]">
        <div className="rom">
          <div className="lg:hidden">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
