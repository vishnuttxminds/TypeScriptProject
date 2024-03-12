import { StudentInfo } from "./component/StudentInfo";

type Student = {
  name: string;
  rollno: number;
  course: string;
  duration: number;
  startDate: string;
  endDate: string;
  grade: string;
};

const studentData: Student = {
  name: "Vishnu",
  rollno: 30,
  course: "Nodejs Training",
  duration: 3,
  startDate: "06-03-2024",
  endDate: "06-04-2024",
  grade: "",
};

let studentDetails = new StudentInfo(studentData);
studentDetails.setGrade = "B+";

console.log(studentDetails);
