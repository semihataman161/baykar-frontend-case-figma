import { useState } from 'react';
import LeftArrowButton from '@/assets/images/fifthSection/leftArrowButton.svg';
import RightArrowButton from '@/assets/images/fifthSection/rightArrowButton.svg';
import Zoomerr from '@/assets/images/fifthSection/zoomerr.svg';
import Shells from '@/assets/images/fifthSection/shells.svg';
import ArtVenue from '@/assets/images/fifthSection/artVenue.svg';
import Waves from '@/assets/images/fifthSection/waves.svg';
import HellenJummy from '@/assets/images/fifthSection/hellenJummy.svg';
import HellenaJohn from '@/assets/images/fifthSection/hellenaJohn.svg';
import DavidOshodi from '@/assets/images/fifthSection/davidOshodi.svg';
import CharoletteHanlin from '@/assets/images/fifthSection/charoletteHanlin.svg';

interface TeamMember {
    name: string;
    title: string;
    imgSrc: string;
}

interface Company {
    logo: string;
    name: string;
    description: string;
    teamMember: TeamMember;
}

const companies: Company[] = [
    {
        logo: ArtVenue,
        name: 'ArtVenue',
        description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        teamMember: {
            name: 'David Oshodi',
            title: 'Manager',
            imgSrc: DavidOshodi,
        },
    },
    {
        logo: Zoomerr,
        name: 'Zoomerr',
        description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        teamMember: {
            name: 'Hellen Jummy',
            title: 'Team Lead',
            imgSrc: HellenJummy,
        },
    },
    {
        logo: Shells,
        name: 'SHELLS',
        description: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        teamMember: {
            name: 'Hellena John',
            title: 'Co-founder',
            imgSrc: HellenaJohn,
        },
    },
    {
        logo: ArtVenue,
        name: 'ArtVenue',
        description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        teamMember: {
            name: 'David Oshodi',
            title: 'Manager',
            imgSrc: DavidOshodi,
        },
    },
    {
        logo: Waves,
        name: 'WAVES',
        description: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
        teamMember: {
            name: 'Charolette Hanlin',
            title: 'CEO',
            imgSrc: CharoletteHanlin,
        },
    },
];

const CompanyCard = ({ company }: { company: Company }) => {
    return (
        <div className="flex flex-col justify-evenly bg-white shadow-md p-4 border border-solid border-gray-300 w-[384px] h-[430px] rounded-[20px]"
            style={{
                boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.07), 0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}>
            <div className='flex gap-[8px]'>
                <img src={company.logo} alt={company.name} />
                <h2 className="flex items-center text-[#475569] font-[24px] leading-[26.4px] font-bold">{company.name}</h2>
            </div>
            <p className="text-[#000000] text-[24px] leading-[38.4px]">{company.description}</p>
            <div className="flex items-center">
                <img src={company.teamMember.imgSrc} alt={company.teamMember.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <h3 className="text-[#000000] text-[18px] leading-[28.8px]">{company.teamMember.name}</h3>
                    <p className="text-[#475569] text-[16px] leading-[22.4px]">{company.teamMember.title}</p>
                </div>
            </div>
        </div>
    );
};


const ThirdSection = () => {
    const [startIndex, setStartIndex] = useState(1);

    const showPrevious = () => {
        setStartIndex(prevIndex => prevIndex - 1);
    };

    const showNext = () => {
        if (startIndex + 3 >= companies.length) return;
        setStartIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div className="bg-[#FEFDF5] text-[#0F172A] py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-[56px] leading-[61.6px] font-[800]">Because they love us</h1>
                    <div className='flex gap-[24px]'>
                        <button onClick={showPrevious} className={`cursor-pointer ${startIndex <= 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                            <img src={LeftArrowButton} alt="LeftArrowButton" />
                        </button>
                        <button onClick={showNext} className={`cursor-pointer ${startIndex + 3 >= companies.length ? 'opacity-50 pointer-events-none' : ''}`}>
                            <img src={RightArrowButton} alt="RightArrowButton" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-5 bg-[#FDE68A] h-[430px]">
                    {companies.slice(startIndex, startIndex + 3).map((company, index) => (
                        <div key={index} className="relative top-[30px]">
                            <CompanyCard company={company} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;