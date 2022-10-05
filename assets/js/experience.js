AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "UI/UX Designing Intern",
    cardImage: "assets/images/experience-page/sigma.png",
    place: "Sigma Analytics and Computing",
    time: "(June, 2021 - September 2022)",
    desp: "<li>Designed UI/UX of the BuyByeQ product website , App and WebApp.</li> <li> Worked on the UI/UX of other product websites of the company.</li> <li>Working on the probability of the sales of the product which customers will use.    </li>",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/verzeo.jpg",
    place: "Verzeo",
    time: "(March, 2021 - May 2021)",
    desp: "<li>Developed software that scans the image of a person.</li> <li>It gives the skin tone color based on the RGB coordinates.</li> <li>Languages used:- HTML,CSS,JavaScript,Python,Django,SQLite.</li>",
  },
  {
    title: "UI/UX Intern",
    cardImage: "assets/images/experience-page/ab.png",
    place: "Artificial Brix",
    time: "(Aug 2021 - Present)",
    desp: "<li>Designed the wireframe of the website and user flow of the product.</li><li>Designing the mobile responsive version and working on the contents of the website</li><li>Helped the team with 3-d modelling using blender</li>",
  },
  {
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/lgm.jpg",
    place: "Lets GrowMore",
    time: "(March 2021 - May 2021)",
    desp:"<li>Developed a one-page website using HTML, CSS, and JS.</li><li>Developed a Student Management System Software.It shows the results and can be updated by the admin and results can be viewed by students.Languages used-HTML,CSS,JavaScript,PHP and MySQL</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  
  {
    title: "Technical Lead - Google Developers Students Club",
    cardImage: "assets/images/experience-page/gdsc.png",
    description:
      "As a technical lead for the club, my responsibilities include supervising the events and all the domains.",
  },
  {
    title: "Graphic Designer - GirlScript Bhubaneswar",
    cardImage: "assets/images/experience-page/girlscript.png",
    description:
      "Designed all the graphics and posters for the Girlscript Odisha Regional Summit .",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Popular Choice Winners",
    subtitle: "TecHacks 2.0",
    image: "assets/images/experience-page/techhack.jpg",
    desp: "Developed a website for students which takes speech to text API in the Interview Practice Questions and gives roadmaps and career informations. ",
  },
  {
    title: "Nilachal-Bidyut Prava Memorial Award",
    subtitle: "Nilachal Polytechnic",
    image: "assets/images/experience-page/bidyut.jpg",
    desp: "Awarded as Nilachal-Bidyut Prava Memorial Award for being state and college topper in 4th semester. ",
  },
  {
    title: "Semi Finalists",
    subtitle: "Smart India Hackathon 2022",
    image: "assets/images/experience-page/sih.jpg",
    desp: "Developed a geotagging virtual experience to visit colleges and explore the campus and other choices just by sitting at home. ",
  },
  {
    title: "State Topper",
    subtitle: "4th and 6th Semester",
    image: "assets/images/experience-page/topper.jpg",
    desp: "Awarded as state topper and girls topper for scoring highest mark in 4th and 6th Semester.",
  },
  {
    title: "Junior Girls Champion",
    subtitle: "Interschool Sports",
    image: "assets/images/experience-page/girl.jpg",
    desp: "Awarded as junior girls champion for winning 4 track games.",
  },
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
            
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
