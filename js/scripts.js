let sidebar = {
    profilePicture: src="IMG_0615.jpg",
    contactInfo: {
        email: "carolina.cesa@gmail.com",
        phoneNumber: "+46 0727174531",
        location: "Stockholm, Sweden",
        linkedin: "https://www.linkedin.com/in/carolina-boschetti/"
    },
    skills: ["Documentation", "Negotiation", "Scrum", "Team Work", "Kanban", "JIRA", "Strategy", "Decision Making", "Confluence", "Frontend", "Vue.js", "JavaScript"]
}
let image = document.querySelector(".profile-picture img")
image.setAttribute("src", sidebar.profilePicture)
const contactInfoTemplate = `<a href="mailto:${sidebar.contactInfo.email}?subject=Contact from your Resume">${sidebar.contactInfo.email}</a>
                <a href="tel:${sidebar.contactInfo.phoneNumber}">${sidebar.contactInfo.phoneNumber}</a>
                <address class="location">${sidebar.contactInfo.location}</address>
                <a href="${sidebar.contactInfo.linkedin}" target="_blank">${sidebar.contactInfo.linkedin}</a>`                           
document.querySelector(".text-and-icons").insertAdjacentHTML("afterbegin", contactInfoTemplate)

let skillTemplate = ""
sidebar.skills.forEach(function(skill) {
    skillTemplate +=`<mark class="skills">${skill}</mark>`
})
document.querySelector(".skillsp").insertAdjacentHTML("beforeend", skillTemplate)