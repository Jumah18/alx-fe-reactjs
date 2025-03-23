export default function SearchBar({ query, setQuery }) {
    return (
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }
  