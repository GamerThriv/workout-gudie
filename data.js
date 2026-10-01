// ===== EXERCISE DATABASE =====
const EXERCISE_DB = {
  // --- NO EQUIPMENT ---
  no_equipment: {
    upper: [
      { name: "Push-ups", sets: "3 x 10–15 reps", how: "Place hands shoulder-width apart, body straight from head to heel. Lower chest to floor, then push back up. Keep core tight. Beginner: do knee push-ups." },
      { name: "Tricep Dips (Chair)", sets: "3 x 10 reps", how: "Sit on edge of a sturdy chair, hands beside hips. Slide forward, bend elbows to 90°, then push back up. Keep back close to the chair." },
      { name: "Pike Push-ups", sets: "3 x 8 reps", how: "Start in downward dog (hips up high). Bend elbows to lower head toward floor, then press back up. Targets shoulders." },
      { name: "Diamond Push-ups", sets: "3 x 8 reps", how: "Form a diamond shape with thumbs and forefingers under chest. Lower and push up. Hits triceps hard." }
    ],
    lower: [
      { name: "Bodyweight Squats", sets: "3 x 15–20 reps", how: "Feet shoulder-width apart, toes slightly out. Lower until thighs are parallel to floor, knees tracking over toes. Chest up, weight in heels. Push through heels to stand." },
      { name: "Lunges", sets: "3 x 10 reps each leg", how: "Step forward, lower back knee toward floor. Keep front knee over ankle, not past toes. Push through front heel to return." },
      { name: "Glute Bridges", sets: "3 x 15 reps", how: "Lie on back, knees bent, feet flat. Push hips up by squeezing glutes. Hold for 1 second at top. Slowly lower." },
      { name: "Jump Squats", sets: "3 x 12 reps", how: "Squat down, then explode up, leave the ground. Land softly with knees slightly bent. Great for fat burning." }
    ],
    core: [
      { name: "Plank", sets: "3 x 30–45 sec", how: "Forearms on floor, elbows under shoulders, body straight. Don't let hips sag or rise. Breathe normally. Build up time gradually." },
      { name: "Crunches", sets: "3 x 20 reps", how: "Lie on back, knees bent, hands behind head lightly. Curl shoulders up using abs, not neck. Lower slowly. Don't pull on your neck." },
      { name: "Mountain Climbers", sets: "3 x 30 sec", how: "In push-up position, drive knees to chest alternately as fast as you can. Keep hips level. Great cardio + core combo." },
      { name: "Leg Raises", sets: "3 x 12 reps", how: "Lie flat, hands under lower back. Keep legs straight, raise to 90°, slowly lower. Don't let feet touch floor between reps." }
    ],
    cardio: [
      { name: "High Knees", sets: "3 x 30 sec", how: "Run in place, driving knees as high as possible. Pump arms. Keep a fast pace." },
      { name: "Burpees", sets: "3 x 8 reps", how: "From standing: squat down, kick legs back to push-up position, do a push-up, jump feet to hands, jump up clapping overhead. The ultimate full-body move." },
      { name: "Jump Jacks", sets: "3 x 30 sec", how: "Jump feet out while raising arms overhead, then jump back to start. Classic warm-up." }
    ]
  },

  // --- BASIC EQUIPMENT ---
  basic: {
    upper: [
      { name: "Dumbbell Bicep Curls", sets: "3 x 12 reps", how: "Stand with dumbbells at sides, palms forward. Curl up keeping elbows at sides. Squeeze at top, lower slowly. Don't swing your back." },
      { name: "Dumbbell Shoulder Press", sets: "3 x 10 reps", how: "Hold dumbbells at shoulder height, palms forward. Press straight up, don't lock elbows. Lower slowly to shoulders." },
      { name: "Resistance Band Rows", sets: "3 x 12 reps", how: "Step on band, hinge forward slightly, row handles to hip. Squeeze shoulder blades together. Keep back flat." },
      { name: "Dumbbell Chest Press (Floor)", sets: "3 x 12 reps", how: "Lie on floor, dumbbells above chest, elbows at 45°. Press up, don't lock elbows. Lower till elbows touch floor." }
    ],
    lower: [
      { name: "Goblet Squats", sets: "3 x 12 reps", how: "Hold dumbbell vertically at chest. Squat deep, elbows inside knees at bottom. Great for learning squat form." },
      { name: "Dumbbell Lunges", sets: "3 x 10 reps each", how: "Hold dumbbells at sides. Step forward, lower back knee to 1 inch off floor. Return and switch legs." },
      { name: "Romanian Deadlift (DB)", sets: "3 x 12 reps", how: "Hold dumbbells in front, hinge at hips keeping back flat, lower weights down shins until hamstring stretch. Drive hips forward to stand." }
    ],
    core: [
      { name: "Weighted Crunches", sets: "3 x 15 reps", how: "Hold a light dumbbell on chest and perform normal crunches. Adds resistance for better ab development." },
      { name: "Plank Row", sets: "3 x 8 reps each", how: "In push-up position with dumbbell in one hand. Row it to hip while balancing on other hand. Challenges core stability." }
    ],
    cardio: [
      { name: "Band Jump Squats", sets: "3 x 10 reps", how: "Stand on band, hold handles at shoulders. Squat and explosively jump up." },
      { name: "Dumbbell Thrusters", sets: "3 x 10 reps", how: "Hold dumbbells at shoulders, squat, then as you stand, press weights overhead. Squat + press in one move." }
    ]
  },

  // --- FULL GYM ---
  full_gym: {
    upper: [
      { name: "Bench Press", sets: "4 x 8–10 reps", how: "Lie on bench, grip slightly wider than shoulder-width. Unrack bar, lower to chest (touch, don't bounce), press straight up. Feet flat on floor." },
      { name: "Lat Pulldown", sets: "4 x 10 reps", how: "Grip bar wider than shoulders, palms forward. Pull bar to top of chest, leading with elbows. Lean slightly back. Squeeze lats." },
      { name: "Seated Cable Row", sets: "3 x 12 reps", how: "Sit upright, row handle to lower abdomen. Squeeze shoulder blades at the end. Don't lean back." },
      { name: "Overhead Press", sets: "4 x 8 reps", how: "Bar at shoulder level. Press straight up, push head through at top. Lower to shoulders, not chest. Keep core braced." },
      { name: "Dumbbell Flyes", sets: "3 x 12 reps", how: "On bench, hold dumbbells above chest, slight bend in elbows. Open arms wide like a hug, feel chest stretch. Bring back together." }
    ],
    lower: [
      { name: "Barbell Squat", sets: "4 x 8–10 reps", how: "Bar on traps (high or low bar). Feet shoulder-width, toes out. Squat deep, knees tracking toes. Drive heels into floor to stand. Keep chest up." },
      { name: "Leg Press", sets: "4 x 12 reps", how: "Feet shoulder-width on platform. Lower sled until knees near chest (90°+). Press back, don't lock knees." },
      { name: "Romanian Deadlift", sets: "3 x 10 reps", how: "Hold bar in front. Hinge at hips keeping back flat, lower bar down shins. Feel hamstring stretch. Drive hips to stand." },
      { name: "Leg Curl (Machine)", sets: "3 x 12 reps", how: "Lie face down on machine. Curl heels to glutes. Squeeze hamstrings, lower slowly." },
      { name: "Calf Raises", sets: "4 x 20 reps", how: "Stand on edge of step (or flat). Rise onto toes, full extension. Lower past neutral for full stretch. Slow and controlled." }
    ],
    core: [
      { name: "Cable Crunches", sets: "3 x 15 reps", how: "Kneel at cable machine, rope behind head. Crunch down, bringing elbows toward knees. Focus on abs contracting, not pulling with arms." },
      { name: "Ab Wheel Rollout", sets: "3 x 8 reps", how: "Kneel, roll wheel forward as far as you can keeping back flat. Pull abs to roll back. Start small range, build up." },
      { name: "Hanging Leg Raises", sets: "3 x 10 reps", how: "Hang from pull-up bar. Raise legs to 90° (or higher). Controlled lower. Don't swing." }
    ],
    cardio: [
      { name: "Treadmill Intervals", sets: "20 min", how: "2 min walk, 1 min run/sprint. Repeat. More effective than steady-state cardio for fat loss." },
      { name: "Rowing Machine", sets: "15 min", how: "Push with legs first, then lean back, then pull arms. Reverse to return: arms, body, legs. 60% legs, 20% back, 20% arms." }
    ]
  }
};

