export const useTestComposable = () => {
  const test = () => {
    /* eslint-disable no-console */
    console.log('[vue-composable-template] Hello World!')
    return true
  }

  return { test }
}
