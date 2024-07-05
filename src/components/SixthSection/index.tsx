import { useState } from 'react';
import BibendumTellusIcon from '@/assets/images/sixthSection/bibendumTellusIcon.svg';
import CrasEgetIcon from '@/assets/images/sixthSection/crasEgetIcon.svg';
import DolorPharetraIcon from '@/assets/images/sixthSection/dolorPharetraIcon.svg';
import AmetFringillaIcon from '@/assets/images/sixthSection/ametFringillaIcon.svg';
import AmetNibhIcon from '@/assets/images/sixthSection/ametNibhIcon.svg';
import SedVelitIcon from '@/assets/images/sixthSection/sedVelitIcon.svg';
import RightArrow from '@/assets/images/sixthSection/rightArrow.svg';
import FirstSneaker from '@/assets/images/sixthSection/firstSneaker.svg';
import SecondSneaker from '@/assets/images/sixthSection/secondSneaker.svg';
import ThirdSneaker from '@/assets/images/sixthSection/thirdSneaker.svg';
import Wave1 from '@/assets/images/sixthSection/wave1.svg';
import Wave2 from '@/assets/images/sixthSection/wave2.svg';
import Wave3 from '@/assets/images/sixthSection/wave3.svg';
import ImageWrapper from '../ImageWrapper';

const SixthSection = () => {
    const [selectedButton, setSelectedButton] = useState<string>("btn1");

    const buttons = [
        { id: 'btn1', text: 'Bibendum tellus', src: BibendumTellusIcon },
        { id: 'btn2', text: 'Cras eget', src: CrasEgetIcon },
        { id: 'btn3', text: 'Dolor pharetra', src: DolorPharetraIcon },
        { id: 'btn4', text: 'Amet, fringilla', src: AmetFringillaIcon },
        { id: 'btn5', text: 'Amet nibh', src: AmetNibhIcon },
        { id: 'btn6', text: 'Sed velit', src: SedVelitIcon },
    ];

    const handleClick = (id: string) => {
        setSelectedButton(id);
    };

    return (
        <section className="relative bg-[#FEFDF8] pb-[128px] pt-[80px] px-[80px] gap-80 text-[#0F172A]">
            <div className="container mx-auto relative z-10">
                <div className="flex justify-start mb-8">
                    <h2 className="text-[56px] leading-[61.6px] font-[800]">Grow your collection</h2>
                </div>
                <p className="text-[18px] leading-[28.8px] mb-12">
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                </p>
                <div className="flex">
                    <div className="p-8">
                        <ul className="space-y-4">
                            {buttons.map((button) => (
                                <li key={button.id}>
                                    <button
                                        onClick={() => handleClick(button.id)}
                                        className={`flex items-center space-x-2 text-left w-full p-4 rounded-[8px] ${selectedButton === button.id ? 'bg-white text-[#0F172A]' : ''}`}
                                        style={selectedButton === button.id ? {
                                            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
                                        } : {}}
                                    >
                                        <img
                                            src={button.src}
                                            alt={button.text}
                                        />
                                        <span className='font-medium font-[20px] leading-[24px] tracking-[.5px]'>{button.text}</span>
                                        {selectedButton === button.id &&
                                            <img
                                                src={RightArrow}
                                                alt={RightArrow}
                                            />
                                        }
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 pl-8 relative">
                        <ImageWrapper src={FirstSneaker} alt="FirstSneaker" width="759px" height="451px" />
                        <div className='absolute top-[100px] left-[125px]'>
                            <ImageWrapper src={SecondSneaker} alt="SecondSneaker" width="759px" height="451px" />
                        </div>
                        <div className='absolute z-50 top-[165px] right-[265px]'>
                            <img
                                src={ThirdSneaker}
                                alt="ThirdSneaker"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <img src={Wave1} alt="Wave1" className="w-full absolute bottom-0" />
                <img src={Wave2} alt="Wave2" className="w-full absolute bottom-0" />
                <img src={Wave3} alt="Wave3" className="w-full absolute bottom-0" />
            </div>
        </section>
    );
};

export default SixthSection;