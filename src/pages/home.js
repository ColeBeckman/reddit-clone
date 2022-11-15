import { useGetPopularPostsQuery } from '../features/api/apiSlice'
import { useState } from 'react';

import PostFeed from "../components/postFeed"

function HomePage() {
  const [type, setType] = useState('new');
  const { data, error, isLoading } = useGetPopularPostsQuery(type);
  console.log(data)

  return ( 
    <div>
      <PostFeed posts={data}/>
    </div>
   );
}

export default HomePage;