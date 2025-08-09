import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="mt-16 container mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-black">OUR PARTNERS</h1>
            </div>
            <Marquee className="gap-6">
                <div className="flex gap-6">
                    <div className="card bg-base-100 w-96 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co.com/CpvLsrPH/banzi-1.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co.com/990NYH42/risalah-1.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co.com/CpvLsrPH/banzi-1.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co.com/Wvwr0xnB/one-1.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Partners;