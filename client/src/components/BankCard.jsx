import React from "react";

const BankCard = ({ account, userName, showBalance = true }) => {
  //console.log(account);
  return (
    <div className="bank-card">
      <div className="bank-card_content">
        <div>
          <h1 className="text-16 font-semibold text-white">
            {account.name}
          </h1>
          <p className="font-ibm-plex-serif font-black text-white">
            ${account.balances?.current}
          </p>
        </div>

        <article className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-12 font-semibold text-white">{userName}</h1>
            <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
          </div>
          <p className="text-14 font-semibold tracking-[1.1px] text-white">
            ●●●● ●●●● ●●●● <span className="text-16">{account.subtype}</span>
          </p>
        </article>
      </div>

      <div className="bank-card_icon w-full">
        <img src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
        <img
          src="/icons/mastercard.svg"
          width={45}
          height={32}
          alt="mastercard"
          className="ml-9 "
        />
      </div>

      <img
        src="/icons/lines.png"
        width={316}
        height={190}
        alt="lines"
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default BankCard;
