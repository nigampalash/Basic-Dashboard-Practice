import { useState } from "react";
import "./App.css";

function App() {
    const [dark, setDark] = useState(false);

    const cards = [
        { title: "Users", value: "1245" },
        { title: "Revenue", value: "$12,500" },
        { title: "Orders", value: "327" },
        { title: "Visitors", value: "8540" },
    ];

    return (
        <div className={dark ? "container dark" : "container"}>
            <aside className="sidebar">
                <h2>Dashboard</h2>

                <ul>
                    <li>🏠 Home</li>
                    <li>📊 Analytics</li>
                    <li>👥 Users</li>
                    <li>⚙ Settings</li>
                </ul>
            </aside>

            <main className="main">

                <header>
                    <h1>Welcome Back 👋</h1>

                    <button onClick={() => setDark(!dark)}>
                        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
                    </button>
                </header>

                <div className="cards">

                    {cards.map((card) => (
                        <div className="card" key={card.title}>
                            <h3>{card.title}</h3>
                            <p>{card.value}</p>
                        </div>
                    ))}

                </div>

                <div className="table">

                    <h2>Recent Activity</h2>

                    <table>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>John</td>
                                <td>Completed</td>
                                <td>20 Jul</td>
                            </tr>

                            <tr>
                                <td>Emma</td>
                                <td>Pending</td>
                                <td>19 Jul</td>
                            </tr>

                            <tr>
                                <td>Alex</td>
                                <td>Completed</td>
                                <td>18 Jul</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </main>

        </div>
    );
}

export default App;
