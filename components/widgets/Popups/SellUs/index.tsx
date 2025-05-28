import { SubmitHandler, useForm } from "react-hook-form";
import { CloseBtn } from "../../../shared/index";
import { ArrowDownSvg, PhotoVideoSvg } from "@/components/svgs";

import data from "@/public/data/popups/sell_us.json";
import locations from "@/public/data/locations/locations.json";

import styles from "./style.module.scss";

type StateInput =
  | "Не выбрано"
  | "Отличное"
  | "Хорошее"
  | "Плохое"
  | "Очень плохое";

type Inputs = {
  product_name: string;
  state: StateInput;
  price?: number;
  description: string;
  phoneNumber: number;
  email?: string;
  city: string;
  photo_video?: File;
  isAgree: boolean;
};

const SellUs = ({
  handleClosePopupSellUs,
  handleOpenPopupRequestSend,
}: {
  handleClosePopupSellUs: () => void;
  handleOpenPopupRequestSend: () => void;
}) => {
  const acceptFileFormats = ".jpg, .jpeg, .png, .mp4";
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleClosePopupSellUs();
    handleOpenPopupRequestSend();
    console.log(data);
  };

  return (
    <div className="popup-wrapper">
      <div className={styles.popup}>
        <CloseBtn onClick={handleClosePopupSellUs} />
        <h3 className={styles.popup__title}>{data.title}</h3>
        <form className={styles.popup__form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.popup__form__name}>
            {data.form.product_name.title}
            <input
              type="text"
              {...register("product_name", { required: true })}
              placeholder={data.form.product_name.placeholder}
            />
          </label>
          <div className={styles.popup__form__state}>
            <label className={styles.popup__form__state__label}>
              {data.form.state.title}
              <select
                defaultValue={data.form.state.select[0].id}
                {...register("state")}
              >
                {data.form.state.select.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
              <ArrowDownSvg />
            </label>
            <label className={styles.popup__form__state__price}>
              {data.form.price.title}
              <input
                type="number"
                {...register("price")}
                placeholder={data.form.price.placeholder}
              />
              <span>{data.form.price.sign}</span>
            </label>
          </div>
          <label className={styles.popup__form__description}>
            {data.form.description.title}
            <input
              type="text"
              {...register("description", { required: true })}
              placeholder={data.form.description.placeholder}
            />
          </label>
          <div className={styles.popup__form__contacts}>
            <label className={styles.popup__form__contacts__phone}>
              {data.form.phone.title}
              <input
                type="tel"
                {...register("phoneNumber", { required: true })}
                placeholder={data.form.phone.placeholder}
              />
            </label>
            <label className={styles.popup__form__contacts__email}>
              {data.form.email.title}
              <input
                type="email"
                {...register("email")}
                placeholder={data.form.email.placeholder}
              />
            </label>
          </div>
          <label className={styles.popup__form__city}>
            {data.form.city.title}
            <select
              defaultValue="Не выбрано"
              {...register("city", { required: true })}
            >
              <option value="Не выбрано">Не выбрано</option>
              {locations.list.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ArrowDownSvg />
          </label>
          <label className={styles.popup__form__file}>
            {data.form.photo_video.title}
            <div>
              <PhotoVideoSvg />
              <input
                type="file"
                {...register("photo_video")}
                multiple
                accept={acceptFileFormats}
              />
              <p>
                {data.form.photo_video.text}{" "}
                <span>{data.form.photo_video.text_link}</span>
              </p>
            </div>
          </label>
          <div className={styles.popup__form__send}>
            <label className={styles.popup__form__send__agree}>
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

export default SellUs;
