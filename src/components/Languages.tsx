import React from 'react';
import { Language } from '../types';

type LanguagesProps = {
  languages: Language[];
};

const Languages = ({ languages }: LanguagesProps) => {
  return (
    <div>
      {languages.map((lang, idx) => {
        return (
          <span key={idx} className='badge'>
            {lang.name}
          </span>
        );
      })}
    </div>
  );
};

export default Languages;