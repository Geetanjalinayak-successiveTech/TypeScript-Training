const page_size = 5;



async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed");
  }

  const data= await res.json();
  return data;
}

export default  async function Pagination({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  const allPosts = await fetchData();
  const totalPages = Math.ceil(allPosts.length / page_size);

  const start = (page - 1) * page_size;
  const paginatedPosts = allPosts.slice(start, start + page_size);

  return (

    <main style={{ padding: 200, fontFamily: "Arial" }}>
   
     
      <h1>Paginated Data</h1>
      <ul>
        {paginatedPosts.map((post) => (
          <li key={post.id}>
            <strong>{post.name}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 10 }}>
        {page > 1 && (
          <a href={`?page=${page - 1}`} style={{ marginRight: 10 }}>
            ◀ Prev
          </a>
        )}
        {page < totalPages && <a href={`?page=${page + 1}`}>Next ▶</a>}
        <p style={{ marginTop: 10 }}>
          Page {page} of {totalPages}
        </p>
      </div>
    </main>
  );
}
