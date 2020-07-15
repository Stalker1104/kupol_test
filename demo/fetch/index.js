document.addEventListener("DOMContentLoaded",()=>{

    const url = "https://jsonplaceholder.typicode.com/todos"

    const createListItem=(listItemData)=>{
        const {complited,title}=listItemData
        const listItemClass =complited ? "list__item-action list__item--completed" : "list__item"
        return `
        <div class=${listItemClass}>${title}
            <div class="list__item-actions">
                <button class="list__item-action list__item-action--remove">X</button>
                <button class="list__item-action list__item-action--complete">V</button>
            </div>
        </div>`
    }

    fetch(url)
    .then(data => data.json())
    .then(data => {
        const list = document.querySelector(".list")
        for(const elem of data){
            list.innerHTML+=createListItem(elem)
        }
    })
    .catch( e=>{
        console.log(e)
    })
});