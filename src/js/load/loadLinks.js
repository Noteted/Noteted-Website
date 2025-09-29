// took this code from my website
// yeah okay cool

document.addEventListener('DOMContentLoaded', function () {
  loadLinks();
});

async function loadLinks() {
  try {
    const response = await fetch('/data/links.html');
    const data = await response.text();
    document.getElementById('links').innerHTML = data;
  } catch (error) {
    console.error('Error loading links data:', error);
    document.getElementById('links').innerHTML = '<p>Whoops! Error loading links data.</p>';
  }
}