import { useState, useEffect } from "react";
import MenuScale from '@/assets/images/menuScale.svg';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (!isMobile && showMenu) {
                setShowMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile, showMenu]);

    return (
        <header className={`flex justify-between items-center text-[#78350F] px-[20px] py-[16px] ${isMobile && showMenu && 'pb-[200px]'} relative`}>
            <h1 className="text-[24px] leading-[28px] font-bold">
                Collers
            </h1>
            <div className="relative">
                <button className="block md:hidden" onClick={toggleMenu}>
                    <img
                        src={MenuScale}
                        alt="MenuScale"
                        className="w-[24px] h-[24px]"
                    />
                </button>
                {showMenu && (
                    <div className="flex flex-col absolute top-[30px] right-[1px] gap-[5px]">
                        <a href="#" className="px-[9px] py-[5px] border-b border-[#78350F] hover:underline">Products</a>
                        <a href="#" className="px-[9px] py-[5px] border-b border-[#78350F] hover:underline">Solutions</a>
                        <a href="#" className="px-[9px] py-[5px] border-b border-[#78350F] hover:underline">Pricing</a>
                        <a href="#" className="px-[9px] py-[5px] border-b border-[#78350F] hover:underline">Resources</a>
                        <a href="#" className="px-[9px] py-[5px] border-b border-[#78350F] hover:underline">Log In</a>
                        <a href="#" className="px-[9px] py-[5px] border-b border-[#78350F] hover:underline">Sign up</a>
                    </div>
                )}
            </div>
            {!isMobile &&
                <nav className="hidden md:flex md:gap-[16px] md:text-[16px] md:leading-[24px] md:tracking-[.5px] md:font-medium">
                    <a href="#" className="hover:underline py-[9px]">Products</a>
                    <a href="#" className="hover:underline py-[9px]">Solutions</a>
                    <a href="#" className="hover:underline py-[9px]">Pricing</a>
                    <a href="#" className="hover:underline py-[9px]">Resources</a>
                    <a href="#" className="hover:underline py-[9px]">Log In</a>
                    <button className="border-[2px] border-solid border-[#78350F] rounded-[8px] px-[25px] py-[7px]">
                        Sign up now
                    </button>
                </nav>
            }
        </header>
    );
};

export default Header;