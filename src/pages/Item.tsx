import {useParams} from "react-router-dom";
import Loader from "../components/common/Loader";
import {IItem} from "../interfaces/common.interface";
import PageLayout from "../components/layout/PageLayout";
import useApi from "../hooks/useApi";

const Item = ({ bundle, label }: IItem) => {
  const { id } = useParams()
  const item = useApi(`${bundle}/${id}`, {})

  if (!item) return <Loader />

  return (
    <PageLayout title={`${label} (id: ${id}, user id: ${item.userId})`}>
      <span>Title: {item.title}</span>
      {item?.body && <p>Body: {item.body}</p>}
    </PageLayout>
  )
}

export default Item
