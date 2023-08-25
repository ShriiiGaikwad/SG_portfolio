/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Srigandhrav's Portfolio",
  description:
    "Possess sharp analytical skills, attention to detail, and a knack for ensuring top-notch product quality.",
  og: {
    title: "Srigandhrav Portfolio",
    type: "website",
    //url: "http://srigandhravgaikwad.me/",
  },
};

//Home Page
const greeting = {
  title: "Srigandhrav Gaikwad",
  logo_name: "Srigandhrav Gaikwad",
  nickname: "Shriii",
  subTitle:
    "A results-driven professional with a Bachelor's in Electronics and telecommunication Engineering and ongoing studies in Analytics at the University of Southern California. I bring a robust foundation in Machine Learning, Data Structures, and AI.",
  resumeLink: "https://drive.google.com/file/d/1YP-TN4aarYGqRY2XA_memHUSOx1tMsQG/view?usp=sharing",
  coverLink: "https://drive.google.com/file/d/1QYNJ3ietZdAxTJslipq4-wZwBY9DG-tz/view?usp=sharing",
  // portfolio_repository: "https://github.com/prajwalpatankar/masterPortfolio",
 // githubProfile: "https://github.com/prajwalpatankar/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/prajwalpatankar",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ShriiiGaikwad",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sgaikwad99/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ssgaikwa@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shriii.16/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning",
      fileName: "FullStackImg",
      skills: [
        "👨‍💻 Master programming languages like Python and R for implementing ML algorithms",
        "👨‍💻 Ability to interpret performance metrics and adjust models accordingly to improve results.",
        "👨‍💻 Embracing an iterative approach to model development, experimenting and iterating to improve model performance",
        "👨‍💻 Strong problem-solving skills to approach complex challenges and devise appropriate machine learning solutions",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        ,
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f05133",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Managment & Leadership",
      fileName: "DataScienceImg",
      skills: [
        "⚛️ Skill in identifying market trends, customer needs, and competitive landscape to guide product direction",
        "⚛️ Capacity to manage multiple tasks, prioritize effectively, and meet deadlines in a dynamic environment.",
        "⚛️ Skill in analyzing challenges and generating creative solutions, even with limited experience",
        "⚛️ Readiness to work collaboratively with designers, engineers, marketers, and other teams to deliver a cohesive product",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "ph:robot",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Data Analytics",
      fileName: "CloudInfraImg",
      skills: [
        "⚛️ Proficiency in using tools like Excel, SQL, or Python to clean, transform, and manipulate data.",
        "⚛️ Proficiency in writing SQL queries to retrieve and manipulate data from databases",
        "⚛️ Capacity to work in cross-functional teams, collaborate with other analysts, and share insights",
        "⚛️ Strong focus on accuracy and precision in data analysis and reporting",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#ffa117",
      },
      profileLink: "https://leetcode.com/patankarprajwal/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/patankarprajwal",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/prajwal600",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/prajwalpatankar",
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Master of Science in Analytics",
      logo_path: "USC_logo.png",
      alt_name: "USC",
      duration: "2023-Present",
      descriptions: [
        "⚛️ Graduating in May 2025",
        "⚛️ Courses Taken : ISE 529: Predictive Analytics ,CSCI 558: Data Managment for Analytics",
      ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "Pune Institute of Computer Technology",
      subtitle: "Bachelor of Engineering in Electronics & Telecommunications",
      logo_path: "pict_logo.png",
      alt_name: "PICT Pune",
      duration: "2018-2022",
      descriptions: [
        "⚛️ CGPA : 3.52 / 4",
        "⚛️ Mangment lead at Computer Socitey of India PICT Student Branch",
        "⚛️ Course Work : Engineering Mathematics, Data Structures & Algorithms, Machine Learning, Object Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Business Development, Artifical Intelligence",
      ],
      website_link: "http://pict.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: " Charles severance",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/NBBJZMGBGSLX",
      alt_name: "Stanford University",
      color_code: "#eeeeeeee",
    },
    {
      title: "Technical Support Fundamentals by Google",
      subtitle: "Google Employees",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3GEE7B54BPT4",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "The Bits and Bytes of Computer Networking by Google",
      subtitle: "Google Employees",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XUHGZPC6NJCY",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    /*{
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/WG8BQSY7TF3V",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/YB4SY2D828B6",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Front-End Web Development with React",
      subtitle: "- Jogesh Mupalla",
      logo_path: "thkuosat.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/EXCCLSQH7MZF",
      alt_name: "React",
      color_code: "#fff",
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "- Susan Roger",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/SQ3KSY42GCTE",
      alt_name: "deeplearning.ai",
      color_code: "#fff",
    },
    {
      title: "Java Programming: Principles of Software Design",
      subtitle: "- Robert Duvall",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/U224JTFHTLBH",
      alt_name: "Java",
      color_code: "#fff",
    },
    {
      title: "Java Programming: Solving Problems with Software",
      subtitle: "- Owen Astrachan",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/5AUKAZ59FUGZ",
      alt_name: "Java",
      color_code: "#fff",
    },
    {
      title: "Java Programming: Arrays, Lists, and Structured Data",
      subtitle: "- Andrew Hilton",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/4A2MJPYD7WD5",
      alt_name: "deeplearning.ai",
      color_code: "#fff",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "My journey unfolds as a diligent Software Engineer in Test at eQ Technologic, where I championed cross-functional collaborations, elevating product quality and customer retention. With a dynamic Business Development internship at openHouse Pvt. Ltd, I harnessed targeted strategies and automation to fuel lead conversion rates and database precision.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer in Test",
          company: "eQ Technologic",
          company_url: "https://www.1eq.com/",
          logo_path: "eq.jpeg",
          duration: "August 2022 - June 2023",
          location: "Pune, India",
          description: "Orchestrated cross-functional partnerships to enhance product quality, yielding a 15% rise in customer retention and 20% fewer post-launch bug fixes through regular feedback sessions.",
          color: "#D83B01",
        },
        {
          title: "Business Development Intern",
          company: "openHouse",
          company_url: "https://openhouse.study/",
          logo_path: "openhouse.jpeg",
          duration: "Mar 2021 - April 2021",
          location: "Pune, India",
          description: "Executed targeted cold calling campaigns resulting in a 20% increase in qualified leads; implemented email automation system subsequently generating a 15% higher open rate and 10% conversion rate boost.",
          color: "#D83B01",
        },
        {
          title: "Data Science ",
          company: "The Sparks Foundation",
          company_url: "https://internship.thesparksfoundation.info/",
          logo_path: "spark.jpeg",
          duration: "Januray 2021 - February 2021",
          location: "Pune, India",
          description: "Developed micro-services for eQube-DAAS : a low/no-code integration platform and built DevOps pipelines. Devised a stand-alone security system using Java and Spring Framework to integrate authentication systems of all the BI and MI applications provided by eQ. Implemented efficient algorithmic techniques to improve overall run-time of existing code by 17%",
          color: "#D83B01",
        },
        /*{
          title: "Software Development Intern",
          company: "Rhythmflows Solutions Pvt. Ltd.",
          company_url:
            "https://rhythmflows.com",
          logo_path: "rhythm.png",
          duration: "Oct 2019 - Feb 2020",
          location: "Pune, Mharashtra, India",
          description: "Collaborated on a database-driven bank reconciliation system for multinational banks. Designed PostgreSQL database schemas and workflows for transactions. Created powerful REST APIs using Django-Rest Framework serving responsive frontend developed with Angular.",
          color: "#D83B01",
        },*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Overall Co-ordinator",
          company: "CSI Student Branch",
          company_url: "https://www.pictcsi.com/",
          logo_path: "csi.jpeg",
          duration: "November 2020 - June 2021",
          location: "Pune, India",
          description: "Overseeing and coordinating the activities and events of the technical computer club, Collaborating with other clubs, student organizations, and external partners to enhance the club's reach and impact. Building relationships with industry professionals, guest speakers, and potential sponsors. Maintaining records of club activities, attendance, event outcomes, and other relevant data ",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "Impetus & concepts",
          company_url: "https://pictinc.org/",
          logo_path: "inc.png",
          duration: "February 2020 - March 2020 ",
          location: "Pune, India",
          description: "Collaborate with the organizing team to create a set of well-structured and diverse technical questions that cover relevant topics. Work closely with the evaluation team to ensure consistency and fairness in grading participants' answers ",
          color: "#D83B01",
        },
        {
          title: "Event Head",
          company: "Xenia",
          company_url: "https://www.pcsbxenia.com/",
          logo_path: "xenia.jpeg",
          duration: "May 2021 - July 2021",
          location: "Pune, Maharashtra, India",
          description: "Conceptualize and plan the event, outlining its objectives, themes, and scope. ecruit and lead a team of volunteers, assigning roles and responsibilities based on individual strengths. Ensure that the event's technical and non-technical content aligns with the intended standards and objectives. Ensure all operational aspects are well-organized and smoothly executed. ",
          color: "#D83B01",
        },
        {
          title: "Core Team Member",
          company: "PICT IEEE Students Branch",
          company_url: "https://pictieee.in/",
          logo_path: "IEEE.png",
          duration: "Aug 2019 - Jul 2020",
          location: "Pune, India",
          description: "PICT IEEE Students Branch is an organisation awarded as Best Student Chapter among all IEEE chapters across Pune, with an aim of inculcating a sense of technical awareness amongst its student members. PISB aims to escalate the knowledge of developments and trends in the diverse field of technology by holding two major events every year- Credenz and Credenz Tech Dayz alongside several seminars, workshops, hackathons. I was a core team member managin the organisation as a whole as well as managing sub-events under Credenz. I was also the head of the event 'Network Tresure Hunt' which was an online treasure hunt played by over 2000 players every year.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Hobbies",
      experiences: [
        {
          title: "Photography",
          company: "",
          logo_path: "camera.png",
          description: "I'm always carrying a camera around. Even as a hobby, photography has the power to lift people's spirits and help them look at things from a different perspective.",
          color: "#D83B01",
        },
        {
          title: "Riding Bikes",
          company: "",
          logo_path: "motorcycle.png",
          description: "Always been a motorhead. On weekends, I love going on long motorcycle rides. We all ride for different reasons, and sometimes for all the reasons: fun, adventure, to bond with friends, to save fuel, to relax, as a moving meditation, to make the commute more interesting, to get through traffic easier, to accomplish goals. The reasons are infinite.",
          color: "#D83B01",
        },
        {
          title: "eSports",
          company: "",
          logo_path: "csgo.png",
          description: "I enjoy playing competitive games like CS:GO and Valorant. I have participated in multiple Counter Strike tournaments. Proud to be a Global Elite (top 2%) in competitive CS:GO.",
          color: "#D83B01",
        },
        {
          title: "Cricket",
          company: "",
          logo_path: "cricket.jpeg",
          description: "I enjoy Cricket as a sport. I spend 2-3 hours playing cricket on weekends. It can provide you with a low-impact workout and it's a good way to relax and feel good.",
          color: "#D83B01",
        },
      ]
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Through my projects, I aim on solving real world problems. My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pp.png",
    description:
      "Looing for full-time opportunities as a Data/business Analyst as well as internship opportunities for Summer'24. You can get in touch with me on my email :)",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Email Address",
    subtitle:
      "ssgaikwa@usc.edu ",
    email2:
      "shriii.gaikwad@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (213) 886-0658",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
