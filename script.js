// ============================================================
// 1. PREGUNTAS (150+)
// ============================================================
const QUESTION_BANK = [
    // --- UNIT 7 ---
    { q: "What time do you get up?", a: ["At 7:00 AM", "On Monday", "In the morning", "Every day"], c: 0 },
    { q: "She ______ to work every day.", a: ["go", "goes", "going", "went"], c: 1 },
    { q: "How often do you exercise?", a: ["Always", "Three times a week", "In the afternoon", "With friends"], c: 1 },
    { q: "He ______ breakfast at 8:00.", a: ["eat", "eats", "eating", "ate"], c: 1 },
    { q: "When do you do your homework?", a: ["At 8:00 PM", "With my sister", "Every day", "In the kitchen"], c: 0 },
    { q: "My brother ______ the dishes after dinner.", a: ["wash", "washes", "washing", "washed"], c: 1 },
    { q: "What time does the movie start?", a: ["At 9:00", "On Friday", "In the theater", "With friends"], c: 0 },
    { q: "I ______ coffee in the morning.", a: ["drink", "drinks", "drinking", "drank"], c: 0 },
    { q: "She ______ TV every night.", a: ["watch", "watches", "watching", "watched"], c: 1 },
    { q: "How often do you go shopping?", a: ["Sometimes", "At the mall", "With my mom", "On Saturday"], c: 0 },
    { q: "He ______ to the gym on Mondays.", a: ["go", "goes", "going", "went"], c: 1 },
    { q: "We ______ dinner at 7:00 PM.", a: ["have", "has", "having", "had"], c: 0 },
    { q: "When does she study?", a: ["After school", "With her friends", "In the library", "Every day"], c: 0 },
    { q: "My mother ______ the laundry on weekends.", a: ["do", "does", "doing", "did"], c: 1 },
    { q: "What time do you have lunch?", a: ["At 12:30", "With coworkers", "At work", "Every day"], c: 0 },
    { q: "He ______ his homework every evening.", a: ["finish", "finishes", "finishing", "finished"], c: 1 },
    { q: "I always ______ my bed in the morning.", a: ["make", "makes", "making", "made"], c: 0 },
    { q: "How often do you read?", a: ["Often", "In the park", "With my kids", "At night"], c: 0 },
    { q: "She never ______ breakfast.", a: ["skip", "skips", "skipping", "skipped"], c: 1 },
    { q: "What time does he get home?", a: ["At 6:00 PM", "From work", "With his family", "Every day"], c: 0 },
    { q: "They ______ soccer on Saturdays.", a: ["play", "plays", "playing", "played"], c: 0 },
    { q: "My father ______ coffee after lunch.", a: ["drink", "drinks", "drinking", "drank"], c: 1 },
    { q: "I ______ the dog every morning.", a: ["walk", "walks", "walking", "walked"], c: 0 },
    { q: "How often do you visit your grandparents?", a: ["Once a month", "On Sundays", "With my parents", "In the summer"], c: 0 },
    { q: "She ______ her room on Fridays.", a: ["clean", "cleans", "cleaning", "cleaned"], c: 1 },
    { q: "When do you get up?", a: ["At 7:00", "In the morning", "Every day", "With my alarm"], c: 0 },
    { q: "He ______ a shower in the morning.", a: ["take", "takes", "taking", "took"], c: 1 },
    { q: "We ______ our homework together.", a: ["do", "does", "doing", "did"], c: 0 },
    { q: "What time do you go to bed?", a: ["At 10:30", "On weekdays", "After TV", "With my book"], c: 0 },
    { q: "She ______ to music every day.", a: ["listen", "listens", "listening", "listened"], c: 1 },
    { q: "I ______ my clothes on the weekend.", a: ["wash", "washes", "washing", "washed"], c: 0 },
    { q: "How often do you eat out?", a: ["Twice a week", "At restaurants", "With friends", "For dinner"], c: 0 },
    { q: "He ______ the newspaper in the morning.", a: ["read", "reads", "reading", "readed"], c: 1 },
    { q: "When does she go to the supermarket?", a: ["On Saturdays", "With her mother", "In the car", "Every week"], c: 0 },
    { q: "I ______ my teeth twice a day.", a: ["brush", "brushes", "brushing", "brushed"], c: 0 },
    { q: "They ______ in the park every evening.", a: ["run", "runs", "running", "ran"], c: 0 },
    { q: "My sister ______ her hair every morning.", a: ["brush", "brushes", "brushing", "brushed"], c: 1 },
    { q: "We ______ to school by bus.", a: ["go", "goes", "going", "went"], c: 0 },
    { q: "What time do you start work?", a: ["At 8:00 AM", "On Monday", "With my team", "Every day"], c: 0 },
    { q: "He ______ dinner at 7:00.", a: ["have", "has", "having", "had"], c: 1 },
    { q: "I always ______ my phone before bed.", a: ["charge", "charges", "charging", "charged"], c: 0 },
    { q: "How often do you see your friends?", a: ["Every weekend", "At the mall", "With my phone", "On Friday"], c: 0 },
    { q: "She ______ a book every month.", a: ["read", "reads", "reading", "readed"], c: 1 },
    { q: "When does he play tennis?", a: ["On Sundays", "With his friends", "In the morning", "Every week"], c: 0 },
    { q: "I ______ the plants every day.", a: ["water", "waters", "watering", "watered"], c: 0 },
    { q: "They ______ to the movies on Fridays.", a: ["go", "goes", "going", "went"], c: 0 },
    { q: "My brother ______ video games after school.", a: ["play", "plays", "playing", "played"], c: 1 },
    { q: "We ______ breakfast at 8:00.", a: ["have", "has", "having", "had"], c: 0 },
    { q: "What time do you take a break?", a: ["At 10:00", "With colleagues", "In the office", "Every day"], c: 0 },
    { q: "She ______ the bus to work.", a: ["take", "takes", "taking", "took"], c: 1 },

    // --- UNIT 8 ---
    { q: "There ______ a big park near my house.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "There ______ two bedrooms in my apartment.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "______ is the supermarket?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "How many ______ are there in your kitchen?", a: ["chair", "chairs", "chair's", "chaires"], c: 1 },
    { q: "There ______ a sofa in the living room.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ are the keys?", a: ["Where", "What", "How", "Who"], c: 0 },
    { q: "How many ______ are there in the neighborhood?", a: ["school", "schools", "schooles", "school's"], c: 1 },
    { q: "There ______ some books on the table.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "The ______ is next to the bank.", a: ["library", "libraries", "library's", "libary"], c: 0 },
    { q: "Where ______ you live?", a: ["do", "does", "are", "is"], c: 0 },
    { q: "There ______ a microwave in the kitchen.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "How many ______ are there in your room?", a: ["window", "windows", "window's", "windos"], c: 1 },
    { q: "The ______ is behind the couch.", a: ["lamp", "lamps", "lamp's", "lampes"], c: 0 },
    { q: "There ______ two chairs in the dining room.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "______ is the bathroom?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ a refrigerator in the kitchen.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "How many ______ live in your building?", a: ["person", "people", "peoples", "person's"], c: 1 },
    { q: "The ______ is on the corner of Main Street.", a: ["drugstore", "drugstores", "drugstore's", "drugstor"], c: 0 },
    { q: "There ______ a TV in the bedroom.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ are my shoes?", a: ["Where", "What", "How", "Who"], c: 0 },
    { q: "There ______ some coffee in the cup.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "How many ______ are there in your house?", a: ["bedroom", "bedrooms", "bedroom's", "bedromes"], c: 1 },
    { q: "The ______ is between the school and the hospital.", a: ["church", "churches", "church's", "churche"], c: 0 },
    { q: "There ______ a washing machine in the basement.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the nearest bank?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some apples on the table.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in the living room?", a: ["window", "windows", "window's", "windos"], c: 1 },
    { q: "My apartment has a ______ and a bathtub.", a: ["shower", "showers", "shower's", "showeres"], c: 0 },
    { q: "There ______ a dishwasher in the kitchen.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the post office?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some chairs in the garden.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in your neighborhood?", a: ["park", "parks", "park's", "parkes"], c: 1 },
    { q: "The ______ is on the second floor.", a: ["classroom", "classrooms", "classroom's", "classrom"], c: 0 },
    { q: "There ______ a closet in the hallway.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is your school?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ two couches in the living room.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in the building?", a: ["floor", "floors", "floor's", "floores"], c: 1 },
    { q: "The ______ is in the center of the city.", a: ["museum", "museums", "museum's", "museume"], c: 0 },
    { q: "There ______ a blender on the counter.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the nearest restaurant?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some flowers in the vase.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in your kitchen?", a: ["appliance", "appliances", "appliance's", "applianes"], c: 1 },
    { q: "The ______ is in the garage.", a: ["toolbox", "toolboxes", "toolbox's", "toolboxs"], c: 0 },
    { q: "There ______ a garden behind the house.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the bus stop?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some books on the shelf.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in your room?", a: ["desk", "desks", "desk's", "deskes"], c: 1 },
    { q: "The ______ is next to the fireplace.", a: ["armchair", "armchairs", "armchair's", "armcheir"], c: 0 },
    { q: "There ______ a piano in the living room.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the train station?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some paintings on the wall.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in your apartment?", a: ["bathroom", "bathrooms", "bathroom's", "bathromes"], c: 1 },
    { q: "The ______ is under the bed.", a: ["box", "boxes", "box's", "boxs"], c: 0 },
    { q: "There ______ a gym in the building.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the shopping mall?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some magazines on the coffee table.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in your school?", a: ["classroom", "classrooms", "classroom's", "classroms"], c: 1 },
    { q: "The ______ is in the corner of the room.", a: ["lamp", "lamps", "lamp's", "lampes"], c: 0 },
    { q: "There ______ a swimming pool in the neighborhood.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the hospital?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some chairs in the kitchen.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in your house?", a: ["room", "rooms", "room's", "roomes"], c: 1 },
    { q: "The ______ is in the garage.", a: ["car", "cars", "car's", "cares"], c: 0 },
    { q: "There ______ a coffee maker in the kitchen.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the library?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some plants on the balcony.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in your living room?", a: ["painting", "paintings", "painting's", "paintings"], c: 1 },
    { q: "The ______ is on the wall.", a: ["clock", "clocks", "clock's", "clok"], c: 0 },
    { q: "There ______ a supermarket near my house.", a: ["is", "are", "am", "be"], c: 0 },
    { q: "______ is the cinema?", a: ["Where", "What", "How", "When"], c: 0 },
    { q: "There ______ some children in the park.", a: ["is", "are", "am", "be"], c: 1 },
    { q: "How many ______ are there in the city?", a: ["restaurant", "restaurants", "restaurant's", "restaurantes"], c: 1 },
];

// ============================================================
// 2. RANKING (localStorage)
// ============================================================
function getRanking() {
    try {
        return JSON.parse(localStorage.getItem('zombieRanking')) || [];
    } catch { return []; }
}

function saveRanking(ranking) {
    localStorage.setItem('zombieRanking', JSON.stringify(ranking));
}

function addRankingEntry(name, score, kills, accuracy) {
    const ranking = getRanking();
    ranking.push({
        name: name || 'Player',
        score: score || 0,
        kills: kills || 0,
        accuracy: accuracy || 0,
        date: new Date().toISOString()
    });
    ranking.sort((a, b) => b.score - a.score || b.kills - a.kills);
    if (ranking.length > 10) ranking.length = 10;
    saveRanking(ranking);
}

function renderRanking() {
    const list = document.getElementById('rankingList');
    const ranking = getRanking();
    if (ranking.length === 0) {
        list.innerHTML = '<div class="ranking-entry" style="justify-content:center;opacity:0.4;">No hay registros aún</div>';
        return;
    }
    const medals = ['🥇', '🥈', '🥉'];
    list.innerHTML = ranking.map((entry, i) => {
        const rank = i < 3 ? medals[i] : `#${i+1}`;
        const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
        return `
            <div class="ranking-entry">
                <span class="rank ${rankClass}">${rank}</span>
                <span class="name">${entry.name}</span>
                <span class="score">⭐${entry.score}</span>
                <span style="font-size:0.6rem;opacity:0.4;">${entry.kills}🧟 ${entry.accuracy}%</span>
            </div>
        `;
    }).join('');
}

function resetRanking() {
    if (confirm('¿Borrar todo el ranking?')) {
        saveRanking([]);
        renderRanking();
    }
}

// ============================================================
// 2.5 MÚSICA DE FONDO
// ============================================================
let backgroundMusic = null;
let musicEnabled = true;

function initBackgroundMusic() {
    try {
        backgroundMusic = new Audio('assets/audio/john-newman-love-me-again-lyrics_ymRxvVSq.mp3');
        backgroundMusic.loop = true;  // Repetir indefinidamente
        backgroundMusic.volume = 0.5;  // Volumen 50% (0.0 - 1.0)
        backgroundMusic.preload = 'auto';
    } catch (e) {
        console.warn('Error al cargar la música:', e);
    }
}

function playBackgroundMusic() {
    if (!musicEnabled || !backgroundMusic) return;
    try {
        // Reanudar si está pausada
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(e => console.warn('Error al reproducir:', e));
        }
    } catch (e) { /* ignorar */ }
}

function pauseBackgroundMusic() {
    if (backgroundMusic) {
        try {
            backgroundMusic.pause();
        } catch (e) { /* ignorar */ }
    }
}

function toggleMusic() {
    musicEnabled = !musicEnabled;
    const btn = document.getElementById('musicToggleBtn');
    
    if (musicEnabled) {
        playBackgroundMusic();
        if (btn) {
            btn.textContent = '🔊 MÚSICA: ON';
            btn.style.color = '#81c784';
        }
        console.log('🔊 Música activada');
    } else {
        pauseBackgroundMusic();
        if (btn) {
            btn.textContent = '🔇 MÚSICA: OFF';
            btn.style.color = '#ff6b6b';
        }
        console.log('🔇 Música desactivada');
    }
    return musicEnabled;
}

// Ajustar volumen (ejemplo: slider)
function setMusicVolume(volume) {
    if (backgroundMusic) {
        backgroundMusic.volume = Math.max(0, Math.min(1, volume));
    }
}

// ============================================================
// 3. SONIDOS (Web Audio)
// ============================================================
let audioCtx = null;

function playSound(type) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        gain.gain.value = 0.08;
        const now = audioCtx.currentTime;

        switch(type) {
            case 'correct':
                osc.frequency.setValueAtTime(523, now);
                osc.frequency.setValueAtTime(659, now + 0.08);
                osc.frequency.setValueAtTime(784, now + 0.16);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
                break;
            case 'wrong':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(200, now);
                osc.frequency.setValueAtTime(120, now + 0.15);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
                break;
            case 'explosion':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(80, now);
                osc.frequency.exponentialRampToValueAtTime(20, now + 0.4);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                osc.start(now);
                osc.stop(now + 0.4);
                break;
            case 'gameover':
                osc.type = 'square';
                osc.frequency.setValueAtTime(300, now);
                osc.frequency.setValueAtTime(200, now + 0.3);
                osc.frequency.setValueAtTime(100, now + 0.6);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
                osc.start(now);
                osc.stop(now + 0.9);
                break;
            default:
                osc.frequency.setValueAtTime(440, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.start(now);
                osc.stop(now + 0.12);
        }
    } catch (e) { /* silencio */ }
}

// ============================================================
// 4. NAVEGACIÓN DE PANTALLAS
// ============================================================
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
        // Forzar reflow para activar transición
        void target.offsetWidth;
        target.classList.add('active');
    }

    // Control de música según pantalla
    if (id === 'menuScreen') {
        // En el menú: reproducir música
        playBackgroundMusic();
    } else if (id === 'gameScreen') {
        // En el juego: pausar música (para no interferir con efectos)
        pauseBackgroundMusic();
    } else {
        // En otras pantallas: mantener como esté
        // O pausar si prefieres
        pauseBackgroundMusic();
    }
}

