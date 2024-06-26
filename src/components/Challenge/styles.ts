import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {},
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    marginRight: 12,
  },
  leftContent: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
  },
  shareButton: {
    height: 36,
  },
  hidden: {
    display: 'none',
  },
});
