import DiagonalDivider from '@/components/DiagonalDivider';
import FirstSection from '@/components/FirstSection';
import SecondSection from '@/components/SecondSection';

const FirstPage = () => {
    return (
        <div className='font-roboto'>
            <DiagonalDivider>
                <FirstSection />
                <SecondSection />
            </DiagonalDivider>
        </div>
    )
}

export default FirstPage;