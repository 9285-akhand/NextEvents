import { getFeaturedEvents } from "@/dummy-data";

function HomePage() {
  const featuredEvents=getFeaturedEvents();
  return <div>
    <ul>
      {featuredEvents.map((event)=>(
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  </div>
}
export default HomePage;