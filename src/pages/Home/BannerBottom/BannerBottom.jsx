import { FaRegClock, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const BannerBottom = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 absolute inset-x-0 md:bottom-40">
                <div className="card bg-base-100 shadow-2xl text-[#14535F]">
                    <figure className="px-10 pt-10">
                        <span className="text-5xl"><FaRegClock /></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">26000+</h2>
                        <p>Sessions Completed</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl text-[#14535F]">
                    <figure className="px-10 pt-10">
                        <span className="text-5xl"><FaUserGraduate /></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">500+</h2>
                        <p>Registered Students</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl text-[#14535F]">
                    <figure className="px-10 pt-10">
                        <span className="text-5xl"><FaUserTie /></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">19</h2>
                        <p>Tutores Available</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl text-[#14535F]">
                    <figure className="px-10 pt-10">
                        <span className="text-5xl"><IoLogoWhatsapp /></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">0131-2345678</h2>
                        <p>We are available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;