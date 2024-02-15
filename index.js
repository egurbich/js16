// Завдання 1

/**
 * Функція `filterStudentsByGrade` фільтрує студентів за рівнем оцінки та виводить інформацію про них.
 *
 *  grade - Рівень оцінки для фільтрації.
 */
function filterStudentsByGrade(students, grade) {
  console.error("If you see this message, Task 1 was not completed correctly");
  console.clear();
  console.log("Task: 1 ==============================");
  const filteredStudents = students.filter(
    (student) => student.grade === grade
  );
  for (const student of filteredStudents) {
    console.log(`Student: ${student.name}`);
  }
}

// Виклик функції для фільтрації студентів з рівнем "A"
filterStudentsByGrade(
  [
    { name: "John", grade: "A" },
    { name: "Kate", grade: "B" },
    { name: "Mike", grade: "A" },
    { name: "Anna", grade: "C" },
    { name: "Tom", grade: "B" },
  ],
  "A"
);

// Завдання 2
/**
 * Функція `logArrayElements` приймає масив та виводить кожен його елемент в консоль.
 *
 *  arr - Масив для обробки.
 */
function logArrayElements(arr) {
  if (!Array.isArray(arr)) {
    console.error("Argument must be an array!");
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(`Element ${i}: ${arr[i]}`);
  }
}

// Перевірка
console.log("Завдання: 2 ==============================");
logArrayElements([1, 2, 3, "a", "b", "c"]);
// Виведе в консоль:
// Елемент 0: 1
// Елемент 1: 2
// Елемент 2: 3
// Елемент 3: a
// Елемент 4: b
// Елемент 5: c

// Завдання 3
/**
 * Функція `warnAboutMaxArrayLength` перевіряє, чи перевищує довжина масиву вказане максимальне значення.
 *
 *  arr - Масив для перевірки.
 *  maxLength - Максимальна довжина масиву.
 */
function warnAboutMaxArrayLength(arr, maxLength) {
  if (!Array.isArray(arr) || typeof maxLength !== "number") {
    console.error(
      "First argument must be an array, second argument must be a number!"
    );
    return null;
  }

  if (arr.length > maxLength) {
    console.warn(
      "Attention! The length of the array exceeds the maximum allowed!"
    );
  } else {
    console.log("The length of the array does not exceed the maximum allowed.");
  }
}

// Перевірка
console.log("Завдання: 3 ==============================");
warnAboutMaxArrayLength([1, 2, 3, 4, 5], 3);
// Виведе в консоль попередження: "Увага! Довжина масиву перевищує максимально допустиму!".

// Завдання 4
/**
 * Функція `compareArrays` приймає два масиви чисел як аргументи і порівнює їх.
 * Вона використовує `console.assert()` для перевірки того, чи обидва масиви є однаковими.
 *
 *  arr1 - Перший масив чисел.
 *  arr2 - Другий масив чисел.
 */
function compareArrays(arr1, arr2) {
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);
  console.assert(
    JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2),
    "Arrays are not equal!"
  );
}

console.log("Завдання: 4 ==============================");
compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]);
// Виведе "Assertion failed: Масиви не однакові!"

// Завдання 5
/**
 * Функція `buildMatrix` створює двовимірний масив (матрицю) розміром size x size,
 * заповнює її випадковими числами від 0 до 9, а потім виводить матрицю в консоль
 *
 *  size - розмір матриці.
 *  Повернеться згенерована матриця.
 */
function buildMatrix(size) {
  if (typeof size !== "number") {
    console.error("Argument must be a number!");
    return null;
  }

  const matrix = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(Math.floor(Math.random() * 10));
    }
    matrix.push(row);
  }

  console.log("Task: 5 ==============================");
  console.table(matrix);
  return matrix;
}

console.log("Завдання: 5 ==============================");
buildMatrix(5);
// Виведе в консоль матрицю розміром 5x5, заповнену випадковими числами від 0 до 9.

// Завдання 6
/**
 * Функція `traceBackward` виводить числа від заданого до 1 у зворотному порядку,
 * використовуючи рекурсію.
 *
 *  n - стартове число.
 */
