import * as React from 'react';
import { Button } from 'antd';
import { useState } from 'react';

const flag = {
  ru: require('./ru.svg'),
  en: require('./us.svg'),
};

const language = {
  ru: 'English',
  en: 'Русский',
};

export const LocalizationButton = () => {

  const [locale, setLocale] = useState<string>('ru');

  function toggleLocale() {
    setLocale(locale === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      style={{
        width: '30px', height: '30px', border: '0px', padding: '0px', backgroundColor: 'transparent',
      }}
      onClick={toggleLocale}
    >
      <img style={{ width: '30px', height: '30px' }} alt={language[locale]} src={flag[locale]} />
    </Button>
  )
};
