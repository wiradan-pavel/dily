export type ProductCategoryType =
  | "PersonalItems"
  | "PhonesAndAccessories"
  | "Electronics"
  | "HouseholdAppliances"
  | "HomeAndGarden"
  | "ProductsForChildren"
  | "Animals"
  | "HobbiesAndRecreation"
  | "Transport"
  | "AutomotiveProducts"
  | "RealEstate"
  | "Job"
  | "Services"
  | "ForBusiness";

export type StoreRateType = 0 | 1 | 2 | 3 | 4 | 5;

export type BgColorStoreType =
  | "white"
  | "grey"
  | "orange"
  | "green"
  | "yellow"
  | "red"
  | "blue"
  | "turquoise";

export type TextColorStoreType = "white" | "black" | "orange";

export type StyleBtnType = "green" | "white";

export interface IImg {
  url: string;
  alt: string;
}

export interface IItem {
  id: number;
  category: string;
  createdAt: number;
  title: string;
  img: IImg;
  link: string;
  price: number;
  discountPrice?: number;
  location: string;
  seller: {
    name: string;
    img: IImg;
  };
  isFromDily: boolean;
}

export interface IButtonProps {
  children?: React.ReactNode;
  text: string;
  style: StyleBtnType;
  paddingX: string;
  paddingY: string;
  borderRadius: 10 | 18;
  isShadow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ISectionGoodsProps {
  title: string;
  isHaveLogo?: boolean;
  titleIsGreen?: boolean;
  linkAll: {
    text: string;
    href: string;
  };
  list: IItem[];
}

export interface IItemStore {
  id: number;
  img: IImg;
  name: string;
  subscribers: number;
  rate: number;
  location: string;
  styles: {
    bgColor: string;
    textColor: string;
    styleBtns: string;
  };
}

export interface IItemSellUsSection {
  id: number;
  text: string;
  img: IImg;
}
