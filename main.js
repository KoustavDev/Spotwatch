import './main.css';

const time = document.querySelector("#time");
const go = document.getElementById("start");
const pause = document.getElementById("stop");
const reset = document.getElementById("reset");

let id;
let hour = 0;
let min = 0;
let sec = 0;

go.addEventListener("click", start);
pause.addEventListener("click", stop);
reset.addEventListener("click", () => {
    stop();
    hour = 0;
    min = 0;
    sec = 0;
    time.innerText = `00 : 00 : 00`;
});

function start() {
    go.disabled = true;
    id = setInterval(() => {
        ++sec;
        if (sec >= 60) {
            sec = 0;
            ++min;
        }
        if (min >= 60) {
            min = 0;
            ++hour;
        }
        hour = hour.toString().padStart(2, '0');
        min = min.toString().padStart(2, '0');
        sec = sec.toString().padStart(2, '0');

        time.innerText = `${hour} : ${min} : ${sec}`;
    }, 1000);
}

function stop() {
    clearInterval(id);
    go.disabled = false;
}


const lap = document.getElementById("lap");
const section = document.querySelector("section");

lap.addEventListener("click", AddData);

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        AddData();
    }
});

function AddData() {
    let txt = input.value.trim();
    console.log(txt);
    if (txt === ''){
        alert("Add text");
        return;
    }
    let data = AddHTML(txt);
    section.prepend(data);
    input.value = '';
}

function AddHTML(txt) {
    let data = document.createElement('div');
    data.innerHTML = `
        <div class="list flex justify-between text-[25px] rounded-2xl px-1 max-h-[70px]">
            <div class="form-control">
                <label class="cursor-pointer label flex gap-6">
                    <input type="checkbox" id="check" class="checkbox checkbox-success self-center" />
                    <span class="data text-lg">${txt}</span>
                </label>
            </div>
            <div class="flex items-center gap-2">
                <button class="edit btn btn-sm btn-outline btn-info">Edit</button>
                <i class="delete fa-regular fa-circle-xmark self-center cursor-pointer hover:text-red-700"></i>
            </div>
        </div>`;
    
    
    data.querySelector(".delete").addEventListener("click", () => {
        data.remove();
    });

    let isEditing = false;
    data.querySelector(".edit").addEventListener("click", () => {
        const textSpan = data.querySelector(".data");
        if (isEditing) {
            textSpan.contentEditable = "false";
            data.querySelector(".edit").setAttribute("class","edit btn btn-sm btn-outline btn-info");
            data.querySelector(".edit").textContent = "Edit";
        } else {
            textSpan.contentEditable = "true";
            textSpan.focus();
            // Select all text inside the span
            document.execCommand('selectAll', false, null);
            data.querySelector(".edit").setAttribute("class","edit btn btn-sm btn-outline btn-success");
            data.querySelector(".edit").textContent = "Save";
        }
        isEditing = !isEditing;
    });
    return data;
}
