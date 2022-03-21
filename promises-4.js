
var promise = DoA()
.then(() => {
  return DoB();
});

promise.then(DoC).finally(() => DoD());

return promise;
