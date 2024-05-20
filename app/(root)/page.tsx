import Collection from '@/components/shared/Collection';
import { getAllEvents } from '@/lib/actions/event.actions';
import Image from 'next/image'
import { FiChevronDown } from "react-icons/fi";
import { SearchParamProps } from '@/types';

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className='bg-black bg-dotted-pattern bg-contain'>
        <div>
          <video
            src="/images/str2.mp4"
            autoPlay={true}
            loop
            muted
            className='pt-0 inset-0 w-full z-0 h-screen bg-cover bg-center object-center'
          ></video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] opacity-100"></div>
        </div>

        {/* ----------------(optional) Text-------------------- */}
        <div className='absolute inset-x-0 top-[35%] text-center text-white drop-shadow-sm'>
            <Image
                src="/images/logo2.svg"
                alt="Save The Rave"
                width={400}
                height={400}
                className='mx-auto'
            />
            {/* <h1 className='text-4xl font-bold'>FEINDBILD all night long</h1>
            <p className='p-regular-20 md:p-regular-24 text-sm'>Designing stuff is <span className='underline-offset-4 underline'>exhausting as fuck</span></p> */}
        </div>

        <div className='flex flex-col items-center justify-center lg:flex-row absolute inset-x-0 bottom-[30%]'>
            <a href="#events"><button className='bg-black hover:bg-[#393c41] w-96 lg:w-64 lg:mx-4 py-1 px-4 h-10 rounded-3xl text-xs mt-2 font-semibold text-white drop-shadow-sm'>Events</button></a>
            <a href="#tickets"><button className='bg-black hover:bg-[#393c41] w-96 lg:w-64 lg:mx-4 py-1 px-4 h-10 rounded-3xl text-xs mt-2 font-semibold text-white drop-shadow-sm'>Tickets</button></a>
        </div>

        <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%] text-white drop-shadow-md'>
            <a href="#events"><FiChevronDown size={30} /></a>
        </div>
      </section>
      
      <section id='events' className='bg-black'>
        <div className="wrapper flex flex-col gap-8 md:gap-12">
        <h2 className='text-white z-50 h2-bold'>Upcoming Events</h2>
        <Collection
          data={events?.data}
          emptyTitle='Currently No Events'
          emptyStateSubtext='Come back later'
          collectionType='All_Events'
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
        </div>
      </section>
    </>
  )
}

