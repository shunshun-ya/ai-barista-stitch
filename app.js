// =============================================
// RECIPE DATA (built-in defaults)
// =============================================
const DEFAULT_RECIPES = [
  // ─── 粕谷哲 4:6メソッド（ホット）レシオ 1:16 ────
  {
    id: "kasuya-46-hot",
    name: "4:6メソッド",
    subname: "ホット",
    icon: "☕",
    tag: "method46",
    tagLabel: "4:6 Method",
    totalTime: 210,   // 3:30
    waterTotal: 320,  // 20g × 16
    coffeeGrams: 20,
    steps: [
      {
        name: "第1投（蒸らし）",
        instruction: "64gのお湯を中心から外へ円を描くように注ぐ",
        duration: 45,
        waterTarget: 64,
        hasValve: false,
      },
      {
        name: "第2投",
        instruction: "64g追加し合計128gに（甘み・酸味を調整）",
        duration: 45,
        waterTarget: 128,
        hasValve: false,
      },
      {
        name: "第3投",
        instruction: "64g追加し合計192gに",
        duration: 45,
        waterTarget: 192,
        hasValve: false,
      },
      {
        name: "第4投",
        instruction: "64g追加し合計256gに",
        duration: 45,
        waterTarget: 256,
        hasValve: false,
      },
      {
        name: "第5投",
        instruction: "64g追加し合計320gに（濃さを調整）",
        duration: 30,
        waterTarget: 320,
        hasValve: false,
      },
    ],
  },

  // ─── 粕谷哲 4:6メソッド（アイス）レシオ 1:10 ───
  // お湯のみ 20g × 10 = 200g
  {
    id: "kasuya-46-ice",
    name: "4:6メソッド",
    subname: "アイス",
    icon: "🧊",
    tag: "ice",
    tagLabel: "Ice",
    totalTime: 180,   // 3:00
    waterTotal: 200,  // 20g × 10
    coffeeGrams: 20,
    steps: [
      {
        name: "準備",
        instruction: "サーバーに氷をセットしておく",
        duration: 10,
        waterTarget: 0,
        hasValve: false,
      },
      {
        name: "第1投（蒸らし）",
        instruction: "40gのお湯を中心から外へ円を描くように注ぐ",
        duration: 40,
        waterTarget: 40,
        hasValve: false,
      },
      {
        name: "第2投",
        instruction: "40g追加し合計80gに",
        duration: 40,
        waterTarget: 80,
        hasValve: false,
      },
      {
        name: "第3投",
        instruction: "40g追加し合計120gに",
        duration: 35,
        waterTarget: 120,
        hasValve: false,
      },
      {
        name: "第4投",
        instruction: "40g追加し合計160gに",
        duration: 35,
        waterTarget: 160,
        hasValve: false,
      },
      {
        name: "第5投",
        instruction: "40g追加し合計200gに。氷が溶けたら完成",
        duration: 20,
        waterTarget: 200,
        hasValve: false,
      },
    ],
  },

  // ─── Hario Switch ハイブリッド（ホット）レシオ 1:16 ──
  {
    id: "switch-hybrid-hot",
    name: "Switch ハイブリッド",
    subname: "ホット",
    icon: "🔄",
    tag: "switch",
    tagLabel: "Switch",
    totalTime: 240,   // 4:00
    waterTotal: 320,  // 20g × 16
    coffeeGrams: 20,
    steps: [
      {
        name: "蒸らし（バルブ閉）",
        instruction: "55gのお湯を全体に均一に注ぐ",
        duration: 45,
        waterTarget: 55,
        hasValve: true,
        valveOpen: false,
        valveDesc: "浸漬のためバルブを閉じる",
      },
      {
        name: "第1投（バルブ開）",
        instruction: "75g追加し合計130gに。中心から外へ円を描くように",
        duration: 45,
        waterTarget: 130,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けて透過式で抽出",
      },
      {
        name: "第2投（バルブ開）",
        instruction: "85g追加し合計215gに。この間にお湯を70〜80℃に冷ます",
        duration: 40,
        waterTarget: 215,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブは開けたまま。お湯を冷ます",
      },
      {
        name: "第3投（バルブ閉）",
        instruction: "冷ましたお湯105gを追加し合計320gに",
        duration: 35,
        waterTarget: 320,
        hasValve: true,
        valveOpen: false,
        valveDesc: "バルブを閉じて浸漬に切り替え",
      },
      {
        name: "ドリップ（バルブ開）",
        instruction: "バルブを開けてサーバーへ落とす",
        duration: 75,
        waterTarget: 320,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けてドリップ開始",
      },
    ],
  },

  // ─── Hario Switch ハイブリッド（アイス）レシオ 1:10 ──
  // お湯のみ 20g × 10 = 200g
  {
    id: "switch-hybrid-ice",
    name: "Switch ハイブリッド",
    subname: "アイス",
    icon: "❄️",
    tag: "ice",
    tagLabel: "Ice",
    totalTime: 210,   // 3:30
    waterTotal: 200,  // 20g × 10
    coffeeGrams: 20,
    steps: [
      {
        name: "準備",
        instruction: "サーバーに氷をセットしておく",
        duration: 10,
        waterTarget: 0,
        hasValve: false,
      },
      {
        name: "第1投（バルブ開）",
        instruction: "40gのお湯を注ぐ",
        duration: 30,
        waterTarget: 40,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けて透過式で抽出",
      },
      {
        name: "第2投（バルブ開）",
        instruction: "60g追加し合計100gに。この間にお湯を70℃に冷ます",
        duration: 70,
        waterTarget: 100,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブは開けたまま。お湯を70℃に冷ます",
      },
      {
        name: "第3投（バルブ閉）",
        instruction: "冷ました70℃のお湯100gを追加し合計200gに",
        duration: 30,
        waterTarget: 200,
        hasValve: true,
        valveOpen: false,
        valveDesc: "バルブを閉じて浸漬に切り替え",
      },
      {
        name: "ドリップ（バルブ開）",
        instruction: "バルブを開けて氷の上に落とす",
        duration: 70,
        waterTarget: 200,
        hasValve: true,
        valveOpen: true,
        valveDesc: "バルブを開けて氷の上へドリップ",
      },
    ],
  },
];

