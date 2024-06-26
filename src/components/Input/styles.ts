import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
    width: '100%',
    position: 'relative',
  },
  lastWrapper: {
    marginBottom: 26,
  },
  label: {
    fontSize: 14,
    marginBottom: 12,
  },
  input: {
    fontSize: 14,
    border: '1px solid #333',
    backgroundColor: '#272727',
    padding: 12,
    width: '100%',
    borderRadius: 6,
  },
});
