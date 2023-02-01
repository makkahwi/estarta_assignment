import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";

import Table from "./components/Table";
import SearchFields from "./components/Table/SearchFields";

const DataView = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchFields, setSearchFields] = useState({
    applicationType: "",
    fromDate: null,
    toDate: null,
    onDate: null,
  });

  const formatDate = (date) => moment(date).startOf("day");

  const callDataAPI = async () => {
    await axios
      .get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`)
      .then((res) => {
        setApiData(res.data?.result?.auditLog);
        setFilteredData(res.data?.result?.auditLog);
        console.log("Data Called Successfully");
      })
      .catch((e) => {
        console.log("GetDate error", e);
      });
  };

  useEffect(() => {
    callDataAPI();
  }, []);

  const onSubmit = () => {
    if (Object.keys(searchFields)?.length) {
      const searchDataKeys = Object.keys(searchFields)?.filter(
        (key) => searchFields[key]
      );

      const checkDate = (row, key) => {
        switch (key) {
          case "fromDate":
            return (
              formatDate(searchFields[key].$d) <=
              formatDate(row["creationTimestamp"])
            );
          case "toDate":
            return (
              formatDate(searchFields[key].$d) >=
              formatDate(row["creationTimestamp"])
            );
          case "onDate":
            return (
              formatDate(searchFields[key].$d) ==
              formatDate(row["creationTimestamp"])
            );
        }
      };

      const checkRow = (row) =>
        searchDataKeys
          .map((key) =>
            key.includes("Date")
              ? checkDate(row, key)
              : `${row[key]}`
                  .toLowerCase()
                  .includes(`${searchFields[key]}`.toLowerCase())
          )
          .reduce((final, current) => (current ? final : current), true);

      setFilteredData(apiData.filter(checkRow));
    }
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <SearchFields
          searchFields={searchFields}
          lists={{
            applicationType: apiData?.map((row) => row.applicationType),
          }}
          setSearchFields={setSearchFields}
          onSubmit={onSubmit}
        />

        <Table data={filteredData} />
      </div>
    </>
  );
};

export default DataView;
