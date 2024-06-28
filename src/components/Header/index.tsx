const Header = () => {
    return (
        <header className="flex justify-between items-center text-[#78350F] px-[80px] py-[24px]">
            <h1 className="text-[32px] leading-[35.2px] font-bold">
                Collers
            </h1>
            <nav className="flex gap-[16px] text-[16px] leading-[24px] font-medium">
                <a href="#" className="hover:underline py-[9px]">Products</a>
                <a href="#" className="hover:underline py-[9px]">Solutions</a>
                <a href="#" className="hover:underline py-[9px]">Pricing</a>
                <a href="#" className="hover:underline py-[9px]">Resources</a>
                <a href="#" className="hover:underline py-[9px]">Log In</a>
                <button className="border-[2px] border-solid border-[#78350F] rounded-[8px] px-[25px] py-[7px]">
                    Sign up now
                </button>
            </nav>
        </header>
    );
};

export default Header;  