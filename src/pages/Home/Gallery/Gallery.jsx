

const Gallery = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="text-black mb-6 text-center">
                <h1 className="text-2xl font-bold">OUR GALLERY</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/1G9KMYvn/1.png"
                            alt="Shoes" />
                    </figure>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/Bp7M2Vr/2.png"
                            alt="Shoes" />
                    </figure>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/XkKVQ0GF/3.png"
                            alt="Shoes" />
                    </figure>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/JFCJXhXs/4.png"
                            alt="Shoes" />
                    </figure>
                </div>
            </div>
            <div className="mt-6 text-center">
                <button className="btn border border-[#724B01] text-[#724B01] dark:bg-white">See all Gallery</button>
            </div>
        </div>
    );
};

export default Gallery;