async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('./helper');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
