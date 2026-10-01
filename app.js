// ===== QUIZ STATE =====
const answers = {
  name: '', goal: '', body_type: '', experience: '',
  equipment: '', diet_pref: '', budget: ''
};
let currentStep = 1;
const totalSteps = 7;

// ===== STEP NAVIGATION =====
function nextStep(step) {
  // Validate
  if (step === 1) {
    const nameVal = document.getElementById('q-name').value.trim();
    if (!nameVal) { alert('Please enter your name!'); return; }
    answers.name = nameVal;
  }
  const fieldMap = { 2:'goal', 3:'body_type', 4:'experience', 5:'equipment', 6:'diet_pref' };
  if (fieldMap[step] && !answers[fieldMap[step]]) {
    alert('Please make a selection to continue.');
    return;
  }

  // Hide current
  document.querySelector(`.step[data-step="${step}"]`).classList.remove('active');
  currentStep = step + 1;
  // Show next
  const nextEl = document.querySelector(`.step[data-step="${currentStep}"]`);
  if (nextEl) nextEl.classList.add('active');

  // Progress
  const pct = Math.round((currentStep - 1) / totalSteps * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('step-label').textContent = `Step ${currentStep} of ${totalSteps}`;
}

function selectChoice(el, field) {
  const parent = el.closest('.choice-grid, .body-type-grid');
  parent.querySelectorAll('.choice, .body-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  answers[field] = el.dataset.val;
}

// ===== GENERATE PLAN =====
function generatePlan() {
  if (!answers.budget) { alert('Please select your budget to continue.'); return; }

  // Build plan
  const { goal, body_type, experience, equipment, diet_pref, budget, name } = answers;

  // Scroll & show
  document.getElementById('quiz-card').style.display = 'none';
  const planSection = document.getElementById('plan-section');
  planSection.classList.remove('hidden');

  // Header
  document.getElementById('plan-greeting').textContent = `${name.toUpperCase()}'S FITPATH PLAN`;
  document.getElementById('plan-subheading').textContent =
    `Tailored for a ${body_type} body type · Goal: ${goal.replace(/_/g,' ')} · ${experience}`;

  const tagsEl = document.getElementById('plan-tags');
  tagsEl.innerHTML = [
    body_type.toUpperCase(),
    goal.replace(/_/g,' ').toUpperCase(),
    experience.toUpperCase(),
    equipment.replace(/_/g,' ').toUpperCase(),
    diet_pref.replace(/_/g,' ').toUpperCase()
  ].map(t => `<span class="plan-tag">${t}</span>`).join('');

  // Workout
  renderWorkout(goal, experience, equipment);
  // Diet
  renderDiet(diet_pref, goal);
  // Budget
  renderBudget(budget);
  // Tips
  renderTips(body_type);

  planSection.scrollIntoView({ behavior: 'smooth' });
}

// ===== WORKOUT RENDER =====
function renderWorkout(goal, experience, equipment) {
  const schedule = SCHEDULES[goal]?.[experience] || SCHEDULES['stay_fit']['beginner'];
  const db = EXERCISE_DB[equipment] || EXERCISE_DB['no_equipment'];

  let tableHTML = `<table class="workout-table">
    <thead><tr><th>Day</th><th>Focus</th><th>Exercises</th></tr></thead><tbody>`;

  schedule.forEach(day => {
    let exList = '';
    if (day.type === 'rest') {
      exList = `<span class="rest-badge">Rest & Recovery</span>`;
    } else if (day.type === 'light') {
      exList = `<span class="rest-badge">Light Activity / Mobility</span>`;
    } else {
      const exercises = [];
      (day.muscles || []).forEach(muscle => {
        const muscleExs = db[muscle] || [];
        muscleExs.slice(0, 2).forEach(ex => {
          if (!exercises.find(e => e.name === ex.name)) exercises.push(ex);
        });
      });
      exList = `<ul class="exercise-list">${exercises.slice(0, 5).map(e => `<li><strong>${e.name}</strong> — ${e.sets}</li>`).join('')}</ul>`;
    }

    const badge = day.type === 'rest' ? `<span class="rest-badge">${day.day}</span>` :
                  `<span class="day-badge">${day.day}</span>`;

    tableHTML += `<tr><td>${badge}</td><td><strong>${day.focus}</strong></td><td>${exList}</td></tr>`;
  });

  tableHTML += '</tbody></table>';

  // Exercise form guide
  const allExercises = [];
  ['upper','lower','core','cardio'].forEach(m => {
    (db[m] || []).forEach(ex => {
      if (!allExercises.find(e => e.name === ex.name)) allExercises.push(ex);
    });
  });

  let guideHTML = '<div class="ex-cards">';
  guideHTML += '<p style="font-size:14px;color:#7a8194;margin-bottom:12px;">📖 <strong>Exercise Form Guide</strong> — How to do each exercise correctly:</p>';
  allExercises.slice(0, 8).forEach(ex => {
    guideHTML += `<div class="ex-card">
      <div class="ex-card-name">${ex.name} <span class="ex-badge">${ex.sets}</span></div>
      <div class="ex-card-how">✅ ${ex.how}</div>
    </div>`;
  });
  guideHTML += '</div>';

  document.getElementById('workout-schedule').innerHTML = tableHTML + guideHTML;
}

// ===== DIET RENDER =====
function renderDiet(diet_pref, goal) {
  const dietKey = diet_pref === 'no_restriction' ? 'no_restriction' :
                  diet_pref === 'vegetarian' ? 'vegetarian' :
                  diet_pref === 'vegan' ? 'vegan' : 'high_protein';

  const meals = DIETS[dietKey]?.[goal] || DIETS['no_restriction']['stay_fit'];

  let html = '<div class="meal-grid">';
  meals.forEach(meal => {
    html += `<div class="meal-row">
      <div class="meal-time">${meal.time}<br>${meal.name}</div>
      <div class="meal-content">
        <strong>${meal.food}</strong>
        <span>Preparation: Simple cook/mix/blend</span>
      </div>
      <div class="meal-macro">${meal.macro.split('·').map((m,i) => i===0 ? m : `<br><span class="macro-highlight">${m.trim()}</span>`).join('')}</div>
    </div>`;
  });
  html += '</div>';

  // Water reminder
  html += `<div style="margin-top:16px;padding:12px 14px;background:#e8f4fd;border-radius:10px;font-size:13px;color:#1a6fa0;">
    💧 <strong>Daily Water Goal:</strong> Drink at least 2.5–3.5 litres of water every day. Start with 2 glasses on waking up.
  </div>`;

  document.getElementById('diet-plan').innerHTML = html;
}

// ===== BUDGET RENDER =====
function renderBudget(budget) {
  const data = BUDGETS[budget] || BUDGETS['medium'];

  let html = `<p style="font-size:14px;color:#7a8194;margin-bottom:16px;">${data.title}</p>`;
  html += '<div class="budget-grid">';
  data.items.forEach(item => {
    html += `<div class="budget-item">
      <div class="item-name">${item.name}</div>
      <div class="item-cost">${item.cost}</div>
      <div class="item-qty">${item.qty}</div>
    </div>`;
  });
  html += '</div>';
  html += `<div class="budget-total"><span>Monthly Total:</span><span>${data.total}</span></div>`;

  html += `<div style="margin-top:14px;padding:12px 14px;background:#f7f8fc;border-radius:10px;font-size:13px;color:#3a3f4a;line-height:1.6;">
    💡 <strong>Shopping Tips:</strong> Buy vegetables from local markets (sabzi mandi) — 30–40% cheaper than supermarkets. Buy eggs, dal, and rice in bulk to save money. Seasonal fruits are always cheaper and fresher.
  </div>`;

  document.getElementById('budget-plan').innerHTML = html;
}

// ===== TIPS RENDER =====
function renderTips(body_type) {
  const bodyTips = TIPS[body_type] || TIPS['mesomorph'];
  const allTips = [...bodyTips, ...GENERAL_TIPS.slice(0, 3)];

  const html = '<ul class="tips-list">' +
    allTips.map(t => `<li><span class="tip-icon">${t.icon}</span><span>${t.text}</span></li>`).join('') +
    '</ul>';

  document.getElementById('tips-plan').innerHTML = html;
}

// ===== UTILITIES =====
function printPlan() { window.print(); }

function resetQuiz() {
  // Reset answers
  Object.keys(answers).forEach(k => answers[k] = '');
  currentStep = 1;

  // Hide plan
  document.getElementById('plan-section').classList.add('hidden');
  document.getElementById('quiz-card').style.display = 'block';

  // Reset steps
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.toggle('active', i === 0);
  });
  document.querySelectorAll('.choice, .body-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('q-name').value = '';
  document.getElementById('progress-fill').style.width = '14%';
  document.getElementById('step-label').textContent = 'Step 1 of 7';

  document.querySelector('.quiz-wrap').scrollIntoView({ behavior: 'smooth' });
}
