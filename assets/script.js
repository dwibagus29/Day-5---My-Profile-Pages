let dataProject = []


function addProject() {
    let title = document.getElementById("input-project-title").value
    let startDate = document.getElementById("input-project-start").value
    let endDate = document.getElementById("input-project-end").value
    let desc = document.getElementById("input-project-description").value
    let image = document.getElementById("input-project-image").files
    let nodejs = document.getElementById("input-project-nodejs").checked
    let php = document.getElementById("input-project-php").checked
    let java = document.getElementById("input-project-java").checked
    let js = document.getElementById("input-project-jscript").checked

    if (nodejs) {
        nodejs = document.getElementById("input-project-nodejs").value
    } else {
        nodejs = ""
    } if (php) {
        php = document.getElementById("input-project-php").value
    } else {
        php = ""
    } if (java) {
        java = document.getElementById("input-project-java").value
    } else {
        java = ""
    }
    if (js) {
        js = document.getElementById("input-project-jscript").value
    } else {
        js = ""
    }

    if (title == "") {
        return alert ("Please fill in project")
    } if (startDate == "" ){
        return alert ("Please choose start date")
    }   if(endDate == ""){
        return alert ("Please choose end date")
    } if (desc == "") {
        return alert ("Please fill in description")
    } if (image.length != 0) {
        image = URL.createObjectURL(image[0])
    } else {
       return alert ("Please choose your image")
    }

    let project = {
        title,
        startDate,
        endDate,
        postAt: new Date(),
        author: "Bagus",
        desc,
        image,
        nodejs,
        php,
        java,
        js,
    }

    dataProject.push(project);
    renderProject();
    console.log(dataProject);

}

function renderProject() {
    document.getElementById("contents").innerHTML = ''

    for (let i = 0; i < dataProject.length; i++) {
        console.log(dataProject[i]);

        document.getElementById("contents").innerHTML += `
        <div class="col">
            <img src="${dataProject[i].image}" alt="">
            <div>
                <h2>${dataProject[i].title}</h2>
                <div class="time">
                    <p>${getFullTime(dataProject[i].postAt)} | ${dataProject[i].author}</p>
                    <p>${getDistanceTime(dataProject[i].startDate, dataProject[i].endDate)}</p>
                </div>
                <br>
                <p>${dataProject[i].desc}.<br>
                    Happy download</p>
                <div class="icon-group">
                    <i class="fa-brands fa-${dataProject[i].nodejs}"></i>
                    <i class="fa-brands fa-${dataProject[i].php}"></i>
                    <i class="fa-brands fa-${dataProject[i].java}"></i>
                    <i class="fa-brands fa-${dataProject[i].js}"></i>
                </div>
                <div class="btn-action">
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                </div>
            </div>
        </div>
        `
        
    }
}

let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


function getFullTime(time) {
    let date = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()
    let hours = time.getHours()
    let minutes = time.getMinutes()

    if (hours <= 9) {
        hours = `0${hours}`
    } else if (minutes <= 9) {
        minutes = `0${minutes}`
    }

    return `${date} ${monthName[month]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(start, end) {
    let timeStart = new Date(start)
    let timeEnd = new Date(end)

    let distance = timeEnd - timeStart

    let milisecond = 1000
    let secondInHours = 3600
    let hoursInDay = 24

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)

    if (distanceDay > 0) {
        return `${distanceDay} day ago`
    } else if (distanceHours > 0){
        return `${distanceHours} hour ago`
    } else if (distanceMinutes > 0){
        return `${distanceMinutes} minute ago`
    } else {
        return `${distanceSecond} second ago`
    }
}
