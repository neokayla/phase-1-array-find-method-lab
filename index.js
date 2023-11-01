// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record, result) {
    const result1 = record.find(({result}) => result === "W");
    if (result1) {
        return result1.year;
    } 
    else {
        return undefined;
    }
}


