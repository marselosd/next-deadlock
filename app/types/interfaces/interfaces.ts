import { LinkProps } from "next/link";

export interface TxtProps {
    children: string;
    className?: string;
}

export interface LogoProps {
    children?: string;
    src: string;
    alt: string;
    className: string;
}

export interface ImageCommonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface ButtonCommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  route?: string;
}

export interface LinkCommonProps extends LinkProps {
    href: string;
    content: string;
    target?: string;
    className?: string;
}

export interface UseApiResult<T> {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
}

export interface CharacterFromAPI {
  id: number;
  name: string;
  description: {
    lore: string;
  };
  images: {
    icon_hero_card: string;
    selection_image: string;
  };
}

export interface IconAndButtonProps {
  img: ImageCommonProps;
  btn: ButtonCommonProps;
}

export interface ImageGaleria {
    titulo: string;
    src: string;
    alt: string;
}

export interface CardCommon {
  children: React.ReactNode;
}