document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        'Lorem ipsum dolor sit amet.',
        'Consectetur adipiscing elit.',
        'Vivamus vel lacus a libero.',
    ];

    const typedTextElement = document.getElementById('typed-text');
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[currentTextIndex];
        let textToShow = currentText.slice(0, currentCharIndex);
        typedTextElement.textContent = textToShow;

        if (isDeleting) {
            currentCharIndex--;
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
            }
        } else {
            currentCharIndex++;
            if (currentCharIndex > currentText.length) {
                isDeleting = true;
            }
        }

        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
    }

    type();
});
