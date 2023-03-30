import { ReactElement, RefObject } from 'react';

type CardProps = {
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: 'digital' | 'physical';
  img: string;
  price: string;
  score: number | null;
};

type FormState = {
  cards: ReactElement[];
  validation: Record<string, string>;
};

type SelectProps = {
  forwardedRef: React.RefObject<HTMLSelectElement>;
};

type LabeledInputProps = {
  name: string;
  id: string;
  label: string;
  type: 'checkbox' | 'radio';
  value?: string;
  forwardedRef: RefObject<HTMLInputElement>;
};

type CardButtonsProps = {
  platform: string;
};

type HeaderProps = {
  currentPage: string;
};

export type { CardProps, FormState, SelectProps, LabeledInputProps, CardButtonsProps, HeaderProps };
