const SearchFields = ({ searchFields, setSearchFields, lists, onSubmit }) => {
  const fields = [
    { title: "Log ID", name: "logId", type: "text" },
    {
      title: "Application Type",
      name: "applicationType",
      type: "select",
      options: lists.applicationType
        ?.filter((row) => row?.length)
        ?.filter((v, i, a) => a.indexOf(v) === i)
        ?.map((row) => ({
          label: row,
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
            <select
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
                <option key={y} value={value}>
                  {label}
                </option>
              ))}
            </select>
          ) : (
            <input
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
