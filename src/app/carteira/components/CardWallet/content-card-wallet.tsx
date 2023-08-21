import { IContentCard } from "@/app/carteira/types";

export function ContentCard({titleContent,textContent}: IContentCard){
  return(
    <div className="px-6 mb-5">
    <div className="text-white text-sm sm:text-lg md:text-xl  flex justify-between">
      <h3 className="font-bold">{titleContent}</h3>
      <p className="text-sm sm:text-lg md:text-xl font-thin text-right">{textContent}</p>
    </div>
    <div className="h-[1px] bg-gray-800 w-full mt-1"></div>
  </div>
  )
}
