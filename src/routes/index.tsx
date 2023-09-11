import React from "react"
import PathConstants from "./pathConstants"
import {apiPath} from "../api/api.helpers";

const Home = React.lazy(() => import("../pages/Home"))
const Posts = React.lazy(() => import("../pages/Items"))
const Albums = React.lazy(() => import("../pages/Items"))
const Post = React.lazy(() => import("../pages/Item"))
const Album = React.lazy(() => import("../pages/Item"))

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.POSTS, element: <Posts bundle={apiPath.posts} label='Posts' /> },
  { path: PathConstants.ALBUMS, element: <Albums bundle={apiPath.albums} label='Albums' /> },
  { path: PathConstants.POST, element: <Post bundle={apiPath.posts} label='Post' /> },
  { path: PathConstants.ALBUM, element: <Album bundle={apiPath.albums} label='Album' /> },
]
export default routes
