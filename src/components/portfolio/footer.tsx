export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-8 pb-8 sm:flex-nowrap [&>a]:hover:text-amber-700 [&>a:first-child]:text-2xl [&>a:first-child>span]:top-1.5 [&>a:first-child>span]:text-xs [&>a:last-child]:text-xs [&>a:last-child]:text-stone-500 [&>span]:text-xs [&>span]:text-stone-500 max-sm:[&>span]:order-3 max-sm:[&>span]:w-full">
      <a
        className="text-3xl font-extrabold tracking-tighter [&>span]:relative [&>span]:top-2 [&>span]:ml-1 [&>span]:align-top [&>span]:text-sm"
        href="#home"
      >
        micka<span>®</span>
      </a>
      <span>© {new Date().getFullYear()} Micka. Made with care.</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}
