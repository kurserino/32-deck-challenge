import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  wrapper: {
    backgroundColor: '#1d1d1d',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid #333',
    position: 'fixed',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 30px)',
    maxWidth: 400,
    padding: 24,
    borderRadius: 8,
  },
  modalHeader: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 16,
  },
  title: {
    marginBottom: 6,
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
  buttonsWrapper: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
