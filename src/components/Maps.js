import { Card, Layout } from "antd";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import axios from "axios";
import "./styles.scss";

function Maps() {
  const [maps, setMaps] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/maps")
      .then((response) =>
        setMaps(
          response.data.data.map((maps) => ({
            ...maps,
            name: maps.displayName,

            image: maps.splash,
          }))
        )
      )

      .catch((error) => console.log({ error }));
  }, []);

  return (
    <Layout className="height-100">
      <div className="maps">
        {maps.map((maps) => {
          return (
            <Card
              className="card"
              hoverable
              style={{
                width: 240,
                margin: "15px",
                textAlign: "center",
              }}
              cover={<img alt={maps.name} src={maps.image} />}
              onClick={() => {
                setSelected(maps);
                togglePopup();
              }}
            >
              <h1 style={{ color: "#3D0000" }}>{maps.name}</h1>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <h1>{selected.name}</h1>
                      <img alt={selected.name} src={selected.image} />

                      <button>Close</button>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </Card>
          );
        })}
      </div>
    </Layout>
  );
}

export default Maps;
