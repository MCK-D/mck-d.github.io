import reactLogo from "@/assets/react.svg"
import IosAppFolder, { type FolderApp } from "@/components/ui/test";

const apps: FolderApp[] = [
  { id: "pixelmator", label: "Pixelmator Pro", iconSrc: reactLogo },
  { id: "final-cut", label: "Final Cut", iconSrc: reactLogo },
  { id: "logic", label: "Logic Pro", iconSrc: reactLogo },
  { id: "pages", label: "Pages", iconSrc: reactLogo },
  { id: "keynote", label: "Keynote", iconSrc: reactLogo },
  { id: "compressor", label: "Compressor", iconSrc: reactLogo },
  { id: "freeform", label: "Freeform", iconSrc: reactLogo },
  { id: "numbers", label: "Numbers", iconSrc: reactLogo },
  { id: "calc", label: "Calc", iconSrc: reactLogo },
  { id: "apixelmator", label: "Pixelmator Pro", iconSrc: reactLogo },
  { id: "fainal-cut", label: "Final Cut", iconSrc: reactLogo },
  { id: "loajgic", label: "Logic Pro", iconSrc: reactLogo },
  { id: "pageas", label: "Pages", iconSrc: reactLogo },
  { id: "keynoate", label: "Keynote", iconSrc: reactLogo },
  { id: "compreassor", label: "Compressor", iconSrc: reactLogo },
  { id: "freeforam", label: "Freeform", iconSrc: reactLogo },
  { id: "numabers", label: "Numbers", iconSrc: reactLogo },
  { id: "calca", label: "Calc", iconSrc: reactLogo },
  { id: "aapixelmator", label: "Pixelmator Pro", iconSrc: reactLogo },
  { id: "ifainal-cut", label: "Final Cut", iconSrc: reactLogo },
  { id: "iloajgic", label: "Logic Pro", iconSrc: reactLogo },
  { id: "ipageas", label: "Pages", iconSrc: reactLogo },
  { id: "ikeynoate", label: "Keynote", iconSrc: reactLogo },
  { id: "icompreassor", label: "Compressor", iconSrc: reactLogo },
  { id: "ifreeforam", label: "Freeform", iconSrc: reactLogo },
  { id: "inumabers", label: "Numbers", iconSrc: reactLogo },
  { id: "icalca", label: "Calc", iconSrc: reactLogo },
  { id: "nuimbers", label: "Numbers", iconSrc: reactLogo },
  { id: "cailc", label: "Calc", iconSrc: reactLogo },
  { id: "aipixelmator", label: "Pixelmator Pro", iconSrc: reactLogo },
  { id: "fiainal-cut", label: "Final Cut", iconSrc: reactLogo },
  { id: "lioajgic", label: "Logic Pro", iconSrc: reactLogo },
  { id: "piageas", label: "Pages", iconSrc: reactLogo },
  { id: "kieynoate", label: "Keynote", iconSrc: reactLogo },
  { id: "ciompreassor", label: "Compressor", iconSrc: reactLogo },
  { id: "fireeforam", label: "Freeform", iconSrc: reactLogo },
  { id: "niumabers", label: "Numbers", iconSrc: reactLogo },
  { id: "cialca", label: "Calc", iconSrc: reactLogo },
  { id: "aiapixelmator", label: "Pixelmator Pro", iconSrc: reactLogo },
  { id: "iifainal-cut", label: "Final Cut", iconSrc: reactLogo },
  { id: "iiloajgic", label: "Logic Pro", iconSrc: reactLogo },
  { id: "iipageas", label: "Pages", iconSrc: reactLogo },
  { id: "iikeynoate", label: "Keynote", iconSrc: reactLogo },
  { id: "iicompreassor", label: "Compressor", iconSrc: reactLogo },
  { id: "iifreeforam", label: "Freeform", iconSrc: reactLogo },
  { id: "iinumabers", label: "Numbers", iconSrc: reactLogo },
  { id: "iicalca", label: "Calc", iconSrc: reactLogo },
];

export function App() {
  return (
    <>
      <div className="flex min-h-svh p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project ready!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
    <div className="mx-auto max-w-xl p-4">
      <IosAppFolder
        title="Creator Studio"
        items={apps}
        onAppClick={(app) => console.log("Selected:", app.id)}
      />
    </div>
    <div className="mx-auto max-w-xl p-4">
      <IosAppFolder
        title="Creator Studio"
        items={apps}
        onAppClick={(app) => console.log("Selected:", app.id)}
      />
    </div>
      </div>
    </>
  )
}

export default App
