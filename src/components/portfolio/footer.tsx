export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-[#deded6] pt-[25px] pb-[30px] min-[541px]:flex-nowrap [&>a]:hover:text-[#bd4e29] [&>a:first-child]:text-[23px] [&>a:first-child>span]:top-1.5 [&>a:first-child>span]:text-[10px] [&>a:last-child]:text-[10px] [&>a:last-child]:text-[#77796f] [&>span]:text-[10px] [&>span]:text-[#77796f] max-[540px]:[&>span]:order-3 max-[540px]:[&>span]:w-full">
      <a
        className="text-[30px] font-[750] tracking-[-1.8px] [&>span]:relative [&>span]:top-[9px] [&>span]:ml-1 [&>span]:align-top [&>span]:text-[13px]"
        href="#home"
      >
        micka<span>®</span>
      </a>
      <span>© {new Date().getFullYear()} Micka. Made with care.</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}
