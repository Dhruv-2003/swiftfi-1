const paymentRequest_Address = "";
const payments_Address = "";
const payoutManager_Address = "";
const personalized_Address = "";
const profileManager_Address = "";
const walletVerifier_Address = "";
const giftCardCreator_Address = "";
const funds_Address = "";

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
