// =============================================
// RECIPE DATA
// =============================================
const RECIPES = [
  {
    id: "hario-switch",
    name: "Hario Switch",
    icon: "🔄",
    tag: "switch",
    tagLabel: "Switch",
    totalTime: 135, // total seconds
    waterTotal: 200,
    coffeeGrams: 15,
    steps: [
      {
        name: "Bloom",
        instruction: "60gのお湯を注ぐ",
        duration: 45,
        waterTarget: 60,
        hasValve: true,
        valveOpen: false,
        valveDesc: "浸漬のためバルブを閉じる",
      },
      {
        name: "1st Pour",
        instruction: "100gまで追加注湯",
        duration: 30,
        waterTarget: 100,
        hasValve: true,
        valveOpen: false,
        valveDesc: "引き続きバルブは閉じたまま",
      },
      {
        name: "Drain",
        instruction: "バルブを開けてドリップ",
        duration: 30,
        waterTarget: 100,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けてお湯を落とす",
      },
      {
        name: "Final Pour",
        instruction: "200gまで注湯",
        duration: 30,
        waterTarget: 200,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブは開けたまま",
      },
    ],
  },
  {
    id: "v60",
    name: "Hario V60",
    icon: "⬡",
    tag: "v60",
    tagLabel: "V60",
    totalTime: 180,
    waterTotal: 300,
    coffeeGrams: 20,
    steps: [
      {
        name: "Bloom",
        instruction: "40gのお湯を注ぐ",
        duration: 45,
        waterTarget: 40,
        hasValve: false,
      },
      {
        name: "1st Pour",
        instruction: "140gまで中心から円を描くように",
        duration: 45,
        waterTarget: 140,
        hasValve: false,
      },
      {
        name: "2nd Pour",
        instruction: "220gまでゆっくりと",
        duration: 45,
        waterTarget: 220,
        hasValve: false,
      },
      {
        name: "Final Pour",
        instruction: "300gまで注ぐ",
        duration: 45,
        waterTarget: 300,
        hasValve: false,
      },
    ],
  },
  {
    id: "chemex",
    name: "Chemex",
    icon: "🧪",
    tag: "chemex",
    tagLabel: "Chemex",
    totalTime: 240,
    waterTotal: 400,
    coffeeGrams: 30,
    steps: [
      {
        name: "Bloom",
        instruction: "60gのお湯を注ぐ",
        duration: 60,
        waterTarget: 60,
        hasValve: false,
      },
      {
        name: "1st Pour",
        instruction: "200gまでゆっくりと注ぐ",
        duration: 60,
        waterTarget: 200,
        hasValve: false,
      },
      {
        name: "2nd Pour",
        instruction: "300gまで追加",
        duration: 60,
        waterTarget: 300,
        hasValve: false,
      },
      {
        name: "Final Pour",
        instruction: "400gまで仕上げ",
        duration: 60,
        waterTarget: 400,
        hasValve: false,
      },
    ],
  },
  {
    id: "aeropress",
    name: "AeroPress",
    icon: "💉",
    tag: "aeropress",
    tagLabel: "AeroPress",
    totalTime: 120,
    waterTotal: 200,
    coffeeGrams: 15,
    steps: [
      {
        name: "Bloom",
        instruction: "40gのお湯を注ぎ30秒蒸らす",
        duration: 30,
        waterTarget: 40,
        hasValve: false,
      },
      {
        name: "Main Pour",
        instruction: "200gまで素早く注ぐ",
        duration: 30,
        waterTarget: 200,
        hasValve: false,
      },
      {
        name: "Steep",
        instruction: "1分間待つ",
        duration: 60,
        waterTarget: 200,
        hasValve: false,
      },
    ],
  },
];

// =============================================
// APP STATE
// =============================================
let state = {
  currentRecipe: null,
  currentStepIndex: 0,
  timeRemaining: 0,
  totalElapsed: 0,
  isPaused: true,
  timerId: null,
  brewStartTime: null,
  stepStartTime: null,
};

// =============================================
// DOM REFERENCES
// =============================================
const screens = {
  recipes: document.getElementById("screen-recipes"),
  ready: document.getElementById("screen-ready"),
  countdown: document.getElementById("screen-countdown"),
  brew: document.getElementById("screen-brew"),
  complete: document.getElementById("screen-complete"),
};

