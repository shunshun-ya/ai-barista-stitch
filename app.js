// =============================================
// RECIPE DATA
// =============================================
const RECIPES = [
  // ─── 粕谷哲 4:6メソッド（ホット） ───────────────
  {
    id: "kasuya-46-hot",
    name: "4:6メソッド",
    subname: "ホット",
    icon: "☕",
    tag: "method46",
    tagLabel: "4:6 Method",
    totalTime: 210,   // 3:30
    waterTotal: 300,
    coffeeGrams: 20,
    steps: [
      {
        name: "第1投（蒸らし）",
        instruction: "50gのお湯を中心から外へ円を描くように注ぐ",
        duration: 45,
        waterTarget: 50,
        hasValve: false,
      },
      {
        name: "第2投",
        instruction: "70g追加し合計120gに（甘み・酸味を調整）",
        duration: 45,
        waterTarget: 120,
        hasValve: false,
      },
      {
        name: "第3投",
        instruction: "60g追加し合計180gに",
        duration: 45,
        waterTarget: 180,
        hasValve: false,
      },
      {
        name: "第4投",
        instruction: "60g追加し合計240gに",
        duration: 45,
        waterTarget: 240,
        hasValve: false,
      },
      {
        name: "第5投",
        instruction: "60g追加し合計300gに（濃さを調整）",
        duration: 30,
        waterTarget: 300,
        hasValve: false,
      },
    ],
  },

  // ─── 粕谷哲 4:6メソッド（アイス） ──────────────
  {
    id: "kasuya-46-ice",
    name: "4:6メソッド",
    subname: "アイス",
    icon: "🧊",
    tag: "ice",
    tagLabel: "Ice",
    totalTime: 180,   // 3:00
    waterTotal: 170,  // 注湯量（別途サーバーに氷130gを用意）
    coffeeGrams: 20,
    iceGrams: 130,
    steps: [
      {
        name: "準備",
        instruction: "サーバーに氷130gをセットしておく",
        duration: 10,
        waterTarget: 0,
        hasValve: false,
      },
      {
        name: "第1投（蒸らし）",
        instruction: "34gのお湯を中心から外へ円を描くように注ぐ",
        duration: 40,
        waterTarget: 34,
        hasValve: false,
      },
      {
        name: "第2投",
        instruction: "50g追加し合計84gに",
        duration: 40,
        waterTarget: 84,
        hasValve: false,
      },
      {
        name: "第3投",
        instruction: "30g追加し合計114gに",
        duration: 35,
        waterTarget: 114,
        hasValve: false,
      },
      {
        name: "第4投",
        instruction: "28g追加し合計142gに",
        duration: 35,
        waterTarget: 142,
        hasValve: false,
      },
      {
        name: "第5投",
        instruction: "28g追加し合計170gに。氷が溶けたら完成",
        duration: 20,
        waterTarget: 170,
        hasValve: false,
      },
    ],
  },

  // ─── Hario Switch ハイブリッド（ホット）最新版 ──
  {
    id: "switch-hybrid-hot",
    name: "Switch ハイブリッド",
    subname: "ホット",
    icon: "🔄",
    tag: "switch",
    tagLabel: "Switch",
    totalTime: 240,   // 4:00
    waterTotal: 300,
    coffeeGrams: 20,
    steps: [
      {
        name: "蒸らし（バルブ閉）",
        instruction: "50gのお湯を全体に均一に注ぐ",
        duration: 45,
        waterTarget: 50,
        hasValve: true,
        valveOpen: false,
        valveDesc: "浸漬のためバルブを閉じる",
      },
      {
        name: "第1投（バルブ開）",
        instruction: "70g追加し合計120gに。中心から外へ円を描くように",
        duration: 45,
        waterTarget: 120,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けて透過式で抽出",
      },
      {
        name: "第2投（バルブ開）",
        instruction: "80g追加し合計200gに。この間にお湯を70〜80℃に冷ます",
        duration: 40,
        waterTarget: 200,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブは開けたまま。お湯を冷ます",
      },
      {
        name: "第3投（バルブ閉）",
        instruction: "冷ましたお湯100gを追加し合計300gに",
        duration: 35,
        waterTarget: 300,
        hasValve: true,
        valveOpen: false,
        valveDesc: "バルブを閉じて浸漬に切り替え",
      },
      {
        name: "ドリップ（バルブ開）",
        instruction: "バルブを開けてサーバーへ落とす",
        duration: 75,
        waterTarget: 300,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けてドリップ開始",
      },
    ],
  },

  // ─── Hario Switch ハイブリッド（アイス）最新版 ──
  {
    id: "switch-hybrid-ice",
    name: "Switch ハイブリッド",
    subname: "アイス",
    icon: "❄️",
    tag: "ice",
    tagLabel: "Ice",
    totalTime: 210,   // 3:30
    waterTotal: 140,  // 注湯量（別途サーバーに氷80gを用意）
    coffeeGrams: 20,
    iceGrams: 80,
    steps: [
      {
        name: "準備",
        instruction: "サーバーに氷80gをセットしておく",
        duration: 10,
        waterTarget: 0,
        hasValve: false,
      },
      {
        name: "第1投（バルブ開）",
        instruction: "30gのお湯を注ぐ",
        duration: 30,
        waterTarget: 30,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けて透過式で抽出",
      },
      {
        name: "第2投（バルブ開）",
        instruction: "40g追加し合計70gに。この間にお湯を70℃に冷ます",
        duration: 70,
        waterTarget: 70,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブは開けたまま。お湯を70℃に冷ます",
      },
      {
        name: "第3投（バルブ閉）",
        instruction: "冷ました70℃のお湯70gを追加し合計140gに",
        duration: 30,
        waterTarget: 140,
        hasValve: true,
        valveOpen: false,
        valveDesc: "バルブを閉じて浸漬に切り替え",
      },
      {
        name: "ドリップ（バルブ開）",
        instruction: "バルブを開けて氷の上に落とす",
        duration: 70,
        waterTarget: 140,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けて氷の上へドリップ",
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
  brew: document.getElementById("screen-brew"),
  complete: document.getElementById("screen-complete"),
};

// Ready screen elements
const elReadyRecipeIcon = document.getElementById("ready-recipe-icon");
const elReadyRecipeTagLabel = document.getElementById("ready-recipe-tag-label");
const elReadyRecipeName = document.getElementById("ready-recipe-name");
const elReadyCoffee = document.getElementById("ready-coffee");
const elReadyWater = document.getElementById("ready-water");
const elReadyTime = document.getElementById("ready-time");
const elBtnReadyBack = document.getElementById("btn-ready-back");
const elBtnCoffeeMinus = document.getElementById("btn-coffee-minus");
const elBtnCoffeePlus = document.getElementById("btn-coffee-plus");
const elBtnStartBrewing = document.getElementById("btn-start-brewing");

// Countdown overlay elements
const elCountdownOverlay = document.getElementById("countdown-overlay");
const elCountdownOverlayNum = document.getElementById("countdown-overlay-num");
const elCountdownPingRing = document.getElementById("countdown-ping-ring");

const elRecipeTitle = document.getElementById("recipe-title-display");
const elStepLabel = document.getElementById("step-label-display");
const elProgressSegments = document.getElementById("progress-segments");
const elStepName = document.getElementById("step-name");
const elStepInstruction = document.getElementById("step-instruction");
const elGaugeFill = document.getElementById("gauge-fill");
const elGaugeWeightNum = document.getElementById("gauge-weight-num");
const elGaugeTime = document.getElementById("gauge-time");
const elGaugeTimerPill = document.getElementById("gauge-timer-pill");
const elValveCard = document.getElementById("valve-card");
const elValveIndicator = document.getElementById("valve-indicator");
const elRemainingFill = document.getElementById("remaining-fill");
const elTotalTimeLabel = document.getElementById("total-time-label");
const elBtnPause = document.getElementById("btn-pause");
const elBtnNext = document.getElementById("btn-next");
const elBtnReset = document.getElementById("btn-reset");
const elBtnBack = document.getElementById("btn-back");
const elRecipeList = document.getElementById("recipe-list");
const elRecipeModalOverlay = document.getElementById("recipe-modal-overlay");
const elRecipeModalSteps = document.getElementById("recipe-modal-steps");
const elBtnModalStartBrew = document.getElementById("btn-modal-start-brew");
const elBtnModalClose = document.getElementById("btn-modal-close");

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
      showToast("準備中！");
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

    const iceStr = recipe.iceGrams ? `<span>🧊 ${recipe.iceGrams}g</span>` : "";
    const nameDisplay = recipe.subname
      ? `${recipe.name} <span class="recipe-subname">${recipe.subname}</span>`
      : recipe.name;

    card.innerHTML = `
      <div class="recipe-card-icon">${recipe.icon}</div>
      <div class="recipe-card-info">
        <div class="recipe-card-name">${nameDisplay}</div>
        <div class="recipe-card-meta">
          <span>⏱ ${timeStr}</span>
          <span>💧 ${recipe.waterTotal}g</span>
          ${iceStr}
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
  // 初期比率を記憶（豆:水 = 1:ratio）
  state.waterRatio = recipe.waterTotal / recipe.coffeeGrams;

  // Update Ready Screen Info
  elReadyRecipeIcon.textContent = recipe.icon;
  elReadyRecipeName.textContent = recipe.name;
  if (elReadyRecipeTagLabel) elReadyRecipeTagLabel.textContent = recipe.name;
  elReadyCoffee.textContent = recipe.coffeeGrams;
  elReadyWater.textContent = recipe.waterTotal;

  const totalMin = Math.floor(recipe.totalTime / 60);
  const totalSec = recipe.totalTime % 60;
  elReadyTime.textContent = `${totalMin}:${totalSec.toString().padStart(2, "0")}`;

  showScreen("ready");
}

elBtnReadyBack.addEventListener("click", () => {
  hideRecipeModal();
  state.currentRecipe = null;
  showScreen("recipes");
});

// Coffee Beans +/- adjustment
if (elBtnCoffeeMinus && elBtnCoffeePlus) {
  function updateCoffeeAndWater(grams) {
    // 豆グラムを更新
    elReadyCoffee.textContent = grams;
    elReadyCoffee.classList.remove("bump");
    void elReadyCoffee.offsetWidth;
    elReadyCoffee.classList.add("bump");

    // 比率に基づいてお湯量を再計算（5ml単位で丸める）
    const newWater = Math.round((grams * state.waterRatio) / 5) * 5;
    state.currentRecipe.waterTotal = newWater;
    elReadyWater.textContent = newWater;
    elReadyWater.classList.remove("bump");
    void elReadyWater.offsetWidth;
    elReadyWater.classList.add("bump");
  }
  elBtnCoffeeMinus.addEventListener("click", () => {
    if (!state.currentRecipe) return;
    if (state.currentRecipe.coffeeGrams > 1) {
      state.currentRecipe.coffeeGrams--;
      updateCoffeeAndWater(state.currentRecipe.coffeeGrams);
    }
  });
  elBtnCoffeePlus.addEventListener("click", () => {
    if (!state.currentRecipe) return;
    state.currentRecipe.coffeeGrams++;
    updateCoffeeAndWater(state.currentRecipe.coffeeGrams);
  });
}

elBtnStartBrewing.addEventListener("click", () => {
  showRecipeModal(state.currentRecipe);
});


// =============================================
// RECIPE OVERVIEW MODAL
// =============================================
function showRecipeModal(recipe) {
  // ステップ一覧を動的生成
  elRecipeModalSteps.innerHTML = "";
  let elapsed = 0;
  recipe.steps.forEach((step, i) => {
    const start = elapsed;
    const end = elapsed + step.duration;
    elapsed = end;

    const row = document.createElement("div");
    row.className = "modal-step-row" + (i === 0 ? " active" : "");

    row.innerHTML = `
      <div class="modal-step-left">
        <div class="modal-step-num">${i + 1}</div>
        <div>
          <div class="modal-step-name">${step.name}</div>
          <div class="modal-step-time">${formatTime(start)} – ${formatTime(end)}</div>
        </div>
      </div>
      <div class="modal-step-water">
        <span class="modal-step-water-num">${step.waterTarget}</span><span class="modal-step-water-unit">g</span>
      </div>
    `;
    elRecipeModalSteps.appendChild(row);
  });

  elRecipeModalOverlay.style.display = "flex";
}

function hideRecipeModal() {
  elRecipeModalOverlay.style.display = "none";
}

elBtnModalClose.addEventListener("click", () => {
  hideRecipeModal();
});

elBtnModalStartBrew.addEventListener("click", () => {
  hideRecipeModal();
  startCountdown();
});

// =============================================
// COUNTDOWN
// =============================================
let countdownTimerId = null;

function startCountdown() {
  // Set up brew screen state behind the overlay
  state.currentStepIndex = 0;
  state.totalElapsed = 0;
  state.isPaused = true;
  buildProgressSegments();
  loadStep(0);

  // Show the brew screen
  showScreen("brew");

  // Show countdown overlay
  elCountdownOverlay.style.display = "flex";
  let count = 3;
  elCountdownOverlayNum.textContent = count;

  // Reset ring animation
  elCountdownPingRing.style.animation = "none";
  void elCountdownPingRing.offsetWidth;
  elCountdownPingRing.style.animation = "";

  clearInterval(countdownTimerId);
  countdownTimerId = setInterval(() => {
    count--;
    if (count > 0) {
      elCountdownOverlayNum.textContent = count;
      elCountdownPingRing.style.animation = "none";
      void elCountdownPingRing.offsetWidth;
      elCountdownPingRing.style.animation = "";
    } else {
      clearInterval(countdownTimerId);
      elCountdownOverlay.style.display = "none";
      beginBrewTimer();
    }
  }, 1000);
}

function beginBrewTimer() {
  state.brewStartTime = Date.now();
  state.isPaused = false;

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
  elStepLabel.textContent = `ステップ ${index + 1} / ${recipe.steps.length}`;

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
    if (step.valveOpen) {
      elValveIndicator.innerHTML = `
        <div class="valve-open-icon">
          <div class="v-bar"></div>
          <div class="v-leg v-leg-left"></div>
          <div class="v-leg v-leg-right"></div>
          <div class="v-flow"></div>
          <span class="material-symbols-outlined v-arrow">keyboard_arrow_down</span>
        </div>
        <span class="valve-status-text open">開（流出中）</span>
      `;
    } else {
      elValveIndicator.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4L12 16L20 4"/>
          <path d="M8 20H16"/>
        </svg>
        <span class="valve-status-text closed">閉じる</span>
      `;
    }
  } else {
    elValveCard.style.display = "none";
  }

  // Progress segments
  updateProgressSegments();

  // Update total time label
  const remaining = recipe.steps
    .slice(index)
    .reduce((a, s) => a + s.duration, 0);
  elTotalTimeLabel.textContent = `${formatTime(remaining)} 合計`;

  // Update gauge & timer display
  updateGauge(0);
  updateTimerDisplay();

}

// =============================================
// TIMER
// =============================================
function startTimer() {
  clearInterval(state.timerId);
  elBtnPause.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
    一時停止
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
        showToast(`✅ ステップ ${state.currentStepIndex + 1} 完了！`);
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
    再開
  `;
  elBtnPause.classList.add("paused");
  document.querySelector(".timer-dot")?.classList.add("paused");
}

function resumeTimer() {
  state.isPaused = false;
  elBtnPause.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
    一時停止
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

  showScreen("complete");

  document.getElementById("btn-new-brew").addEventListener("click", () => {
    state.currentRecipe = null;
    showScreen("recipes");
  }, { once: true });
}


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
