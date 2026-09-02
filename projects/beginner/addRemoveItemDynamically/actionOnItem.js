const itemInput = document.getElementById(`itemInput`);
const addItemButton = document.getElementById(`addItemButton`);
const itemList = document.getElementById(`itemList`);
addItemButton.addEventListener('click', () => {
    const value = itemInput.value.trim();
    if(!value){
        return;
    }
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', (e) => {
        removeItem(button);
    });
    li.innerHTML  = value + ' ';
    li.appendChild(button);
    itemList.appendChild(li);

    itemInput.value='';
});

function removeItem(button){
    button.parentElement.remove();
}