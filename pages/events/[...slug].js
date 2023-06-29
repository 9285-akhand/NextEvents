import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import { Fragment } from 'react';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
function FilteredEvents()
{
    const router = useRouter();
    const filterData = router.query.slug;
    if(!filterData)
    {
        return <p className="center">Loading...</p>
    }
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2032 || numYear < 2023 || numMonth < 1 || numMonth > 12)
    {
        return <Fragment>
        <ErrorAlert><p>Invalid Filter. Please adjust your values!</p></ErrorAlert>
        <div className="center">
            <Button className="btn" link="/events">Show All Events</Button>
        </div>
        </Fragment>
    }
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });
    if(!filteredEvents || filteredEvents.length === 0)
    {
        return <Fragment><ErrorAlert><p>No events found for the chosen filter!</p></ErrorAlert>
        <div className="center">
        <Button className="btn" link="/events">Show All Events</Button>
                </div>
        </Fragment>
    }
    return (
        <Fragment>
            <ResultsTitle date={new Date(numYear, numMonth - 1)}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    );
}
export default FilteredEvents;