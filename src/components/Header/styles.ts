import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    borderBottom: '1px solid #232323',
    marginBottom: 20,
  },
  container: {
    height: 64,
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  home: {
    paddingLeft: 0,
    fontWeight: 600,
    color: '#fff',
  },
});
