export const calculateSoldOutCount = (
  total_ticket_limitation,
  remaining_tickets
) => {
  return total_ticket_limitation - remaining_tickets;
};

export const calculateTotalPrize = (cart: any) => {
  const totalPrize = cart?.reduce((accumulator, item) => {
    const itemPrize = item?.price * item?.quantity;
    return accumulator + itemPrize;
  }, 0);

  return totalPrize;
};

export const getCartTotalPriceWithVatApplied = (cart, price) => {
  if (cart?.[0]?.currency?.enable_vat && cart?.[0]?.currency?.vat_percentage) {
    let percentageAmount =
      (price * parseInt(cart?.[0]?.currency?.vat_percentage)) / 100;
    return price + percentageAmount;
  } else {
    return price;
  }
};

export const getPriceWithVatApplied = (currencyDetails, price) => {
  if (currencyDetails?.enable_vat && currencyDetails?.vat_percentage) {
    let percentageAmount =
      (price * parseInt(currencyDetails?.vat_percentage)) / 100;
    return price + percentageAmount;
  } else {
    return price;
  }
};

export const calculateTotalDonationTokensOfCart = (cart) => {
  let totalDonationTokens = 0;

  cart?.forEach((item) => {
    const quantity = item.quantity;
    const donationTokens = item.donation_tokens;

    const itemTotalDonationTokens = quantity * donationTokens;
    totalDonationTokens += itemTotalDonationTokens;
  });

  return totalDonationTokens;
};

export const calculateVatForPrice = (prize, vat) => {
  var vatAmount = (prize * vat) / 100;
  return vatAmount;
};
