const paymentRequest_Address = "0x6Dc77D90E691645e17EA959718c1b6dadDB87A2A";
const payments_Address = "0x963034fC15b81F70a416F6c095F55aa73760634e";
const payoutManager_Address = "0x03057B79841Ac3b79dd21e12dd69Ca45b7639782";
const personalized_Address = "0x16E661CeE4Dc280900E89A0E0F1C78c482D22702";
const profileManager_Address = "0x4307f4CfCcd2e3f8697EF2C1B5c91291AA58fFAb";
const walletVerifier_Address = "0x39813f50a9Ac1b1201EF7c32B80c78CD9fE8b46f";
const giftCardCreator_Address = "0x37fE5cB2FFF0ebBdab69AdC5A4EcE3Cb8C311A0d";
const funds_Address = "0x6471f348e7d4ea254b053779c82cc593F4e51A9c";

export const WEB3STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMxQjM3MjRlN2E2RjgyMTg3NEFEYzMyYjEzZDQwNjM2YkFiMDA0NzEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTg0MTc0ODY2ODksIm5hbWUiOiJDYXplIn0.BoGp0mNQc_syBHBZFj6Mb2dTUjAlpLWHd6DwCwFSc_4";
export const NFT_STORAGE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVERWJCMEZCNTk3REI4MTUxNkU5M2Y4YmM3RjJmQ0Q2ODYzNDAyOEUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1ODU4MDY5OTE4MSwibmFtZSI6Ik11c2ljMyJ9.V6Ny_9VV_XLIIFDFIEG8alEdJTwxmfHJMaMDJEf00L4";

import { abi as paymentRequest_ABI } from "./Artifacts/paymentRequest.sol/paymentRequests.json";
import { abi as payments_ABI } from "./Artifacts/payments.sol/payments.json";
export { abi as payout_ABI } from "./Artifacts/payout.sol/payout.json";
import { abi as payoutManager_ABI } from "./Artifacts/payoutManager.sol/payoutManager.json";
import { abi as personalized_ABI } from "./Artifacts/personalizedPage.sol/personalizedPayPage.json";
import { abi as profileManager_ABI } from "./Artifacts/profileManager.sol/profileManager.json";
export { abi as profielWallet_ABI } from "./Artifacts/profileWallet.sol/profileWallet.json";
import { abi as walletVerfier_ABI } from "./Artifacts/walletVerifier.sol/walletVerifier.json";
export { abi as giftCard_ABI } from "./Artifacts/giftcard.sol/giftcard.json";
import { abi as giftCardCreator_ABI } from "./Artifacts/gcCreator.sol/gcCreator.json";
import { abi as funds_ABI } from "./Artifacts/Funds.sol/Funds.json";

export const paymentRequest_data = {
  abi: paymentRequest_ABI,
  address: paymentRequest_Address,
};

export const payments_data = {
  abi: payments_ABI,
  address: payments_Address,
};

export const payoutManager_data = {
  abi: payoutManager_ABI,
  address: payoutManager_Address,
};

export const personalized_data = {
  abi: personalized_ABI,
  address: personalized_Address,
};

export const profileManager_data = {
  abi: profileManager_ABI,
  address: profileManager_Address,
};

export const walletVerifier_data = {
  abi: walletVerfier_ABI,
  address: walletVerifier_Address,
};

export const giftCardCreator_data = {
  abi: giftCardCreator_ABI,
  address: giftCardCreator_Address,
};

export const funds_data = {
  abi: funds_ABI,
  address: funds_Address,
};
