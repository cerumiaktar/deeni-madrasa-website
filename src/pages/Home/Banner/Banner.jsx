

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[600px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/m5t28WGz/imge.png)",
                }}
            >
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Walk the Path of Islam Discover True Peace</h1>
                        <p className="mb-5 max-w-xl mx-auto">
                            Follow the path of Islam to find peace, purpose, and guidance through the Qur’an and the teachings of the Prophet.
                        </p>
                        <button className="btn text-base mr-4">Sign in</button>
                        <button className="btn text-base">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;