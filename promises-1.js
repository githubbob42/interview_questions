
// What's the difference

return DoA().then(() => { DoB().then(DoD); }).catch(DoC)

return DoA().then(DoB, DoC).then(DoD);
// rewrite above with just thens/catches
