export const metadata = {
  title: "Om oss | lanerente.no",
  description: "Informasjon om lanerente.no og formålet med nettsiden",
};

export default function OmOssPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Om oss</h1>

      <p className="mb-4">
        Lanerente.no er en uavhengig informasjonsside som har som mål å gjøre det
        enklere å forstå boliglån, renter og privatøkonomi i Norge.
      </p>

      <p className="mb-4">
        Nettsiden tilbyr veiledende informasjon, rentekalkulatorer og oversikter,
        men er ikke en bank, finansinstitusjon eller långiver, og tilbyr ikke lån
        direkte.
      </p>

      <p className="mb-4">
        Informasjonen som presenteres er basert på offentlig tilgjengelige kilder
        og generelle markedsvilkår. Innholdet skal ikke anses som personlig
        finansiell rådgivning.
      </p>

      <p className="mb-4">
        Har du spørsmål eller innspill, kan du ta kontakt på{" 46899799 / "}
        <a href="mailto:kontakt@lanerente.no" className="underline">
          halvor.ringen@hotmail.com
        </a>.
      </p>
    </main>
  );
}
