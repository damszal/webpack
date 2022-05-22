import './main.scss'

console.clear()

class Hello {
    render() {
        console.log("dupa")
        const btn = document.createElement('button');
        btn.innerText = "dummy button";
        const body = document.querySelector('body');
        body.appendChild(btn);
    }
};

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.


// function correct([...string])
// {
//     return string.map(el=>{
//         return ((el==="5")?el="S":el) && ((el==="1")?el="I":el)  && ((el==="0")?el="O":el)
//     }).join("")
// }

// correct("DUBL1N")


// SIMPLEST SOLUTION 

// const correct = string =>
//   string.replace(/\d/g, val => `OI   S`[val]);