// Custom form errors - allows us to change the error text that displays
// by matching keys in the GraphQl error.message string to the `key` in the
// below list. This is integrated into all of the forms within the app. Simply
// add more mutationErrors to extend.

const mutationErrors = [
  {
    key: 'invalid password',
    error: 'Incorrect email or password.',
  },
  {
    key: 'not found',
    error: 'Incorrect email or password.',
  },
  {
    key: 'email address in use',
    error: 'That email is already taken',
  },
  {
    key: 'no password credentials found',
    error: 'No password found. Did you mean to login with OAuth?',
  },
  {
    key: 'awaiting email confirmation',
    error: 'Your email is not yet verified. Please check your inbox for a verification link.',
  },
  {
    key: 'permissions',
    error: 'Contact Workspace Admin to upgrade your permissions.',
  },
  {
    key: 'deployment named',
    error: 'Workspace already has a deployment with that name.',
  },
  {
    key: 'trial',
    error: 'Workspace is in trial. Enter your payment information to unlock this feature.',
  },
];

export default (error) => {
  const { message } = error;
  const err = mutationErrors.find((e) => message.toLowerCase().includes(e.key));
  if (!err) return message.replace('GraphQL error: ', '');
  return err.error;
};
