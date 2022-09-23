import { useState } from "react";

const SearchBox = () => {
  const [searchKey, setSearchKey] = useState<string>("");

  const handleOnChange = (event: any): void => {
    if (event.target.id === "serchKey") {
      setSearchKey(event.target.value);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        id="serchKey"
        type="text"
        className="form-control search-icon"
        placeholder="What do you want to order?"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={searchKey}
        onChange={handleOnChange}
        style={searchKey ? { backgroundImage: "none" } : {}}
      />
      <button
        className="btn btn-outline-secondary bg-danger"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
