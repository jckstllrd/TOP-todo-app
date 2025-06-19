export default class domController {
  constructor() {
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  handleTodoClick(e) {
    console.log("clicked todo");
    console.log(e);
  }

  handleProjectClick(e) {
    console.log("clicked project");
    console.log(e);
  }

  initialiseButtons() {
    console.log("running buttons");

    const newTodoBtn = document.querySelector(".new-todo-btn");
    const newProjectBtn = document.querySelector(".new-project-btn");

    newTodoBtn.addEventListener("click", this.handleTodoClick);
    newProjectBtn.addEventListener("click", this.handleProjectClick);
  }

  displayTodos() {}

  displayProjects() {}
}
