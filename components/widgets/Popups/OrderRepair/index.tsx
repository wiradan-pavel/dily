import { useForm, SubmitHandler } from "react-hook-form";
import { CloseBtn } from "../../../shared/index";

import data from "@/public/data/popups/order_repair.json";

import styles from "./style.module.scss";

type Inputs = {
  name: string;
  typeDevice: string;
  phoneNumber: number;
  brandModel?: string;
  description: string;
  isAgree: boolean;
};

const OrderRepair = ({
  handleClosePopupOrderRepair,
  handleOpenPopupRequestSend,
}: {
  handleClosePopupOrderRepair: () => void;
  handleOpenPopupRequestSend: () => void;
}) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleClosePopupOrderRepair();
    handleOpenPopupRequestSend();
    console.log(data);
  };

  return (
    <div className="popup-wrapper">
      <div className={styles.popup}>
        <CloseBtn onClick={handleClosePopupOrderRepair} />
        <h3 className={styles.popup__title}>{data.title}</h3>
        <form className={styles.popup__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.popup__form__labels}>
            <label className={styles.popup__form__labels__label}>
              {data.form.name}
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder={data.form.name_placeholder}
              />
            </label>
            <label className={styles.popup__form__labels__label}>
              {data.form.type_of_device}
              <input
                type="text"
                {...register("typeDevice", { required: true })}
                placeholder={data.form.type_of_device_placeholder}
              />
            </label>
            <label className={styles.popup__form__labels__label}>
              {data.form.phone}
              <input
                type="tel"
                {...register("phoneNumber", { required: true })}
                placeholder={data.form.phone_placeholder}
              />
            </label>
            <label className={styles.popup__form__labels__label}>
              {data.form.brand_and_model}
              <input
                type="text"
                {...register("brandModel")}
                placeholder={data.form.brand_and_model_placeholder}
              />
            </label>
          </div>
          <label className={styles.popup__form__desc}>
            {data.form.description}
            <textarea
              placeholder={data.form.description_placeholder}
              {...register("description", { required: true })}
            />
          </label>
          <div className={styles.popup__form__send}>
            <label className={styles.popup__form__send__checkbox}>
              <input
                type="checkbox"
                {...register("isAgree", { required: true })}
              />
              {data.form.agree}
            </label>
            <input
              className={styles.popup__form__send__btn}
              type="submit"
              value={data.form.btn_text}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderRepair;
