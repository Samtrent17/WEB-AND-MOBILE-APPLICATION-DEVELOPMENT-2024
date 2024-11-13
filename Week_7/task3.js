let data =[
    { district: "Kampala", rainfall: 120},
    { district: "Gulu", rainfall: 80},
    { district: "Mbarara", rainfall: 95}
];

console.log(data[0].district);
console.log(data[0].rainfall);

console.log(data[1].district);
console.log(data[1].rainfall);

console.log(data[2].district);
console.log(data[2].rainfall);
for (let d = 0; d < data.length; d++) {
    console.log("District:",data[d].district +", Rainfall:", + data[d].rainfall);
}