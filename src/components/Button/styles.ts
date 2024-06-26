import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid #333',
    fontSize: 14,
    fontWeight: 600,
    padding: '8px 12px',
    cursor: 'pointer',
    color: '#fff',
    borderRadius: 6,
    height: 40,
  },
  primary: {
    backgroundColor: '#fff',
    border: '1px solid #fff',
    color: '#333',
  },
  secondary: {
    backgroundColor: 'transparent',
    border: '1px solid #333',
  },
  outline: {
    backgroundColor: '#111',
    border: '1px solid #333',
  },
  destructive: {
    backgroundColor: '#7f1d1d',
    border: '1px solid #7f1d1d',
  },
  ghost: {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
  },
});
