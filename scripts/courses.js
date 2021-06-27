"use strict";

const baseUrl = "http://localhost:3000/courses/";

const listCoursesButton = document.querySelector("#listCourses");
const spinner = document.querySelector("#spinner");
const lists = document.querySelector(".lists");

function createList(courseLists) {
  spinner.classList.add("hidden");
  courseLists.forEach((course) => {
    lists.insertAdjacentHTML(
      "beforeend",
      `<a  href="course-details.html?courseId=${course.id}">
        <div class="course">
          <img id="${course.id}" src="/content/img/${course.imageName}" alt="${course.title} " />
          <p>${course.title} ${course.length}hr</p>
          <div><button class="btn btn primary">Add To Cart</button></div>
        </div>
      </a>          
      `
    );
  });
}

async function loadCourses() {
  spinner.classList.remove("hidden");
  const url = `${baseUrl}`;
  const response = await fetch(url);
  console.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

loadCourses()
  .then((data) => createList(data))
  .catch((err) => console.log(err));

const images = document.querySelector(".course");
console.log("query", images);