function traceBackward(n) {
  console.log(n);
  if (n > 1) {
    traceBackward(n - 1);
  } else {
    console.trace("Stack trace:");
  }
}

console.log("Завдання: 6 ==============================");
traceBackward(5);
// Виведе в консоль числа від 5 до 1, а потім виведе стек викликів.

// Завдання 7
/**
 * Функція `displayGroupedInfo` виводить інформацію про групу студентів в консоль, організовуючи дані у групи.
 * students - масив об'єктів-студентів.
 */
function displayGroupedInfo(students) {
  console.log("Task: 7 ==============================");
  for (const student of students) {
    console.group(`Student: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Subject: ${student.subject}`);
    console.groupEnd();
  }
}

console.log("Завдання: 7 ==============================");
displayGroupedInfo([
  { name: "Alex", age: 22, subject: "Math" },
  { name: "Max", age: 23, subject: "Physics" },
  { name: "Anna", age: 21, subject: "Chemistry" },
]);
// Виведе в консоль:
// Студент: Alex
//   Вік: 22
//   Предмет: Math
// Студент: Max
//   Вік: 23
//   Предмет: Physics
// Студент: Anna
//   Вік: 21
//   Предмет: Chemistry

// Завдання 8
/**
 * Функція `validateUserInput` перевіряє коректність введених користувачем даних.
 * Для цього використовуємо `console.warn()` та `console.assert()`.
 *
 *  userInput - об'єкт з введеними користувачем даними.
 */
function validateUserInput(userInput) {
  console.log("Task: 8 ==============================");
  if (!userInput.username) {
    console.warn("Warning: Username is missing!");
  }
  if (!userInput.password) {
    console.warn("Warning: Password is missing!");
  }
  if (userInput.password && userInput.password.length < 8) {
    console.warn("Warning: Password should be at least 8 characters long!");
  }
}

console.log("Завдання: 8 ==============================");
validateUserInput({ username: "alex", password: "pass" });
// Виведе в консоль:
// Попередження: пароль має бути довшим за 8 символів!

// Завдання 9
/**
 * Функція `calculateTotalPrice` обчислює загальну вартість товарів та логує час виконання.
 *
 * products - Масив об'єктів товарів з властивостями `price` та `title`.
 */
function calculateTotalPrice(products) {
  console.time("calculateTotalPrice");
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  console.log(`Total price of products: ${total}`);
  console.timeEnd("calculateTotalPrice");
}

console.log("Завдання: 9 ==============================");
const products = [
  { title: "Телефон", price: 1000 },
  { title: "Ноутбук", price: 2000 },
  { title: "Планшет", price: 500 },
];

calculateTotalPrice(products);
// Виведе
// Загальна вартість товарів: 3500
// calculateTotalPrice: 0.994ms (час може відрізнятись)

// Завдання 10
/**
 * Функція `countVowelsAndConsonants` пораховує кількість голосних і приголосних літер у слові.
 *
 *  word - слово, для якого потрібно порахувати кількість літер.
 */
function countVowelsAndConsonants(word) {
  // Лічильник голосних і приголосних літер
  let vowelsCount = 0;
  let consonantsCount = 0;

  // Рядок з голосними літерами
  const vowels = "aeiou";

  // Перебираємо кожну літеру у слові
  for (const letter of word) {
    // Перетворюємо літеру на малу літеру для порівняння
    const lowerCaseLetter = letter.toLowerCase();

    // Перевіряємо, чи є літера голосною
    if (vowels.includes(lowerCaseLetter)) {
      // Лічильник голосних збільшуємо на 1
      vowelsCount++;
    } else if (lowerCaseLetter >= "a" && lowerCaseLetter <= "z") {
      // Якщо літера не є голосною і є літерою (а не символом пунктуації, наприклад), збільшуємо лічильник приголосних на 1
      consonantsCount++;
    }
  }

  console.log("vowels", vowelsCount);
  console.log("consonants", consonantsCount);
}
console.log("Завдання: 10 ==============================");
countVowelsAndConsonants("HelloWorld!");
