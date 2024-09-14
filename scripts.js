// script.js

// Sample event data
const events = [
  { id: 1, title: 'Football Match', category: 'sports', date: '2024-09-10', description: 'Come and cheer for your team!' },
  { id: 2, title: 'Jazz Night', category: 'music', date: '2024-09-12', description: 'Enjoy a night of smooth jazz performances.' },
  { id: 3, title: 'Coding Workshop', category: 'workshop', date: '2024-09-15', description: 'Learn the latest programming skills in this hands-on workshop.' },
  { id: 4, title: 'Art Exhibition', category: 'social', date: '2024-09-20', description: 'Explore the creativity of student artists.' },
  { id: 5, title: 'Basketball Tournament', category: 'sports', date: '2024-09-25', description: 'Join us for an exciting basketball tournament.' },
  { id: 6, title: 'Music Festival', category: 'music', date: '2024-09-30', description: 'A day of various musical performances and activities.' }
];

// Function to display events
function displayEvents(eventsToDisplay) {
  const eventList = document.getElementById('eventList');
  eventList.innerHTML = ''; // Clear existing events

  eventsToDisplay.forEach(event => {
      const eventItem = document.createElement('div');
      eventItem.classList.add('event-item');
      eventItem.innerHTML = `
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p>${event.description}</p>
      `;
      eventList.appendChild(eventItem);
  });
}

// Function to filter events
function filterEvents() {
  const category = document.getElementById('categoryFilter').value;
  const filteredEvents = category === 'all' ? events : events.filter(event => event.category === category);

  if (category === 'sports') {
      fetchSportsInfo(); // Display detailed sports info if category is 'sports'
  } else {
      document.getElementById('sportsInfo').style.display = 'none';
      displayEvents(filteredEvents); // Display filtered events for other categories
  }
}

// Function to fetch and display sports information
function fetchSportsInfo() {
  const sportsData = {
      events: [
          {
              title: 'Basketball Tournament',
              date: '2024-09-25',
              time: '10:00 AM',
              location: 'Main Gym',
              description: 'Join us for an exciting basketball tournament featuring teams from across the campus.'
          },
          {
              title: 'Soccer Match',
              date: '2024-09-18',
              time: '03:00 PM',
              location: 'Field 3',
              description: 'Cheer for our soccer team in this thrilling match against the rival college.'
          }
          // Add more sports events as needed
      ]
  };

  const sportsInfoSection = document.getElementById('sportsInfo');
  const sportsDetails = document.getElementById('sportsDetails');

  sportsDetails.innerHTML = '';
  sportsData.events.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('sports-event');
      eventDiv.innerHTML = `
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Time:</strong> ${event.time}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p><strong>Description:</strong> ${event.description}</p>
      `;
      sportsDetails.appendChild(eventDiv);
  });

  sportsInfoSection.style.display = 'block'; // Show the sports info section
}

// Add event listener for category filter
document.addEventListener('DOMContentLoaded', function () {
  const categoryFilter = document.getElementById('categoryFilter');

  categoryFilter.addEventListener('change', function () {
      filterEvents();
  });

  // Initial display of all events
  displayEvents(events);
});