

const Faq = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold text-black'>FAQ</h1>
            </div>
            <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-white dark:border dark:border-gray-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold dark:text-black">What is a Madrasa?</div>
                    <div className="collapse-content dark:text-[#333333] text-sm">A Madrasa is an educational institution focused primarily on teaching Islamic religious studies, including the Quran, Hadith, Fiqh (Islamic jurisprudence), and Arabic language.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-white dark:border dark:border-gray-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold dark:text-black">What subjects are taught in a Madrasa?</div>
                    <div className="collapse-content dark:text-[#333333] text-sm">Besides religious studies like Quran, Hadith, and Islamic law, many Madrasas also teach Arabic, Islamic history, and sometimes general subjects such as math, science, and languages depending on the institution.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-white dark:border dark:border-gray-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold dark:text-black">Who can attend a Madrasa?</div>
                    <div className="collapse-content text-sm dark:text-[#333333]">Generally, Madrasas are open to Muslim students of all ages who want to gain knowledge about Islam. Some Madrasas are for children, while others offer advanced studies for adults and scholars.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-white dark:border dark:border-gray-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold dark:text-black">Is Madrasa education recognized by governments or universities?</div>
                    <div className="collapse-content text-sm dark:text-[#333333]">Recognition varies by country. In some places, Madrasa education is integrated into the formal education system, while in others it remains separate. Some universities accept Madrasa qualifications for higher education in Islamic studies.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 dark:bg-white dark:border dark:border-gray-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold dark:text-black">Do Madrasas only focus on religious education?</div>
                    <div className="collapse-content text-sm dark:text-[#333333]">Traditionally, Madrasas focus on religious education, but many modern Madrasas have incorporated secular subjects to provide students with a balanced education.</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;