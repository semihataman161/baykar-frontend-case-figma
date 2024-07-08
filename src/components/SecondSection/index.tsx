import type { ISecondSectionItem } from '@/types/secondSection';
import { items } from '@/constants/secondSection';

const SecondSectionItem: React.FC<ISecondSectionItem> = ({
    backgroundSrc,
    backgroundLeft,
    imageSrc,
    alt,
    title,
    description
}) => {
    return (
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="relative ml-[40%] md:ml-0">
                <img
                    src={backgroundSrc}
                    alt={`${alt}Background`}
                    className={`absolute top-0 left-[${backgroundLeft}]`}
                />
                <img
                    src={imageSrc}
                    alt={alt}
                    className="relative"
                />
            </div>
            <h3 className="text-[16px] leading-[17.6px] font-medium mb-4 mt-4">{title}</h3>
            <p className="text-[18px] leading-[28.8px]">
                {description}
            </p>
        </div>
    );
};

const SecondSection: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-wrap -mx-4 text-center md:text-left">
                    {items.map((item: ISecondSectionItem, index: number) => (
                        <SecondSectionItem
                            key={index}
                            backgroundSrc={item.backgroundSrc}
                            backgroundLeft={item.backgroundLeft}
                            imageSrc={item.imageSrc}
                            alt={item.alt}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;