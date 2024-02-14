import { ResultsData } from '../components/ui/results';

export async function getResultsData(): Promise<ResultsData[]> {
  const res = await fetch(`/api/results`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
