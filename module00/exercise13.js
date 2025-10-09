let unit_matrix = [
    [1,0,0],
    [0,1,0],
    [0,0,1]
];
let cloned_matrix = [...unit_matrix]; // shallow cloning
for (let i=0; i<unit_matrix.length; i++) {
    cloned_matrix[i] = [...unit_matrix[i]];
}
unit_matrix[0].push(0);
unit_matrix[1].push(0);
unit_matrix[2].push(0);
console.log(unit_matrix);
console.log(cloned_matrix);

let another_matrix = JSON.parse(JSON.stringify(unit_matrix));