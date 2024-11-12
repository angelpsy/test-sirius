export const useFakeFetch = () => {
  const isFatalFakeError = ref(true);
  const {
    error: fakeError,
    status: fakeStatus,
    refresh: _fakeRefresh,
  } = useFetch("https://jsonplaceholde1.typicode1.com/todos/1");

  const fakeRefresh = () => {
    isFatalFakeError.value = false;
    clearError();
    _fakeRefresh();
  };

  if (fakeStatus.value === "error" && isFatalFakeError.value) {
    // Show error message with refresh option
    showError({
      statusCode: fakeError.value?.statusCode || 500,
      statusMessage: fakeError.value?.message || "An error occurred",
      data: {
        refreshData: fakeRefresh,
      },
    });
  }

  return {
    isFatalFakeError,
    fakeError,
    fakeStatus,
    fakeRefresh,
  };
};