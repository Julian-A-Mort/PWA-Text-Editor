const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});


// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
      butInstall.style.display = 'none';
    }
  });
  
// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    deferredPrompt = null;
    console.log('PWA was installed', event);
  });
  