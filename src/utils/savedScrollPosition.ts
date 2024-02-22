const useScrollPosition = () => {
  const storedValue = sessionStorage.getItem('scrollPosition');
  const savedScrollPosition =
    storedValue !== null ? parseInt(storedValue, 10) : 0;

  return { savedScrollPosition };
};

export default useScrollPosition;
