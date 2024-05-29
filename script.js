document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Mode';
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '1rem';
    toggleButton.style.right = '1rem';
    toggleButton.style.padding = '0.5rem 1rem';
    toggleButton.style.backgroundColor = '#6c63ff';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});
