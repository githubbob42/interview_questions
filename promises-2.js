
// What's the difference

return DoA()
  .then(DoB)
  .catch(handleError);

return DoA()
  .then(DoB, handleError);
