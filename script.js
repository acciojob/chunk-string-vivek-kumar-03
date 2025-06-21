document.addEventListener('DOMContentLoaded', function() {
    const stringInput = document.getElementById('string-input');
    const chunkSizeInput = document.getElementById('chunk-size');
    const chunkButton = document.getElementById('chunk-button');
    const resultOutput = document.getElementById('result-output');

    chunkButton.addEventListener('click', function() {
        const inputString = stringInput.value;
        const chunkSize = parseInt(chunkSizeInput.value);
        
        const result = chunkString(inputString, chunkSize);
        resultOutput.textContent = JSON.stringify(result, null, 2);
    });

    function chunkString(str, chunkLength) {
        if (str === null) return [];
        if (chunkLength <= 0) return [str];
        
        const chunks = [];
        for (let i = 0; i < str.length; i += chunkLength) {
            chunks.push(str.slice(i, i + chunkLength));
        }
        return chunks;
    }
});