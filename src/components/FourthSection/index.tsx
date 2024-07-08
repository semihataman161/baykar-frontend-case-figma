import ImageWrapper from '../ImageWrapper';
import MaratonRunners from '@/assets/images/fourthSection/maratonRunners.svg';
import CheckIcon from '@/assets/images/fourthSection/checkIcon.svg';
import RectangleFDE68A from '@/assets/images/fourthSection/rectangleFDE68A.svg';
import Rectangle0369A1 from '@/assets/images/fourthSection/rectangle0369A1.svg';
import RectangleB45309 from '@/assets/images/fourthSection/rectangleB45309.svg';
import Rectangle15803D from '@/assets/images/fourthSection/rectangle15803D.svg';
import RectangleBE185D from '@/assets/images/fourthSection/rectangleBE185D.svg';
import RectangleA21CAF from '@/assets/images/fourthSection/rectangleA21CAF.svg';

const FourthSection = () => {
    return (
        <section className="bg-[#FEFDF5] py-[160px] px-[80px] md:px-16">
            <div
                className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-[30px] p-[80px] relative"
                style={{ boxShadow: "0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A" }}
            >
                <div className="text-center md:text-left">
                    <h1 className="font-[800] text-[56px] leading-[61.6px] mb-[24px]">Why join us</h1>
                    <ul className="mb-[8px] text-[20px] leading-[36px]">
                        <li className="flex items-center mb-2">
                            <img src={CheckIcon} alt="CheckIcon" className="w-6 h-6 mr-3" />
                            Est et in pharetra magna adipiscing ornare aliquam.
                        </li>
                        <li className="flex items-center mb-2">
                            <img src={CheckIcon} alt="CheckIcon" className="w-6 h-6 mr-3" />
                            Tellus arcu sed consequat ac velit ut eu blandit.
                        </li>
                        <li className="flex items-center mb-2">
                            <img src={CheckIcon} alt="CheckIcon" className="w-6 h-6 mr-3" />
                            Ullamcorper ornare in et egestas dolor orci.
                        </li>
                    </ul>
                    <button className="mt-[24px] border-[2px] border-solid border-[#78350F] text-[#78350F] rounded-[8px] px-[25px] py-[12px] text-[20px] font-medium leading-[24px]">
                        Sign up now
                    </button>
                </div>
                <ImageWrapper src={MaratonRunners} alt="MaratonRunners" width="520px" height="350px" mdWidth="520px" mdHeight="350px"/>
                <img
                    src={RectangleFDE68A}
                    alt="RectangleFDE68A"
                    className="absolute -top-[50px] right-[40px]"
                />
                <img
                    src={Rectangle0369A1}
                    alt="Rectangle0369A1"
                    className="absolute -top-[15px] right-[105px]"
                />
                <img
                    src={RectangleB45309}
                    alt="RectangleB45309"
                    className="absolute top-[105px] right-[530px]"
                />
                <img
                    src={Rectangle15803D}
                    alt="Rectangle15803D"
                    className="absolute bottom-[45px] right-[443px] z-50"
                />
                <img
                    src={RectangleBE185D}
                    alt="RectangleBE185D"
                    className="absolute -bottom-[35px] -right-[35px]"
                />
                <img
                    src={RectangleA21CAF}
                    alt="RectangleA21CAF"
                    className="absolute bottom-[35px] right-[145px]"
                />
            </div>
        </section >
    );
};

export default FourthSection;