// ===== WEEKLY SCHEDULE TEMPLATES =====
const SCHEDULES = {
  lose_fat: {
    beginner: [
      { day: "Monday", focus: "Full Body + Cardio", type: "workout", muscles: ["upper", "lower", "core", "cardio"] },
      { day: "Tuesday", focus: "Rest / Light Walk", type: "rest" },
      { day: "Wednesday", focus: "Full Body + Cardio", type: "workout", muscles: ["upper", "lower", "core", "cardio"] },
      { day: "Thursday", focus: "Rest / Stretch", type: "rest" },
      { day: "Friday", focus: "Full Body + Cardio", type: "workout", muscles: ["upper", "lower", "core", "cardio"] },
      { day: "Saturday", focus: "30 min Brisk Walk or Yoga", type: "light" },
      { day: "Sunday", focus: "Rest & Recover", type: "rest" }
    ],
    intermediate: [
      { day: "Monday", focus: "Upper Body + Core", type: "workout", muscles: ["upper", "core"] },
      { day: "Tuesday", focus: "Lower Body + Cardio", type: "workout", muscles: ["lower", "cardio"] },
      { day: "Wednesday", focus: "Active Recovery (Walk / Yoga)", type: "light" },
      { day: "Thursday", focus: "Upper Body + Cardio", type: "workout", muscles: ["upper", "cardio"] },
      { day: "Friday", focus: "Lower Body + Core", type: "workout", muscles: ["lower", "core"] },
      { day: "Saturday", focus: "HIIT Circuit", type: "workout", muscles: ["cardio", "core"] },
      { day: "Sunday", focus: "Full Rest", type: "rest" }
    ],
    advanced: [
      { day: "Monday", focus: "Chest & Triceps + HIIT", type: "workout", muscles: ["upper", "cardio"] },
      { day: "Tuesday", focus: "Back & Biceps + Core", type: "workout", muscles: ["upper", "core"] },
      { day: "Wednesday", focus: "Legs + Cardio", type: "workout", muscles: ["lower", "cardio"] },
      { day: "Thursday", focus: "Shoulders + Core", type: "workout", muscles: ["upper", "core"] },
      { day: "Friday", focus: "Full Body HIIT", type: "workout", muscles: ["cardio", "lower", "core"] },
      { day: "Saturday", focus: "Active Recovery", type: "light" },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ]
  },
  build_muscle: {
    beginner: [
      { day: "Monday", focus: "Full Body (Push Focus)", type: "workout", muscles: ["upper", "lower"] },
      { day: "Tuesday", focus: "Rest", type: "rest" },
      { day: "Wednesday", focus: "Full Body (Pull Focus)", type: "workout", muscles: ["upper", "core"] },
      { day: "Thursday", focus: "Rest", type: "rest" },
      { day: "Friday", focus: "Full Body (Legs + Core)", type: "workout", muscles: ["lower", "core"] },
      { day: "Saturday", focus: "Light Walk", type: "light" },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ],
    intermediate: [
      { day: "Monday", focus: "Push (Chest, Shoulder, Triceps)", type: "workout", muscles: ["upper"] },
      { day: "Tuesday", focus: "Pull (Back, Biceps)", type: "workout", muscles: ["upper"] },
      { day: "Wednesday", focus: "Legs + Core", type: "workout", muscles: ["lower", "core"] },
      { day: "Thursday", focus: "Rest", type: "rest" },
      { day: "Friday", focus: "Push Day 2", type: "workout", muscles: ["upper"] },
      { day: "Saturday", focus: "Pull Day 2 + Core", type: "workout", muscles: ["upper", "core"] },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ],
    advanced: [
      { day: "Monday", focus: "Chest + Triceps", type: "workout", muscles: ["upper"] },
      { day: "Tuesday", focus: "Back + Biceps", type: "workout", muscles: ["upper"] },
      { day: "Wednesday", focus: "Legs (Quads + Calves)", type: "workout", muscles: ["lower"] },
      { day: "Thursday", focus: "Shoulders + Core", type: "workout", muscles: ["upper", "core"] },
      { day: "Friday", focus: "Legs (Hamstrings + Glutes)", type: "workout", muscles: ["lower", "core"] },
      { day: "Saturday", focus: "Arms + Lagging Muscles", type: "workout", muscles: ["upper"] },
      { day: "Sunday", focus: "Rest & Recover", type: "rest" }
    ]
  },
  stay_fit: {
    beginner: [
      { day: "Monday", focus: "Full Body Circuit", type: "workout", muscles: ["upper", "lower", "core"] },
      { day: "Tuesday", focus: "Rest / Walk", type: "rest" },
      { day: "Wednesday", focus: "Cardio + Core", type: "workout", muscles: ["cardio", "core"] },
      { day: "Thursday", focus: "Rest", type: "rest" },
      { day: "Friday", focus: "Full Body Circuit", type: "workout", muscles: ["upper", "lower", "core"] },
      { day: "Saturday", focus: "Fun Activity (Sports, Swim, Cycle)", type: "light" },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ],
    intermediate: [
      { day: "Monday", focus: "Upper Body", type: "workout", muscles: ["upper", "core"] },
      { day: "Tuesday", focus: "Cardio 30 min", type: "workout", muscles: ["cardio"] },
      { day: "Wednesday", focus: "Lower Body", type: "workout", muscles: ["lower", "core"] },
      { day: "Thursday", focus: "Rest", type: "rest" },
      { day: "Friday", focus: "Full Body", type: "workout", muscles: ["upper", "lower", "cardio"] },
      { day: "Saturday", focus: "Yoga / Mobility", type: "light" },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ],
    advanced: [
      { day: "Monday", focus: "Push + Cardio", type: "workout", muscles: ["upper", "cardio"] },
      { day: "Tuesday", focus: "Pull + Core", type: "workout", muscles: ["upper", "core"] },
      { day: "Wednesday", focus: "Legs + HIIT", type: "workout", muscles: ["lower", "cardio"] },
      { day: "Thursday", focus: "Active Recovery", type: "light" },
      { day: "Friday", focus: "Full Body Circuit", type: "workout", muscles: ["upper", "lower", "core", "cardio"] },
      { day: "Saturday", focus: "Cardio + Mobility", type: "workout", muscles: ["cardio"] },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ]
  },
  gain_weight: {
    beginner: [
      { day: "Monday", focus: "Full Body Strength", type: "workout", muscles: ["upper", "lower"] },
      { day: "Tuesday", focus: "Rest & Eat", type: "rest" },
      { day: "Wednesday", focus: "Full Body Strength", type: "workout", muscles: ["upper", "lower", "core"] },
      { day: "Thursday", focus: "Rest & Eat", type: "rest" },
      { day: "Friday", focus: "Full Body Strength", type: "workout", muscles: ["upper", "lower", "core"] },
      { day: "Saturday", focus: "Light Activity", type: "light" },
      { day: "Sunday", focus: "Rest & Recover", type: "rest" }
    ],
    intermediate: [
      { day: "Monday", focus: "Push (Heavy)", type: "workout", muscles: ["upper"] },
      { day: "Tuesday", focus: "Pull (Heavy)", type: "workout", muscles: ["upper"] },
      { day: "Wednesday", focus: "Legs (Heavy)", type: "workout", muscles: ["lower"] },
      { day: "Thursday", focus: "Rest", type: "rest" },
      { day: "Friday", focus: "Push + Core", type: "workout", muscles: ["upper", "core"] },
      { day: "Saturday", focus: "Pull + Legs", type: "workout", muscles: ["upper", "lower"] },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ],
    advanced: [
      { day: "Monday", focus: "Chest + Triceps", type: "workout", muscles: ["upper"] },
      { day: "Tuesday", focus: "Back + Biceps", type: "workout", muscles: ["upper"] },
      { day: "Wednesday", focus: "Legs (Squat Focus)", type: "workout", muscles: ["lower"] },
      { day: "Thursday", focus: "Shoulders + Traps", type: "workout", muscles: ["upper", "core"] },
      { day: "Friday", focus: "Legs (Deadlift Focus)", type: "workout", muscles: ["lower", "core"] },
      { day: "Saturday", focus: "Arms + Weak Points", type: "workout", muscles: ["upper"] },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ]
  },
  improve_stamina: {
    beginner: [
      { day: "Monday", focus: "20 min Walk-Jog + Core", type: "workout", muscles: ["cardio", "core"] },
      { day: "Tuesday", focus: "Rest", type: "rest" },
      { day: "Wednesday", focus: "Body Circuit + Cardio", type: "workout", muscles: ["upper", "lower", "cardio"] },
      { day: "Thursday", focus: "Rest / Light Walk", type: "rest" },
      { day: "Friday", focus: "25 min Run + Core", type: "workout", muscles: ["cardio", "core"] },
      { day: "Saturday", focus: "Fun Cardio (Swim, Cycle, Dance)", type: "light" },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ],
    intermediate: [
      { day: "Monday", focus: "Interval Run + Upper Body", type: "workout", muscles: ["cardio", "upper"] },
      { day: "Tuesday", focus: "Lower Body Strength", type: "workout", muscles: ["lower", "core"] },
      { day: "Wednesday", focus: "30 min Continuous Run", type: "workout", muscles: ["cardio"] },
      { day: "Thursday", focus: "Rest / Yoga", type: "rest" },
      { day: "Friday", focus: "HIIT Circuit", type: "workout", muscles: ["cardio", "core", "lower"] },
      { day: "Saturday", focus: "Long Moderate Run (40 min)", type: "workout", muscles: ["cardio"] },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ],
    advanced: [
      { day: "Monday", focus: "Speed Intervals + Upper Strength", type: "workout", muscles: ["cardio", "upper"] },
      { day: "Tuesday", focus: "Lower Strength + Core", type: "workout", muscles: ["lower", "core"] },
      { day: "Wednesday", focus: "Tempo Run 45 min", type: "workout", muscles: ["cardio"] },
      { day: "Thursday", focus: "Active Recovery", type: "light" },
      { day: "Friday", focus: "HIIT + Full Body", type: "workout", muscles: ["cardio", "upper", "lower"] },
      { day: "Saturday", focus: "Long Run 60 min", type: "workout", muscles: ["cardio"] },
      { day: "Sunday", focus: "Rest", type: "rest" }
    ]
  }
};

