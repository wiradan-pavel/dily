import Link from "next/link";
import {
  SockSvg,
  PhoneAndHeadphonesSvg,
  MonitorSvg,
  RefrigeratorSvg,
  HouseSvg,
  DuckSvg,
  CatSvg,
  SkateSvg,
  CarSvg,
  WheelSvg,
  EstateSvg,
  TieSvg,
  HammerSvg,
  BagSvg,
  HandSvg,
} from "@/components/svgs/index";

import data from "@/public/data/nav/bulletin_menu.json";

import styles from "./style.module.scss";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {data.menu.map((item) => (
          <li key={item.id} className={styles.nav__list__item}>
            <Link href={item.href}>
              {item.id === 1 && <SockSvg />}
              {item.id === 2 && <PhoneAndHeadphonesSvg />}
              {item.id === 3 && <MonitorSvg />}
              {item.id === 4 && <RefrigeratorSvg />}
              {item.id === 5 && <HouseSvg />}
              {item.id === 6 && <DuckSvg />}
              {item.id === 7 && <CatSvg />}
              {item.id === 8 && <SkateSvg />}
              {item.id === 9 && <CarSvg />}
              {item.id === 10 && <WheelSvg />}
              {item.id === 11 && <EstateSvg />}
              {item.id === 12 && <TieSvg />}
              {item.id === 13 && <HammerSvg />}
              {item.id === 14 && <BagSvg />}
              {item.id === 15 && <HandSvg />}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
