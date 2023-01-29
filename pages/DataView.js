import axios from "axios";
import { useEffect, useState } from "react";

import Table from "./components/Table";
import SearchFields from "./components/Table/SearchFields";

const DataView = () => {
  const [data, setData] = useState([]);
  const [searchFields, setSearchFields] = useState({});

  const dateFilter = (key) => {
    switch (key) {
      case "fromDate":
        return `creationTimestamp>=${searchFields[key]}`;
      case "toDate":
        return `creationTimestamp<=${searchFields[key]}`;
      default:
        return `creationTimestamp=${searchFields[key]}`;
    }
  };

  const getParams = () =>
    Object.keys(searchFields)
      ?.map((key) =>
        key.includes("Date") ? dateFilter(key) : `${key}=${searchFields[key]}`
      )
      .join("&");

  const callDataAPI = async () => {
    await axios
      .get(
        `https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f?${getParams()}`
      )
      .then((res) => {
        setData(res.data?.result?.auditLog);
        console.log("Data Called Successfully");
      })
      .catch((e) => {
        console.log("GetDate error", e);
      });
  };

  useEffect(() => {
    callDataAPI();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    callDataAPI();
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <SearchFields
          searchFields={searchFields}
          lists={{ applicationType: data?.map((row) => row.applicationType) }}
          setSearchFields={setSearchFields}
          onSubmit={onSubmit}
        />

        <Table data={data} />
      </div>
    </>
  );
};

export default DataView;
