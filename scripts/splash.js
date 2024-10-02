function launchHyperspace() {
    document.body.classList.add('hyperspace-launch');
    setTimeout(function() {
        window.location.href = 'thefeed.html';
    }, 1000);
}