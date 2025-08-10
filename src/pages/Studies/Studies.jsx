import { useEffect, useState } from "react";
import Study from "./Study";
import Marquee from "react-fast-marquee";

const Studies = () => {
    const [studies, setStudies] = useState([])

    useEffect(() => {
        fetch('studies.json')
            .then(res => res.json())
            .then(data => setStudies(data))
    }, [])
    return (
        <div className="mt-20" style={{ backgroundImage: "url(https://i.ibb.co.com/HfKXWQKW/Imge.png)", }}>
            <div className="container mx-auto py-16">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-white">ISLAMIC STUDIES</h1>
                    <p className="text-white">Check the benefits of Deeni Madrasa’s Quran classroom plan.</p>
                </div>
                <Marquee>
                    <div className="grid grid-cols-5 md:grid-cols-5 gap-9">
                        {
                            studies.map((study, idx) => <Study study={study}></Study>)
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Studies;