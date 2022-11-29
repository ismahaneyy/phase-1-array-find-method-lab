// code your solution here
function superbowlWin(record) {
    const Win = record.find((record) => record.result === "W");
    if (Win) {
        return Win.year;
    } else {
        return undefined;
    }
}
    
    
