import Header from './components/Header';
import DiagonalDivider from './components/DiagonalDivider';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

function App() {
  return (
    <div className='font-roboto'>
      <Header />
      <DiagonalDivider>
        <FirstSection />
        <SecondSection />
      </DiagonalDivider>
      <ThirdSection />
    </div>
  );
}

export default App;