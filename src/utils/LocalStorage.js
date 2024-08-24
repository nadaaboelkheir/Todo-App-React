export const saveToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

export const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}