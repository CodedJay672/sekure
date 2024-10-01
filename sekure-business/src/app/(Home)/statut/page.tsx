import StatutCheck from "@/components/ui/shared/Statut-check";

const Status: React.FC = () => {
  return (
    <section className="wrapper">
      <div className="w-full rounded-[10px] bg-white pt-11 pl-10 pb-44">
        <div className="w-[791px]">
          <div className="w-full">
            <h1 className="text-base  font-semibold">WALLET</h1>
            <p className="text-[12px] leading-4 font-light text-[#6F6F6F]">
              Ces clés vous permettront d’authentifier les demandes d’API
            </p>
          </div>

          <StatutCheck
            title="XAF"
            items={[
              {id: "switch1", text: "Recharges via mobile money"},
              {id: "switch2", text: "Recharge via Depot bancaires"},
              {id: "switch3", text: "Recharges via PayPal"}
            ]}
          />

          <StatutCheck
            title="XOF"
            items={[
              {id: "switch1", text: "Recharges via mobile money"},
              {id: "switch2", text: "Recharge via Depot bancaires"},
              {id: "switch3", text: "Recharges via PayPal"}
            ]}
          />

          <StatutCheck
            title="USD"
            items={[
              {id: "switch1", text: "Recharges via mobile money"},
              {id: "switch2", text: "Recharge via Depot bancaires"},
              {id: "switch3", text: "Recharges via PayPal"}
            ]}
          />

          <StatutCheck
            title="Collectes"
            items={[
              {id: "switch1", text: "Par ORANGE Money CM"},
              {id: "switch2", text: "Par MTN MOMO CM"},
              {id: "switch3", text: "Par AIRTEL Money GB"},
              {id: "switch4", text: "Par MOOV Money GB"},
              {id: "switch5", text: "Par Depot bancaires"},
              {id: "switch6", text: "Par Dépôt PayPal"},
            ]}
          />

          <StatutCheck
            title="KYC"
            items={[
              {id: "switch1", text: "Recharges par Orange money Cameroun"},
              {id: "switch2", text: "Recharges par Orange money CM"},
              {id: "switch3", text: "Recharges par Orange money Cameroun"},
              {id: "switch4", text: "Recharges par Orange money CM"},
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Status;
