import {Link} from 'react-router-dom'

export default function NotFoundPage() {
    return (

        <div>
            404 Not Found
            <Link to="/">Home from Link</Link>
            <a rel="noopener noreferrer" target="_blank" href="/"></a>
        </div>

    );
}