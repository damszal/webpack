console.log("hello webpack!")

class Hello {
    render() {
        console.log("dupa")
        const btn = document.createElement('button');
        btn.innerText = "dummy button";
        const body = document.querySelector('body');
        body.appendChild(btn);
    }
}

const h = new Hello

h.render()