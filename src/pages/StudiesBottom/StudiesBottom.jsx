import { SiGooglemeet } from "react-icons/si";

const StudiesBottom = () => {
    return (
        <div className="bg-[#faf4e9] container mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-[312px] relative rounded-xl" style={{ backgroundImage: "url(https://i.ibb.co.com/FbDMyVrW/Rectangle-1.png)", }}>
                    <div className="flex items-center gap-4 bg-white text-[#14535F] absolute inset-x-0 -bottom-10 max-w-md mx-auto rounded p-4 shadow-2xl">
                        <span className="text-4xl"><SiGooglemeet /></span>
                        <div>
                            <p>Free Class</p>
                            <h2 className="text-2xl font-medium">Book a Free Trial Class </h2>
                        </div>
                    </div>
                </div>
                <div className="h-[312px] relative rounded-xl" style={{ backgroundImage: "url(https://i.ibb.co.com/FbDMyVrW/Rectangle-1.png)", }}>
                    <div className="flex items-center gap-4 bg-white text-[#14535F] absolute inset-x-0 -bottom-10 max-w-md mx-auto rounded p-4 shadow-2xl">
                        <span className="text-4xl"><SiGooglemeet /></span>
                        <div>
                            <p>Free Class</p>
                            <h2 className="text-2xl font-medium">Book a Free Trial Class </h2>
                        </div>
                    </div>
                </div>
                <div className="h-[312px] relative rounded-xl" style={{ backgroundImage: "url(https://i.ibb.co.com/FbDMyVrW/Rectangle-1.png)", }}>
                    <div className="flex items-center gap-4 bg-white text-[#14535F] absolute inset-x-0 -bottom-10 max-w-md mx-auto rounded p-4 shadow-2xl">
                        <span className="text-4xl"><SiGooglemeet /></span>
                        <div>
                            <p>Free Class</p>
                            <h2 className="text-2xl font-medium">Book a Free Trial Class </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudiesBottom;