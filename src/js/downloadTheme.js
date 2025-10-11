// Function to handle the download logic
async function downloadThemeFile(fileUrl, fileName) {
    try {
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const tempLink = document.createElement('a');
        
        tempLink.href = blobUrl;
        tempLink.setAttribute('download', fileName);
        
        document.body.appendChild(tempLink);
        tempLink.click();
        
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobUrl);

    } catch (error) {
        console.error("Download failed:", error);
        alert("The file download failed. Check the console for details.");
    }
}

function darkTheme() {
    const fileUrl = 'https://raw.githubusercontent.com/Noteted/Noteted/main/assets/theme/Dark.json';
    const fileName = 'Dark.json';
    downloadThemeFile(fileUrl, fileName);
}

function lightTheme() {
    const fileUrl = 'https://raw.githubusercontent.com/Noteted/Noteted/main/assets/theme/Light.json';
    const fileName = 'Light.json';
    downloadThemeFile(fileUrl, fileName);
}

function pureBlackTheme() {
    const fileUrl = 'https://raw.githubusercontent.com/Noteted/Noteted/main/assets/theme/Pure Black.json';
    const fileName = 'Pure Black.json';
    downloadThemeFile(fileUrl, fileName);
}