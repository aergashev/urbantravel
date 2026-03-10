import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex items-center gap-2 p-6">
      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="h-fit w-auto"
      />
      <div className="flex flex-col items-center gap-0 text-xl tracking-tight">
        <span className="text-[16px] font-bold text-foreground uppercase">
          Urban Travel
        </span>
        <p className="text-xs text-muted-foreground">
          - international tourism -
        </p>
      </div>
    </div>
  )
}

export default Logo
