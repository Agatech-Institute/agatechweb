'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaBookOpen, FaClock, FaTools } from 'react-icons/fa'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'


const coursesData = [
  {
    id: 1,
    title: 'App Development',
    image: '/APP.png',
    price: 85000,
    whatToGain: [
      'Master React Native & Flutter',
      'Build cross-platform apps',
      'Learn mobile UI/UX principles',
    ],
    duration: '12 Weeks',
    techStack: ['React Native', 'Flutter', 'Firebase', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Web Development',
    image: '/WEB.png',
    price: 95000,
    whatToGain: [
      'Full-stack web expertise',
      'Modern JavaScript frameworks',
      'Database & deployment mastery',
    ],
    duration: '14 Weeks',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Data Science',
    image: '/DATA.png',
    price: 110000,
    whatToGain: [
      'Data analysis & visualization',
      'Machine learning models',
      'Real-world data projects',
    ],
    duration: '16 Weeks',
    techStack: ['Python', 'Pandas', 'TensorFlow', 'Scikit-learn'],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    image: '/UI.png',
    price: 75000,
    whatToGain: [
      'Design thinking methodology',
      'Prototyping & wireframing',
      'User research techniques',
    ],
    duration: '10 Weeks',
    techStack: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    image: '/AI.png',
    price: 125000,
    whatToGain: [
      'Deep learning fundamentals',
      'NLP & computer vision',
      'Deploy ML models',
    ],
    duration: '18 Weeks',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI APIs'],
  },
  {
    id: 6,
    title: 'Cloud & DevOps',
    image: '/AI.png',
    price: 100000,
    whatToGain: [
      'Cloud infrastructure mastery',
      'CI/CD pipelines',
      'Container orchestration',
    ],
    duration: '12 Weeks',
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
  },
]

export default function Courses() {
  
  const [favorites, setFavorites] = useState(new Set())
  const router = useRouter()

  const toggleFavorite = (courseId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(courseId)) {
      newFavorites.delete(courseId)
    } else {
      newFavorites.add(courseId)
    }
    setFavorites(newFavorites)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl py-16 text-center md:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-agatech-primarybg">Build what is next</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Choose your next skill.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Practical, project-led courses designed to help you move from curious to capable.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 md:pb-24">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-56 md:h-60">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/25 to-transparent"></div>
              </div>

              {/* Card Header with Title & Favorite Button */}
              <div className="flex items-start justify-between border-b border-slate-100 p-5">
                <h2 className="flex-1 text-xl font-bold text-slate-950 md:text-2xl">
                  {course.title}
                </h2>
                <button
                  onClick={() => toggleFavorite(course.id)}
                  className="ml-2 rounded-full p-2 text-2xl transition-colors hover:bg-amber-50 hover:text-orange-600"
                  title={
                    favorites.has(course.id)
                      ? 'Remove from favorites'
                      : 'Add to favorites'
                  }
                >
                  {favorites.has(course.id) ? (
                    <AiFillHeart className="text-orange-600" />
                  ) : (
                    <AiOutlineHeart className="text-slate-300" />
                  )}
                </button>
              </div>

              {/* Card Content */}
              <div className="flex-1 space-y-6 p-5">
                {/* What to Gain Section */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <FaBookOpen className="text-agatech-primarybg text-lg" />
                    <h3 className="text-base font-bold text-slate-900">
                      What You'll Gain
                    </h3>
                  </div>
                  <ul className="ml-6 space-y-2">
                    {course.whatToGain.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-slate-600"
                      >
                          <span className="mr-2 shrink-0 font-bold text-agatech-primarybg">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3">
                  <FaClock className="text-orange-600 text-lg" />
                  <p className="text-sm font-semibold text-slate-900">
                    Duration:{' '}
                    <span className="text-agatech-primarybg">{course.duration}</span>
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <FaTools className="text-orange-600 text-lg" />
                    <h3 className="text-base font-bold text-slate-900">
                      Tech Stack
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-6">
                    {course.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-orange-700 transition-colors hover:bg-amber-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="border-t border-slate-100 p-5">
                <button
                  onClick={() => router.push(`/auth/coursereg?course=${course.id}`)}
                  className="w-full rounded-lg bg-agatech-primarybg py-3 font-bold text-white transition-all duration-300 hover:bg-teal-800 hover:shadow-lg active:scale-[0.98]"
                >
                  Start Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )

 
  
}