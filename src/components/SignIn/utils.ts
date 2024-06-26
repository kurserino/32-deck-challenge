export const formatName = (displayName: string | undefined | null) => {
  return displayName ? displayName.split('(')[0] : 'Anonymous';
};
