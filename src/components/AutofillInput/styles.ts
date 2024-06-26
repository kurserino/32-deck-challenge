import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    width: '100%',
    position: 'relative',
  },
  optionsWrapper: {
    position: 'absolute',
    border: '1px solid #333',
    backgroundColor: '#272727',
    zIndex: 1,
    textAlign: 'left',
    width: '100%',
    cursor: 'pointer',
    userSelect: 'none',
    marginTop: -14,
    maxHeight: 176,
    overflowY: 'auto',
  },
  option: {
    height: 35,
    width: '100%',
    padding: 10,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    borderBottom: '1px solid #333',
  },
  optionCursor: {
    backgroundColor: '#333',
  },
  lastOption: {
    borderBottom: 'none',
  },
});
