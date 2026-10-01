/* ============================================
   FITGUIDE — QUIZ ENGINE
============================================ */

const STEPS = [
  {
    id: 'bodyType',
    title: "What's your body type?",
    hint: 'Choose the one that best matches your natural frame.',
    type: 'choice',
    options: Object.entries(BODY_TYPES).map(([k, v]) => ({
      value: k, icon: v.emoji, label: v.name, desc: v.desc
    }))
  },
  {
    id: 'goal',
    title: "What's your main fitness goal?",
    hint: 'This will shape the entire plan.',
    type: 'choice',
    options: Object.entries(GOALS).map(([k, v]) => ({
      value: k, icon: v.emoji, label: v.name, desc: ''
    }))
  },
  {
    id: 'level',
    title: 'How experienced are you with exercise?',
    hint: 'Be honest — we design beginner plans that truly work.',
    type: 'choice',
    options: Object.entries(LEVELS).map(([k, v]) => ({
      value: k, icon: v.emoji, label: v.name, desc: v.desc
    }))
  },
  {
    id: 'dietPref',
    title: 'What is your dietary preference?',
    hint: 'Your meal plan will be built around this.',
    type: 'choice',
    options: Object.entries(DIET_PREFS).map(([k, v]) => ({
      value: k, icon: v.emoji, label: v.name, desc: ''
    }))
  },
  {
    id: 'age',
    title: 'How old are you?',
    hint: 'Helps us calculate your calorie needs accurately.',
    type: 'number',
    unit: 'years',
    placeholder: '25',
    min: 14, max: 80
  },
  {
    id: 'weight',
    title: 'What is your current weight?',
    hint: 'Used to estimate your daily calorie target.',
    type: 'number',
    unit: 'kg',
    placeholder: '65',
    min: 30, max: 250
  },
  {
    id: 'budget',
    title: "What's your monthly food budget?",
    hint: 'We will keep your meal plan within this range.',
    type: 'choice',
    options: [
      { value: '1500', icon: '💸', label: 'Under ₹1,500', desc: 'Tight budget — simple, nutritious meals' },
      { value: '3000', icon: '💰', label: '₹1,500 – ₹3,000', desc: 'Moderate — good variety' },
      { value: '5000', icon: '💎', label: '₹3,000 – ₹5,000', desc: 'Flexible — more protein options' },
      { value: '8000', icon: '🥇', label: '₹5,000+', desc: 'Unrestricted — premium ingredients' }
    ]
  }
];

let currentStep = 0;
const answers = {};

function init() {
  renderStep();
}

function renderStep() {
  const step = STEPS[currentStep];
  const pct = ((currentStep + 1) / STEPS.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('stepLabel').textContent = `Step ${currentStep + 1} of ${STEPS.length}`;

  const body = document.getElementById('quizBody');
  let html = `<div class="quiz-question"><h3>${step.title}</h3><p>${step.hint}</p>`;

  if (step.type === 'choice') {
    html += `<div class="quiz-options">`;
    step.options.forEach(opt => {
      const sel = answers[step.id] === opt.value ? ' selected' : '';
      html += `
        <div class="quiz-option${sel}" data-value="${opt.value}" onclick="selectOption(this,'${step.id}','${opt.value}')">
          <span class="opt-icon">${opt.icon}</span>
          <div><div class="opt-label">${opt.label}</div>${opt.desc ? `<div class="opt-desc">${opt.desc}</div>` : ''}</div>
        </div>`;
    });
    html += `</div>`;
  } else {
    html += `<div class="quiz-number-input">
      <input type="number" id="numInput" min="${step.min}" max="${step.max}"
        placeholder="${step.placeholder}"
        value="${answers[step.id] || ''}"
        oninput="onNumberInput(this,'${step.id}')" />
      <span class="unit">${step.unit}</span>
    </div>`;
  }

  html += `<div class="quiz-nav">
    ${currentStep > 0 ? `<button class="btn-back" onclick="prevStep()">← Back</button>` : '<span></span>'}
    <button class="btn-next" id="btnNext" onclick="nextStep()" ${!answers[step.id] ? 'disabled' : ''}>
      ${currentStep === STEPS.length - 1 ? 'Build My Plan 🚀' : 'Next →'}
    </button>
  </div></div>`;

  body.innerHTML = html;
  if (step.type === 'number') {
    document.getElementById('numInput').focus();
  }
}

function selectOption(el, stepId, value) {
  document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  answers[stepId] = value;
  document.getElementById('btnNext').removeAttribute('disabled');
}

function onNumberInput(el, stepId) {
  const v = parseInt(el.value);
  const step = STEPS[currentStep];
  if (v >= step.min && v <= step.max) {
    answers[stepId] = v;
    document.getElementById('btnNext').removeAttribute('disabled');
  } else {
    delete answers[stepId];
    document.getElementById('btnNext').setAttribute('disabled', true);
  }
}

function nextStep() {
  if (!answers[STEPS[currentStep].id]) return;
  if (currentStep < STEPS.length - 1) {
    currentStep++;
    renderStep();
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
  } else {
    buildPlan(answers);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

// Init
document.addEventListener('DOMContentLoaded', init);
