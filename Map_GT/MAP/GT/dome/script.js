const fileInput = document.getElementById('chosefile');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        readAndDisplayHtml(file);
    }
});
function readAndDisplayHtml(file) {
    const reader = new FileReader();

    reader.onload = (event) => {
        try {
            const jsonContent = JSON.parse(event.target.result);
            const htmlUrl = jsonContent.htmlUrl;

            if (htmlUrl) {
                window.open(htmlUrl, '_blank');
            } else {
                console.error('Invalid file: missing htmlUrl');
            }
        } catch (error) {
            console.error('Failed to parse JSON:', error.message);
        }
    };

    reader.onerror = (event) => {
        console.error('Failed to read file:', event.target.error);
    };

    reader.readAsText(file);
}