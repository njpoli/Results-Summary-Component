import Summary from './summary';

type ResultsData = {
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
    <div className='flex flex-col shadow-2xl shadow-[--colors-neutral-pale-blue] sm:flex-row w-full max-w-xl rounded-[25px] min-h-[430px]'>
      <Summary average={average} />
    </div>
  );
}

export default Results;
