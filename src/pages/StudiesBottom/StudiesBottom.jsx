import { SiGooglemeet } from "react-icons/si";
import { FaRegFileLines } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const StudiesBottom = () => {
    return (
        <div className="bg-[#faf4e9] py-28 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
                <div className="h-[312px] relative rounded-xl bg-cover" style={{ backgroundImage: "url(https://i.ibb.co.com/FbDMyVrW/Rectangle-1.png)" }}>
                    <div className="flex items-center gap-4 bg-white text-[#14535F] absolute inset-x-0 -bottom-10 max-w-md mx-auto rounded p-4 shadow-2xl">
                        <span className="text-4xl"><SiGooglemeet /></span>
                        <div>
                            <p>Free Class</p>
                            <h2 className="text-2xl font-medium">Book a Free Trial Class </h2>
                        </div>
                    </div>
                </div>
                <div className="h-[312px] relative rounded-xl bg-cover" style={{ backgroundImage: "url(https://i.ibb.co.com/kVCwtQ5Y/Rectangle-2.png)" }}>
                    <div className="flex items-center gap-4 bg-white text-[#14535F] absolute inset-x-0 -bottom-10 max-w-md mx-auto rounded p-4 shadow-2xl">
                        <span className="text-4xl"><FaRegFileLines /></span>
                        <div>
                            <p>Our Plans</p>
                            <h2 className="text-2xl font-medium">See Our Pricing Plans</h2>
                        </div>
                    </div>
                </div>
                <div className="h-[312px] relative rounded-xl bg-cover" style={{ backgroundImage: "url(https://i.ibb.co.com/TxK72Rx6/Rectangle-3.png)" }}>
                    <div className="flex items-center gap-4 bg-white text-[#14535F] absolute inset-x-0 -bottom-10 max-w-md mx-auto rounded p-4 shadow-2xl">
                        <span className="text-4xl"><FaUsers /></span>
                        <div>
                            <p>Refer</p>
                            <h2 className="text-2xl font-medium">Refer a Friend</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudiesBottom;