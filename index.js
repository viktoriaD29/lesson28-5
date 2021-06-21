//input: new Date()
//output: object

//input: str, number
//output: new Date()

//algo:
//1.створюємо нову дату, щоб вихідна не змінювалась
//2.створюємо обєкт з методами
//3.перевірка, яке саме значення дати треба змінити
//4.змінюємо за допомогою методів дати
//5.повертаємо з кожного методу посилання на обєкт
//6.повертаємо обєкт

export const shmoment = (initDate) => {
  let copyDate = new Date(Number(initDate));

  const constructor = {
    add(str, number) {
      if (str === 'years') {
        copyDate.setFullYear(initDate.getFullYear() + number);
      }
      if (str === 'months') {
        copyDate.setMonth(initDate.getMonth() + number);
      }
      if (str === 'days') {
        copyDate.setDate(initDate.getDate() + number);
      }
      if (str === 'hours') {
        copyDate.setHours(initDate.getHours() + number);
      }
      if (str === 'minutes') {
        copyDate.setMinutes(initDate.getMinutes() + number);
      }
      if (str === 'seconds') {
        copyDate.setSeconds(initDate.getSeconds() + number);
      }
      if (str === 'milliseconds') {
        copyDate.setMilliseconds(initDate.getMilliseconds() + number);
      }
      return this;
    },
    subtract(str, number) {
      if (str === 'years') {
        copyDate.setFullYear(initDate.getFullYear() - number);
      }
      if (str === 'months') {
        copyDate.setMonth(initDate.getMonth() - number);
      }
      if (str === 'days') {
        copyDate.setDate(initDate.getDate() - number);
      }
      if (str === 'hours') {
        copyDate.setHours(initDate.getHours() - number);
      }
      if (str === 'minutes') {
        copyDate.setMinutes(initDate.getMinutes() - number);
      }
      if (str === 'seconds') {
        copyDate.setSeconds(initDate.getSeconds() - number);
      }
      if (str === 'milliseconds') {
        copyDate.setMilliseconds(initDate.getMilliseconds() - number);
      }
      return this;
    },
    result() {
      return copyDate;
    },
  };
  return constructor;
};
const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .subtract('years', 1)
  .add('years', 4)
  .add('month', 3)
  .subtract('minutes', 1)
  .result();
console.log(result);

/*function add(date, n) {
  const copy = new Date(Number(date));
  return new Date(copy.setFullYear(date.getFullYear() + n));
}
console.log(add(new Date(2021, 0, 7, 17, 17, 17), 2));*/
