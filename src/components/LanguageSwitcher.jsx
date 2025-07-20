import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <select onChange={e => i18n.changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}