// =============================================
// SUPABASE CONFIG
// =============================================
const SUPABASE_URL = 'https://gxkotngcouhekucjhzbh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4a290bmdjb3VoZWt1Y2poemJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NTc4NjUsImV4cCI6MjA5NzMzMzg2NX0.2FfzQGFT_Vzx7DTm2KtYfmdzoIbNy9KflQKVz85DzbU';

const supabaseClient = SUPABASE_URL.includes('YOUR_PROJECT')
  ? null
  : window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const RECIPE_STORAGE_KEY = 'aiBarista_recipes_v1';
let recipes = [];

function recipeToDb(recipe) {
  return {
    id: recipe.id,
    name: recipe.name,
    icon: recipe.icon,
    tag: recipe.tag,
    tag_label: recipe.tagLabel,
    total_time: recipe.totalTime,
    water_total: recipe.waterTotal,
    coffee_grams: recipe.coffeeGrams,
    steps: recipe.steps,
  };
}

function dbToRecipe(row) {
  return {
    id: row.id,
    name: row.name,
    icon: row.icon,
    tag: row.tag,
    tagLabel: row.tag_label,
    totalTime: row.total_time,
    waterTotal: row.water_total,
    coffeeGrams: row.coffee_grams,
    steps: row.steps,
  };
}

async function loadRecipes() {
  if (!supabaseClient) {
    try {
      const saved = localStorage.getItem(RECIPE_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_RECIPES.map(r => ({ ...r, steps: r.steps.map(s => ({ ...s })) }));
  }
  try {
    const { data, error } = await supabaseClient.from('recipes').select('*').order('created_at');
    if (error) throw error;
    if (!data || data.length === 0) {
      await supabaseClient.from('recipes').insert(DEFAULT_RECIPES.map(recipeToDb));
      return DEFAULT_RECIPES.map(r => ({ ...r, steps: r.steps.map(s => ({ ...s })) }));
    }
    return data.map(dbToRecipe);
  } catch (e) {
    console.error('Supabase load error:', e);
    showToast('データ読み込みに失敗しました');
    return DEFAULT_RECIPES.map(r => ({ ...r, steps: r.steps.map(s => ({ ...s })) }));
  }
}

async function upsertRecipe(recipe) {
  if (!supabaseClient) {
    try { localStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes)); } catch (e) {}
    return true;
  }
  const { error } = await supabaseClient.from('recipes').upsert(recipeToDb(recipe));
  if (error) { console.error(error); showToast('保存に失敗しました'); return false; }
  return true;
}

