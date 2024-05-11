import * as React from "react"
import MainLayout from "../components/MainLayout"

const Ssm2024Page = () => {
  return (
    <MainLayout>
      <h1>SSM 2024</h1>
      <h2>Uppgifter och lösningar</h2>
      <p><a href="https://github.com/Kodsport/sakerhetssm-2024-solutions">Här</a> finns uppgifter och lösningar från kvalet och finalen.</p>

      <h2>Kvalet</h2>
      <p><a href="/ssm2024kval/">Här</a> hittar du tävlingssidan och resultatet för kvalet. <a href="https://www.youtube.com/watch?v=pTCTkHLeFGQ">Här</a> hittar du avslutningsstreamen som hölls efter kvalet.</p>

      <h2>Final</h2>
      <p><a href="/ssm2024final/">Här</a> hittar du tävlingssidan och resultatet för finalen.</p>

      {/* TODO uppdatera för 2024 */}
      {/* <h2>Arrangörsgrupp</h2>
      <h4>Organisation</h4>
      <ul>
        <li>Mateusz Drwal</li>
        <li>Aron Bergman</li>
        <li>Jonathan Lööv</li>
        <li>Oskar Tornevall</li>
      </ul>
      <h4>Problemskapare</h4>
      <ul>
        <li>Mateusz Drwal</li>
        <li>Jonathan Lööv</li>
        <li>Oskar Tornevall</li>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
        <li><a href="https://zeta-two.com/">Calle "Zeta Two" Svensson</a></li>
        <li>Loke Gustafsson</li>
        <li>Martin Wennberg</li>
        <li>Movitz Sunar</li>
        <li>Laith Abbawi</li>
        <li>Rasmus Hulthe</li>
        <li>Adrian Wireklint</li>
        <li>Andreas Lonn</li>
      </ul>
      <h4>Andra som hjälpte till!</h4>
      <ul>
        <li>Michal Dzialak</li>
        <li>Simon Skogsberg</li>
        <li>Julia Mårtensson</li>
        <li>Fredrik Ekholm</li>
      </ul> */}

      <p>I samarbete med: <a href="https://www.fra.se/">FRA</a></p>
    </MainLayout>
  )
}

export default Ssm2024Page
