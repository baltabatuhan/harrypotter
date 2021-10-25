import { Card, Layout } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "./Popup";
import "./styles.scss";

function Weapons() {
  const [isOpen, setIsOpen] = useState(false);
  const [weapons, setWeapons] = useState([]);
  const [selected, setSelected] = useState();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((response) =>
        setWeapons(
          response.data.data.map((weapons) => ({
            ...weapons,
            name: weapons.displayName,
            weaponStats: weapons.weaponStats,
            image: weapons.displayIcon,
          }))
        )
      )

      .catch((error) => console.log({ error }));
  }, []);
  console.log(weapons);
  return (
    <Layout className="height-100">
      <div className="weapons">
        {weapons.map((weapons) => {
          return (
            <Card
              className="card"
              hoverable
              style={{
                width: 240,
                margin: "15px",
                textAlign: "center",
              }}
              cover={<img alt={weapons.name} src={weapons.image} />}
              onClick={() => {
                setSelected(weapons);
                togglePopup();
              }}
            >
              <h1 style={{ color: "#3D0000" }}>{weapons.name}</h1>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <h1>{selected.name}</h1>
                      <img alt={selected.name} src={selected.image} />
                      <p>Magazine Size = {selected.weaponStats.magazineSize}</p>
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

export default Weapons;
