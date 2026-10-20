export function ProjectPreview({ style }: { style: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-md ${style === "forma" ? "h-56 bg-stone-200 px-4 py-4 sm:h-68 sm:p-8 md:h-88 md:px-28 md:py-12" : "h-68 p-8 sm:h-60 sm:p-4 md:h-72 md:p-8"} ${style === "objects" ? "bg-orange-100" : style === "atmos" ? "bg-slate-200" : ""}`}
      aria-hidden="true"
    >
      {style === "forma" ? (
        <div className="flex min-h-44 w-full -rotate-2 group-hover:rotate-0 transition-transform duration-500 rounded-md bg-stone-50 text-xs shadow-lg shadow-stone-700/10 motion-reduce:transition-none sm:min-h-60">
          <div className="flex w-1/4 flex-col gap-3.5 border-r border-stone-200 bg-stone-100 px-2 py-4 text-xs sm:gap-4 sm:px-4 sm:py-4 sm:text-xs [&>b]:mb-2.5 [&>b]:text-xs sm:[&>b]:mb-4 sm:[&>b]:text-base [&>span]:text-stone-500">
            <b>f. forma</b>
            <span>◈ Overview</span>
            <span>▦ Projects</span>
            <span>◷ My tasks</span>
            <span>＋ New project</span>
          </div>
          <div className="min-w-0 flex-1 px-3 py-4 sm:px-4 sm:py-8 [&>h4]:mt-2 [&>h4]:mb-4 [&>h4]:text-sm [&>h4]:font-medium [&>h4]:tracking-tight sm:[&>h4]:mb-4 sm:[&>h4]:text-xl [&>small]:text-xs [&>small]:tracking-wider [&>small]:text-stone-400">
            <small>YOUR WORKSPACE, SIMPLIFIED</small>
            <h4>Make room for good work.</h4>
            <div className="flex gap-1 sm:gap-3 [&_b]:text-xs [&_b]:font-medium sm:[&_b]:text-xs [&_b_span]:ml-1.5 [&_b_span]:text-stone-400 [&_em]:mt-3 [&_em]:block [&_em]:text-xs [&_em]:text-stone-400 [&_em]:not-italic [&_i]:mb-2 [&_i]:block [&_i]:h-1 [&_i]:w-4 [&_i]:rounded-sm [&_i]:bg-lime-200 [&_p]:my-2 [&_p]:rounded [&_p]:border [&_p]:border-stone-200 [&_p]:bg-white [&_p]:px-1 [&_p]:py-2 [&_p]:text-xs sm:[&_p]:p-2.5 sm:[&_p]:text-xs [&>div]:min-w-0 [&>div]:flex-1 [&>div]:wrap-break-word">
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
        <div className="w-full -rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-stone-50 px-4 py-4 shadow-lg shadow-stone-700/10">
          <div className="flex items-center justify-between font-serif text-lg [&>span]:font-sans [&>span]:text-xs">
            objects<span>Shop &nbsp; About &nbsp; Bag (0)</span>
          </div>
          <div className="flex items-center justify-between gap-2.5 py-4 [&_h4]:mt-2 [&_h4]:mb-4 [&_h4]:font-serif [&_h4]:text-xl [&_h4]:leading-tight [&_h4]:font-normal md:[&_h4]:text-3xl [&_small]:text-xs [&_small]:tracking-wider">
            <div>
              <small>LESS, BUT BETTER.</small>
              <h4>
                Everyday.
                <br />
                Extraordinary.
              </h4>
              <span className="border-b border-stone-400 pb-1 text-xs">
                Explore the collection ↗
              </span>
            </div>
            <div className="relative mt-4 ml-2.5 h-20 w-16 rounded-t-2xl rounded-b-3xl bg-linear-to-r from-stone-500 via-orange-200 to-stone-500 shadow-lg shadow-stone-700/20 md:mr-2.5 md:h-28 md:w-20 [&>div]:absolute [&>div]:-top-3 [&>div]:left-3 [&>div]:h-4 [&>div]:w-8 [&>div]:rounded-t-sm [&>div]:border-t-4 [&>div]:border-stone-500 [&>div]:bg-linear-to-r [&>div]:from-stone-500 [&>div]:via-orange-200 [&>div]:to-stone-400 md:[&>div]:left-4 md:[&>div]:w-12">
              <div />
            </div>
          </div>
          <div className="border-t border-stone-200 pt-2.5 text-center text-xs">
            Thoughtful objects. Lasting impressions.
          </div>
        </div>
      ) : (
        <div className="w-full rotate-3 group-hover:rotate-0 transition-transform duration-500 rounded-lg bg-slate-50 px-8 py-4 shadow-lg shadow-slate-700/10">
          <div className="flex items-center justify-between text-sm tracking-tighter [&>span]:text-xs [&>span]:tracking-normal">
            atmos<span>⌖ Paris, France</span>
          </div>
          <div className="flex items-center justify-between pt-4 pb-4 [&_h4]:my-2 [&_h4]:text-5xl [&_h4]:leading-none [&_h4]:font-light [&_p]:text-xs [&_p]:leading-normal [&_p]:text-slate-500 [&_small]:text-xs [&_small]:tracking-wider">
            <div>
              <small>MONDAY, JUNE 16</small>
              <h4>24°</h4>
              <p>
                A little sunshine.
                <br />A lot of possibilities.
              </p>
            </div>
            <div className="size-20 rounded-full bg-amber-300 shadow-xl shadow-amber-200/50 inset-shadow-sm inset-shadow-amber-600/40" />
          </div>
          <div className="flex justify-between border-t border-slate-200 pt-3 [&_b]:text-sm [&_b]:text-amber-600 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-1 [&>div]:text-xs">
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
