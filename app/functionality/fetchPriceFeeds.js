import { aggregatorV3_data } from "../constants/chainlink";
import { ethers } from "ethers";
export default async function fetchPriceFeeds() {
  //   const provider = useProvider();

  //   const Chainlink_aggregatorV3 = useContract({
  //     address: aggregatorV3_data.address,
  //     abi: aggregatorV3_data.abi,
  //     signerOrProvider: provider,
  //   });

  //   const fetchPrice = async () => {
  //     try {
  //       const priceFeed = await Chainlink_aggregatorV3.latestRoundData();

  //       console.log(priceFeed);
  //       setPrice(priceFeed);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/polygon_mumbai"
  );
  const Chainlink_aggregatorV3 = new ethers.Contract(
    aggregatorV3_data.address,
    aggregatorV3_data.abi,
    provider
  );

  const roundData = await Chainlink_aggregatorV3.latestRoundData();
  const price = roundData ? parseInt(roundData.answer) / 100000000 : 0;
  console.log(roundData);
  console.log(price);
  return price;
}
