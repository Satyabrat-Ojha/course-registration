const courses = [
  {
    name: "Graphic Design Course",
    price: "2599",
  },
  {
    name: "Web Development Course",
    price: "1349",
  },
  {
    name: "Digital Marketing Course",
    price: "1899",
  },
  {
    name: "Advance Excel (MIS)",
    price: "699",
  },
  {
    name: "Wordpress",
    price: "599",
  },
  {
    name: "Machine Learning",
    price: "6000",
  },
];

let coursesDiv = document.getElementById("course");
coursesDiv.innerHTML =
  `<option value="">Select Course</option>` +
  courses.map((course) => {
    return `<option value="${course.name}">${course.name}</option>`;
  });

coursesDiv.addEventListener("change", (e) => {
  let courseName = e.target.value;
  let coursePrice = courses.find((course) => course.name === courseName).price;
  document.getElementById("price").value = "Rs. " + coursePrice;
  if (courseName === "") {
    document.getElementById("price").value = "";
  }
  //   console.log(coursePrice);
});
