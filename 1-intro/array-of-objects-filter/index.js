/**
 * @param {object[]} results
 */

function getPassingTests(results) {
    return results.filter((el) => el.grade >= 10);
}

// sample usage (do not modify)
const data = [
    {
        id: 1,
        grade: 10,
    },
    {
        id: 2,
        grade: 4,
    },
    {
        id: 3,
        grade: 18,
    },
];

console.log(getPassingTests(data));
