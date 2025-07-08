//.Create a functional component named Button that accepts props for text and color.
//Style the button using inline styles or CSS classes based on the color prop.
//Import and render the Button component in the App component with different text and color props.

type ButtonProps = {
  text: string;
  color: string;
};

export default function Button({ text, color }: ButtonProps) {
  const styling: React.CSSProperties = {
    fontSize: "16px",
    backgroundColor: color,
  };

  return <button style={styling}>{text}</button>;
}
