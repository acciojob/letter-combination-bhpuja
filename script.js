// Mapping of digits to letters
const digitToLetters = {
    2: "abc", 3: "def", 4: "ghi",
    5: "jkl", 6: "mno", 7: "pqrs",
    8: "tuv", 9: "wxyz",
    0: "0", 1: "1"
};

// Function to generate all combinations
function letterCombinations(digits) {
    if (!digits.length) return [];
    
    const result = [];
    const currentCombination = [];

    function backtrack(index) {
        if (index === digits.length) {
            result.push(currentCombination.join(""));
            return;
        }

        const letters = digitToLetters[digits[index]];
        for (const letter of letters) {
            currentCombination.push(letter);
            backtrack(index + 1);
            currentCombination.pop(); // Backtrack
        }
    }

    backtrack(0);
    return result.sort(); // Ensure lexicographical order
}

// Event listener for button click
document.getElementById("generateButton").addEventListener("click", () => {
    const digitInput = document.getElementById("digitInput").value.trim();
    const output = document.getElementById("output");

    // Validate input (digits only)
    if (!/^[0-9]*$/.test(digitInput)) {
        output.innerHTML = "<p style='color: red;'>Please enter a valid digit string.</p>";
        return;
    }

    const combinations = letterCombinations(digitInput);
    if (combinations.length > 0) {
        output.innerHTML = `<strong>Combinations:</strong> <p>${combinations.join(", ")}</p>`;
    } else {
        output.innerHTML = "<p>No combinations found for the given input.</p>";
    }
});

