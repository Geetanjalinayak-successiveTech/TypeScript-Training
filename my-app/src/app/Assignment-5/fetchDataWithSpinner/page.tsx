import Spinner from "../Component/FetchDataWithSpinner";
import RetryUsers from "../Component/retry-user";

export default async function FetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/user");

    if (!res.ok) throw new Error("Failed to fetch");

    const users = await res.json();

    return <main style={{padding:200}}><RetryUsers users={users} /></main> ;
  } catch (error) {
    return (
      <main style={{ padding: 200 }}>
        <Spinner error={true} />
      </main>
    );
  }
}