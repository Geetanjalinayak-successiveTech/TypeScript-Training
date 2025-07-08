

 export default  async function  FetchData()
{
    const res=  await fetch("https://jsonplaceholder.typicode.com/users")

    if(!res.ok)
    {
       throw new Error ("Failed to Fetch Data") 
    }
    const data=  await res.json()

    return (
    <main style={{ padding: 200 }}>
      <h1> Server-Side Rendered Users</h1>
      {data.map((data) => (
        <div
          key={data.id}
          style={{
            background: "#f4f4f4",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "6px",
            
          }}
        >
          <h3>{data.name}</h3>
          <p>{data.email}</p>
         
        </div>
      ))}
    </main>
    )
}    