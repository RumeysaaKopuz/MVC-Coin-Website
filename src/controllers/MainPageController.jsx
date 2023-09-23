import { useEffect, useState } from 'react';
import MainPageView from '../views/MainPageView';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
axios.defaults.baseURL = 'https://api.coincap.io/v2/assets';

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [params, setParams] = useSearchParams();

  const page = params.get('page');

  useEffect(() => {
    // ilgili sayfanın verilerini çekme
    axios
      .get(`/?limit=15&offset=${page}`)
      .then((res) => setCoins([...coins, ...res.data.data]));
  }, [params]);

  useEffect(() => {
    // eğerki url'de sayfa parametresi yoksa 1 olarak ekle
    if (page != 1) {
      setParams({ page: '1' });
      return;
    }
  }, []);

  return <MainPageView coins={coins} />;
};

export default MainPageController;