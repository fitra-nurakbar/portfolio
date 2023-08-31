import React from "react";

interface TypeProps {
  className?: string;
}

export default function Button(props: TypeProps) {
  const { className } = props;

  return <button>Button</button>;
}
