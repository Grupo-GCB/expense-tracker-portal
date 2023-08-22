export const useRegisterTransaction = () => {
  const getMaxDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  return {
    actions: {
      getMaxDate,
    },
  };
};
