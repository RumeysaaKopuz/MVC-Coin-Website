import { useSearchParams } from 'react-router-dom';
import LoadMore from '../views/LoadMore';

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    // güncel sayfa sayısnı al
    const pageNumber = params.get('page');
    // url'deki sayfa sayısına bir ekle
    setParams({ page: +pageNumber + 1 });
  };
  return <LoadMore handleClick={handleClick} />;
};

export default LoadMoreController;