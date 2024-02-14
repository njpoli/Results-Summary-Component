import { ResultsData } from '.';
import Category from './category';
import clsx from 'clsx';

type SummaryProps = {
  resultsData: ResultsData[];
};

function Categories({ resultsData }: SummaryProps) {
  return (
    <div className='basis-1/2 flex flex-col p-6 space-y-6'>
      <p className='mt-4 font-bold text-neutral-dark-blue'>Summary</p>
      <div className='flex flex-col w-full space-y-3'>
        {resultsData.map((r) => (
          <Category
            result={r}
            key={r.category}
            className={clsx(
              'flex justify-between w-full h-12 items-center px-2 rounded-lg text-xs font-medium',
              r.category.toLowerCase() == 'reaction' &&
                'text-primary-red bg-primary-red/5',
              r.category.toLowerCase() == 'memory' &&
                'text-primary-orange bg-primary-orange/5',
              r.category.toLowerCase() == 'verbal' &&
                'text-primary-teal bg-primary-teal/5',
              r.category.toLowerCase() == 'visual' &&
                'text-primary-cobalt bg-primary-cobalt/5'
            )}
          />
        ))}
      </div>
      <button
        type='button'
        className='text-white bg-neutral-dark-blue hover:bg-gradient-to-b hover:from-background-slate-blue hover:to-background-royal-blue rounded-[25px] h-11'
      >
        Continue
      </button>
    </div>
  );
}

export default Categories;