// ===== DIET PLANS =====
const DIETS = {
  no_restriction: {
    lose_fat: [
      { time: "7:00 AM", name: "Breakfast", food: "3 egg omelette with veggies + black coffee", macro: "~350 kcal · 25g protein" },
      { time: "10:30 AM", name: "Morning Snack", food: "1 banana + a handful of almonds (10)", macro: "~200 kcal · 5g protein" },
      { time: "1:00 PM", name: "Lunch", food: "2 chapatis + 1 cup dal + salad + curd", macro: "~500 kcal · 22g protein" },
      { time: "4:00 PM", name: "Pre-Workout", food: "1 cup green tea + 1 boiled egg", macro: "~90 kcal · 7g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Grilled chicken (150g) + 1 cup brown rice + steamed veggies", macro: "~520 kcal · 40g protein" },
      { time: "9:00 PM", name: "Night Snack", food: "1 cup warm milk or curd", macro: "~120 kcal · 6g protein" }
    ],
    build_muscle: [
      { time: "7:00 AM", name: "Breakfast", food: "5 egg whites + 2 yolks omelette + 2 whole wheat toast", macro: "~480 kcal · 38g protein" },
      { time: "10:00 AM", name: "Morning Snack", food: "Banana + peanut butter (1 tbsp) + milk", macro: "~320 kcal · 12g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Chicken breast (200g) + 1.5 cups rice + dal + salad", macro: "~650 kcal · 50g protein" },
      { time: "4:30 PM", name: "Pre-Workout", food: "Banana + 2 boiled eggs", macro: "~220 kcal · 15g protein" },
      { time: "7:00 PM", name: "Post-Workout", food: "Paneer/Chicken (150g) + 1 cup rice + veggies", macro: "~580 kcal · 42g protein" },
      { time: "9:00 PM", name: "Night Protein", food: "1 glass full-fat milk + 4 almonds", macro: "~200 kcal · 8g protein" }
    ],
    gain_weight: [
      { time: "7:00 AM", name: "Breakfast", food: "4 eggs any style + 3 slices bread + 1 glass whole milk", macro: "~620 kcal · 40g protein" },
      { time: "10:00 AM", name: "Mid-Morning", food: "Peanut butter sandwich + banana + juice", macro: "~430 kcal · 14g protein" },
      { time: "1:00 PM", name: "Lunch", food: "2 cups rice + chicken curry (200g) + dal + curd", macro: "~800 kcal · 55g protein" },
      { time: "4:00 PM", name: "Snack", food: "Trail mix (nuts + raisins) + 1 glass milk", macro: "~380 kcal · 12g protein" },
      { time: "7:00 PM", name: "Dinner", food: "3 chapatis + mutton or paneer (200g) + sabzi", macro: "~750 kcal · 48g protein" },
      { time: "9:30 PM", name: "Night Meal", food: "Oats with milk + banana + honey", macro: "~320 kcal · 10g protein" }
    ],
    stay_fit: [
      { time: "7:30 AM", name: "Breakfast", food: "Oats porridge + 2 boiled eggs + green tea", macro: "~380 kcal · 22g protein" },
      { time: "11:00 AM", name: "Snack", food: "Seasonal fruit + a handful of nuts", macro: "~180 kcal · 4g protein" },
      { time: "1:30 PM", name: "Lunch", food: "2 chapatis + mix veg curry + dal + curd", macro: "~520 kcal · 20g protein" },
      { time: "4:30 PM", name: "Snack", food: "Roasted chickpeas or makhana (fox nuts)", macro: "~140 kcal · 7g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Chicken or fish (150g) + 1 cup rice/quinoa + veggies", macro: "~480 kcal · 38g protein" }
    ],
    improve_stamina: [
      { time: "7:00 AM", name: "Pre-Run Snack", food: "Banana + 1 date + water", macro: "~130 kcal · 1g protein" },
      { time: "8:30 AM", name: "Post-Run Breakfast", food: "Oats + milk + boiled eggs (2) + fruit", macro: "~460 kcal · 24g protein" },
      { time: "1:00 PM", name: "Lunch", food: "1.5 cup rice + dal + chicken (150g) + salad", macro: "~580 kcal · 42g protein" },
      { time: "4:00 PM", name: "Energy Snack", food: "Energy bar / banana + peanut butter", macro: "~260 kcal · 8g protein" },
      { time: "7:00 PM", name: "Dinner", food: "Chapati (2) + dal makhani + paneer sabzi + curd", macro: "~540 kcal · 28g protein" }
    ]
  },

  vegetarian: {
    lose_fat: [
      { time: "7:00 AM", name: "Breakfast", food: "Moong dal chilla (3) + mint chutney + green tea", macro: "~280 kcal · 18g protein" },
      { time: "10:30 AM", name: "Snack", food: "Apple + 10 almonds", macro: "~170 kcal · 4g protein" },
      { time: "1:00 PM", name: "Lunch", food: "2 chapatis + chana dal + cucumber raita + salad", macro: "~490 kcal · 22g protein" },
      { time: "4:00 PM", name: "Pre-Workout", food: "1 cup buttermilk + 1 fruit", macro: "~130 kcal · 4g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Paneer bhurji (150g) + 1 cup quinoa + stir-fry veggies", macro: "~510 kcal · 32g protein" },
      { time: "9:00 PM", name: "Night", food: "Warm turmeric milk (haldi doodh)", macro: "~130 kcal · 4g protein" }
    ],
    build_muscle: [
      { time: "7:00 AM", name: "Breakfast", food: "Paneer paratha (2) + curd 1 cup + lassi", macro: "~580 kcal · 36g protein" },
      { time: "10:00 AM", name: "Snack", food: "Greek yogurt + banana + chia seeds", macro: "~300 kcal · 16g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Rajma rice (1.5 cup) + paneer sabzi + dal", macro: "~680 kcal · 38g protein" },
      { time: "4:30 PM", name: "Pre-Workout", food: "Paneer (100g) + 1 banana", macro: "~320 kcal · 22g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Tofu stir-fry + 1 cup rice + steamed broccoli + lentil soup", macro: "~560 kcal · 34g protein" },
      { time: "9:30 PM", name: "Night", food: "Milk (300ml) + 6 almonds", macro: "~230 kcal · 9g protein" }
    ],
    gain_weight: [
      { time: "7:00 AM", name: "Breakfast", food: "Peanut butter toast (3) + 2 eggs / paneer bhurji + milk", macro: "~620 kcal · 34g protein" },
      { time: "10:00 AM", name: "Snack", food: "Dry fruits mix (50g) + banana + lassi", macro: "~420 kcal · 10g protein" },
      { time: "1:00 PM", name: "Lunch", food: "3 chapatis + soya chunks curry + dal + curd (1.5 cup)", macro: "~780 kcal · 42g protein" },
      { time: "4:00 PM", name: "Snack", food: "Avocado toast + 1 glass milk", macro: "~380 kcal · 12g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Paneer tikka (200g) + 2 cups rice + mix dal", macro: "~750 kcal · 46g protein" }
    ],
    stay_fit: [
      { time: "7:30 AM", name: "Breakfast", food: "Poha with peanuts + curd + green tea", macro: "~320 kcal · 14g protein" },
      { time: "11:00 AM", name: "Snack", food: "Mixed fruits bowl + handful of walnuts", macro: "~200 kcal · 5g protein" },
      { time: "1:30 PM", name: "Lunch", food: "Dal khichdi + raita + papad + salad", macro: "~480 kcal · 18g protein" },
      { time: "4:00 PM", name: "Snack", food: "Roasted makhana with ghee + herbal tea", macro: "~150 kcal · 4g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Paneer + mixed veg sabzi + 2 chapatis + dal", macro: "~520 kcal · 26g protein" }
    ],
    improve_stamina: [
      { time: "7:00 AM", name: "Pre-Workout", food: "1 banana + 1 date + water", macro: "~130 kcal · 1g protein" },
      { time: "8:30 AM", name: "Post-Workout Breakfast", food: "Moong dal chilla + curd + fruit", macro: "~400 kcal · 22g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Rajma + 1.5 cup rice + curd + salad", macro: "~560 kcal · 24g protein" },
      { time: "4:30 PM", name: "Snack", food: "Peanut butter (1 tbsp) + banana + milk", macro: "~280 kcal · 10g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Chickpea curry + quinoa 1 cup + salad", macro: "~500 kcal · 22g protein" }
    ]
  },

  vegan: {
    lose_fat: [
      { time: "7:00 AM", name: "Breakfast", food: "Oats with almond milk + chia seeds + berries", macro: "~280 kcal · 10g protein" },
      { time: "10:30 AM", name: "Snack", food: "Apple + peanut butter (1 tbsp)", macro: "~180 kcal · 5g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Lentil soup (masoor dal) + brown rice 1 cup + salad", macro: "~470 kcal · 22g protein" },
      { time: "4:00 PM", name: "Snack", food: "Handful mixed nuts + 1 fruit", macro: "~180 kcal · 4g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Tofu scramble + roasted veggies + 1 cup quinoa", macro: "~490 kcal · 28g protein" },
      { time: "9:00 PM", name: "Night", food: "Chamomile tea + 4 walnuts", macro: "~80 kcal · 2g protein" }
    ],
    build_muscle: [
      { time: "7:00 AM", name: "Breakfast", food: "Soy milk smoothie + 2 bananas + oats + nut butter", macro: "~540 kcal · 28g protein" },
      { time: "10:00 AM", name: "Snack", food: "Trail mix (nuts, seeds, dried fruits) + soy milk", macro: "~380 kcal · 12g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Tempeh stir-fry (200g) + 1.5 cup brown rice + veggies", macro: "~640 kcal · 38g protein" },
      { time: "4:30 PM", name: "Pre-Workout", food: "Banana + 2 tbsp peanut butter", macro: "~260 kcal · 8g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Chickpea curry + quinoa 1 cup + steamed broccoli", macro: "~580 kcal · 30g protein" },
      { time: "9:30 PM", name: "Night", food: "Soy milk 300ml + 1 banana", macro: "~240 kcal · 10g protein" }
    ],
    gain_weight: [
      { time: "7:00 AM", name: "Breakfast", food: "Peanut butter banana oat smoothie (high cal) + toast", macro: "~600 kcal · 24g protein" },
      { time: "10:00 AM", name: "Snack", food: "Avocado on toast + hummus + juice", macro: "~420 kcal · 10g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Rajma + 2 cups rice + roasted tofu + salad", macro: "~780 kcal · 36g protein" },
      { time: "4:00 PM", name: "Snack", food: "Dry fruits + dark chocolate 30g + coconut milk", macro: "~400 kcal · 8g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Soya chunks curry + 3 chapatis (wheat) + dal", macro: "~720 kcal · 40g protein" }
    ],
    stay_fit: [
      { time: "7:30 AM", name: "Breakfast", food: "Upma with vegetables + coconut chutney + green tea", macro: "~320 kcal · 10g protein" },
      { time: "11:00 AM", name: "Snack", food: "Mixed seeds (pumpkin + sunflower) + fruit", macro: "~180 kcal · 7g protein" },
      { time: "1:30 PM", name: "Lunch", food: "Chana masala + 1 cup rice + salad", macro: "~500 kcal · 20g protein" },
      { time: "4:00 PM", name: "Snack", food: "Roasted chickpeas + herbal tea", macro: "~160 kcal · 8g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Tofu + mixed veg stir-fry + quinoa 1 cup", macro: "~480 kcal · 26g protein" }
    ],
    improve_stamina: [
      { time: "7:00 AM", name: "Pre-Run", food: "Banana + 2 dates + water", macro: "~140 kcal · 1g protein" },
      { time: "8:30 AM", name: "Breakfast", food: "Smoothie bowl: oats + almond milk + seeds + fruit", macro: "~420 kcal · 14g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Lentil dal + 1.5 cup rice + roasted tofu + salad", macro: "~560 kcal · 28g protein" },
      { time: "4:30 PM", name: "Snack", food: "Energy balls (oats + peanut butter + dates)", macro: "~280 kcal · 8g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Black bean curry + 2 whole wheat chapatis + salad", macro: "~500 kcal · 22g protein" }
    ]
  },

  high_protein: {
    lose_fat: [
      { time: "7:00 AM", name: "Breakfast", food: "5 egg whites + 1 yolk scrambled + 1 toast + black coffee", macro: "~310 kcal · 32g protein" },
      { time: "10:00 AM", name: "Snack", food: "Greek yogurt (200g) + 10 almonds", macro: "~220 kcal · 18g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Grilled chicken (200g) + quinoa 1 cup + broccoli", macro: "~520 kcal · 52g protein" },
      { time: "4:30 PM", name: "Pre-Workout", food: "2 boiled eggs + 1 fruit", macro: "~200 kcal · 14g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Fish / Paneer (200g) + salad + low-carb veggies", macro: "~420 kcal · 40g protein" },
      { time: "9:00 PM", name: "Night", food: "Cottage cheese (paneer 100g) + cinnamon", macro: "~180 kcal · 18g protein" }
    ],
    build_muscle: [
      { time: "6:30 AM", name: "Early Protein", food: "2 whole eggs + protein shake (if available)", macro: "~320 kcal · 35g protein" },
      { time: "9:00 AM", name: "Breakfast", food: "Chicken breast (150g) + oats + banana", macro: "~490 kcal · 46g protein" },
      { time: "12:30 PM", name: "Lunch", food: "Tuna/Chicken (200g) + 1.5 cup rice + veggies", macro: "~640 kcal · 58g protein" },
      { time: "4:00 PM", name: "Pre-Workout", food: "Greek yogurt + banana + nut butter", macro: "~340 kcal · 20g protein" },
      { time: "7:00 PM", name: "Post-Workout", food: "Chicken/Fish (200g) + sweet potato + broccoli", macro: "~580 kcal · 50g protein" },
      { time: "9:30 PM", name: "Night", food: "Paneer 150g or egg whites 4 + milk", macro: "~260 kcal · 28g protein" }
    ],
    gain_weight: [
      { time: "7:00 AM", name: "Breakfast", food: "6 eggs (any style) + 3 slices bread + milk 400ml", macro: "~700 kcal · 55g protein" },
      { time: "10:00 AM", name: "Snack", food: "Chicken leg piece + 1 banana + nuts", macro: "~420 kcal · 32g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Mutton/Chicken (250g) + 2 cups rice + dal + curd", macro: "~880 kcal · 65g protein" },
      { time: "4:30 PM", name: "Pre-Workout", food: "Eggs (3 boiled) + peanut butter toast", macro: "~380 kcal · 28g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Fish (200g) + 3 chapatis + paneer sabzi", macro: "~780 kcal · 58g protein" },
      { time: "10:00 PM", name: "Night", food: "Milk 400ml + 6 almonds + banana", macro: "~360 kcal · 14g protein" }
    ],
    stay_fit: [
      { time: "7:30 AM", name: "Breakfast", food: "3 eggs + oats + fruits + green tea", macro: "~420 kcal · 28g protein" },
      { time: "11:00 AM", name: "Snack", food: "Greek yogurt + seeds + 1 fruit", macro: "~220 kcal · 16g protein" },
      { time: "1:30 PM", name: "Lunch", food: "Chicken/Paneer (180g) + 1 cup rice + dal + salad", macro: "~560 kcal · 44g protein" },
      { time: "4:30 PM", name: "Snack", food: "Boiled eggs (2) + roasted chickpeas", macro: "~220 kcal · 18g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Fish/Tofu (180g) + steamed veggies + 1 chapati", macro: "~420 kcal · 36g protein" }
    ],
    improve_stamina: [
      { time: "6:30 AM", name: "Pre-Run", food: "Banana + 1 boiled egg", macro: "~160 kcal · 7g protein" },
      { time: "8:00 AM", name: "Post-Run Breakfast", food: "4 eggs + oats + milk + fruit", macro: "~520 kcal · 38g protein" },
      { time: "1:00 PM", name: "Lunch", food: "Chicken breast (200g) + 1.5 cup rice + mixed dal + salad", macro: "~640 kcal · 54g protein" },
      { time: "4:00 PM", name: "Snack", food: "Greek yogurt + granola + berries", macro: "~300 kcal · 18g protein" },
      { time: "7:30 PM", name: "Dinner", food: "Grilled fish (200g) + sweet potato + broccoli", macro: "~480 kcal · 44g protein" }
    ]
  }
};

