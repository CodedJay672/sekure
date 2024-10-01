import BusinessForm from "@/components/Forms/BusinessForm";
import UserForm from "@/components/Forms/UserForm";

const Profil: React.FC = () => {
  return (
    <section className="wrapper">
      <div className="flex-1 flex flex-col rounded-[10px] bg-white pt-11 pl-10 pb-44">
        <h2 className="text-sm leading-24 font-semibold">Détails personnels</h2>
        <p className="text-xs font-light text-placeholder-text mt-1">liste en temps réel des dernieres transactions effectuées avec les cartes</p>

        <div className="mt-4">
          <UserForm />
        </div>

        <h2 className="text-sm leading-24 font-semibold mt-16">Détails de entreprise</h2>
        <p className="text-xs font-light text-placeholder-text mt-1">liste en temps réel des dernieres transactions effectuées avec les cartes</p>

        <div className="mt-4">
          <BusinessForm />
        </div>
      </div>
    </section>
  )
}

export default Profil;
