type SummaryProps = {
  average: number;
};

function Summary({ average }: SummaryProps) {
  return (
    <div className='flex flex-col bg-gradient-to-b from-gradient-violet-blue/90 to-gradient-persian-blue rounded-b-[25px] sm:rounded-[25px] text-white basis-1/2 items-center space-y-6 p-6'>
      <p className='text-white/60 font-semibold mt-4'>Your Result</p>
      <div className='flex flex-col items-center rounded-full bg-gradient-to-b from-gradient-persian-blue to-gradient-violet-blue w-32 h-32 shrink-0 justify-center'>
        <p className='text-5xl font-semibold'>{average}</p>
        <p className='text-xs text-white/40'>of 100</p>
      </div>
      <div className='flex flex-col sm:space-y-2 text-center sm:h-1/3 justify-between'>
        <p className='text-xl font-semibold'>Great</p>
        <p className='text-white/60 text-[14px] px-5'>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Summary;
