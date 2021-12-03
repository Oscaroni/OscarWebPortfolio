using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OscarWebPortfolio
{
    public class DataFactory
    {
        public static List<SkillData> AllSkillData() 
        {
            var data = new List<SkillData>();
            data.Add(new SkillData() { Company = "King", Date = "Sep 2020 - Feb 2021", Description = "En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till Python på King.", Title = "Python Programmering", ImageURL= "images/kinglogo.jpg", SkillFilterTag="_Python,", EmployementFilterTag="_Heltid," }) ;
            data.Add(new SkillData() { Company = "King", Date = "Sep 2020 - Feb 2021", Description = "En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till C++ på King.", Title = "C++ Programmering", ImageURL= "images/kinglogo.jpg", SkillFilterTag="_C++,", EmployementFilterTag= "_Heltid," }) ;
            data.Add(new SkillData() { Company = "King", Date = "Sep 2020 - Feb 2021", Description = "En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till ärendehantering på King.", Title = "Ärendehantering", ImageURL= "images/kinglogo.jpg", SkillFilterTag="_Ärendehantering,", EmployementFilterTag= "_Heltid," }) ;
            data.Add(new SkillData() { Company = "7minds", Date = "Projektanställning 2019", Description = "En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till C#.", Title = "C# Programmering", ImageURL= "images/kinglogo.jpg", SkillFilterTag="_C#,", EmployementFilterTag="_Projekt," }) ;
            data.Add(new SkillData() { Company = "Privat", Date = "Sep 2021 - Nu", Description = "En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till React.", Title = "React", ImageURL= "images/kinglogo.jpg", SkillFilterTag="_React,", EmployementFilterTag="_Privat," }) ;
            data.Add(new SkillData() { Company = "Starbreeze", Date = "Jan 2019 - Juni 2019", Description = "En kort beskrivning av något jag gjort som visar på en kompetens eller färdighet relaterat till testning på Starbreeze", Title = "QA - Flerspelartestning", ImageURL= "images/kinglogo.jpg", SkillFilterTag="_QA,", EmployementFilterTag= "_Heltid," }) ;
            return data;
        }
        public static string[] Companies()
        {
            return AllSkillData().GroupBy(g => g.Company).Select(s => s.Key).ToArray();
        }
        
    }
}
