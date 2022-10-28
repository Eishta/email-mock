import { useState } from "react";

const Header = () => {
  const [searchTerm, setTerm] = useState("");
  const onTermChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <header>
      <span> Oulook</span>
      <input value={searchTerm} onChange={onTermChange} autoComplete="on" />
      <div className="profile" />
    </header>
  );
};
export default Header;
