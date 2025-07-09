'use client';
interface prop{
  name:string,
  email:string,
  phone:string,
}
export default function UserProfile({ name, email, phone }:prop) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}
