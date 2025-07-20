import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

export default function SeasonChart({ data }) {
  const { t } = useTranslation();
  return (
    <div className="chart-container">
      <h2>{t('lineChartTitle')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis reversed={true} />
          <Tooltip />
          <Line type="monotone" dataKey="position" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}