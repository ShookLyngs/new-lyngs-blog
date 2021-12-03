// Util about Vue components

// Merge Vue component with `install` function
export function createInstallableComponent(component, injector = () => {}) {
  function installComponent(app) {
    app.component(component.name, component);
    injector(app);
  }

  if ('install' in component) {
    const superInstall = component.install;
    component.install = (...args) => {
      superInstall(...args);
      installComponent();
    };
  } else {
    component.install = installComponent;
  }

  return component;
}
