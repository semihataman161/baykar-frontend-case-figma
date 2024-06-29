import Header from './components/Header';
import DiagonalDivider from '@/components/DiagonalDivider';
import FirstSection from '@/components/FirstSection';
import SecondSection from '@/components/SecondSection';

function App() {
  return (
    <div className='font-roboto'>
      <Header />
      <DiagonalDivider>
        <FirstSection />
        <SecondSection />
      </DiagonalDivider>
    </div>
  )
}

export default App;