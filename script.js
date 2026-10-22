
const courses = [
  {
    name: "Communicative English Language Skill",
    description: "Study materials for improving academic English.",
    url: "https://drive.google.com/file/d/17KcgtbIj3AVf0K9yobzv0k1eZ6divLdn/view?usp=drivesdk"
  },
  {
    name: "General Physics",
    description: "Physics course materials and study resources.",
    url: "https://drive.google.com/file/d/1JBdRZ0wE5ZtIq5NS8kiUhuKsxV8v86Ki/view?usp=drivesdk"
  },
  {
    name: "General Psychology",
    description: "Introduction to psychology and human behavior.",
    url: "https://drive.google.com/file/d/1Xsoko_4cqktyYpARQZTCJ5aIFay-AFEF/view?usp=drivesdk"
  },
  {
    name: "Geography",
    description: "Geography course notes and learning resources.",
    url: "https://drive.google.com/file/d/1wiYv2wrKBPPH033Ua4X4SjJ-EDTWeT5v/view?usp=drivesdk"
  },
  {
    name: "Logic and Critical Thinking",
    description: "Develop reasoning, argument analysis, and critical thinking.",
    url: "https://drive.google.com/file/d/1rXf2x8A15GbeZh3dwMCZQos12sgkiUWP/view?usp=drivesdk"
  },
  {
    name: "Mathematics for Natural Science",
    description: "Mathematics resources for natural science students.",
    url: "https://drive.google.com/file/d/1Z0BcGpgWDh4cTM0i6JGhH34knH0eETAl/view?usp=drivesdk"
  },
  {
    name: "Physical Fitness",
    description: "Study materials for physical fitness.",
    url: "https://drive.google.com/file/d/1YH5Y6b5YN3p2lzFG46FF6RNW76pbXJxh/view?usp=drivesdk"
  }
];

const exams = [
  {
    name: "Logic and Critical Thinking",
    year: "2015",
    title: "Mid Exam",
    url: "https://drive.google.com/file/d/1nx3d3Z0G5TPMIqb4zKuqskyJxY2926ve/view?usp=drivesdk"
  },
  {
    name: "Mathematics",
    year: "2015",
    title: "Mid Exam",
    url: "https://drive.google.com/file/d/1J9lS9FF_f6uB7ctOryxB-SNQhGKvIWxF/view?usp=drivesdk"
  },
  {
    name: "General Physics",
    year: "Different years",
    title: "Mid Exams",
    url: "https://drive.google.com/file/d/1PQeTDcPevrum5RyTvqTfxisHJ3wdysKS/view?usp=drivesdk"
  },
  {
    name: "Geography",
    year: "Not specified",
    title: "Mid Exam",
    url: "https://drive.google.com/file/d/1Jq4hnEyNS9hSUfrivzX0CwpVb-hlwTD1/view?usp=drivesdk"
  },
  {
    name: "Communicative English",
    year: "Not specified",
    title: "Mid Exam",
    url: "https://drive.google.com/file/d/1S0_WGABHIij34LWqF4TfeJNR_pQmqdrP/view?usp=drivesdk"
  },
  {
    name: "General Psychology",
    year: "2016",
    title: "Mid Exam",
    url: "https://drive.google.com/file/d/1rNxSSr9NK6LvIOwlW5aa0et_jEA3rmPB/view?usp=drivesdk"
  }
];

const courseContainer = document.getElementById("courses");
const examContainer = document.getElementById("exam-list");
const searchInput = document.getElementById("search");
const emptyMessage = document.getElementById("empty");
const catalog = document.getElementById("catalog");
const learning = document.getElementById("learning");
const lesson = document.getElementById("lesson");
const backButton = document.getElementById("back");
const examsSection = document.getElementById("exams-section");

function renderCourses(items) {
  courseContainer.replaceChildren();

  emptyMessage.hidden = items.length > 0;

  items.forEach((course) => {
    const card = document.createElement("article");
    const heading = document.createElement("h3");
    const description = document.createElement("p");
    const button = document.createElement("button");

    heading.textContent = course.name;
    description.textContent = course.description;
    button.textContent = "Open Course";

    button.addEventListener("click", () => {
      catalog.style.display = "none";
      examsSection.style.display = "none";
      learning.style.display = "block";

      lesson.replaceChildren();

      const title = document.createElement("h2");
      title.textContent = course.name;

      const details = document.createElement("p");
      details.textContent = course.description;

      const link = document.createElement("a");
      link.href = course.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Open Study Material";

      lesson.append(title, details, link);
    });

    card.append(heading, description, button);
    courseContainer.appendChild(card);
  });
}

function renderExams() {
  examContainer.replaceChildren();

  exams.forEach((exam) => {
    const card = document.createElement("article");
    const heading = document.createElement("h3");
    const details = document.createElement("p");
    const link = document.createElement("a");

    heading.textContent = exam.name;
    details.textContent = `${exam.title} • ${exam.year}`;
    link.href = exam.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open Past Exam";

    card.append(heading, details, link);
    examContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = courses.filter((course) =>
    course.name.toLowerCase().includes(query)
  );

  renderCourses(filtered);
});

backButton.addEventListener("click", () => {
  learning.style.display = "none";
  catalog.style.display = "block";
  examsSection.style.display = "block";
});

renderCourses(courses);
renderExams();
      
