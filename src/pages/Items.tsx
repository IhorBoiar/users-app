import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {apiPath, apiRequest} from "../api/api.helpers";
import {IItem, IItemData} from "../interfaces/common.interface";
import PageLayout from "../components/layout/PageLayout";
import useApi from "../hooks/useApi";

const Items = ({ bundle, label }: IItem) => {
  const { id } = useParams()
  const items = useApi(bundle, { userId: id })

  return (
    <PageLayout title={`${label} (user id: ${id})`}>
      <ul>
        {items?.map(item => (
          <li key={item.id}>
            <Link to={`/${bundle}/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default Items;
