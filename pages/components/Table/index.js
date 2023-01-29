import DataTable from "react-data-table-component";

const Table = ({ data }) => {
  const columns = [
    {
      name: "Log ID",
      selector: (row) => row.logId,
      sortable: true,
    },
    {
      name: "Application Type",
      selector: (row) => row.applicationType,
      sortable: true,
    },
    {
      name: "Application ID",
      selector: (row) => row.applicationId,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.actionType,
      sortable: true,
    },
    {
      name: "Action Details",
      selector: (row) => row.actionDetails,
      sortable: true,
    },
    {
      name: "Date:Time",
      selector: (row) => row.creationTimestamp,
      sortable: true,
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} pagination fixedHeader />
    </>
  );
};

export default Table;
