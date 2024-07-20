
'use client'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'
interface Course {
  id: number
  title: string
  slug: string
  description: string 
  price: number
  instructor: string
  isFeatured: boolean
}

function FeaturedCources() {
   const featuredCourses= courseData.courses.filter((course:Course) => course.isFeatured )
    
    

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            LEARN WITH THE BEST
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Course) => (
                <div key= {course.id}className="flex justify-center">
                    <BackgroundGradient>
                          test
                    </BackgroundGradient>
                </div>
            ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={'/courses'}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default FeaturedCources
