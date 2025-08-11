

const Footer = () => {
    return (
        <div className="mt-20" style={{ backgroundImage: "url(https://i.ibb.co.com/3yBQ3P9P/footer-top-bg.jpg)", }}>
            <footer className="footer sm:footer-horizontal text-base-content pt-30 pb-20 container mx-auto">
                <aside>
                    <h2 className="text-2xl text-[#724B01] font-bold">About Deeni Madrasa</h2>
                    <p className=" dark:text-[#333333] ">
                        AThe Holy Quran is the greatest book in the world and is the source of all kinds of knowledge. <br /> As a Muslim, it is obligatory for everyone to learn the Qur’an. Deeni Madrasa has made the <br /> journey of learning the Qur’an easier, ensuring Tarbiyah and Akhlaq alongside pure knowledge.
                    </p>
                </aside>
                <nav>
                    <h6 className="text-2xl font-bold text-[#724B01]">Useful Links</h6>
                    <a className="link link-hover dark:text-[#333333]">Home</a>
                    <a className="link link-hover dark:text-[#333333]">FAQ’s</a>
                    <a className="link link-hover dark:text-[#333333]">Refund Policy</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-bold text-[#724B01]">Contact</h6>
                    <a className="link link-hover dark:text-[#333333]">Address: Dhaka,Bangladesh</a>
                    <a className="link link-hover dark:text-[#333333]">Phone: ++8801312345678</a>
                    <a className="link link-hover dark:text-[#333333]">Email: info@madrasa.com</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-bold text-[#724B01]">Support</h6>
                    <a className="link link-hover dark:text-[#333333]">Terms and Condition</a>
                    <a className="link link-hover dark:text-[#333333]">Privacy policy</a>
                    <a className="link link-hover dark:text-[#333333]">Help Line</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;