// ===== BUDGET DATA =====
const BUDGETS = {
  low: {
    title: "Budget-Friendly (₹1,500–₹2,500/month)",
    items: [
      { name: "Eggs (30 eggs)", cost: "₹210", qty: "Essential protein" },
      { name: "Dal / Lentils (3 kg)", cost: "₹180", qty: "Moong, masoor, chana" },
      { name: "Rice / Atta (5 kg each)", cost: "₹350", qty: "Main carbs" },
      { name: "Seasonal Veggies", cost: "₹400", qty: "Spinach, beans, carrots" },
      { name: "Bananas (40 pcs)", cost: "₹120", qty: "Pre/post workout" },
      { name: "Curd / Milk (monthly)", cost: "₹360", qty: "Calcium + protein" },
      { name: "Groundnuts / Peanut Butter", cost: "₹200", qty: "Healthy fats" },
      { name: "Spices, Oil, Tea", cost: "₹180", qty: "Cooking essentials" }
    ],
    total: "₹2,000"
  },
  medium: {
    title: "Medium Budget (₹2,500–₹4,500/month)",
    items: [
      { name: "Chicken (4 kg/month)", cost: "₹600", qty: "Lean protein" },
      { name: "Eggs (45 eggs)", cost: "₹315", qty: "Daily protein" },
      { name: "Paneer (1.5 kg)", cost: "₹450", qty: "Veg protein" },
      { name: "Dal + Legumes (4 kg)", cost: "₹250", qty: "Chana, rajma, moong" },
      { name: "Brown Rice / Quinoa (3 kg)", cost: "₹380", qty: "Complex carbs" },
      { name: "Oats (2 kg)", cost: "₹260", qty: "Breakfast staple" },
      { name: "Seasonal Fruits & Veggies", cost: "₹700", qty: "Vitamins & fiber" },
      { name: "Milk / Curd (monthly)", cost: "₹480", qty: "Dairy protein" },
      { name: "Almonds / Mixed Nuts (500g)", cost: "₹380", qty: "Healthy snack" },
      { name: "Cooking Essentials", cost: "₹185", qty: "Oil, spices, tea" }
    ],
    total: "₹4,000"
  },
  high: {
    title: "Flexible Budget (₹4,500+/month)",
    items: [
      { name: "Chicken Breast (5 kg)", cost: "₹750", qty: "Premium lean protein" },
      { name: "Fish / Tuna (2 kg)", cost: "₹600", qty: "Omega-3 rich" },
      { name: "Paneer + Tofu (2 kg)", cost: "₹700", qty: "Versatile protein" },
      { name: "Eggs (60 eggs)", cost: "₹420", qty: "Daily protein" },
      { name: "Greek Yogurt (8 cups)", cost: "₹480", qty: "Protein-rich snack" },
      { name: "Quinoa + Brown Rice (4 kg)", cost: "₹520", qty: "Quality carbs" },
      { name: "Oats + Muesli (2 kg)", cost: "₹340", qty: "Breakfast" },
      { name: "Premium Fruits (mango, avocado)", cost: "₹600", qty: "Micronutrients" },
      { name: "Organic Veggies", cost: "₹700", qty: "Clean eating" },
      { name: "Mixed Nuts + Seeds (1 kg)", cost: "₹680", qty: "Chia, flax, almonds" },
      { name: "Peanut / Almond Butter", cost: "₹350", qty: "Healthy fats" },
      { name: "Cooking + Misc", cost: "₹360", qty: "Ghee, olive oil, spices" }
    ],
    total: "₹6,500"
  }
};

