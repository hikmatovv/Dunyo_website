import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 150 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label + option.phone + "+"}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Viloyat"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: "bulut", label: "Andijon", phone: "23" },
  { code: "yomgir", label: "Qarshi", phone: "23" },
  { code: "quyosh", label: "Buxoro", phone: "23" },
  { code: "tuman", label: "Samarqand", phone: "23" },
  { code: "bulut", label: "Farg‘ona", phone: "23" },
  { code: "yomgir", label: "Sirdaryo", phone: "23" },
  { code: "quyosh", label: "Jizzax", phone: "23" },
  { code: "tuman", label: "Termiz", phone: "23" },
  { code: "bulut", label: "Namangan", phone: "30" },
  { code: "yomgir", label: "Toshkent", phone: "30" },
  { code: "quyosh", label: "Navoiy", phone: "30" },
  { code: "tuman", label: "Toshkent", phone: "27" },
  { code: "quyosh", label: "Nukus", phone: "27" },
  { code: "quyosh", label: "Urganch", phone: "27" },
];
