import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    marginBottom: 20,
  },
  container: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
  },
  credits: {
    marginBottom: 8,
  },
  link: {
    color: '#fff',
    textDecoration: 'underline',
    fontSize: 14,
    fontWeight: 600,
    paddingLeft: 4,
  },
});
