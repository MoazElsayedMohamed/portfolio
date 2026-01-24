import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

function App() {
  return (
    <main>
      <section className="flex justify-between items-center p-4 lg:mb-20">
        <div className="w-32">
          <img src="/logo.jpg" className="" alt="" />
        </div>
        <div className="flex gap-10 font-medium text-lg pr-20 items-center">
          <a href="#" className="hover:text-[#221999]">
            Home
          </a>
          <a href="#projects" className="hover:text-[#221999]">
            Projects
          </a>
          <a href="#about" className="hover:text-[#221999]">
            About
          </a>
          <a
            href="/public/Moaz-Elsayed-Resume.pdf"
            download="Moaz-Elsayed-Resume.pdf"
            className="rounded-2xl border p-3 hover:bg-[#4e525a] hover:text-white border-[#4e525a] text-[#4e525a]"
          >
            Download CV
          </a>
        </div>
      </section>
      <section className="px-8 lg:flex lg:justify-between text-[#4e525a] font-normal lg:mb-40 mb-20">
        <div className="flex-1 flex flex-col gap-6 mt-6">
          <div className="flex flex-col gap-4">
            <h3 className="lg:text-2xl text-xl">Hey,I'm Moaz 👋</h3>
            <h1 className="lg:text-8xl text-6xl font-bold text-[#05070a] font-['poppins',sans-serif]">
              <span className="text-[#221999]">Front</span>end Developer
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="lg:text-3xl text-2xl tracking-tighter font-normal leading-8">
              I'm a frontend developer based in Egypt, I'll help you build
              beautiful websites your users will love.
            </p>
            <div className="flex gap-4">
              <a href="#projects">
                <button
                  className="py-2 px-4 hover:bg-[#4e525a] hover:text-white border-[#4e525a]
                  cursor-pointer rounded-lg text-base font-medium border"
                >
                  Browse Projects
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className=" flex-1 self-right flex justify-end">
          <img
            src="/image-2.jpg"
            className="rounded-full object-cover p-10 border w-3/4 hidden lg:block"
            alt=""
          />
        </div>
      </section>
      <section className="px-8 mb-20 lg:mb-40" id="projects">
        <h1 className="lg:text-6xl text-4xl text-[#171516] font-bold mb-12">
          Projects<span className="text-[#221999]">.</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 ">
          <div className="flex flex-col gap-7">
            <img
              src="/furniro.jpg"
              alt="furniro"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">Furniro</h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/furniro.jpg"
                      alt="furniro"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>Furniro</DialogTitle>
                          <DialogDescription className="text-base">
                            An E-commerce web application used for buying
                            furniture thing like chairs ...etc.
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/Furniro"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>
                            Advanced filtering by price, material, color, style,
                            dimensions, and brand
                          </li>
                          <li>
                            Detailed product pages with multiple high-quality
                            images, 360° views, specifications, and dimensions
                          </li>
                          <li>
                            User registration and login (email/password and
                            social login options)
                          </li>
                          <li>
                            Stock availability and estimated delivery dates
                          </li>
                          <li>
                            Product catalog with categories (chairs, tables,
                            sofas, beds, storage, outdoor furniture, etc.)
                          </li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>html</li>
                          <li>tailwindcss</li>
                          <li>React</li>
                          <li>tanstack-query</li>
                          <li>strapi</li>
                          <li>vite</li>
                          <li>Responsive Design</li>
                        </ul>
                      </div>
                    </DialogHeader>

                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg font-semibold text-[#666060]">
                An E-commerce web application used for buying furniture thing
                like chairs ...etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <img
              src="/jobify.jpg"
              alt="jobify"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">Jobify</h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/jobify.jpg"
                      alt="jobify"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>Jobify</DialogTitle>
                          <DialogDescription className="text-base">
                            MERN Stack Application for tracking Job Search
                            Process
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/jobify"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>User registration and login</li>
                          <li>Edit user-data </li>
                          <li>Add Jobs</li>
                          <li>
                            Browse user's jobs with (search + filter)
                            feature{" "}
                          </li>
                          <li>
                            Display jobs-status + monthly-applications in graphs
                          </li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>React</li>
                          <li>React-Router</li>
                          <li>Styled-Components</li>
                          <li>Node js</li>
                          <li>Express</li>
                          <li>MongoDB</li>
                          <li>Responsive Design</li>
                        </ul>
                      </div>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <p className="text-lg font-semibold text-[#666060]">
                MERN Stack Application for tracking Job Search Process
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <img
              src="/the-wild-oasis.jpg"
              alt="the wild oasis"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">
                  The Wild Oasis
                </h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/the-wild-oasis.jpg"
                      alt="the wild oasis"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>The Wild Oasis</DialogTitle>
                          <DialogDescription className="text-base">
                            A web application for hotel management system,
                            Allowing employees to manage everything about hotel
                            bookings, cabins, and guests.
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/The-Wild-Oasis"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>User Authentication and Signup</li>
                          <li>User Profile Management</li>
                          <li>
                            Booking Management: ( Check-in / Check-out / Delete
                            / Filter )
                          </li>
                          <li>
                            Cabin Management: ( Create / Update / Delete /
                            Duplicate / Filter )
                          </li>
                          <li>
                            Edit hotel settings ( price, min/max nights, min/max
                            guests )
                          </li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>React</li>
                          <li>React-Query</li>
                          <li>Styled-Components</li>
                          <li>Vite</li>
                          <li>Supabase</li>
                          <li>Vercel</li>
                          <li>Responsive Design</li>
                        </ul>
                      </div>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg font-semibold text-[#666060]">
                A web application for hotel management system, Allowing
                employees to manage everything about hotel bookings, cabins, and
                guests.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <img
              src="/world-wise.jpg"
              alt="world wise"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">WorldWise</h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/world-wise.jpg"
                      alt="world wise"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>WorldWise</DialogTitle>
                          <DialogDescription className="text-base">
                            A tracking web app using the clicking on the map to
                            track, find, and add city to tracking list.
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/Worldwise"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>
                            Users have to login first to be able to track cities
                          </li>
                          <li>
                            Anyone can track city and make a tracking list
                          </li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Html</li>
                          <li>CSS</li>
                          <li>React</li>
                          <li>React-Router-Dom</li>
                          <li>React-Datepicker</li>
                          <li>React-leaflet</li>
                          <li>Responsive Design</li>
                        </ul>
                      </div>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg font-semibold text-[#666060]">
                A tracking web app using the clicking on the map to track, find,
                and add city to tracking list.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <img
              src="/usePopcorn.png"
              alt="usePopcorn"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">
                  UsePopcorn
                </h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/usePopcorn.png"
                      alt="usePopcorn"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>UsePopcorn</DialogTitle>
                          <DialogDescription className="text-base">
                            A movie rating web app using the search bar to allow
                            users to search, view, modify, bookmark and add
                            ratings.
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/usePopcorn"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Browse fetched movies</li>
                          <li>Rate and add movies to rating list</li>
                          <li>Persist data in localstorage</li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Html</li>
                          <li>CSS</li>
                          <li>React</li>
                          <li>Responsive Design</li>
                        </ul>
                      </div>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg font-semibold text-[#666060]">
                A movie rating web app using the search bar to allow users to
                search, view, modify, bookmark and add ratings.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <img
              src="/nasa-mission-control.png"
              alt="nasa mission control"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">
                  Nasa-Mission-Control
                </h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/nasa-mission-control.png"
                      alt="nasa mission control"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>Nasa-Mission-Control</DialogTitle>
                          <DialogDescription className="text-base">
                            An app for managing and monitoring spaceflights to
                            habitable planets in the observable universe.
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/NASA-Mission-Control"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>
                            Real-time mission status dashboard showing all
                            active, planned, and completed spaceflights{" "}
                          </li>
                          <li>
                            Live telemetry data (velocity, distance traveled,
                            fuel levels, system health)
                          </li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Javascript</li>
                          <li>React</li>
                          <li>Nodejs</li>
                          <li>Express</li>
                          <li>MongoDB</li>
                          <li>Jest</li>
                          <li>AWS</li>
                        </ul>
                      </div>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg font-semibold text-[#666060]">
                An app for managing and monitoring spaceflights to habitable
                planets in the observable universe.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <img
              src="/forkify.png"
              alt="forkify"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">
                  Forkify App
                </h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/forkify.png"
                      alt="forkify"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>Forkify App</DialogTitle>
                          <DialogDescription className="text-base">
                            A recipe web app using the Forkify API to allow
                            users to search, view, modify, bookmark and add
                            recipes.
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/Forkify-app"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Search for recipes</li>
                          <li>Update the number of servings</li>
                          <li>Bookmark recipes</li>
                          <li>Create recipes</li>
                          <li>
                            Access to bookmarks and recipes when leaving the app
                            and coming back later
                          </li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Html</li>
                          <li>CSS</li>
                          <li>Javascript</li>
                          <li>Parcel</li>
                          <li>Babel</li>
                          <li>Forkify API</li>
                        </ul>
                      </div>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg font-semibold text-[#666060]">
                A recipe web app using the Forkify API to allow users to search,
                view, modify, bookmark and add recipes.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <img
              src="/mapty.png"
              alt="mapty"
              className="rounded-2xl shadow-2xl"
            />
            <div className="ps-2 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-bold text-[#333232]">Mapty</h3>
                <Dialog>
                  <DialogTrigger>
                    <BsArrowUpRightCircle
                      size={24}
                      className="text-[#221999] cursor-pointer mt-1.5"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                    <img
                      src="/public/mapty.png"
                      alt="mapty"
                      width="1365"
                      height="603"
                      className="pt-6"
                    />
                    <DialogHeader>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <DialogTitle>Mapty</DialogTitle>
                          <DialogDescription className="text-base">
                            Workouts logging page for Cycling and Running using
                            map .
                          </DialogDescription>
                        </div>
                        <a
                          href="https://github.com/MoazElsayedMohamed/Worldwise"
                          target="_blank"
                        >
                          <FaGithub
                            size={36}
                            className="hover:text-[#221999] cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc ps-5 grid lg:grid-cols-2 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Display location on map</li>
                          <li>
                            submitting workouts on any location on the map
                          </li>
                          <li>select workout type : (running / cycling)</li>
                          <li>select workout to view it on the map</li>
                          <li>
                            User's workouts are saved using local-storage AP
                          </li>
                          <li>Reset button to delete all user's data</li>
                        </ul>
                        <h5 className="text-lg font-semibold">Tools</h5>
                        <ul className="list-disc ps-5 grid grid-cols-3 gap-x-8 gap-y-2 text-[#666060]">
                          <li>Html</li>
                          <li>CSS</li>
                          <li>Javascript</li>
                        </ul>
                      </div>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild></DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg font-semibold text-[#666060]">
                Workouts logging page for Cycling and Running using map .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 mb-20 lg:mb-40" id="about">
        <h1 className="lg:text-6xl text-4xl text-[#171516] font-bold mb-8">
          Experience<span className="text-[#221999]">.</span>
        </h1>
        <div>
          <h2 className="lg:text-xl text-lg mb-1">
            Software Engineer
            <span className="text-[#221999]">@Robusta Studio by RTG</span>
          </h2>
          <p className="mb-4 text-sm lg:text-base">October 2024 - present</p>
          <ul className="list-disc ps-5 flex flex-col gap-2 lg:text-lg text-base text-[#666060]">
            <li>
              Delivered production-ready features and resolved UI/UX issues for
              a live real estate platform, ensuring smooth customer experience
              and platform stability.
            </li>
            <li>
              Implemented a custom booking flow by building a manual calendar,
              time slot selection, and a sales booking form, improving lead
              management and user engagement
            </li>
            <li>
              Worked with environment variables and backend configurations to
              support multiple environments (development, staging, production).
            </li>
            <li>
              Developed service and listing forms and integrated them with the
              backend via POST requests, enabling smooth data submission and
              dynamic content updates.
            </li>
            <li>
              Implemented localization and internationalization (i18n) using
              Lingui and Next-Intl, enabling multi-language support across the
              application.
            </li>
            <li>
              Resolved UI/UX bugs and optimized the payment step, ensuring a
              smoother and more reliable user checkout experience.
            </li>
            <li>
              Developed the “Circles” feature, including a dynamic circle
              members tree visualization on the circle inner page, fostering
              community interaction and transparency.
            </li>
          </ul>
        </div>
      </section>
      <section className="px-8 mb-20 lg:mb-40">
        <h1 className="lg:text-6xl text-4xl text-[#171516] font-bold mb-8">
          Skills<span className="text-[#221999]">.</span>
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="lg:text-2xl text-xl font-bold text-[#272024]">
              Web Design
            </h4>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Responsive Design
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              User Research
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="lg:text-2xl text-xl font-bold text-[#272024]">
              Frontend
            </h4>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              HTML5
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              CSS3
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Javascript
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              ReactJs
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              NextJs
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="lg:text-2xl text-xl font-bold text-[#272024]">
              Backend
            </h4>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Strapi Dashboard
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              NodeJs
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Vercel
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="lg:text-2xl text-xl font-bold text-[#272024]">
              Soft Skills
            </h4>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Effective communication
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Collaboration
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Commitment
            </p>
            <p className="lg:text-lg text-base text-[#4e525a] font-medium">
              Leadership
            </p>
          </div>
        </div>
      </section>
      <section className="px-8 mb-8">
        <h1 className="lg:text-6xl text-4xl text-[#171516] font-bold mb-10">
          My Story<span className="text-[#221999]">.</span>
        </h1>
        <p className="lg:text-xl text-lg text-[#4e525a] font-normal mb-4">
          I'm a Frontend Developer from Egypt with experience in Machine
          Learning. I have a degree in Communication Engineering in 2022.
        </p>
        <p className="lg:text-xl text-lg text-[#4e525a] font-normal leading-8 mb-4">
          I'm Passionate and detail-oriented Frontend Engineer with 1 year of
          hands-on experience building responsive, user-friendly web
          applications.
        </p>
        <p className="lg:text-xl text-lg text-[#4e525a] font-normal leading-8 mb-4">
          Proficient in modern JavaScript frameworks like{" "}
          <span className="text-[#221999]">React.js</span> and{" "}
          <span className="text-[#221999]">Next.js</span> , with a strong
          foundation in <span className="text-[#221999]">HTML, CSS</span>, and
          component-based architecture.
        </p>
        <p className="lg:text-xl text-lg text-[#4e525a] font-normal leading-8 mb-4">
          Experienced in collaborating within agile teams, integrating RESTful
          APIs, and maintaining clean, scalable codebases.
        </p>
        <p className="lg:text-xl text-lg text-[#4e525a] font-normal leading-8">
          Committed to continuous learning and improving UI/UX to deliver
          impactful digital experiences.
        </p>
      </section>
      <footer className="py-8">
        <div className="container mx-auto flex justify-between px-2">
          <p className="text-lg font-semibold">
            Created by Moaz Elsayed &copy; {new Date().getFullYear()} .
          </p>
          <div className="flex gap-4">
            <FaLinkedin
              size={32}
              className="hover:text-[#221999] cursor-pointer"
            />
            <FaGithub
              size={32}
              className="hover:text-[#221999] cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