// Ready screen elements
const elReadyRecipeIcon = document.getElementById("ready-recipe-icon");
const elReadyRecipeName = document.getElementById("ready-recipe-name");
const elReadyCoffee = document.getElementById("ready-coffee");
const elReadyWater = document.getElementById("ready-water");
const elReadyTime = document.getElementById("ready-time");
const elBtnReadyBack = document.getElementById("btn-ready-back");
const elBtnStartBrewing = document.getElementById("btn-start-brewing");

// Countdown screen elements
const elCountdownRecipeName = document.getElementById("countdown-recipe-name");
const elCountdownNum = document.getElementById("countdown-num");
const elCountdownNextName = document.getElementById("countdown-next-name");
const elCountdownNextDesc = document.getElementById("countdown-next-desc");
const elBtnSkipCountdown = document.getElementById("btn-skip-countdown");

const elRecipeTitle = document.getElementById("recipe-title-display");
const elStepLabel = document.getElementById("step-label-display");
const elProgressSegments = document.getElementById("progress-segments");
const elStepName = document.getElementById("step-name");
const elStepInstruction = document.getElementById("step-instruction");
const elGaugeFill = document.getElementById("gauge-fill");
const elGaugeWeightNum = document.getElementById("gauge-weight-num");
const elGaugeTime = document.getElementById("gauge-time");
const elGaugeTimerPill = document.getElementById("gauge-timer-pill");
const elGaugePoured = document.getElementById("gauge-poured-text");
const elValveCard = document.getElementById("valve-card");
const elValveDesc = document.getElementById("valve-desc");
const elValveBadge = document.getElementById("valve-badge");
const elValveToggle = document.getElementById("valve-toggle");
const elRemainingFill = document.getElementById("remaining-fill");
const elTotalTimeLabel = document.getElementById("total-time-label");
const elBtnPause = document.getElementById("btn-pause");
const elBtnNext = document.getElementById("btn-next");
const elBtnReset = document.getElementById("btn-reset");
const elBtnBack = document.getElementById("btn-back");
const elCompleteStats = document.getElementById("complete-stats");
const elRecipeList = document.getElementById("recipe-list");

// Toast
const toast = document.createElement("div");
toast.className = "toast";
document.body.appendChild(toast);

// =============================================
// NAVIGATION
// =============================================
function showScreen(name) {
  Object.keys(screens).forEach((key) => {
    screens[key].classList.toggle("active", key === name);
  });
  // Update all nav buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.screen === name);
  });
}

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.screen;
    if (target === "brew" && state.currentRecipe) {
      showScreen("brew");
    } else if (target === "recipes") {
      showScreen("recipes");
    } else {
      showToast("Coming soon!");
    }
  });
});

elBtnBack.addEventListener("click", () => {
  pauseTimer();
  showScreen("recipes");
});

// =============================================
// RECIPE LIST
// =============================================
function buildRecipeList() {
  elRecipeList.innerHTML = "";
  RECIPES.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("id", `recipe-card-${recipe.id}`);
    card.setAttribute("aria-label", `${recipe.name}を開始`);

    const totalMin = Math.floor(recipe.totalTime / 60);
    const totalSec = recipe.totalTime % 60;
    const timeStr = totalSec > 0 ? `${totalMin}分${totalSec}秒` : `${totalMin}分`;

    card.innerHTML = `
      <div class="recipe-card-icon">${recipe.icon}</div>
      <div class="recipe-card-info">
        <div class="recipe-card-name">${recipe.name}</div>
        <div class="recipe-card-meta">
          <span>⏱ ${timeStr}</span>
          <span>💧 ${recipe.waterTotal}g</span>
          <span>☕ ${recipe.coffeeGrams}g</span>
        </div>
        <span class="recipe-tag ${recipe.tag}">${recipe.tagLabel}</span>
      </div>
      <div class="recipe-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    `;

    card.addEventListener("click", () => startRecipe(recipe));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") startRecipe(recipe);
    });

    elRecipeList.appendChild(card);
  });
}

// =============================================
// START RECIPE
// =============================================
function startRecipe(recipe) {
  state.currentRecipe = recipe;

  // Update Ready Screen Info
  elReadyRecipeIcon.textContent = recipe.icon;
  elReadyRecipeName.textContent = recipe.name;
  elReadyCoffee.innerHTML = `${recipe.coffeeGrams}<span class="summary-unit">g</span>`;
  elReadyWater.innerHTML = `${recipe.waterTotal}<span class="summary-unit">ml</span>`;

  const totalMin = Math.floor(recipe.totalTime / 60);
  const totalSec = recipe.totalTime % 60;
  elReadyTime.innerHTML = `${totalMin}:${totalSec.toString().padStart(2, "0")}<span class="summary-unit">min</span>`;

  showScreen("ready");
}

