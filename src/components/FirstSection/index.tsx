import Sneakers1 from '@/assets/images/sneakers1.svg';
import WatchDemo from '@/assets/images/watchDemo.svg';

const FirstSection = () => {
    return (
        <section className="p-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col gap-5 w-full md:w-1/2 mb-10 md:mb-0">
                        <div>
                            <h1 className="text-[72px] leading-[79.2px] font-[800] mb-4">
                                Collectible Sneakers
                            </h1>
                        </div>
                        <div>
                            <p className="text-[18px] leading-[28.8px] mb-4">
                                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
                                amet.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-4">
                                <button className="border-2 border-solid border-[#78350F] text-[#78350F] rounded-lg px-[29px] py-3 text-[20px] leading-[24px] tracking-[.5px] font-medium">
                                    Sign up now
                                </button>
                                <button className="flex items-center gap-2 text-[#78350F] text-[16px] leading-[24px] tracking-[.5px] font-medium px-4 py-2">
                                    <img
                                        src={WatchDemo}
                                        alt="WatchDemo"
                                    />
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src={Sneakers1}
                            alt="sneakers1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;