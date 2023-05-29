let topics = [
    "Is capitalism the most effective economic system?",
    "Should we adopt universal basic income?",
    "Are self-driving cars safer than human drivers?",
    // add more topics...
];

let positions = ["For", "Against"];

document.getElementById('startBtn').addEventListener('click', function() {
    let topic = topics[Math.floor(Math.random() * topics.length)];
    let position = positions[Math.floor(Math.random() * positions.length)];

    document.getElementById('topic').textContent = `Your topic is: ${topic}`;
    document.getElementById('position').textContent = `You need to argue: ${position}`;
    document.getElementById('submitBtn').disabled = false;
});

document.getElementById('submitBtn').addEventListener('click', function() {
    let argument = document.getElementById('argument').value;
    if (!argument) {
        alert('Please enter your argument');
        return;
    }
    alert(`Your argument is: ${argument}`);
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('argument').value = '';
});
