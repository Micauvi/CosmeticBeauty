import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve
        }, 600)
    })
    promise.then((result) => {
        setData(result)
    })
},[])
  
  const spinner = () => {  
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detailId);
    console.log(queryDoc);

    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [detailId]);

  return (
    <div>
      {data.id ? <ItemDetail data={data}/> : spinner()}
      
    </div>
  );
};

export default ItemDetailContainer;
