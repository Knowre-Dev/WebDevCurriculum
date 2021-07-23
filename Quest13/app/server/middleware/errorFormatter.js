export const errorFormatter = err => {
  console.error('--- GraphQL Error ---');
  console.error('Path:', err.path);
  console.error('Message:', err.message);
  console.error('Code:', err.extensions.code);
  console.error('Original Error', err.originalError);
  return err;
};
