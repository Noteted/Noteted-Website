// took this code from my website
// yeah okay cool

document.addEventListener('DOMContentLoaded', function () {
  loadInformation();
});

async function loadInformation() {
  try {
    const response = await fetch('/data/info.md');
    const data = await response.text();
    // const formattedData = data.replace(/\n/g, '<br>');
    document.getElementById('infomation').innerHTML = data;
  } catch (error) {
    console.error('Error loading infomation data:', error);
    document.getElementById('infomation').innerHTML = '<p>Whoops! Error loading links data.</p>';
  }
}