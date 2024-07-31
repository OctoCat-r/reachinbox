# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend  App using Nextjs with Typescript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Typescript
  - Nextjs(React)
  - TailwindCSS



## Demo Video :- 
https://www.loom.com/share/de3b417241184557b6744ea07dfd95df
## Login Page

![Screenshot (344)](https://github.com/OctoCat-r/reachinbox/blob/main/public/home.png)

## Landing Page

![Screenshot (346)](https://github.com/OctoCat-r/reachinbox/blob/main/public/dash.png)

## Dashboard with Dark Mode
 
![Screenshot 2024-04-02 213745](https://github.com/OctoCat-r/reachinbox/blob/main/public/dark-dash.png)

## Inbox

![Screenshot (355)](https://github.com/OctoCat-r/reachinbox/blob/main/public/inbox.png)

## Reply Email 

![Screenshot (356)](https://github.com/OctoCat-r/reachinbox/blob/main/public/reply.png)

## Delete Email 

![Screenshot (356)](https://github.com/OctoCat-r/reachinbox/blob/main/public/delete.png)



 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` git clone https://github.com/OctoCat-r/reachinbox.git  ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run dev ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>
   

   ## Features 
   
  - Authentication
  - Get Emails
  - Post (send) Email
  - Delete Email


   <h2>Endpoints</h2>
   <h3>All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>All Emails from Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Add Onebox Mail</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

 
   # Credits <br/>
   This project was developed by ```Aman Jain``` as a part of ```Reachinbox``` assignment.

   
