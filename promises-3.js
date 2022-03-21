
function builder(action) {
  const steps = [];

  // these all return a promise...
  function DoA() { ... }
  function DoB() { ... }
  function DoC() { ... }
  function DoD() { ... }
  function DoE() { ... }

  switch(action) {
    case 'new': 
      steps.push(DoA);
      steps.push(DoB);
      steps.push(DoC);
      break;

    case 'copy': 
      steps.push(DoA);
      steps.push(DoC);
      break;

    case 'convertQuoteToJob': 
      steps.push(DoA);
      steps.push(DoC);
      steps.push(DoD);
      steps.push(DoE);
      break;
  }

  // ensure steps are run in order (synchronously)
  const result = steps;

  return result;
}
