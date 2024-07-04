const time = document.querySelector("#time");
const go = document.getElementById("start");
const pause = document.getElementById("stop");
const reset = document.getElementById("reset");
const lap = document.getElementById("lap");
const section = document.querySelector("section");

let id;
let hour = 0;
let min = 0;
let sec = 0;
let lapNumber = 0;

go.addEventListener("click", start);
pause.addEventListener("click", stop);
lap.addEventListener("click", AddData);
reset.addEventListener("click", () => {
    stop();
    hour = 0;
    min = 0;
    sec = 0;
    time.innerText = `00 : 00 : 00`;
});

document.addEventListener("DOMContentLoaded" , loadData)

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
function AddData() {
    let time = `${hour} : ${min} : ${sec}`;
    let text = `Lap no.${++lapNumber}`;
    AddHTML(time,text);
}

function AddHTML(time,text) {
    let data = document.createElement('div');
    data.innerHTML = `
        <div class="list flex justify-between text-[25px] rounded-2xl px-1 max-h-[70px]">
            <div class="flex items-center gap-3 h-[40px]">
                <span id = "timeData">${time}</span>
                <span class="data text-lg" id = "text">${text}</span>
            </div>
            <div class="flex items-center gap-2">
                <button class="edit btn btn-sm btn-outline btn-info">Edit</button>
                <i class="delete fa-regular fa-circle-xmark self-center cursor-pointer hover:text-red-700"></i>
            </div>
        </div>`;

    section.append(data);

    data.querySelector(".delete").addEventListener("click", () => {
        data.remove();
        saveData();
    });

    let isEditing = false;
    data.querySelector(".edit").addEventListener("click", () => {
        const textSpan = data.querySelector(".data");
        if (isEditing) {
            textSpan.contentEditable = "false";
            data.querySelector(".edit").setAttribute("class", "edit btn btn-sm btn-outline btn-info");
            data.querySelector(".edit").textContent = "Edit";
        } else {
            textSpan.contentEditable = "true";
            textSpan.focus();
            // Select all text inside the span
            document.execCommand('selectAll', false, null);
            data.querySelector(".edit").setAttribute("class", "edit btn btn-sm btn-outline btn-success");
            data.querySelector(".edit").textContent = "Save";
        }
        isEditing = !isEditing;
        saveData();
    });
    saveData();
}

function saveData(){
    const dataElement = document.querySelectorAll(".list");
    let save = [];
    dataElement.forEach((item)=>{
        let timeData = item.querySelector("#timeData").textContent;
        let text = item.querySelector("#text").textContent;
        save.push({timeData , text});
        localStorage.setItem("stopwatch" , JSON.stringify(save));
    })
}

function loadData() {
    let data = JSON.parse(localStorage.getItem("stopwatch"));
    if (data) {
        data.forEach((item)=>{
            AddHTML(item.timeData , item.text);
        })
    }
}