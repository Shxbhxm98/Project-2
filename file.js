const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.id;
        if (color === 'white') {
            document.body.style.backgroundColor = '#ffffff';
        } else if (color === 'black') {
            document.body.style.backgroundColor = '#000000';
        } else {
            document.body.style.backgroundColor = color;
        }
    });
});