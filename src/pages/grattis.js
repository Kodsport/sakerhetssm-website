import * as React from "react"
import MainLayout from "../components/MainLayout"

const grattisPage = () => {
  return (
    <MainLayout>
      <h1>Grattis!</h1>
      <p>Grattis till den korrekta lösningen! Du har redan nu tjänat in 100 poäng på tävlingen. Registrera dig på <a href="https://ctf.sakerhetssm.se">https://ctf.sakerhetssm.se</a> (skapa gärna ett lag med några kompisar!) och vänta tills kvalet börjar den 10 mars klockan 20:00. Skicka sedan in lösningen, alltså ordet <code>grattis</code> på uppgiften <code>Länkstrul</code> för att få dina poäng.</p>
    </MainLayout>
  )
}

export default grattisPage
