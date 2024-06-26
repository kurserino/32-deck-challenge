import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    position: 'relative',
  },
  button: {
    minWidth: {
      default: '36px',
      '@media (min-width: 768px)': 128,
    },
    padding: {
      default: '8px 8px',
      '@media (min-width: 768px)': '8px 12px',
    },
    height: 36,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountIcon: {
    width: 16,
    height: 16,
    marginRight: {
      default: 'initial',
      '@media (min-width: 768px)': 8,
    },
  },
  accountLabel: {
    display: {
      default: 'none',
      '@media (min-width: 768px)': 'inline-block',
    },
  },
  googleLabel: {},
  userWrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    borderRadius: 6,
  },
  userName: {
    fontSize: 12,
    fontWeight: 600,
    wordWrap: 'break-word',
  },
  userEmail: {
    fontSize: 12,
    color: '#bbb',
    fontWeight: 400,
    wordWrap: 'break-word',
    lineHeight: 1.2,
    marginBottom: 4,
  },
  chevronDownIcon: {
    width: 10,
    height: 10,
    marginLeft: 8,
  },
  dropdownWrapper: {
    position: 'absolute',
    width: 200,
    right: 0,
    bottom: -6,
    transform: 'translateY(100%)',
    zIndex: 1,
  },
  dropdownItem: {
    width: '100%',
    marginBottom: -1,
    fontSize: 14,
    fontWeight: 400,
    padding: '8px 14px',
    ':not(:first-child)': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    ':not(:last-child)': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  dropdownItemIconWrapper: {
    width: 15,
    display: 'flex',
    marginRight: 10,
  },
  dropdownItemIcon: {
    height: 14,
  },
});
