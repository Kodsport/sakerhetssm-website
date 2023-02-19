import * as React from "react"
import MainLayout from "../components/MainLayout"

const grattisPage = () => {
  return (
    <MainLayout>
      <h1>Grattis!</h1>
      <p>Grattis till den korrekta lösningen! Du har redan nu tjänat in 100 poäng på tävlingen. Registrera dig på <a href="https://ctf.sakerhetssm.se">https://ctf.sakerhetssm.se</a> (skapa gärna ett lag med några kompisar!) och vänta tills kvalet börjar den 10 mars klockan 20:00. Skicka sedan in lösningen, alltså ordet <code>grattis</code> på uppgiften <code>Länkstrul</code> för att få dina poäng.</p>
      <h1>Vad är Säkerhets-SM?</h1>
      <p>Har du ett intresse för datorrelaterad problemlösning, eller vill du lära dig vad det egentligen innebär att hacka? Säkerhets-SM är en tävling med fokus på att lära ut koncept inom bland annat cybersäkerhet, men även att hitta de bästa eleverna i Sverige! Tävlingen är skapad för att passa alla kunskapsnivåer, så det spelar ingen roll om du är total nybörjare eller erfaren. Går det riktigt bra får du chansen att bli uttagen till landslaget och åka på EM!</p>

      <p>Tävlingen är riktad främst mot gymnasie- och högstadieelever, och består av ett kval och en final. Man tävlar i lag med upp till 3 personer, så du kan tävla själv eller samla två kompisar för en ännu roligare upplevelse! Kvalet hålls online den 10-12 mars, med en träningstävling veckan innan för att hjälpa till att värma upp. Finalen hålls den 12-14 maj på Chalmers tekniska högskola i Göteborg för de ~30 bästa eleverna, med betald resa, mat och boende.</p>

      <p>Du kan redan nu <a href="https://ctf.sakerhetssm.se/signin">registrera dig</a> till tävligen! Joina gärna också <a href="https://discord.gg/edKFKKU">Kodsports Discordserver</a> där du kan nå oss organisatörer, prata med andra deltagare, visa dina egna projekt eller ställa allmänna datorrelaterade frågor. Vi har också en <a href="https://mail.sakerhetssm.se/subscription/form">mailinglista</a> där vi skickar ut uppdateringar om tävlingen.</p>
    </MainLayout>
  )
}

export default grattisPage
