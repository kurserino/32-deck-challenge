import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    height: 36,
    color: '#878787',
    padding: '8px 8px',
    fontWeight: 500,
    ':hover': {
      color: '#fff',
    },
  },
});
