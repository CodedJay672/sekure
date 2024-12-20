"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { custom, z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cardCreateSchema } from "../../_validation";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import DetailsTag from "../ui/shared/DetailsTag";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAppSelector } from "@/_lib/redux/hooks";
import { useCreateCustomerCardMutation } from "../react-query/queriesAndMutations";
import Modal from "../ui/shared/Modal";
import LoadingSpinner from "../Alert/Loading";
import { useToast } from "@/hooks/use-toast";
import { transformedGenericErrorObject } from "@/utils";
import { signInReturnType } from "@/_validation/SignIn";
import { useEffect, useState } from "react";
import { ICreatedCard } from "@/_data/card";

interface CreateCardFormProps {
  btnText: string;
}

const CreateCardForm: React.FC<CreateCardFormProps> = ({ btnText }) => {
  const user = useAppSelector((state) => state.connexion?.user?.[0]);
  const { toast } = useToast();
  const [errorObj, setErrorObj] = useState({});

  const { mutateAsync: createCusomerCard, isPending: isCreatingCustomerCard } =
    useCreateCustomerCardMutation();

  useEffect(() => {
    console.log(errorObj);
  }, [errorObj]);

  const form = useForm<z.infer<typeof cardCreateSchema>>({
    resolver: zodResolver(cardCreateSchema),
  });

  async function onSubmit(values: z.infer<typeof cardCreateSchema>) {
    const customerCard = await createCusomerCard({
      created_by: user?.id ?? 0,
      email: values.email,
      brand: values.cardType,
    });

    if (customerCard.status) {
      form.reset();
      toast({
        description: customerCard.message,
      });
    } else {
      toast({
        description: "The selected email is invalid.",
      });
      setErrorObj(transformedGenericErrorObject(customerCard));
    }
  }

  if (isCreatingCustomerCard) {
    return (
      <Modal>
        <LoadingSpinner />
      </Modal>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="cardType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Type de carte</FormLabel>
              <FormControl>
                <div className="w-full rounded-[7px]">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select card type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="visa" className="hover:bg-gray-50">
                        Visa
                      </SelectItem>
                      <SelectItem
                        value="mastercard"
                        className="hover:bg-gray-50"
                      >
                        Mastercard
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-[8px] font-normal leading-6 text-placeholder-text">
                    Ideake pour les paiements sur Alibab et Netflix, taux du
                    dollars à 685 Fcfa
                  </span>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Mail de l’utilisateur</FormLabel>
              <FormControl className="flex-between w-full bg-notif pr-3 rounded-[7px]">
                <Input
                  placeholder="user@mail.com"
                  className="input bg-notif w-full"
                  {...field}
                />
              </FormControl>
              {errorObj && field.name in errorObj ? (
                <small className="text-xs text-red-600 align-right">
                  {errorObj.email as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <div className="mb-44 flex gap-2">
          <DetailsTag data={{ key: "Montant debité", value: "51 500 XAF" }} />
        </div>

        <Button
          variant="default"
          type="submit"
          className="primary-btn flex-between w-full"
        >
          <span className="flex-1 text-center">{btnText}</span>
          <ArrowRightIcon size={16} color="#fff" />
        </Button>
      </form>
    </Form>
  );
};

export default CreateCardForm;
