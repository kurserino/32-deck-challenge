import * as stylex from '@stylexjs/stylex';

const shimmer = stylex.keyframes({
  '100%': { transform: 'translateX(200%) translateY(-50%) rotate(30deg)' },
});

export const styles = stylex.create({
  wrapper: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    '::after': {
      content: '',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      height: '300%',
      transform: 'translateX(-100%) translateY(-50%) rotate(30deg)',
      background: `linear-gradient(
        90deg, rgba(255, 255, 255, 0) 0, 
        rgba(255, 255, 255, 0.2) 20%, 
        rgba(255, 255, 255, 0.5) 60%, 
        rgba(255, 255, 255, 0)
      )`,
      animationName: shimmer,
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      opacity: 0.2,
    },
  },
});
