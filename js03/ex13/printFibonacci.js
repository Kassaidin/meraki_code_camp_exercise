//! เมื่อ import object เข้ามาสามารถเเทนค่าด้วยตัวเเปร เเล้วเรียกด้วย key เหมือน object หรือนำ object เก่ามาเเทนได้เลย เเต่ต้องให้ชื่อ ตรงกับตอน export
const input = require(`readline-sync`),
    { notebook, calculateFibonacciInthatSequence } = require(`../ex13/f(x)fibonacci`);
let seq = Number(input.question(`Input number of terms: `)) - 1,
    i = 0;
calculateFibonacciInthatSequence(seq);
console.log(`Fibonacci series:\n${notebook.toString().replaceAll(`,`,`, `)}`);
//! เทคนิคเปลี่ยน array เป็น string เเล้ว replace all เปลี่ยนคำที่เหมือนกันเป็นคำอื่น