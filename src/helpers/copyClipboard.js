export const handleCopy = event => {
  const target = event.target;
  target.select();
  document.execCommand("copy");
};
