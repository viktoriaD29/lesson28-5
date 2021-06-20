export const shmoment = (initialDate) => {
  let result = initialDate;
  const constructor = {
    add(str, number) {
      if (str === 'years') {
        result += new Date(
          new Date().setFullYear(new Date(initialDate).getFullYear() + number)
        );
        
      }
      if (str === 'month') {
        result += new Date(
          new Date().setMonth(new Date(initialDate).getMonth() + number)
        );
        
      }
      if (str === 'days') {
        result += new Date(
          new Date().setDate(new Date(initialDate).getDate() + number)
        );
        
      }
      if (str === 'hours') {
        result += new Date(
          new Date().setHours(new Date(initialDate).getHours() + number)
        );
        
      }
      if (str === 'minutes') {
        result += new Date(
          new Date().setMinutes(new Date(initialDate).getMinutes() + number)
        );
        
      }
      if (str === 'seconds') {
        result += new Date(
          new Date().setSeconds(new Date(initialDate).getSeconds() + number)
        );
        
      }
      if (str === 'milliseconds') {
        result += new Date(
          new Date().setMilliseconds(
            new Date(initialDate).getMilliseconds() + number
          )
        );
        
      }

      return this;
    },
    subtract(str, number) {
      if (str === 'years') {
        result += new Date(
          new Date().setFullYear(new Date(initialDate).getFullYear() - number)
        );
        
      }
      if (str === 'month') {
        result += new Date(
          new Date().setMonth(new Date(initialDate).getMonth() - number)
        );
        
      }
      if (str === 'days') {
        result += new Date(
          new Date().setDate(new Date(initialDate).getDate() - number)
        );
        
      }
      if (str === 'hours') {
        result += new Date(
          new Date().setHours(new Date(initialDate).getHours() - number)
        );
        
      }
      if (str === 'minutes') {
        result += new Date(
          new Date().setMinutes(new Date(initialDate).getMinutes() - number)
        );
        
      }
      if (str === 'seconds') {
        result += new Date(
          new Date().setSeconds(new Date(initialDate).getSeconds() - number)
        );
        
      }
      if (str === 'milliseconds') {
        result += new Date(
          new Date().setMilliseconds(
            new Date(initialDate).getMilliseconds() - number
          )
        );
        
      }

      return this;
    },
    result() {
      return result;
    },
  };
  return constructor;
};
const result1 = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('years', 5)
  .subtract('years', 1)
  /*.add('days', 4)
  .add('hours', 1)
  .add('minutes', 7)
  .add('seconds', 9)
  .add('milliseconds', 11)*/
  .result();
console.log(result1);

const result2 = shmoment(new Date(Date.UTC(2020, 0, 1))).add('years', 2).result();
console.log(result2)

const result3 = shmoment(new Date(Date.UTC(2020, 7, 10, 10, 10, 10, 10)))
  .subtract('months', 2)
  .result();
console.log(result3)


