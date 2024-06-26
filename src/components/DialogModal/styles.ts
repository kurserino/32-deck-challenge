import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    backgroundColor: '#1d1d1d',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    border: '1px solid #333',
    position: 'fixed',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 30px)',
    maxWidth: 400,
    borderRadius: 8,
  },
  formHeader: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },

  closeButton: {
    border: '1px solid #333',
    backgroundColor: '#191919',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    cursor: 'pointer',
    borderRadius: 6,
  },
  closeButtonIcon: {
    width: 10,
    height: 10,
  },
  formWrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 24,
    width: '100%',
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
  },
  text: {
    marginBottom: 20,
  },
  actionsWrapper: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    gap: '0 10px',
  },
});
