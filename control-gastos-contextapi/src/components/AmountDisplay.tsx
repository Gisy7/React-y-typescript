import { formatCurrency } from '../utils/index';

export type amountDisplayProps = {
    label: string,
    amount: number
}

function AmountDisplay({ label, amount }: amountDisplayProps) {
    return (
        <div className=" text-2xl flex justify-center gap-2">
            <label className="text-blue-600 font-black">{label}</label>
            <p className="font-black">{formatCurrency(amount)}</p>
        </div>
    )
}

export default AmountDisplay