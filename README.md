Multi-Tenant Event & Ticket Reservation System

1. Project Overview

The Multi-Tenant Event & Ticket Reservation System is a web-based application that allows multiple event organizers to create and manage events while attendees can browse events and reserve tickets online.

The system supports different user roles, ticket categories, temporary ticket reservations, simulated payment processing, and event revenue analytics.

2. Objectives

1. Provide separate access for administrators, organizers, and attendees.
2.  Allow organizers to create events and manage ticket quantities.
3.   Support VIP and General Admission ticket categories.
4.    Prevent multiple users from booking the same available ticket inventory.
5.Implement temporary ticket holds that expire after 10 minutes.
6.Simulate asynchronous payment approval and rejection.
7.Display event revenue and booking conversion analytics.

3. User Roles

Administrator

• Manage and monitor the platform.
• View system-level information.

Organizer

• Create and update events.
• Configure ticket categories, prices, quantities, and booking cutoffs.
• Monitor reservations and revenue.

Attendee

• Browse available events.
• Reserve tickets.
• Complete simulated payments.
• View booking status.

4. Main Features

1. Role-based authentication and authorization.
2. Multi-organizer event management.
3. VIP and General Admission ticket inventory.
4. Ten-minute temporary booking holds.
5. Simulated asynchronous payment processing.
6. PostgreSQL transactions and row-level locking to reduce double-booking.
7. Redis-based event caching.
8. Automatic expiry of abandoned booking holds.
9. Revenue and booking conversion analytics.
10. API documentation and testing using Postman.


5. Database Design

The database is designed around the following entities:

1.Users: Stores user accounts and roles.
2. Organizations: Stores organizer or tenant information.
3. Events: Stores event details, dates, locations, and booking cutoffs.
4. Ticket Types: Stores ticket categories, prices, and inventory.
5. Orders: Stores reservation and payment status.
6. Order Items: Stores the tickets associated with each order.

Foreign keys and database constraints help maintain data integrity. Transactions and row-level locking are used when updating ticket inventory.

6. API Overview

The application provides API endpoints for:

1. Authentication and user registration.
2. Event creation, listing, and management.
3. Ticket reservation and booking holds.
4. Simulated payment processing.
5. Booking status and order history.
6. Revenue and conversion analytics.

Refer to the API documentation for endpoint details.

7. Installation and Execution

Prerequisites

1. Node.js and npm
2. PostgreSQL
3. Redis

Setup

1. Clone or download the repository.
2. Install the required Node.js dependencies.
3. Configure database, Redis, and authentication settings in the environment file.
4. Initialize the database schema.
5. Start the backend server and background worker.
6. Open the frontend and test the application.

See the project setup instructions for the exact commands and configuration.

8. Expected Outcome

The system is intended to provide a structured event reservation platform that supports multiple organizers, manages ticket inventory, simulates payment processing, and provides basic analytics while reducing the risk of duplicate bookings.

9. Future Enhancements

• Integration with a real payment gateway.
• Email and SMS booking notifications.
• QR-code ticket generation.
• Advanced analytics dashboards.
• Cloud deployment and automated CI/CD.
• Automated concurrency and load testing.

10. Conclusion

The Multi-Tenant Event & Ticket Reservation System combines web development, relational database management, caching, authentication, and concurrency control to address common challenges in online event booking.

This repository contains a starter implementation intended for further development, testing, and deployment.
