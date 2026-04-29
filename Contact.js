import { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState("");

  return (
    <div className="center">
      <h2>Contact</h2>
      <input
        placeholder="Enter message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
    </div>
  );
}

export default Contact;