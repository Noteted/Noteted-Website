async function getLatestRelease() {
    // sleeps for 500 ms so it actually displays it in the website without it being bugged
    await sleep(500);
    
    try {
        const apiUrl = `https://api.github.com/repos/Noteted/Noteted/releases/latest`;
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'Node.js Fetch Release Script',
                'Accept': 'application/vnd.github.v3+json',
            },
        });
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }
        
        const releaseData = await response.json();
        
        const version = releaseData.tag_name;
        const releaseDate = releaseData.published_at.substring(0, 10);
        const changelogBody = releaseData.body;
        
        const formattedChangelog = changelogBody.replace(/\n/g, '<br>')
        document.getElementById('githubReleaseDate').innerHTML = releaseDate;
        document.getElementById('githubTag').innerHTML = version;
        document.getElementById('githubChangelog').innerHTML = formattedChangelog;
    } catch (error) {
        document.getElementById('githubTag').innerHTML = "Failed to fetch tag.";
        document.getElementById('githubReleaseDate').innerHTML = "Failed to fetch release date.";
        document.getElementById('githubChangelog').innerHTML = "Failed to fetch changelog";
        console.error('Failed to fetch latest release:', error.message);  
    }
}

// the code mimir (I got this code from google)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

getLatestRelease();