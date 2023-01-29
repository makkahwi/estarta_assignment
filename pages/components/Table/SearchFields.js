import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { cleanText } from ".";

const SearchFields = ({
  searchFields = {},
  setSearchFields,
  lists,
  onSubmit,
}) => {
  const fields = [
    { title: "Log ID", name: "logId", type: "text" },
    {
      title: "Application Type",
      name: "applicationType",
      type: "select",
      options: lists?.applicationType
        ?.filter((row) => row?.length)
        ?.filter((v, i, a) => a.indexOf(v) === i)
        ?.map((row) => ({
          label: cleanText(row),
          value: row,
        })),
    },
    { title: "Application ID", name: "applicationId", type: "text" },
    { title: "Action Type", name: "actionType", type: "text" },
    { title: "Action Details", name: "actionDetails", type: "text" },
    { title: "From Date", name: "fromDate", type: "date" },
    { title: "To Date", name: "toDate", type: "date" },
    { title: "On Date", name: "onDate", type: "date" },
  ];

  return (
    <div style={{ margin: "2vh auto" }}>
      <Grid container spacing={1}>
        {fields?.map(({ title, name, type, options }, i) => (
          <Grid item md={3} xs={6} key={i} style={{ margin: "1vh auto" }}>
            <FormControl fullWidth>
              {type === "select" ? (
                <>
                  <InputLabel>{title}</InputLabel>
                  <Select
                    label={title}
                    style={{ width: "100%" }}
                    name={name}
                    value={searchFields[name]}
                    onChange={(e) =>
                      setSearchFields((current) => ({
                        ...current,
                        [name]: e.target.value,
                      }))
                    }
                  >
                    {options?.map(({ label, value }, y) => (
                      <MenuItem key={y} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              ) : type === "date" ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label={title}
                    name={name}
                    inputFormat="DD/MM/YYYY"
                    value={searchFields[name]}
                    onChange={(e) =>
                      setSearchFields((current) => ({
                        ...current,
                        [name]: e,
                      }))
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              ) : (
                <TextField
                  label={title}
                  type={type}
                  name={name}
                  style={{ width: "100%" }}
                  value={searchFields[name]}
                  onChange={(e) =>
                    setSearchFields((current) => ({
                      ...current,
                      [name]: e.target.value,
                    }))
                  }
                />
              )}
            </FormControl>
          </Grid>
        ))}

        <Grid item md={9} xs={6} />

        <Grid item md={3} xs={6}>
          <Button
            variant="contained"
            type={"submit"}
            style={{ width: "100%" }}
            onClick={onSubmit}
          >
            Search Logger
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchFields;
