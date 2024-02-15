"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Blog App",
    desc: "This platform showcases my expertise in web development while delivering engaging content.The app boasts a modern and intuitive user interface, making it easy for users to navigate and explore latest posts.",
    img: "/event1.png",
    link: "https://buzzniche.co.ke/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Events App",
    desc: "A Next.js Event app that redefines how we connect and celebrate. With sleek design and powerful functionality, this app seamlessly bridges the gap between organizers and attendees, ensuring every event is unforgettable",
    img: "/event4.png",
    link: "https://events-platform-rho.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Restraunt/Club Website",
    desc: "Check out this restaurant website I created with responsive design to intuitive navigation, every pixel reflects my dedication to creating engaging web experiences.",
    img: "/event3.png",
    link: "https://miles001lounge.co.ke/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Blog App",
    desc: "This blog app is your go-to destination for reading and sharing interesting articles on Talent. With a clean and user-friendly interface, you can easily browse through various topics, read captivating posts, and engage with other talents.",
    img: "/event2.png",
    link: "https://www.thaskoolculture.co.ke/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex v-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-54 md:w-96 md:h-62 lg:w-[450px] lg:h-[250px] xl:w-[500px] xl:h-[300px] border-solid border-2">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                F r o n t-e n d D e v e l o p e r
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