function goToMenu() {
    if (gameRunning) {
        clearInterval(gameTimer);
        gameRunning = false;
    }
    showScreen('menuScreen');
    renderRanking();
}

function showRanking() {
    showScreen('rankingScreen');
    renderRanking();
}

function showHowTo() {
    showScreen('howtoScreen');
}

function showCredits() {
    showScreen('creditsScreen');
}

// ============================================================
// 5. JUEGO
// ============================================================
let gameRunning = false;
let gameTimer = null;
let currentQuestions = [];
let questionIndex = 0;
let lives = 3;
let timeLeft = 40;
let score = 0;
let kills = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let accuracy = 0;
let currentQuestion = null;
let answered = false;
let questionStartTime = 0;
let playerName = '';

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startGame() {
    const name = prompt('✏️ Ingresa tu nombre:', 'Survivor');
    if (!name) return;
    playerName = name.trim() || 'Survivor';

    // Preparar preguntas
    currentQuestions = shuffleArray([...QUESTION_BANK]);
    questionIndex = 0;
    lives = 3;
    timeLeft = 40;
    score = 0;
    kills = 0;
    correctAnswers = 0;
    totalAnswers = 0;
    accuracy = 0;
    gameRunning = true;
    answered = false;

    showScreen('gameScreen');
    updateHUD();
    nextQuestion();

    // Iniciar temporizador
    if (gameTimer) clearInterval(gameTimer);
    gameTimer = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) {
            timeLeft = 0;
            updateHUD();
            endGame('⏰ TIME OUT');
            return;
        }
        updateHUD();
        // Alerta visual si queda poco tiempo
        const timerEl = document.getElementById('timerDisplay');
        if (timeLeft < 10) {
            timerEl.style.color = '#ff1744';
            timerEl.style.textShadow = '0 0 20px rgba(255,23,68,0.3)';
        } else {
            timerEl.style.color = '#4fc3f7';
            timerEl.style.textShadow = 'none';
        }
    }, 100);
}

