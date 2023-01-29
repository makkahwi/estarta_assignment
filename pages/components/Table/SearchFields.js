const SearchFields = () => {
  const fields = [
    { title: "Employee Name", name: "employeeName", type: "text" },
    { title: "Action Type", name: "actionType", type: "text" },
    {
      title: "Application Type",
      name: "applicationType",
      type: "select",
      options: [{ label: "One", value: 1 }],
    },
    { title: "From Date", name: "fromDate", type: "date" },
    { title: "To Date", name: "toDate", type: "date" },
    { title: "Application ID", name: "applicationID", type: "text" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.applicationID.value);
  };

  return (
    <form style={{ display: "flex" }} onSubmit={onSubmit}>
      {fields?.map(({ title, name, type, options }, i) => (
        <div
          key={i}
          style={{
            margin: `2vh 2vw 2vh 0`,
          }}
        >
          <label style={{ display: "block", marginBottom: "1vh" }}>
            {title}
          </label>

          {type === "select" ? (
            <select style={{ width: "100%" }} name={name}>
              {options?.map(({ label, value }, y) => (
                <option key={y} value={value}>
                  {label}
                </option>
              ))}
            </select>
          ) : (
            <input type={type} name={name} style={{ width: "100%" }} />
          )}
        </div>
      ))}

      <div
        style={{
          margin: `2vh auto 2vh auto`,
        }}
      >
        <label style={{ display: "block", color: "rgba(0,0,0,0)" }}>.</label>
        <button type={"submit"} style={{ width: "100%" }}>
          Search Logger
        </button>
      </div>
    </form>
  );
};

export default SearchFields;
