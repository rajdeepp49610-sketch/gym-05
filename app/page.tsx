"use client";

import { useEffect, useState } from "react";

const programs = [
  {
    number: "01",
    name: "POWER",
    detail: "Strength / Explosive / Athletic",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "02",
    name: "ENDURANCE",
    detail: "Conditioning / Engine / Stamina",
    image:
      "https://images.unsplash.com/photo-1530137073522-4e1c9a1f6b2b?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "03",
    name: "MOBILITY",
    detail: "Movement / Range / Control",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=90",
  },
];

const stats = [
  ["08", "COACHES"],
  ["24", "WEEKLY SESSIONS"],
  ["03", "TRAINING ZONES"],
  ["06", "DAYS / WEEK"],
];

export default function Home() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main className="north">

      {/* TOP BAR */}

      <header className={scroll > 50 ? "header compact" : "header"}>
        <a href="#" className="logo">
          <span className="logoSquare">N</span>
          <span>NORTH / ATHLETICS</span>
        </a>

        <div className="headerLocation">
          NEW DELHI
          <span />
          28.6139° N
        </div>

        <button
          className={`menuTrigger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      {/* MENU */}

      <div className={`fullMenu ${menuOpen ? "show" : ""}`}>
        <div className="menuCoordinates">
          NORTH / 06
          <br />
          ATHLETICS CLUB
        </div>

        <div className="menuNavigation">
          <a href="#training" onClick={() => setMenuOpen(false)}>
            Training
          </a>

          <a href="#system" onClick={() => setMenuOpen(false)}>
            The System
          </a>

          <a href="#coaches" onClick={() => setMenuOpen(false)}>
            Coaches
          </a>

          <a href="#membership" onClick={() => setMenuOpen(false)}>
            Membership
          </a>
        </div>

        <div className="menuBottom">
          <span>MON — SAT</span>
          <span>05:30 — 23:00</span>
          <span>DELHI / INDIA</span>
        </div>
      </div>

      {/* HERO */}

      <section className="hero06">

        <div className="heroGrid">

          <div className="heroEyebrow">
            <span>01</span>
            ATHLETIC TRAINING CLUB
          </div>

          <div className="heroVertical">
            <span>STRENGTH</span>
            <span>CONDITIONING</span>
            <span>MOVEMENT</span>
          </div>

          <div className="heroImageMain">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=90"
              alt="Athlete training"
            />
          </div>

          <div className="heroImageSmall">
            <img
              src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=900&q=90"
              alt="Athletic training"
            />
          </div>

          <div className="heroNumber">
            <span>EST.</span>
            <strong>2019</strong>
          </div>

          <div className="heroTitle">
            <span>TRAIN</span>
            <i>WITH</i>
            <span>PURPOSE</span>
          </div>

          <div className="heroDescription">
            <p>
              A performance-driven training club for people who expect more
              from their body.
            </p>

            <a href="#training">
              DISCOVER
              <span>↓</span>
            </a>
          </div>

        </div>

        <div className="heroBottomLine">
          <span>SCROLL TO EXPLORE</span>

          <div>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>

          <span>06 / 07</span>
        </div>

      </section>

      {/* STAT STRIP */}

      <section className="statStrip">

        {stats.map((stat) => (
          <div className="stat" key={stat[1]}>
            <strong>{stat[0]}</strong>
            <span>{stat[1]}</span>
          </div>
        ))}

      </section>

      {/* INTRO */}

      <section id="system" className="system">

        <div className="systemSide">
          <span>02</span>
          <span>THE SYSTEM</span>
        </div>

        <div className="systemContent">

          <div className="systemHeading">
            <p>NOT ANOTHER FITNESS CLUB.</p>

            <h2>
              WE TRAIN
              <br />
              <em>ATHLETES.</em>
            </h2>
          </div>

          <div className="systemBody">

            <div className="systemLine" />

            <p>
              Whether you're competing, rebuilding or simply demanding more
              from yourself, our system is built around measurable progress.
            </p>

            <p>
              Training is structured around strength, conditioning and
              movement — with coaching at the centre of everything.
            </p>

          </div>

        </div>

      </section>

      {/* TRAINING */}

      <section id="training" className="training">

        <div className="trainingHeader">
          <div>
            <span>03 / TRAINING</span>

            <h2>
              CHOOSE
              <br />
              YOUR <i>MODE.</i>
            </h2>
          </div>

          <p>
            Three pillars.
            <br />
            One complete system.
          </p>
        </div>

        <div className="programStage">

          <div className="programPreview">

            <img
              key={programs[activeProgram].image}
              src={programs[activeProgram].image}
              alt={programs[activeProgram].name}
            />

            <div className="previewNumber">
              {programs[activeProgram].number}
            </div>

            <div className="previewLabel">
              {programs[activeProgram].detail}
            </div>

          </div>

          <div className="programList">

            {programs.map((program, index) => (
              <button
                key={program.number}
                className={
                  activeProgram === index ? "program active" : "program"
                }
                onMouseEnter={() => setActiveProgram(index)}
                onClick={() => setActiveProgram(index)}
              >

                <span>{program.number}</span>

                <strong>{program.name}</strong>

                <small>{program.detail}</small>

                <i>↗</i>

              </button>
            ))}

          </div>

        </div>

      </section>

      {/* PHOTO BREAK */}

      <section className="photoBreak">

        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90"
          alt="Training floor"
        />

        <div className="photoWords">
          <span>WORK</span>
          <span>HARD</span>
          <span>MOVE</span>
          <span>WELL</span>
        </div>

        <div className="photoCoordinates">
          28°36'49"N
          <br />
          77°13'56"E
        </div>

      </section>

      {/* COACHING */}

      <section id="coaches" className="coaches">

        <div className="coachIntro">

          <span>04 / COACHING</span>

          <h2>
            THE
            <br />
            <i>PEOPLE</i>
            <br />
            BEHIND IT.
          </h2>

          <p>
            Experience matters. Our coaches bring backgrounds across strength,
            conditioning, sport and movement.
          </p>

        </div>

        <div className="coachVisual">

          <div className="coachMain">
            <img
              src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1000&q=90"
              alt="Coach"
            />
          </div>

          <div className="coachCard">
            <span>HEAD COACH</span>

            <h3>
              ARJUN
              <br />
              MEHRA
            </h3>

            <p>
              Strength / Performance
            </p>

            <a href="#membership">MEET THE TEAM ↗</a>
          </div>

        </div>

      </section>

      {/* FACILITY */}

      <section className="facility">

        <div className="facilityTop">

          <span>05 / THE FLOOR</span>

          <p>
            Everything you need.
            <br />
            Nothing you don't.
          </p>

        </div>

        <div className="facilityLayout">

          <div className="facilityImage one">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=90"
              alt="Gym floor"
            />
          </div>

          <div className="facilityImage two">
            <img
              src="https://images.unsplash.com/photo-1517963879433-6ad2b056d2d1?auto=format&fit=crop&w=900&q=90"
              alt="Training equipment"
            />
          </div>

          <div className="facilityLabel">
            <span>01</span>
            FREE WEIGHTS
          </div>

          <div className="facilityLabel labelTwo">
            <span>02</span>
            CONDITIONING
          </div>

          <div className="facilityCenter">
            <span>NORTH</span>
            <strong>ATHLETICS</strong>
          </div>

        </div>

      </section>

      {/* MEMBERSHIP */}

      <section id="membership" className="membership06">

        <div className="membershipIntro">
          <span>06 / MEMBERSHIP</span>

          <h2>
            YOUR
            <br />
            <i>NEXT</i>
            <br />
            SESSION.
          </h2>

          <p>
            Start with a conversation. We'll understand your goals and put
            together the right starting point.
          </p>
        </div>

        <div className="membershipOptions">

          <div className="membershipOption">

            <span>01</span>

            <div>
              <h3>OPEN FLOOR</h3>
              <p>Independent training access.</p>
            </div>

            <strong>₹2,499</strong>

            <a href="mailto:hello@northathletics.in">
              ENQUIRE ↗
            </a>

          </div>

          <div className="membershipOption highlighted">

            <span>02</span>

            <div>
              <h3>COACHED</h3>
              <p>Structured weekly training.</p>
            </div>

            <strong>₹4,999</strong>

            <a href="mailto:hello@northathletics.in">
              ENQUIRE ↗
            </a>

          </div>

          <div className="membershipOption">

            <span>03</span>

            <div>
              <h3>PERFORMANCE</h3>
              <p>Personalised athletic programming.</p>
            </div>

            <strong>₹8,999</strong>

            <a href="mailto:hello@northathletics.in">
              ENQUIRE ↗
            </a>

          </div>

        </div>

      </section>

      {/* FINAL */}

      <section className="final06">

        <div className="finalImage">

          <img
            src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1800&q=90"
            alt="Athlete"
          />

        </div>

        <div className="finalOverlay" />

        <div className="finalTop">
          <span>NORTH / ATHLETICS</span>
          <span>NEW DELHI / INDIA</span>
        </div>

        <div className="finalCenter">

          <span>READY WHEN YOU ARE.</span>

          <h2>
            MOVE
            <br />
            <i>FORWARD.</i>
          </h2>

          <a href="mailto:hello@northathletics.in">
            <span>START A CONVERSATION</span>
            <strong>↗</strong>
          </a>

        </div>

        <div className="finalBottom">
          <span>MON — SAT / 05:30 — 23:00</span>
          <span>NORTH ATHLETICS © 2026</span>
        </div>

      </section>

      <footer className="footer06">

        <div>
          <span className="footerLogo">N</span>
          <span>NORTH / ATHLETICS</span>
        </div>

        <div>
          <span>INSTAGRAM</span>
          <span>WHATSAPP</span>
        </div>

        <div>
          <span>NEW DELHI</span>
          <span>INDIA</span>
        </div>

      </footer>

      <style jsx global>{`

        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Manrope:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --blue: #183a63;
          --blueDark: #102a49;
          --ice: #edf0ed;
          --paper: #f3f3ef;
          --text: #182329;
          --muted: #788289;
          --orange: #d76f45;
          --line: rgba(24,35,41,.18);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--paper);
          color: var(--text);
          font-family: "Manrope", sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          font: inherit;
        }

        .north {
          overflow: hidden;
        }

        /* HEADER */

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 78px;
          padding: 0 35px;
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,.25);
          color: white;
          transition: .45s ease;
        }

        .header.compact {
          height: 58px;
          background: rgba(243,243,239,.9);
          color: var(--text);
          backdrop-filter: blur(15px);
          border-color: var(--line);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: "DM Mono", monospace;
          font-size: 8px;
          letter-spacing: .08em;
        }

        .logoSquare {
          width: 30px;
          height: 30px;
          border: 1px solid currentColor;
          display: grid;
          place-items: center;
          font-size: 11px;
        }

        .headerLocation {
          justify-self: center;
          display: flex;
          gap: 12px;
          align-items: center;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          letter-spacing: .08em;
        }

        .headerLocation span {
          width: 30px;
          height: 1px;
          background: currentColor;
        }

        .menuTrigger {
          width: 38px;
          height: 38px;
          border: 1px solid currentColor;
          background: transparent;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          padding: 0 9px;
        }

        .menuTrigger span {
          height: 1px;
          background: currentColor;
          width: 100%;
          transition: .35s ease;
        }

        .menuTrigger.open span:first-child {
          transform: translateY(3px) rotate(45deg);
        }

        .menuTrigger.open span:last-child {
          transform: translateY(-3px) rotate(-45deg);
        }

        /* MENU */

        .fullMenu {
          position: fixed;
          inset: 0;
          z-index: 90;
          background: var(--blueDark);
          color: white;
          transform: translateY(-100%);
          transition: transform .85s cubic-bezier(.77,0,.18,1);
          padding: 130px 7vw 40px;
          display: grid;
          grid-template-columns: .4fr 1fr;
        }

        .fullMenu.show {
          transform: translateY(0);
        }

        .menuCoordinates {
          font-family: "DM Mono", monospace;
          font-size: 8px;
          color: #91a2b3;
          line-height: 1.8;
        }

        .menuNavigation {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 7px;
        }

        .menuNavigation a {
          font-family: "Playfair Display", serif;
          font-size: clamp(55px,8vw,110px);
          line-height: .88;
          transition: .45s ease;
        }

        .menuNavigation a:hover {
          color: var(--orange);
          transform: translateX(20px);
        }

        .menuBottom {
          position: absolute;
          left: 7vw;
          right: 7vw;
          bottom: 25px;
          display: flex;
          justify-content: space-between;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          color: #91a2b3;
        }

        /* HERO */

        .hero06 {
          min-height: 100vh;
          background: var(--blue);
          color: white;
          padding: 120px 6vw 30px;
          position: relative;
        }

        .heroGrid {
          min-height: 78vh;
          position: relative;
          max-width: 1250px;
          margin: auto;
        }

        .heroEyebrow {
          position: absolute;
          top: 15px;
          left: 0;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          letter-spacing: .12em;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .heroEyebrow span {
          color: var(--orange);
        }

        .heroVertical {
          position: absolute;
          right: 0;
          top: 40%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          writing-mode: vertical-rl;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          letter-spacing: .1em;
          color: #b3c2cf;
        }

        .heroImageMain {
          position: absolute;
          width: 53%;
          height: 76%;
          right: 9%;
          top: 5%;
          overflow: hidden;
          clip-path: polygon(8% 0,100% 0,92% 100%,0 100%);
        }

        .heroImageMain img,
        .heroImageSmall img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.5s ease;
        }

        .heroImageMain:hover img,
        .heroImageSmall:hover img {
          transform: scale(1.06);
        }

        .heroImageSmall {
          position: absolute;
          width: 26%;
          height: 35%;
          left: 9%;
          bottom: 3%;
          overflow: hidden;
          border: 8px solid var(--blue);
          z-index: 3;
        }

        .heroNumber {
          position: absolute;
          left: 3%;
          top: 37%;
          display: flex;
          flex-direction: column;
          gap: 7px;
          font-family: "DM Mono", monospace;
        }

        .heroNumber span {
          color: #9fb0bf;
          font-size: 7px;
        }

        .heroNumber strong {
          font-size: 30px;
          font-weight: 400;
        }

        .heroTitle {
          position: absolute;
          left: 7%;
          top: 28%;
          z-index: 4;
          display: flex;
          flex-direction: column;
          font-size: clamp(60px,9vw,125px);
          line-height: .78;
          letter-spacing: -.07em;
        }

        .heroTitle i {
          font-family: "Playfair Display", serif;
          font-size: .72em;
          margin-left: 70px;
          color: #d8e1e7;
        }

        .heroDescription {
          position: absolute;
          bottom: 0;
          right: 9%;
          width: 250px;
        }

        .heroDescription p {
          font-family: "Playfair Display", serif;
          font-size: 16px;
          line-height: 1.45;
          margin: 0 0 25px;
        }

        .heroDescription a {
          width: 100%;
          border-top: 1px solid rgba(255,255,255,.4);
          padding-top: 12px;
          display: flex;
          justify-content: space-between;
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        .heroDescription a span {
          font-size: 13px;
        }

        .heroBottomLine {
          max-width: 1250px;
          margin: 35px auto 0;
          border-top: 1px solid rgba(255,255,255,.25);
          padding-top: 15px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          color: #a7b7c4;
        }

        .heroBottomLine div {
          display: flex;
          gap: 4px;
          justify-content: center;
        }

        .heroBottomLine i {
          width: 22px;
          height: 1px;
          background: #71899f;
        }

        /* STATS */

        .statStrip {
          min-height: 160px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          background: var(--paper);
          border-bottom: 1px solid var(--line);
        }

        .stat {
          border-right: 1px solid var(--line);
          padding: 35px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
        }

        .stat strong {
          font-family: "Playfair Display", serif;
          font-size: 42px;
          font-weight: 400;
        }

        .stat span {
          font-family: "DM Mono", monospace;
          font-size: 7px;
          color: var(--muted);
        }

        /* SYSTEM */

        .system {
          min-height: 90vh;
          display: grid;
          grid-template-columns: 120px 1fr;
          padding: 150px 8vw;
          background: var(--paper);
        }

        .systemSide {
          display: flex;
          flex-direction: column;
          gap: 30px;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          color: var(--muted);
        }

        .systemSide span:first-child {
          color: var(--orange);
        }

        .systemContent {
          max-width: 1050px;
        }

        .systemHeading p,
        .trainingHeader span,
        .coachIntro > span,
        .facilityTop > span,
        .membershipIntro > span {
          font-family: "DM Mono", monospace;
          font-size: 7px;
          letter-spacing: .12em;
          color: var(--orange);
        }

        .systemHeading h2 {
          margin: 70px 0 0;
          font-size: clamp(65px,9vw,130px);
          line-height: .82;
          font-weight: 400;
          letter-spacing: -.07em;
        }

        .systemHeading h2 em {
          font-family: "Playfair Display", serif;
          font-weight: 400;
        }

        .systemBody {
          margin-top: 100px;
          display: grid;
          grid-template-columns: 150px 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .systemLine {
          width: 80px;
          height: 1px;
          background: var(--orange);
        }

        .systemBody p {
          max-width: 320px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        /* TRAINING */

        .training {
          padding: 150px 8vw;
          background: #dfe4e5;
        }

        .trainingHeader {
          display: flex;
          justify-content: space-between;
          align-items: end;
        }

        .trainingHeader h2 {
          margin: 65px 0 0;
          font-size: clamp(60px,8vw,110px);
          line-height: .82;
          font-weight: 400;
          letter-spacing: -.07em;
        }

        .trainingHeader h2 i {
          font-family: "Playfair Display", serif;
        }

        .trainingHeader > p {
          font-family: "DM Mono", monospace;
          font-size: 8px;
          color: var(--muted);
          line-height: 1.8;
        }

        .programStage {
          margin-top: 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 560px;
        }

        .programPreview {
          position: relative;
          overflow: hidden;
          background: var(--blueDark);
        }

        .programPreview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: programIn .7s ease;
        }

        @keyframes programIn {
          from {
            opacity: 0;
            transform: scale(1.08);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .previewNumber {
          position: absolute;
          top: 25px;
          left: 25px;
          width: 55px;
          height: 55px;
          border: 1px solid white;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          font-family: "DM Mono", monospace;
          font-size: 8px;
        }

        .previewLabel {
          position: absolute;
          bottom: 25px;
          left: 25px;
          color: white;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          letter-spacing: .1em;
        }

        .programList {
          background: var(--blueDark);
          color: white;
        }

        .program {
          width: 100%;
          min-height: 186px;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,.15);
          background: transparent;
          color: white;
          padding: 25px 35px;
          display: grid;
          grid-template-columns: 45px 1fr 30px;
          grid-template-rows: 1fr 1fr;
          align-items: center;
          text-align: left;
          cursor: pointer;
          transition: .45s ease;
        }

        .program:hover,
        .program.active {
          background: var(--orange);
          padding-left: 50px;
        }

        .program > span {
          font-family: "DM Mono", monospace;
          font-size: 7px;
          grid-row: span 2;
        }

        .program strong {
          font-size: 34px;
          font-weight: 400;
          letter-spacing: -.04em;
        }

        .program small {
          font-family: "DM Mono", monospace;
          font-size: 7px;
          color: #9cacb8;
        }

        .program.active small {
          color: rgba(255,255,255,.8);
        }

        .program i {
          grid-column: 3;
          grid-row: span 2;
          font-style: normal;
          font-size: 18px;
          transition: transform .4s ease;
        }

        .program:hover i,
        .program.active i {
          transform: rotate(45deg);
        }

        /* PHOTO BREAK */

        .photoBreak {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: var(--blueDark);
        }

        .photoBreak img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .7;
          transition: transform 2s ease;
        }

        .photoBreak:hover img {
          transform: scale(1.04);
        }

        .photoWords {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          mix-blend-mode: screen;
        }

        .photoWords span {
          font-size: clamp(70px,12vw,180px);
          font-weight: 400;
          line-height: .7;
          letter-spacing: -.08em;
        }

        .photoWords span:nth-child(even) {
          font-family: "Playfair Display", serif;
        }

        .photoCoordinates {
          position: absolute;
          bottom: 25px;
          right: 35px;
          color: white;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          line-height: 1.8;
        }

        /* COACHES */

        .coaches {
          min-height: 100vh;
          padding: 150px 8vw;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 80px;
          background: var(--paper);
        }

        .coachIntro h2 {
          margin: 70px 0 50px;
          font-size: clamp(60px,8vw,110px);
          font-weight: 400;
          line-height: .82;
          letter-spacing: -.07em;
        }

        .coachIntro h2 i {
          font-family: "Playfair Display", serif;
        }

        .coachIntro > p {
          max-width: 320px;
          font-size: 12px;
          color: var(--muted);
          line-height: 1.8;
        }

        .coachVisual {
          position: relative;
          min-height: 650px;
        }

        .coachMain {
          position: absolute;
          width: 72%;
          height: 90%;
          right: 0;
          top: 0;
          overflow: hidden;
        }

        .coachMain img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.3s ease;
        }

        .coachMain:hover img {
          transform: scale(1.05);
        }

        .coachCard {
          position: absolute;
          left: 0;
          bottom: 5%;
          width: 270px;
          padding: 35px;
          background: var(--blue);
          color: white;
          z-index: 2;
        }

        .coachCard > span {
          font-family: "DM Mono", monospace;
          font-size: 7px;
          color: #aebdca;
        }

        .coachCard h3 {
          font-size: 38px;
          font-weight: 400;
          line-height: .9;
          margin: 45px 0 25px;
        }

        .coachCard p {
          font-size: 9px;
          color: #aebdca;
        }

        .coachCard a {
          display: block;
          margin-top: 50px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,.25);
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        /* FACILITY */

        .facility {
          padding: 140px 8vw 170px;
          background: var(--blue);
          color: white;
        }

        .facilityTop {
          display: flex;
          justify-content: space-between;
          align-items: start;
        }

        .facilityTop p {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-size: 18px;
          line-height: 1.4;
        }

        .facilityLayout {
          height: 720px;
          margin-top: 100px;
          position: relative;
        }

        .facilityImage {
          position: absolute;
          overflow: hidden;
        }

        .facilityImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.3s ease;
        }

        .facilityImage:hover img {
          transform: scale(1.05);
        }

        .facilityImage.one {
          width: 48%;
          height: 65%;
          left: 0;
          top: 8%;
        }

        .facilityImage.two {
          width: 38%;
          height: 48%;
          right: 4%;
          bottom: 0;
        }

        .facilityLabel {
          position: absolute;
          left: 50%;
          top: 16%;
          display: flex;
          gap: 15px;
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        .facilityLabel span {
          color: var(--orange);
        }

        .labelTwo {
          left: auto;
          right: 0;
          top: 62%;
        }

        .facilityCenter {
          position: absolute;
          left: 42%;
          top: 39%;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
        }

        .facilityCenter span {
          font-family: "DM Mono", monospace;
          font-size: 8px;
          color: var(--orange);
        }

        .facilityCenter strong {
          font-size: 40px;
          font-weight: 400;
          letter-spacing: -.04em;
        }

        /* MEMBERSHIP */

        .membership06 {
          padding: 160px 8vw;
          background: var(--paper);
        }

        .membershipIntro {
          display: grid;
          grid-template-columns: .6fr 1fr .7fr;
          align-items: end;
          gap: 60px;
        }

        .membershipIntro h2 {
          margin: 60px 0 0;
          font-size: clamp(60px,8vw,110px);
          font-weight: 400;
          line-height: .8;
          letter-spacing: -.07em;
        }

        .membershipIntro h2 i {
          font-family: "Playfair Display", serif;
        }

        .membershipIntro > p {
          max-width: 300px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .membershipOptions {
          margin-top: 110px;
          border-top: 1px solid var(--line);
        }

        .membershipOption {
          min-height: 140px;
          display: grid;
          grid-template-columns: 70px 1fr 150px 110px;
          align-items: center;
          border-bottom: 1px solid var(--line);
          padding: 0 20px;
          transition: .45s ease;
        }

        .membershipOption:hover,
        .membershipOption.highlighted {
          background: var(--blue);
          color: white;
          padding-left: 40px;
        }

        .membershipOption > span {
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        .membershipOption h3 {
          margin: 0 0 8px;
          font-size: 20px;
          font-weight: 500;
        }

        .membershipOption p {
          margin: 0;
          font-size: 9px;
          color: var(--muted);
        }

        .membershipOption:hover p,
        .membershipOption.highlighted p {
          color: #aebdca;
        }

        .membershipOption strong {
          font-family: "Playfair Display", serif;
          font-size: 25px;
          font-weight: 400;
        }

        .membershipOption a {
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        /* FINAL */

        .final06 {
          height: 100vh;
          position: relative;
          color: white;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30px 6vw;
        }

        .finalImage {
          position: absolute;
          inset: 0;
        }

        .finalImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 2s ease;
        }

        .final06:hover .finalImage img {
          transform: scale(1.04);
        }

        .finalOverlay {
          position: absolute;
          inset: 0;
          background: rgba(13,32,54,.62);
        }

        .finalTop,
        .finalBottom,
        .finalCenter {
          position: relative;
          z-index: 2;
        }

        .finalTop,
        .finalBottom {
          display: flex;
          justify-content: space-between;
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        .finalCenter {
          text-align: center;
          margin: auto;
        }

        .finalCenter > span {
          font-family: "DM Mono", monospace;
          font-size: 7px;
          letter-spacing: .15em;
        }

        .finalCenter h2 {
          margin: 60px 0;
          font-size: clamp(80px,14vw,190px);
          line-height: .72;
          font-weight: 400;
          letter-spacing: -.09em;
        }

        .finalCenter h2 i {
          font-family: "Playfair Display", serif;
        }

        .finalCenter a {
          width: 260px;
          margin: auto;
          border-top: 1px solid white;
          border-bottom: 1px solid white;
          padding: 17px 0;
          display: flex;
          justify-content: space-between;
          font-family: "DM Mono", monospace;
          font-size: 7px;
          transition: .4s ease;
        }

        .finalCenter a:hover {
          background: var(--orange);
          padding-left: 18px;
          padding-right: 18px;
        }

        /* FOOTER */

        .footer06 {
          min-height: 100px;
          background: var(--blueDark);
          color: white;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          padding: 25px 6vw;
          font-family: "DM Mono", monospace;
          font-size: 7px;
        }

        .footer06 > div {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer06 > div:nth-child(2) {
          justify-content: center;
          gap: 25px;
          color: #8295a6;
        }

        .footer06 > div:last-child {
          justify-content: flex-end;
          gap: 15px;
          color: #8295a6;
        }

        .footerLogo {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border: 1px solid white;
          font-size: 10px;
        }

        /* RESPONSIVE */

        @media(max-width:900px) {

          .header {
            padding: 0 18px;
          }

          .headerLocation {
            display: none;
          }

          .hero06 {
            padding-left: 20px;
            padding-right: 20px;
          }

          .heroTitle {
            left: 3%;
          }

          .heroImageMain {
            width: 64%;
            right: 4%;
          }

          .heroImageSmall {
            width: 35%;
            left: 4%;
          }

          .system {
            grid-template-columns: 1fr;
            padding: 100px 25px;
          }

          .systemSide {
            flex-direction: row;
          }

          .systemBody {
            grid-template-columns: 1fr;
          }

          .systemLine {
            margin-bottom: 20px;
          }

          .training,
          .coaches,
          .membership06,
          .facility {
            padding-left: 25px;
            padding-right: 25px;
          }

          .programStage {
            grid-template-columns: 1fr;
          }

          .programPreview {
            min-height: 55vh;
          }

          .coaches {
            grid-template-columns: 1fr;
          }

          .coachVisual {
            min-height: 600px;
          }

          .membershipIntro {
            grid-template-columns: 1fr;
          }

          .facilityLayout {
            height: 600px;
          }

          .membershipOption {
            grid-template-columns: 45px 1fr 100px;
          }

          .membershipOption a {
            grid-column: 2;
          }

          .footer06 {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footer06 > div:nth-child(2),
          .footer06 > div:last-child {
            justify-content: flex-start;
          }
        }

        @media(max-width:550px) {

          .hero06 {
            padding-top: 110px;
          }

          .heroGrid {
            min-height: 75vh;
          }

          .heroTitle {
            top: 35%;
            font-size: 18vw;
          }

          .heroTitle i {
            margin-left: 30px;
          }

          .heroImageMain {
            height: 62%;
          }

          .heroImageSmall {
            height: 28%;
            bottom: 5%;
          }

          .heroVertical {
            display: none;
          }

          .heroDescription {
            right: 3%;
            bottom: 0;
            width: 180px;
          }

          .heroBottomLine {
            grid-template-columns: 1fr 1fr;
          }

          .heroBottomLine div {
            display: none;
          }

          .statStrip {
            grid-template-columns: 1fr 1fr;
          }

          .stat {
            min-height: 120px;
            padding: 20px;
          }

          .systemHeading h2,
          .trainingHeader h2,
          .coachIntro h2,
          .membershipIntro h2 {
            font-size: 50px;
          }

          .trainingHeader {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
          }

          .program {
            min-height: 140px;
          }

          .program strong {
            font-size: 25px;
          }

          .photoWords span {
            font-size: 20vw;
          }

          .coaches {
            min-height: auto;
          }

          .coachVisual {
            min-height: 500px;
          }

          .coachMain {
            width: 78%;
          }

          .coachCard {
            width: 220px;
            padding: 25px;
          }

          .facilityLayout {
            height: 500px;
          }

          .facilityImage.one {
            width: 65%;
            height: 55%;
          }

          .facilityImage.two {
            width: 55%;
            height: 38%;
          }

          .facilityCenter {
            left: 32%;
          }

          .facilityCenter strong {
            font-size: 25px;
          }

          .membershipOption {
            grid-template-columns: 30px 1fr;
            gap: 12px;
            padding: 25px 10px;
          }

          .membershipOption strong,
          .membershipOption a {
            grid-column: 2;
          }

          .finalCenter h2 {
            font-size: 25vw;
          }

          .finalTop,
          .finalBottom {
            gap: 15px;
            flex-wrap: wrap;
          }

          .menuNavigation a {
            font-size: 17vw;
          }

          .menuBottom {
            flex-direction: column;
            gap: 8px;
          }

          .fullMenu {
            grid-template-columns: 1fr;
          }

          .menuCoordinates {
            display: none;
          }
        }

      `}</style>
    </main>
  );
}