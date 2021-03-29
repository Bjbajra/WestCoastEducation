"use strict";

const heading = document.querySelector("#heading h2");
const image = document.querySelector("#heading img");
const courseNumber = document.querySelector("#courseNumber");
const duration = document.querySelector("#duration");
const category = document.querySelector("#category");
const description = document.querySelector("#description p");

let courseId = 1;

const urlParams = new URLSearchParams(location.search);

for (let [key, value] of urlParams) {
  if (key === "courseId") courseId = value;
}

const course = courses.find((course) => course.id == courseId);

heading.innerText = `${course.title}`;
image.setAttribute("src", `/content/img/${course.imageName}.jpg`);
courseNumber.innerHTML += ` ${course.courseNumber}`;
duration.innerText += ` ${course.length}hr`;
category.innerText += ` ${course.category}`;
description.innerText += `${course.description}`;
