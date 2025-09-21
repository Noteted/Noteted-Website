figlet.defaults({ fontPath: 'https://cdn.jsdelivr.net/npm/figlet/fonts' });

const fonts = [
    'Standard','Big', 'Block',
    'Bubble', 'Digital', 'Ivrit',
    'Larry 3D', 'Nancyj-Improved', 'Script',
    'Slant'
];
const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

figlet.text('Noteted', {
    font: randomFont,
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    document.getElementById('notetedFiglet').innerText = data;
});