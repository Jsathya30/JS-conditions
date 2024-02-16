//Task-1

var a=10;
var b=5;
var c=a+b;
a-=c;
console.log(a,c);


//Task-2
let w=34;
let x=34;
w+=x;
x%=w
console.log(w,x);


//Task-3:Check given day is weekend or not.
var day="Sunday";
if(day=="Monday"||day=="Tuesday"||day=="Wednesday"||day=="Thursday"||day=="Friday"){
	console.log("It's not a weekend");
}
else if(day=="Saturday"||day=="Sunday"){
	console.log("It's weekend");
}
else{
	console.log("Invalid input")
}


//Task-4: 4. Get a mark. Given mark is greater than 90 grade is A, mark is greater than 75 grade is B,mark is greater than 60 grade is C,mark is greater than 50 grade is D,greater than 40 grade is E otherwise grade is F.

var m=90;
if(m>90){
	console.log("A-Grade");
}
else if(m>75&&m<=90){
	console.log("B-Grade");
}
else if(m>60&&m<=75){
	console.log("C-Grade");
}
else if(m>50&&m<=60){
	console.log("D-Grade");
}
else if(m>40&&m<=50){
	console.log("E-Grade");
}
else{
	console.log("F-Grade");
}


//Task-5:Check given year is leap year or not.

var year=2025;
if((year%4==0)&&((year%100!==0)||(year%400==0))){
	console.log("It's a leap year");
}
else{
	console.log("It's not a leap year");
}