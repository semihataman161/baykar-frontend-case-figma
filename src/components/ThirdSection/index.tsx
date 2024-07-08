import Sneakers1 from '@/assets/images/thirdSection/sneakers1.svg';
import Sneakers2 from '@/assets/images/thirdSection/sneakers2.svg';
import Sneakers3 from '@/assets/images/thirdSection/sneakers3.svg';
import ShoppingCart from '@/assets/images/thirdSection/shoppingCart.svg';
import PinkCircle from '@/assets/images/thirdSection/pinkCircle.svg';
import BlueCircle from '@/assets/images/thirdSection/blueCircle.svg';
import OrangeCircle from '@/assets/images/thirdSection/orangeCircle.svg';
import GreenCircle from '@/assets/images/thirdSection/greenCircle.svg';
import PurpleCircle from '@/assets/images/thirdSection/purpleCircle.svg';

const ThirdSection = () => {
    return (
        <div className="bg-[#0F172A] text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-7 justify-between items-center mb-10">
                    <h1 className="text-[32px] leading-[35.2px] font-bold md:text-[56px] md:leading-[61.6px] md:font-[800]">The best of the best</h1>
                    <button className="border-[2px] border-solid border-white rounded-[8px] px-[50px] md:px-[70px] py-[20px] text-[24px] leading-[24px] tracking-[.5px] font-bold">
                        Sign up now
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="relative">
                        <div className="flex-1 rounded-lg shadow-lg border-[1px] border-solid border-[#0F172A] shadow-light-xxl-1 shadow-light-xxl-2 relative z-10">
                            <img src={Sneakers1} alt="Sneakers1" className="w-full h-auto rounded-lg mb-4" />
                            <div className='p-6'>
                                <h2 className="text-[24px] leading-[26.4px] font-bold mb-2">Title</h2>
                                <p className="text-[18px] leading-[28.8px] mb-4">
                                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                </p>
                                <button className="flex items-center justify-center gap-5 w-full border-[2px] border-solid border-white rounded-[8px] p-[16px] text-[20px] leading-[24px] tracking-[.5px] font-medium">
                                    <img src={ShoppingCart} alt="ShoppingCart" />
                                    Buy now
                                </button>
                            </div>
                        </div>
                        <img
                            src={PinkCircle}
                            alt="PinkCircle"
                            className="absolute bottom-0 left-0 opacity-75 z-0"
                        />
                    </div>
                    <div className="relative">
                        <div className="flex-1 rounded-lg shadow-lg border-[1px] border-solid border-[#0F172A] shadow-light-xxl-1 shadow-light-xxl-2 relative z-10">
                            <img src={Sneakers2} alt="Sneakers2" className="w-full h-auto rounded-lg mb-4" />
                            <div className='p-6'>
                                <h2 className="text-[24px] leading-[26.4px] font-bold mb-2">Title</h2>
                                <p className="text-[18px] leading-[28.8px] mb-4">
                                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                </p>
                                <button className="flex items-center justify-center gap-5 w-full border-[2px] border-solid border-white rounded-[8px] p-[16px] text-[20px] leading-[24px] tracking-[.5px] font-medium">
                                    <img src={ShoppingCart} alt="ShoppingCart" />
                                    Buy now
                                </button>
                            </div>
                        </div>
                        <img
                            src={BlueCircle}
                            alt="BlueCircle"
                            className="absolute top-0 left-0 opacity-75 z-0"
                        />
                        <img
                            src={OrangeCircle}
                            alt="OrangeCircle"
                            className="absolute bottom-[20px] -right-[20px] opacity-75 z-0"
                        />
                    </div>
                    <div className="relative">
                        <div className="flex-1 rounded-lg shadow-lg border-[1px] border-solid border-[#0F172A] shadow-light-xxl-1 shadow-light-xxl-2 relative z-10">
                            <img src={Sneakers3} alt="Sneakers3" className="w-full h-auto rounded-lg mb-4" />
                            <div className='p-6'>
                                <h2 className="text-[24px] leading-[26.4px] font-bold mb-2">Title</h2>
                                <p className="text-[18px] leading-[28.8px] mb-4">
                                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                </p>
                                <button className="flex items-center justify-center gap-5 w-full border-[2px] border-solid border-white rounded-[8px] p-[16px] text-[20px] leading-[24px] tracking-[.5px] font-medium">
                                    <img src={ShoppingCart} alt="ShoppingCart" />
                                    Buy now
                                </button>
                            </div>
                        </div>
                        <img
                            src={GreenCircle}
                            alt="GreenCircle"
                            className="absolute top-10 -right-7 opacity-75 z-0"
                        />
                        <img
                            src={PurpleCircle}
                            alt="PurpleCircle"
                            className="absolute bottom-0 left-0 opacity-75 z-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
