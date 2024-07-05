import { useState } from 'react';
import BibendumTellusIcon from '@/assets/images/sixthSection/bibendumTellusIcon.svg';
import CrasEgetIcon from '@/assets/images/sixthSection/crasEgetIcon.svg';
import DolorPharetraIcon from '@/assets/images/sixthSection/dolorPharetraIcon.svg';
import AmetFringillaIcon from '@/assets/images/sixthSection/ametFringillaIcon.svg';
import AmetNibhIcon from '@/assets/images/sixthSection/ametNibhIcon.svg';
import SedVelitIcon from '@/assets/images/sixthSection/sedVelitIcon.svg';

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
        <section className="bg-[#FEFDF8] py-20 text-[#0F172A]">
            <div className="container mx-auto">
                <div className="flex justify-start mb-8">
                    <h2 className="text-[56px] leading-[61.6px] font-[800]">Grow your collection</h2>
                </div>
                <p className="text-[18px] leading-[28.8px] mb-12">
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                </p>
                <div className="flex">
                    <div className="w-64 p-8">
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
                                            alt={button.src}
                                        />
                                        <span>{button.text}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 pl-8">
                        {/* Add your images here */}
                        <img src="image1.jpg" alt="Image 1" className="w-full mb-4" />
                        <img src="image2.jpg" alt="Image 2" className="w-full mb-4" />
                        <img src="image3.jpg" alt="Image 3" className="w-full mb-4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SixthSection;