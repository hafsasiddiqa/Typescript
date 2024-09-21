let obj1 = {
    student_id: 3232,
    name: "rita",
    Teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.Teacher_Id);
console.log(obj1.name);
let myval;
myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => {
    console.log('Hey again!');
}; // OK
/*  let val: unknown;

  const val1: unknown = val; // OK
  const val2: any = val; // OK
  const val3: boolean = val; // Will throw error
  const val4: number = val; // Will throw error
  const val5: string = val; // Will throw error
  const val6: Record<string, any> = val; // Will throw error
  const val7: any[] = val; // Will throw error
  const val8: (...args: any[]) => void = val; // Will throw error
  */
function infiniteLoop() {
    while (true) { }
}
export {};
