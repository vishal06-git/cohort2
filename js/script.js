const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    profession: "Software Developer",
    description: "Aarav is a full-stack developer who loves building scalable web apps.",
    tags: ["JavaScript", "React", "Node.js"]
  },
  {
    fullName: "Priya Mehta",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    profession: "UI/UX Designer",
    description: "Priya creates intuitive and clean user interface designs for startups.",
    tags: ["Figma", "UX Research", "Prototyping"]
  },
  {
    fullName: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Data Analyst",
    description: "Rohan works with large datasets to extract meaningful insights.",
    tags: ["Python", "SQL", "PowerBI"]
  },
  {
    fullName: "Sneha Kapoor Rohan Patel",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Digital Marketer",
    description: "Sneha specialises in SEO, SEM and social media strategy.",
    tags: ["SEO", "Google Ads", "Branding"]
  },
  {
    fullName: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    profession: "Cybersecurity Expert",
    description: "Vikram focuses on system security, penetration testing and threat analysis.",
    tags: ["Ethical Hacking", "Cybersecurity", "Networking"]
  }
];


var sum = ''
users.forEach(function(elem){
   sum = sum + `<div class="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
      </div>`
})

var main = document.querySelector('main')
main.innerHTML = sum