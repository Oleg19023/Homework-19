const resultElement = document.getElementById('result');

const additionalInputs0 = document.getElementById('additionalInputs0'); // #0
const additionalInputs = document.getElementById('additionalInputs'); // #1

function UpdateInput() {
    const selectedValue = document.getElementById('question').value;
    additionalInputs0.style.display = (selectedValue === '1') ? 'block' : 'none'; // #0
    additionalInputs.style.display = (selectedValue === '2') ? 'block' : 'none'; // #1

}

function calculate() {
    const selectedValue = document.getElementById('question').value;


    switch (selectedValue) {
        // Задачи ʕ ᵔᴥᵔ ʔ
        case '1':
            // Рассчет ИМТ
            const weightInput = parseFloat(document.getElementById('Input2').value);
            const heightInput = parseFloat(document.getElementById('Input3').value);

            if (isNaN(weightInput) || isNaN(heightInput) || heightInput <= 0) {
                alert('Введите корректные значения для веса и роста.');
            } else {
                const bmi = weightInput / Math.pow(heightInput, 2);
                let bmiCategory;

                if (bmi < 18.5) {
                    bmiCategory = 'Недостаточный вес';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    bmiCategory = 'Нормальный вес';
                } else if (bmi >= 25 && bmi < 29.9) {
                     bmiCategory = 'Избыточный вес';
                    } else if (bmi >= 30 && bmi < 100) {
                        bmiCategory = 'Ожирение';
                    } else {
                        bmiCategory = '🤨Да ну?';
                    }
                    resultElement.innerHTML = `Индекс массы тела (ИМТ): ${bmi.toFixed(2)}<br>${bmiCategory}`;
                }
                break;
        case '2':
            // Рассчет високосного года
            const yearInput = parseInt(document.getElementById('Input1').value);

            if (isNaN(yearInput)) {
                alert('Введите корректный год.');
                return;
            }

            const isLeapYear = (yearInput % 4 === 0 && yearInput % 100 !== 0) || (yearInput % 400 === 0);
            resultElement.innerHTML = `${yearInput} год ${isLeapYear ? 'високосный' : 'не високосный'}`;
            break;
        default:
            alert('Выберите вариант для вычисления.');
    }
}

