import * as THREE from "three";

const CONFIG = {
  answers: [
    "Да, но ты всё равно лузер",
    "Нет, котик, но вот тебе плюшевый мишка для утешения! 🧸💕",
    "Хуй на постном масле",
    "ДА, как улыбка щенка! 🐶❤️",
    "Ты – генетический брак, но какой же ты ПУШИСТЫЙ брак! 🧬🐻",
    "Судьба ржёт: 'Ты — лох', но лох ОЧАРОВАТЕЛЬНЫЙ! 🤡💘",
    "100%, как два рубля в твоём кармане",
    "Нет, но ты – радуга после дождя! 🌈",
    "Ты думаешь, Вселенной есть дело до твоего уёбищного вопроса?",
    "ДА, и пусть тебя обнимет панда! 🐼💞",
    "Иди нахуй, это не судьба, а ты просто долбаёб",
    "Нет, но ты – плюшевый ангел! 🧸👼",
    "Да, но потом ты проснёшься в луже блевотины",
    "Конечно ДА, как пятачок у поросёнка! 🐷",
    "Нет, ибо ты – говно в квадрате",
    "ДА, как котэ в коробке! 📦🐈",
    "Ты – как пук на ветру: никто не заметит",
    "Нет, но ты – конфетка! 🍬",
    "Да, сучка, но ты всё равно останешься дном! 💩🔥",
    "Судьба шепчет: «ДА, КОТИК!» 🐾",
    "Ответ: 'Ты – бесполезный кусок мяса'",
    "Нет, но ты – солнечный зайчик! ☀️🐇",
    "Хуйня вопрос – хуйня ответ, иди нахуй",
    "ДА, и пусть весь мир обнимет тебя! 🤗",
    "Ты – как последний чел в очереди за мозгом, так что нет",
    "Угу-угу! Ты же лучший/лучшая! 🌸",
    "Нет, потому что ты – тупиковая ветвь эволюции",
    "ДА, как лапки у коалы! 🐨",
    "Судьба сказала: 'Иди нахуй, тупорылый'",
    "Нет, но ты – кусочек счастья! 🍀",
    "Да, но ты всё равно сдохнешь в нищете",
    "Абсолютно ДА, как два пингвинчика в любви! 🐧❤️🐧",
    "Ты – как грязная подошва: все тебя топчут",
    "Нет, но вот тебе цветочек 🌻 – теперь всё хорошо!",
    "Да, пусик, но пусик-долбоёб! 🐱🤪",
    "Судьба орёт: 'Ты – конченый, смирись!'",
    "Нет, но ты – кексик! 🧁",
    "Ответ: 'Ты – дерьмо, и так и останешься'",
    "ДА, как носик у котёнка! 🐱👃",
    "Нет, ибо ты – провал во всех смыслах",
    "Да, но это лишь иллюзия, лох",
    "Нет, но ты – шоколадное настроение! 🍫😊",
    "Хуй тебе, а не ответ, дегенерат",
    "ДА, и это будет ПУШИСТО! 🧶",
    "Ты – ошибка природы, но какая МИЛАЯ ошибка! 🐭💣",
    "Нет, потому что ты – деградант",
    "Да, но потом тебя вырвет радугой! 🌈🤮",
    "Нет, солнышко, но ты светишься, как говно в темноте! 💩💡",
    "Судьба говорит: 'Лучше бы тебя сдуло ветром в детстве'",
    "Нет, но ты – воздушный шарик! 🎈",
    "Да, но ты обосрёшься от этого",
    "ДА, КРОШЕЧКА, но крошечка-говнешка! 💩🐰",
    "Ты – как пустая бутылка: никому не нужен",
    "Нет, но посмотри на этого котика -> 🐱, он тебя любит!",
    "Да, но ты всё равно проиграешь",
    "Судьба смеётся: 'Ты – клоун без будущего'",
    "Нет, но ты – розовый фламинго! 🦩",
    "Ты – как мусорный пакет на ветру: бесполезен",
    "ДА, и пусть тебе подмигнёт звезда! ⭐😉",
    "Нет, ибо ты – жирная точка в истории неудач",
    "Да, но потом ты осознаешь, что ты – никто",
    "Нет, сладкий, но ты — как последний пряник в аду! 🍪🔥",
    "Судьба ржёт над твоим ничтожеством",
    "Нет, но ты – сердечко! 💘",
    "Да, но ты слишком туп, чтобы понять",
    "ДА, как хвост песика! 🐕💫",
    "Нет, потому что ты – отброс общества",
    "Да, но это лишь начало твоего краха",
    "Нет, но ты – карамелька! 🍬",
    "Ты – как последний кусок дерьма на подошве судьбы",
    "ДА, и точка! Как нос у панды – милый и бесспорный! 🐼",
    "Нет, ибо ты – пример, как не надо жить",
    "Да, но потом ты пожалеешь, что спросил",
    "Нет, но ты – плюшевый мишутка! 🧸",
    "Ты – как гнилой овощ: никому не нужен",
    "ДА, как ушки у зайки! 🐰",
    "Нет, потому что ты – позорная страница жизни",
    "Да, но ты всё равно останешься ничтожеством",
    "Нет, но ты – облачко добра! ☁️❤️",
    "Судьба говорит: «ДА, КРОШЕЧКА!» 🐭",
    "Нет, потому что ты – пустая трата кислорода",
    "Да, но тебя вырвет правдой",
    "Нет, но ты – волшебный единорог! 🦄✨",
    "Ты – мусор, и ответ – мусор, получай: 'Нет'",
    "ДА, и это будет СЛАДКО! 🍭",
    "Нет, ибо ты – провальная копия человека",
    "Да, солнышко! 💖",
    "Нет, потому что ты – говно без вариантов",
    "ДА, как пузо у кота! 🐱🍕",
    "Нет, ибо ты – позор своей мамки",
    "Да, но ты всё равно еблан",
    "Нет, но ты – капитан милоты! 🚢🐥",
    "Судьба сказала: 'Ты не заслуживаешь ответа, лузер'",
    "Нет, но ты – мёдик! 🐝🍯",
    "Да, но это не спасёт тебя от пиздеца",
    "Нет, но ты – сладкий пончик! 🍩",
    "Ты – как последний чих перед смертью: бесполезен",
    "ДА, и пусть все твои мечты сбудутся! 🌠",
    "Нет, потому что ты – ошибка природы",
    "Да, но ты обоссышься от счастья",
    "Нет, но ты – пушистик! 🐾",
    "Ответ: 'Ты – мусор, и точка'",
    "Нет, но ты светишься, как светлячок! ✨",
    "Да, но ты слишком тупой, чтобы этим воспользоваться",
    "Нет, но вот тебе виртуальный пряник 🍪, чтобы не грустить!",
    "Ты – бесполезный кусок мяса",
    "Нет, но ты – капелька счастья! 💧🌈",
    "Да, но потом ты умрёшь в одиночестве",
    "Конечно да, моя фурри-зайка! 🐇✨",
    "Нет, ибо ты – позор своего рода",
    "ДА, как хвостик у белочки! 🐿️",
    "Нет, потому что твоя жизнь – это шутка",
    "Да, но это лишь начало твоего конца",
    "Может быть... Но точно будет МИЛО! 🦄",
    "Нет, ибо ты – пустое место",
    "Спроси ещё раз, малыш, я растю! 🌱",
    "Да, но ты всё равно проёбанный тип",
    "Нет, но ты – конфетка! 🍬",
  ],
  colors: {
    edge: 0x8a6cff,
    glow: 0x5a3dc8,
    bg: 0x010314,
    face: 0x080a1a,
  },
};

