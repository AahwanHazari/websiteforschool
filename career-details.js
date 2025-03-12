const careerData = {
    "Data Analyst": {
        description: "Data Analysts collect, clean, and analyze data to help businesses make informed decisions. They work with Excel, SQL, and Python.",
        image: "datanalyst.jpg",
        resources: [
            { name: "Google Data Analytics Course", link: "https://www.coursera.org/professional-certificates/google-data-analytics" },
            { name: "SQL for Data Analysis", link: "https://mode.com/sql-tutorial/" }
        ]
    },
    "Machine Learning Engineer": {
        description: "Machine Learning Engineers build AI models using algorithms and deep learning techniques. They work with TensorFlow, PyTorch, and cloud computing.",
        image: "mlengineer.jpg",
        resources: [
            { name: "Machine Learning by Andrew Ng", link: "https://www.coursera.org/learn/machine-learning" },
            { name: "Deep Learning Specialization", link: "https://www.coursera.org/specializations/deep-learning" }
        ]
    },
    "Data Scientist": {
        description: "Data Scientists analyze complex datasets, build predictive models, and drive data-driven decisions using statistics and AI.",
        image: "datascienct.jpg",
        resources: [
            { name: "Python for Data Science", link: "https://www.datacamp.com/courses/intro-to-python-for-data-science" },
            { name: "Data Science Specialization", link: "https://www.coursera.org/specializations/jhu-data-science" }
        ]
    }
};

// Extract role from URL
const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get("role");

// Display career details
if (role && careerData[role]) {
    document.getElementById("career-title").innerText = role;
    document.getElementById("career-description").innerText = careerData[role].description;
    document.getElementById("career-image").src = careerData[role].image;

    // Populate resources list
    const resourcesList = document.getElementById("career-resources");
    careerData[role].resources.forEach(resource => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${resource.link}" target="_blank">${resource.name}</a>`;
        resourcesList.appendChild(li);
    });
} else {
    document.getElementById("career-title").innerText = "Career Not Found";
    document.getElementById("career-description").innerText = "Oops! It looks like the career you're looking for doesn't exist.";
}

// Back button function
function goBack() {
    window.location.href = "index.html"; // Redirect back to main page
}
