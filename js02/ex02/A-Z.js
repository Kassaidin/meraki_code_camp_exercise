displayAtoZ();

function displayAtoZ() {
    let index = 97;
    let empty;
    //*while
    while (index <= 122) {
        console.log(String.fromCharCode(`${index}`));
        index++;
    }
    return `
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z
`
}
let assert = require(`assert`);
assert(displayAtoZ() === dummy(), `result not match`)