import { CustomerCardProps } from "../../types/interfaces";

function CustomerCard({ opinion, fullName, imagen, formato }: CustomerCardProps) {
  return (
    <div className="flex items-stretch max-w-2xl bg-hive-1 shadow-lg rounded-2xl overflow-hidden">

      <div className="p-6 w-2/3 flex flex-col justify-center">
        <p className="text-negro-abeja mt-2">{opinion}</p>
        <h2 className="text-2xl font-bold text-negro-abeja mt-2">{fullName}</h2>
      </div>

      <div className="w-1/3">
        <img
          src={`/${imagen}.${formato}`}
          alt={`Cliente: ${imagen}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CustomerCard;
