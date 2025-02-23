const properties = [
    {
        id: 1,
        title: "Downtown Luxury Apartment",
        address: "123 Main Street",
        price: 2500,
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        image: "images/properties/property1.jpg",
        description: "Modern luxury apartment in prime downtown location"
    },
    {
        id: 2,
        title: "Suburban Family Home",
        address: "456 Oak Avenue",
        price: 3200,
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1800,
        image: "images/properties/property2.jpg",
        description: "Spacious family home with large backyard"
    },
    // Add more properties as needed
];

function loadProperties() {
    const propertyGrid = document.querySelector('.property-grid');
    
    properties.forEach(property => {
        const propertyCard = `
            <div class="property-card">
                <img src="${property.image}" alt="${property.title}">
                <div class="property-info">
                    <h3>${property.title}</h3>
                    <p>${property.address}</p>
                    <p class="property-price">$${property.price}/month</p>
                    <p>${property.bedrooms} beds • ${property.bathrooms} baths • ${property.sqft} sqft</p>
                    <p>${property.description}</p>
                    <button onclick="inquireProperty(${property.id})">Inquire Now</button>
                </div>
            </div>
        `;
        propertyGrid.innerHTML += propertyCard;
    });
}

function handleSubmit(event) {
    event.preventDefault();
    // Add form submission logic here
    alert('Thank you for your inquiry. We will contact you soon!');
    event.target.reset();
}

function inquireProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    document.querySelector('select').value = `property${propertyId}`;
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
}

// Load properties when the page loads
document.addEventListener('DOMContentLoaded', loadProperties);