// ===== TIPS DATABASE =====
const TIPS = {
  ectomorph: [
    { icon: "🍽️", text: "Eat MORE than you think you need. Your fast metabolism burns calories quickly. Always be in a calorie surplus to grow." },
    { icon: "⏰", text: "Never skip meals. Aim for 5–6 small meals a day. Set reminders if you forget to eat." },
    { icon: "💪", text: "Focus on compound movements (squats, presses, rows). These recruit the most muscle and trigger the most growth." },
    { icon: "😴", text: "Sleep is your secret weapon. Growth hormone is released during sleep — aim for 8+ hours every night." },
    { icon: "🥤", text: "Add calorie-dense snacks: nuts, peanut butter, whole milk, banana shakes. Small volumes, big calories." }
  ],
  mesomorph: [
    { icon: "⚖️", text: "You respond well to training. Keep workouts consistent and progressive — increase weight or reps every 1–2 weeks." },
    { icon: "🔄", text: "Change your workout routine every 8–10 weeks to avoid plateaus. Your body adapts quickly." },
    { icon: "🥗", text: "Keep diet clean but don't obsess. Your body handles both bulking and cutting well. Cycle between them every 8–12 weeks." },
    { icon: "📸", text: "Track progress with photos and measurements, not just the scale. You may gain muscle while losing fat at the same time." },
    { icon: "💧", text: "Stay well hydrated. Drink at least 3 litres of water daily, more on workout days." }
  ],
  endomorph: [
    { icon: "🏃", text: "Add 20–30 min cardio after strength training, 3–4x per week. This helps combat your slower metabolism." },
    { icon: "🚫", text: "Reduce refined carbs (white rice, maida, sugar, processed foods). Replace with complex carbs and vegetables." },
    { icon: "🍽️", text: "Eat smaller, more frequent meals. This keeps metabolism active and prevents overeating." },
    { icon: "💧", text: "Drink water before every meal. It reduces appetite naturally and helps digestion." },
    { icon: "📆", text: "Consistency over intensity. Don't crash diet — sustainable small changes beat extreme diets every time." }
  ]
};

const GENERAL_TIPS = [
  { icon: "🌅", text: "Start every morning with 2 glasses of water before anything else. Hydration kickstarts your metabolism." },
  { icon: "📏", text: "Track your progress weekly — measure waist, weight, and take photos. The mirror tells more than the scale." },
  { icon: "🧘", text: "Warm up for 5–10 minutes before every workout. This prevents injury and improves performance." },
  { icon: "🥛", text: "Consume protein within 45 minutes after your workout. This is the ideal window for muscle recovery." },
  { icon: "📵", text: "Avoid your phone 30 min before bed. Better sleep = better recovery = better results." }
];
