import * as React from "react"
import { Link } from "gatsby"
import MainLayout from "../components/MainLayout"
import Sponsor from "../styles/Sponsor.module.scss"
import style from "../styles/Util.module.scss"
import svinstian from "../images/svinstian.png"
import sentorLogo from "../images/sentor.png"
import cpartaLogo from "../images/cparta.jpg"
import foiLogo from "../images/foi.png"
import msabLogo from "../images/msab.png"
import orangeLogo from "../images/orangecyberdefense.png"
import venorLogo from "../images/venor.png"
import fraLogo from "../images/fra.png"
import chalmersLogo from "../images/chalmers.png"
import discordLogo from "../images/discord.png"
import envelopeImg from "../images/envelope.svg"

const IndexPage = () => {
  return (
    <MainLayout>
      <h1>Vad är Säkerhets-SM?</h1>
      <p>Har du ett intresse för datorrelaterad problemlösning, eller vill du lära dig vad det egentligen innebär att hacka? Säkerhets-SM är en tävling med fokus på att lära ut koncept inom bland annat cybersäkerhet, men även att hitta de bästa eleverna i Sverige! Tävlingen är skapad för att passa alla kunskapsnivåer, så det spelar ingen roll om du är total nybörjare eller erfaren. Går det riktigt bra får du chansen att bli uttagen till landslaget och åka på EM!</p>

      <p>Tävlingen är riktad främst mot gymnasie- och högstadieelever, och består av ett kval och en final. Man tävlar i lag med upp till 3 personer, så du kan tävla själv eller samla två kompisar för en ännu roligare upplevelse! Kvalet hålls online den 10-12 mars, med en träningstävling veckan innan för att hjälpa till att värma upp. Finalen hålls den 12-14 maj på Chalmers tekniska högskola i Göteborg för de ~30 bästa eleverna, med betald resa, mat och boende.</p>

      <p>Du kan redan nu <a href="https://ctf.sakerhetssm.se/signin">registrera dig</a> till tävligen! Joina gärna också <a href="https://discord.gg/edKFKKU">Kodsports Discordserver</a> där du kan nå oss organisatörer, prata med andra deltagare, visa dina egna projekt eller ställa allmänna datorrelaterade frågor. Vi har också en <a href="https://mail.sakerhetssm.se/subscription/form">mailinglista</a> där vi skickar ut uppdateringar om tävlingen.</p>

      <div className={style.reg_button_container}>
        <a href="https://ctf.sakerhetssm.se/signin" className={style.reg_button}>
          Registrera dig!
        </a>
      </div>

      <div className={style.discord_email_box}>
        <a href="https://discord.gg/edKFKKU"><img id={style.discord} src={discordLogo} alt="Discord" /></a>
        <a href="https://mail.sakerhetssm.se/subscription/form"><img id={style.mail} src={envelopeImg} alt="Mailinglista" /></a>
      </div>

      <h1>Lös första problemet redan nu!</h1>

      <p>Detta är en av uppgifterna som kommer på kvalet. Lyckas du lösa den så har du redan fått poäng!</p>

      <h3>Länkstrul</h3>
      <p>Oj, nu har den <span style={{ color: "var(--accent-color)" }} >orangea</span> delen snurrat till sig. Kan du fixa länken? </p>
      <p style={{ textAlign: "center", fontSize: "2.5em" }}>https://<wbr />sakerhetssm.se<wbr />/<span style={{ color: "var(--accent-color)", fontSize: "1.5em" }}>rmxffs</span></p>

      <h1>Priser</h1>

      <p>Utöver chansen att kvala vidare till <a href="#ecsc">ECSC</a>, kan man vinna presentkort genom att prestera bra i finalen. Vi delar ut 3000kr i presentkort till webhallen för det vinnande laget, och 1800kr, 1500kr, 1200kr samt 900kr till lagen på plats 2-5. Det är också sannolikt att våra sponsorer kommer med fler finalpriser utöver detta!</p>

      <h1 id="ecsc">ECSC 2023</h1>
      <p>EU:s cybersäkerhetsbyrå anordnar sedan ett par år tillbaka EM i cybersäkerhet, <a href="https://ecsc.eu/">ECSC</a> (European Cybersecurity Challenge). I år ska Sverige skicka ett lag och Säkerhets-SM är en del av uttagningen. De bästa 5-10 deltagarna på finalen kommer bjudas in till en veckas bootcamp, fylld med föreläsningar från experter och kul häng. Därefter kommer landslaget väljas bland deltagarna från bootcamp. Preliminära datum 11-16 juni. Mer info på <a href="https://snht.se/">https://snht.se/</a></p>

      <h1>I samarbete med</h1>
      <div className={Sponsor.logo}><a href="https://www.fra.se/"><img style=
        {{
          /* the main sponsor gets a bigger logo */
          maxHeight: "350px",
          maxWidth: "100%"
        }} src={fraLogo} alt="FRA" /></a></div>
      <h3><a href="https://www.fra.se/">FRA</a></h3>
      <p>FRA arbetar med signalspaning och utgör en del av Sveriges underrättelsetjänst. Vi skapar förutsättningar för ett cyberförsvar och bidrar till att skydda samhällsviktiga informationssystem. FRA är en civil myndighet som lyder under Försvarsdepartementet och vårt huvudkontor ligger på Lovön, strax väster om Stockholm. Antal anställda är cirka 950 personer. <a href="https://www.fra.se/">www.fra.se</a></p>

      <h1>Sponsorer</h1>
      <div className={Sponsor.logo}><a href="https://cparta.se/">
        <img src={cpartaLogo} alt="Cparta" style={{
          /* Fulhack för att de inte har någon padding i sin bild... */
          border: "20px solid black", boxSizing: "border-box"
        }} />
      </a></div>
      <h3><a href="https://cparta.se/">Cparta</a></h3>
      <p>Cparta is a company dedicated to protecting Swedish commercial interests by providing tailored cyber security services. We combine expertise, innovation, and dedication to secure our client&#39;s digital integrity. <a href="https://www.cparta.se/">www.cparta.se</a></p>

      <div className={Sponsor.logo}><a href="https://www.chalmers.se/"><img src={chalmersLogo} alt="Chalmers" /></a></div>
      <h3><a href="https://www.chalmers.se/">Chalmers</a></h3>
      <p>Chalmers forskar och utbildar inom teknik och naturvetenskap på hög internationell nivå. Universitetet utbildar ingenjörer, arkitekter och sjöbefäl. Med vetenskaplig excellens som grund utvecklar Chalmers kompetens och tekniska lösningar för en hållbar värld. Genom globalt engagemang och entreprenörsanda skapar vi innovationskraft, i nära samarbete med övriga samhället. <a href="https://www.chalmers.se/">www.chalmers.se</a></p>

      <div className={Sponsor.logo}><a href="https://jobb.orangecyberdefense.com/"><img src={orangeLogo} alt="Orange Cyberdefense" /></a></div>
      <h3><a href="https://jobb.orangecyberdefense.com/">Orange Cyberdefense</a></h3>
      <p>Digital freedom is not given</p>

      <p>At Orange Cyberdefense we believe that the Internet can remain this trusted world of leisure, professional opportunities and services provider that make everyday life easier. Our purpose is to build a safer digital society.</p>

      <p>Would you like to be a cyberdefender? <a href="https://jobb.orangecyberdefense.com/">jobb.orangecyberdefense.com</a></p>

      <div className={Sponsor.logo}><a href="https://www.sentor.se"><img src={sentorLogo} alt="Sentor" style={{
        /* the style after this is to get rid */
        /* of the excesive padding of the logo from Sentor */
        maxWidth: "100%",
        objectFit: "cover",
        objectPosition: "center",
        width: "600px"
      }} /></a></div>
      <h3><a href="https://www.sentor.se">Sentor</a></h3>
      <p>Sentor Security är ett renodlat cybersäkerhetsföretag med över 20 års erfarenhet i branschen. På våra kontor runt om i Norden arbetar över 80 anställda dedikerat med att testa och skydda våra kunders digitala tillgångar, och tillsammans bildar vi landets största och mest erfarna samling av pentestare och säkerhetsanalytiker. <a href="https://www.sentor.se">www.sentor.se</a></p>

      <h3>Google Cloud</h3>
      <p>Infra sponsored by <a href="https://goo.gle/ctfsponsorship">goo.gle/ctfsponsorship</a></p>
    </MainLayout >
  )
}

export default IndexPage
