// DOM Elements

const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector(".student");
const namaInput = studentForm["nama"];
const umurInput = studentForm["umur"];
const beratInput = studentForm["berat"];

const student = JSON.parse(localStorage.getItem("student")) || [];

const addStudent = (nama, umur, berat) => {
  student.push({
    nama,
    umur,
    berat
  });

  localStorage.setItem("student", JSON.stringify(student))

  return {nama, umur, berat};
};

const createStudentElement = ({ nama, umur, berat }) => {
  // create element
  const studentDiv = document.createElement('div');
  const studentNama = document.createElement('h2');
  const studentUmur = document.createElement('p');
  const studentBerat = document.createElement('p');

  // fill the content
  studentNama.innerText = "Nama Siswa: " + nama;
  studentUmur.innerText = "Umur Siswa: " + umur;
  studentBerat.innerText = "Berat Siswa: " + berat;

  // add to the DOM
  studentDiv.append(studentNama, studentUmur, studentBerat);
  studentContainer.appendChild(studentDiv);

  studentContainer.style.display = student.lenght === 0 ? "none" : "block";
};

studentContainer.style.display = student.lenght === 0 ? "none" : "block";

student.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    namaInput.value,
    umurInput.value,
    beratInput.value
  );

  createStudentElement(newStudent);

  namaInput.value = "";
  umurInput.value = "";
  beratInput.value = "";
};