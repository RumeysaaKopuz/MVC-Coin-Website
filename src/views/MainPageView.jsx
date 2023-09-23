import millify from 'millify';
import Loading from './Loading';
import LoadMoreController from '../controllers/LoadMoreController';
import { useNavigate } from 'react-router-dom';

const MainPageView = ({ coins }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      {!coins && <Loading />}

      {coins && (
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>coin</th>
              <th>fiyat</th>
              <th>market hacmi</th>
              <th>değişim (24s)</th>
              <th>%değişim (24s)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, i) => (
              <tr onClick={() => navigate(`/coin/${coin.id}`)}>
                <td>{i}</td>
                <td>
                  <span className="text-warning me-1 fw-bold">
                    {coin.symbol}
                  </span>
                  <span>{coin.name}</span>
                </td>
                <td>{millify(coin.priceUsd)}</td>
                <td>{millify(coin.marketCapUsd)}</td>
                <td>{millify(coin.volumeUsd24Hr)}</td>
                <td>%{millify(coin.changePercent24Hr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <LoadMoreController />
    </div>
  );
};

export default MainPageView;