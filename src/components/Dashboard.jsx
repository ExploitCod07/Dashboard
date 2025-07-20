
import { useEffect, useState } from 'react';
import SeasonChart from './LineChart';
import TeamWinsChart from './BarChart';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import IntroDescription from './IntroDescription';

export default function Dashboard() {
  const { t } = useTranslation();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <header>
        <h1>{t('title')}</h1>
        <LanguageSwitcher />
      </header>
      <main>
        <IntroDescription />
        <SeasonChart data={data.seasonResults} />
        <TeamWinsChart data={data.winsByTeam} />
      </main>
    </div>
  );
}
