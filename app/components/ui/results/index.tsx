import Categories from './categories';
import Summary from './summary';

export type ResultsData = {
  category: string;
  score: number;
  icon: string;
};

export async function getData(): Promise<ResultsData[]> {
  const res = await fetch(`${process.env.API_HOST}/api/results`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Results() {
  const data = await getData();
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
