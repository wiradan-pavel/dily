import {
  SocialFacebookSvg,
  SocialInstagramSvg,
  SocialVKSvg,
} from "@/components/svgs";

import styles from "./style.module.scss";

const SocialList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <a href="#">
          <SocialFacebookSvg />
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="#">
          <SocialInstagramSvg />
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="#">
          <SocialVKSvg />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
