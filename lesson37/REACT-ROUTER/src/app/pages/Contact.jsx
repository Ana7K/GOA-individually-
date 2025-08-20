import React from "react";
import { useParams } from "react-router";

export default function Contact() {
  const {id} = useParams();

  return (
    <div>
      {id}
      Contact
    </div>
  );
}
