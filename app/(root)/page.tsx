
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Collection from '@/components/shared/Collection'
import { getAllEvents } from '@/lib/actions/event.actions'
import Search from '@/components/shared/Search'
import { SearchParamProps } from '@/types'
import CategoryFilter from '@/components/shared/CategoryFilter'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1
  const searchText = (searchParams?.query as string) || ''
  const category = (searchParams?.category as string) || ''

  const events = await getAllEvents({
    query: searchText,
    limit: 3,
    page: page,
    category: category,
  })

  return (
    <>
      <section className="bg-primary-50 bg-landscape-image bg-cover py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 text-white ">
            <h1 className="h1-bold">
              Host or Discover Events Unique to Japan!
            </h1>
            <p className="p-regular-20 md:p-regular-24 bg-slate-50/10 rounded-lg pl-2">
              Embark on your next adventure with numerous events created by
              Japanese natives and many more.
            </p>

            <Button asChild className="button w-full">
              <Link href="#events" className="">
                Explore Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Discover Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No events found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  )
}
