'use client';
import { useState } from 'react';
import { Button } from '@/components/shared';
import { DotOnMap, GreenDotOnMap, SearchSvg } from '@/components/svgs';

import data from '@/public/data/locations/locations.json';

import styles from './style.module.scss';

const LocationPopup = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeBtn, setActiveBtn] = useState<0 | 1>(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const saveLocation = () => {
    // закрыть попап
    // убрать оверфлоу
    // записать локацию в локал сторедж
    // что, если такого горада не найдет
    // что, если будет пустое значение
  };

  return (
    <div className="popup-wrapper">
      <div className={styles.popup}>
        <div className={styles.popup__actions}>
          <div className={styles.popup__actions__btns}>
            <Button
              text="Местоположение"
              onClick={() => setActiveBtn(0)}
              style={activeBtn === 0 ? 'green' : 'white'}
              paddingX="30px"
              paddingY=""
              borderRadius={10}
              isShadow={activeBtn !== 0}
            >
              {activeBtn === 0 ? <DotOnMap /> : <GreenDotOnMap />}
            </Button>
            <Button
              text="Поиск по карте"
              onClick={() => setActiveBtn(1)}
              style={activeBtn === 1 ? 'green' : 'white'}
              paddingX="52px"
              paddingY=""
              borderRadius={10}
              isShadow={activeBtn !== 1}
            />
          </div>
          <div className={styles.popup__actions__search}>
            <input
              className={styles.popup__actions__search__input}
              type="text"
              placeholder="Москва"
              value={inputValue}
              onChange={handleInput}
            />
            <SearchSvg />
            <Button
              text="Сохранить"
              onClick={saveLocation}
              style="green"
              paddingX="62px"
              paddingY=""
              borderRadius={10}
            />
          </div>
          <p className={styles.popup__actions__p}>
            Введите город поиска или выберите из списка ниже
          </p>
        </div>
        {activeBtn === 0 ? (
          <ul className={styles.popup__list}>
            {data.list.map((item, index) => (
              <li className={styles.popup__list__item} key={index}>
                <button
                  onClick={() => setInputValue(item)}
                  className={styles.popup__list__item__btn}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.popup__map}>There will be a map</div>
        )}
      </div>
    </div>
  );
};

export default LocationPopup;
