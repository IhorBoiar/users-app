import React, {useEffect, useState} from "react";
import {apiPath, apiRequest} from "../api/api.helpers";
import {IUsers} from "../interfaces/common.interface";
import Filters from "../components/screens/home/Filters";
import TableUsers from "../components/screens/home/TableUsers";

const Home = () => {
  const [data, setData] = useState<IUsers>({
    response: [],
    filtered: []
  })
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    apiRequest({
      url: apiPath.users,
      method: 'GET'
    }).then(data => {
      const userPromises = data.data.map(user => {
        const userWithPostsAndAlbums = { ...user };

        const postsPromise = apiRequest({
          url: apiPath.posts,
          params: {
            userId: user.id
          },
          method: 'GET'
        }).then(response => response.data);
        const albumsPromise = apiRequest({
          url: apiPath.albums,
          params: {
            userId: user.id
          },
          method: 'GET'
        }).then(response => response.data);

        return Promise.all([postsPromise, albumsPromise])
          .then(([posts, albums]) => {
            userWithPostsAndAlbums.posts = posts;
            userWithPostsAndAlbums.albums = albums;
            return userWithPostsAndAlbums;
          });
      });

      Promise.all(userPromises)
        .then(usersWithPostsAndAlbums => {
          setData({
            response: usersWithPostsAndAlbums,
            filtered: usersWithPostsAndAlbums
          })
          setLoading(false)
        })
        .catch(error => console.error('Error fetching posts and albums: ', error));
    })
  }, []);

  return (
    <>
      <h1>Users</h1>
      <Filters data={data} setData={setData} />
      <div className="result">
        {!!data.filtered.length || loading ? (
          <TableUsers data={data} />
        ) : <span>No results</span>}
      </div>
    </>
  )
}

export default Home
