export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Javscript is my core domain",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Presync - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/presync.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://presync.vercel.app",
  },
  {
    id: 2,
    title: "Syncspace - Collaborative Tool for File Sharing",
    des: "",
    img: "/syncspace-pic.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://syncspace-rust.vercel.app",
  },
  {
    id: 3,
    title: "RESS - Invoice Generator at Riejom",
    des: "During my internship at Riejom Industries, I developed an invoice generator for the company which automated the invoice writing process and makes labour easier.",
    img: "/ress.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://ress.com.ng",
  },
  {
    id: 4,
    title: "Riejom Chemicals Official Website",
    des: "Built the official website for Riejom Chemicals Industry Limited during my internship",
    img: "/riejom.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://riejomchemicals.com.ng",
  },
];

export const testimonials = [
  {
    quote:
      "Kemdinachi has shown his professionalism, dedication, and passion to delivering exceptional results were evident throughout our project. We thank him for his service at Riejom Chemicals Industry, Aba.",
    name: "Dr. Ernest Nwaocha",
    title: "CEO Riejom Chemicals",
  },
  {
    quote:
      "Mr. Ifeanyi has shown his dedication in Full Stack Web Development. I believe this passion of his will go a long way in changing the world and a brighter future is ahead of him.",
    name: "Jogesh K. Muppala",
    title:
      "Associate Professor, Department of Computer Science and Engineering, The Hong Kong University of Science and Technology",
  },
  {
    quote:
      "Collaborating with Kemdinachi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. For his invaluable contribution at the Google Developer Student Clubs, Babcock Administration, I thank him.",
    name: "Lillian Onofiok",
    title: "Google Developer Student Club (GDSC) Lead, 23/24",
  },
];

export const companies = [
  {
    id: 1,
    name: "Riejom Chmical Industries",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "GDSC",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    desc: "Assisted in the development of a web-based platform at Riejom Industries using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Google Developers Student Club member",
    desc: "Developed, grew and collaborated with members of Babcock's GDSC web development first team and recruited younger members of the club",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Lead Developer of ElephantTribe at Teenznet",
    desc: "Developed and maintained user-facing features using modern frontend technologies at a bootcamp in 2019",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
