const premiumExercises = [4, 5, 6];
const exercises = [
  {
    id: 1,
    title: "Daily Routine",
    text: `
Every day, I ___ (1) up at six o’clock.
Then, I go to school ___ (2) bike.
In the afternoon, I help my parents ___ (3) the housework.
In the evening, I usually ___ (4) TV.
    `,
    questions: [
      {
        id: 1,
        options: { A: "wake", B: "get", C: "stand", D: "put" },
        answer: "B"
      },
      {
        id: 2,
        options: { A: "in", B: "on", C: "by", D: "with" },
        answer: "C"
      },
      {
        id: 3,
        options: { A: "do", B: "does", C: "doing", D: "did" },
        answer: "A"
      },
      {
        id: 4,
        options: { A: "see", B: "watch", C: "look", D: "hear" },
        answer: "B"
      }
    ]
  },

  {
    id: 2,
    title: "Learning English",
    text: `
  Learning English is very important for students today. English helps us ___ (1)
  with people from different countries and understand foreign cultures. 
  To learn English well, we should practice ___ (2) 
  every day and not be afraid of making mistakes. The more we practice,
  the ___ (3) our English will become.
    `,
    questions: [
      {
        id: 1,
        options: { A: "communication", B: "communicate ", C: "communicating", D: "communicated" },
        answer: "B"
      },
      {
        id: 2,
        options: { A: "speak", B: "speaks", C: "speaking ", D: "spoke" },
        answer: "C"
      },
      {
        id: 3,
        options: { A: "good", B: "better ", C: "best", D: "well" },
        answer: "B"
      },
    ]
  },
  {
    id: 3,
    title: "A Healthy Lifestyle",
    text: `
To stay healthy, we should eat ___ (1) food and exercise regularly. 
We should also drink enough water and ___ (2) up early every day. 
Playing sports helps us become stronger and more active. 
If we have a healthy lifestyle, we will feel ___ (3) and study better at school.
    `,
    questions: [
      {
        id: 1,
        options: { A: "junk", B: "fast", C: "healthy ", D: "dirty" },
        answer: "C"
      },
      {
        id: 2,
        options: { A: "get ", B: "wake", C: "stand", D: "take" },
        answer: "A"
      },
      {
        id: 3,
        options: { A: "tired", B: "weak", C: "happy ", D: "bored" },
        answer: "C"
      },

    ]
  },
  {
    id: 4,
    title: "PAST SIMPLE",
    text: `
Yesterday, my class ___ (1) a picnic in the park.
We ___ (2) there by bus and ___ (3) many interesting games.
My best friend ___ (4) a lot of photos, and our teacher ___ (5) us very happy.
    `,
    questions: [
      {
        id: 1,
        options: { A: "has", B: "have", C: "had", D: "having" },
        answer: "C"
      },
      {
        id: 2,
        options: { A: "go", B: "went", C: "going", D: "gone" },
        answer: "B"
      },
      {
        id: 3,
        options: { A: "play", B: "plays", C: "playing", D: "played" },
        answer: "D"
      },
      {
        id: 4,
        options: { A: "take", B: "takes", C: "took ", D: "taking" },
        answer: "C"
      },
      {
        id: 5,
        options: { A: "makes", B: "made ", C: "make", D: "making" },
        answer: "B"
      }
    ]
  },
  {
    id: 5,
    title: "PRESENT CONTINUOUS",
    text: `
It is 7 p.m. now. My family ___ (1) dinner together in the kitchen.
My mother ___ (2) soup, and my father ___ (3) TV in the living room.
I ___ (4) my homework, while my sister ___ (5) music in her bedroom.
    `,
    questions: [
      {
        id: 1,
        options: { A: "is having", B: "has", C: "having", D: "are having" },
        answer: "D"
      },
      {
        id: 2,
        options: { A: "cooks", B: "is cooking ", C: "cooked", D: "cooking" },
        answer: "B"
      },
      {
        id: 3,
        options: { A: "watches", B: "watch", C: "is watching ", D: "watched" },
        answer: "C"
      },
      {
        id: 4,
        options: { A: "do", B: "did", C: " am doing ", D: "doing " },
        answer: "C"
      },
      {
        id: 5,
        options: { A: "listens", B: "listened ", C: "is listening to", D: "listening" },
        answer: "C"
      }
    ]
  }, {
    id: 6,
    title: " FIRST CONDITIONAL",
    text: `
If it ___ (1) tomorrow, we ___ (2) at home and study together.
If you ___ (3) hard, you ___ (4) good marks in the final test.
Our teacher says that if we ___ (5) careful, we ___ (6) mistakes in our exams.
    `,
    questions: [
      {
        id: 1,
        options: { A: "will rain", B: "raining", C: "rains ", D: "rained" },
        answer: "C"
      },
      {
        id: 2,
        options: { A: "stay", B: "stayed", C: "staying", D: "will stay" },
        answer: "B"
      },
      {
        id: 3,
        options: { A: "study ", B: "will study", C: "studied", D: "studying" },
        answer: "A"
      },
      {
        id: 4,
        options: { A: "get", B: "getting", C: "got ", D: "will get " },
        answer: "D"
      },
      {
        id: 5,
        options: { A: "are ", B: "will be ", C: "were", D: "being" },
        answer: "A"
      },
      {
        id: 6,
        options: { A: "make", B: "will make", C: "made ", D: "making" },
        answer: "B"
      }
    ]
  }
];
const exerciseSelect = document.getElementById("exerciseSelect");
// ===== TẠO DANH SÁCH BÀI TẬP =====
exercises.forEach((ex, i) => {
  const option = document.createElement("option");
  option.value = i;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isPremiumUser = currentUser?.isPremium;

  if (premiumExercises.includes(ex.id) && !isPremiumUser) {
    option.textContent = ex.title + " (Premium)";
    option.disabled = true;
  } else {
    option.textContent = ex.title;
  }

  exerciseSelect.appendChild(option);
});

