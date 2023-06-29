import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventsSearch from "@/components/events/events-search";
import EventList from "@/components/events/event-list";
import { Fragment } from "react";
function AllEvents(){
    const events = getAllEvents();
    const router = useRouter();
    const findEventsHandler = (year,month)=>{
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
    }
    return <Fragment>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events}/>
    </Fragment>
}
export default AllEvents;