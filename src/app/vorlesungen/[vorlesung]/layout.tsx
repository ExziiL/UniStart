export default function VorlesungLayout({ children }: { children: React.ReactNode }) {
	return <section className="grid-col grid grid-cols-[1fr_min(80ch,_calc(100%-32px))_1fr] py-8">{children}</section>;
	// grid-template-columns: 1fr min(80ch, calc(100% - 32px)) 1fr;
}
