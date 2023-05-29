let topics;

fetch('topics.json')
    .then(response => response.json())
    .then(data => topics = data);

document.getElementById('randomizeBtn').addEventListener('click', function() {
    let topicData = topics[Math.floor(Math.random() * topics.length)];
    let position = topicData.positions[Math.floor(Math.random() * topicData.positions.length)];

    document.getElementById('topic').textContent = `Your topic is: ${topicData.topic}`;
    document.getElementById('position').textContent = `You need to argue: ${position}`;

    // Show the result div
    document.getElementById('result').classList.add('show');
});
