import { SignInForm, SignUpForm } from '../components';

type AuthProps = {
  type: 'signIn' | 'signUp';
};

export const Authentication = ({ type }: AuthProps) => {
  return <>{type === 'signIn' ? <SignInForm /> : <SignUpForm />}</>;
};
