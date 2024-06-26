import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid #333',
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    borderRadius: 6,
    height: 36,
    position: 'relative',
  },
  skeleton: {
    width: 42,
    height: 36,
  },
  openedSkeleton: { width: 201 },
  openedWrapper: {
    borderRadius: '0 6px 6px 0',
  },
  optionsWrapper: {
    position: 'absolute',
    display: 'inline-flex',
    borderRadius: '6px 0 0 6px',
    right: 40,
    width: 0,
    height: 36,
    overflow: 'hidden',
    backgroundColor: '#111',
  },
  openedOptionsWrapper: {
    width: 160,
    border: '1px solid #333',
  },
  iconWrapper: {
    padding: '8px 12px',
    cursor: 'pointer',
  },
  optionWrapper: {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 6px',
    height: '100%',
    marginLeft: {
      default: null,
      ':first-child': 8,
    },
  },
  option: {
    width: 12,
    height: 12,
    borderRadius: 12,
    opacity: 0.4,
    border: '1px solid #111',
  },
  optionColor: (backgroundColor) => ({
    backgroundColor,
  }),
  selectedOption: {
    opacity: 1,
    borderColor: 'transparent',
  },
});
