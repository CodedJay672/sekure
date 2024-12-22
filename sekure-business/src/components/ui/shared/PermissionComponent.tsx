import React from "react";

interface PermissionGroup {
  title: string;
  permissions: string[];
}

const permissionGroups: PermissionGroup[] = [
  {
    title: "Transaction Permissions",
    permissions: [
      "can export transaction data",
      "can view transactions",
      "can manage refunds",
      "can manage dispute transactions",
    ],
  },
  {
    title: "Transfer Permissions",
    permissions: [
      "can make bank transfers",
      "can view all transfers",
      "can make bill payments",
      "can make a maplerad transfer",
      "can initiate transfer",
    ],
  },
  {
    title: "Wallet Permissions",
    permissions: [
      "can create wallet",
      "can view all available wallet balance",
      "can view all collection balance",
      "can convert funds between wallets",
      "can fund all wallets",
      "can set wallet low limit",
      "can view wallet history",
      "can generate wallet statement",
      "can view wallet transactions",
      "can set wallet withdrawal limits",
    ],
  },
  {
    title: "FX-Conversion Permissions",
    permissions: [
      "can make FX conversions between currencies",
      "can view FX conversions",
    ],
  },
  {
    title: "Cards Permissions",
    permissions: [
      "can create customer card",
      "can view cards and details",
      "can create business card",
      "can deactivate cards",
      "can activate cards",
      "can fund cards",
      "can withdraw from cards",
      "can generate card statement",
    ],
  },
  {
    title: "Customer Permissions",
    permissions: [
      "can create customer",
      "can view customers",
      "manage customer details",
      "can blacklist customer",
      "can upgrade customer",
      "can view customer accounts",
      "can view customer transactions",
      "can view customer cards",
    ],
  },
  {
    title: "Setting Permissions",
    permissions: [
      "can edit business profile",
      "can add whitelisted IP address",
      "can view users",
      "can invite users",
      "can view business settings & preferences",
      "can edit business settings & preferences",
      "can manage bank settlement settings",
      "can view bank settlement settings",
    ],
  },
  {
    title: "Webhooks Permissions",
    permissions: [
      "can manage API keys and webhooks",
      "can view API keys and webhooks",
      "can generate new keys",
      "can edit webhooks",
    ],
  },
];

const PermissionsComponent: React.FC = () => {
  return (
    <div className="w-full h-[95%] overflow-y-scroll">
      <p className="text-[11px] leading-[16.5px] font-bold mb-3">Autorisé</p>
      {permissionGroups.map((group) => (
        <div key={group.title} className="mb-3">
          <h2 className="text-[12px] leading-4 font-light">{group.title}</h2>
          <ul className="list-disc list-inside pl-2">
            {group.permissions.map((permission) => (
              <li className="text-[12px] leading-4 font-light" key={permission}>
                {permission}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PermissionsComponent;
