export const fromPorcentageToPixels = (porcentage: number) => {
  const currentContinueWatchingPixels = 120;
  return (currentContinueWatchingPixels / 100) * porcentage;
};
