const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener("focus", focusFunction);
    input.addEventListener("focusout", focusoutFunction);
});

function focusFunction() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function focusoutFunction() {
    let parent = this.parentNode.parentNode;
    if (this.value == "")
        parent.classList.remove('focus');
}

