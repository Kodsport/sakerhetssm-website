import * as React from "react"
import MainLayout from "../components/MainLayout"

const fqzsshrPage = () => {
  return (
    <MainLayout>
      <h1>Försök igen</h1>
      <p>Den sista biten av länken till den här sidan (<code>fqzsshr</code>) är krypterad. Försök avkoda den och komma till den nya sidan!</p>
      <p style={{ fontSize: "0.7em", marginTop: "5em" }}>Pssst, bokstaven <code>f</code> avkodar till <code>g</code></p>
    </MainLayout>
  )
}

export default fqzsshrPage
