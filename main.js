/*
//1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// A method that displays the car info
// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.
let car = {
    manufacturer: "Ferrari",
    model: "Ferrari",
    "year of release": 2012,
    "average speed": 120,
carinfo(info) {
    console.log(info.manufacturer);
    console.log(info.model);
    console.log(car["year of release"]);
    console.log(car["average speed"]);
},
displaytime(distance){
let time = distance / (car["average speed"]);
console.log(time);
let timewbreak = time;
for(let i=0;i<=timewbreak;i++){
if(i % 4 == 0){
    timewbreak--;
}
}
console.log(timewbreak);
}
}
car.carinfo(car);
car.displaytime(300);


//2.Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:
//A function for adding two fraction objects.
let f1 = {
    numerator: 2,
    denominator: 4,
  };
  let f2 = {
    numerator: 3,
    denominator: 9,
  };


  function add(f1,f2){
    firstFraction=f1.numerator/f1.denominator,
    secondFraction=f2.numerator/f2.denominator,

    console.log(firstFraction+secondFraction);

  }

  add(f1,f2)

  //A function for subtracting two fraction objects.

  
  function subtract(f1,f2){
    firstFraction=f1.numerator/f1.denominator,
    secondFraction=f2.numerator/f2.denominator,

    console.log(firstFraction-secondFraction);

  }

  substract(f1,f2);



  //A function for multiplying two fraction objects.
  
  function multiply(f1,f2){
    firstFraction=f1.numerator/f1.denominator,
    secondFraction=f2.numerator/f2.denominator,

    console.log(firstFraction*secondFraction);

  }

  multiply(f1,f2);
  
  //A function for dividing two fraction objects.
  function divide(f1,f2){
    firstFraction=f1.numerator/f1.denominator,
    secondFraction=f2.numerator/f2.denominator,

    console.log(firstFraction/secondFraction);

  }

  divide(f1,f2);

  //A function for simplifying a fraction object.
  function simplify(f1){
    firstFraction=f1.numerator/f1.denominator,
     console.log(firstFraction);
  }
  simplify(f1)


  //3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:

  let time ={
    hours:10,
    minutes:4,
    seconds:30,

    displayTime(){
        console.log(this.hours+ ":" + this.minutes + ":" + this.seconds)
    },
    changeSeconds(s){
        this.seconds+=s;
        if(this.seconds>=60){
            this.seconds=0,
            this.minutes+=1;
            console.log(this.hours+ ":" + this.minutes + ":" + this.seconds)
        }else
        console.log(this.hours+ ":" + this.minutes + ":" + this.seconds)
    },
    changeMinutes(m){
        this.minutes+=m;
        if(this.minutes>=60){
            this.minutes=0,
            this.hours+=1;
            console.log(this.hours+ ":" + this.minutes + ":" + this.seconds)
        }else
        console.log(this.hours+ ":" + this.minutes + ":" + this.seconds)


    },
    changeHours(h){
        this.hours+=h;
        if(this.hours>=24){
            Hour =this.hours-24;
            this.hours=0 + Hour;
    
            console.log(this.hours+ ":" + this.minutes + ":" + this.seconds)
        }else
        console.log(this.hours+ ":" + this.minutes + ":" + this.seconds)


    }
  }

  time.displayTime();
  time.changeSeconds(30);
  time.changeMinutes(10)
  time.changeHours(18);
  */