elBtnReadyBack.addEventListener("click", () => {
  state.currentRecipe = null;
  showScreen("recipes");
});

elBtnStartBrewing.addEventListener("click", () => {
  startCountdown();
});

// =============================================
// COUNTDOWN
// =============================================
let countdownTimerId = null;

function startCountdown() {
  const recipe = state.currentRecipe;
  const firstStep = recipe.steps[0];

  elCountdownRecipeName.textContent = recipe.name;
  elCountdownNextName.textContent = firstStep.name;
  elCountdownNextDesc.textContent = firstStep.instruction;

  showScreen("countdown");

  let count = 3;
  elCountdownNum.textContent = count;

  clearInterval(countdownTimerId);
  countdownTimerId = setInterval(() => {
    count--;
    if (count > 0) {
      elCountdownNum.textContent = count;
    } else {
      clearInterval(countdownTimerId);
      beginBrewTimer();
    }
  }, 1000);
}

elBtnSkipCountdown.addEventListener("click", () => {
  clearInterval(countdownTimerId);
  beginBrewTimer();
});

function beginBrewTimer() {
  state.currentStepIndex = 0;
  state.totalElapsed = 0;
  state.brewStartTime = Date.now();
  state.isPaused = false;

  buildProgressSegments();
  loadStep(0);
  showScreen("brew");

  // Update nav button
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.screen === "brew");
  });

  startTimer();
}

// =============================================
// PROGRESS SEGMENTS
// =============================================
function buildProgressSegments() {
  const recipe = state.currentRecipe;
  elProgressSegments.innerHTML = "";
  recipe.steps.forEach((_, i) => {
    const seg = document.createElement("div");
    seg.className = "progress-segment";
    seg.id = `seg-${i}`;
    elProgressSegments.appendChild(seg);
  });
  updateProgressSegments();
}

function updateProgressSegments() {
  state.currentRecipe.steps.forEach((_, i) => {
    const seg = document.getElementById(`seg-${i}`);
    if (!seg) return;
    seg.className = "progress-segment";
    if (i < state.currentStepIndex) seg.classList.add("completed");
    else if (i === state.currentStepIndex) seg.classList.add("active");
  });
}

// =============================================
// LOAD STEP
// =============================================
function loadStep(index) {
  const recipe = state.currentRecipe;
  const step = recipe.steps[index];
  if (!step) return;

  state.currentStepIndex = index;
  state.timeRemaining = step.duration;
  state.stepStartTime = Date.now();

  // Header
  elRecipeTitle.textContent = recipe.name;
  elStepLabel.textContent = `Step ${index + 1} of ${recipe.steps.length}`;

  // Step info - animate
  elStepName.classList.remove("step-animate");
  elStepInstruction.classList.remove("step-animate");
  void elStepName.offsetWidth; // reflow
  elStepName.classList.add("step-animate");
  elStepInstruction.classList.add("step-animate");

  elStepName.textContent = step.name;
  elStepInstruction.textContent = step.instruction;

  // Weight gauge
  elGaugeWeightNum.textContent = step.waterTarget;

  // Valve
  if (step.hasValve) {
    elValveCard.style.display = "flex";
    elValveDesc.textContent = step.valveDesc;
    elValveBadge.textContent = step.valveOpen ? "OPEN" : "CLOSED";
    elValveBadge.classList.toggle("open", step.valveOpen);
    elValveToggle.checked = step.valveOpen;
  } else {
    elValveCard.style.display = "none";
  }

  // Progress segments
  updateProgressSegments();

  // Update total time label
  const remaining = recipe.steps
    .slice(index)
    .reduce((a, s) => a + s.duration, 0);
  elTotalTimeLabel.textContent = `${formatTime(remaining)} Total`;

  // Update gauge & timer display
  updateGauge(0);
  updateTimerDisplay();

  // Poured
  const poured = index > 0 ? recipe.steps[index - 1].waterTarget : 0;
  elGaugePoured.textContent = poured > 0 ? `${poured}g poured` : "-- poured";
}

