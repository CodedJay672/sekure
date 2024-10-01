import StatusSwitch from "@/components/ui/shared/StatusSwitch";

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

          <div className="my-3">
            <h2 className="text-[12px] leading-4 font-bold">XAF</h2>
            <div className="flex flex-wrap gap-6 mt-2">
              <StatusSwitch text="Recharges via mobile money" />
              <StatusSwitch text="Recharge via Depot bancaires" />
              <StatusSwitch text="Recharges via PayPal" />
            </div>
          </div>

          <div className="my-10">
            <h2 className="text-[12px] leading-4 font-bold">XOF</h2>
            <div className="flex flex-wrap gap-6 mt-2">
              <StatusSwitch text="Recharges via mobile money" />
              <StatusSwitch text="Recharge via Depot bancaires" />
              <StatusSwitch text="Recharges via PayPal" />
            </div>
          </div>

          <div className="my-10">
            <h2 className="text-[12px] leading-4 font-bold">USD</h2>
            <div className="flex flex-wrap gap-6 mt-2">
              <StatusSwitch text="Recharges via mobile money" />
              <StatusSwitch text="Recharge via Depot bancaires" />
              <StatusSwitch text="Recharges via PayPal" />
            </div>
          </div>

          <div className="my-10">
            <h2 className="text-[12px] leading-4 font-bold">Cartes</h2>
            <div className="flex flex-wrap gap-6 mt-2">
              <StatusSwitch text="Achat de cartes" />
              <StatusSwitch text="Retraits de cartes" />
              <StatusSwitch text="recharges de carte" />
            </div>
          </div>

          <div className="my-10">
            <h2 className="text-[12px] leading-4 font-bold">Collectes</h2>
            <div className="flex flex-wrap gap-6 mt-2">
              <StatusSwitch text="Par ORANGE Money CM" />
              <StatusSwitch text="Par MTN MOMO CM" />
              <StatusSwitch text="Par AIRTEL Money GB" />
              <StatusSwitch text="Par MOOV Money GB" />
              <StatusSwitch text="Par Depot bancaires" />
              <StatusSwitch text="Par Dépôt PayPal" />
            </div>
          </div>

          <div className="my-10">
            <h2 className="text-[12px] leading-4 font-bold">KYC</h2>
            <div className="flex flex-wrap gap-6 mt-2">
              <StatusSwitch text="Recharges par Orange money Cameroun" />
              <StatusSwitch text="Recharges par Orange money CM" />
              <StatusSwitch text="Recharges par Orange money Cameroun" />
              <StatusSwitch text="Recharges par Orange money CM" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Status;
