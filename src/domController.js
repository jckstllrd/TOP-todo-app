export default class domController {
  constructor() {
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  handleTodoClick(e) {
    console.log("clicked todo");
    console.log(e);
    /*
    
    */
   const todoForm = document.querySelector(".todo-form-container")
   todoForm.showModal()
  }

  handleProjectClick(e) {
    console.log("clicked project");
    console.log(e);
  }

  initialiseButtons() {
    console.log("running buttons");

    const newTodoBtn = document.querySelector(".new-todo-btn");
    const newProjectBtn = document.querySelector(".new-project-btn");
    const submitTodo = document.querySelector(".submit-todo")

    
    newTodoBtn.addEventListener("click", this.handleTodoClick);
    newProjectBtn.addEventListener("click", this.handleProjectClick);
  }

  displayTodos() {}

  displayProjects() {}
}
