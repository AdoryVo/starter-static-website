/* ----- Google JS Style Guide Examples ----- */
// Variables
const SOME_CONSTANT = 5;
let someVariable = 'string WITH SINGLE QUOTES';
let someString = `template string if using '' are needed`;

// Functions
const oneLiner = (numParam, strParam) => numParam + Number(strParam);
function concat(a, b) {
    return `${a}${b}`
}

// Requires jQuery
$('#someBtn').click(() => {
    $("body").css("background-color", "#2a3b4a");
});