// =============================================
// TIMER
// =============================================
function startTimer() {
  clearInterval(state.timerId);
  elBtnPause.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
    Pause
  `;
  elBtnPause.classList.remove("paused");
  document.querySelector(".timer-dot")?.classList.remove("paused");

  state.timerId = setInterval(() => {
    if (state.isPaused) return;

    if (state.timeRemaining > 0) {
      state.timeRemaining--;
      state.totalElapsed++;
      updateTimerDisplay();
      updateGauge(
        1 - state.timeRemaining / state.currentRecipe.steps[state.currentStepIndex].duration
      );
      // Progress bar across all steps
      updateRemainingBar();
    } else {
      // Auto-advance if not last step
      const isLast = state.currentStepIndex === state.currentRecipe.steps.length - 1;
      if (!isLast) {
        showToast(`✅ Step ${state.currentStepIndex + 1} 完了！`);
        advanceStep();
      } else {
        finishBrew();
      }
    }
  }, 1000);
}

function pauseTimer() {
  state.isPaused = true;
  elBtnPause.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    Resume
  `;
  elBtnPause.classList.add("paused");
  document.querySelector(".timer-dot")?.classList.add("paused");
}

function resumeTimer() {
  state.isPaused = false;
  elBtnPause.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
    Pause
  `;
  elBtnPause.classList.remove("paused");
  document.querySelector(".timer-dot")?.classList.remove("paused");
}

elBtnPause.addEventListener("click", () => {
  if (state.isPaused) resumeTimer();
  else pauseTimer();
});

elBtnNext.addEventListener("click", () => {
  const isLast = state.currentStepIndex === state.currentRecipe.steps.length - 1;
  if (isLast) {
    finishBrew();
  } else {
    advanceStep();
  }
});

elBtnReset.addEventListener("click", () => {
  if (confirm("ブリューをリセットしますか？")) {
    clearInterval(state.timerId);
    state.isPaused = true;
    state.currentRecipe = null;
    showScreen("recipes");
  }
});

// =============================================
// STEP ADVANCE
// =============================================
function advanceStep() {
  const nextIndex = state.currentStepIndex + 1;
  if (nextIndex >= state.currentRecipe.steps.length) {
    finishBrew();
    return;
  }
  loadStep(nextIndex);
  if (!state.isPaused) {
    // Timer keeps running
  }
}

// =============================================
// DISPLAY UPDATES
// =============================================
function updateTimerDisplay() {
  const t = formatTime(state.timeRemaining);
  elGaugeTime.textContent = t;
  // pulse animation
  elGaugeTimerPill.classList.remove("pulse");
  void elGaugeTimerPill.offsetWidth;
  elGaugeTimerPill.classList.add("pulse");
}

function updateGauge(progress) {
  // SVG circle: circumference = 2π × 82 ≈ 515.22
  const circumference = 515.22;
  const offset = circumference - progress * circumference;
  elGaugeFill.style.strokeDashoffset = offset;
}

function updateRemainingBar() {
  const recipe = state.currentRecipe;
  const totalDuration = recipe.steps.reduce((a, s) => a + s.duration, 0);
  const pct = (state.totalElapsed / totalDuration) * 100;
  elRemainingFill.style.width = `${Math.min(pct, 100)}%`;
}

// =============================================
// FINISH BREW
// =============================================
function finishBrew() {
  clearInterval(state.timerId);
  state.isPaused = true;

  const recipe = state.currentRecipe;
  const totalBrewTime = Math.round((Date.now() - state.brewStartTime) / 1000);

  elCompleteStats.innerHTML = `
    <div class="stat-row">
      <span class="stat-label">レシピ</span>
      <span class="stat-value">${recipe.name}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">総抽出時間</span>
      <span class="stat-value">${formatTime(totalBrewTime)}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">使用水量</span>
      <span class="stat-value">${recipe.waterTotal}g</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">コーヒー豆</span>
      <span class="stat-value">${recipe.coffeeGrams}g</span>
    </div>
  `;

  showScreen("complete");

  document.getElementById("btn-new-brew").addEventListener("click", () => {
    state.currentRecipe = null;
    showScreen("recipes");
  }, { once: true });
}

// =============================================
// VALVE TOGGLE
// =============================================
elValveToggle.addEventListener("change", () => {
  const isOpen = elValveToggle.checked;
  elValveBadge.textContent = isOpen ? "OPEN" : "CLOSED";
  elValveBadge.classList.toggle("open", isOpen);
  showToast(isOpen ? "🔓 バルブ開放" : "🔒 バルブ閉鎖");
});

// =============================================
// UTILITIES
// =============================================
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

let toastTimer = null;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

// =============================================
// INIT
// =============================================
buildRecipeList();
showScreen("recipes");
