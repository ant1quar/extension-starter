import React, { ChangeEvent, useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import s from "./App.module.scss";

const App = () => {
  const [color, setColor] = useState<string | null>("");

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setColor(event.target.value as string);
  };

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "CHANGE_COLOR", color }, (res) => {});
  }, [color]);
  return (
    <main className={s.main}>
      <FormControl>
        <InputLabel>Background Color</InputLabel>
        <Select value={color} onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="#f00">Red</MenuItem>
          <MenuItem value="#0f0">Green</MenuItem>
          <MenuItem value="#00f">Blue</MenuItem>
        </Select>
      </FormControl>
    </main>
  );
};

export default App;
