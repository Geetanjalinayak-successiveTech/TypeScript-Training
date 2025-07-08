//2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
//Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
//Create multiple instances of the UserCard component with different user data.





type UserCardProps = {
  name: string;
  email: string;
  avatar: string;
};

export default function UserCard({ name, email, avatar }: UserCardProps) {
  return (
    <div>
      <img src={avatar} alt="avatar" width={90} />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
}