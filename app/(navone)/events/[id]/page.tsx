import CheckoutButton from '@/components/shared/CheckoutButton';
import Collection from '@/components/shared/Collection';
import Eventix from '@/components/shared/Eventix';
import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import Image from 'next/image';

const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  })

  return (
    <div className='bg-black'>
    <section className="flex justify-center bg-black bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image 
          src={event.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className='h2-medium text-white'>{event.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="text-sm bg-green-500/10 px-5 py-3 text-green-500">
                  {event.isFree ? 'FREE' : `$${event.price}`}
                </p>
                <p className="text-sm  bg-grey-500/10 px-4 py-3 text-gray-200">
                  {event.category.name}
                </p>
              </div>

              {/* 
              <p className="text-white p-medium-18 ml-2 mt-2 sm:mt-0">
                by{' '}
                <span className="text-red-500">{event.organizer.firstName} {event.organizer.lastName}</span>
              </p> 
              */}

            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className='flex gap-2 md:gap-3'>
              <Image className='pl-2' src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
              <div className="text-white p-medium-16 lg:p-regular-20 flex flex-col pl-2">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly}
                </p>
                <p>
                  {formatDateTime(event.startDateTime).timeOnly} - {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-gray-200">YAYA, Winner, Ghool</p>
              <p className="p-medium-16 lg:p-regular-18 text-white">{event.description}</p>
              {/* <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{event.url}</p> */}
            </div>

            <div className="p-regular-20 flex items-center gap-3">
              <Image className='pl-1' src="/assets/icons/location.svg" alt="location" width={32} height={32} />
              <p className="text-white p-medium-16 lg:p-regular-20 pl-2">{event.location}</p>
            </div>
          </div>

          {/* <CheckoutButton event={event} /> */}
          <Eventix />

        </div>
      </div>
    </section>

    {/* EVENTS with the same category */}
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="text-white h2-bold">Related Events</h2>

      <Collection 
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
    </section>
    </div>
  )
}

export default EventDetails