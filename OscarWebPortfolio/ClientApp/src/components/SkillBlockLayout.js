import React, { Component } from 'react';
import { SkillBlock } from './SkillBlock';

export class SkillBlockLayout extends Component {
  static displayName = SkillBlockLayout.name;

  render () {
    return (
       <div>
            <SkillBlock title={"Python Programmering"} company={"King"} description={"En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till C++ på King."} date={"Sep 2020 - Feb 2021"} />
            <SkillBlock title={"C++ Programmering"} company={"King"} description={"En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till C++ på King."} date={"Sep 2020 - Feb 2021"} />
            <SkillBlock title={"Ärendehantering"} company={"King"} description={"En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till ärendehantering på King."} date={"Sep 2020 - Feb 2021"} />
            <SkillBlock title={"C# Programmering"} company={"7minds"} description={"En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till C#."} date={"Projektanställning 2019"} />
            <SkillBlock title={"React"} company={"Privat"} description={"En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till React."} date={"Sep 2021 - Nu"} />
            <SkillBlock title={"QA - Flerspelartestning"} company={"Starbreeze"} description={"En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till testning på Starbreeze"} date={"Jan 2019 - Juni 2019"} />
      </div>
    );
  }
}
