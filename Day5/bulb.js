document.getElementById('onButton').addEventListener('click', function() {
    document.getElementById('bulb').src = 'bulb-on.avif';
    document.getElementById('body').style.backgroundColor = 'yellow';
});

document.getElementById('offButton').addEventListener('click', function() {
    document.getElementById('bulb').src = 'bulb-off.webp';
    document.getElementById('body').style.backgroundColor = 'black';
});
