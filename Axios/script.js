const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

// const API_URL = "https://crudcrud.com/api/428dab2900c649128bd2e9c251ae50c5/axios";

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
    .get("https://crudcrud.com/api/428dab2900c649128bd2e9c251ae50c5",)
    .then((res) => {
      console.log(res.data);
    })
  .catch ((err) => {
    console.log(err);
  })
  
}

function postTodo() {
  // Write your code here
  axios
    .post("https://crudcrud.com/api/428dab2900c649128bd2e9c251ae50c5/todos", {
    title: "Learn Axios",
    completed: false,
  })
    .then((res) => console.log(res))
  .catch((err) => console.log(err))
}

function putTodo() {
  // Write your code here

  axios
    .get(API_URL)
    .then((res) => {
      const todo = res.data.find((item) => 
        item.title === "Learn Axios"
    );

      return axios.put(`${API_URL}/${todo._id}`, {
        title: "Learn Axios",
        completed :true
      })
    })

    .then((res) => {
      console.log("Updated")
    })
    .catch((err) => {
      console.log(err);
    })
}

function deleteTodo() {
  // Write your code here
  axios
    .get(API_URL)
    .then((res) => {
      const todo = res.data.find((item) => item.tile === "Learn Axiox");

      return axios.delete(`${API_URL} / ${todo._id}`);
    })
    .then((res) => {
      console.log("Deleted")
        .catch((err) => {
          console.log(err);
    })
  })
}
