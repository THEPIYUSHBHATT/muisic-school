import { Meteors } from '@/components/ui/meteors'

function Page() {
  return (
    <div className="flex-wrap h-full bg-gray-900 py-12 pt-36 flex flex-col items-center">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-15 text-white">
        Contact Us
      </h1>
      <p className="text-center text-gray-300 mt-10 max-w-xl mx-4 sm:mx-0">
        We are here to help you with our courses, programs, and events. Reach
        out to us and let us know how we can assist you in your musical journey.
      </p>
      <div className="w-full max-w-2xl mt-10 px-4 sm:px-0">
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full p-3 border bg-black border-black rounded-md focus:outline-none focus:border-gray-500 mt-5"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border bg-black border-black rounded-md focus:outline-none focus:border-gray-500 mt-5"
        ></textarea>
        <div className="flex">
          <button className="max-w-xs bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-4 mr-100">
            Send Message
          </button>
        </div>
      </div>
      <Meteors number={20} />
    </div>
  )
}

export default Page
