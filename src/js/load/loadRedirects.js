// took this code from my website
// yeah okay cool

document.addEventListener('DOMContentLoaded', function () {
  loadRedirects();
});

async function loadRedirects() {
  try {
    const response = await fetch('/data/redirects.html');
    const data = await response.text();
    // const formattedData = data.replace(/\n/g, '<br>');
    document.getElementById('redirects').innerHTML = data;
  } catch (error) {
    console.error('Error loading redirects data:', error);
    document.getElementById('redirects').innerHTML = '<p>Whoops! Error loading redirects data.</p>';
  }
}