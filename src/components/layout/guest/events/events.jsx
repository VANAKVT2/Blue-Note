import NavBar from '@/components/ui/nav-bar';
import ShowAllEvents from './showAllEvents';

export default async function Events() {
    const color = "dorado";
    return (
        <main>
            <NavBar color={color}/>
            <ShowAllEvents />
        </main>
    )
}