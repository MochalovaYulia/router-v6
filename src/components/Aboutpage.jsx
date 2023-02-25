import { Outlet, Link } from "react-router-dom"

export const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This is a demo website about React-router-dom library.</p>
            <ul>
                <li>
                    <Link to='team'>Our team</Link>
                </li>
                <li>
                    <Link to='contacts'>Our contacts</Link>
                </li>
            </ul>

            <Outlet />

        </div>
    )
}
