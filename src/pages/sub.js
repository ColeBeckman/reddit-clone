import { useGetSubRedditsQuery } from "../data/api/apiSlice";


function SubPage () {
  const { data, error, isFetching } = useGetSubRedditsQuery();
  return ( 
    <div>
    </div>
   );
}

export default SubPage;