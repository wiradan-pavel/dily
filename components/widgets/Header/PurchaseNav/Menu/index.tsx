import Link from "next/link";
import {
  AppleSvg,
  AudioSvg,
  CameraSvg,
  DrillSvg,
  LaptopSvg,
  LoudspeakerSvg,
  MonitorSvg,
  MonoblockSvg,
  PhoneSvg,
  PrinterSvg,
  RefrigeratorSvg,
  TabletSvg,
} from "@/components/svgs/index";

import data from "@/public/data/nav/menu/purchase_menu.json";

import styles from "./style.module.scss";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {data.menu.map((item) => (
          <li key={item.id} className={styles.nav__list__item}>
            <Link href={item.href}>
              {item.id === 1 && <AppleSvg />}
              {item.id === 2 && <LoudspeakerSvg />}
              {item.id === 3 && <DrillSvg />}
              {item.id === 4 && <PhoneSvg />}
              {item.id === 5 && <PrinterSvg />}
              {item.id === 6 && <CameraSvg />}
              {item.id === 7 && <RefrigeratorSvg />}
              {item.id === 8 && <AudioSvg />}
              {item.id === 9 && <MonitorSvg />}
              {item.id === 10 && <MonoblockSvg />}
              {item.id === 11 && <LaptopSvg />}
              {item.id === 12 && <TabletSvg />}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
