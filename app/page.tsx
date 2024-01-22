import Footer from './components/ui/footer';
import Results from './components/ui/results/index';

export default function Page() {
  return (
    <>
      <div
        className='flex flex-col justify-center items-center min-h-screen'
        role='main'
      >
        <Results />
        <Footer />
      </div>
    </>
  );
}
