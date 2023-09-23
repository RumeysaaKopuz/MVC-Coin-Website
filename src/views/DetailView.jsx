import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';

const DetailView = ({ model }) => {
  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-lg-3 g-3">
        {model.infoFields.map((info) => (
          <div className="col bg-white text-black rounded shadow-lg">
            <div className="p-3 text-center">
              <span className="fs-4">{info.icon}</span>
              <h3 className="my-3">{info.label}</h3>
              <p>{info.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5 w-100">
        <Line data={model.chartData} />
        <Bar data={model.chartData} />
      </div>
    </div>
  );
};

export default DetailView;