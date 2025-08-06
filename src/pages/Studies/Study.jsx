

const Study = ({ study }) => {
    const { img, title } = study;
    return (
        <div>
            <div className="card bg-base-100 dark:bg-white dark:text-black shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <div className="card-actions">
                        <button className="btn w-full bg-[#14535F] text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;