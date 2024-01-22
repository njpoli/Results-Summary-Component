type SummaryProps = {
    average: number
}

function Summary({average}: SummaryProps) {
    return (
        <div className="flex flex-col bg-gradient-to-b from-[--colors-background-slate-blue] to-[--colors-background-royal-blue] rounded-[25px] text-white">
            Hello World {average}
        </div>
    )
}


export default Summary;