exerciseSelect.addEventListener("change", e => {
  currentIndex = Number(e.target.value);
  current = exercises[currentIndex];

  index = 0;
  userAnswers = {};
  isChecked = false;
  resultBox.innerHTML = "";

  textBox.innerHTML = current.text;
  renderQuestion();
});
// ===== LẤY PHẦN TỬ =====
const textBox = document.getElementById("exerciseText");
const questionBox = document.getElementById("questions");
const resultBox = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let current = exercises[currentIndex];
let index = 0;
let userAnswers = {};
let isChecked = false; // 🔥 QUAN TRỌNG

// ===== HIỂN THỊ ĐOẠN VĂN =====
textBox.innerHTML = current.text;

// ===== HIỂN THỊ 1 CÂU =====
function renderQuestion() {
  const q = current.questions[index];

  questionBox.innerHTML = `
  <strong>Question ${q.id}</strong>
    <div class="question-box">
      ${Object.entries(q.options)
      .map(
        ([key, val]) => `
        <label class="option">
          <input type="radio" name="q${q.id}" value="${key}"
            ${userAnswers[q.id] === key ? "checked" : ""}>
          <span>${key}. ${val}</span>
        </label>
      `
      )
      .join("")}
    </div>
  `;

  // ===== LƯU ĐÁP ÁN =====
  document.querySelectorAll(`input[name="q${q.id}"]`).forEach(input => {
    input.addEventListener("change", () => {
      userAnswers[q.id] = input.value;

      // nếu đã kiểm tra → tô màu lại ngay
      if (isChecked) applyColors(q);
    });
  });

  // ===== NẾU ĐÃ KIỂM TRA → TÔ MÀU =====
  if (isChecked) {
    applyColors(q);
  }

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === current.questions.length - 1;
}

// ===== TÔ MÀU ĐÚNG / SAI =====
function applyColors(q) {
  const selectedValue = userAnswers[q.id];
  const options = document.querySelectorAll(`input[name="q${q.id}"]`);

  options.forEach(opt => {
    const label = opt.parentElement;

    label.style.color = "";
    label.style.fontWeight = "";

    // 🔒 KHÓA SAU KHI CHẤM
    if (isChecked) {
      opt.disabled = true;
    }

    // đáp án đúng → xanh
    if (opt.value === q.answer) {
      label.style.color = "green";
      label.style.fontWeight = "600";
    }

    // chọn sai → đỏ
    if (
      selectedValue &&
      opt.value === selectedValue &&
      selectedValue !== q.answer
    ) {
      label.style.color = "red";
      label.style.fontWeight = "600";
    }
  });
}

renderQuestion();

// ===== NÚT TRƯỚC =====
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    renderQuestion();
  }
});

// ===== NÚT SAU =====
nextBtn.addEventListener("click", () => {
  if (index < current.questions.length - 1) {
    index++;
    renderQuestion();
  }
});

// ===== KIỂM TRA =====
checkBtn.addEventListener("click", () => {
  isChecked = true;

  let correct = 0;
  const total = current.questions.length;

  current.questions.forEach(q => {
    if (userAnswers[q.id] === q.answer) {
      correct++;
    }
  });

  const percent = Math.round((correct / total) * 100);
  renderQuestion();

  // ===== ĐÁNH GIÁ =====
  let color = "bg-danger";
  let icon = `<i class="bi bi-x-circle-fill text-danger"></i>`;
  let text = "Needs improvement";

  if (percent >= 80) {
    color = "bg-success";
    icon = `<i class="bi bi-check-circle-fill text-success"></i>`;
    text = "Excellent performance";
  } else if (percent >= 50) {
    color = "bg-warning";
    icon = `<i class="bi bi-exclamation-circle-fill text-warning"></i>`;
    text = "Satisfactory result";
  }

  // ===== GÁN DỮ LIỆU =====
  document.getElementById("scoreIcon").innerHTML = icon;
  document.getElementById("scorePercent").innerText = `${percent}%`;
  document.getElementById("scoreDetail").innerText =
    `Correct answers: ${correct} / ${total} — ${text}`;

  const bar = document.getElementById("scoreBar");
  bar.className = `progress-bar ${color}`;
  bar.style.width = percent + "%";

  // ===== Hiện modal =====
  const modal = new bootstrap.Modal(
    document.getElementById("scoreModal")
  );
  modal.show();
});
