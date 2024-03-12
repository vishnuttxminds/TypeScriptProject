type Student = {
  name: string;
  rollno: number;
  course: string;
  duration: number;
  startDate: string;
  endDate: string;
  grade: string;
}

export class StudentInfo {
  private name: string;
  private rollno: number;
  private course: string;
  private duration: number;
  private startDate: string;
  private endDate: string;
  private grade: string;

  constructor(item: Student) {
    this.name = item.name;
    this.rollno = item.rollno;
    this.course = item.course;
    this.duration = item.duration;
    this.startDate = item.startDate;
    this.endDate = item.endDate;
    this.grade = item.grade;
  }

  public get getRollNumber() {
    return this.rollno;
  }

  public set setRollNumber(rollNo: number) {
    this.duration = rollNo;
  }

  public set setDurations(month: number) {
    if (month <= 0 || month >= 200) {
      throw new Error("The month is invalid");
    }
    this.duration = month;
  }

  public get getStudentName() {
    return this.name;
  }

  public get getStudentCourse() {
    return this.course;
  }

  public get getStudentStartDate() {
    return this.startDate;
  }

  public get getStudentEndDate() {
    return this.endDate;
  }

  public get getGrade() {
    return this.grade;
  }

  public set setGrade(grade: string) {
    if (grade === "A+" || grade === "A" || grade === "B+" || grade === "B") {
      console.log(`Your grade is, ${grade} : Good Mark`);
    } else if (
      grade === "C+" ||
      grade === "C" ||
      grade === "D+" ||
      grade === "D"
    ) {
      console.log(`Your grade is, ${grade} : Need to improve`);
    } else {
      console.log(`Given grade is, ${grade} : is invalid`);
    }
    this.grade = grade;
  }

  public getFullDetails(): string {
    return `${this.name} ${this.course}`;
  }
}