function nextQuestion() {
    if (!gameRunning) return;
    if (questionIndex >= currentQuestions.length) {
        currentQuestions = shuffleArray([...QUESTION_BANK]);
        questionIndex = 0;
    }
    currentQuestion = currentQuestions[questionIndex];
    questionIndex++;
    answered = false;
    questionStartTime = performance.now();

    document.getElementById('questionText').textContent = currentQuestion.q;
    const container = document.getElementById('answersContainer');
    container.innerHTML = '';
    currentQuestion.a.forEach((text, idx) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = text;
        btn.dataset.index = idx;
        btn.addEventListener('click', () => handleAnswer(idx));
        container.appendChild(btn);
    });

    // Resetear zombie
    const zombie = document.getElementById('zombieSprite');
    zombie.style.transform = 'scale(1) translateY(0)';
    zombie.style.filter = '';
    document.getElementById('zombieHealth').style.width = '100%';
    document.querySelector('.zombie-wrapper').style.transform = 'translateX(0)';
}

function handleAnswer(index) {
    if (answered || !gameRunning) return;
    answered = true;
    totalAnswers++;

    const correct = index === currentQuestion.c;
    const elapsed = (performance.now() - questionStartTime) / 1000;
    const isFast = elapsed < 3;

    const btns = document.querySelectorAll('.answer-btn');
    btns.forEach((btn, i) => {
        btn.style.pointerEvents = 'none';
        if (i === currentQuestion.c) btn.classList.add('correct');
        if (i === index && !correct) btn.classList.add('wrong');
    });

    if (correct) {
        correctAnswers++;
        kills++;
        score += 100;
        if (isFast) {
            score += 50;
            showPopup('+50 BONUS! ⚡');
        }
        playSound('correct');
        // Zombie destruido
        const zombie = document.getElementById('zombieSprite');
        zombie.style.transition = 'transform 0.3s, opacity 0.3s';
        zombie.style.transform = 'scale(0) rotate(20deg)';
        zombie.style.opacity = '0';
        setTimeout(() => {
            zombie.style.transform = 'scale(1) rotate(0deg)';
            zombie.style.opacity = '1';
        }, 400);
        // Explosión
        spawnExplosion();
        timeLeft += 3;
    } else {
        lives--;
        timeLeft -= 5;
        playSound('wrong');
        // Zombie ataca
        const wrapper = document.querySelector('.zombie-wrapper');
        wrapper.style.transition = 'transform 0.3s';
        wrapper.style.transform = 'translateX(-30px) scale(1.1)';
        document.getElementById('gameField').classList.add('shake');
        setTimeout(() => {
            wrapper.style.transform = 'translateX(0) scale(1)';
            document.getElementById('gameField').classList.remove('shake');
        }, 400);
        // Perder vida
        if (lives <= 0) {
            lives = 0;
            updateHUD();
            endGame('💀 GAME OVER');
            return;
        }
    }

    updateHUD();

    setTimeout(() => {
        if (gameRunning) nextQuestion();
    }, correct ? 500 : 800);
}

