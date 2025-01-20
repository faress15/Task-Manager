import './FilterTasks.css'

export function FilterTasks({ filter, setFilter }) {
    return <div className="filter-container">
        <label htmlFor="filter">Filter by Status: </label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>
    </div>
}