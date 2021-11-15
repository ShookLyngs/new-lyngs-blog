import Clipboard from 'clipboard';

export function install(app) {
  app.config.globalProperties.$copyText = copyText;
}

export function copyText(text, config) {
  const options = createOptions(config);

  const button = document.createElement('button');
  button.style.display = 'none';

  const clipboard = new Clipboard(button, {
    text: () => text,
  });

  function destroy() {
    clipboard.destroy();
    if (options.appendToBody) {
      document.body.removeChild(button);
    }
  }

  if (options.appendToBody) {
    document.body.appendChild(button);
  }

  return new Promise((resolve, reject) => {
    clipboard.on('success', (event) => {
      resolve(event);
      destroy();
    });
    clipboard.on('error', (event) => {
      reject(event);
      destroy();
    });

    button.click();
  });
}

function createOptions(options) {
  return {
    appendToBody: true,
    ...options,
  };
}
