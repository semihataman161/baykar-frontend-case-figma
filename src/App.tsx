import Header from './components/Header';
import DiagonalDivider from './components/DiagonalDivider';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-roboto'>
      <Header />
      <DiagonalDivider>
        <FirstSection />
        <SecondSection />
      </DiagonalDivider>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}

export default App;