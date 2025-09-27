document.addEventListener('DOMContentLoaded', function () {
    getLatestRelease();
});

async function getLatestRelease() {
    const apiUrl = `https://api.github.com/repos/Daveberry-Stuff/Noteted/releases/latest`;

    try {
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