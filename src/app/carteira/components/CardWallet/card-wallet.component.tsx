import { Button } from "@/components";
import { ContentCard } from "./content-card-wallet.component";
import { ICardWallet } from "@/app/carteira/types";

export function CardWallet({idWallet,nameBank, typeAccount, description}:ICardWallet) {
  return (
    <div className="w-11/12 md:w-2/3 lg:w-2/5  h-96 bg-gray-600 rounded-2xl max-w-screen-md py-5 px-5">
      <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-4">
        {nameBank} - {typeAccount}
      </h2>
      <ContentCard titleContent="Banco" textContent={nameBank} />
      <ContentCard titleContent="Saldo" textContent="R$00,00" />
      <ContentCard titleContent="Tipo da conta" textContent={typeAccount} />
      <ContentCard
        titleContent="Descrição"
        textContent={description}
      />
      <div className="w-full flex flex-col items-center mt-8 gap-4 min-[425px]:flex min-[425px]:flex-row min-[425px]:justify-center min-[425px]:gap-20 min-[425px]:mt-12">
        <Button
          id={idWallet}
          type="submit"
          className="py-2 px-9 w-4/5 min-[425px]:w-[125px] bg-green-500 rounded-[6px] "
          canceled={false}
        >
          Editar
        </Button>
        <Button
          className="py-2 px-9 w-4/5 min-[425px]:w-[125px] hover:bg-red-300 hover:opacity-90 rounded-[6px]"
          canceled
        >
          Excluir
        </Button>
      </div>
    </div>
  );
}
