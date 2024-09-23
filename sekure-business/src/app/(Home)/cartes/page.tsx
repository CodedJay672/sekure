import AdminChart from "@/components/AdminChart/AdminChart"
import Card from "@/components/Cards/Cards"
import StatsCard from "@/components/StatsCard/StatsCard"
import { bigTable, cardDetails, data } from "@/constants"
import { RiAddCircleFill } from "react-icons/ri"
import Table from "@/components/Table/Table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CreateCardForm from "@/components/Forms/CreateCardForm";

const Cartes = () => {
  return (
    <section className="wrapper">
      <div className="overflow-hidden flex flex-col gap-4">
        <section className="flex gap-2 w-[80%]">
          <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
        </section>
        <section className="flex flex-col gap-4">
          <AdminChart variant="simple" />
        </section>
        <section className="w-full">
          <Table heading="Liste de Cartes délivrées" variant="big" columns={bigTable} data={data} />
        </section>
      </div>
      <div className="w-[350px] flex flex-col gap-[13px]">
        <h2 className="text-2xl font-semibold leading-[27px] tracking-[-1px]">Stats</h2>
        <div className="w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]">
          <StatsCard entry={[20, 80]} />
        </div>
        <div className="w-full bg-white rounded-[10px] px-[14px] py-3">
          <Dialog>
            <DialogTrigger className="w-full">
              <Button
                type="button"
                variant="default"
                className="primary-btn w-full flex-between"
              >
                <span className="flex-1 text-center">
                  Créer une carte
                </span>
                <RiAddCircleFill size={18} className="fill-white" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[383px]" aria-describedby="Créer une carte">
              <DialogHeader className="mb-3">
                <DialogTitle>Créer une carte</DialogTitle>
              </DialogHeader>
              <CreateCardForm btnText="Créer" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

export default Cartes;