let scene, camera, renderer, icosahedron, edges;
let isRotating = false;

async function init() {
  try {
    await setupScene();
    createIcosahedron();
    setupEventListeners();
    animate();
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

async function setupScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(CONFIG.colors.bg);

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    10
  );
  camera.position.z = 8;

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById("sceneContainer").appendChild(renderer.domElement);

  // Освещение
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0x7752fe, 1.5);
  directionalLight.position.set(2, 2, 2);
  scene.add(directionalLight);

  window.addEventListener("resize", onWindowResize);
}

function createIcosahedron() {
  // Создаем геометрию икосаэдра
  const geometry = new THREE.IcosahedronGeometry(2.5, 1);

  // Материал для граней (полупрозрачный)
  const material = new THREE.MeshPhongMaterial({
    color: CONFIG.colors.face,
    transparent: true,
    opacity: 0.1,
    specular: 0x7752fe,
    shininess: 50,
    side: THREE.DoubleSide,
  });

  icosahedron = new THREE.Mesh(geometry, material);
  scene.add(icosahedron);

  // Создаем ребра с помощью EdgesGeometry
  const edgesGeometry = new THREE.EdgesGeometry(geometry);
  const edgesMaterial = new THREE.LineBasicMaterial({
    color: CONFIG.colors.edge,
    linewidth: 10,
    transparent: false, // Отключаем прозрачность для стабильности
  });

  edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
  scene.add(edges);
}

