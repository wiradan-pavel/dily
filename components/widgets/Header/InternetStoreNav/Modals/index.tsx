import Link from "next/link";
import { Button } from "@/components/shared";
import { TriangleWhiteSvg } from "@/components/svgs";

import data from "@/public/data/nav/modals/index.json";

import styles from "./style.module.scss";

export const CompareModal = () => {
  return (
    <div className={`${styles.modal} ${styles.modal__compare}`}>
      <div className={styles.modal__triangle}>
        <TriangleWhiteSvg />
      </div>
      <p className={styles.modal__empty}>
        {data.internet_store_modal_compare.empty_text}
      </p>
      <div className={styles.modal__btn}>
        <Link href={data.internet_store_modal_compare.btn_to_catalog.href}>
          <Button
            text={data.internet_store_modal_compare.btn_to_catalog.text}
            style="green"
            paddingX=""
            paddingY="12px"
            borderRadius={10}
          />
        </Link>
      </div>
    </div>
  );
};

export const LikedModal = () => {
  return (
    <div className={`${styles.modal} ${styles.modal__liked}`}>
      <div className={styles.modal__triangle}>
        <TriangleWhiteSvg />
      </div>
      <p className={styles.modal__empty}>
        {data.internet_store_modal_liked.empty_text}
      </p>
      <div className={styles.modal__btn}>
        <Link href={data.internet_store_modal_liked.btn_to_catalog.href}>
          <Button
            text={data.internet_store_modal_liked.btn_to_catalog.text}
            style="green"
            paddingX=""
            paddingY="12px"
            borderRadius={10}
          />
        </Link>
      </div>
    </div>
  );
};

export const CartModal = () => {
  return (
    <div className={`${styles.modal} ${styles.modal__cart}`}>
      <div className={styles.modal__triangle}>
        <TriangleWhiteSvg />
      </div>
      <p className={styles.modal__empty}>
        {data.internet_store_modal_cart.empty_text}
      </p>
      <div className={styles.modal__btn}>
        <Link href={data.internet_store_modal_cart.btn_to_catalog.href}>
          <Button
            text={data.internet_store_modal_cart.btn_to_catalog.text}
            style="green"
            paddingX=""
            paddingY="12px"
            borderRadius={10}
          />
        </Link>
      </div>
    </div>
  );
};
