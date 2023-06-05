import { Header, SignInForm, SignUpForm } from '../components';

type AuthProps = {
  type: 'signIn' | 'signUp';
};

export const Authentication = ({ type }: AuthProps) => {
  return (
    <>
      <Header currentPage={type === 'signIn' ? 'Sign in' : 'Sign up'} />
      {type === 'signIn' ? <SignInForm /> : <SignUpForm />}
    </>
  );
};
