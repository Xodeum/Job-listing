// Fetch job listings from jobs.json
fetch('jobs.json')
    .then(response => response.json())
    .then(jobs => {
        const jobListings = document.getElementById('job-listings');
        jobs.forEach(job => {
            const jobListing = document.createElement('div');
            jobListing.classList.add('job-listing');
            jobListing.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.description}</p>
            `;
            jobListings.appendChild(jobListing);
        });
    });