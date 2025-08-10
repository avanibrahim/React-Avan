import MaintenanceBanner from "./MaintenanceBanner";

export default function MaintenancePage() {
  const waNumber = "6282291325909";
  const waMessage = `Halo, saya mau minta quote Maintenance UI.

Skema: (Per tiket / Hourly / Retainer)
Kebutuhan singkat: ...
URL website: ...
Target deadline: ...
Budget range: ...

Terima kasih!`;

  const onQuote = () => {
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6 pt-4 md:pt-24 lg:pt-32">
      <MaintenanceBanner variant="hero" onQuote={onQuote} />
    </main>
  );
}
