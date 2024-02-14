'use client';
import { useQuery } from '@tanstack/react-query';
import Categories from './categories';
import Summary from './summary';
import { getResultsData } from '@/app/utils/getResultsData';

export type ResultsData = {
  category: string;
  score: number;
  icon: string;
};

function Results() {
  const queryKey = ['results', 'all'];
  const { status, data } = useQuery({
    queryKey,
    queryFn: () => getResultsData(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  if (status !== 'success') {
    return <div>Loading...</div>;
  }

  const sum = data.reduce((prev, curr) => curr.score + prev, 0);
  const average = Math.round(sum / data.length);

  return (
    <div className='flex flex-col shadow-full shadow-neutral-pale-blue sm:flex-row w-full max-w-xl rounded-b-[25px] sm:rounded-[25px] min-h-[400px]'>
      <Summary average={average} />
      <Categories resultsData={data} />
    </div>
  );
}

export default Results;
