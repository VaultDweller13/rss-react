import { ReactElement, Ref } from 'react';
import { UseFormRegister } from 'react-hook-form';

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

type Inputs = {
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: string;
  image: FileList;
};

type SelectProps = {
  register: UseFormRegister<Inputs>;
};

type LabeledInputProps = {
  name: string;
  id: string;
  label: string;
  type: 'checkbox' | 'radio';
  value?: string;
  register: UseFormRegister<Inputs>;
  validate?: (value: string) => boolean | string;
  forwardedRef?: Ref<HTMLInputElement>;
};

type CardButtonsProps = {
  platform: string;
};

type HeaderProps = {
  currentPage: string;
};

export type {
  CardProps,
  FormState,
  SelectProps,
  LabeledInputProps,
  CardButtonsProps,
  HeaderProps,
  Inputs,
};
