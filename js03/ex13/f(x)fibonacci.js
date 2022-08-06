let notebook = [0, 1];
const calculateFibonacciInthatSequence = (seq) => {
    if (notebook[seq] != undefined) {
        return notebook[seq]
    }
    notebook[seq] = calculateFibonacciInthatSequence(seq - 1) + calculateFibonacciInthatSequence(seq - 2);
    return notebook[seq];
}

module.exports = { calculateFibonacciInthatSequence, notebook };
//! ตัวเเปรเมื่อวิ่งผ่านฟังก์ชั่นที่สามารเปลร่ยนค่าได้จะเปลี่ยนเเปลงค่าทั้งโปรเเกรมโดยไม่ต้อง return
//! สามารถ export ตัวเเปร & ฟังก์ชั่นในรูปเเบบ object ได้เลย