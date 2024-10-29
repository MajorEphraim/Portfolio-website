const myApps = [
    {id:"1", name:'Globbi', thumbnail:"./assets/globii.jpg", icon:"./assets/globii_logo.png",description:"Globii is a dynamic platform connecting individuals facing professional challenges with experts, students, tutors, and skilled problem-solvers. Designed to facilitate timely, quality-driven solutions, Globii allows users to post questions on specific subjects, work tasks, or projects, which responders can address to earn recognition and financial rewards. By bridging the gap between problem creators and knowledgeable solvers, Globii empowers users with access to expertise while incentivizing quality support, creating a collaborative and resourceful environment for continuous learning and professional growth.", repo:"https://github.com/MajorEphraim/globii", apk:null},
    {id:"2", name:'Metro Booking', thumbnail:"./assets/metro.jpg", icon:"./assets/metro_logo.png",description:"Metrorail Booking is a mobile platform designed to simplify train travel with a seamless booking experience. Users can easily reserve train tickets from their smartphones, receive virtual tickets, and access up-to-date train schedules in real-time. With its focus on convenience and accessibility, Metrorail Booking enhances the travel experience, empowering users to manage their journeys with ease and confidence.", repo:"https://github.com/MajorEphraim/metrorail-booking", apk:null},
    {id:"3", name:'SignSay', thumbnail:"./assets/signsay.png", icon:"./assets/signsay_logo.png",description:"SignSay is an innovative accessibility app that translates spoken language into sign language through animated visuals on-screen. Designed to bridge communication gaps for the Deaf and Hard of Hearing communities, SignSay allows spoken words to be instantly converted into sign language animations, enhancing inclusivity and supporting seamless interaction in real-time. With SignSay, users gain a powerful tool for fostering understanding and accessibility in everyday conversations", repo:"https://github.com/MajorEphraim/SignSay", apk:null}
]

const myWebApps = [
    {id:"1", name:'PicPica', thumbnail:"picpica.jpg", icon:"picpica logo.png",description:"PicPica is an interactive gambling platform that combines entertainment and skill with a unique twist. Users can select cards featuring engaging animal pictures, and if they choose the correct one, their balance increases. For those who want to explore the game first, PicPica offers a demo mode where players can enjoy the gameplay without logging in. This feature ensures an easy entry for new users while adding a fun, animal-themed layer to the gambling experience.", repo:"https://github.com/MajorEphraim/PicPica"},
]

const mobile_apps_div = document.getElementById("mobile-apps")
const web_apps_div = document.getElementById("websites")

const projectAppender = (name, desc, thumbnail, logo, repo, apk)=>{
    
    const container = document.createElement('div')
    container.className = "project-container"
    container.innerHTML = 

     ` 
            <div class="thumbnail-container">
                <img src=${thumbnail} alt=${name} class="thumbnail" />
            </div>
            <div class="logo-btn-info">
                <div>
                    <div class="name-logo">
                        <p class="app-name">${name}</p>
                        <img src=${logo} class="app-logo"/>
                    </div>
                    <div class="app-description-container">
                        <p class="app-description">${desc}</p>
                    </div>
                </div>
                <div class="buttons">
                    <div class="button" id="dbtn">
                        <p class="dbtn-text">Download Apk</p>
                    </div>
                    <div class="button" id="vbtn">
                        <p class="vbtn-text">View Code</p>
                    </div>
                </div>
            </div>
    `

    return container
}

const appendApps = ()=>{
    let counter = 0;

    while (counter<myApps.length-1) {

        const twoAppsContainer = document.createElement('div')
        twoAppsContainer.className = "two-apps"

        mobile_apps_div.appendChild(twoAppsContainer)
        const j = counter
        
        for(let i =j; i<=j+1;i++){
            const app = myApps[i]
            twoAppsContainer.appendChild(projectAppender(app.name, app.description, app.thumbnail, app.icon, app.repo, app.apk))
        }
        counter+=2
    }
    const app = myApps[counter]
    if (counter >0)
        mobile_apps_div.appendChild(projectAppender(app.name, app.description, app.thumbnail, app.icon, app.repo, app.apk))


}

appendApps()
