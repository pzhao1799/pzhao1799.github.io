document.addEventListener('DOMContentLoaded', function() {
    // Get all code blocks
    const codeBlocks = document.querySelectorAll('.highlight pre');
    
    codeBlocks.forEach(block => {
        // Get the number of lines
        const lines = block.textContent.split('\n');
        const lineCount = lines.length;
        
        // Create line numbers container
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        
        // Add line numbers
        for (let i = 1; i <= lineCount; i++) {
            const lineNumber = document.createElement('span');
            lineNumber.className = 'line-number';
            lineNumber.textContent = i;
            lineNumbers.appendChild(lineNumber);
        }
        
        // Insert line numbers before the code
        block.insertBefore(lineNumbers, block.firstChild);
    });
}); 