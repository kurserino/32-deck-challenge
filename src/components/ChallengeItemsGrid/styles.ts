import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: 20,
    marginBottom: 20,
  },
});
