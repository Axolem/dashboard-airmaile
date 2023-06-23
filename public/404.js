// Path: public\404.js	
document.addEventListener('mousemove', (event) => {
    const torchElement = document.querySelector('.torch');
    torchElement.style.top = `${event.pageY}px`;
    torchElement.style.left = `${event.pageX}px`;
});

document.querySelector('body').addEventListener('click', () => {
    const linkElement = document.querySelector('link');
    linkElement.parentNode.removeChild(linkElement);

    const scriptElement = document.querySelector('script');
    scriptElement.parentNode.removeChild(scriptElement);
    window.history.back();
});