function updateHUD() {
    accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
    document.getElementById('livesDisplay').textContent = '❤️'.repeat(Math.max(0, lives));
    document.getElementById('timerDisplay').textContent = '⏱ ' + Math.ceil(timeLeft);
    document.getElementById('scoreDisplay').textContent = '⭐ ' + score;
    document.getElementById('accuracyDisplay').textContent = '🎯 ' + accuracy + '%';
    document.getElementById('killsDisplay').textContent = '🧟 ' + kills;
}

function endGame(title) {
    if (!gameRunning) return;
    gameRunning = false;
    clearInterval(gameTimer);
    playSound('gameover');

    // Guardar ranking
    addRankingEntry(playerName, score, kills, accuracy);

    document.getElementById('overlayTitle').textContent = title;
    document.getElementById('overlayStats').textContent = `⭐ ${score}  🧟 ${kills}  🎯 ${accuracy}%`;
    document.getElementById('gameOverlay').classList.remove('hidden');
}

function restartGame() {
    document.getElementById('gameOverlay').classList.add('hidden');
    startGame();
}

function spawnExplosion() {
    const field = document.getElementById('gameField');
    const el = document.createElement('div');
    el.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle, #ff6b35, #ff1744, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 6;
        transform: translate(-50%, -50%) scale(0);
        animation: explodeAnim 0.5s ease forwards;
    `;
    field.appendChild(el);
    setTimeout(() => el.remove(), 500);

    // Partículas
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        const angle = Math.random() * 2 * Math.PI;
        const dist = 40 + Math.random() * 80;
        const colors = ['#ff6b35', '#ff1744', '#ffd740', '#fff'];
        p.style.cssText = `
            position: absolute;
            left: 50%;
            top: 50%;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 7;
            transform: translate(-50%, -50%);
            transition: all 0.6s ease;
        `;
        field.appendChild(p);
        requestAnimationFrame(() => {
            p.style.transform = `translate(${Math.cos(angle)*dist - 50}%, ${Math.sin(angle)*dist - 50}%) scale(0)`;
            p.style.opacity = '0';
        });
        setTimeout(() => p.remove(), 700);
    }
}

function showPopup(text) {
    const field = document.getElementById('gameField');
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translateX(-50%);
        font-family: 'Press Start 2P', monospace;
        font-size: 1.4rem;
        color: #ffd740;
        pointer-events: none;
        z-index: 15;
        text-shadow: 0 0 30px rgba(255,215,64,0.3);
        animation: floatUp 1s ease forwards;
    `;
    popup.textContent = text;
    field.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
}

