import { useContext } from 'react';
import ResultContext from '../contexts/resultContext';
// import ResultContext from '../contexts/resultContext';

export default function useResultModal() {
  const context = useContext(ResultContext);

  if (!context) {
    throw new Error('useResultModal must be used within a ResultContextProvider');
  }

  const { success, error, confirm } = context;

  return { success, error, confirm };
}