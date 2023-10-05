// code your solution here
const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];
const superbowlWin = (record) => {
  for (let i = 0; i <= record.length - 1; i++) {
    if (record[i].result === "W") {
      return record[i].year;
    } else {
      continue;
    }
  }
};
record.find(superbowlWin);
