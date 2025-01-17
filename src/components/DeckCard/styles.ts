import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  cardBase: {
    position: 'relative',
    backgroundColor: '#181818',
    border: '1px solid #333',
    width: '100%',
    height: 0,
    paddingBottom: '72%',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    borderRadius: 8,
  },
  wrapper: {
    backgroundSize: 'cover',
    textAlign: 'left',
    cursor: 'pointer',
  },
  commanderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.65)',
    borderRadius: 8,
  },
  commanderDualImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '55%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.65)',
    borderRadius: 8,
    maskImage: 'linear-gradient(90deg, black 0%, black 80%, transparent 100%)',
  },
  partnerDualImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '55%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.65)',
    borderRadius: 8,
    maskImage: 'linear-gradient(90deg, transparent 0%, black 20%, black 100%)',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 18,
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  colorIdentity: {
    marginBottom: 8,
  },
  commanderName: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 6,
    textShadow: '1px 2px 6px rgb(0 0 0 / 50%)',
    letterSpacing: -0.3,
  },
  deckTheme: {
    fontSize: 18,
    textShadow: '1px 2px 6px rgb(0 0 0 / 50%)',
  },
  plusIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 35,
    height: 35,
  },
});