async function removeRecipeFromDb(id) {
  if (!supabaseClient) {
    try { localStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes)); } catch (e) {}
    return true;
  }
  const { error } = await supabaseClient.from('recipes').delete().eq('id', id);
  if (error) { console.error(error); showToast('削除に失敗しました'); return false; }
  return true;
}

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
  recipes.forEach((recipe) => {
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
      <div class="recipe-card-actions">
        <button class="card-action-btn" data-action="edit" aria-label="編集">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="card-action-btn delete" data-action="delete" aria-label="削除">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
      </div>
    `;

    card.querySelector('[data-action="edit"]').addEventListener("click", (e) => {
      e.stopPropagation();
      openRecipeEditor(recipe);
    });
    card.querySelector('[data-action="delete"]').addEventListener("click", (e) => {
      e.stopPropagation();
      deleteRecipe(recipe.id);
    });

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
  // 元のステップ湯量とトータル湯量を保存（グラム変更時のスケール計算用）
  state.originalWaterTotal = recipe.waterTotal;
  state.originalStepTargets = recipe.steps.map(s => s.waterTarget);

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

    // 各ステップの湯量も比例スケールで更新
    if (state.originalWaterTotal > 0) {
      const scale = newWater / state.originalWaterTotal;
      state.currentRecipe.steps.forEach((step, i) => {
        step.waterTarget = Math.round(state.originalStepTargets[i] * scale);
      });
    }
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
// RECIPE CRUD & EDITOR
// =============================================
let editingRecipeId = null;
let editorSteps = [];

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function openRecipeEditor(recipe = null) {
  editingRecipeId = recipe ? recipe.id : null;
  editorSteps = recipe
    ? recipe.steps.map(s => ({ ...s }))
    : [{ name: "", instruction: "", duration: 30, waterTarget: 0, hasValve: false, valveOpen: false, valveDesc: "" }];

  document.getElementById("modal-title").textContent = recipe ? "レシピを編集" : "新しいレシピ";
  document.getElementById("field-name").value = recipe ? recipe.name : "";
  document.getElementById("field-icon").value = recipe ? recipe.icon : "☕";
  document.getElementById("field-coffee").value = recipe ? recipe.coffeeGrams : 15;
  document.getElementById("field-water").value = recipe ? recipe.waterTotal : 200;

  renderEditorSteps();
  document.getElementById("modal-recipe-editor").classList.add("active");
  setTimeout(() => document.getElementById("field-name").focus(), 400);
}

function closeRecipeEditor() {
  document.getElementById("modal-recipe-editor").classList.remove("active");
}

function syncEditorStepsFromDOM() {
  document.querySelectorAll("#editor-steps-list .step-editor-card").forEach((card, i) => {
    if (!editorSteps[i]) return;
    editorSteps[i].name = card.querySelector('[data-field="name"]')?.value || "";
    editorSteps[i].instruction = card.querySelector('[data-field="instruction"]')?.value || "";
    editorSteps[i].duration = parseInt(card.querySelector('[data-field="duration"]')?.value) || 30;
    editorSteps[i].waterTarget = parseInt(card.querySelector('[data-field="waterTarget"]')?.value) || 0;
    editorSteps[i].hasValve = card.querySelector('[data-field="hasValve"]')?.checked || false;
    editorSteps[i].valveDesc = card.querySelector('[data-field="valveDesc"]')?.value || "";
    editorSteps[i].valveOpen = card.querySelector('[data-field="valveOpen"]')?.checked || false;
  });
}

function renderEditorSteps() {
  const container = document.getElementById("editor-steps-list");
  container.innerHTML = "";
  editorSteps.forEach((step, i) => {
    const card = document.createElement("div");
    card.className = "step-editor-card";
    card.innerHTML = `
      <div class="step-editor-header">
        <span class="step-editor-num">Step ${i + 1}</span>
        ${editorSteps.length > 1 ? `<button class="step-remove-btn" data-index="${i}" aria-label="削除">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>` : ""}
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">ステップ名</label>
          <input class="form-input" type="text" placeholder="例: Bloom" value="${escapeHtml(step.name)}" data-field="name">
        </div>
        <div class="form-group">
          <label class="form-label">時間 (秒)</label>
          <input class="form-input" type="number" min="1" value="${step.duration}" data-field="duration">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">指示</label>
        <input class="form-input" type="text" placeholder="例: 60gのお湯を注ぐ" value="${escapeHtml(step.instruction)}" data-field="instruction">
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">目標水量 (g)</label>
          <input class="form-input" type="number" min="0" value="${step.waterTarget}" data-field="waterTarget">
        </div>
        <div class="form-group">
          <label class="form-label">Switch バルブ</label>
          <label class="toggle-row">
            <span>バルブあり</span>
            <label class="toggle-switch" style="flex-shrink:0;">
              <input type="checkbox" ${step.hasValve ? "checked" : ""} data-field="hasValve">
              <span class="toggle-thumb"></span>
            </label>
          </label>
        </div>
      </div>
      ${step.hasValve ? `<div class="form-row-2">
        <div class="form-group">
          <label class="form-label">バルブの説明</label>
          <input class="form-input" type="text" placeholder="例: バルブを閉じる" value="${escapeHtml(step.valveDesc || "")}" data-field="valveDesc">
        </div>
        <div class="form-group">
          <label class="form-label">バルブ初期状態</label>
          <label class="toggle-row">
            <span>${step.valveOpen ? "Open" : "Closed"}</span>
            <label class="toggle-switch" style="flex-shrink:0;">
              <input type="checkbox" ${step.valveOpen ? "checked" : ""} data-field="valveOpen">
              <span class="toggle-thumb"></span>
            </label>
          </label>
        </div>
      </div>` : ""}
    `;
    card.querySelector(".step-remove-btn")?.addEventListener("click", () => {
      syncEditorStepsFromDOM();
      editorSteps.splice(i, 1);
      renderEditorSteps();
    });
    card.querySelector('[data-field="hasValve"]').addEventListener("change", () => {
      syncEditorStepsFromDOM();
      renderEditorSteps();
    });
    container.appendChild(card);
  });
}

function addEditorStep() {
  syncEditorStepsFromDOM();
  const prev = editorSteps[editorSteps.length - 1];
  editorSteps.push({ name: "", instruction: "", duration: 30, waterTarget: prev ? prev.waterTarget : 0, hasValve: false, valveOpen: false, valveDesc: "" });
  renderEditorSteps();
  setTimeout(() => { const b = document.querySelector(".modal-body"); b.scrollTo({ top: b.scrollHeight, behavior: "smooth" }); }, 50);
}

async function saveRecipeFromForm() {
  syncEditorStepsFromDOM();
  const name = document.getElementById("field-name").value.trim();
  const icon = document.getElementById("field-icon").value.trim() || "☕";
  const coffeeGrams = parseInt(document.getElementById("field-coffee").value) || 0;
  const waterTotal = parseInt(document.getElementById("field-water").value) || 0;

  if (!name) { showToast("レシピ名を入力してください"); document.getElementById("field-name").focus(); return; }
  if (!editorSteps.length) { showToast("ステップを1つ以上追加してください"); return; }

  const totalTime = editorSteps.reduce((a, s) => a + (parseInt(s.duration) || 0), 0);
  const id = editingRecipeId || `custom-${Date.now()}`;
  const existing = recipes.find(r => r.id === editingRecipeId);
  const recipe = {
    id, name, icon,
    tag: existing?.tag || "custom",
    tagLabel: existing?.tagLabel || "Custom",
    totalTime, waterTotal, coffeeGrams,
    steps: editorSteps.map(s => ({
      name: s.name || "Step", instruction: s.instruction || "",
      duration: parseInt(s.duration) || 30, waterTarget: parseInt(s.waterTarget) || 0,
      hasValve: !!s.hasValve, valveOpen: !!s.valveOpen, valveDesc: s.valveDesc || "",
    })),
  };

  if (editingRecipeId) {
    const idx = recipes.findIndex(r => r.id === editingRecipeId);
    if (idx !== -1) recipes[idx] = recipe;
  } else {
    recipes.push(recipe);
  }
  buildRecipeList();
  closeRecipeEditor();
  const ok = await upsertRecipe(recipe);
  if (ok) showToast(editingRecipeId ? "✅ レシピを更新しました" : "✅ レシピを追加しました");
}

async function deleteRecipe(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;
  if (!confirm(`「${recipe.name}」を削除しますか？`)) return;
  recipes = recipes.filter(r => r.id !== id);
  buildRecipeList();
  const ok = await removeRecipeFromDb(id);
  if (ok) showToast("🗑️ レシピを削除しました");
}

document.getElementById("btn-add-recipe").addEventListener("click", () => openRecipeEditor());
document.getElementById("btn-recipe-editor-close").addEventListener("click", closeRecipeEditor);
document.getElementById("btn-add-step").addEventListener("click", addEditorStep);
document.getElementById("btn-save-recipe").addEventListener("click", saveRecipeFromForm);
document.getElementById("modal-recipe-editor").addEventListener("click", e => { if (e.target === e.currentTarget) closeRecipeEditor(); });

// =============================================
// INIT
// =============================================
async function initApp() {
  showScreen("recipes");
  elRecipeList.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-light);font-size:14px;font-weight:500;">読み込み中...</div>';
  recipes = await loadRecipes();
  buildRecipeList();
}
initApp();