// ============================================================
// 6. INICIALIZACIÓN (con carga simulada)
// ============================================================
function init() {
    const progressFill = document.getElementById('progressFill');
    const tipEl = document.getElementById('loadingTip');
    const tips = [
        '💡 Responde rápido para +50 bonus',
        '🧟 3 vidas, no dejes que se acerquen',
        '⏱ +3s por acierto, -5s por error',
        '🏆 Top 10 guardado en tu navegador',
        '📖 Preguntas de Top Notch Units 7 & 8'
    ];
    let progress = 0;

    // 🔥 PRIMERO: Inicializar música
    initBackgroundMusic();

    const interval = setInterval(() => {
        progress += Math.random() * 8 + 2;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            progressFill.style.width = '100%';
            
            setTimeout(() => {
                // 1. Mostrar el menú
                showScreen('menuScreen');
                renderRanking();
                
                // 2. 🎵 REPRODUCIR MÚSICA AUTOMÁTICAMENTE
                // Esperar un poco para que el DOM se actualice
                setTimeout(() => {
                    playBackgroundMusic();
                    console.log('🎵 Intentando reproducir música automáticamente...');
                }, 300);
                
            }, 400);
            return;
        }
        progressFill.style.width = progress + '%';
        if (Math.random() < 0.12) {
            tipEl.textContent = tips[Math.floor(Math.random() * tips.length)];
        }
    }, 80);
}

// ============================================================
// 7. ANIMACIONES CSS (inyectadas para que funcionen)
// ============================================================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes explodeAnim {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(2); opacity: 0.8; filter: brightness(2); }
        100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
    @keyframes floatUp {
        0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-80px) scale(1.5); }
    }
    .shake {
        animation: shakeAnim 0.3s ease;
    }
    @keyframes shakeAnim {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(styleSheet);

// ============================================================
// 8. ARRANCAR
// ============================================================
document.addEventListener('DOMContentLoaded', init);