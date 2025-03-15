
let currentRound = 1;
let score = 0;
let currentTopic = '';

function playTypingSound() {
    const audio = new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=');
    audio.volume = 0.3;
    audio.play();
}

function typeText(element, text, speed = 50) {
    element.textContent = '';
    element.classList.add('typing');
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            playTypingSound();
            i++;
        } else {
            clearInterval(typing);
            element.classList.remove('typing');
        }
    }, speed);
}

function selectTopic(topic) {
    currentTopic = topic;
    startGame();
}

function selectRandomTopic() {
    const topics = document.querySelectorAll('.topic-btn');
    const randomTopic = topics[Math.floor(Math.random() * (topics.length - 1))].textContent;
    selectTopic(randomTopic);
}

function selectCustomTopic() {
    const customTopic = document.getElementById('custom-topic').value.trim();
    if (customTopic) {
        selectTopic(customTopic);
    }
}

function startGame() {
    document.getElementById('topic-selection').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    document.getElementById('current-topic').textContent = currentTopic;
}

async function submitEvidence() {
    const evidence = document.getElementById('evidence').value;
    if (!evidence) return;

    let submitBtn = document.querySelector('.debate-input button');
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';
    submitBtn.style.cursor = 'not-allowed';

    const response = await fetch('/get_response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            topic: currentTopic,
            evidence: evidence
        })
    });

    const data = await response.json();
    
    const opponentResponse = document.getElementById('opponent-response');
    opponentResponse.textContent = '';
    opponentResponse.classList.remove('hidden');
    typeText(opponentResponse, data.response);

    const judgeSpeech = document.getElementById('judge-speech');
    setTimeout(() => {
        typeText(judgeSpeech, data.judgment);
    }, 1000);

    score += data.points;
    document.getElementById('score').textContent = score;

    document.getElementById('evidence').value = '';

    currentRound++;
    if (currentRound > 5) {
        setTimeout(endGame, 2000);
    } else {
        document.getElementById('round-number').textContent = currentRound;
    }
    
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
}

function endGame() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('end-screen').classList.add('active');
    document.getElementById('final-score').textContent = score;
    document.getElementById('result-message').textContent = 
        score > 0 ? "You somehow won this absurd debate!" : "You lost to completely illogical arguments!";
}

function restartGame() {
    currentRound = 1;
    score = 0;
    document.getElementById('end-screen').classList.remove('active');
    document.getElementById('topic-selection').classList.add('active');
    document.getElementById('score').textContent = '0';
    document.getElementById('round-number').textContent = '1';
    document.getElementById('opponent-response').classList.add('hidden');
}
let scrapMode = false;
let audioPlayer = null;

async function spawnAd() {
    if (!scrapMode) return;
    
    try {
        const response = await fetch('/get_ads');
        const files = await response.json();
        
        if (files.length > 0) {
            const randomFile = files[Math.floor(Math.random() * files.length)];
            const ad = document.createElement('img');
            ad.src = `/static/ads/${randomFile}`;
            ad.className = 'ad-popup';
            ad.style.left = Math.random() * (window.innerWidth - 300) + 'px';
            ad.style.top = Math.random() * (window.innerHeight - 300) + 'px';
            ad.onclick = () => ad.remove();
            document.body.appendChild(ad);
        }
    } catch (error) {
        console.error('Error spawning ad:', error);
    }
}

function toggleScrapMode() {
    scrapMode = !scrapMode;
    const elements = document.querySelectorAll('.game-container *');
    const toggleButton = document.getElementById('scrapModeToggle');
    
    if (scrapMode) {
        toggleButton.textContent = 'CHAOS MODE: ON';
        toggleButton.style.background = '#00ff00';
        elements.forEach(el => {
            el.classList.add('scrap-mode');
            el.style.transitionDuration = Math.random() * 0.5 + 0.1 + 's';
            el.style.animationDuration = Math.random() * 0.5 + 0.1 + 's';
        });
        
        if (!audioPlayer) {
            audioPlayer = new Audio('/static/GoodMusic.mp3');
            audioPlayer.loop = true;
            audioPlayer.playbackRate = 1.5;
        }
        audioPlayer.play();
        
        // Start spawning ads
        setInterval(spawnAd, Math.random() * 1000 + 500);
    } else {
        toggleButton.textContent = 'ScrapMode: OFF';
        toggleButton.style.background = '#ff0000';
        elements.forEach(el => el.classList.remove('scrap-mode'));
        
        if (audioPlayer) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
    }
}
