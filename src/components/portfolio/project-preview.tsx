export function ProjectPreview({ style }: { style: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-md ${style === "forma" ? "h-[230px] bg-[#e6e9df] px-[15px] py-5 min-[541px]:h-[270px] min-[541px]:p-[35px] min-[761px]:h-[350px] min-[761px]:px-[110px] min-[761px]:py-10" : "h-[270px] p-[35px] min-[541px]:h-[235px] min-[541px]:p-5 min-[761px]:h-[280px] min-[761px]:p-[35px]"} ${style === "objects" ? "bg-[#eae0d4]" : style === "atmos" ? "bg-[#dde6ed]" : ""}`}
      aria-hidden="true"
    >
      {style === "forma" ? (
        <div className="flex min-h-[180px] w-full -rotate-2 rounded-md bg-[#fbfcf9] text-[9px] shadow-[0_16px_30px_#39412b16] transition-transform duration-500 group-hover:rotate-0 motion-reduce:transition-none min-[541px]:min-h-[245px]">
          <div className="flex w-[24%] flex-col gap-[14px] border-r border-[#e6e7df] bg-[#f0f1eb] px-2 py-[15px] text-[6px] min-[541px]:gap-[18px] min-[541px]:px-[15px] min-[541px]:py-[22px] min-[541px]:text-[9px] [&>b]:mb-2.5 [&>b]:text-xs min-[541px]:[&>b]:mb-[18px] min-[541px]:[&>b]:text-base [&>span]:text-[#69715e]">
            <b>f. forma</b>
            <span>◈ Overview</span>
            <span>▦ Projects</span>
            <span>◷ My tasks</span>
            <span>＋ New project</span>
          </div>
          <div className="flex-1 px-3 py-[18px] min-[541px]:px-5 min-[541px]:py-7 [&>h4]:mt-2 [&>h4]:mb-[15px] [&>h4]:text-sm [&>h4]:font-medium [&>h4]:tracking-[-0.7px] min-[541px]:[&>h4]:mb-[22px] min-[541px]:[&>h4]:text-xl [&>small]:text-[6px] [&>small]:tracking-[1px] [&>small]:text-[#8c9384]">
            <small>YOUR WORKSPACE, SIMPLIFIED</small>
            <h4>Make room for good work.</h4>
            <div className="flex gap-[5px] min-[541px]:gap-3 [&_b]:text-[5px] [&_b]:font-medium min-[541px]:[&_b]:text-[7px] [&_b_span]:ml-1.5 [&_b_span]:text-[#8c9384] [&_em]:mt-3 [&_em]:block [&_em]:text-[5px] [&_em]:text-[#969d8d] [&_em]:not-italic [&_i]:mb-2 [&_i]:block [&_i]:h-1 [&_i]:w-5 [&_i]:rounded-sm [&_i]:bg-[#c6d3b1] [&_p]:my-2 [&_p]:rounded [&_p]:border [&_p]:border-[#e9eae4] [&_p]:bg-white [&_p]:px-[5px] [&_p]:py-[7px] [&_p]:text-[5px] min-[541px]:[&_p]:p-2.5 min-[541px]:[&_p]:text-[7px] [&>div]:flex-1">
              {["To do", "In progress", "Done"].map((label, i) => (
                <div key={label}>
                  <b>
                    {label} <span>{i + 2}</span>
                  </b>
                  <p>
                    <i />
                    {
                      [
                        "Website exploration",
                        "Brand direction",
                        "Project kickoff",
                      ][i]
                    }
                    <em>Design · Today</em>
                  </p>
                  <p>
                    <i />
                    {
                      [
                        "Collect inspiration",
                        "Component library",
                        "First concepts",
                      ][i]
                    }
                    <em>Workspace</em>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : style === "objects" ? (
        <div className="w-full -rotate-3 bg-[#f8f5ef] px-5 py-[18px] shadow-[0_12px_25px_#58412715]">
          <div className="flex items-center justify-between font-[Georgia,serif] text-[17px] [&>span]:font-sans [&>span]:text-[5px]">
            objects<span>Shop &nbsp; About &nbsp; Bag (0)</span>
          </div>
          <div className="flex items-center justify-between gap-2.5 py-5 [&_h4]:mt-2 [&_h4]:mb-[15px] [&_h4]:font-[Georgia,serif] [&_h4]:text-[21px] [&_h4]:leading-[1.1] [&_h4]:font-normal min-[761px]:[&_h4]:text-[27px] [&_small]:text-[5px] [&_small]:tracking-[1px]">
            <div>
              <small>LESS, BUT BETTER.</small>
              <h4>
                Everyday.
                <br />
                Extraordinary.
              </h4>
              <span className="border-b border-[#99988a] pb-1 text-[5px]">
                Explore the collection ↗
              </span>
            </div>
            <div className="relative mt-[15px] ml-2.5 h-[85px] w-[60px] rounded-[25%_25%_40%_40%] bg-[repeating-linear-gradient(90deg,transparent_0_3px,#83634312_3px_5px),linear-gradient(90deg,#a68b6d,#d8c4a6_40%,#bda383_70%,#8c7256)] shadow-[7px_9px_10px_#67523920] min-[761px]:mr-2.5 min-[761px]:h-[110px] min-[761px]:w-[85px] [&>div]:absolute [&>div]:-top-[13px] [&>div]:left-3 [&>div]:h-[22px] [&>div]:w-9 [&>div]:rounded-t-[5px] [&>div]:border-t-[5px] [&>div]:border-[#917454] [&>div]:bg-[linear-gradient(90deg,#a68b6d,#d8c4a6,#bda383)] min-[761px]:[&>div]:left-[19px] min-[761px]:[&>div]:w-[46px]">
              <div />
            </div>
          </div>
          <div className="border-t border-[#e4ddd1] pt-2.5 text-center text-[5px]">
            Thoughtful objects. Lasting impressions.
          </div>
        </div>
      ) : (
        <div className="w-full rotate-3 rounded-lg bg-[#f1f6fa] px-[25px] py-5 shadow-[0_10px_25px_#30445c10]">
          <div className="flex items-center justify-between text-sm tracking-[-1px] [&>span]:text-[7px] [&>span]:tracking-normal">
            atmos<span>⌖ Paris, France</span>
          </div>
          <div className="flex items-center justify-between pt-5 pb-[15px] [&_h4]:my-[7px] [&_h4]:text-[45px] [&_h4]:leading-none [&_h4]:font-light [&_p]:text-[7px] [&_p]:leading-normal [&_p]:text-[#7c8e9b] [&_small]:text-[5px] [&_small]:tracking-[1px]">
            <div>
              <small>MONDAY, JUNE 16</small>
              <h4>24°</h4>
              <p>
                A little sunshine.
                <br />A lot of possibilities.
              </p>
            </div>
            <div className="size-[72px] rounded-full bg-[#f0c57a] shadow-[0_0_35px_#edce9070,inset_-8px_-8px_15px_#dfab51]" />
          </div>
          <div className="flex justify-between border-t border-[#dde7ef] pt-3 [&_b]:text-[13px] [&_b]:text-[#c5974b] [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-1 [&>div]:text-[6px]">
            {["Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
              <div key={day}>
                <span>{day}</span>
                <b>☀</b>
                <span>{23 + i}°</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
