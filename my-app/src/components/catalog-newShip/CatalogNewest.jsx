import React, { useEffect, useState } from 'react';
import NewestShip from './NewestShip';
import * as latestService from "../../services/latestService"
import { Card, Row, Col, Divider } from 'antd';

const CatalogNewest = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    latestService.getLatestShip()
      .then(result => setShips(result))
      .catch(err => console.log(err))
  }, []);
  return (
    <>
      <Row justify="center" align="top" gutter={[16, 16]}>

        {
          ships.map(ship => (
            <NewestShip key={ship._id}
              {...ship} />
          ))
        }
      </Row>
    </>
  );
};

export default CatalogNewest;