function animate() {
  requestAnimationFrame(animate);

  // Плавное вращение
  const rotationSpeed = isRotating ? 0.02 : 0.005;
  icosahedron.rotation.y += rotationSpeed;
  icosahedron.rotation.x += rotationSpeed;

  if (edges) edges.rotation.copy(icosahedron.rotation);

  renderer.render(scene, camera);
}

function setupEventListeners() {
  const askBtn = document.getElementById("askButton");
  const questionInput = document.getElementById("questionInput");
  const answerDisplay = document.getElementById("answerDisplay");

  askBtn.addEventListener("click", () => {
    if (!questionInput.value.trim()) {
      showAnswer("Задай вопрос...", answerDisplay);
      return;
    }

    startMagicAnimation(answerDisplay);
  });

  questionInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") askBtn.click();
  });
}

function startMagicAnimation(answerDisplay) {
  isRotating = true;

  // Сохраняем исходные значения
  const originalColor = edges.material.color.clone();
  const originalScale = {
    x: edges.scale.x,
    y: edges.scale.y,
    z: edges.scale.z,
  };

  // Первая фаза анимации - увеличение и смена цвета
  gsap.to(edges.scale, {
    x: 1.3,
    y: 1.3,
    z: 1.3,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
      // Вторая фаза - возврат к исходному состоянию
      gsap.to(edges.scale, {
        x: originalScale.x,
        y: originalScale.y,
        z: originalScale.z,
        duration: 0.6,
        ease: "power2.in",
      });

      // Гарантированный возврат цвета
      gsap.to(edges.material, {
        r: originalColor.r,
        g: originalColor.g,
        b: originalColor.b,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          // Фикс для редких случаев
          edges.material.color.set(originalColor);
        },
      });
    },
  });

  // Анимация цвета (отдельно для надёжности)
  gsap.to(edges.material, {
    r: 1, // Красный
    g: 0, // Зелёный
    b: 1, // Синий (фиолетовый)
    duration: 0.3,
  });

  // Показ ответа
  setTimeout(() => {
    const randomAnswer =
      CONFIG.answers[Math.floor(Math.random() * CONFIG.answers.length)];
    showAnswer(randomAnswer, answerDisplay);
    isRotating = false;

    // Абсолютная гарантия восстановления
    edges.material.color.copy(originalColor);
    edges.scale.set(originalScale.x, originalScale.y, originalScale.z);
  }, 2000);
}
function showAnswer(text, element) {
  element.textContent = text;
  element.classList.add("visible");

  setTimeout(() => {
    element.classList.remove("visible");
  }, 5000);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Инициализация после загрузки
document.addEventListener("DOMContentLoaded", () => {
  // Проверяем наличие Three.js
  if (typeof THREE === "undefined") {
    console.error("Three.js not loaded");
    return;
  }

  init();
});
