document.getElementById("projects").onclick = function(e) {
    if (e.target.dataset.proj) {
       let box = document.getElementById("projectAlert");
       box.textContent = "You Clicked " + e.target.dataset.proj + " ✅";
       box.classList.remove("d-none");
       setTimeout(() => box.classList.add("d-none"), 3000);
    }
}
document.getElementById("contractForm").onsubmit = function(e) {
    e.preventDefault();
    let form = this;

    fetch(form.action, {
        method: "POST",
        body: new FormDtata(form),
        headers: { Accept: "application/json" }
    })
    .then(res => {
        if (res.ok) {
            document.getElementById("sentOK").classList.remove("d-none");
            form.reset();
        } else {
            document.getElementById("sentFail)").classList.remove("d-none")
        }
    })
    .catch( () => {
        document.getElementById("sentFall').classList.remove("d-none");
    });
};
const h=document.querySelect