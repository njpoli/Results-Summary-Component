import * as React from 'react';
import { ResultsData } from '.';
import Image from 'next/image';

type SummaryProps = {
  result: ResultsData;
};

const Category = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SummaryProps
>(function Category({ result, className, ...props }, ref) {
  return (
    <div ref={ref} className={className} {...props}>
      <div className='flex justify-start space-x-3'>
        <Image
          src={result.icon}
          alt={`${result.category} icon`}
          className=''
          width={19}
          height={19}
        />
        <p className='block'>{result.category}</p>
      </div>
      <p className='flex flex-row justify-between'>
        <span className='text-neutral-dark-blue font-bold'>
          {result.score} <span className='text-gray-400'>/ 100</span>
        </span>
      </p>
    </div>
  );
});

export default Category;
