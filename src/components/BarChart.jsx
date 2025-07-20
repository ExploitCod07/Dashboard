import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

export default function TeamWinsChart({ data }) {
  const { t } = useTranslation();
  return (
    <div className="chart-container">
      <h2>{t('barChartTitle')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="team" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="wins" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}