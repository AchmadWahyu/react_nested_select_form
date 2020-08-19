import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState({
    kingdom: "Bunga",
    type: "All",
    title: "All"
  });

  let typesOption;
  let titlesOption;

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "kingdom") {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
        type: "All"
      });
    } else {
      setValue({
        ...value,
        [e.target.name]: e.target.value
      });
    }
  };

  switch (value.kingdom) {
    case "Bunga":
      typesOption = [
        { label: "All", value: "" },
        { label: "Mawar", value: "Mawar" },
        { label: "Melati", value: "Melati" }
      ];
      break;
    case "Hewan":
      typesOption = [
        { label: "All", value: "" },
        { label: "Kucing", value: "Kucing" },
        { label: "Anjing", value: "Anjing" }
      ];
      break;
    default:
      typesOption = [{ label: "All", value: "" }];
  }

  switch (value.type) {
    case "Mawar":
      titlesOption = [
        { label: "All", value: "" },
        { label: "Mawar Biru", value: "Mawar Biru" },
        { label: "Mawar Merah", value: "Mawar Merah" }
      ];
      break;
    case "Melati":
      titlesOption = [
        { label: "All", value: "" },
        { label: "Melati Putih", value: "Melati Putih" },
        { label: "Melati Kuning", value: "Melati Kuning" }
      ];
      break;
    case "Kucing":
      titlesOption = [
        { label: "All", value: "" },
        { label: "Kucing Siam", value: "Kucing Siam" },
        { label: "Kucing Persia", value: "Kucing Persia" }
      ];
      break;
    case "Anjing":
      titlesOption = [
        { label: "All", value: "" },
        { label: "Dalmatian", value: "Dalmatian" },
        { label: "Cihuahua", value: "Cihuahua" }
      ];
      break;
    default:
      titlesOption = [{ label: "All", value: "" }];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted, : ", value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Choose:
          <select name="kingdom" value={value.kingdom} onChange={handleChange}>
            <option value="Bunga">Bunga</option>
            <option value="Hewan">Hewan</option>
          </select>
        </label>
        <br />
        <hr />
        <label>
          Type:
          <select name="type" value={value.type} onChange={handleChange}>
            {typesOption.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <hr />

        <label>
          Title:
          <select name="title" value={value.title} onChange={handleChange}>
            {titlesOption.map((title) => (
              <option key={title.value} value={title.value}>
                {title.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
