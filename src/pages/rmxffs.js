import * as React from "react"
import MainLayout from "../components/MainLayout"

const rmxffsPage = () => {
  return (
    <MainLayout>
      <h1>Försök igen</h1>
      <p>Den sista biten av länken till den här sidan (<code>rmxffs</code>) är krypterad. Försök avkoda den och komma till den nya sidan!</p>
      <p style={{ fontSize: "0.7em", marginTop: "5em" }}>Pssst, bokstaven <code>r</code> avkodar till <code>s</code></p>
    </MainLayout>
  )
}

export default rmxffsPage
