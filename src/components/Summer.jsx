import { data } from "../utils/constants.js";

function Summer({ selectedSummer }) {
  let summer = data.find((item) => {
    return item.name === selectedSummer;
  });

  summer = summer?.image
    ? summer
    : data.find((item) => {
        return item.name == "default";
      });

  return <img src={summer.image} alt={summer.name} />;
}

export default Summer;
