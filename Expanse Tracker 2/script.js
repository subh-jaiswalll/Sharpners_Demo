


const form = document.getElementById("expense-form");

const amount = document.getElementById("amount");

const description = document.getElementById("description");

const category = document.getElementById("category");

const expenseList = document.getElementById("expense-list");

const totalAmount = document.getElementById("totalAmount");


// Load from localStorage
let expenses = JSON.parse(localStorage.getItem("expenses"));

if (!expenses) {
    expenses = [];
}


// Show expenses
function showExpenses() {

    expenseList.innerHTML = "";

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        total += Number(expense.amount);

        // MAIN CONTAINER
        const div = document.createElement("div");

        // TEXT PART
        const text = document.createElement("p");

        text.textContent =
            expense.amount + " - " +
            expense.description + " - " +
            expense.category;

        // EDIT BUTTON
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        editBtn.onclick = function () {

            amount.value = expense.amount;
            description.value = expense.description;
            category.value = expense.category;

            expenses.splice(i, 1);

            localStorage.setItem("expenses", JSON.stringify(expenses));

            showExpenses();
        };

        // DELETE BUTTON
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = function () {

            expenses.splice(i, 1);

            localStorage.setItem("expenses", JSON.stringify(expenses));

            showExpenses();
        };

        // APPEND ELEMENTS
        div.appendChild(text);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);

        expenseList.appendChild(div);
    }

    totalAmount.textContent = total;
}


// FORM SUBMIT
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const expense = {
        amount: amount.value,
        description: description.value,
        category: category.value
    };

    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    showExpenses();

    amount.value = "";
    description.value = "";
    category.value = "";
});


// INIT
showExpenses();