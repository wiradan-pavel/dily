import { ArrowDownSvg, LocationSvg } from '../../svgs';
import dataLocations from '@/public/data/locations/locations.json';

import styles from './style.module.scss';

const Location = () => {
  return (
    <button className={styles.btn}>
      <LocationSvg />
      {dataLocations.list[0]}
      <ArrowDownSvg />
    </button>
  );
};

export default Location;
