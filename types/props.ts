export type CategoryType =
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
  style: "green" | "white";
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
