let topics = [
    "Is capitalism the most effective economic system?",
    "Should we adopt universal basic income?",
    "Are self-driving cars safer than human drivers?",
    // add more topics...
];

let positions = ["For", "Against"];

document.getElementById('randomizeBtn').addEventListener('click', function() {
    // Show loading text
    document.getElementById('topic').textContent = "Loading...";
    document.getElementById('position').textContent = "Loading...";
    
    // Timeout to simulate loading time
    setTimeout(() => {
        let topic = topics[Math.floor(Math.random() * topics.length)];
        let position = positions[Math.floor(Math.random() * positions.length)];

        document.getElementById('topic').textContent = `Your topic is: ${topic}`;
        document.getElementById('position').textContent = `You need to argue: ${position}`;
    }, 2000); // 2 seconds delay
});
