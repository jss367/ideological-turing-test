let topics;

fetch('topics.json')
    .then(response => response.json())
    .then(data => topics = data);

let currentTopic = null;

document.getElementById('randomizeTopicBtn').addEventListener('click', function() {
    currentTopic = topics[Math.floor(Math.random() * topics.length)];
    document.getElementById('topic').textContent = `Your topic is: ${currentTopic.topic}`;

    // Show the result div
    document.getElementById('result').classList.add('show');
});

document.getElementById('randomizePositionBtn').addEventListener('click', function() {
    if (!currentTopic) {
        alert('You must randomize the topic first.');
        return;
    }

    let position = currentTopic.positions[Math.floor(Math.random() * currentTopic.positions.length)];
    document.getElementById('position').textContent = `You need to argue: ${position}`;

    // Show the result div
    document.getElementById('result').classList.add('show');
});
