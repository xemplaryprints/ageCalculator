const dayError = document.querySelector('.day-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');
const yearResult = document.querySelector('.year-result');
const monthResult = document.querySelector('.month-result');
const dayResult = document.querySelector('.day-result');
const submitBtn = document.querySelector('.btn')
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const inputRequiredError = 'This field is required';
const inputDayError = 'Must be a valid day';
const inputMonthError = 'Must be a valid month';
const inputYearError = 'Must be in the past';



function checkDayInput()
{
    let value = inputDay.value;
    if(value == '')
    {
        dayError.innerHTML = inputRequiredError;
        return false;
    }
    else if (value < 1 || value > 31)
    {
        dayError.innerHTML = inputDayError;
        return false;
    }
    else 
    {
        dayError.innerHTML = '';
        return true;
    }
}

function checkMonthInput()
{
    let value = inputMonth.value;
    if(value == ''){
        monthError.innerHTML = inputRequiredError;
        return false;
    }
    else if (value < 1 || value > 12) {
        monthError.innerHTML = inputMonthError;
        return false;
    }
    else  {
        monthError.innerHTML = '';
        return true;
    }
}

function checkYearInput()
{
    let value = inputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if(value == '') {
        yearError.innerHTML = inputRequiredError;
        return false;
    }
    else if (value > currentYear) {
        yearError.innerHTML = inputYearError;
        return false;
    }
    else  {
        yearError.innerHTML = '';
        return true;
    }
}

function calculateAge(birthday){
    var birthdate = new Date(birthday);
    var today = new Date();
    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        if (months === 0) {
            months = 11;
        } else {
            months = 12 + months;
        }
        days = 30 - days;
    }

    yearResult.innerHTML = years;
    monthResult.innerHTML = months;
    dayResult.innerHTML = days;

    console.log(years, months, days);

}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();
    if (!day || !month || !year) return;
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calculateAge(birthday);
})
