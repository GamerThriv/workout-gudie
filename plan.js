/* ============================================
   FITGUIDE — PLAN GENERATOR & RENDERER
============================================ */

function calcCalories(weight, age, goal) {
  // Harris-Benedict BMR (assuming average activity)
  const bmr = 10 * weight + 6.25 * (170) - 5 * age + 5; // male formula as base
  const tdee = bmr * 1.375; // light activity multiplier
  const delta = GOALS[goal].calories_delta;
  return Math.round(tdee + delta);
}

function buildPlan(ans) {
  const { bodyType, goal, level, dietPref, age, weight, budget } = ans;

  // Scroll to result
  document.getElementById('quizBody').innerHTML = `<div style="text-align:center;padding:3rem 0;">
    <div style="font-size:3rem;margin-bottom:1rem;">⚡</div>
    <p style="color:var(--lime);font-weight:600;">Building your personalised plan...</p>
  </div>`;

  setTimeout(() => {
    const workout = WORKOUTS[level][goal];
    const diet = (DIETS[dietPref] && DIETS[dietPref][goal]) ? DIETS[dietPref][goal] : DIETS['veg']['general'];
    const targetCals = calcCalories(parseInt(weight), parseInt(age), goal);
    const tips = TIPS[goal];
    const budgetNum = parseInt(budget);

    // Adjust budget items to user's budget
    const totalFoodCost = diet.budget.items.reduce((s, i) => s + i.cost, 0);
    const budgetNote = totalFoodCost <= budgetNum
      ? `✅ Your plan fits within your ₹${budgetNum.toLocaleString('en-IN')} budget!`
      : `💡 Your plan costs ~₹${totalFoodCost.toLocaleString('en-IN')}. Swap some items for seasonal produce to save.`;

    const bodyInfo = BODY_TYPES[bodyType];
    const goalInfo = GOALS[goal];
    const levelInfo = LEVELS[level];

    const resultHTML = `
      <div class="result-hero">
        <div class="result-hero-icon">${bodyInfo.emoji}${goalInfo.emoji}</div>
        <div class="result-hero-text">
          <h2>${levelInfo.name} ${goalInfo.name} Plan</h2>
          <p>${bodyInfo.name} body type · ${DIET_PREFS[dietPref].name} diet · ~${targetCals.toLocaleString()} kcal/day target</p>
          <p style="margin-top:.5rem;font-size:.85rem;color:var(--lime)">${bodyInfo.goal_hint}</p>
        </div>
      </div>

      <div class="result-grid">

        <!-- MACROS -->
        <div class="result-card">
          <h3><span class="card-icon">📊</span> Daily Nutrition Targets</h3>
          ${buildMacros(diet.macros, targetCals)}
        </div>

        <!-- TIPS -->
        <div class="result-card">
          <h3><span class="card-icon">💡</span> Beginner Tips</h3>
          <div class="tips-list">
            ${tips.map(t => `<div class="tip-item">${t}</div>`).join('')}
          </div>
        </div>

        <!-- WORKOUT SCHEDULE -->
        <div class="result-card full">
          <h3><span class="card-icon">🏋️</span> Weekly Workout Schedule</h3>
          ${buildSchedule(workout)}
        </div>

        <!-- MEAL PLAN -->
        <div class="result-card full">
          <h3><span class="card-icon">🥗</span> Daily Meal Plan (${DIET_PREFS[dietPref].name})</h3>
          <div class="meal-list">
            ${diet.meals.map(m => `
              <div class="meal-item">
                <div class="meal-time">${m.time}</div>
                <div>
                  <div class="meal-name">${m.name}</div>
                  <div class="meal-desc">${m.desc || ''}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <!-- BUDGET -->
        <div class="result-card full">
          <h3><span class="card-icon">💰</span> Monthly Diet Budget Estimate</h3>
          <div class="budget-hero">
            <span class="budget-amount">₹${totalFoodCost.toLocaleString('en-IN')}</span>
            <span class="budget-period">/ month</span>
          </div>
          <p style="font-size:.82rem;color:var(--lime);margin-bottom:1.2rem;">${budgetNote}</p>
          <div class="budget-breakdown">
            ${diet.budget.items.map(i => `
              <div class="budget-row">
                <span class="budget-item">${i.name}</span>
                <span class="budget-cost">₹${i.cost.toLocaleString('en-IN')}</span>
              </div>`).join('')}
            <div class="budget-row">
              <span>Total Monthly Estimate</span>
              <span>₹${totalFoodCost.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <p style="font-size:.76rem;color:var(--muted);margin-top:1rem;">*Prices based on average Indian market rates. Buying seasonal produce and cooking at home keeps costs lower.</p>
        </div>

      </div>

      <button class="btn-restart" onclick="restartQuiz()">↩ Start Over / Change Goals</button>
    `;

    document.getElementById('quizBody').innerHTML = '';
    const rs = document.getElementById('resultSection');
    rs.style.display = 'block';
    document.getElementById('resultContainer').innerHTML = resultHTML;
    document.querySelector('.quiz-section').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => rs.scrollIntoView({ behavior: 'smooth' }), 100);

    // Init tabs
    initTabs();
  }, 800);
}

function buildMacros(macros, targetCals) {
  const totalMacrosCal = macros.protein * 4 + macros.carbs * 4 + macros.fat * 9;
  const pPct = Math.round((macros.protein * 4 / totalMacrosCal) * 100);
  const cPct = Math.round((macros.carbs * 4 / totalMacrosCal) * 100);
  const fPct = Math.round((macros.fat * 9 / totalMacrosCal) * 100);

  return `<div>
    <div class="macro-row">
      <span class="macro-label">Calories</span>
      <span class="macro-val">${macros.calories} kcal</span>
      <div class="macro-bar-wrap"><div class="macro-bar" style="width:100%;background:var(--lime)"></div></div>
    </div>
    <div class="macro-row">
      <span class="macro-label">Protein</span>
      <span class="macro-val">${macros.protein}g</span>
      <div class="macro-bar-wrap"><div class="macro-bar" style="width:${pPct}%;background:#4ade80"></div></div>
    </div>
    <div class="macro-row">
      <span class="macro-label">Carbohydrates</span>
      <span class="macro-val">${macros.carbs}g</span>
      <div class="macro-bar-wrap"><div class="macro-bar" style="width:${cPct}%;background:#60a5fa"></div></div>
    </div>
    <div class="macro-row">
      <span class="macro-label">Fats</span>
      <span class="macro-val">${macros.fat}g</span>
      <div class="macro-bar-wrap"><div class="macro-bar" style="width:${fPct}%;background:#f59e0b"></div></div>
    </div>
    <p style="font-size:.77rem;color:var(--muted);margin-top:.8rem;">Protein ${pPct}% · Carbs ${cPct}% · Fat ${fPct}%</p>
  </div>`;
}

function buildSchedule(workout) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let tabsHTML = `<div class="week-tabs">`;
  days.forEach((d, i) => {
    tabsHTML += `<div class="week-tab ${i === 0 ? 'active' : ''}" onclick="switchTab(${i})">${d}</div>`;
  });
  tabsHTML += `</div>`;

  let plansHTML = '';
  workout.forEach((day, i) => {
    plansHTML += `<div class="day-plan ${i === 0 ? 'visible' : ''}" id="day-${i}">`;
    plansHTML += `<p style="color:var(--lime);font-weight:700;font-size:.85rem;margin-bottom:.8rem;">${day.label}</p>`;

    if (day.rest) {
      plansHTML += `<div class="day-rest"><span>🛌</span>${day.cardio || 'Rest and recover. Let your muscles repair.'}</div>`;
    } else {
      plansHTML += `<div class="exercise-list">`;
      day.exercises.forEach(ex => {
        plansHTML += `
          <div class="exercise-item">
            <span class="ex-icon">${ex.icon}</span>
            <div>
              <div class="ex-name">${ex.name}</div>
              <div class="ex-tip">${ex.tip}</div>
            </div>
            <span class="ex-sets">${ex.sets} × ${ex.reps}</span>
          </div>`;
      });
      plansHTML += `</div>`;
    }
    plansHTML += `</div>`;
  });

  return tabsHTML + plansHTML;
}

function initTabs() {
  // tabs already rendered with onclick
}

function switchTab(idx) {
  document.querySelectorAll('.week-tab').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.day-plan').forEach((p, i) => {
    p.classList.toggle('visible', i === idx);
  });
}

function restartQuiz() {
  document.getElementById('resultSection').style.display = 'none';
  document.getElementById('resultContainer').innerHTML = '';
  // Reset quiz
  currentStep = 0;
  Object.keys(answers).forEach(k => delete answers[k]);
  renderStep();
  document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}
