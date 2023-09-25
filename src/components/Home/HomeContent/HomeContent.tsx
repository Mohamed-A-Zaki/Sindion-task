import NoDataToShow from "../NoDataToShow";
import TicketsTable from "../TicketsTable";
import useGetAllTickets from "../../../hooks/useGetAllTickets";

export default function HomeContent() {
  const { data, isLoading, isError } = useGetAllTickets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      {data?.data.length ? (
        <TicketsTable data={data?.data} />
      ) : (
        <NoDataToShow />
      )}
    </>
  );
}
