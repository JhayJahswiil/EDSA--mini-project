// DOM ELEMENTS

const nameInput = document.querySelector('#name');
const deptInput = document.querySelector('#dept');
const mailInput = document.querySelector('#mail');
const pswInput = document.querySelector('#psw');
const result = document.querySelector('.result');
const submitBtn = document.querySelector('#btn');
const form = document.querySelector('form');

// DOM IMPLEMENTATIONS

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    // EMPTY ALL INPUT FIELDS AFTER SUBMITTING
    form.reset()

    // Initialize the output variable
    let output = '';

    // Loop over all input fields in the form and generate results
    for (let i = 0; i < form.length; i++){
        if(form[i].type !== 'submit'){
            const numOfChars = form[i].value.length;
            const numOfWords = form[i].value.split(" ").filter(Boolean).length;
            const strReverse = form[i].value.split("").reverse().join("");
            const strUpperCase = form[i].value.toUpperCase();
            const strLowerCase = form[i].value.toLowerCase();

            // Save all the results in the variable 'output'
            output += `
                <h3>${form[i].placeholder}:</h3>
                <p>Number of Characters: ${numOfChars}</p>
                <p>Number of Words: ${numOfWords}</p>
                <p>Reversed String: ${strReverse}</p>
                <p>Uppercase String: ${strUpperCase}</p>
                <p>Lowercase String: ${strLowerCase}</p>
            `
        }
    }

    // Modify the html using the contents saved in 'output' variable
    result.innerHTML = output;
})