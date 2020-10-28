const fs = require('fs');

const skills = [
    { value: 'Excel' },
    { value: 'FindThatLead' },
    { value: 'Hunter' },
    { value: 'Salesforce ContactOut' },
    { value: 'Lusha' },
    { value: 'Rocketreach' },
    { value: 'Dataminer' },
    { value: 'Vainu' },
    { value: 'Apollo' },
    { value: 'Hubspot' },
    { value: 'Pipedrive' },
    { value: 'Outreach' },
    { value: 'io' },
    { value: 'SalesLoft' },
    { value: 'Reply.io' },
    { value: 'Crystal' },
    { value: 'Zoom' },
    { value: 'LinkedIn Helper' },
    { value: 'Hootsuite' },
    { value: 'Buffer' },
    { value: 'Brandwatch' },
    { value: 'Crowdfire' },
    { value: 'Coschedule' },
    { value: 'Aha' },
    { value: 'Axure' },
    { value: 'Balsamiq' },
    { value: 'Figma' },
    { value: 'Flaticon' },
    { value: 'Framer' },
    { value: 'InVision' },
    { value: 'Mockingbird' },
    { value: 'Moqups' },
    { value: 'Sketch' },
    { value: 'UXPin' },
    { value: 'Adobe Target' },
    { value: 'Appsee' },
    { value: 'Clictale' },
    { value: 'FullStory' },
    { value: 'Hello' },
    { value: 'Hotjar' },
    { value: 'Lookback' },
    { value: 'Optimizely' },
    { value: 'SessionStack' },
    { value: 'Usabilia' },
    { value: 'UserTesting' },
    { value: 'UXCam' },
    { value: 'Validately' },
    { value: 'Appcues' },
    { value: 'Evergage' },
    { value: 'Hopscotch' },
    { value: 'Inline Manual' },
    { value: 'Intercom' },
    { value: 'UserIQ' },
    { value: 'Tour My App' },
    { value: 'WalkMe' },
    { value: 'Whatfix' },
    { value: 'GoToMeeting' },
    { value: 'Asana' },
    { value: 'Jira' },
    { value: 'Trello' },
    { value: 'Rally' },
    { value: 'C#' },
    { value: 'Golang' },
    { value: 'Go' },
    { value: 'Django' },
    { value: 'Asp.net' },
    { value: 'Ruby' },
    { value: 'SQL' },
    { value: 'Erlang' },
    { value: 'XHP' },
    { value: 'Haskell' },
    { value: 'Perl' },
    { value: 'Scala' },
    { value: 'Bigtable' },
    { value: 'MariaDB' },
    { value: 'HBase' },
    { value: 'Cassandra' },
    { value: 'Vitress' },
    { value: 'MongoDB' },
    { value: 'PostgreSQL' },
    { value: 'RDS' },
    { value: 'RDS Aurora' },
    { value: 'Microsoft SQL Server' },
    { value: 'Cosmos DB' },
    { value: 'Oracle Database' },
    { value: 'Voldemort' },
    { value: 'Redis' },
    { value: 'CSS' },
    { value: 'jQuery' },
    { value: 'Unit Testing' },
    { value: 'Vue.js' },
    { value: 'Bootstrap' },
    { value: 'NPM' },
    { value: 'Iconic 4' },
    { value: 'Grunt' },
    { value: 'GitHub' },
    { value: 'CodeKit' },
    { value: 'Meteor' },
    { value: 'Angular' },
    { value: 'QuickBooks' },
    { value: 'Zoho Books' },
    { value: 'Xero' },
    { value: 'Gusto' },
    { value: 'InDinero' },
    { value: 'Square' },
    { value: 'Expense Bot' },
    { value: 'Stripe' },
    { value: 'Pulse' },
    { value: 'Float' },
    { value: 'Freshbooks' },
    { value: 'Bill.com' },
    { value: 'Freeagent' },
    { value: 'Expensify' },
    { value: 'Bloomberg' },
    { value: 'CapitalIQ' },
    { value: 'Evernote' },
    { value: 'Crunchbase' },
    { value: 'Angellist' },
    { value: 'GoCo' },
    { value: 'Gusto' },
    { value: 'Zoho People' },
    { value: 'BambooHR' },
    { value: 'Zenifits' },
    { value: 'Cezanne HR' },
    { value: 'JazzHR' },
    { value: 'Namely' },
    { value: 'Sage' },
    { value: 'Greenhouse' },
    { value: 'LinkedIn Recruiter' },
    { value: 'Lead Generation' },
    { value: 'Analytics' },
    { value: 'Automation' },
    { value: 'Content Marketing' },
    { value: 'CRM' },
    { value: 'Email Marketing' },
    { value: 'Landing Page Optimization' },
    { value: 'SEO' },
    { value: 'Social Media' },
    { value: 'Leadfeeder' },
    { value: 'Product Hunt' },
    { value: 'Sumo' },
    { value: 'Fomo' },
    { value: 'Hello Bar' },
    { value: 'Snip.ly' },
    { value: 'Segment' },
    { value: 'Mixpanel' },
    { value: 'Urban Airship' },
    { value: 'Keen' },
    { value: 'Snowplow' },
    { value: 'Mapp' },
    { value: 'Bitly' },
    { value: 'Amplitude' },
    { value: 'Woopra' },
    { value: 'Localytics' },
    { value: 'SharedCount' },
    { value: 'Shareaholic' },
    { value: 'Firebase Dynamic Links' },
    { value: 'Ow.ly' },
    { value: 'Autopilot' },
    { value: 'Marketo' },
    { value: 'Pardot' },
    { value: 'Zapier' },
    { value: 'Piesync' },
    { value: 'Tray.io' },
    { value: 'UberConference' },
    { value: 'Wordpress' },
    { value: 'Ghost' },
    { value: 'Medium' },
    { value: 'Pipedrive' },
    { value: 'Canva' },
    { value: 'Gimp' },
    { value: 'Indesign' },
    { value: 'Campaign Monitor' },
    { value: 'Drip' },
    { value: 'Active Campaign' },
    { value: 'Sendgrid' },
    { value: 'MailChimp' },
    { value: 'Litmus' },
    { value: 'Inbox Inspector' },
    { value: 'VerifyEmail' },
    { value: 'NeverBounce' },
    { value: 'BananaTag' },
    { value: 'SalesLoft' },
    { value: 'GoodEmailCopy' },
    { value: 'Unbounce' },
    { value: 'Landing Lion' },
    { value: 'Leadpages' },
    { value: 'Google Optimize' },
    { value: 'Olark' },
    { value: 'Intercom' },
    { value: 'Drift' },
    { value: 'Ahrefs' },
    { value: 'Semrush' },
    { value: 'Raven Tools' },
    { value: 'Sprout Social' },
    { value: 'Oktopost' },
    { value: 'MeetEdgar' },
    { value: 'Crowdfire' },
    { value: 'Pendo' },
    { value: 'Amplitude' },
    { value: 'ProductPlan' },
    { value: 'SurveyMonkey' },
    { value: 'Typeform' },
    { value: 'Zoom' },
    { value: 'Asana' },
    { value: 'GoToMeeting' },
    { value: 'Gartner' },
    { value: 'Sirius Decisions' },
    { value: 'PowerPoint' },
    { value: 'Pivotal Tracker' },
    { value: 'Split.io' },
    { value: 'LaunchDarkly' },
    { value: 'FullStory' },
    { value: 'Hotjar' },
    { value: 'Visio' },
    { value: 'OmniGraffle' },
    {value: 
        'Financial and Real Estate analysis'
    },  
    {value: 'Business Development'},
    { value: 'Development'},
    {value: 'Management'},
    { value: 'Business'},
    { value: 'Excel'},
    { value: 'Python'},
    { value: 'R'},
    { value: 'JavaScript'},
    { value: 'Java'},
    { value: 'AdobeXD'},
    { value: 'Figma'},
    {value: 'React'},
    {value: 'React Native'},
    { value: 'Teaching'},
    { value:'HR'},
    { value: 'Stata'},
    { value: 'MS Office'},
    { value: 'MEAN stack'},
    { value: 'PHP'},
    { value: 'Axure' },
    {value: 'MySQL'},
    { value: 'Microsoft Excel'},
    { value: 'Microsoft Office'},
    { value: 'Adobe Creative Suite'},
    { value: 'Testing'},
    { value: 'Photoshop'},
    {value: 'ArcGIS'},
    { value: 'Typescript' },
    { value: 'C++'},
    { value: 'Selenium' },
    { value: 'Firebase'},
    {value:  'Node.js'},
    {value: 'Express'},
    {value: 'Tableau'},
    {value: 'D3'},
    { value: 'MS Word'},
    { value: 'Networking' },
    { value: 'Machine Learning'},
    {value: 'Data Engineering'},
    { value: 'HTML' },
    {
      value: 'Salesforce'
    }
  ];
  
const roles = [
  {
    value: "Front-End Developer"
  },
  {
    value: "Back-End Developer"
  },
  {
    value: "Web Developer"
  },
  {
    value: "Full-Stack Developer"
  },
  {
    value: "UI/UX Designer"
  },
  {
    value: "Business Development"
  },
  {
    value: "Financial Analyst"
  },
  {
    value: "Data Scientist"
  },
  {
    value: "Data Analyst"
  },
  {
    value: "Tester"
  },
  {
    value: "Financial Tech"
  },
  {
    value: "CEO"
  },
  {
    value: "CTO"
  },
  {
    value: "Digital Media Associate"
  },
  {
    value: "Content Strategy"
  },
  {
    value: "Business Development Intern"
  },
  {
    value: "Customer Service Intern"
  },
  {
    value: "Operations Intern"
  },
  {
    value: "Software Engineer"
  },
  {
    value: "Brand Ambassador"
  },
  {
    value: "UX/UI"
  },
  {
    value: "HR Assistant"
  },
  {
    value: "Marketing"
  },
  {
    value: "Social Media"
  } 
]

function alphabetize( a, b ) {
  if ( a.value < b.value ){
    return -1;
  }
  if ( a.value > b.value ){
    return 1;
  }
  return 0;
}

const sortedSkills = skills.sort(alphabetize)

let parsedSkills = []
sortedSkills.forEach(skill => {
  parsedSkills.push({
    label: skill.value,
    value: skill.value
  })
})

const jsonSkills = JSON.stringify(parsedSkills)
fs.writeFile ("newSkills.json", jsonSkills, function(err) {
  if (err) throw err;
  console.log('complete');
  }
);

// const colleges = [
//   { label: "Alabama A & M University", value: "Alabama A & M University" },
//   {
//     label: "University of Alabama at Birmingham",
//     value: "University of Alabama at Birmingham"
//   },
//   { label: "Amridge University", value: "Amridge University" },
//   {
//     label: "University of Alabama in Huntsville",
//     value: "University of Alabama in Huntsville"
//   },
//   { label: "Alabama State University", value: "Alabama State University" },
//   {
//     label: "University of Alabama System Office",
//     value: "University of Alabama System Office"
//   },
//   {
//     label: "The University of Alabama",
//     value: "The University of Alabama"
//   },
//   {
//     label: "Central Alabama Community College",
//     value: "Central Alabama Community College"
//   },
//   { label: "Athens State University", value: "Athens State University" },
//   {
//     label: "Auburn University at Montgomery",
//     value: "Auburn University at Montgomery"
//   },
//   { label: "Auburn University", value: "Auburn University" },
//   {
//     label: "Birmingham Southern College",
//     value: "Birmingham Southern College"
//   },
//   {
//     label: "Chattahoochee Valley Community College",
//     value: "Chattahoochee Valley Community College"
//   },
//   {
//     label: "Concordia College Alabama",
//     value: "Concordia College Alabama"
//   },
//   {
//     label: "South University-Montgomery",
//     value: "South University-Montgomery"
//   },
//   {
//     label: "Enterprise State Community College",
//     value: "Enterprise State Community College"
//   },
//   {
//     label: "James H Faulkner State Community College",
//     value: "James H Faulkner State Community College"
//   },
//   { label: "Faulkner University", value: "Faulkner University" },
//   {
//     label: "Gadsden State Community College",
//     value: "Gadsden State Community College"
//   },
//   {
//     label: "New Beginning College of Cosmetology",
//     value: "New Beginning College of Cosmetology"
//   },
//   {
//     label: "George C Wallace State Community College-Dothan",
//     value: "George C Wallace State Community College-Dothan"
//   },
//   {
//     label: "George C Wallace State Community College-Hanceville",
//     value: "George C Wallace State Community College-Hanceville"
//   },
//   {
//     label: "George C Wallace State Community College-Selma",
//     value: "George C Wallace State Community College-Selma"
//   },
//   {
//     label: "Herzing University-Birmingham",
//     value: "Herzing University-Birmingham"
//   },
//   { label: "Huntingdon College", value: "Huntingdon College" },
//   {
//     label: "Heritage Christian University",
//     value: "Heritage Christian University"
//   },
//   {
//     label: "J F Drake State Community and Technical College",
//     value: "J F Drake State Community and Technical College"
//   },
//   {
//     label: "J F Ingram State Technical College",
//     value: "J F Ingram State Technical College"
//   },
//   {
//     label: "Jacksonville State University",
//     value: "Jacksonville State University"
//   },
//   {
//     label: "Jefferson Davis Community College",
//     value: "Jefferson Davis Community College"
//   },
//   {
//     label: "Jefferson State Community College",
//     value: "Jefferson State Community College"
//   },
//   {
//     label: "John C Calhoun State Community College",
//     value: "John C Calhoun State Community College"
//   },
//   { label: "Judson College", value: "Judson College" },
//   {
//     label: "Lawson State Community College-Birmingham Campus",
//     value: "Lawson State Community College-Birmingham Campus"
//   },
//   {
//     label: "University of West Alabama",
//     value: "University of West Alabama"
//   },
//   {
//     label: "Lurleen B Wallace Community College",
//     value: "Lurleen B Wallace Community College"
//   },
//   {
//     label: "Marion Military Institute",
//     value: "Marion Military Institute"
//   },
//   { label: "Miles College", value: "Miles College" },
//   { label: "University of Mobile", value: "University of Mobile" },
//   { label: "University of Montevallo", value: "University of Montevallo" },
//   {
//     label: "Northwest-Shoals Community College",
//     value: "Northwest-Shoals Community College"
//   },
//   {
//     label: "University of North Alabama",
//     value: "University of North Alabama"
//   },
//   {
//     label: "Northeast Alabama Community College",
//     value: "Northeast Alabama Community College"
//   },
//   { label: "Oakwood University", value: "Oakwood University" },
//   {
//     label: "Alabama Southern Community College",
//     value: "Alabama Southern Community College"
//   },
//   {
//     label: "Prince Institute-Southeast",
//     value: "Prince Institute-Southeast"
//   },
//   {
//     label: "Reid State Technical College",
//     value: "Reid State Technical College"
//   },
//   {
//     label: "Bishop State Community College",
//     value: "Bishop State Community College"
//   },
//   { label: "Samford University", value: "Samford University" },
//   { label: "Selma University", value: "Selma University" },
//   {
//     label: "Shelton State Community College",
//     value: "Shelton State Community College"
//   },
//   {
//     label: "Snead State Community College",
//     value: "Snead State Community College"
//   },
//   {
//     label: "University of South Alabama",
//     value: "University of South Alabama"
//   },
//   { label: "Spring Hill College", value: "Spring Hill College" },
//   {
//     label: "Southeastern Bible College",
//     value: "Southeastern Bible College"
//   },
//   { label: "Stillman College", value: "Stillman College" },
//   { label: "Talladega College", value: "Talladega College" },
//   {
//     label: "H Councill Trenholm State Technical College",
//     value: "H Councill Trenholm State Technical College"
//   },
//   { label: "Troy University", value: "Troy University" },
//   { label: "Tuskegee University", value: "Tuskegee University" },
//   {
//     label: "United States Sports Academy",
//     value: "United States Sports Academy"
//   },
//   {
//     label: "Bevill State Community College",
//     value: "Bevill State Community College"
//   },
//   {
//     label: "University of Alaska Anchorage",
//     value: "University of Alaska Anchorage"
//   },
//   { label: "Alaska Bible College", value: "Alaska Bible College" },
//   {
//     label: "University of Alaska Fairbanks",
//     value: "University of Alaska Fairbanks"
//   },
//   {
//     label: "University of Alaska Southeast",
//     value: "University of Alaska Southeast"
//   },
//   {
//     label: "Alaska Pacific University",
//     value: "Alaska Pacific University"
//   },
//   {
//     label: "AVTEC-Alaska's Institute of Technology",
//     value: "AVTEC-Alaska's Institute of Technology"
//   },
//   {
//     label: "Charter College-Anchorage",
//     value: "Charter College-Anchorage"
//   },
//   {
//     label: "Prince William Sound Community College",
//     value: "Prince William Sound Community College"
//   },
//   { label: "Alaska Career College", value: "Alaska Career College" },
//   {
//     label: "University of Alaska System of Higher Education",
//     value: "University of Alaska System of Higher Education"
//   },
//   { label: "Everest College-Phoenix", value: "Everest College-Phoenix" },
//   { label: "Collins College", value: "Collins College" },
//   {
//     label: "Empire Beauty School-Paradise Valley",
//     value: "Empire Beauty School-Paradise Valley"
//   },
//   {
//     label: "Empire Beauty School-Tucson",
//     value: "Empire Beauty School-Tucson"
//   },
//   {
//     label: "Thunderbird School of Global Management",
//     value: "Thunderbird School of Global Management"
//   },
//   {
//     label: "American Indian College of the Assemblies of God Inc",
//     value: "American Indian College of the Assemblies of God Inc"
//   },
//   {
//     label: "American Institute of Technology",
//     value: "American Institute of Technology"
//   },
//   {
//     label: "Carrington College-Phoenix",
//     value: "Carrington College-Phoenix"
//   },
//   { label: "Carrington College-Mesa", value: "Carrington College-Mesa" },
//   {
//     label: "Carrington College-Tucson",
//     value: "Carrington College-Tucson"
//   },
//   {
//     label: "College America-Flagstaff",
//     value: "College America-Flagstaff"
//   },
//   {
//     label: "Arizona Academy of Beauty-East",
//     value: "Arizona Academy of Beauty-East"
//   },
//   {
//     label: "Arizona Automotive Institute",
//     value: "Arizona Automotive Institute"
//   },
//   {
//     label: "Brookline College-Phoenix",
//     value: "Brookline College-Phoenix"
//   },
//   {
//     label: "Arizona State University-Tempe",
//     value: "Arizona State University-Tempe"
//   },
//   { label: "Arizona Western College", value: "Arizona Western College" },
//   { label: "University of Arizona", value: "University of Arizona" },
//   {
//     label: "Southwest University of Visual Arts-Tucson",
//     value: "Southwest University of Visual Arts-Tucson"
//   },
//   {
//     label: "Brillare Hairdressing Academy",
//     value: "Brillare Hairdressing Academy"
//   },
//   { label: "Central Arizona College", value: "Central Arizona College" },
//   {
//     label: "Brown Mackie College-Tucson",
//     value: "Brown Mackie College-Tucson"
//   },
//   {
//     label: "Charles of Italy Beauty College",
//     value: "Charles of Italy Beauty College"
//   },
//   { label: "Cochise College", value: "Cochise College" },
//   {
//     label: "Empire Beauty School-Flagstaff",
//     value: "Empire Beauty School-Flagstaff"
//   },
//   {
//     label: "Empire Beauty School-Chandler",
//     value: "Empire Beauty School-Chandler"
//   },
//   { label: "Cortiva Institute-Tucson", value: "Cortiva Institute-Tucson" },
//   { label: "DeVry University-Arizona", value: "DeVry University-Arizona" },
//   {
//     label: "Avalon School of Cosmetology-Mesa",
//     value: "Avalon School of Cosmetology-Mesa"
//   },
//   { label: "Eastern Arizona College", value: "Eastern Arizona College" },
//   {
//     label: "Embry-Riddle Aeronautical University-Prescott",
//     value: "Embry-Riddle Aeronautical University-Prescott"
//   },
//   {
//     label: "Frank Lloyd Wright School of Architecture",
//     value: "Frank Lloyd Wright School of Architecture"
//   },
//   {
//     label: "Glendale Community College",
//     value: "Glendale Community College"
//   },
//   { label: "Grand Canyon University", value: "Grand Canyon University" },
//   { label: "Anthem College-Phoenix", value: "Anthem College-Phoenix" },
//   {
//     label: "International Academy of Hair Design",
//     value: "International Academy of Hair Design"
//   },
//   { label: "Kaplan College-Phoenix", value: "Kaplan College-Phoenix" },
//   {
//     label: "Maricopa Community College System Office",
//     value: "Maricopa Community College System Office"
//   },
//   {
//     label: "GateWay Community College",
//     value: "GateWay Community College"
//   },
//   { label: "Mesa Community College", value: "Mesa Community College" },
//   {
//     label: "ITT Technical Institute-Tucson",
//     value: "ITT Technical Institute-Tucson"
//   },
//   {
//     label: "ITT Technical Institute-Tempe",
//     value: "ITT Technical Institute-Tempe"
//   },
//   { label: "Mohave Community College", value: "Mohave Community College" },
//   {
//     label: "Universal Technical Institute of Arizona Inc-Motorcycle Mechanics Institute Division",
//     value: "Universal Technical Institute of Arizona Inc-Motorcycle Mechanics Institute Division"
//   },
//   { label: "Dine College", value: "Dine College" },
//   {
//     label: "Northern Arizona University",
//     value: "Northern Arizona University"
//   },
//   {
//     label: "Northland Pioneer College",
//     value: "Northland Pioneer College"
//   },
//   {
//     label: "Ottawa University-Phoenix",
//     value: "Ottawa University-Phoenix"
//   },
//   { label: "Phoenix College", value: "Phoenix College" },
//   {
//     label: "Cortiva Institute-Scottsdale",
//     value: "Cortiva Institute-Scottsdale"
//   },
//   {
//     label: "University of Phoenix-Phoenix Campus",
//     value: "University of Phoenix-Phoenix Campus"
//   },
//   { label: "Pima Community College", value: "Pima Community College" },
//   {
//     label: "Pima Medical Institute-Tucson",
//     value: "Pima Medical Institute-Tucson"
//   },
//   {
//     label: "Pima Medical Institute-Albuquerque",
//     value: "Pima Medical Institute-Albuquerque"
//   },
//   { label: "Prescott College", value: "Prescott College" },
//   { label: "Refrigeration School Inc", value: "Refrigeration School Inc" },
//   { label: "Rio Salado College", value: "Rio Salado College" },
//   {
//     label: "Roberto-Venn School of Luthiery",
//     value: "Roberto-Venn School of Luthiery"
//   },
//   { label: "Hair Academy of Safford", value: "Hair Academy of Safford" },
//   {
//     label: "Scottsdale Community College",
//     value: "Scottsdale Community College"
//   },
//   {
//     label: "South Mountain Community College",
//     value: "South Mountain Community College"
//   },
//   {
//     label: "Arizona Christian University",
//     value: "Arizona Christian University"
//   },
//   { label: "Tucson College", value: "Tucson College" },
//   {
//     label: "Universal Technical Institute of Arizona Inc",
//     value: "Universal Technical Institute of Arizona Inc"
//   },
//   {
//     label: "Western International University",
//     value: "Western International University"
//   },
//   {
//     label: "Empire Beauty School-NW Phoenix",
//     value: "Empire Beauty School-NW Phoenix"
//   },
//   { label: "Yavapai College", value: "Yavapai College" },
//   {
//     label: "University of Arkansas at Little Rock",
//     value: "University of Arkansas at Little Rock"
//   },
//   {
//     label: "University of Arkansas for Medical Sciences",
//     value: "University of Arkansas for Medical Sciences"
//   },
//   { label: "ABC Beauty College Inc", value: "ABC Beauty College Inc" },
//   { label: "Arkansas Baptist College", value: "Arkansas Baptist College" },
//   { label: "Arkansas Beauty School", value: "Arkansas Beauty School" },
//   { label: "Arkansas Beauty College", value: "Arkansas Beauty College" },
//   { label: "Lyon College", value: "Lyon College" },
//   {
//     label: "Arkansas College of Barbering and Hair Design",
//     value: "Arkansas College of Barbering and Hair Design"
//   },
//   {
//     label: "Arthur's Beauty College Inc-Fort Smith",
//     value: "Arthur's Beauty College Inc-Fort Smith"
//   },
//   { label: "University of Arkansas", value: "University of Arkansas" },
//   {
//     label: "University of Arkansas at Pine Bluff",
//     value: "University of Arkansas at Pine Bluff"
//   },
//   {
//     label: "Arkansas State University-Beebe",
//     value: "Arkansas State University-Beebe"
//   },
//   {
//     label: "Arkansas State University-Main Campus",
//     value: "Arkansas State University-Main Campus"
//   },
//   { label: "Arkansas Tech University", value: "Arkansas Tech University" },
//   {
//     label: "University of Arkansas at Monticello",
//     value: "University of Arkansas at Monticello"
//   },
//   {
//     label: "Arthur's Beauty College Inc-Jacksonville",
//     value: "Arthur's Beauty College Inc-Jacksonville"
//   },
//   {
//     label: "Baptist Health Schools-Little Rock",
//     value: "Baptist Health Schools-Little Rock"
//   },
//   {
//     label: "Black River Technical College",
//     value: "Black River Technical College"
//   },
//   {
//     label: "University of Central Arkansas",
//     value: "University of Central Arkansas"
//   },
//   { label: "Central Baptist College", value: "Central Baptist College" },
//   {
//     label: "Cossatot Community College of the University of Arkansas",
//     value: "Cossatot Community College of the University of Arkansas"
//   },
//   { label: "Crowley's Ridge College", value: "Crowley's Ridge College" },
//   {
//     label: "Crowley's Ridge Technical Institute",
//     value: "Crowley's Ridge Technical Institute"
//   },
//   {
//     label: "East Arkansas Community College",
//     value: "East Arkansas Community College"
//   },
//   {
//     label: "Eastern College of Health Vocations-Little Rock",
//     value: "Eastern College of Health Vocations-Little Rock"
//   },
//   {
//     label: "Imagine-Paul Mitchell Partner School",
//     value: "Imagine-Paul Mitchell Partner School"
//   },
//   {
//     label: "National Park Community College",
//     value: "National Park Community College"
//   },
//   {
//     label: "University of Arkansas Community College-Batesville",
//     value: "University of Arkansas Community College-Batesville"
//   },
//   { label: "Harding University", value: "Harding University" },
//   {
//     label: "Henderson State University",
//     value: "Henderson State University"
//   },
//   { label: "Hendrix College", value: "Hendrix College" },
//   {
//     label: "Hot Springs Beauty College",
//     value: "Hot Springs Beauty College"
//   },
//   {
//     label: "Jefferson Regional Medical Center School of Nursing",
//     value: "Jefferson Regional Medical Center School of Nursing"
//   },
//   { label: "John Brown University", value: "John Brown University" },
//   {
//     label: "Lees School of Cosmetology",
//     value: "Lees School of Cosmetology"
//   },
//   {
//     label: "Career Academy of Hair Design",
//     value: "Career Academy of Hair Design"
//   },
//   {
//     label: "Marsha Kay Beauty College",
//     value: "Marsha Kay Beauty College"
//   },
//   { label: "Academy of Salon and Spa", value: "Academy of Salon and Spa" },
//   {
//     label: "Mid-South Community College",
//     value: "Mid-South Community College"
//   },
//   {
//     label: "Arkansas Northeastern College",
//     value: "Arkansas Northeastern College"
//   },
//   {
//     label: "Margaret's Hair Academy Inc",
//     value: "Margaret's Hair Academy Inc"
//   },
//   {
//     label: "New Tyler Barber College Inc",
//     value: "New Tyler Barber College Inc"
//   },
//   { label: "North Arkansas College", value: "North Arkansas College" },
//   {
//     label: "Northwest Technical Institute",
//     value: "Northwest Technical Institute"
//   },
//   {
//     label: "Ouachita Baptist University",
//     value: "Ouachita Baptist University"
//   },
//   { label: "College of the Ouachitas", value: "College of the Ouachitas" },
//   { label: "Ozarka College", value: "Ozarka College" },
//   { label: "University of the Ozarks", value: "University of the Ozarks" },
//   {
//     label: "University of Arkansas Community College-Morrilton",
//     value: "University of Arkansas Community College-Morrilton"
//   },
//   { label: "Philander Smith College", value: "Philander Smith College" },
//   {
//     label: "Phillips Community College of the University of Arkansas",
//     value: "Phillips Community College of the University of Arkansas"
//   },
//   {
//     label: "Southeast Arkansas College",
//     value: "Southeast Arkansas College"
//   },
//   {
//     label: "Professional Cosmetology Education Center",
//     value: "Professional Cosmetology Education Center"
//   },
//   {
//     label: "Pulaski Technical College",
//     value: "Pulaski Technical College"
//   },
//   {
//     label: "University of Arkansas Community College-Hope",
//     value: "University of Arkansas Community College-Hope"
//   },
//   {
//     label: "Rich Mountain Community College",
//     value: "Rich Mountain Community College"
//   },
//   {
//     label: "Paul Mitchell the School-Arkansas",
//     value: "Paul Mitchell the School-Arkansas"
//   },
//   {
//     label: "Searcy Beauty College Inc",
//     value: "Searcy Beauty College Inc"
//   },
//   { label: "Shorter College", value: "Shorter College" },
//   { label: "Williams Baptist College", value: "Williams Baptist College" },
//   {
//     label: "South Arkansas Community College",
//     value: "South Arkansas Community College"
//   },
//   {
//     label: "Southern Arkansas University Main Campus",
//     value: "Southern Arkansas University Main Campus"
//   },
//   {
//     label: "Southern Arkansas University Tech",
//     value: "Southern Arkansas University Tech"
//   },
//   {
//     label: "University of Arkansas System Office",
//     value: "University of Arkansas System Office"
//   },
//   {
//     label: "Velvatex College of Beauty Culture",
//     value: "Velvatex College of Beauty Culture"
//   },
//   {
//     label: "University of Arkansas-Fort Smith",
//     value: "University of Arkansas-Fort Smith"
//   },
//   {
//     label: "Academy of Art University",
//     value: "Academy of Art University"
//   },
//   {
//     label: "ITT Technical Institute-Rancho Cordova",
//     value: "ITT Technical Institute-Rancho Cordova"
//   },
//   {
//     label: "Academy of Chinese Culture and Health Sciences",
//     value: "Academy of Chinese Culture and Health Sciences"
//   },
//   {
//     label: "The Academy of Radio and TV Broadcasting",
//     value: "The Academy of Radio and TV Broadcasting"
//   },
//   {
//     label: "Avalon School of Cosmetology-Alameda",
//     value: "Avalon School of Cosmetology-Alameda"
//   },
//   { label: "College of Alameda", value: "College of Alameda" },
//   { label: "Allan Hancock College", value: "Allan Hancock College" },
//   {
//     label: "American Academy of Dramatic Arts-Los Angeles",
//     value: "American Academy of Dramatic Arts-Los Angeles"
//   },
//   {
//     label: "American Baptist Seminary of the West",
//     value: "American Baptist Seminary of the West"
//   },
//   {
//     label: "American Film Institute Conservatory",
//     value: "American Film Institute Conservatory"
//   },
//   { label: "American Beauty College", value: "American Beauty College" },
//   {
//     label: "American Career College-Los Angeles",
//     value: "American Career College-Los Angeles"
//   },
//   {
//     label: "American Conservatory Theater",
//     value: "American Conservatory Theater"
//   },
//   { label: "American River College", value: "American River College" },
//   { label: "Everest College-Hayward", value: "Everest College-Hayward" },
//   { label: "Antelope Valley College", value: "Antelope Valley College" },
//   {
//     label: "Art Center College of Design",
//     value: "Art Center College of Design"
//   },
//   {
//     label: "Associated Technical College-Los Angeles",
//     value: "Associated Technical College-Los Angeles"
//   },
//   {
//     label: "Associated Technical College-San Diego",
//     value: "Associated Technical College-San Diego"
//   },
//   { label: "Azusa Pacific University", value: "Azusa Pacific University" },
//   { label: "Bakersfield College", value: "Bakersfield College" },
//   {
//     label: "Barstow Community College",
//     value: "Barstow Community College"
//   },
//   {
//     label: "Bellus Academy-National City",
//     value: "Bellus Academy-National City"
//   },
//   {
//     label: "Bethesda University of California",
//     value: "Bethesda University of California"
//   },
//   { label: "Biola University", value: "Biola University" },
//   { label: "Brooks Institute", value: "Brooks Institute" },
//   {
//     label: "Brownson Technical School",
//     value: "Brownson Technical School"
//   },
//   { label: "Bryan University", value: "Bryan University" },
//   { label: "Butte College", value: "Butte College" },
//   {
//     label: "Phillips Graduate Institute",
//     value: "Phillips Graduate Institute"
//   },
//   {
//     label: "California Institute of Integral Studies",
//     value: "California Institute of Integral Studies"
//   },
//   { label: "Cabrillo College", value: "Cabrillo College" },
//   {
//     label: "California Baptist University",
//     value: "California Baptist University"
//   },
//   {
//     label: "California College of the Arts",
//     value: "California College of the Arts"
//   },
//   {
//     label: "University of California-Hastings College of Law",
//     value: "University of California-Hastings College of Law"
//   },
//   {
//     label: "California Institute of Technology",
//     value: "California Institute of Technology"
//   },
//   {
//     label: "California Lutheran University",
//     value: "California Lutheran University"
//   },
//   {
//     label: "California Polytechnic State University-San Luis Obispo",
//     value: "California Polytechnic State University-San Luis Obispo"
//   },
//   {
//     label: "Alliant International University",
//     value: "Alliant International University"
//   },
//   {
//     label: "California State University-Bakersfield",
//     value: "California State University-Bakersfield"
//   },
//   {
//     label: "California State University-Stanislaus",
//     value: "California State University-Stanislaus"
//   },
//   {
//     label: "California State University-Chancellors Office",
//     value: "California State University-Chancellors Office"
//   },
//   {
//     label: "California State University-San Bernardino",
//     value: "California State University-San Bernardino"
//   },
//   {
//     label: "California State Polytechnic University-Pomona",
//     value: "California State Polytechnic University-Pomona"
//   },
//   {
//     label: "California State University-Chico",
//     value: "California State University-Chico"
//   },
//   {
//     label: "California State University-Dominguez Hills",
//     value: "California State University-Dominguez Hills"
//   },
//   {
//     label: "California State University-Fresno",
//     value: "California State University-Fresno"
//   },
//   {
//     label: "California State University-Fullerton",
//     value: "California State University-Fullerton"
//   },
//   {
//     label: "California State University-East Bay",
//     value: "California State University-East Bay"
//   },
//   {
//     label: "California State University-Long Beach",
//     value: "California State University-Long Beach"
//   },
//   {
//     label: "California State University-Los Angeles",
//     value: "California State University-Los Angeles"
//   },
//   {
//     label: "California State University-Northridge",
//     value: "California State University-Northridge"
//   },
//   {
//     label: "California State University-Sacramento",
//     value: "California State University-Sacramento"
//   },
//   {
//     label: "University of California-Berkeley",
//     value: "University of California-Berkeley"
//   },
//   {
//     label: "University of California-Davis",
//     value: "University of California-Davis"
//   },
//   {
//     label: "University of California-Irvine",
//     value: "University of California-Irvine"
//   },
//   {
//     label: "University of California-Los Angeles",
//     value: "University of California-Los Angeles"
//   },
//   {
//     label: "University of California-Riverside",
//     value: "University of California-Riverside"
//   },
//   {
//     label: "University of California-San Diego",
//     value: "University of California-San Diego"
//   },
//   {
//     label: "University of California-San Francisco",
//     value: "University of California-San Francisco"
//   },
//   {
//     label: "University of California-Santa Barbara",
//     value: "University of California-Santa Barbara"
//   },
//   {
//     label: "University of California-Santa Cruz",
//     value: "University of California-Santa Cruz"
//   },
//   { label: "Sofia University", value: "Sofia University" },
//   { label: "California Beauty School", value: "California Beauty School" },
//   {
//     label: "California Christian College",
//     value: "California Christian College"
//   },
//   {
//     label: "California College San Diego",
//     value: "California College San Diego"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-San Francisco",
//     value: "Le Cordon Bleu College of Culinary Arts-San Francisco"
//   },
//   {
//     label: "California Hair Design Academy",
//     value: "California Hair Design Academy"
//   },
//   {
//     label: "California Institute of the Arts",
//     value: "California Institute of the Arts"
//   },
//   {
//     label: "California Maritime Academy",
//     value: "California Maritime Academy"
//   },
//   {
//     label: "California Western School of Law",
//     value: "California Western School of Law"
//   },
//   { label: "Canada College", value: "Canada College" },
//   { label: "College of the Canyons", value: "College of the Canyons" },
//   { label: "Career Academy of Beauty", value: "Career Academy of Beauty" },
//   {
//     label: "Casa Loma College-Van Nuys",
//     value: "Casa Loma College-Van Nuys"
//   },
//   { label: "CET-San Diego", value: "CET-San Diego" },
//   { label: "CET-Sobrato", value: "CET-Sobrato" },
//   { label: "CET-El Centro", value: "CET-El Centro" },
//   { label: "CET-San Bernardino", value: "CET-San Bernardino" },
//   { label: "CET-Watsonville", value: "CET-Watsonville" },
//   { label: "CET-Gilroy", value: "CET-Gilroy" },
//   { label: "CET-Salinas", value: "CET-Salinas" },
//   { label: "Cerritos College", value: "Cerritos College" },
//   {
//     label: "Cerro Coso Community College",
//     value: "Cerro Coso Community College"
//   },
//   { label: "Chabot College", value: "Chabot College" },
//   { label: "Chaffey College", value: "Chaffey College" },
//   { label: "Chapman University", value: "Chapman University" },
//   {
//     label: "Charles R Drew University of Medicine and Science",
//     value: "Charles R Drew University of Medicine and Science"
//   },
//   {
//     label: "Concordia University-Irvine",
//     value: "Concordia University-Irvine"
//   },
//   {
//     label: "San Diego Christian College",
//     value: "San Diego Christian College"
//   },
//   {
//     label: "Church Divinity School of the Pacific",
//     value: "Church Divinity School of the Pacific"
//   },
//   { label: "Citrus College", value: "Citrus College" },
//   {
//     label: "Citrus Heights Beauty College",
//     value: "Citrus Heights Beauty College"
//   },
//   {
//     label: "City College of San Francisco",
//     value: "City College of San Francisco"
//   },
//   {
//     label: "Claremont Graduate University",
//     value: "Claremont Graduate University"
//   },
//   {
//     label: "Claremont McKenna College",
//     value: "Claremont McKenna College"
//   },
//   { label: "Milan Institute-Visalia", value: "Milan Institute-Visalia" },
//   { label: "Clovis Adult Education", value: "Clovis Adult Education" },
//   {
//     label: "Coast Community College District Office",
//     value: "Coast Community College District Office"
//   },
//   {
//     label: "Coastline Community College",
//     value: "Coastline Community College"
//   },
//   { label: "Cogswell College", value: "Cogswell College" },
//   { label: "Coleman University", value: "Coleman University" },
//   { label: "COBA Academy", value: "COBA Academy" },
//   {
//     label: "Western University of Health Sciences",
//     value: "Western University of Health Sciences"
//   },
//   { label: "Columbia College", value: "Columbia College" },
//   {
//     label: "Columbia College-Hollywood",
//     value: "Columbia College-Hollywood"
//   },
//   {
//     label: "El Camino College-Compton Center",
//     value: "El Camino College-Compton Center"
//   },
//   { label: "Western Beauty Institute", value: "Western Beauty Institute" },
//   {
//     label: "Contra Costa Community College District Office",
//     value: "Contra Costa Community College District Office"
//   },
//   { label: "Contra Costa College", value: "Contra Costa College" },
//   { label: "Cosumnes River College", value: "Cosumnes River College" },
//   { label: "Crafton Hills College", value: "Crafton Hills College" },
//   { label: "Cuesta College", value: "Cuesta College" },
//   { label: "Cuyamaca College", value: "Cuyamaca College" },
//   { label: "Cypress College", value: "Cypress College" },
//   { label: "De Anza College", value: "De Anza College" },
//   {
//     label: "Marinello Schools of Beauty-Hemet",
//     value: "Marinello Schools of Beauty-Hemet"
//   },
//   {
//     label: "International School of Beauty Inc",
//     value: "International School of Beauty Inc"
//   },
//   {
//     label: "Dell'Arte International School of Physical Theatre",
//     value: "Dell'Arte International School of Physical Theatre"
//   },
//   { label: "College of the Desert", value: "College of the Desert" },
//   {
//     label: "Design Institute of San Diego",
//     value: "Design Institute of San Diego"
//   },
//   {
//     label: "DeVry University-California",
//     value: "DeVry University-California"
//   },
//   { label: "Diablo Valley College", value: "Diablo Valley College" },
//   {
//     label: "Dominican University of California",
//     value: "Dominican University of California"
//   },
//   {
//     label: "Dominican School of Philosophy & Theology",
//     value: "Dominican School of Philosophy & Theology"
//   },
//   { label: "East Los Angeles College", value: "East Los Angeles College" },
//   {
//     label: "Marinello Schools of Beauty-Santa Clara",
//     value: "Marinello Schools of Beauty-Santa Clara"
//   },
//   {
//     label: "San Diego Continuing Education",
//     value: "San Diego Continuing Education"
//   },
//   {
//     label: "El Camino Community College District",
//     value: "El Camino Community College District"
//   },
//   { label: "Elegance International", value: "Elegance International" },
//   {
//     label: "Marinello Schools of Beauty-Burbank",
//     value: "Marinello Schools of Beauty-Burbank"
//   },
//   {
//     label: "Marinello Schools of Beauty-Moreno Valley",
//     value: "Marinello Schools of Beauty-Moreno Valley"
//   },
//   {
//     label: "Emperor's College of Traditional Oriental Medicine",
//     value: "Emperor's College of Traditional Oriental Medicine"
//   },
//   {
//     label: "Empire College School of Business",
//     value: "Empire College School of Business"
//   },
//   { label: "Evergreen Valley College", value: "Evergreen Valley College" },
//   {
//     label: "Fashion Institute of Design & Merchandising-Los Angeles",
//     value: "Fashion Institute of Design & Merchandising-Los Angeles"
//   },
//   { label: "Fashion Careers College", value: "Fashion Careers College" },
//   {
//     label: "Fashion Institute of Design & Merchandising-San Francisco",
//     value: "Fashion Institute of Design & Merchandising-San Francisco"
//   },
//   {
//     label: "Fashion Institute of Design & Merchandising-Orange County",
//     value: "Fashion Institute of Design & Merchandising-Orange County"
//   },
//   {
//     label: "Feather River Community College District",
//     value: "Feather River Community College District"
//   },
//   {
//     label: "Federico Beauty Institute",
//     value: "Federico Beauty Institute"
//   },
//   {
//     label: "Fielding Graduate University",
//     value: "Fielding Graduate University"
//   },
//   { label: "Five Branches University", value: "Five Branches University" },
//   {
//     label: "Hair California Beauty Academy",
//     value: "Hair California Beauty Academy"
//   },
//   { label: "Foothill College", value: "Foothill College" },
//   {
//     label: "Franciscan School of Theology",
//     value: "Franciscan School of Theology"
//   },
//   {
//     label: "Fredrick and Charles Beauty College",
//     value: "Fredrick and Charles Beauty College"
//   },
//   { label: "Fresno City College", value: "Fresno City College" },
//   {
//     label: "Fresno Pacific University",
//     value: "Fresno Pacific University"
//   },
//   {
//     label: "Foothill-De Anza Community College District",
//     value: "Foothill-De Anza Community College District"
//   },
//   {
//     label: "Fuller Theological Seminary in California",
//     value: "Fuller Theological Seminary in California"
//   },
//   { label: "Fullerton College", value: "Fullerton College" },
//   {
//     label: "Galen College of Medical and Dental Assistants",
//     value: "Galen College of Medical and Dental Assistants"
//   },
//   { label: "Gavilan College", value: "Gavilan College" },
//   {
//     label: "Gemological Institute of America-Carlsbad",
//     value: "Gemological Institute of America-Carlsbad"
//   },
//   {
//     label: "Glendale Community College",
//     value: "Glendale Community College"
//   },
//   { label: "Glendale Career College", value: "Glendale Career College" },
//   {
//     label: "Golden Gate University-San Francisco",
//     value: "Golden Gate University-San Francisco"
//   },
//   { label: "Golden West College", value: "Golden West College" },
//   {
//     label: "Graduate Theological Union",
//     value: "Graduate Theological Union"
//   },
//   {
//     label: "Grossmont-Cuyamaca Community College District",
//     value: "Grossmont-Cuyamaca Community College District"
//   },
//   { label: "Grossmont College", value: "Grossmont College" },
//   {
//     label: "Salon Success Academy-San Bernardino",
//     value: "Salon Success Academy-San Bernardino"
//   },
//   { label: "Hartnell College", value: "Hartnell College" },
//   { label: "Harvey Mudd College", value: "Harvey Mudd College" },
//   {
//     label: "Heald College-Rancho Cordova",
//     value: "Heald College-Rancho Cordova"
//   },
//   { label: "Heald College-Fresno", value: "Heald College-Fresno" },
//   { label: "Heald College-San Jose", value: "Heald College-San Jose" },
//   {
//     label: "Heald College-San Francisco",
//     value: "Heald College-San Francisco"
//   },
//   { label: "Heald College-Concord", value: "Heald College-Concord" },
//   { label: "Hilltop Beauty School", value: "Hilltop Beauty School" },
//   { label: "Holy Names University", value: "Holy Names University" },
//   {
//     label: "Pacifica Graduate Institute",
//     value: "Pacifica Graduate Institute"
//   },
//   {
//     label: "Humboldt State University",
//     value: "Humboldt State University"
//   },
//   {
//     label: "Humphreys College-Stockton and Modesto Campuses",
//     value: "Humphreys College-Stockton and Modesto Campuses"
//   },
//   { label: "Imperial Valley College", value: "Imperial Valley College" },
//   {
//     label: "Institute for Business and Technology",
//     value: "Institute for Business and Technology"
//   },
//   { label: "LA College International", value: "LA College International" },
//   {
//     label: "Interior Designers Institute",
//     value: "Interior Designers Institute"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Santa Monica",
//     value: "Toni & Guy Hairdressing Academy-Santa Monica"
//   },
//   { label: "Irvine Valley College", value: "Irvine Valley College" },
//   {
//     label: "ITT Technical Institute-National City",
//     value: "ITT Technical Institute-National City"
//   },
//   {
//     label: "ITT Technical Institute-San Dimas",
//     value: "ITT Technical Institute-San Dimas"
//   },
//   {
//     label: "ITT Technical Institute-Orange",
//     value: "ITT Technical Institute-Orange"
//   },
//   { label: "Bellus Academy-El Cajon", value: "Bellus Academy-El Cajon" },
//   {
//     label: "Joe Blasco Makeup Artist Training Center",
//     value: "Joe Blasco Makeup Artist Training Center"
//   },
//   {
//     label: "John F Kennedy University",
//     value: "John F Kennedy University"
//   },
//   {
//     label: "American Jewish University",
//     value: "American Jewish University"
//   },
//   { label: "Reedley College", value: "Reedley College" },
//   { label: "Life Pacific College", value: "Life Pacific College" },
//   {
//     label: "The Art Institute of California-Argosy University San Diego",
//     value: "The Art Institute of California-Argosy University San Diego"
//   },
//   { label: "University of La Verne", value: "University of La Verne" },
//   {
//     label: "Laguna College of Art and Design",
//     value: "Laguna College of Art and Design"
//   },
//   {
//     label: "Lake Tahoe Community College",
//     value: "Lake Tahoe Community College"
//   },
//   { label: "Lancaster Beauty School", value: "Lancaster Beauty School" },
//   { label: "Laney College", value: "Laney College" },
//   { label: "Lassen Community College", value: "Lassen Community College" },
//   {
//     label: "Life Chiropractic College West",
//     value: "Life Chiropractic College West"
//   },
//   { label: "Lincoln University", value: "Lincoln University" },
//   {
//     label: "Southern California Seminary",
//     value: "Southern California Seminary"
//   },
//   { label: "La Sierra University", value: "La Sierra University" },
//   { label: "Loma Linda University", value: "Loma Linda University" },
//   { label: "Long Beach City College", value: "Long Beach City College" },
//   {
//     label: "Southern California University of Health Sciences",
//     value: "Southern California University of Health Sciences"
//   },
//   {
//     label: "Los Angeles Community College District Office",
//     value: "Los Angeles Community College District Office"
//   },
//   {
//     label: "Los Angeles Harbor College",
//     value: "Los Angeles Harbor College"
//   },
//   {
//     label: "Los Angeles Pierce College",
//     value: "Los Angeles Pierce College"
//   },
//   {
//     label: "Los Angeles Southwest College",
//     value: "Los Angeles Southwest College"
//   },
//   {
//     label: "Los Angeles Trade Technical College",
//     value: "Los Angeles Trade Technical College"
//   },
//   {
//     label: "Los Angeles Valley College",
//     value: "Los Angeles Valley College"
//   },
//   {
//     label: "The Master's College and Seminary",
//     value: "The Master's College and Seminary"
//   },
//   { label: "Los Angeles City College", value: "Los Angeles City College" },
//   {
//     label: "Los Angeles County College of Nursing and Allied Health",
//     value: "Los Angeles County College of Nursing and Allied Health"
//   },
//   {
//     label: "Los Angeles Mission College",
//     value: "Los Angeles Mission College"
//   },
//   { label: "Los Medanos College", value: "Los Medanos College" },
//   {
//     label: "Los Rios Community College District Office",
//     value: "Los Rios Community College District Office"
//   },
//   {
//     label: "The Art Institute of California-Argosy University San Francisco",
//     value: "The Art Institute of California-Argosy University San Francisco"
//   },
//   {
//     label: "Loyola Marymount University",
//     value: "Loyola Marymount University"
//   },
//   { label: "Lu Ross Academy", value: "Lu Ross Academy" },
//   {
//     label: "Manchester Beauty College",
//     value: "Manchester Beauty College"
//   },
//   { label: "Tulare Beauty College", value: "Tulare Beauty College" },
//   {
//     label: "Lyles Bakersfield College of Beauty",
//     value: "Lyles Bakersfield College of Beauty"
//   },
//   {
//     label: "Lyles Fresno College of Beauty",
//     value: "Lyles Fresno College of Beauty"
//   },
//   {
//     label: "Lytles Redwood Empire Beauty College Inc",
//     value: "Lytles Redwood Empire Beauty College Inc"
//   },
//   { label: "MTI Business College Inc", value: "MTI Business College Inc" },
//   { label: "MTI College", value: "MTI College" },
//   {
//     label: "Kaplan College-Sacramento",
//     value: "Kaplan College-Sacramento"
//   },
//   { label: "Kaplan College-San Diego", value: "Kaplan College-San Diego" },
//   { label: "Kaplan College-Vista", value: "Kaplan College-Vista" },
//   { label: "College of Marin", value: "College of Marin" },
//   {
//     label: "Marinello Schools of Beauty-Los Angeles",
//     value: "Marinello Schools of Beauty-Los Angeles"
//   },
//   {
//     label: "Marymount California University",
//     value: "Marymount California University"
//   },
//   { label: "Mendocino College", value: "Mendocino College" },
//   { label: "Menlo College", value: "Menlo College" },
//   { label: "Merced College", value: "Merced College" },
//   { label: "Merritt College", value: "Merritt College" },
//   { label: "Mills College", value: "Mills College" },
//   { label: "MiraCosta College", value: "MiraCosta College" },
//   {
//     label: "Marinello Schools of Beauty-San Francisco",
//     value: "Marinello Schools of Beauty-San Francisco"
//   },
//   { label: "Mission College", value: "Mission College" },
//   { label: "Modern Beauty Academy", value: "Modern Beauty Academy" },
//   {
//     label: "Kaplan College-North Hollywood",
//     value: "Kaplan College-North Hollywood"
//   },
//   { label: "Modesto Junior College", value: "Modesto Junior College" },
//   { label: "Moler Barber College", value: "Moler Barber College" },
//   {
//     label: "Monterey Institute of International Studies",
//     value: "Monterey Institute of International Studies"
//   },
//   {
//     label: "Monterey Peninsula College",
//     value: "Monterey Peninsula College"
//   },
//   { label: "Moorpark College", value: "Moorpark College" },
//   { label: "Mt San Antonio College", value: "Mt San Antonio College" },
//   { label: "Mount St Mary's College", value: "Mount St Mary's College" },
//   {
//     label: "Mt San Jacinto Community College District",
//     value: "Mt San Jacinto Community College District"
//   },
//   { label: "Mueller College", value: "Mueller College" },
//   { label: "Musicians Institute", value: "Musicians Institute" },
//   { label: "Napa Valley College", value: "Napa Valley College" },
//   {
//     label: "Everest College-San Francisco",
//     value: "Everest College-San Francisco"
//   },
//   { label: "Everest College-Reseda", value: "Everest College-Reseda" },
//   {
//     label: "Everest College-LA Wilshire",
//     value: "Everest College-LA Wilshire"
//   },
//   { label: "Everest College-San Jose", value: "Everest College-San Jose" },
//   { label: "Everest College-Gardena", value: "Everest College-Gardena" },
//   { label: "Everest College-Alhambra", value: "Everest College-Alhambra" },
//   {
//     label: "Everest College-San Bernardino",
//     value: "Everest College-San Bernardino"
//   },
//   {
//     label: "The National Hispanic University",
//     value: "The National Hispanic University"
//   },
//   {
//     label: "National Holistic Institute",
//     value: "National Holistic Institute"
//   },
//   { label: "National University", value: "National University" },
//   {
//     label: "Naval Postgraduate School",
//     value: "Naval Postgraduate School"
//   },
//   {
//     label: "Newschool of Architecture and Design",
//     value: "Newschool of Architecture and Design"
//   },
//   {
//     label: "Newberry School of Beauty",
//     value: "Newberry School of Beauty"
//   },
//   {
//     label: "Adrian's College of Beauty Modesto",
//     value: "Adrian's College of Beauty Modesto"
//   },
//   {
//     label: "North Orange County Community College District",
//     value: "North Orange County Community College District"
//   },
//   {
//     label: "North-West College-Pomona",
//     value: "North-West College-Pomona"
//   },
//   {
//     label: "North-West College-West Covina",
//     value: "North-West College-West Covina"
//   },
//   {
//     label: "North-West College-Pasadena",
//     value: "North-West College-Pasadena"
//   },
//   {
//     label: "Northwestern Polytechnic University",
//     value: "Northwestern Polytechnic University"
//   },
//   {
//     label: "Notre Dame de Namur University",
//     value: "Notre Dame de Namur University"
//   },
//   { label: "Occidental College", value: "Occidental College" },
//   {
//     label: "Oceanside College of Beauty",
//     value: "Oceanside College of Beauty"
//   },
//   { label: "Ohlone College", value: "Ohlone College" },
//   { label: "Orange Coast College", value: "Orange Coast College" },
//   {
//     label: "Otis College of Art and Design",
//     value: "Otis College of Art and Design"
//   },
//   { label: "Oxnard College", value: "Oxnard College" },
//   {
//     label: "Hope International University",
//     value: "Hope International University"
//   },
//   {
//     label: "Concorde Career College-San Diego",
//     value: "Concorde Career College-San Diego"
//   },
//   { label: "Palo Alto University", value: "Palo Alto University" },
//   {
//     label: "Pacific Lutheran Theological Seminary",
//     value: "Pacific Lutheran Theological Seminary"
//   },
//   { label: "Pacific Oaks College", value: "Pacific Oaks College" },
//   {
//     label: "Pacific School of Religion",
//     value: "Pacific School of Religion"
//   },
//   {
//     label: "Pacific States University",
//     value: "Pacific States University"
//   },
//   { label: "Pacific Union College", value: "Pacific Union College" },
//   {
//     label: "University of the Pacific",
//     value: "University of the Pacific"
//   },
//   { label: "Palo Verde College", value: "Palo Verde College" },
//   { label: "Palomar College", value: "Palomar College" },
//   { label: "Paris Beauty College", value: "Paris Beauty College" },
//   { label: "Pasadena City College", value: "Pasadena City College" },
//   { label: "Pepperdine University", value: "Pepperdine University" },
//   {
//     label: "Peralta Community College System Office",
//     value: "Peralta Community College System Office"
//   },
//   { label: "Pitzer College", value: "Pitzer College" },
//   { label: "Platt College-San Diego", value: "Platt College-San Diego" },
//   {
//     label: "Point Loma Nazarene University",
//     value: "Point Loma Nazarene University"
//   },
//   { label: "Pomona College", value: "Pomona College" },
//   { label: "Porterville College", value: "Porterville College" },
//   {
//     label: "Westwood College-South Bay",
//     value: "Westwood College-South Bay"
//   },
//   {
//     label: "Professional Institute of Beauty",
//     value: "Professional Institute of Beauty"
//   },
//   { label: "Santa Ana College", value: "Santa Ana College" },
//   {
//     label: "Pardee RAND Graduate School",
//     value: "Pardee RAND Graduate School"
//   },
//   {
//     label: "Shasta School of Cosmetology",
//     value: "Shasta School of Cosmetology"
//   },
//   { label: "University of Redlands", value: "University of Redlands" },
//   { label: "College of the Redwoods", value: "College of the Redwoods" },
//   {
//     label: "Salon Success Academy-Upland",
//     value: "Salon Success Academy-Upland"
//   },
//   {
//     label: "Salon Success Academy-Corona",
//     value: "Salon Success Academy-Corona"
//   },
//   { label: "Rio Hondo College", value: "Rio Hondo College" },
//   { label: "Riverside City College", value: "Riverside City College" },
//   {
//     label: "Argosy University-San Francisco Bay Area",
//     value: "Argosy University-San Francisco Bay Area"
//   },
//   { label: "Rosemead Beauty School", value: "Rosemead Beauty School" },
//   {
//     label: "Dongguk University-Los Angeles",
//     value: "Dongguk University-Los Angeles"
//   },
//   { label: "Sacramento City College", value: "Sacramento City College" },
//   { label: "Saddleback College", value: "Saddleback College" },
//   {
//     label: "Saint Patrick's Seminary and University",
//     value: "Saint Patrick's Seminary and University"
//   },
//   {
//     label: "Samuel Merritt University",
//     value: "Samuel Merritt University"
//   },
//   {
//     label: "San Diego Community College District-District Office",
//     value: "San Diego Community College District-District Office"
//   },
//   { label: "San Diego City College", value: "San Diego City College" },
//   {
//     label: "Golf Academy of America-Carlsbad",
//     value: "Golf Academy of America-Carlsbad"
//   },
//   { label: "San Diego Mesa College", value: "San Diego Mesa College" },
//   {
//     label: "San Diego Miramar College",
//     value: "San Diego Miramar College"
//   },
//   {
//     label: "San Diego State University",
//     value: "San Diego State University"
//   },
//   { label: "University of San Diego", value: "University of San Diego" },
//   {
//     label: "San Francisco Art Institute",
//     value: "San Francisco Art Institute"
//   },
//   {
//     label: "San Francisco Conservatory of Music",
//     value: "San Francisco Conservatory of Music"
//   },
//   {
//     label: "San Francisco State University",
//     value: "San Francisco State University"
//   },
//   {
//     label: "San Francisco Theological Seminary",
//     value: "San Francisco Theological Seminary"
//   },
//   {
//     label: "University of San Francisco",
//     value: "University of San Francisco"
//   },
//   {
//     label: "San Joaquin College of Law",
//     value: "San Joaquin College of Law"
//   },
//   {
//     label: "San Joaquin Delta College",
//     value: "San Joaquin Delta College"
//   },
//   {
//     label: "San Joaquin Valley College-Visalia",
//     value: "San Joaquin Valley College-Visalia"
//   },
//   {
//     label: "San Joaquin Valley College-Bakersfield",
//     value: "San Joaquin Valley College-Bakersfield"
//   },
//   {
//     label: "William Jessup University",
//     value: "William Jessup University"
//   },
//   {
//     label: "San Jose-Evergreen Community College District",
//     value: "San Jose-Evergreen Community College District"
//   },
//   { label: "San Jose City College", value: "San Jose City College" },
//   {
//     label: "San Jose State University",
//     value: "San Jose State University"
//   },
//   {
//     label: "San Mateo County Community College District Office",
//     value: "San Mateo County Community College District Office"
//   },
//   { label: "College of San Mateo", value: "College of San Mateo" },
//   {
//     label: "Santa Barbara Business College-Bakersfield",
//     value: "Santa Barbara Business College-Bakersfield"
//   },
//   {
//     label: "Westwood College-Los Angeles",
//     value: "Westwood College-Los Angeles"
//   },
//   {
//     label: "Santa Barbara Business College-Santa Maria",
//     value: "Santa Barbara Business College-Santa Maria"
//   },
//   {
//     label: "Santa Barbara City College",
//     value: "Santa Barbara City College"
//   },
//   { label: "Santa Clara University", value: "Santa Clara University" },
//   { label: "Santa Monica College", value: "Santa Monica College" },
//   {
//     label: "Santa Rosa Junior College",
//     value: "Santa Rosa Junior College"
//   },
//   { label: "Saybrook University", value: "Saybrook University" },
//   { label: "Scripps College", value: "Scripps College" },
//   { label: "Wyotech-Fremont", value: "Wyotech-Fremont" },
//   { label: "College of the Sequoias", value: "College of the Sequoias" },
//   {
//     label: "Shasta Bible College and Graduate School",
//     value: "Shasta Bible College and Graduate School"
//   },
//   { label: "Shasta College", value: "Shasta College" },
//   { label: "Sierra College", value: "Sierra College" },
//   { label: "Sierra College of Beauty", value: "Sierra College of Beauty" },
//   {
//     label: "Sierra Valley College of Court Reporting",
//     value: "Sierra Valley College of Court Reporting"
//   },
//   { label: "Trinity Law School", value: "Trinity Law School" },
//   { label: "Simpson University", value: "Simpson University" },
//   { label: "College of the Siskiyous", value: "College of the Siskiyous" },
//   {
//     label: "Charles A Jones Career and Education Center",
//     value: "Charles A Jones Career and Education Center"
//   },
//   { label: "Skyline College", value: "Skyline College" },
//   {
//     label: "San Bernardino Valley College",
//     value: "San Bernardino Valley College"
//   },
//   {
//     label: "Saint Mary's College of California",
//     value: "Saint Mary's College of California"
//   },
//   { label: "Solano Community College", value: "Solano Community College" },
//   { label: "Sonoma State University", value: "Sonoma State University" },
//   { label: "Pinnacle College", value: "Pinnacle College" },
//   { label: "South Baylo University", value: "South Baylo University" },
//   { label: "South Coast College", value: "South Coast College" },
//   {
//     label: "Vanguard University of Southern California",
//     value: "Vanguard University of Southern California"
//   },
//   {
//     label: "Concorde Career College-Garden Grove",
//     value: "Concorde Career College-Garden Grove"
//   },
//   { label: "Southwestern College", value: "Southwestern College" },
//   { label: "St John's Seminary", value: "St John's Seminary" },
//   {
//     label: "Starr King School for Ministry",
//     value: "Starr King School for Ministry"
//   },
//   {
//     label: "State Center Community College District",
//     value: "State Center Community College District"
//   },
//   {
//     label: "Marshall B Ketchum University",
//     value: "Marshall B Ketchum University"
//   },
//   {
//     label: "Southern California Institute of Architecture",
//     value: "Southern California Institute of Architecture"
//   },
//   {
//     label: "University of Southern California",
//     value: "University of Southern California"
//   },
//   { label: "Southwestern Law School", value: "Southwestern Law School" },
//   { label: "Taft College", value: "Taft College" },
//   {
//     label: "Claremont School of Theology",
//     value: "Claremont School of Theology"
//   },
//   { label: "Thomas Aquinas College", value: "Thomas Aquinas College" },
//   {
//     label: "Marinello Schools of Beauty-Lake Forest",
//     value: "Marinello Schools of Beauty-Lake Forest"
//   },
//   { label: "Epic Bible College", value: "Epic Bible College" },
//   {
//     label: "University of California-System Administration Central Office",
//     value: "University of California-System Administration Central Office"
//   },
//   {
//     label: "United Education Institute-Huntington Park Campus",
//     value: "United Education Institute-Huntington Park Campus"
//   },
//   {
//     label: "Concorde Career College-San Bernardino",
//     value: "Concorde Career College-San Bernardino"
//   },
//   {
//     label: "Universal College of Beauty Inc-Los Angeles 1",
//     value: "Universal College of Beauty Inc-Los Angeles 1"
//   },
//   {
//     label: "Concorde Career College-North Hollywood",
//     value: "Concorde Career College-North Hollywood"
//   },
//   {
//     label: "Ventura County Community College System Office",
//     value: "Ventura County Community College System Office"
//   },
//   { label: "Ventura College", value: "Ventura College" },
//   {
//     label: "The Santa Barbara and Ventura Colleges of Law-Ventura",
//     value: "The Santa Barbara and Ventura Colleges of Law-Ventura"
//   },
//   {
//     label: "Victor Valley Beauty College Inc",
//     value: "Victor Valley Beauty College Inc"
//   },
//   { label: "Victor Valley College", value: "Victor Valley College" },
//   { label: "Berkeley City College", value: "Berkeley City College" },
//   {
//     label: "West Valley Mission Community College District Office",
//     value: "West Valley Mission Community College District Office"
//   },
//   { label: "Walden University", value: "Walden University" },
//   { label: "Waynes College of Beauty", value: "Waynes College of Beauty" },
//   {
//     label: "West Hills College-Coalinga",
//     value: "West Hills College-Coalinga"
//   },
//   { label: "West Los Angeles College", value: "West Los Angeles College" },
//   { label: "West Valley College", value: "West Valley College" },
//   {
//     label: "Carrington College California-Sacramento",
//     value: "Carrington College California-Sacramento"
//   },
//   {
//     label: "Westminster Theological Seminary in California",
//     value: "Westminster Theological Seminary in California"
//   },
//   { label: "Westmont College", value: "Westmont College" },
//   { label: "Whittier College", value: "Whittier College" },
//   { label: "Woodbury University", value: "Woodbury University" },
//   { label: "The Wright Institute", value: "The Wright Institute" },
//   {
//     label: "Western State College of Law at Argosy University",
//     value: "Western State College of Law at Argosy University"
//   },
//   {
//     label: "Thomas Jefferson School of Law",
//     value: "Thomas Jefferson School of Law"
//   },
//   {
//     label: "Yeshiva Ohr Elchonon Chabad West Coast Talmudical Seminary",
//     value: "Yeshiva Ohr Elchonon Chabad West Coast Talmudical Seminary"
//   },
//   {
//     label: "Yosemite Community College District Office",
//     value: "Yosemite Community College District Office"
//   },
//   { label: "Yuba College", value: "Yuba College" },
//   {
//     label: "The Salon Professional Academy-Grand Junction",
//     value: "The Salon Professional Academy-Grand Junction"
//   },
//   { label: "Adams State University", value: "Adams State University" },
//   { label: "Aims Community College", value: "Aims Community College" },
//   {
//     label: "Arapahoe Community College",
//     value: "Arapahoe Community College"
//   },
//   {
//     label: "Bel-Rea Institute of Animal Technology",
//     value: "Bel-Rea Institute of Animal Technology"
//   },
//   {
//     label: "Everest College-Colorado Springs",
//     value: "Everest College-Colorado Springs"
//   },
//   {
//     label: "Boulder College of Massage Therapy",
//     value: "Boulder College of Massage Therapy"
//   },
//   {
//     label: "University of Colorado Denver",
//     value: "University of Colorado Denver"
//   },
//   {
//     label: "University of Colorado Colorado Springs",
//     value: "University of Colorado Colorado Springs"
//   },
//   { label: "Redstone College", value: "Redstone College" },
//   {
//     label: "University of Colorado Boulder",
//     value: "University of Colorado Boulder"
//   },
//   {
//     label: "Colorado Christian University",
//     value: "Colorado Christian University"
//   },
//   { label: "Colorado College", value: "Colorado College" },
//   {
//     label: "Concorde Career College-Aurora",
//     value: "Concorde Career College-Aurora"
//   },
//   {
//     label: "The Art Institute of Colorado",
//     value: "The Art Institute of Colorado"
//   },
//   {
//     label: "Colorado Mountain College",
//     value: "Colorado Mountain College"
//   },
//   {
//     label: "Colorado Northwestern Community College",
//     value: "Colorado Northwestern Community College"
//   },
//   { label: "Colorado School of Mines", value: "Colorado School of Mines" },
//   {
//     label: "Colorado School of Trades",
//     value: "Colorado School of Trades"
//   },
//   {
//     label: "Colorado State University-Fort Collins",
//     value: "Colorado State University-Fort Collins"
//   },
//   {
//     label: "Colorado Technical University-Colorado Springs",
//     value: "Colorado Technical University-Colorado Springs"
//   },
//   {
//     label: "Empire Beauty School-Lakewood",
//     value: "Empire Beauty School-Lakewood"
//   },
//   {
//     label: "Community College of Aurora",
//     value: "Community College of Aurora"
//   },
//   { label: "College America-Denver", value: "College America-Denver" },
//   {
//     label: "Delta Montrose Technical College",
//     value: "Delta Montrose Technical College"
//   },
//   {
//     label: "Prince Institute-Rocky Mountains",
//     value: "Prince Institute-Rocky Mountains"
//   },
//   {
//     label: "Community College of Denver",
//     value: "Community College of Denver"
//   },
//   {
//     label: "Lincoln College of Technology-Denver",
//     value: "Lincoln College of Technology-Denver"
//   },
//   { label: "Denver Seminary", value: "Denver Seminary" },
//   {
//     label: "Westwood College-Denver North",
//     value: "Westwood College-Denver North"
//   },
//   { label: "University of Denver", value: "University of Denver" },
//   {
//     label: "Emily Griffith Technical College",
//     value: "Emily Griffith Technical College"
//   },
//   { label: "Fort Lewis College", value: "Fort Lewis College" },
//   {
//     label: "Front Range Community College",
//     value: "Front Range Community College"
//   },
//   { label: "Glenwood Beauty Academy", value: "Glenwood Beauty Academy" },
//   {
//     label: "Hair Dynamics Education Center",
//     value: "Hair Dynamics Education Center"
//   },
//   { label: "Iliff School of Theology", value: "Iliff School of Theology" },
//   {
//     label: "International Salon and Spa Academy",
//     value: "International Salon and Spa Academy"
//   },
//   { label: "Lamar Community College", value: "Lamar Community College" },
//   { label: "Colorado Mesa University", value: "Colorado Mesa University" },
//   {
//     label: "Metropolitan State University of Denver",
//     value: "Metropolitan State University of Denver"
//   },
//   { label: "Morgan Community College", value: "Morgan Community College" },
//   { label: "Naropa University", value: "Naropa University" },
//   {
//     label: "National American University-Colorado Springs",
//     value: "National American University-Colorado Springs"
//   },
//   {
//     label: "National American University-Denver",
//     value: "National American University-Denver"
//   },
//   { label: "Nazarene Bible College", value: "Nazarene Bible College" },
//   {
//     label: "Northeastern Junior College",
//     value: "Northeastern Junior College"
//   },
//   {
//     label: "University of Northern Colorado",
//     value: "University of Northern Colorado"
//   },
//   { label: "Otero Junior College", value: "Otero Junior College" },
//   { label: "Everest College-Thornton", value: "Everest College-Thornton" },
//   {
//     label: "Pikes Peak Community College",
//     value: "Pikes Peak Community College"
//   },
//   {
//     label: "Intellitec Medical Institute",
//     value: "Intellitec Medical Institute"
//   },
//   { label: "Pueblo Community College", value: "Pueblo Community College" },
//   {
//     label: "Red Rocks Community College",
//     value: "Red Rocks Community College"
//   },
//   { label: "Regis University", value: "Regis University" },
//   {
//     label: "Rocky Mountain College of Art and Design",
//     value: "Rocky Mountain College of Art and Design"
//   },
//   {
//     label: "Montessori Education Center of the Rockies",
//     value: "Montessori Education Center of the Rockies"
//   },
//   {
//     label: "Colorado State University-Pueblo",
//     value: "Colorado State University-Pueblo"
//   },
//   {
//     label: "Pickens Technical College",
//     value: "Pickens Technical College"
//   },
//   {
//     label: "Intellitec College-Colorado Springs",
//     value: "Intellitec College-Colorado Springs"
//   },
//   {
//     label: "Intellitec College-Grand Junction",
//     value: "Intellitec College-Grand Junction"
//   },
//   {
//     label: "Trinidad State Junior College",
//     value: "Trinidad State Junior College"
//   },
//   {
//     label: "University of Colorado System Office",
//     value: "University of Colorado System Office"
//   },
//   {
//     label: "United States Air Force Academy",
//     value: "United States Air Force Academy"
//   },
//   {
//     label: "Empire Beauty School-Thornton",
//     value: "Empire Beauty School-Thornton"
//   },
//   {
//     label: "Western State Colorado University",
//     value: "Western State Colorado University"
//   },
//   {
//     label: "Yeshiva Toras Chaim Talmudical Seminary",
//     value: "Yeshiva Toras Chaim Talmudical Seminary"
//   },
//   { label: "Albertus Magnus College", value: "Albertus Magnus College" },
//   {
//     label: "Paul Mitchell the School-Danbury",
//     value: "Paul Mitchell the School-Danbury"
//   },
//   {
//     label: "Asnuntuck Community College",
//     value: "Asnuntuck Community College"
//   },
//   { label: "Bais Binyomin Academy", value: "Bais Binyomin Academy" },
//   {
//     label: "Branford Hall Career Institute-Branford Campus",
//     value: "Branford Hall Career Institute-Branford Campus"
//   },
//   {
//     label: "Lincoln College of New England-Southington",
//     value: "Lincoln College of New England-Southington"
//   },
//   {
//     label: "Bridgeport Hospital School of Nursing",
//     value: "Bridgeport Hospital School of Nursing"
//   },
//   { label: "University of Bridgeport", value: "University of Bridgeport" },
//   {
//     label: "Central Connecticut State University",
//     value: "Central Connecticut State University"
//   },
//   {
//     label: "Charter Oak State College",
//     value: "Charter Oak State College"
//   },
//   {
//     label: "Connecticut Center for Massage Therapy-Newington",
//     value: "Connecticut Center for Massage Therapy-Newington"
//   },
//   { label: "Connecticut College", value: "Connecticut College" },
//   {
//     label: "Marinello Schools of Beauty-East Hartford",
//     value: "Marinello Schools of Beauty-East Hartford"
//   },
//   {
//     label: "Porter and Chester Institute of Branford",
//     value: "Porter and Chester Institute of Branford"
//   },
//   {
//     label: "University of Connecticut",
//     value: "University of Connecticut"
//   },
//   { label: "Goodwin College", value: "Goodwin College" },
//   {
//     label: "Lincoln Technical Institute-East Windsor",
//     value: "Lincoln Technical Institute-East Windsor"
//   },
//   {
//     label: "Eastern Connecticut State University",
//     value: "Eastern Connecticut State University"
//   },
//   { label: "Fairfield University", value: "Fairfield University" },
//   { label: "Northhaven Academy", value: "Northhaven Academy" },
//   {
//     label: "Capital Community College",
//     value: "Capital Community College"
//   },
//   {
//     label: "Rensselaer Hartford Graduate Center Inc",
//     value: "Rensselaer Hartford Graduate Center Inc"
//   },
//   {
//     label: "Fox Institute of Business-West Hartford",
//     value: "Fox Institute of Business-West Hartford"
//   },
//   { label: "Hartford Seminary", value: "Hartford Seminary" },
//   { label: "University of Hartford", value: "University of Hartford" },
//   {
//     label: "Holy Apostles College and Seminary",
//     value: "Holy Apostles College and Seminary"
//   },
//   {
//     label: "Housatonic Community College",
//     value: "Housatonic Community College"
//   },
//   {
//     label: "Sanford-Brown College-Farmington",
//     value: "Sanford-Brown College-Farmington"
//   },
//   {
//     label: "The Leon Institute of Hair Design",
//     value: "The Leon Institute of Hair Design"
//   },
//   {
//     label: "Lyme Academy College of Fine Arts",
//     value: "Lyme Academy College of Fine Arts"
//   },
//   {
//     label: "Manchester Community College",
//     value: "Manchester Community College"
//   },
//   {
//     label: "Naugatuck Valley Community College",
//     value: "Naugatuck Valley Community College"
//   },
//   {
//     label: "Middlesex Community College",
//     value: "Middlesex Community College"
//   },
//   { label: "Mitchell College", value: "Mitchell College" },
//   {
//     label: "Three Rivers Community College",
//     value: "Three Rivers Community College"
//   },
//   {
//     label: "Lincoln Technical Institute-New Britain",
//     value: "Lincoln Technical Institute-New Britain"
//   },
//   {
//     label: "New England Tractor Trailer Training School of Connecticut",
//     value: "New England Tractor Trailer Training School of Connecticut"
//   },
//   { label: "University of New Haven", value: "University of New Haven" },
//   {
//     label: "Ridley-Lowell Business & Technical Institute-New London",
//     value: "Ridley-Lowell Business & Technical Institute-New London"
//   },
//   {
//     label: "Norwalk Community College",
//     value: "Norwalk Community College"
//   },
//   {
//     label: "Northwestern Connecticut Community College",
//     value: "Northwestern Connecticut Community College"
//   },
//   { label: "Paier College of Art Inc", value: "Paier College of Art Inc" },
//   {
//     label: "Marinello Schools of Beauty-Meriden",
//     value: "Marinello Schools of Beauty-Meriden"
//   },
//   {
//     label: "Porter and Chester Institute of Stratford",
//     value: "Porter and Chester Institute of Stratford"
//   },
//   { label: "Post University", value: "Post University" },
//   {
//     label: "Quinebaug Valley Community College",
//     value: "Quinebaug Valley Community College"
//   },
//   { label: "Quinnipiac University", value: "Quinnipiac University" },
//   { label: "Sacred Heart University", value: "Sacred Heart University" },
//   {
//     label: "University of Saint Joseph",
//     value: "University of Saint Joseph"
//   },
//   {
//     label: "Gateway Community College",
//     value: "Gateway Community College"
//   },
//   { label: "St Vincent's College", value: "St Vincent's College" },
//   {
//     label: "Southern Connecticut State University",
//     value: "Southern Connecticut State University"
//   },
//   { label: "Stone Academy-Hamden", value: "Stone Academy-Hamden" },
//   {
//     label: "Tri-State College of Acupuncture",
//     value: "Tri-State College of Acupuncture"
//   },
//   { label: "Trinity College", value: "Trinity College" },
//   { label: "Tunxis Community College", value: "Tunxis Community College" },
//   {
//     label: "United States Coast Guard Academy",
//     value: "United States Coast Guard Academy"
//   },
//   { label: "Wesleyan University", value: "Wesleyan University" },
//   {
//     label: "Western Connecticut State University",
//     value: "Western Connecticut State University"
//   },
//   {
//     label: "Yale-New Haven Hospital Dietetic Internship",
//     value: "Yale-New Haven Hospital Dietetic Internship"
//   },
//   { label: "Yale University", value: "Yale University" },
//   {
//     label: "Beebe Medical Center Margaret H Rollins School of Nursing",
//     value: "Beebe Medical Center Margaret H Rollins School of Nursing"
//   },
//   {
//     label: "Dawn Career Institute Inc",
//     value: "Dawn Career Institute Inc"
//   },
//   {
//     label: "Delaware Technical Community College-Central Office",
//     value: "Delaware Technical Community College-Central Office"
//   },
//   {
//     label: "Delaware Technical Community College-Owens",
//     value: "Delaware Technical Community College-Owens"
//   },
//   {
//     label: "Delaware Technical Community College-Terry",
//     value: "Delaware Technical Community College-Terry"
//   },
//   {
//     label: "Delaware Technical Community College-Stanton/Wilmington",
//     value: "Delaware Technical Community College-Stanton/Wilmington"
//   },
//   {
//     label: "Delaware State University",
//     value: "Delaware State University"
//   },
//   { label: "University of Delaware", value: "University of Delaware" },
//   { label: "Goldey-Beacom College", value: "Goldey-Beacom College" },
//   {
//     label: "Schilling-Douglas School of Hair Design",
//     value: "Schilling-Douglas School of Hair Design"
//   },
//   { label: "Wesley College", value: "Wesley College" },
//   { label: "Wilmington University", value: "Wilmington University" },
//   { label: "American University", value: "American University" },
//   {
//     label: "Catholic University of America",
//     value: "Catholic University of America"
//   },
//   {
//     label: "Corcoran College of Art and Design",
//     value: "Corcoran College of Art and Design"
//   },
//   {
//     label: "University of the District of Columbia",
//     value: "University of the District of Columbia"
//   },
//   {
//     label: "Pontifical Faculty of the Immaculate Conception at the Dominican House of Studies",
//     value: "Pontifical Faculty of the Immaculate Conception at the Dominican House of Studies"
//   },
//   { label: "Gallaudet University", value: "Gallaudet University" },
//   {
//     label: "George Washington University",
//     value: "George Washington University"
//   },
//   { label: "Georgetown University", value: "Georgetown University" },
//   { label: "Howard University", value: "Howard University" },
//   { label: "Medtech Institute", value: "Medtech Institute" },
//   {
//     label: "Strayer University-District of Columbia",
//     value: "Strayer University-District of Columbia"
//   },
//   {
//     label: "National Conservatory of Dramatic Arts",
//     value: "National Conservatory of Dramatic Arts"
//   },
//   {
//     label: "Trinity Washington University",
//     value: "Trinity Washington University"
//   },
//   {
//     label: "Wesley Theological Seminary",
//     value: "Wesley Theological Seminary"
//   },
//   { label: "Wyotech-Daytona", value: "Wyotech-Daytona" },
//   {
//     label: "The Art Institute of Fort Lauderdale",
//     value: "The Art Institute of Fort Lauderdale"
//   },
//   {
//     label: "Atlantic Technical Center",
//     value: "Atlantic Technical Center"
//   },
//   {
//     label: "The Baptist College of Florida",
//     value: "The Baptist College of Florida"
//   },
//   { label: "Barry University", value: "Barry University" },
//   {
//     label: "Gooding Institute of Nurse Anesthesia",
//     value: "Gooding Institute of Nurse Anesthesia"
//   },
//   {
//     label: "Bethune-Cookman University",
//     value: "Bethune-Cookman University"
//   },
//   { label: "Lynn University", value: "Lynn University" },
//   {
//     label: "GUTI The Premier Beauty & Wellness Academy",
//     value: "GUTI The Premier Beauty & Wellness Academy"
//   },
//   {
//     label: "Bradford-Union Technical Center",
//     value: "Bradford-Union Technical Center"
//   },
//   {
//     label: "Eastern Florida State College",
//     value: "Eastern Florida State College"
//   },
//   { label: "Broward College", value: "Broward College" },
//   {
//     label: "Fortis College-Winter Park",
//     value: "Fortis College-Winter Park"
//   },
//   {
//     label: "Carlos Albizu University-Miami",
//     value: "Carlos Albizu University-Miami"
//   },
//   {
//     label: "College of Central Florida",
//     value: "College of Central Florida"
//   },
//   {
//     label: "Johnson University Florida",
//     value: "Johnson University Florida"
//   },
//   {
//     label: "University of Central Florida",
//     value: "University of Central Florida"
//   },
//   {
//     label: "Charlotte Technical Center",
//     value: "Charlotte Technical Center"
//   },
//   { label: "Chipola College", value: "Chipola College" },
//   {
//     label: "Clearwater Christian College",
//     value: "Clearwater Christian College"
//   },
//   {
//     label: "Lorenzo Walker Institute of Technology",
//     value: "Lorenzo Walker Institute of Technology"
//   },
//   { label: "Daytona State College", value: "Daytona State College" },
//   {
//     label: "South University-West Palm Beach",
//     value: "South University-West Palm Beach"
//   },
//   { label: "Eckerd College", value: "Eckerd College" },
//   { label: "Edison State College", value: "Edison State College" },
//   { label: "Edward Waters College", value: "Edward Waters College" },
//   {
//     label: "Embry-Riddle Aeronautical University-Daytona Beach",
//     value: "Embry-Riddle Aeronautical University-Daytona Beach"
//   },
//   {
//     label: "Florida Agricultural and Mechanical University",
//     value: "Florida Agricultural and Mechanical University"
//   },
//   {
//     label: "Florida Atlantic University",
//     value: "Florida Atlantic University"
//   },
//   {
//     label: "Florida State College at Jacksonville",
//     value: "Florida State College at Jacksonville"
//   },
//   {
//     label: "Flagler College-St Augustine",
//     value: "Flagler College-St Augustine"
//   },
//   { label: "Florida College", value: "Florida College" },
//   {
//     label: "Concorde Career Institute-Jacksonville",
//     value: "Concorde Career Institute-Jacksonville"
//   },
//   {
//     label: "Concorde Career Institute-Miramar",
//     value: "Concorde Career Institute-Miramar"
//   },
//   {
//     label: "Concorde Career Institute-Tampa",
//     value: "Concorde Career Institute-Tampa"
//   },
//   {
//     label: "Adventist University of Health Sciences",
//     value: "Adventist University of Health Sciences"
//   },
//   {
//     label: "Florida Institute of Technology",
//     value: "Florida Institute of Technology"
//   },
//   {
//     label: "Florida Institute of Ultrasound Inc",
//     value: "Florida Institute of Ultrasound Inc"
//   },
//   {
//     label: "Florida International University",
//     value: "Florida International University"
//   },
//   {
//     label: "Florida Keys Community College",
//     value: "Florida Keys Community College"
//   },
//   {
//     label: "Florida Memorial University",
//     value: "Florida Memorial University"
//   },
//   {
//     label: "Florida Career College-Miami",
//     value: "Florida Career College-Miami"
//   },
//   {
//     label: "Florida School of Massage",
//     value: "Florida School of Massage"
//   },
//   { label: "Florida Southern College", value: "Florida Southern College" },
//   { label: "Florida State University", value: "Florida State University" },
//   {
//     label: "Florida Technical College",
//     value: "Florida Technical College"
//   },
//   {
//     label: "University of Southernmost Florida",
//     value: "University of Southernmost Florida"
//   },
//   { label: "University of Florida", value: "University of Florida" },
//   {
//     label: "Everest University-Pompano Beach",
//     value: "Everest University-Pompano Beach"
//   },
//   {
//     label: "Fort Pierce Beauty Academy",
//     value: "Fort Pierce Beauty Academy"
//   },
//   { label: "Full Sail University", value: "Full Sail University" },
//   {
//     label: "George Stone Technical Center",
//     value: "George Stone Technical Center"
//   },
//   {
//     label: "George T Baker Aviation School",
//     value: "George T Baker Aviation School"
//   },
//   { label: "Gulf Coast State College", value: "Gulf Coast State College" },
//   { label: "Key College", value: "Key College" },
//   {
//     label: "Hillsborough Community College",
//     value: "Hillsborough Community College"
//   },
//   { label: "Hobe Sound Bible College", value: "Hobe Sound Bible College" },
//   {
//     label: "Hollywood Institute of Beauty Careers",
//     value: "Hollywood Institute of Beauty Careers"
//   },
//   {
//     label: "Cortiva Institute-Florida",
//     value: "Cortiva Institute-Florida"
//   },
//   {
//     label: "Indian River State College",
//     value: "Indian River State College"
//   },
//   {
//     label: "International Academy of Design and Technology-Tampa",
//     value: "International Academy of Design and Technology-Tampa"
//   },
//   { label: "International Academy", value: "International Academy" },
//   {
//     label: "AI Miami International University of Art and Design",
//     value: "AI Miami International University of Art and Design"
//   },
//   {
//     label: "ITT Technical Institute-Tampa",
//     value: "ITT Technical Institute-Tampa"
//   },
//   { label: "Jacksonville University", value: "Jacksonville University" },
//   {
//     label: "Jones College-Jacksonville",
//     value: "Jones College-Jacksonville"
//   },
//   {
//     label: "Keiser University-Ft Lauderdale",
//     value: "Keiser University-Ft Lauderdale"
//   },
//   {
//     label: "Heritage Institute-Ft Myers",
//     value: "Heritage Institute-Ft Myers"
//   },
//   { label: "La Belle Beauty School", value: "La Belle Beauty School" },
//   { label: "Florida Gateway College", value: "Florida Gateway College" },
//   { label: "Lake Technical Center", value: "Lake Technical Center" },
//   {
//     label: "Lake-Sumter State College",
//     value: "Lake-Sumter State College"
//   },
//   {
//     label: "Fort Myers Institute of Technology",
//     value: "Fort Myers Institute of Technology"
//   },
//   { label: "Lively Technical Center", value: "Lively Technical Center" },
//   {
//     label: "Lindsey Hopkins Technical Education Center",
//     value: "Lindsey Hopkins Technical Education Center"
//   },
//   { label: "Loraines Academy Inc", value: "Loraines Academy Inc" },
//   {
//     label: "Luther Rice University & Seminary",
//     value: "Luther Rice University & Seminary"
//   },
//   {
//     label: "State College of Florida-Manatee-Sarasota",
//     value: "State College of Florida-Manatee-Sarasota"
//   },
//   {
//     label: "Manatee Technical Institute",
//     value: "Manatee Technical Institute"
//   },
//   {
//     label: "Manhattan Hairstyling Academy",
//     value: "Manhattan Hairstyling Academy"
//   },
//   { label: "Traviss Career Center", value: "Traviss Career Center" },
//   {
//     label: "Trinity International University-Florida",
//     value: "Trinity International University-Florida"
//   },
//   {
//     label: "Miami Lakes Educational Center",
//     value: "Miami Lakes Educational Center"
//   },
//   { label: "Miami Dade College", value: "Miami Dade College" },
//   { label: "University of Miami", value: "University of Miami" },
//   { label: "Mid Florida Tech", value: "Mid Florida Tech" },
//   {
//     label: "Beauty Schools of America-Miami",
//     value: "Beauty Schools of America-Miami"
//   },
//   {
//     label: "Remington College-Tampa Campus",
//     value: "Remington College-Tampa Campus"
//   },
//   {
//     label: "Everest Institute-North Miami",
//     value: "Everest Institute-North Miami"
//   },
//   {
//     label: "Everest Institute-Hialeah",
//     value: "Everest Institute-Hialeah"
//   },
//   {
//     label: "Academy of Healing Arts Massage & Facial Skin Care",
//     value: "Academy of Healing Arts Massage & Facial Skin Care"
//   },
//   {
//     label: "Lincoln College of Technology-West Palm Beach",
//     value: "Lincoln College of Technology-West Palm Beach"
//   },
//   { label: "Fortis College-Tampa", value: "Fortis College-Tampa" },
//   {
//     label: "Paul Mitchell the School-Jacksonville",
//     value: "Paul Mitchell the School-Jacksonville"
//   },
//   {
//     label: "North Florida Community College",
//     value: "North Florida Community College"
//   },
//   {
//     label: "University of North Florida",
//     value: "University of North Florida"
//   },
//   {
//     label: "Northwood University-Florida",
//     value: "Northwood University-Florida"
//   },
//   {
//     label: "Nova Southeastern University",
//     value: "Nova Southeastern University"
//   },
//   {
//     label: "Northwest Florida State College",
//     value: "Northwest Florida State College"
//   },
//   {
//     label: "Orange Park International School of Beauty",
//     value: "Orange Park International School of Beauty"
//   },
//   {
//     label: "Everest University-North Orlando",
//     value: "Everest University-North Orlando"
//   },
//   { label: "Orlando Tech", value: "Orlando Tech" },
//   {
//     label: "Palm Beach Atlantic University",
//     value: "Palm Beach Atlantic University"
//   },
//   { label: "Palm Beach State College", value: "Palm Beach State College" },
//   {
//     label: "Pasco-Hernando Community College",
//     value: "Pasco-Hernando Community College"
//   },
//   { label: "Pensacola State College", value: "Pensacola State College" },
//   {
//     label: "Pinellas Technical Education Center-Clearwater",
//     value: "Pinellas Technical Education Center-Clearwater"
//   },
//   { label: "Polk State College", value: "Polk State College" },
//   {
//     label: "Radford M Locklin Technical Center",
//     value: "Radford M Locklin Technical Center"
//   },
//   {
//     label: "Saint Vincent de Paul Regional Seminary",
//     value: "Saint Vincent de Paul Regional Seminary"
//   },
//   { label: "Ridge Career Center", value: "Ridge Career Center" },
//   {
//     label: "Ringling College of Art and Design",
//     value: "Ringling College of Art and Design"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Jacksonville",
//     value: "Toni & Guy Hairdressing Academy-Jacksonville"
//   },
//   {
//     label: "Robert Morgan Educational Center",
//     value: "Robert Morgan Educational Center"
//   },
//   { label: "Rollins College", value: "Rollins College" },
//   {
//     label: "First Coast Technical College",
//     value: "First Coast Technical College"
//   },
//   { label: "Saint Leo University", value: "Saint Leo University" },
//   { label: "St Petersburg College", value: "St Petersburg College" },
//   {
//     label: "Pinellas Technical Education Center-St Petersburg",
//     value: "Pinellas Technical Education Center-St Petersburg"
//   },
//   { label: "Santa Fe College", value: "Santa Fe College" },
//   {
//     label: "Sarasota County Technical Institute",
//     value: "Sarasota County Technical Institute"
//   },
//   {
//     label: "Argosy University-Sarasota",
//     value: "Argosy University-Sarasota"
//   },
//   {
//     label: "Seminole State College of Florida",
//     value: "Seminole State College of Florida"
//   },
//   {
//     label: "Sheridan Technical Center",
//     value: "Sheridan Technical Center"
//   },
//   {
//     label: "Saint John Vianney College Seminary",
//     value: "Saint John Vianney College Seminary"
//   },
//   {
//     label: "Saint Johns River State College",
//     value: "Saint Johns River State College"
//   },
//   {
//     label: "South Florida State College",
//     value: "South Florida State College"
//   },
//   {
//     label: "University of South Florida-Main Campus",
//     value: "University of South Florida-Main Campus"
//   },
//   { label: "St Thomas University", value: "St Thomas University" },
//   {
//     label: "Stenotype Institute of Jacksonville Inc-Jacksonville",
//     value: "Stenotype Institute of Jacksonville Inc-Jacksonville"
//   },
//   { label: "Stetson University", value: "Stetson University" },
//   { label: "Southeastern University", value: "Southeastern University" },
//   {
//     label: "Benes International School of Beauty",
//     value: "Benes International School of Beauty"
//   },
//   {
//     label: "Suwannee-Hamilton Technical Center",
//     value: "Suwannee-Hamilton Technical Center"
//   },
//   {
//     label: "Tallahassee Community College",
//     value: "Tallahassee Community College"
//   },
//   {
//     label: "Talmudic College of Florida",
//     value: "Talmudic College of Florida"
//   },
//   { label: "Everest University-Tampa", value: "Everest University-Tampa" },
//   { label: "Everest University-Largo", value: "Everest University-Largo" },
//   { label: "The University of Tampa", value: "The University of Tampa" },
//   {
//     label: "Taylor Technical Institute",
//     value: "Taylor Technical Institute"
//   },
//   {
//     label: "Tom P Haney Technical Center",
//     value: "Tom P Haney Technical Center"
//   },
//   { label: "Trinity Baptist College", value: "Trinity Baptist College" },
//   {
//     label: "Trinity College of Florida",
//     value: "Trinity College of Florida"
//   },
//   {
//     label: "Fashion Focus Hair Academy",
//     value: "Fashion Focus Hair Academy"
//   },
//   { label: "Valencia College", value: "Valencia College" },
//   { label: "Warner University", value: "Warner University" },
//   {
//     label: "Washington-Holmes Technical Center",
//     value: "Washington-Holmes Technical Center"
//   },
//   {
//     label: "Webber International University",
//     value: "Webber International University"
//   },
//   {
//     label: "Rasmussen College-Florida",
//     value: "Rasmussen College-Florida"
//   },
//   {
//     label: "The University of West Florida",
//     value: "The University of West Florida"
//   },
//   { label: "Westside Tech", value: "Westside Tech" },
//   {
//     label: "William T McFatter Technical Center",
//     value: "William T McFatter Technical Center"
//   },
//   { label: "Winter Park Tech", value: "Winter Park Tech" },
//   {
//     label: "Withlacoochee Technical Institute",
//     value: "Withlacoochee Technical Institute"
//   },
//   {
//     label: "Abraham Baldwin Agricultural College",
//     value: "Abraham Baldwin Agricultural College"
//   },
//   { label: "Agnes Scott College", value: "Agnes Scott College" },
//   {
//     label: "Interactive College of Technology-Chamblee",
//     value: "Interactive College of Technology-Chamblee"
//   },
//   {
//     label: "Interactive College of Technology-Morrow",
//     value: "Interactive College of Technology-Morrow"
//   },
//   { label: "Albany Technical College", value: "Albany Technical College" },
//   { label: "Darton State College", value: "Darton State College" },
//   { label: "Albany State University", value: "Albany State University" },
//   { label: "Andrew College", value: "Andrew College" },
//   {
//     label: "Armstrong Atlantic State University",
//     value: "Armstrong Atlantic State University"
//   },
//   {
//     label: "The Art Institute of Atlanta",
//     value: "The Art Institute of Atlanta"
//   },
//   { label: "Georgia Career Institute", value: "Georgia Career Institute" },
//   {
//     label: "Atlanta Technical College",
//     value: "Atlanta Technical College"
//   },
//   { label: "Point University", value: "Point University" },
//   {
//     label: "Atlanta Metropolitan State College",
//     value: "Atlanta Metropolitan State College"
//   },
//   {
//     label: "Atlanta's John Marshall Law School",
//     value: "Atlanta's John Marshall Law School"
//   },
//   {
//     label: "Atlanta School of Massage",
//     value: "Atlanta School of Massage"
//   },
//   { label: "Clark Atlanta University", value: "Clark Atlanta University" },
//   {
//     label: "Augusta Technical College",
//     value: "Augusta Technical College"
//   },
//   { label: "Augusta State University", value: "Augusta State University" },
//   { label: "Bainbridge State College", value: "Bainbridge State College" },
//   { label: "Bauder College", value: "Bauder College" },
//   {
//     label: "Beauty College of America",
//     value: "Beauty College of America"
//   },
//   { label: "Berry College", value: "Berry College" },
//   {
//     label: "Beulah Heights University",
//     value: "Beulah Heights University"
//   },
//   { label: "Brenau University", value: "Brenau University" },
//   { label: "Brewton-Parker College", value: "Brewton-Parker College" },
//   {
//     label: "Brown College of Court Reporting",
//     value: "Brown College of Court Reporting"
//   },
//   {
//     label: "College of Coastal Georgia",
//     value: "College of Coastal Georgia"
//   },
//   {
//     label: "West Georgia Technical College",
//     value: "West Georgia Technical College"
//   },
//   { label: "Carver Bible College", value: "Carver Bible College" },
//   {
//     label: "Clayton  State University",
//     value: "Clayton  State University"
//   },
//   {
//     label: "Columbia Theological Seminary",
//     value: "Columbia Theological Seminary"
//   },
//   {
//     label: "Columbus Technical College",
//     value: "Columbus Technical College"
//   },
//   {
//     label: "Columbus State University",
//     value: "Columbus State University"
//   },
//   {
//     label: "Georgia Northwestern Technical College",
//     value: "Georgia Northwestern Technical College"
//   },
//   { label: "Covenant College", value: "Covenant College" },
//   { label: "Dalton State College", value: "Dalton State College" },
//   { label: "Pro Way Hair School", value: "Pro Way Hair School" },
//   { label: "DeVry University-Georgia", value: "DeVry University-Georgia" },
//   {
//     label: "South University-Savannah",
//     value: "South University-Savannah"
//   },
//   {
//     label: "East Georgia State College",
//     value: "East Georgia State College"
//   },
//   { label: "Emmanuel College", value: "Emmanuel College" },
//   { label: "Emory University", value: "Emory University" },
//   {
//     label: "Georgia Highlands College",
//     value: "Georgia Highlands College"
//   },
//   {
//     label: "Fort Valley State University",
//     value: "Fort Valley State University"
//   },
//   {
//     label: "Grady Health System Professional Schools",
//     value: "Grady Health System Professional Schools"
//   },
//   {
//     label: "Georgia Institute of Technology-Main Campus",
//     value: "Georgia Institute of Technology-Main Campus"
//   },
//   {
//     label: "Georgia Southwestern State University",
//     value: "Georgia Southwestern State University"
//   },
//   {
//     label: "Gainesville State College",
//     value: "Gainesville State College"
//   },
//   {
//     label: "Georgia College and State University",
//     value: "Georgia College and State University"
//   },
//   { label: "Georgia Military College", value: "Georgia Military College" },
//   {
//     label: "Georgia Southern University",
//     value: "Georgia Southern University"
//   },
//   { label: "Georgia State University", value: "Georgia State University" },
//   { label: "University of Georgia", value: "University of Georgia" },
//   { label: "Gordon State College", value: "Gordon State College" },
//   {
//     label: "Southern Crescent Technical College",
//     value: "Southern Crescent Technical College"
//   },
//   {
//     label: "Gupton Jones College of Funeral Service",
//     value: "Gupton Jones College of Funeral Service"
//   },
//   { label: "Gwinnett College-Lilburn", value: "Gwinnett College-Lilburn" },
//   {
//     label: "Gwinnett Technical College",
//     value: "Gwinnett Technical College"
//   },
//   {
//     label: "Middle Georgia Technical College",
//     value: "Middle Georgia Technical College"
//   },
//   {
//     label: "Interdenominational Theological Center",
//     value: "Interdenominational Theological Center"
//   },
//   {
//     label: "Kennesaw State University",
//     value: "Kennesaw State University"
//   },
//   { label: "LaGrange College", value: "LaGrange College" },
//   { label: "Lanier Technical College", value: "Lanier Technical College" },
//   { label: "Life University", value: "Life University" },
//   {
//     label: "Central Georgia Technical College",
//     value: "Central Georgia Technical College"
//   },
//   { label: "Macon State College", value: "Macon State College" },
//   {
//     label: "Chattahoochee Technical College",
//     value: "Chattahoochee Technical College"
//   },
//   {
//     label: "Herzing University-Atlanta",
//     value: "Herzing University-Atlanta"
//   },
//   {
//     label: "Georgia Health Sciences University",
//     value: "Georgia Health Sciences University"
//   },
//   { label: "Mercer University", value: "Mercer University" },
//   { label: "Middle Georgia College", value: "Middle Georgia College" },
//   { label: "Morehouse College", value: "Morehouse College" },
//   {
//     label: "Morehouse School of Medicine",
//     value: "Morehouse School of Medicine"
//   },
//   {
//     label: "Moultrie Technical College",
//     value: "Moultrie Technical College"
//   },
//   {
//     label: "University of North Georgia",
//     value: "University of North Georgia"
//   },
//   {
//     label: "North Georgia Technical College",
//     value: "North Georgia Technical College"
//   },
//   { label: "Oglethorpe University", value: "Oglethorpe University" },
//   { label: "Paine College", value: "Paine College" },
//   { label: "Piedmont College", value: "Piedmont College" },
//   { label: "Portfolio Center", value: "Portfolio Center" },
//   { label: "Reinhardt University", value: "Reinhardt University" },
//   {
//     label: "Savannah Technical College",
//     value: "Savannah Technical College"
//   },
//   {
//     label: "Savannah College of Art and Design",
//     value: "Savannah College of Art and Design"
//   },
//   {
//     label: "Savannah State University",
//     value: "Savannah State University"
//   },
//   { label: "Shorter University", value: "Shorter University" },
//   { label: "South Georgia College", value: "South Georgia College" },
//   {
//     label: "South Georgia Technical College",
//     value: "South Georgia Technical College"
//   },
//   { label: "The Creative Circus", value: "The Creative Circus" },
//   { label: "Spelman College", value: "Spelman College" },
//   {
//     label: "Southern Polytechnic State University",
//     value: "Southern Polytechnic State University"
//   },
//   {
//     label: "Southwest Georgia Technical College",
//     value: "Southwest Georgia Technical College"
//   },
//   { label: "Thomas University", value: "Thomas University" },
//   { label: "Toccoa Falls College", value: "Toccoa Falls College" },
//   { label: "Truett-McConnell College", value: "Truett-McConnell College" },
//   {
//     label: "Wiregrass Georgia Technical College",
//     value: "Wiregrass Georgia Technical College"
//   },
//   {
//     label: "Valdosta State University",
//     value: "Valdosta State University"
//   },
//   { label: "Waycross College", value: "Waycross College" },
//   { label: "Wesleyan College", value: "Wesleyan College" },
//   {
//     label: "University of West Georgia",
//     value: "University of West Georgia"
//   },
//   { label: "Young Harris College", value: "Young Harris College" },
//   { label: "Heald College-Honolulu", value: "Heald College-Honolulu" },
//   {
//     label: "Chaminade University of Honolulu",
//     value: "Chaminade University of Honolulu"
//   },
//   {
//     label: "University of Hawaii at Hilo",
//     value: "University of Hawaii at Hilo"
//   },
//   {
//     label: "University of Hawaii at Manoa",
//     value: "University of Hawaii at Manoa"
//   },
//   {
//     label: "Hawaii Institute of Hair Design",
//     value: "Hawaii Institute of Hair Design"
//   },
//   {
//     label: "Hawaii Pacific University",
//     value: "Hawaii Pacific University"
//   },
//   {
//     label: "Honolulu Community College",
//     value: "Honolulu Community College"
//   },
//   {
//     label: "Kapiolani Community College",
//     value: "Kapiolani Community College"
//   },
//   { label: "Kauai Community College", value: "Kauai Community College" },
//   {
//     label: "Leeward Community College",
//     value: "Leeward Community College"
//   },
//   {
//     label: "University of Hawaii Maui College",
//     value: "University of Hawaii Maui College"
//   },
//   {
//     label: "Med-Assist School of Hawaii Inc",
//     value: "Med-Assist School of Hawaii Inc"
//   },
//   { label: "World Medicine Institute", value: "World Medicine Institute" },
//   {
//     label: "Travel Institute of the Pacific",
//     value: "Travel Institute of the Pacific"
//   },
//   {
//     label: "University of Hawaii System Office",
//     value: "University of Hawaii System Office"
//   },
//   {
//     label: "University of Hawaii-West Oahu",
//     value: "University of Hawaii-West Oahu"
//   },
//   {
//     label: "Windward Community College",
//     value: "Windward Community College"
//   },
//   { label: "Carrington College-Boise", value: "Carrington College-Boise" },
//   { label: "Boise Bible College", value: "Boise Bible College" },
//   { label: "Boise State University", value: "Boise State University" },
//   {
//     label: "Eastern Idaho Technical College",
//     value: "Eastern Idaho Technical College"
//   },
//   { label: "Idaho State University", value: "Idaho State University" },
//   { label: "University of Idaho", value: "University of Idaho" },
//   { label: "The College of Idaho", value: "The College of Idaho" },
//   {
//     label: "Lewis-Clark State College",
//     value: "Lewis-Clark State College"
//   },
//   {
//     label: "ITT Technical Institute-Boise",
//     value: "ITT Technical Institute-Boise"
//   },
//   {
//     label: "Joseph Charles Institute of Cosmetology",
//     value: "Joseph Charles Institute of Cosmetology"
//   },
//   {
//     label: "Mr Leon's School of Hair Design-Moscow",
//     value: "Mr Leon's School of Hair Design-Moscow"
//   },
//   { label: "North Idaho College", value: "North Idaho College" },
//   {
//     label: "Northwest Nazarene University",
//     value: "Northwest Nazarene University"
//   },
//   {
//     label: "The School of Hairstyling",
//     value: "The School of Hairstyling"
//   },
//   {
//     label: "Brigham Young University-Idaho",
//     value: "Brigham Young University-Idaho"
//   },
//   {
//     label: "College of Southern Idaho",
//     value: "College of Southern Idaho"
//   },
//   {
//     label: "Adler School of Professional Psychology",
//     value: "Adler School of Professional Psychology"
//   },
//   {
//     label: "Alvareitas College of Cosmetology-Edwardsville",
//     value: "Alvareitas College of Cosmetology-Edwardsville"
//   },
//   {
//     label: "Alvareitas College of Cosmetology-Godfrey",
//     value: "Alvareitas College of Cosmetology-Godfrey"
//   },
//   { label: "American Academy of Art", value: "American Academy of Art" },
//   {
//     label: "School of the Art Institute of Chicago",
//     value: "School of the Art Institute of Chicago"
//   },
//   {
//     label: "The College of Office Technology",
//     value: "The College of Office Technology"
//   },
//   { label: "Augustana College", value: "Augustana College" },
//   { label: "Aurora University", value: "Aurora University" },
//   {
//     label: "Concept College of Cosmetology",
//     value: "Concept College of Cosmetology"
//   },
//   {
//     label: "Southwestern Illinois College",
//     value: "Southwestern Illinois College"
//   },
//   {
//     label: "Bethany Theological Seminary",
//     value: "Bethany Theological Seminary"
//   },
//   { label: "Black Hawk College", value: "Black Hawk College" },
//   { label: "Blackburn College", value: "Blackburn College" },
//   {
//     label: "Blessing Rieman College of Nursing",
//     value: "Blessing Rieman College of Nursing"
//   },
//   {
//     label: "Blessing Hospital School of Radiologic Technology",
//     value: "Blessing Hospital School of Radiologic Technology"
//   },
//   { label: "Bradley University", value: "Bradley University" },
//   {
//     label: "Paul Mitchell the School-Bradley",
//     value: "Paul Mitchell the School-Bradley"
//   },
//   { label: "Cameo Beauty Academy", value: "Cameo Beauty Academy" },
//   {
//     label: "Cannella School of Hair Design-Villa Park",
//     value: "Cannella School of Hair Design-Villa Park"
//   },
//   {
//     label: "Cannella School of Hair Design-Chicago",
//     value: "Cannella School of Hair Design-Chicago"
//   },
//   {
//     label: "Cannella School of Hair Design-Chicago",
//     value: "Cannella School of Hair Design-Chicago"
//   },
//   {
//     label: "Cannella School of Hair Design-Elgin",
//     value: "Cannella School of Hair Design-Elgin"
//   },
//   { label: "Capri Beauty College", value: "Capri Beauty College" },
//   {
//     label: "Empire Beauty School-Hanover Park",
//     value: "Empire Beauty School-Hanover Park"
//   },
//   { label: "Capri Beauty College", value: "Capri Beauty College" },
//   { label: "Carl Sandburg College", value: "Carl Sandburg College" },
//   {
//     label: "Catholic Theological Union at Chicago",
//     value: "Catholic Theological Union at Chicago"
//   },
//   {
//     label: "La James International College-East Moline",
//     value: "La James International College-East Moline"
//   },
//   {
//     label: "Midwestern University-Downers Grove",
//     value: "Midwestern University-Downers Grove"
//   },
//   {
//     label: "The Chicago School of Professional Psychology at Chicago",
//     value: "The Chicago School of Professional Psychology at Chicago"
//   },
//   { label: "Chicago State University", value: "Chicago State University" },
//   {
//     label: "Chicago Theological Seminary",
//     value: "Chicago Theological Seminary"
//   },
//   { label: "University of Chicago", value: "University of Chicago" },
//   {
//     label: "City Colleges of Chicago-Kennedy-King College",
//     value: "City Colleges of Chicago-Kennedy-King College"
//   },
//   {
//     label: "City Colleges of Chicago-Malcolm X College",
//     value: "City Colleges of Chicago-Malcolm X College"
//   },
//   {
//     label: "City Colleges of Chicago-Olive-Harvey College",
//     value: "City Colleges of Chicago-Olive-Harvey College"
//   },
//   {
//     label: "City Colleges of Chicago-Harry S Truman College",
//     value: "City Colleges of Chicago-Harry S Truman College"
//   },
//   {
//     label: "City Colleges of Chicago-Richard J Daley College",
//     value: "City Colleges of Chicago-Richard J Daley College"
//   },
//   {
//     label: "City Colleges of Chicago-Harold Washington College",
//     value: "City Colleges of Chicago-Harold Washington College"
//   },
//   {
//     label: "City Colleges of Chicago-Wilbur Wright College",
//     value: "City Colleges of Chicago-Wilbur Wright College"
//   },
//   { label: "Columbia College-Chicago", value: "Columbia College-Chicago" },
//   {
//     label: "Concordia University-Chicago",
//     value: "Concordia University-Chicago"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Chicago",
//     value: "Le Cordon Bleu College of Culinary Arts-Chicago"
//   },
//   { label: "Coyne College", value: "Coyne College" },
//   {
//     label: "City Colleges of Chicago-District Office",
//     value: "City Colleges of Chicago-District Office"
//   },
//   {
//     label: "Danville Area Community College",
//     value: "Danville Area Community College"
//   },
//   {
//     label: "Concept College of Cosmetology",
//     value: "Concept College of Cosmetology"
//   },
//   { label: "DePaul University", value: "DePaul University" },
//   {
//     label: "DeVry University-Illinois",
//     value: "DeVry University-Illinois"
//   },
//   {
//     label: "DeVry University-Administrative Office",
//     value: "DeVry University-Administrative Office"
//   },
//   {
//     label: "Cosmetology & Spa Academy",
//     value: "Cosmetology & Spa Academy"
//   },
//   { label: "College of DuPage", value: "College of DuPage" },
//   { label: "East-West University", value: "East-West University" },
//   {
//     label: "Eastern Illinois University",
//     value: "Eastern Illinois University"
//   },
//   { label: "Elgin Community College", value: "Elgin Community College" },
//   { label: "Elmhurst College", value: "Elmhurst College" },
//   { label: "Eureka College", value: "Eureka College" },
//   { label: "First Institute Inc", value: "First Institute Inc" },
//   { label: "Fox College", value: "Fox College" },
//   {
//     label: "Garrett-Evangelical Theological Seminary",
//     value: "Garrett-Evangelical Theological Seminary"
//   },
//   { label: "Gem City College", value: "Gem City College" },
//   {
//     label: "Governors State University",
//     value: "Governors State University"
//   },
//   {
//     label: "Graham Hospital School of Nursing",
//     value: "Graham Hospital School of Nursing"
//   },
//   { label: "Greenville College", value: "Greenville College" },
//   {
//     label: "Hair Professionals Academy of Cosmetology",
//     value: "Hair Professionals Academy of Cosmetology"
//   },
//   {
//     label: "Hair Professionals Career College",
//     value: "Hair Professionals Career College"
//   },
//   {
//     label: "Hair Professionals School of Cosmetology",
//     value: "Hair Professionals School of Cosmetology"
//   },
//   {
//     label: "Harrington College of Design",
//     value: "Harrington College of Design"
//   },
//   {
//     label: "Hebrew Theological College",
//     value: "Hebrew Theological College"
//   },
//   {
//     label: "Highland Community College",
//     value: "Highland Community College"
//   },
//   {
//     label: "Rosalind Franklin University of Medicine and Science",
//     value: "Rosalind Franklin University of Medicine and Science"
//   },
//   {
//     label: "University of Illinois at Chicago",
//     value: "University of Illinois at Chicago"
//   },
//   { label: "Benedictine University", value: "Benedictine University" },
//   {
//     label: "Illinois College of Optometry",
//     value: "Illinois College of Optometry"
//   },
//   {
//     label: "University of Illinois at Urbana-Champaign",
//     value: "University of Illinois at Urbana-Champaign"
//   },
//   {
//     label: "Illinois Wesleyan University",
//     value: "Illinois Wesleyan University"
//   },
//   { label: "Illinois Central College", value: "Illinois Central College" },
//   { label: "Illinois College", value: "Illinois College" },
//   { label: "Olney Central College", value: "Olney Central College" },
//   {
//     label: "Illinois Institute of Technology",
//     value: "Illinois Institute of Technology"
//   },
//   {
//     label: "Argosy University-Chicago",
//     value: "Argosy University-Chicago"
//   },
//   {
//     label: "Illinois State University",
//     value: "Illinois State University"
//   },
//   {
//     label: "Illinois Valley Community College",
//     value: "Illinois Valley Community College"
//   },
//   {
//     label: "Institute for Clinical Social Work",
//     value: "Institute for Clinical Social Work"
//   },
//   {
//     label: "International Academy of Design and Technology-Chicago",
//     value: "International Academy of Design and Technology-Chicago"
//   },
//   { label: "John A Logan College", value: "John A Logan College" },
//   {
//     label: "The John Marshall Law School",
//     value: "The John Marshall Law School"
//   },
//   {
//     label: "John Wood Community College",
//     value: "John Wood Community College"
//   },
//   { label: "Joliet Junior College", value: "Joliet Junior College" },
//   { label: "Judson University", value: "Judson University" },
//   {
//     label: "Kankakee Community College",
//     value: "Kankakee Community College"
//   },
//   { label: "Kaskaskia College", value: "Kaskaskia College" },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Illinois",
//     value: "DeVry University's Keller Graduate School of Management-Illinois"
//   },
//   { label: "Kendall College", value: "Kendall College" },
//   { label: "Kishwaukee College", value: "Kishwaukee College" },
//   { label: "Knox College", value: "Knox College" },
//   {
//     label: "Educators of Beauty College of Cosmetology-La Salle",
//     value: "Educators of Beauty College of Cosmetology-La Salle"
//   },
//   { label: "College of Lake County", value: "College of Lake County" },
//   { label: "Lake Forest College", value: "Lake Forest College" },
//   {
//     label: "Lake Forest Graduate School of Management",
//     value: "Lake Forest Graduate School of Management"
//   },
//   { label: "Lake Land College", value: "Lake Land College" },
//   {
//     label: "Lakeview College of Nursing",
//     value: "Lakeview College of Nursing"
//   },
//   {
//     label: "Lewis and Clark Community College",
//     value: "Lewis and Clark Community College"
//   },
//   { label: "Lewis University", value: "Lewis University" },
//   { label: "Lexington College", value: "Lexington College" },
//   {
//     label: "Lincoln Christian University",
//     value: "Lincoln Christian University"
//   },
//   { label: "Lincoln College", value: "Lincoln College" },
//   {
//     label: "Lincoln Land Community College",
//     value: "Lincoln Land Community College"
//   },
//   {
//     label: "Lincoln College of Technology-Melrose Park",
//     value: "Lincoln College of Technology-Melrose Park"
//   },
//   {
//     label: "Loyola University Chicago",
//     value: "Loyola University Chicago"
//   },
//   {
//     label: "Lutheran School of Theology at Chicago",
//     value: "Lutheran School of Theology at Chicago"
//   },
//   {
//     label: "Trinity College of Nursing & Health Sciences",
//     value: "Trinity College of Nursing & Health Sciences"
//   },
//   { label: "CET-Chicago", value: "CET-Chicago" },
//   {
//     label: "Mac Daniels Beauty School",
//     value: "Mac Daniels Beauty School"
//   },
//   { label: "MacCormac College", value: "MacCormac College" },
//   { label: "MacMurray College", value: "MacMurray College" },
//   {
//     label: "McCormick Theological Seminary",
//     value: "McCormick Theological Seminary"
//   },
//   { label: "McHenry County College", value: "McHenry County College" },
//   { label: "McKendree University", value: "McKendree University" },
//   {
//     label: "Meadville Lombard Theological School",
//     value: "Meadville Lombard Theological School"
//   },
//   { label: "Methodist College", value: "Methodist College" },
//   { label: "Midstate College", value: "Midstate College" },
//   { label: "Millikin University", value: "Millikin University" },
//   { label: "Monmouth College", value: "Monmouth College" },
//   { label: "Moody Bible Institute", value: "Moody Bible Institute" },
//   {
//     label: "Moraine Valley Community College",
//     value: "Moraine Valley Community College"
//   },
//   {
//     label: "Morrison Institute of Technology",
//     value: "Morrison Institute of Technology"
//   },
//   { label: "Morton College", value: "Morton College" },
//   {
//     label: "Mr John's School of Cosmetology Esthetics & Nails-Decatur",
//     value: "Mr John's School of Cosmetology Esthetics & Nails-Decatur"
//   },
//   {
//     label: "National Louis University",
//     value: "National Louis University"
//   },
//   {
//     label: "National University of Health Sciences",
//     value: "National University of Health Sciences"
//   },
//   {
//     label: "Niles School of Cosmetology",
//     value: "Niles School of Cosmetology"
//   },
//   { label: "North Central College", value: "North Central College" },
//   { label: "North Park University", value: "North Park University" },
//   {
//     label: "Northern Baptist Theological Seminary",
//     value: "Northern Baptist Theological Seminary"
//   },
//   {
//     label: "Northern Illinois University",
//     value: "Northern Illinois University"
//   },
//   {
//     label: "Northwestern College-Chicago Campus",
//     value: "Northwestern College-Chicago Campus"
//   },
//   { label: "Northwestern University", value: "Northwestern University" },
//   {
//     label: "Northeastern Illinois University",
//     value: "Northeastern Illinois University"
//   },
//   { label: "Oakton Community College", value: "Oakton Community College" },
//   {
//     label: "Oehrlein School of Cosmetology",
//     value: "Oehrlein School of Cosmetology"
//   },
//   {
//     label: "Olivet Nazarene University",
//     value: "Olivet Nazarene University"
//   },
//   { label: "Parkland College", value: "Parkland College" },
//   {
//     label: "Pivot Point Academy-Evanston",
//     value: "Pivot Point Academy-Evanston"
//   },
//   { label: "Prairie State College", value: "Prairie State College" },
//   { label: "Principia College", value: "Principia College" },
//   {
//     label: "Professional's Choice Hair Design Academy",
//     value: "Professional's Choice Hair Design Academy"
//   },
//   { label: "Quincy University", value: "Quincy University" },
//   { label: "Vatterott College-Quincy", value: "Vatterott College-Quincy" },
//   {
//     label: "The Illinois Institute of Art-Chicago",
//     value: "The Illinois Institute of Art-Chicago"
//   },
//   { label: "Rend Lake College", value: "Rend Lake College" },
//   {
//     label: "Richland Community College",
//     value: "Richland Community College"
//   },
//   {
//     label: "Robert Morris University Illinois",
//     value: "Robert Morris University Illinois"
//   },
//   { label: "Rock Valley College", value: "Rock Valley College" },
//   {
//     label: "Madison Media Institute - Rockford Career College",
//     value: "Madison Media Institute - Rockford Career College"
//   },
//   { label: "Rockford University", value: "Rockford University" },
//   { label: "Roosevelt University", value: "Roosevelt University" },
//   { label: "Dominican University", value: "Dominican University" },
//   { label: "Rush University", value: "Rush University" },
//   {
//     label: "Saint Francis Medical Center College of Nursing",
//     value: "Saint Francis Medical Center College of Nursing"
//   },
//   { label: "University of St Francis", value: "University of St Francis" },
//   {
//     label: "St John's College of Nursing",
//     value: "St John's College of Nursing"
//   },
//   { label: "Saint Xavier University", value: "Saint Xavier University" },
//   {
//     label: "University of Illinois at Springfield",
//     value: "University of Illinois at Springfield"
//   },
//   {
//     label: "Sauk Valley Community College",
//     value: "Sauk Valley Community College"
//   },
//   {
//     label: "Seabury-Western Theological Seminary",
//     value: "Seabury-Western Theological Seminary"
//   },
//   {
//     label: "Shawnee Community College",
//     value: "Shawnee Community College"
//   },
//   { label: "Shimer College", value: "Shimer College" },
//   { label: "Saint Augustine College", value: "Saint Augustine College" },
//   {
//     label: "University of Saint Mary of the Lake",
//     value: "University of Saint Mary of the Lake"
//   },
//   {
//     label: "Southeastern Illinois College",
//     value: "Southeastern Illinois College"
//   },
//   {
//     label: "National Latino Education Institute",
//     value: "National Latino Education Institute"
//   },
//   { label: "Spertus College", value: "Spertus College" },
//   { label: "Spoon River College", value: "Spoon River College" },
//   {
//     label: "Saint Anthony College of Nursing",
//     value: "Saint Anthony College of Nursing"
//   },
//   {
//     label: "Educators of Beauty College of Cosmetology-Sterling",
//     value: "Educators of Beauty College of Cosmetology-Sterling"
//   },
//   {
//     label: "Southern Illinois University-Carbondale",
//     value: "Southern Illinois University-Carbondale"
//   },
//   {
//     label: "Southern Illinois University-Edwardsville",
//     value: "Southern Illinois University-Edwardsville"
//   },
//   {
//     label: "Southern Illinois University-System Office",
//     value: "Southern Illinois University-System Office"
//   },
//   {
//     label: "Taylor Business Institute",
//     value: "Taylor Business Institute"
//   },
//   { label: "Telshe Yeshiva-Chicago", value: "Telshe Yeshiva-Chicago" },
//   { label: "South Suburban College", value: "South Suburban College" },
//   {
//     label: "Tri-County Beauty Academy",
//     value: "Tri-County Beauty Academy"
//   },
//   {
//     label: "Trinity Christian College",
//     value: "Trinity Christian College"
//   },
//   {
//     label: "Trinity International University-Illinois",
//     value: "Trinity International University-Illinois"
//   },
//   { label: "Triton College", value: "Triton College" },
//   {
//     label: "University of Spa & Cosmetology Arts",
//     value: "University of Spa & Cosmetology Arts"
//   },
//   {
//     label: "University of Illinois University Administration",
//     value: "University of Illinois University Administration"
//   },
//   {
//     label: "VanderCook College of Music",
//     value: "VanderCook College of Music"
//   },
//   {
//     label: "Waubonsee Community College",
//     value: "Waubonsee Community College"
//   },
//   { label: "Resurrection University", value: "Resurrection University" },
//   {
//     label: "Western Illinois University",
//     value: "Western Illinois University"
//   },
//   { label: "Wheaton College", value: "Wheaton College" },
//   { label: "Harper College", value: "Harper College" },
//   { label: "Ancilla College", value: "Ancilla College" },
//   { label: "Anderson University", value: "Anderson University" },
//   {
//     label: "Apex Academy of Hair Design Inc",
//     value: "Apex Academy of Hair Design Inc"
//   },
//   { label: "Ball State University", value: "Ball State University" },
//   { label: "Bethel College-Indiana", value: "Bethel College-Indiana" },
//   { label: "Butler University", value: "Butler University" },
//   {
//     label: "Calumet College of Saint Joseph",
//     value: "Calumet College of Saint Joseph"
//   },
//   {
//     label: "Christian Theological Seminary",
//     value: "Christian Theological Seminary"
//   },
//   {
//     label: "College of Court Reporting Inc",
//     value: "College of Court Reporting Inc"
//   },
//   {
//     label: "Concordia Theological Seminary",
//     value: "Concordia Theological Seminary"
//   },
//   {
//     label: "Tricoci University of Beauty Culture-Highland",
//     value: "Tricoci University of Beauty Culture-Highland"
//   },
//   { label: "DePauw University", value: "DePauw University" },
//   {
//     label: "Don Roberts School of Hair Design",
//     value: "Don Roberts School of Hair Design"
//   },
//   {
//     label: "Don Roberts Beauty School",
//     value: "Don Roberts Beauty School"
//   },
//   { label: "Earlham College", value: "Earlham College" },
//   { label: "University of Evansville", value: "University of Evansville" },
//   { label: "Franklin College", value: "Franklin College" },
//   {
//     label: "Good Samaritan Hospital School of Radiologic Technology",
//     value: "Good Samaritan Hospital School of Radiologic Technology"
//   },
//   { label: "Goshen College", value: "Goshen College" },
//   {
//     label: "Grace College and Theological Seminary",
//     value: "Grace College and Theological Seminary"
//   },
//   {
//     label: "Hair Fashions By Kaye Beauty College-Noblesville",
//     value: "Hair Fashions By Kaye Beauty College-Noblesville"
//   },
//   {
//     label: "Hair Fashions By Kaye Beauty College-Indianapolis",
//     value: "Hair Fashions By Kaye Beauty College-Indianapolis"
//   },
//   { label: "Hanover College", value: "Hanover College" },
//   {
//     label: "J Michael Harrold Beauty Academy",
//     value: "J Michael Harrold Beauty Academy"
//   },
//   { label: "Holy Cross College", value: "Holy Cross College" },
//   {
//     label: "PJ's College of Cosmetology-Clarksville",
//     value: "PJ's College of Cosmetology-Clarksville"
//   },
//   { label: "Huntington University", value: "Huntington University" },
//   {
//     label: "Ivy Tech Community College",
//     value: "Ivy Tech Community College"
//   },
//   {
//     label: "Indiana University-Purdue University-Fort Wayne",
//     value: "Indiana University-Purdue University-Fort Wayne"
//   },
//   {
//     label: "Indiana University-Purdue University-Indianapolis",
//     value: "Indiana University-Purdue University-Indianapolis"
//   },
//   {
//     label: "Harrison College-Indianapolis",
//     value: "Harrison College-Indianapolis"
//   },
//   {
//     label: "University of Indianapolis",
//     value: "University of Indianapolis"
//   },
//   {
//     label: "Indiana Institute of Technology",
//     value: "Indiana Institute of Technology"
//   },
//   {
//     label: "University of Southern Indiana",
//     value: "University of Southern Indiana"
//   },
//   { label: "Indiana State University", value: "Indiana State University" },
//   {
//     label: "Indiana University-Kokomo",
//     value: "Indiana University-Kokomo"
//   },
//   {
//     label: "Indiana University-South Bend",
//     value: "Indiana University-South Bend"
//   },
//   {
//     label: "Indiana University-Bloomington",
//     value: "Indiana University-Bloomington"
//   },
//   {
//     label: "Indiana University-Northwest",
//     value: "Indiana University-Northwest"
//   },
//   {
//     label: "Indiana University-Southeast",
//     value: "Indiana University-Southeast"
//   },
//   { label: "Indiana University-East", value: "Indiana University-East" },
//   {
//     label: "International Business College-Fort Wayne",
//     value: "International Business College-Fort Wayne"
//   },
//   {
//     label: "International Business College-Indianapolis",
//     value: "International Business College-Indianapolis"
//   },
//   {
//     label: "ITT Educational Services Inc-System Office",
//     value: "ITT Educational Services Inc-System Office"
//   },
//   {
//     label: "ITT Technical Institute-Nashville",
//     value: "ITT Technical Institute-Nashville"
//   },
//   {
//     label: "ITT Technical Institute-Fort Wayne",
//     value: "ITT Technical Institute-Fort Wayne"
//   },
//   {
//     label: "ITT Technical Institute-Indianapolis",
//     value: "ITT Technical Institute-Indianapolis"
//   },
//   {
//     label: "J Everett Light Career Center",
//     value: "J Everett Light Career Center"
//   },
//   { label: "Knox Beauty College", value: "Knox Beauty College" },
//   { label: "Lafayette Beauty Academy", value: "Lafayette Beauty Academy" },
//   {
//     label: "Brown Mackie College-Merrillville",
//     value: "Brown Mackie College-Merrillville"
//   },
//   {
//     label: "Brown Mackie College-Michigan City",
//     value: "Brown Mackie College-Michigan City"
//   },
//   {
//     label: "Empire Beauty School-Indianapolis",
//     value: "Empire Beauty School-Indianapolis"
//   },
//   {
//     label: "Lincoln College of Technology-Indianapolis",
//     value: "Lincoln College of Technology-Indianapolis"
//   },
//   { label: "Manchester University", value: "Manchester University" },
//   { label: "Marian University", value: "Marian University" },
//   {
//     label: "Indiana Wesleyan University",
//     value: "Indiana Wesleyan University"
//   },
//   { label: "Martin University", value: "Martin University" },
//   {
//     label: "Masters of Cosmetology College",
//     value: "Masters of Cosmetology College"
//   },
//   {
//     label: "Anabaptist Mennonite Biblical Seminary",
//     value: "Anabaptist Mennonite Biblical Seminary"
//   },
//   {
//     label: "Merrillville Beauty College",
//     value: "Merrillville Beauty College"
//   },
//   {
//     label: "Brown Mackie College-South Bend",
//     value: "Brown Mackie College-South Bend"
//   },
//   {
//     label: "Mid-America College of Funeral Service",
//     value: "Mid-America College of Funeral Service"
//   },
//   {
//     label: "West Michigan College of Barbering and Beauty",
//     value: "West Michigan College of Barbering and Beauty"
//   },
//   { label: "University of Notre Dame", value: "University of Notre Dame" },
//   { label: "Oakland City University", value: "Oakland City University" },
//   {
//     label: "PJ's College of Cosmetology-Richmond",
//     value: "PJ's College of Cosmetology-Richmond"
//   },
//   {
//     label: "Kaplan College-Indianapolis",
//     value: "Kaplan College-Indianapolis"
//   },
//   {
//     label: "Purdue University-Calumet Campus",
//     value: "Purdue University-Calumet Campus"
//   },
//   {
//     label: "Purdue University-North Central Campus",
//     value: "Purdue University-North Central Campus"
//   },
//   {
//     label: "Ravenscroft Beauty College",
//     value: "Ravenscroft Beauty College"
//   },
//   {
//     label: "Rogers Academy of Hair Design",
//     value: "Rogers Academy of Hair Design"
//   },
//   {
//     label: "Rose-Hulman Institute of Technology",
//     value: "Rose-Hulman Institute of Technology"
//   },
//   {
//     label: "Rudae's School of Beauty Culture-Kokomo",
//     value: "Rudae's School of Beauty Culture-Kokomo"
//   },
//   {
//     label: "University of Saint Francis-Fort Wayne",
//     value: "University of Saint Francis-Fort Wayne"
//   },
//   { label: "Saint Josephs College", value: "Saint Josephs College" },
//   {
//     label: "Saint Mary-of-the-Woods College",
//     value: "Saint Mary-of-the-Woods College"
//   },
//   { label: "Saint Mary's College", value: "Saint Mary's College" },
//   { label: "Kaplan College-Hammond", value: "Kaplan College-Hammond" },
//   {
//     label: "Kaplan College-Merrillville",
//     value: "Kaplan College-Merrillville"
//   },
//   {
//     label: "Saint Meinrad School of Theology",
//     value: "Saint Meinrad School of Theology"
//   },
//   {
//     label: "Saint Elizabeth School of Nursing",
//     value: "Saint Elizabeth School of Nursing"
//   },
//   { label: "Taylor University", value: "Taylor University" },
//   { label: "Trine University", value: "Trine University" },
//   { label: "Valparaiso University", value: "Valparaiso University" },
//   { label: "Vincennes Beauty College", value: "Vincennes Beauty College" },
//   { label: "Vincennes University", value: "Vincennes University" },
//   { label: "Wabash College", value: "Wabash College" },
//   { label: "Allen College", value: "Allen College" },
//   { label: "AIB College of Business", value: "AIB College of Business" },
//   { label: "Briar Cliff University", value: "Briar Cliff University" },
//   { label: "Buena Vista University", value: "Buena Vista University" },
//   { label: "Capri College-Dubuque", value: "Capri College-Dubuque" },
//   {
//     label: "Capri College-Cedar Rapids",
//     value: "Capri College-Cedar Rapids"
//   },
//   {
//     label: "American College of Hairstyling-Cedar Rapids",
//     value: "American College of Hairstyling-Cedar Rapids"
//   },
//   { label: "Central College", value: "Central College" },
//   { label: "Clarke University", value: "Clarke University" },
//   { label: "Coe College", value: "Coe College" },
//   { label: "Cornell College", value: "Cornell College" },
//   {
//     label: "Iowa School of Beauty-Marshalltown",
//     value: "Iowa School of Beauty-Marshalltown"
//   },
//   {
//     label: "Des Moines Area Community College",
//     value: "Des Moines Area Community College"
//   },
//   { label: "Divine Word College", value: "Divine Word College" },
//   { label: "Dordt College", value: "Dordt College" },
//   { label: "Drake University", value: "Drake University" },
//   { label: "University of Dubuque", value: "University of Dubuque" },
//   {
//     label: "Ellsworth Community College",
//     value: "Ellsworth Community College"
//   },
//   { label: "Emmaus Bible College", value: "Emmaus Bible College" },
//   {
//     label: "Eastern Iowa Community College District",
//     value: "Eastern Iowa Community College District"
//   },
//   {
//     label: "Faith Baptist Bible College and Theological Seminary",
//     value: "Faith Baptist Bible College and Theological Seminary"
//   },
//   {
//     label: "Faust Institute of Cosmetology-Storm Lake",
//     value: "Faust Institute of Cosmetology-Storm Lake"
//   },
//   {
//     label: "Graceland University-Lamoni",
//     value: "Graceland University-Lamoni"
//   },
//   { label: "Grand View University", value: "Grand View University" },
//   { label: "Grinnell College", value: "Grinnell College" },
//   {
//     label: "Kaplan University-Mason City Campus",
//     value: "Kaplan University-Mason City Campus"
//   },
//   {
//     label: "Kaplan University-Cedar Rapids Campus",
//     value: "Kaplan University-Cedar Rapids Campus"
//   },
//   {
//     label: "Hamilton Technical College",
//     value: "Hamilton Technical College"
//   },
//   {
//     label: "Hawkeye Community College",
//     value: "Hawkeye Community College"
//   },
//   { label: "American Hair Academy", value: "American Hair Academy" },
//   {
//     label: "Indian Hills Community College",
//     value: "Indian Hills Community College"
//   },
//   {
//     label: "Iowa Central Community College",
//     value: "Iowa Central Community College"
//   },
//   {
//     label: "Iowa Lakes Community College",
//     value: "Iowa Lakes Community College"
//   },
//   {
//     label: "UnityPoint Health-Des Moines School of Radiologic Technology",
//     value: "UnityPoint Health-Des Moines School of Radiologic Technology"
//   },
//   {
//     label: "American College of Hairstyling-Des Moines",
//     value: "American College of Hairstyling-Des Moines"
//   },
//   {
//     label: "Iowa School of Beauty-Des Moines",
//     value: "Iowa School of Beauty-Des Moines"
//   },
//   { label: "Iowa State University", value: "Iowa State University" },
//   { label: "Iowa Wesleyan College", value: "Iowa Wesleyan College" },
//   {
//     label: "Iowa Western Community College",
//     value: "Iowa Western Community College"
//   },
//   { label: "University of Iowa", value: "University of Iowa" },
//   {
//     label: "Kirkwood Community College",
//     value: "Kirkwood Community College"
//   },
//   {
//     label: "La James International College-Cedar Falls",
//     value: "La James International College-Cedar Falls"
//   },
//   {
//     label: "La James International College-Johnston",
//     value: "La James International College-Johnston"
//   },
//   {
//     label: "La James College of Hairstyling and Cosmetology",
//     value: "La James College of Hairstyling and Cosmetology"
//   },
//   {
//     label: "La James International College-Ft Dodge",
//     value: "La James International College-Ft Dodge"
//   },
//   { label: "Loras College", value: "Loras College" },
//   { label: "Luther College", value: "Luther College" },
//   {
//     label: "Maharishi University of Management",
//     value: "Maharishi University of Management"
//   },
//   {
//     label: "Marshalltown Community College",
//     value: "Marshalltown Community College"
//   },
//   {
//     label: "Mercy College of Health Sciences",
//     value: "Mercy College of Health Sciences"
//   },
//   { label: "Morningside College", value: "Morningside College" },
//   { label: "Mount Mercy University", value: "Mount Mercy University" },
//   { label: "Ashford University", value: "Ashford University" },
//   {
//     label: "North Iowa Area Community College",
//     value: "North Iowa Area Community College"
//   },
//   {
//     label: "University of Northern Iowa",
//     value: "University of Northern Iowa"
//   },
//   { label: "Northwestern College", value: "Northwestern College" },
//   {
//     label: "Northeast Iowa Community College-Calmar",
//     value: "Northeast Iowa Community College-Calmar"
//   },
//   {
//     label: "Northwest Iowa Community College",
//     value: "Northwest Iowa Community College"
//   },
//   {
//     label: "Des Moines University-Osteopathic Medical Center",
//     value: "Des Moines University-Osteopathic Medical Center"
//   },
//   {
//     label: "Iowa School of Beauty-Ottumwa",
//     value: "Iowa School of Beauty-Ottumwa"
//   },
//   {
//     label: "Palmer College of Chiropractic-Davenport",
//     value: "Palmer College of Chiropractic-Davenport"
//   },
//   { label: "PCI Academy-Ames", value: "PCI Academy-Ames" },
//   { label: "Saint Ambrose University", value: "Saint Ambrose University" },
//   { label: "St Luke's College", value: "St Luke's College" },
//   {
//     label: "La James International College-Davenport",
//     value: "La James International College-Davenport"
//   },
//   {
//     label: "La James International College-Iowa City",
//     value: "La James International College-Iowa City"
//   },
//   { label: "Simpson College", value: "Simpson College" },
//   {
//     label: "Southeastern Community College",
//     value: "Southeastern Community College"
//   },
//   {
//     label: "Southwestern Community College",
//     value: "Southwestern Community College"
//   },
//   { label: "Capri College-Davenport", value: "Capri College-Davenport" },
//   {
//     label: "Iowa School of Beauty-Sioux City",
//     value: "Iowa School of Beauty-Sioux City"
//   },
//   {
//     label: "E Q School of Hair Design",
//     value: "E Q School of Hair Design"
//   },
//   { label: "Upper Iowa University", value: "Upper Iowa University" },
//   { label: "Waldorf College", value: "Waldorf College" },
//   { label: "Wartburg College", value: "Wartburg College" },
//   {
//     label: "Wartburg Theological Seminary",
//     value: "Wartburg Theological Seminary"
//   },
//   { label: "College of Hair Design", value: "College of Hair Design" },
//   {
//     label: "Western Iowa Tech Community College",
//     value: "Western Iowa Tech Community College"
//   },
//   { label: "William Penn University", value: "William Penn University" },
//   {
//     label: "Allen County Community College",
//     value: "Allen County Community College"
//   },
//   { label: "Baker University", value: "Baker University" },
//   {
//     label: "Barton County Community College",
//     value: "Barton County Community College"
//   },
//   { label: "Benedictine College", value: "Benedictine College" },
//   { label: "Bethany College", value: "Bethany College" },
//   {
//     label: "Bethel College-North Newton",
//     value: "Bethel College-North Newton"
//   },
//   {
//     label: "Brown Mackie College-Kansas City",
//     value: "Brown Mackie College-Kansas City"
//   },
//   {
//     label: "Brown Mackie College-Salina",
//     value: "Brown Mackie College-Salina"
//   },
//   { label: "Bryan University", value: "Bryan University" },
//   { label: "Butler Community College", value: "Butler Community College" },
//   {
//     label: "Central Baptist Theological Seminary",
//     value: "Central Baptist Theological Seminary"
//   },
//   {
//     label: "Central Christian College of Kansas",
//     value: "Central Christian College of Kansas"
//   },
//   {
//     label: "Cloud County Community College",
//     value: "Cloud County Community College"
//   },
//   {
//     label: "Coffeyville Community College",
//     value: "Coffeyville Community College"
//   },
//   { label: "Colby Community College", value: "Colby Community College" },
//   {
//     label: "Cowley County Community College",
//     value: "Cowley County Community College"
//   },
//   {
//     label: "Marinello Schools of Beauty-Manhattan",
//     value: "Marinello Schools of Beauty-Manhattan"
//   },
//   {
//     label: "Dodge City Community College",
//     value: "Dodge City Community College"
//   },
//   { label: "Donnelly College", value: "Donnelly College" },
//   { label: "Emporia State University", value: "Emporia State University" },
//   {
//     label: "Flint Hills Technical College",
//     value: "Flint Hills Technical College"
//   },
//   {
//     label: "Fort Hays State University",
//     value: "Fort Hays State University"
//   },
//   { label: "Barclay College", value: "Barclay College" },
//   { label: "Friends University", value: "Friends University" },
//   {
//     label: "Fort Scott Community College",
//     value: "Fort Scott Community College"
//   },
//   {
//     label: "Garden City Community College",
//     value: "Garden City Community College"
//   },
//   {
//     label: "Haskell Indian Nations University",
//     value: "Haskell Indian Nations University"
//   },
//   {
//     label: "Hays Academy of Hair Design",
//     value: "Hays Academy of Hair Design"
//   },
//   { label: "Hesston College", value: "Hesston College" },
//   {
//     label: "Highland Community College",
//     value: "Highland Community College"
//   },
//   {
//     label: "Hutchinson Community College",
//     value: "Hutchinson Community College"
//   },
//   {
//     label: "Independence Community College",
//     value: "Independence Community College"
//   },
//   {
//     label: "Johnson County Community College",
//     value: "Johnson County Community College"
//   },
//   { label: "Concorde Career Colleges", value: "Concorde Career Colleges" },
//   {
//     label: "Kansas City Kansas Community College",
//     value: "Kansas City Kansas Community College"
//   },
//   { label: "University of Kansas", value: "University of Kansas" },
//   { label: "Newman University", value: "Newman University" },
//   {
//     label: "Old Town Barber College-Wichita",
//     value: "Old Town Barber College-Wichita"
//   },
//   { label: "Kansas State University", value: "Kansas State University" },
//   {
//     label: "Kansas Wesleyan University",
//     value: "Kansas Wesleyan University"
//   },
//   {
//     label: "Washburn Institute of Technology",
//     value: "Washburn Institute of Technology"
//   },
//   {
//     label: "La Baron Hairdressing Academy-Overland Park",
//     value: "La Baron Hairdressing Academy-Overland Park"
//   },
//   {
//     label: "Labette Community College",
//     value: "Labette Community College"
//   },
//   {
//     label: "Manhattan Area Technical College",
//     value: "Manhattan Area Technical College"
//   },
//   {
//     label: "Manhattan Christian College",
//     value: "Manhattan Christian College"
//   },
//   { label: "McPherson College", value: "McPherson College" },
//   {
//     label: "MidAmerica Nazarene University",
//     value: "MidAmerica Nazarene University"
//   },
//   {
//     label: "Neosho County Community College",
//     value: "Neosho County Community College"
//   },
//   {
//     label: "North Central Kansas Technical College",
//     value: "North Central Kansas Technical College"
//   },
//   {
//     label: "Northwest Kansas Technical College",
//     value: "Northwest Kansas Technical College"
//   },
//   { label: "Ottawa University-Ottawa", value: "Ottawa University-Ottawa" },
//   {
//     label: "Ottawa University-Kansas City",
//     value: "Ottawa University-Kansas City"
//   },
//   {
//     label: "Pittsburg State University",
//     value: "Pittsburg State University"
//   },
//   { label: "Pratt Community College", value: "Pratt Community College" },
//   { label: "University of Saint Mary", value: "University of Saint Mary" },
//   {
//     label: "Salina Area Technical College",
//     value: "Salina Area Technical College"
//   },
//   {
//     label: "Seward County Community College and Area Technical School",
//     value: "Seward County Community College and Area Technical School"
//   },
//   {
//     label: "Sidneys Hair Dressing College",
//     value: "Sidneys Hair Dressing College"
//   },
//   { label: "Southwestern College", value: "Southwestern College" },
//   { label: "Sterling College", value: "Sterling College" },
//   { label: "Tabor College", value: "Tabor College" },
//   { label: "Washburn University", value: "Washburn University" },
//   {
//     label: "Wichita Area Technical College",
//     value: "Wichita Area Technical College"
//   },
//   { label: "Wichita State University", value: "Wichita State University" },
//   {
//     label: "Wichita Technical Institute",
//     value: "Wichita Technical Institute"
//   },
//   { label: "Alice Lloyd College", value: "Alice Lloyd College" },
//   { label: "Asbury University", value: "Asbury University" },
//   {
//     label: "Asbury Theological Seminary",
//     value: "Asbury Theological Seminary"
//   },
//   {
//     label: "Ashland Community and Technical College",
//     value: "Ashland Community and Technical College"
//   },
//   {
//     label: "Barrett and Company School of Hair Design",
//     value: "Barrett and Company School of Hair Design"
//   },
//   { label: "Bellarmine University", value: "Bellarmine University" },
//   { label: "Berea College", value: "Berea College" },
//   {
//     label: "PJ's College of Cosmetology-Bowling Green",
//     value: "PJ's College of Cosmetology-Bowling Green"
//   },
//   {
//     label: "Southcentral Kentucky Community and Technical College",
//     value: "Southcentral Kentucky Community and Technical College"
//   },
//   { label: "Brescia University", value: "Brescia University" },
//   {
//     label: "Campbellsville University",
//     value: "Campbellsville University"
//   },
//   {
//     label: "Bluegrass Community and Technical College",
//     value: "Bluegrass Community and Technical College"
//   },
//   { label: "Centre College", value: "Centre College" },
//   {
//     label: "Clear Creek Baptist Bible College",
//     value: "Clear Creek Baptist Bible College"
//   },
//   {
//     label: "Paul Mitchell the School-Lexington",
//     value: "Paul Mitchell the School-Lexington"
//   },
//   {
//     label: "Collins School of Cosmetology",
//     value: "Collins School of Cosmetology"
//   },
//   {
//     label: "Galen College of Nursing-Louisville",
//     value: "Galen College of Nursing-Louisville"
//   },
//   {
//     label: "University of the Cumberlands",
//     value: "University of the Cumberlands"
//   },
//   {
//     label: "Eastern Kentucky University",
//     value: "Eastern Kentucky University"
//   },
//   {
//     label: "Elizabethtown Community and Technical College",
//     value: "Elizabethtown Community and Technical College"
//   },
//   {
//     label: "Ezell's Cosmetology School",
//     value: "Ezell's Cosmetology School"
//   },
//   {
//     label: "Frontier Nursing University",
//     value: "Frontier Nursing University"
//   },
//   { label: "Georgetown College", value: "Georgetown College" },
//   {
//     label: "PJ's College of Cosmetology-Glasgow",
//     value: "PJ's College of Cosmetology-Glasgow"
//   },
//   {
//     label: "Hazard Community and Technical College",
//     value: "Hazard Community and Technical College"
//   },
//   {
//     label: "Paul Mitchell the School-Louisville",
//     value: "Paul Mitchell the School-Louisville"
//   },
//   {
//     label: "Henderson Community College",
//     value: "Henderson Community College"
//   },
//   {
//     label: "Hopkinsville Community College",
//     value: "Hopkinsville Community College"
//   },
//   {
//     label: "Daymar College-Paducah Main",
//     value: "Daymar College-Paducah Main"
//   },
//   {
//     label: "Jefferson Community and Technical College",
//     value: "Jefferson Community and Technical College"
//   },
//   {
//     label: "Jenny Lea Academy of Cosmetology",
//     value: "Jenny Lea Academy of Cosmetology"
//   },
//   {
//     label: "The Salon Professional Academy-Lexington",
//     value: "The Salon Professional Academy-Lexington"
//   },
//   {
//     label: "National College-Lexington",
//     value: "National College-Lexington"
//   },
//   {
//     label: "Kentucky Mountain Bible College",
//     value: "Kentucky Mountain Bible College"
//   },
//   {
//     label: "Kentucky State University",
//     value: "Kentucky State University"
//   },
//   {
//     label: "Kentucky Wesleyan College",
//     value: "Kentucky Wesleyan College"
//   },
//   { label: "University of Kentucky", value: "University of Kentucky" },
//   {
//     label: "Kentucky Christian University",
//     value: "Kentucky Christian University"
//   },
//   {
//     label: "Lexington Theological Seminary",
//     value: "Lexington Theological Seminary"
//   },
//   { label: "Lindsey Wilson College", value: "Lindsey Wilson College" },
//   {
//     label: "Sullivan College of Technology and Design",
//     value: "Sullivan College of Technology and Design"
//   },
//   { label: "University of Louisville", value: "University of Louisville" },
//   {
//     label: "Louisville Presbyterian Theological Seminary",
//     value: "Louisville Presbyterian Theological Seminary"
//   },
//   {
//     label: "Madisonville Community College",
//     value: "Madisonville Community College"
//   },
//   {
//     label: "Maysville Community and Technical College",
//     value: "Maysville Community and Technical College"
//   },
//   { label: "Mid-Continent University", value: "Mid-Continent University" },
//   { label: "Midway College", value: "Midway College" },
//   {
//     label: "Morehead State University",
//     value: "Morehead State University"
//   },
//   { label: "Murray State University", value: "Murray State University" },
//   {
//     label: "Gateway Community and Technical College",
//     value: "Gateway Community and Technical College"
//   },
//   {
//     label: "Northern Kentucky University",
//     value: "Northern Kentucky University"
//   },
//   {
//     label: "Nutek Academy of Beauty Inc",
//     value: "Nutek Academy of Beauty Inc"
//   },
//   { label: "Daymar College-Owensboro", value: "Daymar College-Owensboro" },
//   {
//     label: "West Kentucky Community and Technical College",
//     value: "West Kentucky Community and Technical College"
//   },
//   {
//     label: "Pat Wilson's Beauty College",
//     value: "Pat Wilson's Beauty College"
//   },
//   { label: "University of Pikeville", value: "University of Pikeville" },
//   {
//     label: "Big Sandy Community and Technical College",
//     value: "Big Sandy Community and Technical College"
//   },
//   {
//     label: "Brown Mackie College-Louisville",
//     value: "Brown Mackie College-Louisville"
//   },
//   {
//     label: "Empire Beauty School-Chenoweth",
//     value: "Empire Beauty School-Chenoweth"
//   },
//   { label: "Saint Catharine College", value: "Saint Catharine College" },
//   {
//     label: "Empire Beauty School-Elizabethtown",
//     value: "Empire Beauty School-Elizabethtown"
//   },
//   {
//     label: "Empire Beauty School-Dixie",
//     value: "Empire Beauty School-Dixie"
//   },
//   {
//     label: "Empire Beauty School-Florence",
//     value: "Empire Beauty School-Florence"
//   },
//   {
//     label: "Brown Mackie College-Northern Kentucky",
//     value: "Brown Mackie College-Northern Kentucky"
//   },
//   {
//     label: "Somerset Community College",
//     value: "Somerset Community College"
//   },
//   {
//     label: "Southeast Kentucky Community and Technical College",
//     value: "Southeast Kentucky Community and Technical College"
//   },
//   {
//     label: "The Southern Baptist Theological Seminary",
//     value: "The Southern Baptist Theological Seminary"
//   },
//   { label: "Spalding University", value: "Spalding University" },
//   {
//     label: "Spencerian College-Louisville",
//     value: "Spencerian College-Louisville"
//   },
//   { label: "Sullivan University", value: "Sullivan University" },
//   { label: "Thomas More College", value: "Thomas More College" },
//   { label: "Transylvania University", value: "Transylvania University" },
//   {
//     label: "Trend Setters' Academy of Beauty Culture-Louisville",
//     value: "Trend Setters' Academy of Beauty Culture-Louisville"
//   },
//   {
//     label: "Kentucky Community and Technical College System",
//     value: "Kentucky Community and Technical College System"
//   },
//   { label: "Union College", value: "Union College" },
//   {
//     label: "Western Kentucky University",
//     value: "Western Kentucky University"
//   },
//   {
//     label: "Central Louisiana Technical Community College",
//     value: "Central Louisiana Technical Community College"
//   },
//   {
//     label: "American School of Business",
//     value: "American School of Business"
//   },
//   { label: "Ayers Career College", value: "Ayers Career College" },
//   {
//     label: "Baton Rouge General Medical Center-School of Nursing",
//     value: "Baton Rouge General Medical Center-School of Nursing"
//   },
//   {
//     label: "Baton Rouge General Medical Center-Radiologic Technology",
//     value: "Baton Rouge General Medical Center-Radiologic Technology"
//   },
//   {
//     label: "Baton Rouge School of Computers",
//     value: "Baton Rouge School of Computers"
//   },
//   {
//     label: "Capital Area Technical College",
//     value: "Capital Area Technical College"
//   },
//   {
//     label: "Bossier Parish Community College",
//     value: "Bossier Parish Community College"
//   },
//   { label: "Cameron College", value: "Cameron College" },
//   {
//     label: "Centenary College of Louisiana",
//     value: "Centenary College of Louisiana"
//   },
//   {
//     label: "Cloyd's Beauty School 1 Inc",
//     value: "Cloyd's Beauty School 1 Inc"
//   },
//   {
//     label: "Crescent City Bartending School",
//     value: "Crescent City Bartending School"
//   },
//   {
//     label: "D'Jay's School of Beauty Arts and Sciences",
//     value: "D'Jay's School of Beauty Arts and Sciences"
//   },
//   {
//     label: "Delgado Community College",
//     value: "Delgado Community College"
//   },
//   {
//     label: "Delta School of Business and Technology",
//     value: "Delta School of Business and Technology"
//   },
//   {
//     label: "Northeast Louisiana Technical College",
//     value: "Northeast Louisiana Technical College"
//   },
//   { label: "Demmons School of Beauty", value: "Demmons School of Beauty" },
//   {
//     label: "Denham Springs Beauty School",
//     value: "Denham Springs Beauty School"
//   },
//   { label: "Dillard University", value: "Dillard University" },
//   { label: "Nunez Community College", value: "Nunez Community College" },
//   {
//     label: "Grambling State University",
//     value: "Grambling State University"
//   },
//   {
//     label: "Guy's Shreveport Academy of Cosmetology Inc",
//     value: "Guy's Shreveport Academy of Cosmetology Inc"
//   },
//   { label: "ITI Technical College", value: "ITI Technical College" },
//   { label: "John Jay Beauty College", value: "John Jay Beauty College" },
//   { label: "John Jay Beauty College", value: "John Jay Beauty College" },
//   {
//     label: "Louisiana State University Health Sciences Center-New Orleans",
//     value: "Louisiana State University Health Sciences Center-New Orleans"
//   },
//   {
//     label: "Louisiana State University-Alexandria",
//     value: "Louisiana State University-Alexandria"
//   },
//   {
//     label: "Louisiana State University and Agricultural & Mechanical College",
//     value: "Louisiana State University and Agricultural & Mechanical College"
//   },
//   {
//     label: "Louisiana State University-Eunice",
//     value: "Louisiana State University-Eunice"
//   },
//   {
//     label: "Louisiana State University-Shreveport",
//     value: "Louisiana State University-Shreveport"
//   },
//   {
//     label: "Acadiana Technical College-Lafayette Campus",
//     value: "Acadiana Technical College-Lafayette Campus"
//   },
//   {
//     label: "Aveda Institute-Baton Rouge",
//     value: "Aveda Institute-Baton Rouge"
//   },
//   {
//     label: "Aveda Institute-Lafayette",
//     value: "Aveda Institute-Lafayette"
//   },
//   {
//     label: "Louisiana Academy of Beauty",
//     value: "Louisiana Academy of Beauty"
//   },
//   { label: "Louisiana College", value: "Louisiana College" },
//   {
//     label: "Opelousas School of Cosmetology Inc",
//     value: "Opelousas School of Cosmetology Inc"
//   },
//   {
//     label: "Louisiana State University-System Office",
//     value: "Louisiana State University-System Office"
//   },
//   {
//     label: "Louisiana Tech University",
//     value: "Louisiana Tech University"
//   },
//   {
//     label: "Loyola University New Orleans",
//     value: "Loyola University New Orleans"
//   },
//   { label: "McNeese State University", value: "McNeese State University" },
//   {
//     label: "University of New Orleans",
//     value: "University of New Orleans"
//   },
//   {
//     label: "New Orleans Baptist Theological Seminary",
//     value: "New Orleans Baptist Theological Seminary"
//   },
//   {
//     label: "Nicholls State University",
//     value: "Nicholls State University"
//   },
//   {
//     label: "University of Louisiana at Monroe",
//     value: "University of Louisiana at Monroe"
//   },
//   {
//     label: "Northwest Louisiana Technical College",
//     value: "Northwest Louisiana Technical College"
//   },
//   {
//     label: "Notre Dame Seminary Graduate School of Theology",
//     value: "Notre Dame Seminary Graduate School of Theology"
//   },
//   {
//     label: "Northwestern State University of Louisiana",
//     value: "Northwestern State University of Louisiana"
//   },
//   {
//     label: "Our Lady of Holy Cross College",
//     value: "Our Lady of Holy Cross College"
//   },
//   {
//     label: "Our Lady of the Lake College",
//     value: "Our Lady of the Lake College"
//   },
//   {
//     label: "Pat Goins Benton Road Beauty School",
//     value: "Pat Goins Benton Road Beauty School"
//   },
//   {
//     label: "Pat Goins Monroe Beauty School",
//     value: "Pat Goins Monroe Beauty School"
//   },
//   {
//     label: "Pat Goins Ruston Beauty School",
//     value: "Pat Goins Ruston Beauty School"
//   },
//   { label: "Pineville Beauty School", value: "Pineville Beauty School" },
//   {
//     label: "Aveda Institute-Covington",
//     value: "Aveda Institute-Covington"
//   },
//   {
//     label: "Saint Joseph Seminary College",
//     value: "Saint Joseph Seminary College"
//   },
//   {
//     label: "Vanguard College of Cosmetology-Slidell",
//     value: "Vanguard College of Cosmetology-Slidell"
//   },
//   {
//     label: "South Louisiana Beauty College",
//     value: "South Louisiana Beauty College"
//   },
//   {
//     label: "L E Fletcher Technical Community College",
//     value: "L E Fletcher Technical Community College"
//   },
//   {
//     label: "Remington College-Lafayette Campus",
//     value: "Remington College-Lafayette Campus"
//   },
//   {
//     label: "Southern University-Board and System",
//     value: "Southern University-Board and System"
//   },
//   {
//     label: "SOWELA Technical Community College",
//     value: "SOWELA Technical Community College"
//   },
//   {
//     label: "Stevensons Academy of Hair Design",
//     value: "Stevensons Academy of Hair Design"
//   },
//   {
//     label: "Southeastern Louisiana University",
//     value: "Southeastern Louisiana University"
//   },
//   {
//     label: "Southern University and A & M College",
//     value: "Southern University and A & M College"
//   },
//   {
//     label: "Southern University at New Orleans",
//     value: "Southern University at New Orleans"
//   },
//   {
//     label: "Southern University at Shreveport",
//     value: "Southern University at Shreveport"
//   },
//   {
//     label: "University of Louisiana at Lafayette",
//     value: "University of Louisiana at Lafayette"
//   },
//   {
//     label: "Northshore Technical Community College",
//     value: "Northshore Technical Community College"
//   },
//   {
//     label: "Tulane University of Louisiana",
//     value: "Tulane University of Louisiana"
//   },
//   {
//     label: "Xavier University of Louisiana",
//     value: "Xavier University of Louisiana"
//   },
//   {
//     label: "South Central Louisiana Technical College-Young Memorial Campus",
//     value: "South Central Louisiana Technical College-Young Memorial Campus"
//   },
//   {
//     label: "Kaplan University-Maine Campus",
//     value: "Kaplan University-Maine Campus"
//   },
//   { label: "College of the Atlantic", value: "College of the Atlantic" },
//   {
//     label: "Bangor Theological Seminary",
//     value: "Bangor Theological Seminary"
//   },
//   { label: "Bates College", value: "Bates College" },
//   { label: "Beal College", value: "Beal College" },
//   { label: "Bowdoin College", value: "Bowdoin College" },
//   {
//     label: "Central Maine Medical Center College of Nursing and Health Professions",
//     value: "Central Maine Medical Center College of Nursing and Health Professions"
//   },
//   {
//     label: "Central Maine Community College",
//     value: "Central Maine Community College"
//   },
//   { label: "Colby College", value: "Colby College" },
//   {
//     label: "Eastern Maine Community College",
//     value: "Eastern Maine Community College"
//   },
//   { label: "Husson University", value: "Husson University" },
//   {
//     label: "Kennebec Valley Community College",
//     value: "Kennebec Valley Community College"
//   },
//   { label: "The Landing School", value: "The Landing School" },
//   {
//     label: "University of Maine at Augusta",
//     value: "University of Maine at Augusta"
//   },
//   {
//     label: "University of Maine at Farmington",
//     value: "University of Maine at Farmington"
//   },
//   {
//     label: "University of Maine at Fort Kent",
//     value: "University of Maine at Fort Kent"
//   },
//   {
//     label: "University of Maine at Machias",
//     value: "University of Maine at Machias"
//   },
//   { label: "University of Maine", value: "University of Maine" },
//   {
//     label: "University of Maine-System Central Office",
//     value: "University of Maine-System Central Office"
//   },
//   { label: "Maine Maritime Academy", value: "Maine Maritime Academy" },
//   {
//     label: "University of Maine at Presque Isle",
//     value: "University of Maine at Presque Isle"
//   },
//   {
//     label: "University of New England",
//     value: "University of New England"
//   },
//   {
//     label: "Northern Maine Community College",
//     value: "Northern Maine Community College"
//   },
//   {
//     label: "Empire Beauty School-Maine",
//     value: "Empire Beauty School-Maine"
//   },
//   { label: "Maine College of Art", value: "Maine College of Art" },
//   {
//     label: "Saint Joseph's College of Maine",
//     value: "Saint Joseph's College of Maine"
//   },
//   {
//     label: "Spa Tech Institute-Westbrook",
//     value: "Spa Tech Institute-Westbrook"
//   },
//   {
//     label: "Southern Maine Community College",
//     value: "Southern Maine Community College"
//   },
//   {
//     label: "University of Southern Maine",
//     value: "University of Southern Maine"
//   },
//   { label: "Thomas College", value: "Thomas College" },
//   { label: "Unity College", value: "Unity College" },
//   {
//     label: "Washington County Community College",
//     value: "Washington County Community College"
//   },
//   {
//     label: "Aaron's Academy of Beauty",
//     value: "Aaron's Academy of Beauty"
//   },
//   {
//     label: "Aesthetics Institute of Cosmetology",
//     value: "Aesthetics Institute of Cosmetology"
//   },
//   {
//     label: "Allegany College of Maryland",
//     value: "Allegany College of Maryland"
//   },
//   {
//     label: "Anne Arundel Community College",
//     value: "Anne Arundel Community College"
//   },
//   {
//     label: "TESST College of Technology-Towson",
//     value: "TESST College of Technology-Towson"
//   },
//   { label: "Award Beauty School", value: "Award Beauty School" },
//   {
//     label: "Baltimore Studio of Hair Design",
//     value: "Baltimore Studio of Hair Design"
//   },
//   {
//     label: "Baltimore City Community College",
//     value: "Baltimore City Community College"
//   },
//   { label: "University of Baltimore", value: "University of Baltimore" },
//   { label: "Bowie State University", value: "Bowie State University" },
//   { label: "Capitol College", value: "Capitol College" },
//   { label: "Cecil College", value: "Cecil College" },
//   {
//     label: "College of Southern Maryland",
//     value: "College of Southern Maryland"
//   },
//   { label: "Chesapeake College", value: "Chesapeake College" },
//   {
//     label: "Washington Adventist University",
//     value: "Washington Adventist University"
//   },
//   { label: "Coppin State University", value: "Coppin State University" },
//   { label: "Delmarva Beauty Academy", value: "Delmarva Beauty Academy" },
//   {
//     label: "North American Trade Schools",
//     value: "North American Trade Schools"
//   },
//   {
//     label: "Frederick Community College",
//     value: "Frederick Community College"
//   },
//   {
//     label: "Frostburg State University",
//     value: "Frostburg State University"
//   },
//   { label: "Garrett College", value: "Garrett College" },
//   { label: "Goucher College", value: "Goucher College" },
//   {
//     label: "Kaplan University-Hagerstown Campus",
//     value: "Kaplan University-Hagerstown Campus"
//   },
//   {
//     label: "Hagerstown Community College",
//     value: "Hagerstown Community College"
//   },
//   {
//     label: "Harford Community College",
//     value: "Harford Community College"
//   },
//   { label: "Hood College", value: "Hood College" },
//   { label: "Howard Community College", value: "Howard Community College" },
//   {
//     label: "The Colorlab Academy of Hair",
//     value: "The Colorlab Academy of Hair"
//   },
//   { label: "Johns Hopkins University", value: "Johns Hopkins University" },
//   { label: "L'Academie de Cuisine", value: "L'Academie de Cuisine" },
//   {
//     label: "Lincoln College of Technology-Columbia",
//     value: "Lincoln College of Technology-Columbia"
//   },
//   {
//     label: "Loyola University Maryland",
//     value: "Loyola University Maryland"
//   },
//   {
//     label: "Maryland Beauty Academy of Reisterstown",
//     value: "Maryland Beauty Academy of Reisterstown"
//   },
//   {
//     label: "University of Maryland-University College",
//     value: "University of Maryland-University College"
//   },
//   {
//     label: "University of Maryland-Baltimore",
//     value: "University of Maryland-Baltimore"
//   },
//   {
//     label: "University of Maryland-Baltimore County",
//     value: "University of Maryland-Baltimore County"
//   },
//   {
//     label: "University of Maryland-College Park",
//     value: "University of Maryland-College Park"
//   },
//   {
//     label: "Maryland Institute College of Art",
//     value: "Maryland Institute College of Art"
//   },
//   {
//     label: "University of Maryland Eastern Shore",
//     value: "University of Maryland Eastern Shore"
//   },
//   { label: "Fortis Institute-Towson", value: "Fortis Institute-Towson" },
//   { label: "Montgomery Beauty School", value: "Montgomery Beauty School" },
//   { label: "Montgomery College", value: "Montgomery College" },
//   { label: "Morgan State University", value: "Morgan State University" },
//   {
//     label: "Mount St Mary's University",
//     value: "Mount St Mary's University"
//   },
//   {
//     label: "Ner Israel Rabbinical College",
//     value: "Ner Israel Rabbinical College"
//   },
//   {
//     label: "Hair Academy Inc-New Carrollton",
//     value: "Hair Academy Inc-New Carrollton"
//   },
//   {
//     label: "Notre Dame of Maryland University",
//     value: "Notre Dame of Maryland University"
//   },
//   {
//     label: "Prince George's Community College",
//     value: "Prince George's Community College"
//   },
//   {
//     label: "TESST College of Technology-Baltimore",
//     value: "TESST College of Technology-Baltimore"
//   },
//   {
//     label: "Robert Paul Academy of Cosmetology Arts & Sciences",
//     value: "Robert Paul Academy of Cosmetology Arts & Sciences"
//   },
//   {
//     label: "Maryland Beauty Academy of Essex",
//     value: "Maryland Beauty Academy of Essex"
//   },
//   {
//     label: "St Mary's Seminary & University",
//     value: "St Mary's Seminary & University"
//   },
//   { label: "Salisbury University", value: "Salisbury University" },
//   {
//     label: "St Mary's College of Maryland",
//     value: "St Mary's College of Maryland"
//   },
//   {
//     label: "Sojourner-Douglass College",
//     value: "Sojourner-Douglass College"
//   },
//   { label: "St John's College", value: "St John's College" },
//   {
//     label: "TESST College of Technology-Beltsville",
//     value: "TESST College of Technology-Beltsville"
//   },
//   { label: "Towson University", value: "Towson University" },
//   {
//     label: "Maryland University of Integrative Health",
//     value: "Maryland University of Integrative Health"
//   },
//   {
//     label: "International Beauty School",
//     value: "International Beauty School"
//   },
//   {
//     label: "University System of Maryland",
//     value: "University System of Maryland"
//   },
//   {
//     label: "United States Naval Academy",
//     value: "United States Naval Academy"
//   },
//   { label: "Stevenson University", value: "Stevenson University" },
//   {
//     label: "Washington Bible College-Capital Bible Seminary",
//     value: "Washington Bible College-Capital Bible Seminary"
//   },
//   { label: "Washington College", value: "Washington College" },
//   {
//     label: "Washington Theological Union",
//     value: "Washington Theological Union"
//   },
//   { label: "McDaniel College", value: "McDaniel College" },
//   {
//     label: "Wor-Wic Community College",
//     value: "Wor-Wic Community College"
//   },
//   {
//     label: "Hult International Business School",
//     value: "Hult International Business School"
//   },
//   {
//     label: "New England College of Business and Finance",
//     value: "New England College of Business and Finance"
//   },
//   {
//     label: "American International College",
//     value: "American International College"
//   },
//   { label: "Amherst College", value: "Amherst College" },
//   {
//     label: "Andover Newton Theological School",
//     value: "Andover Newton Theological School"
//   },
//   { label: "Anna Maria College", value: "Anna Maria College" },
//   {
//     label: "Assabet Valley Regional Technical School",
//     value: "Assabet Valley Regional Technical School"
//   },
//   { label: "Assumption College", value: "Assumption College" },
//   { label: "Babson College", value: "Babson College" },
//   {
//     label: "Bancroft School of Massage Therapy",
//     value: "Bancroft School of Massage Therapy"
//   },
//   { label: "Boston Baptist College", value: "Boston Baptist College" },
//   { label: "Bay Path College", value: "Bay Path College" },
//   { label: "Bay State College", value: "Bay State College" },
//   {
//     label: "Bay State School of Technology",
//     value: "Bay State School of Technology"
//   },
//   { label: "Becker College", value: "Becker College" },
//   { label: "Bentley University", value: "Bentley University" },
//   { label: "Berklee College of Music", value: "Berklee College of Music" },
//   {
//     label: "Berkshire Community College",
//     value: "Berkshire Community College"
//   },
//   {
//     label: "Empire Beauty School-Boston",
//     value: "Empire Beauty School-Boston"
//   },
//   {
//     label: "Boston Architectural College",
//     value: "Boston Architectural College"
//   },
//   {
//     label: "Boston Graduate School of Psychoanalysis Inc",
//     value: "Boston Graduate School of Psychoanalysis Inc"
//   },
//   { label: "Boston College", value: "Boston College" },
//   { label: "The Boston Conservatory", value: "The Boston Conservatory" },
//   { label: "Boston University", value: "Boston University" },
//   { label: "Brandeis University", value: "Brandeis University" },
//   {
//     label: "Bridgewater State University",
//     value: "Bridgewater State University"
//   },
//   {
//     label: "Bristol Community College",
//     value: "Bristol Community College"
//   },
//   {
//     label: "Signature Healthcare Brockton Hospital School of Nursing",
//     value: "Signature Healthcare Brockton Hospital School of Nursing"
//   },
//   {
//     label: "Bunker Hill Community College",
//     value: "Bunker Hill Community College"
//   },
//   { label: "Cambridge College", value: "Cambridge College" },
//   {
//     label: "Cape Cod Community College",
//     value: "Cape Cod Community College"
//   },
//   {
//     label: "Catherine Hinds Institute of Esthetics",
//     value: "Catherine Hinds Institute of Esthetics"
//   },
//   { label: "Laboure College", value: "Laboure College" },
//   { label: "Clark University", value: "Clark University" },
//   {
//     label: "Conway School of Landscape Design",
//     value: "Conway School of Landscape Design"
//   },
//   { label: "Curry College", value: "Curry College" },
//   {
//     label: "Lincoln Technical Institute-Somerville",
//     value: "Lincoln Technical Institute-Somerville"
//   },
//   { label: "Dean College", value: "Dean College" },
//   {
//     label: "Diman Regional Technical Institute",
//     value: "Diman Regional Technical Institute"
//   },
//   {
//     label: "National Aviation Academy of New England",
//     value: "National Aviation Academy of New England"
//   },
//   { label: "Eastern Nazarene College", value: "Eastern Nazarene College" },
//   { label: "Emerson College", value: "Emerson College" },
//   { label: "Emmanuel College", value: "Emmanuel College" },
//   { label: "Endicott College", value: "Endicott College" },
//   {
//     label: "Episcopal Divinity School",
//     value: "Episcopal Divinity School"
//   },
//   {
//     label: "Rob Roy Academy-Fall River",
//     value: "Rob Roy Academy-Fall River"
//   },
//   { label: "Fisher College", value: "Fisher College" },
//   {
//     label: "Fitchburg State University",
//     value: "Fitchburg State University"
//   },
//   {
//     label: "Framingham State University",
//     value: "Framingham State University"
//   },
//   {
//     label: "Benjamin Franklin Institute of Technology",
//     value: "Benjamin Franklin Institute of Technology"
//   },
//   { label: "Gordon College", value: "Gordon College" },
//   {
//     label: "Gordon-Conwell Theological Seminary",
//     value: "Gordon-Conwell Theological Seminary"
//   },
//   {
//     label: "Greenfield Community College",
//     value: "Greenfield Community College"
//   },
//   {
//     label: "Hallmark Institute of Photography",
//     value: "Hallmark Institute of Photography"
//   },
//   { label: "Hampshire College", value: "Hampshire College" },
//   { label: "Harvard University", value: "Harvard University" },
//   { label: "Hebrew College", value: "Hebrew College" },
//   {
//     label: "Hellenic College-Holy Cross Greek Orthodox School of Theology",
//     value: "Hellenic College-Holy Cross Greek Orthodox School of Theology"
//   },
//   {
//     label: "Henris School of Hair Design",
//     value: "Henris School of Hair Design"
//   },
//   {
//     label: "College of the Holy Cross",
//     value: "College of the Holy Cross"
//   },
//   {
//     label: "Holyoke Community College",
//     value: "Holyoke Community College"
//   },
//   {
//     label: "Sanford-Brown College-Boston",
//     value: "Sanford-Brown College-Boston"
//   },
//   {
//     label: "Kay Harvey Academy of Hair Design",
//     value: "Kay Harvey Academy of Hair Design"
//   },
//   {
//     label: "La Baron Hairdressing Academy-Brockton",
//     value: "La Baron Hairdressing Academy-Brockton"
//   },
//   {
//     label: "La Baron Hairdressing Academy-New Bedford",
//     value: "La Baron Hairdressing Academy-New Bedford"
//   },
//   { label: "Lasell College", value: "Lasell College" },
//   {
//     label: "Lawrence Memorial Hospital School of Nursing",
//     value: "Lawrence Memorial Hospital School of Nursing"
//   },
//   { label: "Lesley University", value: "Lesley University" },
//   {
//     label: "Longy School of Music of Bard College",
//     value: "Longy School of Music of Bard College"
//   },
//   {
//     label: "Lowell Academy Hairstyling Institute",
//     value: "Lowell Academy Hairstyling Institute"
//   },
//   {
//     label: "University of Massachusetts-Lowell",
//     value: "University of Massachusetts-Lowell"
//   },
//   {
//     label: "Mansfield Beauty Schools-Springfield",
//     value: "Mansfield Beauty Schools-Springfield"
//   },
//   {
//     label: "Mansfield Beauty Schools-Quincy",
//     value: "Mansfield Beauty Schools-Quincy"
//   },
//   { label: "Marian Court College", value: "Marian Court College" },
//   {
//     label: "University of Massachusetts-Amherst",
//     value: "University of Massachusetts-Amherst"
//   },
//   {
//     label: "University of Massachusetts-Boston",
//     value: "University of Massachusetts-Boston"
//   },
//   {
//     label: "Massachusetts Bay Community College",
//     value: "Massachusetts Bay Community College"
//   },
//   { label: "MCPHS University", value: "MCPHS University" },
//   {
//     label: "University of Massachusetts-Central Office",
//     value: "University of Massachusetts-Central Office"
//   },
//   {
//     label: "Massachusetts College of Art and Design",
//     value: "Massachusetts College of Art and Design"
//   },
//   {
//     label: "Massachusetts Institute of Technology",
//     value: "Massachusetts Institute of Technology"
//   },
//   {
//     label: "Massachusetts Maritime Academy",
//     value: "Massachusetts Maritime Academy"
//   },
//   {
//     label: "University of Massachusetts Medical School Worcester",
//     value: "University of Massachusetts Medical School Worcester"
//   },
//   {
//     label: "Massachusetts School of Professional Psychology",
//     value: "Massachusetts School of Professional Psychology"
//   },
//   {
//     label: "Massachusetts School of Barbering",
//     value: "Massachusetts School of Barbering"
//   },
//   {
//     label: "Massasoit Community College",
//     value: "Massasoit Community College"
//   },
//   { label: "Merrimack College", value: "Merrimack College" },
//   {
//     label: "MGH Institute of Health Professions",
//     value: "MGH Institute of Health Professions"
//   },
//   {
//     label: "Middlesex Community College",
//     value: "Middlesex Community College"
//   },
//   {
//     label: "Montserrat College of Art",
//     value: "Montserrat College of Art"
//   },
//   { label: "Mount Holyoke College", value: "Mount Holyoke College" },
//   { label: "Mount Ida College", value: "Mount Ida College" },
//   {
//     label: "Mount Wachusett Community College",
//     value: "Mount Wachusett Community College"
//   },
//   { label: "Cortiva Institute-Boston", value: "Cortiva Institute-Boston" },
//   {
//     label: "School of the Museum of Fine Arts-Boston",
//     value: "School of the Museum of Fine Arts-Boston"
//   },
//   {
//     label: "Everest Institute-Brighton",
//     value: "Everest Institute-Brighton"
//   },
//   {
//     label: "Rob Roy Academy-New Bedford",
//     value: "Rob Roy Academy-New Bedford"
//   },
//   {
//     label: "The New England Conservatory of Music",
//     value: "The New England Conservatory of Music"
//   },
//   {
//     label: "New England College of Optometry",
//     value: "New England College of Optometry"
//   },
//   {
//     label: "New England School of Acupuncture",
//     value: "New England School of Acupuncture"
//   },
//   {
//     label: "New England School of Law",
//     value: "New England School of Law"
//   },
//   {
//     label: "New England School of Photography",
//     value: "New England School of Photography"
//   },
//   { label: "Newbury College", value: "Newbury College" },
//   { label: "Nichols College", value: "Nichols College" },
//   {
//     label: "Massachusetts College of Liberal Arts",
//     value: "Massachusetts College of Liberal Arts"
//   },
//   {
//     label: "North Bennet Street School",
//     value: "North Bennet Street School"
//   },
//   {
//     label: "North Shore Community College",
//     value: "North Shore Community College"
//   },
//   {
//     label: "The New England Institute of Art",
//     value: "The New England Institute of Art"
//   },
//   { label: "Northeastern University", value: "Northeastern University" },
//   {
//     label: "Northern Essex Community College",
//     value: "Northern Essex Community College"
//   },
//   {
//     label: "College of Our Lady of the Elms",
//     value: "College of Our Lady of the Elms"
//   },
//   { label: "Pine Manor College", value: "Pine Manor College" },
//   {
//     label: "Blessed John XXIII National Seminary",
//     value: "Blessed John XXIII National Seminary"
//   },
//   { label: "Quincy College", value: "Quincy College" },
//   {
//     label: "Quinsigamond Community College",
//     value: "Quinsigamond Community College"
//   },
//   {
//     label: "Kaplan Career Institute-Charlestown",
//     value: "Kaplan Career Institute-Charlestown"
//   },
//   { label: "Regis College", value: "Regis College" },
//   {
//     label: "Roxbury Community College",
//     value: "Roxbury Community College"
//   },
//   { label: "Saint John's Seminary", value: "Saint John's Seminary" },
//   { label: "Salem State University", value: "Salem State University" },
//   {
//     label: "Salter College-West Boylston",
//     value: "Salter College-West Boylston"
//   },
//   { label: "Simmons College", value: "Simmons College" },
//   {
//     label: "Bard College at Simon's Rock",
//     value: "Bard College at Simon's Rock"
//   },
//   { label: "Smith College", value: "Smith College" },
//   {
//     label: "Southeastern Technical Institute",
//     value: "Southeastern Technical Institute"
//   },
//   { label: "Springfield College", value: "Springfield College" },
//   {
//     label: "Springfield Technical Community College",
//     value: "Springfield Technical Community College"
//   },
//   {
//     label: "University of Massachusetts-Dartmouth",
//     value: "University of Massachusetts-Dartmouth"
//   },
//   { label: "Stonehill College", value: "Stonehill College" },
//   { label: "Suffolk University", value: "Suffolk University" },
//   { label: "Rob Roy Academy-Taunton", value: "Rob Roy Academy-Taunton" },
//   { label: "Tufts University", value: "Tufts University" },
//   { label: "Wellesley College", value: "Wellesley College" },
//   {
//     label: "Wentworth Institute of Technology",
//     value: "Wentworth Institute of Technology"
//   },
//   {
//     label: "Western New England University",
//     value: "Western New England University"
//   },
//   {
//     label: "Westfield State University",
//     value: "Westfield State University"
//   },
//   { label: "Wheaton College", value: "Wheaton College" },
//   { label: "Wheelock College", value: "Wheelock College" },
//   { label: "Williams College", value: "Williams College" },
//   {
//     label: "Worcester Polytechnic Institute",
//     value: "Worcester Polytechnic Institute"
//   },
//   {
//     label: "Worcester State University",
//     value: "Worcester State University"
//   },
//   { label: "Adrian College", value: "Adrian College" },
//   { label: "Albion College", value: "Albion College" },
//   { label: "Hillsdale Beauty College", value: "Hillsdale Beauty College" },
//   {
//     label: "Northwestern Technological Institute",
//     value: "Northwestern Technological Institute"
//   },
//   { label: "Alma College", value: "Alma College" },
//   { label: "Alpena Community College", value: "Alpena Community College" },
//   { label: "Andrews University", value: "Andrews University" },
//   { label: "Aquinas College", value: "Aquinas College" },
//   { label: "Baker College of Owosso", value: "Baker College of Owosso" },
//   { label: "Baker College of Flint", value: "Baker College of Flint" },
//   {
//     label: "Bay de Noc Community College",
//     value: "Bay de Noc Community College"
//   },
//   {
//     label: "Bayshire Academy of Beauty Craft Inc",
//     value: "Bayshire Academy of Beauty Craft Inc"
//   },
//   {
//     label: "Cadillac Institute of Cosmetology",
//     value: "Cadillac Institute of Cosmetology"
//   },
//   { label: "Calvin College", value: "Calvin College" },
//   {
//     label: "Calvin Theological Seminary",
//     value: "Calvin Theological Seminary"
//   },
//   { label: "Carnegie Institute", value: "Carnegie Institute" },
//   {
//     label: "Michigan School of Professional Psychology",
//     value: "Michigan School of Professional Psychology"
//   },
//   {
//     label: "Central Michigan University",
//     value: "Central Michigan University"
//   },
//   { label: "Mott Community College", value: "Mott Community College" },
//   {
//     label: "Empire Beauty School-Michigan",
//     value: "Empire Beauty School-Michigan"
//   },
//   { label: "Cleary University", value: "Cleary University" },
//   {
//     label: "Concordia University-Ann Arbor",
//     value: "Concordia University-Ann Arbor"
//   },
//   { label: "Cranbrook Academy of Art", value: "Cranbrook Academy of Art" },
//   {
//     label: "College for Creative Studies",
//     value: "College for Creative Studies"
//   },
//   { label: "Davenport University", value: "Davenport University" },
//   {
//     label: "David Pressley School of Cosmetology",
//     value: "David Pressley School of Cosmetology"
//   },
//   { label: "Delta College", value: "Delta College" },
//   {
//     label: "Detroit Business Institute-Downriver",
//     value: "Detroit Business Institute-Downriver"
//   },
//   {
//     label: "Michigan State University-College of Law",
//     value: "Michigan State University-College of Law"
//   },
//   {
//     label: "MIAT College of Technology",
//     value: "MIAT College of Technology"
//   },
//   {
//     label: "University of Detroit Mercy",
//     value: "University of Detroit Mercy"
//   },
//   {
//     label: "Dorsey Business Schools-Madison Heights",
//     value: "Dorsey Business Schools-Madison Heights"
//   },
//   {
//     label: "Dorsey Business Schools-Southgate",
//     value: "Dorsey Business Schools-Southgate"
//   },
//   {
//     label: "Eastern Michigan University",
//     value: "Eastern Michigan University"
//   },
//   { label: "Ferris State University", value: "Ferris State University" },
//   {
//     label: "Flint Institute of Barbering Inc",
//     value: "Flint Institute of Barbering Inc"
//   },
//   {
//     label: "Glen Oaks Community College",
//     value: "Glen Oaks Community College"
//   },
//   { label: "Kettering University", value: "Kettering University" },
//   {
//     label: "Gogebic Community College",
//     value: "Gogebic Community College"
//   },
//   { label: "Grace Bible College", value: "Grace Bible College" },
//   { label: "Cornerstone University", value: "Cornerstone University" },
//   {
//     label: "Everest Institute-Grand Rapids",
//     value: "Everest Institute-Grand Rapids"
//   },
//   {
//     label: "Grand Rapids Community College",
//     value: "Grand Rapids Community College"
//   },
//   {
//     label: "Grand Valley State University",
//     value: "Grand Valley State University"
//   },
//   {
//     label: "Great Lakes Christian College",
//     value: "Great Lakes Christian College"
//   },
//   {
//     label: "Henry Ford Community College",
//     value: "Henry Ford Community College"
//   },
//   { label: "Hope College", value: "Hope College" },
//   {
//     label: "ITT Technical Institute-Wyoming",
//     value: "ITT Technical Institute-Wyoming"
//   },
//   { label: "Jackson College", value: "Jackson College" },
//   { label: "Wright Beauty Academy", value: "Wright Beauty Academy" },
//   { label: "Kalamazoo College", value: "Kalamazoo College" },
//   {
//     label: "Kalamazoo Valley Community College",
//     value: "Kalamazoo Valley Community College"
//   },
//   {
//     label: "Kellogg Community College",
//     value: "Kellogg Community College"
//   },
//   {
//     label: "Kirtland Community College",
//     value: "Kirtland Community College"
//   },
//   {
//     label: "Michigan College of Beauty-Monroe",
//     value: "Michigan College of Beauty-Monroe"
//   },
//   { label: "Lake Michigan College", value: "Lake Michigan College" },
//   {
//     label: "Lake Superior State University",
//     value: "Lake Superior State University"
//   },
//   {
//     label: "Lansing Community College",
//     value: "Lansing Community College"
//   },
//   {
//     label: "Lawrence Technological University",
//     value: "Lawrence Technological University"
//   },
//   {
//     label: "M J Murphy Beauty College of Mount Pleasant",
//     value: "M J Murphy Beauty College of Mount Pleasant"
//   },
//   { label: "Macomb Community College", value: "Macomb Community College" },
//   { label: "Madonna University", value: "Madonna University" },
//   { label: "Marygrove College", value: "Marygrove College" },
//   { label: "Rochester College", value: "Rochester College" },
//   {
//     label: "University of Michigan-Ann Arbor",
//     value: "University of Michigan-Ann Arbor"
//   },
//   {
//     label: "Michigan Barber School Inc",
//     value: "Michigan Barber School Inc"
//   },
//   {
//     label: "Michigan State University",
//     value: "Michigan State University"
//   },
//   {
//     label: "Michigan Technological University",
//     value: "Michigan Technological University"
//   },
//   {
//     label: "University of Michigan-Dearborn",
//     value: "University of Michigan-Dearborn"
//   },
//   {
//     label: "University of Michigan-Flint",
//     value: "University of Michigan-Flint"
//   },
//   {
//     label: "Mid Michigan Community College",
//     value: "Mid Michigan Community College"
//   },
//   {
//     label: "Monroe County Community College",
//     value: "Monroe County Community College"
//   },
//   {
//     label: "Montcalm Community College",
//     value: "Montcalm Community College"
//   },
//   {
//     label: "Mr Bela's School of Cosmetology Inc",
//     value: "Mr Bela's School of Cosmetology Inc"
//   },
//   {
//     label: "Baker College of Muskegon",
//     value: "Baker College of Muskegon"
//   },
//   {
//     label: "Muskegon Community College",
//     value: "Muskegon Community College"
//   },
//   { label: "Everest College-Skokie", value: "Everest College-Skokie" },
//   {
//     label: "Everest Institute-Southfield",
//     value: "Everest Institute-Southfield"
//   },
//   {
//     label: "North Central Michigan College",
//     value: "North Central Michigan College"
//   },
//   {
//     label: "Northern Michigan University",
//     value: "Northern Michigan University"
//   },
//   {
//     label: "Paul Mitchell the School-Escanaba",
//     value: "Paul Mitchell the School-Escanaba"
//   },
//   {
//     label: "Northwestern Michigan College",
//     value: "Northwestern Michigan College"
//   },
//   {
//     label: "Northwood University-Michigan",
//     value: "Northwood University-Michigan"
//   },
//   {
//     label: "Oakland Community College",
//     value: "Oakland Community College"
//   },
//   { label: "Oakland University", value: "Oakland University" },
//   { label: "Olivet College", value: "Olivet College" },
//   {
//     label: "Port Huron Cosmetology College",
//     value: "Port Huron Cosmetology College"
//   },
//   { label: "Kuyper College", value: "Kuyper College" },
//   {
//     label: "Ross Medical Education Center-Lansing",
//     value: "Ross Medical Education Center-Lansing"
//   },
//   {
//     label: "Ross Medical Education Center-Madison Heights",
//     value: "Ross Medical Education Center-Madison Heights"
//   },
//   {
//     label: "Ross Medical Education Center-Flint",
//     value: "Ross Medical Education Center-Flint"
//   },
//   {
//     label: "Sacred Heart Major Seminary",
//     value: "Sacred Heart Major Seminary"
//   },
//   {
//     label: "Saginaw Valley State University",
//     value: "Saginaw Valley State University"
//   },
//   { label: "Schoolcraft College", value: "Schoolcraft College" },
//   { label: "Siena Heights University", value: "Siena Heights University" },
//   {
//     label: "St Clair County Community College",
//     value: "St Clair County Community College"
//   },
//   {
//     label: "Southwestern Michigan College",
//     value: "Southwestern Michigan College"
//   },
//   {
//     label: "Specs Howard School of Media Arts",
//     value: "Specs Howard School of Media Arts"
//   },
//   { label: "Spring Arbor University", value: "Spring Arbor University" },
//   {
//     label: "Michigan Career and Technical Institute",
//     value: "Michigan Career and Technical Institute"
//   },
//   { label: "Finlandia University", value: "Finlandia University" },
//   {
//     label: "Thomas M Cooley Law Schoo",
//     value: "Thomas M Cooley Law Schoo"
//   },
//   { label: "Twin City Beauty College", value: "Twin City Beauty College" },
//   {
//     label: "Walsh College of Accountancy and Business Administration",
//     value: "Walsh College of Accountancy and Business Administration"
//   },
//   {
//     label: "Washtenaw Community College",
//     value: "Washtenaw Community College"
//   },
//   {
//     label: "Wayne County Community College District",
//     value: "Wayne County Community College District"
//   },
//   { label: "Wayne State University", value: "Wayne State University" },
//   {
//     label: "West Shore Community College",
//     value: "West Shore Community College"
//   },
//   {
//     label: "Western Michigan University",
//     value: "Western Michigan University"
//   },
//   {
//     label: "Western Theological Seminary",
//     value: "Western Theological Seminary"
//   },
//   { label: "Wright Beauty Academy", value: "Wright Beauty Academy" },
//   { label: "Academy College", value: "Academy College" },
//   {
//     label: "Alexandria Technical & Community College",
//     value: "Alexandria Technical & Community College"
//   },
//   { label: "American Indian OIC Inc", value: "American Indian OIC Inc" },
//   { label: "Anoka Technical College", value: "Anoka Technical College" },
//   {
//     label: "Anoka-Ramsey Community College",
//     value: "Anoka-Ramsey Community College"
//   },
//   {
//     label: "Apostolic Bible Institute Inc",
//     value: "Apostolic Bible Institute Inc"
//   },
//   { label: "Augsburg College", value: "Augsburg College" },
//   {
//     label: "Riverland Community College",
//     value: "Riverland Community College"
//   },
//   {
//     label: "Northwest Technical College",
//     value: "Northwest Technical College"
//   },
//   { label: "Bemidji State University", value: "Bemidji State University" },
//   { label: "Bethany Lutheran College", value: "Bethany Lutheran College" },
//   { label: "Bethel University", value: "Bethel University" },
//   { label: "Bethel Seminary-St Paul", value: "Bethel Seminary-St Paul" },
//   {
//     label: "Central Lakes College-Brainerd",
//     value: "Central Lakes College-Brainerd"
//   },
//   { label: "Carleton College", value: "Carleton College" },
//   {
//     label: "Concordia College at Moorhead",
//     value: "Concordia College at Moorhead"
//   },
//   {
//     label: "Concordia University-Saint Paul",
//     value: "Concordia University-Saint Paul"
//   },
//   {
//     label: "Dakota County Technical College",
//     value: "Dakota County Technical College"
//   },
//   { label: "Martin Luther College", value: "Martin Luther College" },
//   { label: "Lake Superior College", value: "Lake Superior College" },
//   {
//     label: "Cosmetology Careers Unlimited College of Hair Skin and Nails",
//     value: "Cosmetology Careers Unlimited College of Hair Skin and Nails"
//   },
//   {
//     label: "Duluth Business University",
//     value: "Duluth Business University"
//   },
//   {
//     label: "Minnesota State Community and Technical College",
//     value: "Minnesota State Community and Technical College"
//   },
//   {
//     label: "Globe University-Woodbury",
//     value: "Globe University-Woodbury"
//   },
//   {
//     label: "Minnesota West Community and Technical College",
//     value: "Minnesota West Community and Technical College"
//   },
//   {
//     label: "Gustavus Adolphus College",
//     value: "Gustavus Adolphus College"
//   },
//   { label: "Hamline University", value: "Hamline University" },
//   {
//     label: "Hazelden Graduate School of Addiction Studies",
//     value: "Hazelden Graduate School of Addiction Studies"
//   },
//   {
//     label: "Hennepin Technical College",
//     value: "Hennepin Technical College"
//   },
//   {
//     label: "Cosmetology Careers Unlimited College of Hair Skin and Nails",
//     value: "Cosmetology Careers Unlimited College of Hair Skin and Nails"
//   },
//   {
//     label: "Hibbing Community College",
//     value: "Hibbing Community College"
//   },
//   {
//     label: "Aveda Institute-Minneapolis",
//     value: "Aveda Institute-Minneapolis"
//   },
//   {
//     label: "Inver Hills Community College",
//     value: "Inver Hills Community College"
//   },
//   { label: "Itasca Community College", value: "Itasca Community College" },
//   {
//     label: "The Art Institutes International-Minnesota",
//     value: "The Art Institutes International-Minnesota"
//   },
//   { label: "Luther Seminary", value: "Luther Seminary" },
//   { label: "Macalester College", value: "Macalester College" },
//   { label: "South Central College", value: "South Central College" },
//   {
//     label: "Minnesota State University-Mankato",
//     value: "Minnesota State University-Mankato"
//   },
//   {
//     label: "Regency Beauty Institute-Blaine",
//     value: "Regency Beauty Institute-Blaine"
//   },
//   { label: "Mayo Medical School", value: "Mayo Medical School" },
//   {
//     label: "Mayo School of Health Sciences",
//     value: "Mayo School of Health Sciences"
//   },
//   {
//     label: "Argosy University-Twin Cities",
//     value: "Argosy University-Twin Cities"
//   },
//   {
//     label: "Mesabi Range Community and Technical College",
//     value: "Mesabi Range Community and Technical College"
//   },
//   {
//     label: "Metropolitan State University",
//     value: "Metropolitan State University"
//   },
//   {
//     label: "University of Minnesota-Twin Cities",
//     value: "University of Minnesota-Twin Cities"
//   },
//   {
//     label: "University of Minnesota-Crookston",
//     value: "University of Minnesota-Crookston"
//   },
//   {
//     label: "Minneapolis Business College",
//     value: "Minneapolis Business College"
//   },
//   {
//     label: "Minneapolis College of Art and Design",
//     value: "Minneapolis College of Art and Design"
//   },
//   {
//     label: "Minneapolis Community and Technical College",
//     value: "Minneapolis Community and Technical College"
//   },
//   {
//     label: "Herzing University-Minneapolis",
//     value: "Herzing University-Minneapolis"
//   },
//   {
//     label: "Minnesota School of Cosmetology-Woodbury Campus",
//     value: "Minnesota School of Cosmetology-Woodbury Campus"
//   },
//   { label: "Crossroads College", value: "Crossroads College" },
//   {
//     label: "University of Minnesota-Duluth",
//     value: "University of Minnesota-Duluth"
//   },
//   {
//     label: "University of Minnesota-Morris",
//     value: "University of Minnesota-Morris"
//   },
//   {
//     label: "Minnesota School of Business-Richfield",
//     value: "Minnesota School of Business-Richfield"
//   },
//   {
//     label: "Model College of Hair Design",
//     value: "Model College of Hair Design"
//   },
//   {
//     label: "Minnesota State University-Moorhead",
//     value: "Minnesota State University-Moorhead"
//   },
//   {
//     label: "North Hennepin Community College",
//     value: "North Hennepin Community College"
//   },
//   {
//     label: "National American University-Roseville",
//     value: "National American University-Roseville"
//   },
//   {
//     label: "Brown College-Mendota Heights",
//     value: "Brown College-Mendota Heights"
//   },
//   {
//     label: "Normandale Community College",
//     value: "Normandale Community College"
//   },
//   { label: "North Central University", value: "North Central University" },
//   {
//     label: "Northland Community and Technical College",
//     value: "Northland Community and Technical College"
//   },
//   {
//     label: "Northwest Technical Institute",
//     value: "Northwest Technical Institute"
//   },
//   {
//     label: "University of Northwestern-St Paul",
//     value: "University of Northwestern-St Paul"
//   },
//   {
//     label: "Northwestern Health Sciences University",
//     value: "Northwestern Health Sciences University"
//   },
//   {
//     label: "Oak Hills Christian College",
//     value: "Oak Hills Christian College"
//   },
//   {
//     label: "Regency Beauty Institute-Burnsville",
//     value: "Regency Beauty Institute-Burnsville"
//   },
//   { label: "Pine Technical College", value: "Pine Technical College" },
//   {
//     label: "Rainy River Community College",
//     value: "Rainy River Community College"
//   },
//   {
//     label: "Rochester Community and Technical College",
//     value: "Rochester Community and Technical College"
//   },
//   {
//     label: "College of Saint Benedict",
//     value: "College of Saint Benedict"
//   },
//   {
//     label: "St Cloud Technical and Community College",
//     value: "St Cloud Technical and Community College"
//   },
//   {
//     label: "Regency Beauty Institute-St Cloud",
//     value: "Regency Beauty Institute-St Cloud"
//   },
//   {
//     label: "Saint Cloud State University",
//     value: "Saint Cloud State University"
//   },
//   { label: "Saint Johns University", value: "Saint Johns University" },
//   {
//     label: "Saint Mary's University of Minnesota",
//     value: "Saint Mary's University of Minnesota"
//   },
//   { label: "St Olaf College", value: "St Olaf College" },
//   { label: "Crown College", value: "Crown College" },
//   {
//     label: "The College of Saint Scholastica",
//     value: "The College of Saint Scholastica"
//   },
//   { label: "University of St Thomas", value: "University of St Thomas" },
//   { label: "College of Visual Arts", value: "College of Visual Arts" },
//   {
//     label: "Empire Beauty School-Bloomington",
//     value: "Empire Beauty School-Bloomington"
//   },
//   { label: "St Catherine University", value: "St Catherine University" },
//   {
//     label: "Rasmussen College-Minnesota",
//     value: "Rasmussen College-Minnesota"
//   },
//   { label: "Saint Paul College", value: "Saint Paul College" },
//   {
//     label: "Southwest Minnesota State University",
//     value: "Southwest Minnesota State University"
//   },
//   {
//     label: "Summit Academy Opportunities Industrialization Center",
//     value: "Summit Academy Opportunities Industrialization Center"
//   },
//   {
//     label: "United Theological Seminary of the Twin Cities",
//     value: "United Theological Seminary of the Twin Cities"
//   },
//   {
//     label: "Vermilion Community College",
//     value: "Vermilion Community College"
//   },
//   {
//     label: "Dunwoody College of Technology",
//     value: "Dunwoody College of Technology"
//   },
//   { label: "Ridgewater College", value: "Ridgewater College" },
//   {
//     label: "Minnesota State College-Southeast Technical",
//     value: "Minnesota State College-Southeast Technical"
//   },
//   { label: "Winona State University", value: "Winona State University" },
//   {
//     label: "William Mitchell College of Law",
//     value: "William Mitchell College of Law"
//   },
//   { label: "Century College", value: "Century College" },
//   { label: "Alcorn State University", value: "Alcorn State University" },
//   { label: "Belhaven University", value: "Belhaven University" },
//   { label: "Blue Mountain College", value: "Blue Mountain College" },
//   { label: "Chris Beauty College", value: "Chris Beauty College" },
//   {
//     label: "Coahoma Community College",
//     value: "Coahoma Community College"
//   },
//   {
//     label: "Antonelli College-Jackson",
//     value: "Antonelli College-Jackson"
//   },
//   {
//     label: "Copiah-Lincoln Community College",
//     value: "Copiah-Lincoln Community College"
//   },
//   {
//     label: "Creations College of Cosmetology",
//     value: "Creations College of Cosmetology"
//   },
//   { label: "Delta Beauty College", value: "Delta Beauty College" },
//   { label: "Delta State University", value: "Delta State University" },
//   {
//     label: "East Central Community College",
//     value: "East Central Community College"
//   },
//   {
//     label: "East Mississippi Community College",
//     value: "East Mississippi Community College"
//   },
//   {
//     label: "Fosters Cosmetology College",
//     value: "Fosters Cosmetology College"
//   },
//   {
//     label: "Academy of Hair Design-Grenada",
//     value: "Academy of Hair Design-Grenada"
//   },
//   { label: "Hinds Community College", value: "Hinds Community College" },
//   { label: "Holmes Community College", value: "Holmes Community College" },
//   {
//     label: "Itawamba Community College",
//     value: "Itawamba Community College"
//   },
//   { label: "Jackson State University", value: "Jackson State University" },
//   {
//     label: "Jones County Junior College",
//     value: "Jones County Junior College"
//   },
//   {
//     label: "Meridian Community College",
//     value: "Meridian Community College"
//   },
//   { label: "Millsaps College", value: "Millsaps College" },
//   {
//     label: "Board of Trustees-Mississippi State Institutions of Higher Learning",
//     value: "Board of Trustees-Mississippi State Institutions of Higher Learning"
//   },
//   {
//     label: "Mississippi Delta Community College",
//     value: "Mississippi Delta Community College"
//   },
//   {
//     label: "University of Mississippi",
//     value: "University of Mississippi"
//   },
//   {
//     label: "University of Mississippi Medical Center",
//     value: "University of Mississippi Medical Center"
//   },
//   {
//     label: "Mississippi University for Women",
//     value: "Mississippi University for Women"
//   },
//   {
//     label: "Mississippi Valley State University",
//     value: "Mississippi Valley State University"
//   },
//   { label: "Mississippi College", value: "Mississippi College" },
//   {
//     label: "Mississippi College of Beauty Culture",
//     value: "Mississippi College of Beauty Culture"
//   },
//   {
//     label: "Mississippi Gulf Coast Community College",
//     value: "Mississippi Gulf Coast Community College"
//   },
//   {
//     label: "Mississippi State University",
//     value: "Mississippi State University"
//   },
//   {
//     label: "Northeast Mississippi Community College",
//     value: "Northeast Mississippi Community College"
//   },
//   {
//     label: "Northwest Mississippi Community College",
//     value: "Northwest Mississippi Community College"
//   },
//   {
//     label: "Pearl River Community College",
//     value: "Pearl River Community College"
//   },
//   { label: "Rust College", value: "Rust College" },
//   {
//     label: "Southeastern Baptist College",
//     value: "Southeastern Baptist College"
//   },
//   {
//     label: "Southwest Mississippi Community College",
//     value: "Southwest Mississippi Community College"
//   },
//   {
//     label: "University of Southern Mississippi",
//     value: "University of Southern Mississippi"
//   },
//   {
//     label: "Magnolia College of Cosmetology",
//     value: "Magnolia College of Cosmetology"
//   },
//   { label: "Tougaloo College", value: "Tougaloo College" },
//   { label: "Wesley Biblical Seminary", value: "Wesley Biblical Seminary" },
//   { label: "William Carey University", value: "William Carey University" },
//   {
//     label: "Anthem College-Maryland Heights",
//     value: "Anthem College-Maryland Heights"
//   },
//   {
//     label: "Aquinas Institute of Theology",
//     value: "Aquinas Institute of Theology"
//   },
//   {
//     label: "Assemblies of God Theological Seminary",
//     value: "Assemblies of God Theological Seminary"
//   },
//   { label: "Avila University", value: "Avila University" },
//   {
//     label: "ITT Technical Institute-Earth City",
//     value: "ITT Technical Institute-Earth City"
//   },
//   { label: "Baptist Bible College", value: "Baptist Bible College" },
//   {
//     label: "House of Heavilin Beauty College-Blue Springs",
//     value: "House of Heavilin Beauty College-Blue Springs"
//   },
//   {
//     label: "Boonslick Technical Education Center",
//     value: "Boonslick Technical Education Center"
//   },
//   { label: "Cox College", value: "Cox College" },
//   {
//     label: "Calvary Bible College and Theological Seminary",
//     value: "Calvary Bible College and Theological Seminary"
//   },
//   {
//     label: "Cape Girardeau Career and Technology Center",
//     value: "Cape Girardeau Career and Technology Center"
//   },
//   {
//     label: "Central Christian College of the Bible",
//     value: "Central Christian College of the Bible"
//   },
//   { label: "Central Bible College", value: "Central Bible College" },
//   {
//     label: "Central Methodist University-College of Liberal Arts and Sciences",
//     value: "Central Methodist University-College of Liberal Arts and Sciences"
//   },
//   {
//     label: "University of Central Missouri",
//     value: "University of Central Missouri"
//   },
//   {
//     label: "Grand River Technical School",
//     value: "Grand River Technical School"
//   },
//   {
//     label: "Chillicothe Beauty Academy Inc",
//     value: "Chillicothe Beauty Academy Inc"
//   },
//   {
//     label: "Cleveland University-Kansas City",
//     value: "Cleveland University-Kansas City"
//   },
//   {
//     label: "Columbia Area Career Center",
//     value: "Columbia Area Career Center"
//   },
//   { label: "Columbia College", value: "Columbia College" },
//   {
//     label: "Conception Seminary College",
//     value: "Conception Seminary College"
//   },
//   { label: "Concordia Seminary", value: "Concordia Seminary" },
//   { label: "Cottey College", value: "Cottey College" },
//   {
//     label: "Covenant Theological Seminary",
//     value: "Covenant Theological Seminary"
//   },
//   { label: "Crowder College", value: "Crowder College" },
//   { label: "Culver-Stockton College", value: "Culver-Stockton College" },
//   {
//     label: "DeVry University-Missouri",
//     value: "DeVry University-Missouri"
//   },
//   { label: "Drury University", value: "Drury University" },
//   { label: "East Central College", value: "East Central College" },
//   {
//     label: "Eden Theological Seminary",
//     value: "Eden Theological Seminary"
//   },
//   {
//     label: "Elaine Steven Beauty College",
//     value: "Elaine Steven Beauty College"
//   },
//   {
//     label: "Pinnacle Career Institute-South Kansas City",
//     value: "Pinnacle Career Institute-South Kansas City"
//   },
//   { label: "Evangel University", value: "Evangel University" },
//   { label: "Fontbonne University", value: "Fontbonne University" },
//   {
//     label: "Forest Institute of Professional Psychology",
//     value: "Forest Institute of Professional Psychology"
//   },
//   {
//     label: "Four Rivers Career Center",
//     value: "Four Rivers Career Center"
//   },
//   {
//     label: "Ozarks Technical Community College",
//     value: "Ozarks Technical Community College"
//   },
//   {
//     label: "Hannibal-LaGrange University",
//     value: "Hannibal-LaGrange University"
//   },
//   {
//     label: "Harris-Stowe State University",
//     value: "Harris-Stowe State University"
//   },
//   { label: "Hickey College", value: "Hickey College" },
//   {
//     label: "House of Heavilin Beauty College-Kansas City",
//     value: "House of Heavilin Beauty College-Kansas City"
//   },
//   {
//     label: "Independence College of Cosmetology",
//     value: "Independence College of Cosmetology"
//   },
//   { label: "Jefferson College", value: "Jefferson College" },
//   {
//     label: "Cosmetology Concepts Institute",
//     value: "Cosmetology Concepts Institute"
//   },
//   {
//     label: "Barnes-Jewish College Goldfarb School of Nursing",
//     value: "Barnes-Jewish College Goldfarb School of Nursing"
//   },
//   {
//     label: "Kansas City Art Institute",
//     value: "Kansas City Art Institute"
//   },
//   {
//     label: "Kennett Career and Technology Center",
//     value: "Kennett Career and Technology Center"
//   },
//   { label: "Kenrick Glennon Seminary", value: "Kenrick Glennon Seminary" },
//   {
//     label: "A T Still University of Health Sciences",
//     value: "A T Still University of Health Sciences"
//   },
//   {
//     label: "Lake Career and Technical Center",
//     value: "Lake Career and Technical Center"
//   },
//   {
//     label: "Lex La-Ray Technical Center",
//     value: "Lex La-Ray Technical Center"
//   },
//   { label: "Lincoln University", value: "Lincoln University" },
//   { label: "Lindenwood University", value: "Lindenwood University" },
//   {
//     label: "Linn State Technical College",
//     value: "Linn State Technical College"
//   },
//   { label: "Logan University", value: "Logan University" },
//   {
//     label: "Metropolitan Community College-Kansas City",
//     value: "Metropolitan Community College-Kansas City"
//   },
//   {
//     label: "Lutheran School of Nursing",
//     value: "Lutheran School of Nursing"
//   },
//   {
//     label: "Maryville University of Saint Louis",
//     value: "Maryville University of Saint Louis"
//   },
//   {
//     label: "Merrell University of Beauty Arts and Science",
//     value: "Merrell University of Beauty Arts and Science"
//   },
//   {
//     label: "Metro Business College-Cape Girardeau",
//     value: "Metro Business College-Cape Girardeau"
//   },
//   {
//     label: "Metropolitan Community College-Kansas City",
//     value: "Metropolitan Community College-Kansas City"
//   },
//   { label: "Midwest Institute", value: "Midwest Institute" },
//   {
//     label: "Midwestern Baptist Theological Seminary",
//     value: "Midwestern Baptist Theological Seminary"
//   },
//   { label: "Mineral Area College", value: "Mineral Area College" },
//   {
//     label: "Westwood College-O'Hare Airport",
//     value: "Westwood College-O'Hare Airport"
//   },
//   {
//     label: "Missouri Baptist University",
//     value: "Missouri Baptist University"
//   },
//   {
//     label: "National Academy of Beauty Arts-Farmington",
//     value: "National Academy of Beauty Arts-Farmington"
//   },
//   { label: "Missouri College", value: "Missouri College" },
//   {
//     label: "Missouri School of Barbering & Hairstyling",
//     value: "Missouri School of Barbering & Hairstyling"
//   },
//   {
//     label: "Missouri Southern State University",
//     value: "Missouri Southern State University"
//   },
//   { label: "Missouri Tech", value: "Missouri Tech" },
//   { label: "Missouri Valley College", value: "Missouri Valley College" },
//   {
//     label: "Missouri Western State University",
//     value: "Missouri Western State University"
//   },
//   {
//     label: "University of Missouri-Columbia",
//     value: "University of Missouri-Columbia"
//   },
//   {
//     label: "University of Missouri-Kansas City",
//     value: "University of Missouri-Kansas City"
//   },
//   {
//     label: "Missouri University of Science and Technology",
//     value: "Missouri University of Science and Technology"
//   },
//   {
//     label: "University of Missouri-St Louis",
//     value: "University of Missouri-St Louis"
//   },
//   {
//     label: "University of Missouri-System Office",
//     value: "University of Missouri-System Office"
//   },
//   {
//     label: "Moberly Area Community College",
//     value: "Moberly Area Community College"
//   },
//   {
//     label: "Hillyard Technical Center",
//     value: "Hillyard Technical Center"
//   },
//   {
//     label: "National Academy of Beauty Arts-St Louis",
//     value: "National Academy of Beauty Arts-St Louis"
//   },
//   {
//     label: "Nazarene Theological Seminary",
//     value: "Nazarene Theological Seminary"
//   },
//   { label: "Neosho Beauty College", value: "Neosho Beauty College" },
//   { label: "Nichols Career Center", value: "Nichols Career Center" },
//   {
//     label: "Northwest Technical School",
//     value: "Northwest Technical School"
//   },
//   { label: "Truman State University", value: "Truman State University" },
//   {
//     label: "Northwest Missouri State University",
//     value: "Northwest Missouri State University"
//   },
//   { label: "Ozark Christian College", value: "Ozark Christian College" },
//   { label: "College of the Ozarks", value: "College of the Ozarks" },
//   { label: "Park University", value: "Park University" },
//   {
//     label: "Stevens Institute of Business & Arts",
//     value: "Stevens Institute of Business & Arts"
//   },
//   {
//     label: "Poplar Bluff Technical Career Center",
//     value: "Poplar Bluff Technical Career Center"
//   },
//   { label: "Ranken Technical College", value: "Ranken Technical College" },
//   {
//     label: "Research College of Nursing",
//     value: "Research College of Nursing"
//   },
//   { label: "Rockhurst University", value: "Rockhurst University" },
//   {
//     label: "Rolla Technical Institute",
//     value: "Rolla Technical Institute"
//   },
//   {
//     label: "Everest College-Springfield",
//     value: "Everest College-Springfield"
//   },
//   { label: "Saint Louis University", value: "Saint Louis University" },
//   {
//     label: "Salem College of Hairstyling",
//     value: "Salem College of Hairstyling"
//   },
//   {
//     label: "Sanford-Brown College-Fenton",
//     value: "Sanford-Brown College-Fenton"
//   },
//   {
//     label: "American College of Hair Design Inc",
//     value: "American College of Hair Design Inc"
//   },
//   {
//     label: "Sikeston Career and Technology Center",
//     value: "Sikeston Career and Technology Center"
//   },
//   {
//     label: "Saint Louis Christian College",
//     value: "Saint Louis Christian College"
//   },
//   {
//     label: "St Louis College of Pharmacy",
//     value: "St Louis College of Pharmacy"
//   },
//   {
//     label: "Saint Louis Community College",
//     value: "Saint Louis Community College"
//   },
//   {
//     label: "Saint Paul School of Theology",
//     value: "Saint Paul School of Theology"
//   },
//   {
//     label: "Southwest Baptist University",
//     value: "Southwest Baptist University"
//   },
//   {
//     label: "Missouri State University-West Plains",
//     value: "Missouri State University-West Plains"
//   },
//   {
//     label: "Mercy Hospital Springfield-School of Radiologic Technology",
//     value: "Mercy Hospital Springfield-School of Radiologic Technology"
//   },
//   {
//     label: "Saint Luke's College of Health Sciences",
//     value: "Saint Luke's College of Health Sciences"
//   },
//   {
//     label: "St Louis College of Health Careers-St Louis",
//     value: "St Louis College of Health Careers-St Louis"
//   },
//   {
//     label: "State Fair Community College",
//     value: "State Fair Community College"
//   },
//   { label: "Stephens College", value: "Stephens College" },
//   {
//     label: "Southeast Missouri State University",
//     value: "Southeast Missouri State University"
//   },
//   {
//     label: "Missouri State University-Springfield",
//     value: "Missouri State University-Springfield"
//   },
//   {
//     label: "Three Rivers Community College",
//     value: "Three Rivers Community College"
//   },
//   {
//     label: "North Central Missouri College",
//     value: "North Central Missouri College"
//   },
//   { label: "Eldon Career Center", value: "Eldon Career Center" },
//   {
//     label: "Truman Medical Center School of Nurse Anesthesia",
//     value: "Truman Medical Center School of Nurse Anesthesia"
//   },
//   {
//     label: "Kansas City University of Medicine and Biosciences",
//     value: "Kansas City University of Medicine and Biosciences"
//   },
//   {
//     label: "Washington University in St Louis",
//     value: "Washington University in St Louis"
//   },
//   { label: "Webster University", value: "Webster University" },
//   {
//     label: "Wentworth Military Academy & Junior College",
//     value: "Wentworth Military Academy & Junior College"
//   },
//   { label: "Westminster College", value: "Westminster College" },
//   { label: "William Jewell College", value: "William Jewell College" },
//   { label: "William Woods University", value: "William Woods University" },
//   { label: "Academy of Cosmetology", value: "Academy of Cosmetology" },
//   {
//     label: "Blackfeet Community College",
//     value: "Blackfeet Community College"
//   },
//   {
//     label: "Butte Academy of Beauty Culture",
//     value: "Butte Academy of Beauty Culture"
//   },
//   {
//     label: "Highlands College of Montana Tech",
//     value: "Highlands College of Montana Tech"
//   },
//   {
//     label: "Crevier's School of Cosmetology",
//     value: "Crevier's School of Cosmetology"
//   },
//   { label: "Carroll College", value: "Carroll College" },
//   { label: "Dawson Community College", value: "Dawson Community College" },
//   { label: "Chief Dull Knife College", value: "Chief Dull Knife College" },
//   {
//     label: "Montana State University-Billings",
//     value: "Montana State University-Billings"
//   },
//   {
//     label: "Flathead Valley Community College",
//     value: "Flathead Valley Community College"
//   },
//   { label: "Aaniiih Nakoda College", value: "Aaniiih Nakoda College" },
//   {
//     label: "Fort Peck Community College",
//     value: "Fort Peck Community College"
//   },
//   {
//     label: "Great Falls College Montana State University",
//     value: "Great Falls College Montana State University"
//   },
//   {
//     label: "University of Great Falls",
//     value: "University of Great Falls"
//   },
//   {
//     label: "Helena College University of Montana",
//     value: "Helena College University of Montana"
//   },
//   { label: "Little Big Horn College", value: "Little Big Horn College" },
//   { label: "Miles Community College", value: "Miles Community College" },
//   { label: "Modern Beauty School Inc", value: "Modern Beauty School Inc" },
//   {
//     label: "Montana Tech of the University of Montana",
//     value: "Montana Tech of the University of Montana"
//   },
//   { label: "Montana State University", value: "Montana State University" },
//   {
//     label: "The University of Montana",
//     value: "The University of Montana"
//   },
//   {
//     label: "Montana State University-Northern",
//     value: "Montana State University-Northern"
//   },
//   { label: "Rocky Mountain College", value: "Rocky Mountain College" },
//   { label: "Salish Kootenai College", value: "Salish Kootenai College" },
//   {
//     label: "The University of Montana-Western",
//     value: "The University of Montana-Western"
//   },
//   {
//     label: "La'James International College",
//     value: "La'James International College"
//   },
//   { label: "Bellevue University", value: "Bellevue University" },
//   { label: "Clarkson College", value: "Clarkson College" },
//   {
//     label: "Bryan College of Health Sciences",
//     value: "Bryan College of Health Sciences"
//   },
//   {
//     label: "Central Community College",
//     value: "Central Community College"
//   },
//   { label: "Chadron State College", value: "Chadron State College" },
//   {
//     label: "College of Hair Design-Downtown",
//     value: "College of Hair Design-Downtown"
//   },
//   {
//     label: "Concordia University-Nebraska",
//     value: "Concordia University-Nebraska"
//   },
//   { label: "Creighton University", value: "Creighton University" },
//   { label: "Doane College-Crete", value: "Doane College-Crete" },
//   { label: "Grace University", value: "Grace University" },
//   { label: "Hastings College", value: "Hastings College" },
//   {
//     label: "Fullen School of Hair Design",
//     value: "Fullen School of Hair Design"
//   },
//   {
//     label: "Alegent Creighton Health School of Radiologic Technology",
//     value: "Alegent Creighton Health School of Radiologic Technology"
//   },
//   { label: "Joseph's College", value: "Joseph's College" },
//   {
//     label: "University of Nebraska at Kearney",
//     value: "University of Nebraska at Kearney"
//   },
//   {
//     label: "Kaplan University-Lincoln Campus",
//     value: "Kaplan University-Lincoln Campus"
//   },
//   {
//     label: "Nebraska Methodist College of Nursing & Allied Health",
//     value: "Nebraska Methodist College of Nursing & Allied Health"
//   },
//   {
//     label: "Metropolitan Community College Area",
//     value: "Metropolitan Community College Area"
//   },
//   {
//     label: "Mid-Plains Community College",
//     value: "Mid-Plains Community College"
//   },
//   { label: "Midland University", value: "Midland University" },
//   {
//     label: "Nebraska Christian College",
//     value: "Nebraska Christian College"
//   },
//   {
//     label: "University of Nebraska at Omaha",
//     value: "University of Nebraska at Omaha"
//   },
//   {
//     label: "Kaplan University-Omaha Campus",
//     value: "Kaplan University-Omaha Campus"
//   },
//   {
//     label: "Nebraska Indian Community College",
//     value: "Nebraska Indian Community College"
//   },
//   {
//     label: "University of Nebraska Medical Center",
//     value: "University of Nebraska Medical Center"
//   },
//   {
//     label: "Nebraska Wesleyan University",
//     value: "Nebraska Wesleyan University"
//   },
//   {
//     label: "University of Nebraska-Lincoln",
//     value: "University of Nebraska-Lincoln"
//   },
//   {
//     label: "Northeast Community College",
//     value: "Northeast Community College"
//   },
//   { label: "Peru State College", value: "Peru State College" },
//   { label: "Summit Christian College", value: "Summit Christian College" },
//   { label: "College of Saint Mary", value: "College of Saint Mary" },
//   {
//     label: "Southeast Community College Area",
//     value: "Southeast Community College Area"
//   },
//   { label: "Union College", value: "Union College" },
//   {
//     label: "University of Nebraska-Central Administration System Office",
//     value: "University of Nebraska-Central Administration System Office"
//   },
//   {
//     label: "Vatterott College-Spring Valley",
//     value: "Vatterott College-Spring Valley"
//   },
//   {
//     label: "Nebraska College of Technical Agriculture",
//     value: "Nebraska College of Technical Agriculture"
//   },
//   { label: "Wayne State College", value: "Wayne State College" },
//   {
//     label: "Regional West Medical Center School of Radiologic Technology",
//     value: "Regional West Medical Center School of Radiologic Technology"
//   },
//   {
//     label: "Western Nebraska Community College",
//     value: "Western Nebraska Community College"
//   },
//   { label: "York College", value: "York College" },
//   {
//     label: "Academy of Hair Design-Las Vegas",
//     value: "Academy of Hair Design-Las Vegas"
//   },
//   {
//     label: "Career College of Northern Nevada",
//     value: "Career College of Northern Nevada"
//   },
//   {
//     label: "College of Southern Nevada",
//     value: "College of Southern Nevada"
//   },
//   {
//     label: "The Art Institute of Las Vegas",
//     value: "The Art Institute of Las Vegas"
//   },
//   {
//     label: "Everest College-Henderson",
//     value: "Everest College-Henderson"
//   },
//   {
//     label: "Marinello Schools of Beauty-Las Vegas",
//     value: "Marinello Schools of Beauty-Las Vegas"
//   },
//   {
//     label: "University of Nevada-Las Vegas",
//     value: "University of Nevada-Las Vegas"
//   },
//   {
//     label: "University of Nevada-Reno",
//     value: "University of Nevada-Reno"
//   },
//   { label: "Great Basin College", value: "Great Basin College" },
//   {
//     label: "Marinello Schools of Beauty-Reno",
//     value: "Marinello Schools of Beauty-Reno"
//   },
//   { label: "Morrison University", value: "Morrison University" },
//   { label: "Sierra Nevada College", value: "Sierra Nevada College" },
//   {
//     label: "Truckee Meadows Community College",
//     value: "Truckee Meadows Community College"
//   },
//   {
//     label: "Nevada System of Higher Education-System Office",
//     value: "Nevada System of Higher Education-System Office"
//   },
//   { label: "Western Nevada College", value: "Western Nevada College" },
//   { label: "Colby-Sawyer College", value: "Colby-Sawyer College" },
//   {
//     label: "Continental Academie of Hair Design-Hudson",
//     value: "Continental Academie of Hair Design-Hudson"
//   },
//   { label: "Daniel Webster College", value: "Daniel Webster College" },
//   { label: "Dartmouth College", value: "Dartmouth College" },
//   {
//     label: "Empire Beauty School-Laconia",
//     value: "Empire Beauty School-Laconia"
//   },
//   {
//     label: "Empire Beauty School-Somersworth",
//     value: "Empire Beauty School-Somersworth"
//   },
//   {
//     label: "Franklin Pierce University",
//     value: "Franklin Pierce University"
//   },
//   {
//     label: "University of New Hampshire-School of Law",
//     value: "University of New Hampshire-School of Law"
//   },
//   { label: "Mount Washington College", value: "Mount Washington College" },
//   { label: "Keene Beauty Academy", value: "Keene Beauty Academy" },
//   { label: "Lebanon College", value: "Lebanon College" },
//   {
//     label: "College of St Mary Magdalen",
//     value: "College of St Mary Magdalen"
//   },
//   {
//     label: "Michaels School of Hair Design and Esthetics-Paul Mitchell Partner School",
//     value: "Michaels School of Hair Design and Esthetics-Paul Mitchell Partner School"
//   },
//   { label: "New England College", value: "New England College" },
//   {
//     label: "New England School of Hair Design Inc",
//     value: "New England School of Hair Design Inc"
//   },
//   {
//     label: "Southern New Hampshire University",
//     value: "Southern New Hampshire University"
//   },
//   {
//     label: "New Hampshire Institute for Therapeutic Arts",
//     value: "New Hampshire Institute for Therapeutic Arts"
//   },
//   {
//     label: "University of New Hampshire-Main Campus",
//     value: "University of New Hampshire-Main Campus"
//   },
//   { label: "Keene State College", value: "Keene State College" },
//   {
//     label: "University of New Hampshire at Manchester",
//     value: "University of New Hampshire at Manchester"
//   },
//   {
//     label: "Plymouth State University",
//     value: "Plymouth State University"
//   },
//   {
//     label: "NHTI-Concord's Community College",
//     value: "NHTI-Concord's Community College"
//   },
//   {
//     label: "White Mountains Community College",
//     value: "White Mountains Community College"
//   },
//   {
//     label: "River Valley Community College",
//     value: "River Valley Community College"
//   },
//   {
//     label: "Lakes Region Community College",
//     value: "Lakes Region Community College"
//   },
//   {
//     label: "Manchester Community College",
//     value: "Manchester Community College"
//   },
//   { label: "Nashua Community College", value: "Nashua Community College" },
//   {
//     label: "Great Bay Community College",
//     value: "Great Bay Community College"
//   },
//   {
//     label: "Paul Mitchell the School-Portsmouth",
//     value: "Paul Mitchell the School-Portsmouth"
//   },
//   { label: "Rivier University", value: "Rivier University" },
//   { label: "Saint Anselm College", value: "Saint Anselm College" },
//   {
//     label: "St Joseph School of Nursing",
//     value: "St Joseph School of Nursing"
//   },
//   { label: "Granite State College", value: "Granite State College" },
//   {
//     label: "Thomas More College of Liberal Arts",
//     value: "Thomas More College of Liberal Arts"
//   },
//   {
//     label: "University System of New Hampshire System Office",
//     value: "University System of New Hampshire System Office"
//   },
//   {
//     label: "Eastwick College-Hackensack",
//     value: "Eastwick College-Hackensack"
//   },
//   {
//     label: "Assumption College for Sisters",
//     value: "Assumption College for Sisters"
//   },
//   {
//     label: "Atlantic Cape Community College",
//     value: "Atlantic Cape Community College"
//   },
//   { label: "Fortis Institute-Wayne", value: "Fortis Institute-Wayne" },
//   { label: "Bergen Community College", value: "Bergen Community College" },
//   {
//     label: "Berkeley College-Woodland Park",
//     value: "Berkeley College-Woodland Park"
//   },
//   { label: "Beth Medrash Govoha", value: "Beth Medrash Govoha" },
//   { label: "Bloomfield College", value: "Bloomfield College" },
//   {
//     label: "Brookdale Community College",
//     value: "Brookdale Community College"
//   },
//   {
//     label: "Burlington County College",
//     value: "Burlington County College"
//   },
//   { label: "Caldwell College", value: "Caldwell College" },
//   { label: "Camden County College", value: "Camden County College" },
//   { label: "Centenary College", value: "Centenary College" },
//   {
//     label: "Adult and Continuing Education-BCTS",
//     value: "Adult and Continuing Education-BCTS"
//   },
//   {
//     label: "Anthem Institute-Parsippany",
//     value: "Anthem Institute-Parsippany"
//   },
//   {
//     label: "Lincoln Technical Institute-Edison",
//     value: "Lincoln Technical Institute-Edison"
//   },
//   {
//     label: "Fox Institute of Business-Clifton",
//     value: "Fox Institute of Business-Clifton"
//   },
//   { label: "Dover Business College", value: "Dover Business College" },
//   {
//     label: "Empire Beauty School-Ocean",
//     value: "Empire Beauty School-Ocean"
//   },
//   {
//     label: "Cooper Health System Center for Allied Health Education",
//     value: "Cooper Health System Center for Allied Health Education"
//   },
//   { label: "County College of Morris", value: "County College of Morris" },
//   {
//     label: "Cumberland County College",
//     value: "Cumberland County College"
//   },
//   {
//     label: "DeVry University-New Jersey",
//     value: "DeVry University-New Jersey"
//   },
//   {
//     label: "Divers Academy International",
//     value: "Divers Academy International"
//   },
//   {
//     label: "Drake College of Business-Elizabeth",
//     value: "Drake College of Business-Elizabeth"
//   },
//   { label: "Drew University", value: "Drew University" },
//   { label: "duCret School of Arts", value: "duCret School of Arts" },
//   {
//     label: "Lincoln Technical Institute-South Plainfield",
//     value: "Lincoln Technical Institute-South Plainfield"
//   },
//   { label: "Essex County College", value: "Essex County College" },
//   {
//     label: "Empire Beauty School-Union",
//     value: "Empire Beauty School-Union"
//   },
//   {
//     label: "Fairleigh Dickinson University-Metropolitan Campus",
//     value: "Fairleigh Dickinson University-Metropolitan Campus"
//   },
//   { label: "Felician College", value: "Felician College" },
//   {
//     label: "Fairleigh Dickinson University-College at Florham",
//     value: "Fairleigh Dickinson University-College at Florham"
//   },
//   {
//     label: "Hohokus School of Trade and Technical Sciences",
//     value: "Hohokus School of Trade and Technical Sciences"
//   },
//   {
//     label: "Georgian Court University",
//     value: "Georgian Court University"
//   },
//   { label: "Rowan University", value: "Rowan University" },
//   {
//     label: "Gloucester County College",
//     value: "Gloucester County College"
//   },
//   {
//     label: "Empire Beauty School-Cherry Hill",
//     value: "Empire Beauty School-Cherry Hill"
//   },
//   {
//     label: "Harris School of Business-Cherry Hill Campus",
//     value: "Harris School of Business-Cherry Hill Campus"
//   },
//   { label: "Eastwick College-Ramsey", value: "Eastwick College-Ramsey" },
//   {
//     label: "Holy Name Medical Center School of Nursing",
//     value: "Holy Name Medical Center School of Nursing"
//   },
//   {
//     label: "Hudson County Community College",
//     value: "Hudson County Community College"
//   },
//   {
//     label: "New Jersey City University",
//     value: "New Jersey City University"
//   },
//   {
//     label: "Joe Kubert School of Cartoon and Graphic Art",
//     value: "Joe Kubert School of Cartoon and Graphic Art"
//   },
//   { label: "Kean University", value: "Kean University" },
//   {
//     label: "Harris School of Business-Voorhees Campus",
//     value: "Harris School of Business-Voorhees Campus"
//   },
//   {
//     label: "Lincoln Technical Institute-Union",
//     value: "Lincoln Technical Institute-Union"
//   },
//   {
//     label: "Rizzieri Aveda School for Beauty and Wellness",
//     value: "Rizzieri Aveda School for Beauty and Wellness"
//   },
//   {
//     label: "Mercer County Community College",
//     value: "Mercer County Community College"
//   },
//   { label: "Middlesex County College", value: "Middlesex County College" },
//   { label: "Monmouth University", value: "Monmouth University" },
//   {
//     label: "Montclair State University",
//     value: "Montclair State University"
//   },
//   {
//     label: "Mountainside School of Nursing",
//     value: "Mountainside School of Nursing"
//   },
//   {
//     label: "Muhlenberg Harold B and Dorothy A Snyder Schools-School of Imaging",
//     value: "Muhlenberg Harold B and Dorothy A Snyder Schools-School of Imaging"
//   },
//   {
//     label: "Muhlenberg Harold B and Dorothy A Snyder Schools-School of Nursing",
//     value: "Muhlenberg Harold B and Dorothy A Snyder Schools-School of Nursing"
//   },
//   {
//     label: "Hohokus School-RETS Nutley",
//     value: "Hohokus School-RETS Nutley"
//   },
//   {
//     label: "Empire Beauty School-Jersey City",
//     value: "Empire Beauty School-Jersey City"
//   },
//   {
//     label: "New Brunswick Theological Seminary",
//     value: "New Brunswick Theological Seminary"
//   },
//   {
//     label: "Robert Fiance Beauty Schools-West New York",
//     value: "Robert Fiance Beauty Schools-West New York"
//   },
//   {
//     label: "New Jersey Institute of Technology",
//     value: "New Jersey Institute of Technology"
//   },
//   { label: "Ocean County College", value: "Ocean County College" },
//   { label: "Omega Institute", value: "Omega Institute" },
//   {
//     label: "P B Cosmetology Education Center",
//     value: "P B Cosmetology Education Center"
//   },
//   { label: "Parisian Beauty School", value: "Parisian Beauty School" },
//   {
//     label: "Passaic County Community College",
//     value: "Passaic County Community College"
//   },
//   { label: "Pennco Tech-Blackwood", value: "Pennco Tech-Blackwood" },
//   {
//     label: "Princeton Theological Seminary",
//     value: "Princeton Theological Seminary"
//   },
//   { label: "Princeton University", value: "Princeton University" },
//   {
//     label: "Rabbinical College of America",
//     value: "Rabbinical College of America"
//   },
//   {
//     label: "Ramapo College of New Jersey",
//     value: "Ramapo College of New Jersey"
//   },
//   {
//     label: "Robert Fiance Beauty Schools-Perth Amboy",
//     value: "Robert Fiance Beauty Schools-Perth Amboy"
//   },
//   { label: "Rider University", value: "Rider University" },
//   {
//     label: "Roman Academy of Beauty Culture",
//     value: "Roman Academy of Beauty Culture"
//   },
//   {
//     label: "Rutgers University-Camden",
//     value: "Rutgers University-Camden"
//   },
//   {
//     label: "Rutgers University-New Brunswick",
//     value: "Rutgers University-New Brunswick"
//   },
//   {
//     label: "Rutgers University-Newark",
//     value: "Rutgers University-Newark"
//   },
//   {
//     label: "St Francis Medical Center-School of Radiologic Technology",
//     value: "St Francis Medical Center-School of Radiologic Technology"
//   },
//   {
//     label: "Saint Francis Medical Center School of Nursing",
//     value: "Saint Francis Medical Center School of Nursing"
//   },
//   { label: "Saint Peter's University", value: "Saint Peter's University" },
//   { label: "Salem Community College", value: "Salem Community College" },
//   { label: "Seton Hall University", value: "Seton Hall University" },
//   {
//     label: "Atlantic Beauty & Spa Academy LLC",
//     value: "Atlantic Beauty & Spa Academy LLC"
//   },
//   {
//     label: "College of Saint Elizabeth",
//     value: "College of Saint Elizabeth"
//   },
//   {
//     label: "Raritan Valley Community College",
//     value: "Raritan Valley Community College"
//   },
//   {
//     label: "Stevens Institute of Technology",
//     value: "Stevens Institute of Technology"
//   },
//   {
//     label: "The Richard Stockton College of New Jersey",
//     value: "The Richard Stockton College of New Jersey"
//   },
//   {
//     label: "Talmudical Academy-New Jersey",
//     value: "Talmudical Academy-New Jersey"
//   },
//   {
//     label: "Teterboro School of Aeronautics",
//     value: "Teterboro School of Aeronautics"
//   },
//   {
//     label: "Thomas Edison State College",
//     value: "Thomas Edison State College"
//   },
//   {
//     label: "The College of New Jersey",
//     value: "The College of New Jersey"
//   },
//   {
//     label: "Sanford-Brown Institute-Iselin",
//     value: "Sanford-Brown Institute-Iselin"
//   },
//   { label: "Union County College", value: "Union County College" },
//   {
//     label: "University of Medicine and Dentistry of New Jersey",
//     value: "University of Medicine and Dentistry of New Jersey"
//   },
//   {
//     label: "William Paterson University of New Jersey",
//     value: "William Paterson University of New Jersey"
//   },
//   {
//     label: "Olympian University of Cosmetology",
//     value: "Olympian University of Cosmetology"
//   },
//   {
//     label: "Central New Mexico Community College",
//     value: "Central New Mexico Community College"
//   },
//   {
//     label: "Navajo Technical University",
//     value: "Navajo Technical University"
//   },
//   {
//     label: "De Wolff College Hair Styling and Cosmetology",
//     value: "De Wolff College Hair Styling and Cosmetology"
//   },
//   {
//     label: "New Mexico State University-Dona Ana",
//     value: "New Mexico State University-Dona Ana"
//   },
//   { label: "Clovis Community College", value: "Clovis Community College" },
//   {
//     label: "Eastern New Mexico University-Main Campus",
//     value: "Eastern New Mexico University-Main Campus"
//   },
//   {
//     label: "Eastern New Mexico University-Roswell Campus",
//     value: "Eastern New Mexico University-Roswell Campus"
//   },
//   {
//     label: "Institute of American Indian and Alaska Native Culture",
//     value: "Institute of American Indian and Alaska Native Culture"
//   },
//   {
//     label: "New Mexico Highlands University",
//     value: "New Mexico Highlands University"
//   },
//   {
//     label: "New Mexico Junior College",
//     value: "New Mexico Junior College"
//   },
//   {
//     label: "New Mexico Military Institute",
//     value: "New Mexico Military Institute"
//   },
//   {
//     label: "University of New Mexico-Gallup Campus",
//     value: "University of New Mexico-Gallup Campus"
//   },
//   {
//     label: "New Mexico Institute of Mining and Technology",
//     value: "New Mexico Institute of Mining and Technology"
//   },
//   {
//     label: "University of New Mexico-Los Alamos Campus",
//     value: "University of New Mexico-Los Alamos Campus"
//   },
//   {
//     label: "University of New Mexico-Main Campus",
//     value: "University of New Mexico-Main Campus"
//   },
//   {
//     label: "New Mexico State University-Alamogordo",
//     value: "New Mexico State University-Alamogordo"
//   },
//   {
//     label: "New Mexico State University-Carlsbad",
//     value: "New Mexico State University-Carlsbad"
//   },
//   {
//     label: "New Mexico State University-Grants",
//     value: "New Mexico State University-Grants"
//   },
//   {
//     label: "New Mexico State University-Main Campus",
//     value: "New Mexico State University-Main Campus"
//   },
//   {
//     label: "University of New Mexico-Valencia County Campus",
//     value: "University of New Mexico-Valencia County Campus"
//   },
//   {
//     label: "Northern New Mexico College",
//     value: "Northern New Mexico College"
//   },
//   { label: "San Juan College", value: "San Juan College" },
//   {
//     label: "Santa Fe Community College",
//     value: "Santa Fe Community College"
//   },
//   {
//     label: "Santa Fe University of Art and Design",
//     value: "Santa Fe University of Art and Design"
//   },
//   {
//     label: "University of the Southwest",
//     value: "University of the Southwest"
//   },
//   { label: "Southwestern College", value: "Southwestern College" },
//   {
//     label: "Southwestern Indian Polytechnic Institute",
//     value: "Southwestern Indian Polytechnic Institute"
//   },
//   {
//     label: "University of New Mexico-Taos Campus",
//     value: "University of New Mexico-Taos Campus"
//   },
//   {
//     label: "Mesalands Community College",
//     value: "Mesalands Community College"
//   },
//   {
//     label: "Vogue College of Cosmetology-Santa Fe",
//     value: "Vogue College of Cosmetology-Santa Fe"
//   },
//   {
//     label: "Western New Mexico University",
//     value: "Western New Mexico University"
//   },
//   {
//     label: "Vaughn College of Aeronautics and Technology",
//     value: "Vaughn College of Aeronautics and Technology"
//   },
//   { label: "Adelphi University", value: "Adelphi University" },
//   {
//     label: "Adirondack Community College",
//     value: "Adirondack Community College"
//   },
//   {
//     label: "Globe Institute of Technology",
//     value: "Globe Institute of Technology"
//   },
//   {
//     label: "Bryant & Stratton College-Albany",
//     value: "Bryant & Stratton College-Albany"
//   },
//   {
//     label: "Albany College of Pharmacy and Health Sciences",
//     value: "Albany College of Pharmacy and Health Sciences"
//   },
//   { label: "Albany Law School", value: "Albany Law School" },
//   { label: "Albany Medical College", value: "Albany Medical College" },
//   { label: "Alfred University", value: "Alfred University" },
//   { label: "Allen School-Brooklyn", value: "Allen School-Brooklyn" },
//   { label: "The Ailey School", value: "The Ailey School" },
//   {
//     label: "American Academy of Dramatic Arts-New York",
//     value: "American Academy of Dramatic Arts-New York"
//   },
//   {
//     label: "American Academy McAllister Institute of Funeral Service",
//     value: "American Academy McAllister Institute of Funeral Service"
//   },
//   { label: "Joffrey Ballet School", value: "Joffrey Ballet School" },
//   {
//     label: "American Musical and Dramatic Academy",
//     value: "American Musical and Dramatic Academy"
//   },
//   { label: "Apex Technical School", value: "Apex Technical School" },
//   {
//     label: "Arnot Ogden Medical Center",
//     value: "Arnot Ogden Medical Center"
//   },
//   {
//     label: "Associated Beth Rivkah Schools",
//     value: "Associated Beth Rivkah Schools"
//   },
//   {
//     label: "Austin's School of Spa Technology",
//     value: "Austin's School of Spa Technology"
//   },
//   {
//     label: "Bank Street College of Education",
//     value: "Bank Street College of Education"
//   },
//   { label: "Bard College", value: "Bard College" },
//   { label: "Barnard College", value: "Barnard College" },
//   {
//     label: "Berk Trade and Business School",
//     value: "Berk Trade and Business School"
//   },
//   {
//     label: "Berkeley College-New York",
//     value: "Berkeley College-New York"
//   },
//   {
//     label: "Beth Hatalmud Rabbinical College",
//     value: "Beth Hatalmud Rabbinical College"
//   },
//   {
//     label: "Beth Hamedrash Shaarei Yosher Institute",
//     value: "Beth Hamedrash Shaarei Yosher Institute"
//   },
//   {
//     label: "Phillips Beth Israel School of Nursing",
//     value: "Phillips Beth Israel School of Nursing"
//   },
//   {
//     label: "Hair Design Institute at Fifth Avenue-Brooklyn",
//     value: "Hair Design Institute at Fifth Avenue-Brooklyn"
//   },
//   { label: "Boricua College", value: "Boricua College" },
//   { label: "Bramson ORT College", value: "Bramson ORT College" },
//   { label: "Briarcliffe College", value: "Briarcliffe College" },
//   { label: "Brittany Beauty School", value: "Brittany Beauty School" },
//   { label: "American Beauty School", value: "American Beauty School" },
//   { label: "Brooklyn Law School", value: "Brooklyn Law School" },
//   {
//     label: "SUNY Broome Community College",
//     value: "SUNY Broome Community College"
//   },
//   {
//     label: "Bryant & Stratton College-Amherst",
//     value: "Bryant & Stratton College-Amherst"
//   },
//   {
//     label: "Bryant & Stratton College-Syracuse North",
//     value: "Bryant & Stratton College-Syracuse North"
//   },
//   {
//     label: "Bryant & Stratton College-Syracuse",
//     value: "Bryant & Stratton College-Syracuse"
//   },
//   {
//     label: "Bryant & Stratton College-Buffalo",
//     value: "Bryant & Stratton College-Buffalo"
//   },
//   {
//     label: "Bryant & Stratton College-Greece",
//     value: "Bryant & Stratton College-Greece"
//   },
//   {
//     label: "Business Informatics Center Inc",
//     value: "Business Informatics Center Inc"
//   },
//   { label: "Canisius College", value: "Canisius College" },
//   {
//     label: "Capri School of Hair Design",
//     value: "Capri School of Hair Design"
//   },
//   {
//     label: "St Paul's School of Nursing-Queens",
//     value: "St Paul's School of Nursing-Queens"
//   },
//   {
//     label: "Cayuga County Community College",
//     value: "Cayuga County Community College"
//   },
//   { label: "Cazenovia College", value: "Cazenovia College" },
//   {
//     label: "Central Yeshiva Tomchei Tmimim Lubavitz",
//     value: "Central Yeshiva Tomchei Tmimim Lubavitz"
//   },
//   {
//     label: "Cheryl Fells School of Business",
//     value: "Cheryl Fells School of Business"
//   },
//   { label: "Christ the King Seminary", value: "Christ the King Seminary" },
//   {
//     label: "Circle in the Square Theater School",
//     value: "Circle in the Square Theater School"
//   },
//   { label: "CUNY System Office", value: "CUNY System Office" },
//   { label: "Clarkson University", value: "Clarkson University" },
//   {
//     label: "Clinton Community College",
//     value: "Clinton Community College"
//   },
//   {
//     label: "Cochran School of Nursing",
//     value: "Cochran School of Nursing"
//   },
//   {
//     label: "Colgate Rochester Crozer Divinity School",
//     value: "Colgate Rochester Crozer Divinity School"
//   },
//   { label: "Colgate University", value: "Colgate University" },
//   {
//     label: "Metropolitan College of New York",
//     value: "Metropolitan College of New York"
//   },
//   {
//     label: "Columbia University in the City of New York",
//     value: "Columbia University in the City of New York"
//   },
//   {
//     label: "Columbia-Greene Community College",
//     value: "Columbia-Greene Community College"
//   },
//   {
//     label: "Empire Beauty School-Queens",
//     value: "Empire Beauty School-Queens"
//   },
//   {
//     label: "Concordia College-New York",
//     value: "Concordia College-New York"
//   },
//   {
//     label: "Continental School of Beauty Culture-Buffalo",
//     value: "Continental School of Beauty Culture-Buffalo"
//   },
//   {
//     label: "Continental School of Beauty Culture-Batavia",
//     value: "Continental School of Beauty Culture-Batavia"
//   },
//   {
//     label: "Continental School of Beauty Culture-Rochester",
//     value: "Continental School of Beauty Culture-Rochester"
//   },
//   {
//     label: "Cooper Union for the Advancement of Science and Art",
//     value: "Cooper Union for the Advancement of Science and Art"
//   },
//   { label: "Cornell University", value: "Cornell University" },
//   {
//     label: "Weill Cornell Medical College",
//     value: "Weill Cornell Medical College"
//   },
//   {
//     label: "Corning Community College",
//     value: "Corning Community College"
//   },
//   {
//     label: "Crouse Hospital College of Nursing",
//     value: "Crouse Hospital College of Nursing"
//   },
//   {
//     label: "Culinary Institute of America",
//     value: "Culinary Institute of America"
//   },
//   {
//     label: "CUNY Bernard M Baruch College",
//     value: "CUNY Bernard M Baruch College"
//   },
//   {
//     label: "CUNY Borough of Manhattan Community College",
//     value: "CUNY Borough of Manhattan Community College"
//   },
//   {
//     label: "CUNY Bronx Community College",
//     value: "CUNY Bronx Community College"
//   },
//   { label: "CUNY Brooklyn College", value: "CUNY Brooklyn College" },
//   {
//     label: "College of Staten Island CUNY",
//     value: "College of Staten Island CUNY"
//   },
//   { label: "CUNY City College", value: "CUNY City College" },
//   {
//     label: "CUNY Graduate School and University Center",
//     value: "CUNY Graduate School and University Center"
//   },
//   {
//     label: "CUNY Hostos Community College",
//     value: "CUNY Hostos Community College"
//   },
//   { label: "CUNY Hunter College", value: "CUNY Hunter College" },
//   {
//     label: "CUNY John Jay College of Criminal Justice",
//     value: "CUNY John Jay College of Criminal Justice"
//   },
//   {
//     label: "CUNY Kingsborough Community College",
//     value: "CUNY Kingsborough Community College"
//   },
//   {
//     label: "CUNY LaGuardia Community College",
//     value: "CUNY LaGuardia Community College"
//   },
//   { label: "CUNY Lehman College", value: "CUNY Lehman College" },
//   {
//     label: "CUNY Medgar Evers College",
//     value: "CUNY Medgar Evers College"
//   },
//   {
//     label: "CUNY New York City College of Technology",
//     value: "CUNY New York City College of Technology"
//   },
//   { label: "CUNY Queens College", value: "CUNY Queens College" },
//   {
//     label: "CUNY Queensborough Community College",
//     value: "CUNY Queensborough Community College"
//   },
//   {
//     label: "CUNY School of Law at Queens College",
//     value: "CUNY School of Law at Queens College"
//   },
//   { label: "CUNY York College", value: "CUNY York College" },
//   {
//     label: "CVPH Medical Center School of Radiologic Technology",
//     value: "CVPH Medical Center School of Radiologic Technology"
//   },
//   { label: "D'Youville College", value: "D'Youville College" },
//   { label: "Daemen College", value: "Daemen College" },
//   {
//     label: "Yeshiva of Far Rockaway Derech Ayson Rabbinical Seminary",
//     value: "Yeshiva of Far Rockaway Derech Ayson Rabbinical Seminary"
//   },
//   {
//     label: "Dominican College of Blauvelt",
//     value: "Dominican College of Blauvelt"
//   },
//   { label: "Dowling College", value: "Dowling College" },
//   {
//     label: "Dutchess Community College",
//     value: "Dutchess Community College"
//   },
//   {
//     label: "Belanger School of Nursing",
//     value: "Belanger School of Nursing"
//   },
//   {
//     label: "Elmira Business Institute",
//     value: "Elmira Business Institute"
//   },
//   { label: "Elmira College", value: "Elmira College" },
//   { label: "Erie Community College", value: "Erie Community College" },
//   {
//     label: "Fashion Institute of Technology",
//     value: "Fashion Institute of Technology"
//   },
//   {
//     label: "Finger Lakes Community College",
//     value: "Finger Lakes Community College"
//   },
//   { label: "Five Towns College", value: "Five Towns College" },
//   { label: "Fordham University", value: "Fordham University" },
//   {
//     label: "The International Culinary Center",
//     value: "The International Culinary Center"
//   },
//   {
//     label: "Fulton-Montgomery Community College",
//     value: "Fulton-Montgomery Community College"
//   },
//   {
//     label: "Gemological Institute of America-New York",
//     value: "Gemological Institute of America-New York"
//   },
//   {
//     label: "The General Theological Seminary",
//     value: "The General Theological Seminary"
//   },
//   {
//     label: "Genesee Community College",
//     value: "Genesee Community College"
//   },
//   {
//     label: "Global Business Institute",
//     value: "Global Business Institute"
//   },
//   {
//     label: "Global Business Institute",
//     value: "Global Business Institute"
//   },
//   { label: "Hamilton College", value: "Hamilton College" },
//   { label: "Hartwick College", value: "Hartwick College" },
//   {
//     label: "Helene Fuld College of Nursing",
//     value: "Helene Fuld College of Nursing"
//   },
//   {
//     label: "Herkimer County Community College",
//     value: "Herkimer County Community College"
//   },
//   { label: "Hilbert College", value: "Hilbert College" },
//   {
//     label: "Hobart William Smith Colleges",
//     value: "Hobart William Smith Colleges"
//   },
//   { label: "Hofstra University", value: "Hofstra University" },
//   { label: "Houghton College", value: "Houghton College" },
//   {
//     label: "Hudson Valley Community College",
//     value: "Hudson Valley Community College"
//   },
//   { label: "Hunter Business School", value: "Hunter Business School" },
//   {
//     label: "Institute of Design and Construction",
//     value: "Institute of Design and Construction"
//   },
//   {
//     label: "Institute of Audio Research",
//     value: "Institute of Audio Research"
//   },
//   { label: "Iona College", value: "Iona College" },
//   {
//     label: "Isabella Graham Hart School of Practical Nursing",
//     value: "Isabella Graham Hart School of Practical Nursing"
//   },
//   {
//     label: "Island Drafting and Technical Institute",
//     value: "Island Drafting and Technical Institute"
//   },
//   { label: "Ithaca College", value: "Ithaca College" },
//   {
//     label: "Jamestown Community College",
//     value: "Jamestown Community College"
//   },
//   {
//     label: "Jamestown Business College",
//     value: "Jamestown Business College"
//   },
//   {
//     label: "Jefferson Community College",
//     value: "Jefferson Community College"
//   },
//   {
//     label: "Jewish Theological Seminary of America",
//     value: "Jewish Theological Seminary of America"
//   },
//   { label: "The Juilliard School", value: "The Juilliard School" },
//   {
//     label: "SBI Campus-An Affiliate of Sanford-Brown",
//     value: "SBI Campus-An Affiliate of Sanford-Brown"
//   },
//   {
//     label: "Kehilath Yakov Rabbinical Seminary",
//     value: "Kehilath Yakov Rabbinical Seminary"
//   },
//   { label: "Keuka College", value: "Keuka College" },
//   { label: "LIM College", value: "LIM College" },
//   { label: "Le Moyne College", value: "Le Moyne College" },
//   { label: "LIU Brooklyn", value: "LIU Brooklyn" },
//   { label: "LIU Post", value: "LIU Post" },
//   {
//     label: "LIU-University Center Campus",
//     value: "LIU-University Center Campus"
//   },
//   {
//     label: "Long Island Beauty School-Hempstead",
//     value: "Long Island Beauty School-Hempstead"
//   },
//   {
//     label: "Long Island Business Institute",
//     value: "Long Island Business Institute"
//   },
//   { label: "LIU Hudson at Rockland", value: "LIU Hudson at Rockland" },
//   { label: "LIU Brentwood", value: "LIU Brentwood" },
//   {
//     label: "Machzikei Hadath Rabbinical College",
//     value: "Machzikei Hadath Rabbinical College"
//   },
//   {
//     label: "Mandl School-The College of Allied Health",
//     value: "Mandl School-The College of Allied Health"
//   },
//   { label: "Manhattan College", value: "Manhattan College" },
//   {
//     label: "Manhattan School of Music",
//     value: "Manhattan School of Music"
//   },
//   { label: "Manhattanville College", value: "Manhattanville College" },
//   { label: "Maria College of Albany", value: "Maria College of Albany" },
//   {
//     label: "Marion S Whelan School of Nursing of Geneva General Hospital",
//     value: "Marion S Whelan School of Nursing of Geneva General Hospital"
//   },
//   { label: "Marist College", value: "Marist College" },
//   {
//     label: "MarJon School of Beauty ltd-Tonawanda",
//     value: "MarJon School of Beauty ltd-Tonawanda"
//   },
//   {
//     label: "Marymount Manhattan College",
//     value: "Marymount Manhattan College"
//   },
//   { label: "Medaille College", value: "Medaille College" },
//   {
//     label: "Memorial School of Nursing",
//     value: "Memorial School of Nursing"
//   },
//   {
//     label: "Memorial Hospital School of Radiation Therapy Technology",
//     value: "Memorial Hospital School of Radiation Therapy Technology"
//   },
//   { label: "Mercy College", value: "Mercy College" },
//   {
//     label: "Mesivta Torah Vodaath Rabbinical Seminary",
//     value: "Mesivta Torah Vodaath Rabbinical Seminary"
//   },
//   {
//     label: "Mesivta of Eastern Parkway-Yeshiva Zichron Meilech",
//     value: "Mesivta of Eastern Parkway-Yeshiva Zichron Meilech"
//   },
//   {
//     label: "Mesivtha Tifereth Jerusalem of America",
//     value: "Mesivtha Tifereth Jerusalem of America"
//   },
//   {
//     label: "Southern Westchester BOCES-Practical Nursing Program",
//     value: "Southern Westchester BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Midway Paris Beauty School",
//     value: "Midway Paris Beauty School"
//   },
//   {
//     label: "Mildred Elley School-Albany Campus",
//     value: "Mildred Elley School-Albany Campus"
//   },
//   {
//     label: "Mirrer Yeshiva Cent Institute",
//     value: "Mirrer Yeshiva Cent Institute"
//   },
//   { label: "Modern Welding School", value: "Modern Welding School" },
//   {
//     label: "Mohawk Valley Community College",
//     value: "Mohawk Valley Community College"
//   },
//   { label: "Molloy College", value: "Molloy College" },
//   { label: "Monroe College", value: "Monroe College" },
//   { label: "Monroe Community College", value: "Monroe Community College" },
//   { label: "Mount Saint Mary College", value: "Mount Saint Mary College" },
//   {
//     label: "Dorothea Hopfer School of Nursing-Mt Vernon Hospital",
//     value: "Dorothea Hopfer School of Nursing-Mt Vernon Hospital"
//   },
//   {
//     label: "College of Mount Saint Vincent",
//     value: "College of Mount Saint Vincent"
//   },
//   {
//     label: "Icahn School of Medicine at Mount Sinai",
//     value: "Icahn School of Medicine at Mount Sinai"
//   },
//   { label: "Nassau Community College", value: "Nassau Community College" },
//   { label: "Nazareth College", value: "Nazareth College" },
//   {
//     label: "Neighborhood Playhouse School of the Theater",
//     value: "Neighborhood Playhouse School of the Theater"
//   },
//   {
//     label: "The College of New Rochelle",
//     value: "The College of New Rochelle"
//   },
//   { label: "The New School", value: "The New School" },
//   {
//     label: "New School of Radio and Television",
//     value: "New School of Radio and Television"
//   },
//   {
//     label: "New York Chiropractic College",
//     value: "New York Chiropractic College"
//   },
//   {
//     label: "Star Career Academy-New York",
//     value: "Star Career Academy-New York"
//   },
//   {
//     label: "New York Institute of English and Business",
//     value: "New York Institute of English and Business"
//   },
//   { label: "New York Law School", value: "New York Law School" },
//   { label: "New York Medical College", value: "New York Medical College" },
//   {
//     label: "New York School for Medical and Dental Assistants",
//     value: "New York School for Medical and Dental Assistants"
//   },
//   {
//     label: "New York Theological Seminary",
//     value: "New York Theological Seminary"
//   },
//   { label: "New York University", value: "New York University" },
//   {
//     label: "Niagara County Community College",
//     value: "Niagara County Community College"
//   },
//   { label: "Niagara University", value: "Niagara University" },
//   {
//     label: "Empire Beauty School-Peekskill",
//     value: "Empire Beauty School-Peekskill"
//   },
//   {
//     label: "North Country Community College",
//     value: "North Country Community College"
//   },
//   {
//     label: "New York College of Podiatric Medicine",
//     value: "New York College of Podiatric Medicine"
//   },
//   {
//     label: "New York Institute of Technology",
//     value: "New York Institute of Technology"
//   },
//   {
//     label: "New York School of Interior Design",
//     value: "New York School of Interior Design"
//   },
//   { label: "Nyack College", value: "Nyack College" },
//   {
//     label: "Ohr Hameir Theological Seminary",
//     value: "Ohr Hameir Theological Seminary"
//   },
//   { label: "Olean Business Institute", value: "Olean Business Institute" },
//   {
//     label: "Onondaga Community College",
//     value: "Onondaga Community College"
//   },
//   {
//     label: "Orange County Community College",
//     value: "Orange County Community College"
//   },
//   {
//     label: "Otsego Area BOCES-Practical Nursing Program",
//     value: "Otsego Area BOCES-Practical Nursing Program"
//   },
//   { label: "Pace University-New York", value: "Pace University-New York" },
//   {
//     label: "Paul Smiths College of Arts and Science",
//     value: "Paul Smiths College of Arts and Science"
//   },
//   {
//     label: "Continental School of Beauty Culture-West Seneca",
//     value: "Continental School of Beauty Culture-West Seneca"
//   },
//   { label: "Plaza College", value: "Plaza College" },
//   {
//     label: "Polytechnic Institute of New York University",
//     value: "Polytechnic Institute of New York University"
//   },
//   { label: "Davis College", value: "Davis College" },
//   { label: "Pratt Institute-Main", value: "Pratt Institute-Main" },
//   {
//     label: "Professional Business College",
//     value: "Professional Business College"
//   },
//   {
//     label: "Rabbinical Academy Mesivta Rabbi Chaim Berlin",
//     value: "Rabbinical Academy Mesivta Rabbi Chaim Berlin"
//   },
//   {
//     label: "Rabbinical College Bobover Yeshiva Bnei Zion",
//     value: "Rabbinical College Bobover Yeshiva Bnei Zion"
//   },
//   {
//     label: "Rabbinical College of Ch'san Sofer New York",
//     value: "Rabbinical College of Ch'san Sofer New York"
//   },
//   {
//     label: "Rabbinical College Beth Shraga",
//     value: "Rabbinical College Beth Shraga"
//   },
//   {
//     label: "Rabbinical Seminary M'kor Chaim",
//     value: "Rabbinical Seminary M'kor Chaim"
//   },
//   {
//     label: "Rabbinical College of Long Island",
//     value: "Rabbinical College of Long Island"
//   },
//   {
//     label: "Rabbinical Seminary of America",
//     value: "Rabbinical Seminary of America"
//   },
//   {
//     label: "Rensselaer Polytechnic Institute",
//     value: "Rensselaer Polytechnic Institute"
//   },
//   {
//     label: "Ridley-Lowell Business & Technical Institute-Binghamton",
//     value: "Ridley-Lowell Business & Technical Institute-Binghamton"
//   },
//   { label: "Roberts Wesleyan College", value: "Roberts Wesleyan College" },
//   {
//     label: "Everest Institute-Rochester",
//     value: "Everest Institute-Rochester"
//   },
//   {
//     label: "Rochester Institute of Technology",
//     value: "Rochester Institute of Technology"
//   },
//   { label: "University of Rochester", value: "University of Rochester" },
//   { label: "Rockefeller University", value: "Rockefeller University" },
//   {
//     label: "Rockland Community College",
//     value: "Rockland Community College"
//   },
//   {
//     label: "Empire Beauty School-Manhattan",
//     value: "Empire Beauty School-Manhattan"
//   },
//   { label: "The Sage Colleges", value: "The Sage Colleges" },
//   {
//     label: "St Bernard's School of Theology and Ministry",
//     value: "St Bernard's School of Theology and Ministry"
//   },
//   {
//     label: "St Bonaventure University",
//     value: "St Bonaventure University"
//   },
//   { label: "St Francis College", value: "St Francis College" },
//   {
//     label: "St Joseph's College of Nursing at St Joseph's Hospital Health Center",
//     value: "St Joseph's College of Nursing at St Joseph's Hospital Health Center"
//   },
//   { label: "St Lawrence University", value: "St Lawrence University" },
//   {
//     label: "The College of Saint Rose",
//     value: "The College of Saint Rose"
//   },
//   {
//     label: "St Thomas Aquinas College",
//     value: "St Thomas Aquinas College"
//   },
//   {
//     label: "Samaritan Hospital School of Nursing",
//     value: "Samaritan Hospital School of Nursing"
//   },
//   { label: "Sarah Lawrence College", value: "Sarah Lawrence College" },
//   {
//     label: "Schenectady County Community College",
//     value: "Schenectady County Community College"
//   },
//   {
//     label: "Sh'or Yoshuv Rabbinical College",
//     value: "Sh'or Yoshuv Rabbinical College"
//   },
//   { label: "Siena College", value: "Siena College" },
//   {
//     label: "Simmons Institute of Funeral Service Inc",
//     value: "Simmons Institute of Funeral Service Inc"
//   },
//   { label: "Skidmore College", value: "Skidmore College" },
//   {
//     label: "Saint Joseph's College-New York",
//     value: "Saint Joseph's College-New York"
//   },
//   {
//     label: "Saint Vladimirs Orthodox Theological Seminary",
//     value: "Saint Vladimirs Orthodox Theological Seminary"
//   },
//   {
//     label: "Spanish-American Institute",
//     value: "Spanish-American Institute"
//   },
//   {
//     label: "Faxton-St Luke's Healthcare School of Radiologic Technology",
//     value: "Faxton-St Luke's Healthcare School of Radiologic Technology"
//   },
//   {
//     label: "Saint Elizabeth College of Nursing",
//     value: "Saint Elizabeth College of Nursing"
//   },
//   {
//     label: "Saint Elizabeth Medical Center School of Radiography",
//     value: "Saint Elizabeth Medical Center School of Radiography"
//   },
//   {
//     label: "Saint John Fisher College",
//     value: "Saint John Fisher College"
//   },
//   {
//     label: "St Paul's School of Nursing-Staten Island",
//     value: "St Paul's School of Nursing-Staten Island"
//   },
//   {
//     label: "St James Mercy Hospital School of Radiologic Science",
//     value: "St James Mercy Hospital School of Radiologic Science"
//   },
//   {
//     label: "St John's University-New York",
//     value: "St John's University-New York"
//   },
//   { label: "SUNY-System Office", value: "SUNY-System Office" },
//   {
//     label: "New York Career Institute",
//     value: "New York Career Institute"
//   },
//   {
//     label: "Suburban Technical School",
//     value: "Suburban Technical School"
//   },
//   {
//     label: "Branford Hall Career Institute-Bohemia Campus",
//     value: "Branford Hall Career Institute-Bohemia Campus"
//   },
//   {
//     label: "Sullivan County Community College",
//     value: "Sullivan County Community College"
//   },
//   {
//     label: "SUNY College of Technology at Alfred",
//     value: "SUNY College of Technology at Alfred"
//   },
//   {
//     label: "SUNY College of Technology at Canton",
//     value: "SUNY College of Technology at Canton"
//   },
//   {
//     label: "SUNY College of Technology at Delhi",
//     value: "SUNY College of Technology at Delhi"
//   },
//   {
//     label: "SUNY College of Agriculture and Technology at Cobleskill",
//     value: "SUNY College of Agriculture and Technology at Cobleskill"
//   },
//   {
//     label: "Farmingdale State College",
//     value: "Farmingdale State College"
//   },
//   {
//     label: "Morrisville State College",
//     value: "Morrisville State College"
//   },
//   { label: "SUNY at Albany", value: "SUNY at Albany" },
//   { label: "SUNY at Binghamton", value: "SUNY at Binghamton" },
//   { label: "University at Buffalo", value: "University at Buffalo" },
//   { label: "Stony Brook University", value: "Stony Brook University" },
//   {
//     label: "SUNY College of Environmental Science and Forestry",
//     value: "SUNY College of Environmental Science and Forestry"
//   },
//   {
//     label: "SUNY Institute of Technology at Utica-Rome",
//     value: "SUNY Institute of Technology at Utica-Rome"
//   },
//   {
//     label: "SUNY College at Brockport",
//     value: "SUNY College at Brockport"
//   },
//   { label: "Buffalo State SUNY", value: "Buffalo State SUNY" },
//   { label: "SUNY College at Cortland", value: "SUNY College at Cortland" },
//   { label: "SUNY at Fredonia", value: "SUNY at Fredonia" },
//   { label: "SUNY College at Geneseo", value: "SUNY College at Geneseo" },
//   {
//     label: "State University of New York at New Paltz",
//     value: "State University of New York at New Paltz"
//   },
//   { label: "SUNY Oneonta", value: "SUNY Oneonta" },
//   { label: "SUNY College at Oswego", value: "SUNY College at Oswego" },
//   { label: "SUNY College at Potsdam", value: "SUNY College at Potsdam" },
//   { label: "SUNY at Purchase College", value: "SUNY at Purchase College" },
//   {
//     label: "SUNY College of Optometry",
//     value: "SUNY College of Optometry"
//   },
//   {
//     label: "SUNY College at Old Westbury",
//     value: "SUNY College at Old Westbury"
//   },
//   {
//     label: "SUNY College at Plattsburgh",
//     value: "SUNY College at Plattsburgh"
//   },
//   {
//     label: "SUNY Downstate Medical Center",
//     value: "SUNY Downstate Medical Center"
//   },
//   {
//     label: "SUNY Empire State College",
//     value: "SUNY Empire State College"
//   },
//   { label: "SUNY Maritime College", value: "SUNY Maritime College" },
//   {
//     label: "Upstate Medical University",
//     value: "Upstate Medical University"
//   },
//   {
//     label: "Swedish Institute a College of Health Sciences",
//     value: "Swedish Institute a College of Health Sciences"
//   },
//   { label: "Syracuse University", value: "Syracuse University" },
//   {
//     label: "Talmudical Seminary Oholei Torah",
//     value: "Talmudical Seminary Oholei Torah"
//   },
//   {
//     label: "Talmudical Institute of Upstate New York",
//     value: "Talmudical Institute of Upstate New York"
//   },
//   {
//     label: "Teachers College at Columbia University",
//     value: "Teachers College at Columbia University"
//   },
//   {
//     label: "Technical Career Institutes",
//     value: "Technical Career Institutes"
//   },
//   {
//     label: "Tompkins Cortland Community College",
//     value: "Tompkins Cortland Community College"
//   },
//   {
//     label: "Torah Temimah Talmudical Seminary",
//     value: "Torah Temimah Talmudical Seminary"
//   },
//   { label: "Touro College", value: "Touro College" },
//   { label: "Trocaire College", value: "Trocaire College" },
//   { label: "Excelsior College", value: "Excelsior College" },
//   {
//     label: "Ulster County Community College",
//     value: "Ulster County Community College"
//   },
//   {
//     label: "Sanford-Brown Institute-New York",
//     value: "Sanford-Brown Institute-New York"
//   },
//   { label: "Union College", value: "Union College" },
//   {
//     label: "Union Theological Seminary in the City of New York",
//     value: "Union Theological Seminary in the City of New York"
//   },
//   {
//     label: "United Talmudical Seminary",
//     value: "United Talmudical Seminary"
//   },
//   {
//     label: "United States Merchant Marine Academy",
//     value: "United States Merchant Marine Academy"
//   },
//   {
//     label: "United States Military Academy",
//     value: "United States Military Academy"
//   },
//   { label: "Utica College", value: "Utica College" },
//   { label: "Utica School of Commerce", value: "Utica School of Commerce" },
//   { label: "Vassar College", value: "Vassar College" },
//   { label: "Villa Maria College", value: "Villa Maria College" },
//   { label: "School of Visual Arts", value: "School of Visual Arts" },
//   { label: "Wagner College", value: "Wagner College" },
//   { label: "Webb Institute", value: "Webb Institute" },
//   { label: "Wells College", value: "Wells College" },
//   {
//     label: "The College of Westchester",
//     value: "The College of Westchester"
//   },
//   {
//     label: "SUNY Westchester Community College",
//     value: "SUNY Westchester Community College"
//   },
//   {
//     label: "Westchester School of Beauty Culture",
//     value: "Westchester School of Beauty Culture"
//   },
//   { label: "Wood Tobe-Coburn School", value: "Wood Tobe-Coburn School" },
//   {
//     label: "Word of Life Bible Institute",
//     value: "Word of Life Bible Institute"
//   },
//   { label: "Yeshiva Karlin Stolin", value: "Yeshiva Karlin Stolin" },
//   { label: "Yeshivat Mikdash Melech", value: "Yeshivat Mikdash Melech" },
//   { label: "Yeshiva Derech Chaim", value: "Yeshiva Derech Chaim" },
//   {
//     label: "Yeshiva of Nitra Rabbinical College",
//     value: "Yeshiva of Nitra Rabbinical College"
//   },
//   { label: "Yeshiva Shaar Hatorah", value: "Yeshiva Shaar Hatorah" },
//   { label: "Yeshiva University", value: "Yeshiva University" },
//   { label: "Yeshivath Viznitz", value: "Yeshivath Viznitz" },
//   { label: "Yeshivath Zichron Moshe", value: "Yeshivath Zichron Moshe" },
//   { label: "College of the Albemarle", value: "College of the Albemarle" },
//   {
//     label: "The Art Institute of Charlotte",
//     value: "The Art Institute of Charlotte"
//   },
//   {
//     label: "South Piedmont Community College",
//     value: "South Piedmont Community College"
//   },
//   {
//     label: "Appalachian State University",
//     value: "Appalachian State University"
//   },
//   {
//     label: "Asheville-Buncombe Technical Community College",
//     value: "Asheville-Buncombe Technical Community College"
//   },
//   { label: "Barton College", value: "Barton College" },
//   {
//     label: "Beaufort County Community College",
//     value: "Beaufort County Community College"
//   },
//   { label: "Belmont Abbey College", value: "Belmont Abbey College" },
//   { label: "Bennett College", value: "Bennett College" },
//   { label: "Bladen Community College", value: "Bladen Community College" },
//   {
//     label: "Blue Ridge Community College",
//     value: "Blue Ridge Community College"
//   },
//   { label: "Brevard College", value: "Brevard College" },
//   {
//     label: "Brookstone College-Charlotte",
//     value: "Brookstone College-Charlotte"
//   },
//   {
//     label: "Brunswick Community College",
//     value: "Brunswick Community College"
//   },
//   {
//     label: "Cabarrus College of Health Sciences",
//     value: "Cabarrus College of Health Sciences"
//   },
//   {
//     label: "Caldwell Community College and Technical Institute",
//     value: "Caldwell Community College and Technical Institute"
//   },
//   { label: "Campbell University", value: "Campbell University" },
//   {
//     label: "Cape Fear Community College",
//     value: "Cape Fear Community College"
//   },
//   {
//     label: "Carolina School of Broadcasting",
//     value: "Carolina School of Broadcasting"
//   },
//   {
//     label: "Carteret Community College",
//     value: "Carteret Community College"
//   },
//   { label: "Catawba College", value: "Catawba College" },
//   {
//     label: "Catawba Valley Community College",
//     value: "Catawba Valley Community College"
//   },
//   { label: "South College-Asheville", value: "South College-Asheville" },
//   {
//     label: "Central Carolina Community College",
//     value: "Central Carolina Community College"
//   },
//   {
//     label: "Central Piedmont Community College",
//     value: "Central Piedmont Community College"
//   },
//   { label: "Chowan University", value: "Chowan University" },
//   {
//     label: "Cleveland Community College",
//     value: "Cleveland Community College"
//   },
//   {
//     label: "Coastal Carolina Community College",
//     value: "Coastal Carolina Community College"
//   },
//   { label: "Craven Community College", value: "Craven Community College" },
//   {
//     label: "Davidson County Community College",
//     value: "Davidson County Community College"
//   },
//   { label: "Davidson College", value: "Davidson College" },
//   { label: "Duke University", value: "Duke University" },
//   {
//     label: "Durham Technical Community College",
//     value: "Durham Technical Community College"
//   },
//   { label: "East Carolina University", value: "East Carolina University" },
//   {
//     label: "Edgecombe Community College",
//     value: "Edgecombe Community College"
//   },
//   {
//     label: "Elizabeth City State University",
//     value: "Elizabeth City State University"
//   },
//   { label: "Elon University", value: "Elon University" },
//   {
//     label: "Fayetteville Beauty College",
//     value: "Fayetteville Beauty College"
//   },
//   {
//     label: "Fayetteville Technical Community College",
//     value: "Fayetteville Technical Community College"
//   },
//   {
//     label: "Fayetteville State University",
//     value: "Fayetteville State University"
//   },
//   {
//     label: "Forsyth Technical Community College",
//     value: "Forsyth Technical Community College"
//   },
//   { label: "Gardner-Webb University", value: "Gardner-Webb University" },
//   { label: "Gaston College", value: "Gaston College" },
//   { label: "Greensboro College", value: "Greensboro College" },
//   { label: "Guilford College", value: "Guilford College" },
//   {
//     label: "Guilford Technical Community College",
//     value: "Guilford Technical Community College"
//   },
//   {
//     label: "Halifax Community College",
//     value: "Halifax Community College"
//   },
//   {
//     label: "Haywood Community College",
//     value: "Haywood Community College"
//   },
//   { label: "Heritage Bible College", value: "Heritage Bible College" },
//   { label: "High Point University", value: "High Point University" },
//   {
//     label: "Isothermal Community College",
//     value: "Isothermal Community College"
//   },
//   {
//     label: "James Sprunt Community College",
//     value: "James Sprunt Community College"
//   },
//   { label: "Laurel University", value: "Laurel University" },
//   {
//     label: "Johnson C Smith University",
//     value: "Johnson C Smith University"
//   },
//   {
//     label: "Johnston Community College",
//     value: "Johnston Community College"
//   },
//   { label: "Lees-McRae College", value: "Lees-McRae College" },
//   { label: "Lenoir Community College", value: "Lenoir Community College" },
//   { label: "Lenoir-Rhyne University", value: "Lenoir-Rhyne University" },
//   { label: "Leons Beauty School Inc", value: "Leons Beauty School Inc" },
//   { label: "Livingstone College", value: "Livingstone College" },
//   { label: "Louisburg College", value: "Louisburg College" },
//   { label: "Mars Hill University", value: "Mars Hill University" },
//   { label: "Martin Community College", value: "Martin Community College" },
//   {
//     label: "Mayland Community College",
//     value: "Mayland Community College"
//   },
//   {
//     label: "McDowell Technical Community College",
//     value: "McDowell Technical Community College"
//   },
//   { label: "Mercy School of Nursing", value: "Mercy School of Nursing" },
//   { label: "Meredith College", value: "Meredith College" },
//   { label: "Methodist University", value: "Methodist University" },
//   {
//     label: "Miller-Motte College-Wilmington",
//     value: "Miller-Motte College-Wilmington"
//   },
//   {
//     label: "Mitchell Community College",
//     value: "Mitchell Community College"
//   },
//   {
//     label: "Mitchells Hairstyling Academy-Greenville",
//     value: "Mitchells Hairstyling Academy-Greenville"
//   },
//   {
//     label: "Mitchells Hairstyling Academy-Wilson",
//     value: "Mitchells Hairstyling Academy-Wilson"
//   },
//   {
//     label: "Regina's College of Beauty-Monroe",
//     value: "Regina's College of Beauty-Monroe"
//   },
//   {
//     label: "Montgomery Community College",
//     value: "Montgomery Community College"
//   },
//   { label: "Montreat College", value: "Montreat College" },
//   { label: "Mount Olive College", value: "Mount Olive College" },
//   { label: "College of Wilmington", value: "College of Wilmington" },
//   { label: "Nash Community College", value: "Nash Community College" },
//   {
//     label: "North Carolina A & T State University",
//     value: "North Carolina A & T State University"
//   },
//   {
//     label: "University of North Carolina at Asheville",
//     value: "University of North Carolina at Asheville"
//   },
//   {
//     label: "University of North Carolina at Chapel Hill",
//     value: "University of North Carolina at Chapel Hill"
//   },
//   {
//     label: "University of North Carolina at Charlotte",
//     value: "University of North Carolina at Charlotte"
//   },
//   {
//     label: "University of North Carolina at Greensboro",
//     value: "University of North Carolina at Greensboro"
//   },
//   {
//     label: "North Carolina Central University",
//     value: "North Carolina Central University"
//   },
//   {
//     label: "University of North Carolina System Office",
//     value: "University of North Carolina System Office"
//   },
//   {
//     label: "University of North Carolina School of the Arts",
//     value: "University of North Carolina School of the Arts"
//   },
//   {
//     label: "North Carolina State University at Raleigh",
//     value: "North Carolina State University at Raleigh"
//   },
//   {
//     label: "North Carolina Wesleyan College",
//     value: "North Carolina Wesleyan College"
//   },
//   {
//     label: "University of North Carolina Wilmington",
//     value: "University of North Carolina Wilmington"
//   },
//   {
//     label: "Pamlico Community College",
//     value: "Pamlico Community College"
//   },
//   { label: "William Peace University", value: "William Peace University" },
//   {
//     label: "University of North Carolina at Pembroke",
//     value: "University of North Carolina at Pembroke"
//   },
//   { label: "Pfeiffer University", value: "Pfeiffer University" },
//   {
//     label: "Piedmont International University",
//     value: "Piedmont International University"
//   },
//   {
//     label: "Piedmont Community College",
//     value: "Piedmont Community College"
//   },
//   { label: "Pitt Community College", value: "Pitt Community College" },
//   {
//     label: "Queens University of Charlotte",
//     value: "Queens University of Charlotte"
//   },
//   {
//     label: "Randolph Community College",
//     value: "Randolph Community College"
//   },
//   {
//     label: "Richmond Community College",
//     value: "Richmond Community College"
//   },
//   {
//     label: "Mid-Atlantic Christian University",
//     value: "Mid-Atlantic Christian University"
//   },
//   {
//     label: "Roanoke-Chowan Community College",
//     value: "Roanoke-Chowan Community College"
//   },
//   {
//     label: "Robeson Community College",
//     value: "Robeson Community College"
//   },
//   {
//     label: "Rockingham Community College",
//     value: "Rockingham Community College"
//   },
//   {
//     label: "Rowan-Cabarrus Community College",
//     value: "Rowan-Cabarrus Community College"
//   },
//   {
//     label: "Saint Augustine's University",
//     value: "Saint Augustine's University"
//   },
//   { label: "Salem College", value: "Salem College" },
//   {
//     label: "Sampson Community College",
//     value: "Sampson Community College"
//   },
//   {
//     label: "Sandhills Community College",
//     value: "Sandhills Community College"
//   },
//   { label: "Shaw University", value: "Shaw University" },
//   {
//     label: "Paul Mitchell the School-Fayetteville",
//     value: "Paul Mitchell the School-Fayetteville"
//   },
//   { label: "St Andrews University", value: "St Andrews University" },
//   {
//     label: "Empire Beauty School-Matthews",
//     value: "Empire Beauty School-Matthews"
//   },
//   {
//     label: "Southeastern Community College",
//     value: "Southeastern Community College"
//   },
//   {
//     label: "Southwestern Community College",
//     value: "Southwestern Community College"
//   },
//   { label: "Stanly Community College", value: "Stanly Community College" },
//   {
//     label: "Southeastern Baptist Theological Seminary",
//     value: "Southeastern Baptist Theological Seminary"
//   },
//   { label: "Surry Community College", value: "Surry Community College" },
//   {
//     label: "Alamance Community College",
//     value: "Alamance Community College"
//   },
//   {
//     label: "Tri-County Community College",
//     value: "Tri-County Community College"
//   },
//   {
//     label: "Vance-Granville Community College",
//     value: "Vance-Granville Community College"
//   },
//   { label: "Wake Forest University", value: "Wake Forest University" },
//   {
//     label: "Wake Technical Community College",
//     value: "Wake Technical Community College"
//   },
//   { label: "Warren Wilson College", value: "Warren Wilson College" },
//   { label: "Watts School of Nursing", value: "Watts School of Nursing" },
//   { label: "Wayne Community College", value: "Wayne Community College" },
//   {
//     label: "Western Piedmont Community College",
//     value: "Western Piedmont Community College"
//   },
//   { label: "Wilkes Community College", value: "Wilkes Community College" },
//   { label: "Wilson Community College", value: "Wilson Community College" },
//   { label: "Wingate University", value: "Wingate University" },
//   {
//     label: "Carolina Christian College",
//     value: "Carolina Christian College"
//   },
//   {
//     label: "Winston Salem Barber School",
//     value: "Winston Salem Barber School"
//   },
//   {
//     label: "Winston-Salem State University",
//     value: "Winston-Salem State University"
//   },
//   {
//     label: "Western Carolina University",
//     value: "Western Carolina University"
//   },
//   {
//     label: "Rasmussen College-North Dakota",
//     value: "Rasmussen College-North Dakota"
//   },
//   { label: "Bismarck State College", value: "Bismarck State College" },
//   {
//     label: "Dickinson State University",
//     value: "Dickinson State University"
//   },
//   {
//     label: "Fort Berthold Community College",
//     value: "Fort Berthold Community College"
//   },
//   {
//     label: "Josef's School of Hair Design Inc-Grand Forks",
//     value: "Josef's School of Hair Design Inc-Grand Forks"
//   },
//   {
//     label: "Headquarters Academy of Hair Design Inc",
//     value: "Headquarters Academy of Hair Design Inc"
//   },
//   { label: "University of Jamestown", value: "University of Jamestown" },
//   {
//     label: "Josef's School of Hair Design Inc-Fargo Downtown",
//     value: "Josef's School of Hair Design Inc-Fargo Downtown"
//   },
//   {
//     label: "Lake Region State College",
//     value: "Lake Region State College"
//   },
//   {
//     label: "Cankdeska Cikana Community College",
//     value: "Cankdeska Cikana Community College"
//   },
//   { label: "University of Mary", value: "University of Mary" },
//   {
//     label: "Mayville State University",
//     value: "Mayville State University"
//   },
//   {
//     label: "Sanford College of Nursing",
//     value: "Sanford College of Nursing"
//   },
//   { label: "Minot State University", value: "Minot State University" },
//   { label: "Moler Barber College", value: "Moler Barber College" },
//   {
//     label: "University of North Dakota",
//     value: "University of North Dakota"
//   },
//   {
//     label: "North Dakota State College of Science",
//     value: "North Dakota State College of Science"
//   },
//   {
//     label: "Dakota College at Bottineau",
//     value: "Dakota College at Bottineau"
//   },
//   {
//     label: "North Dakota State University-Main Campus",
//     value: "North Dakota State University-Main Campus"
//   },
//   { label: "Williston State College", value: "Williston State College" },
//   {
//     label: "JZ Trend Academy Paul Mitchell Partner School",
//     value: "JZ Trend Academy Paul Mitchell Partner School"
//   },
//   { label: "Sitting Bull College", value: "Sitting Bull College" },
//   { label: "Trinity Bible College", value: "Trinity Bible College" },
//   {
//     label: "Turtle Mountain Community College",
//     value: "Turtle Mountain Community College"
//   },
//   {
//     label: "United Tribes Technical College",
//     value: "United Tribes Technical College"
//   },
//   {
//     label: "Valley City State University",
//     value: "Valley City State University"
//   },
//   { label: "ETI Technical College", value: "ETI Technical College" },
//   {
//     label: "The Art Institute of Cincinnati",
//     value: "The Art Institute of Cincinnati"
//   },
//   {
//     label: "Miami-Jacobs Career College-Independence",
//     value: "Miami-Jacobs Career College-Independence"
//   },
//   {
//     label: "Air Force Institute of Technology-Graduate School of Engineering & Management",
//     value: "Air Force Institute of Technology-Graduate School of Engineering & Management"
//   },
//   {
//     label: "Akron Institute of Herzing University",
//     value: "Akron Institute of Herzing University"
//   },
//   {
//     label: "University of Akron Main Campus",
//     value: "University of Akron Main Campus"
//   },
//   {
//     label: "Akron School of Practical Nursing",
//     value: "Akron School of Practical Nursing"
//   },
//   {
//     label: "University of Akron Wayne College",
//     value: "University of Akron Wayne College"
//   },
//   {
//     label: "Allegheny Wesleyan College",
//     value: "Allegheny Wesleyan College"
//   },
//   {
//     label: "Antonelli College-Cincinnati",
//     value: "Antonelli College-Cincinnati"
//   },
//   { label: "Apollo Career Center", value: "Apollo Career Center" },
//   {
//     label: "Art Academy of Cincinnati",
//     value: "Art Academy of Cincinnati"
//   },
//   {
//     label: "Ashland County-West Holmes Career Center",
//     value: "Ashland County-West Holmes Career Center"
//   },
//   { label: "Ashland University", value: "Ashland University" },
//   {
//     label: "Ashtabula County Technical and Career Campus",
//     value: "Ashtabula County Technical and Career Campus"
//   },
//   { label: "Athenaeum of Ohio", value: "Athenaeum of Ohio" },
//   { label: "Auburn Career Center", value: "Auburn Career Center" },
//   {
//     label: "Aultman College of Nursing and Health Sciences",
//     value: "Aultman College of Nursing and Health Sciences"
//   },
//   {
//     label: "Baldwin Wallace University",
//     value: "Baldwin Wallace University"
//   },
//   { label: "Belmont College", value: "Belmont College" },
//   { label: "Bluffton University", value: "Bluffton University" },
//   { label: "Fortis College-Ravenna", value: "Fortis College-Ravenna" },
//   {
//     label: "Bowling Green State University-Firelands",
//     value: "Bowling Green State University-Firelands"
//   },
//   {
//     label: "Bowling Green State University-Main Campus",
//     value: "Bowling Green State University-Main Campus"
//   },
//   {
//     label: "Bryant & Stratton College-Parma",
//     value: "Bryant & Stratton College-Parma"
//   },
//   {
//     label: "Buckeye Hills Career Center",
//     value: "Buckeye Hills Career Center"
//   },
//   {
//     label: "Butler Tech-D Russel Lee Career Center",
//     value: "Butler Tech-D Russel Lee Career Center"
//   },
//   {
//     label: "Canton City Schools Adult Career and Technical Education",
//     value: "Canton City Schools Adult Career and Technical Education"
//   },
//   { label: "Capital University", value: "Capital University" },
//   { label: "Valley Beauty School", value: "Valley Beauty School" },
//   {
//     label: "Carousel Beauty College-Middletown",
//     value: "Carousel Beauty College-Middletown"
//   },
//   {
//     label: "Carousel Beauty College-Dayton",
//     value: "Carousel Beauty College-Dayton"
//   },
//   {
//     label: "Carousel of Miami Valley Beauty College",
//     value: "Carousel of Miami Valley Beauty College"
//   },
//   {
//     label: "Case Western Reserve University",
//     value: "Case Western Reserve University"
//   },
//   { label: "Cedarville University", value: "Cedarville University" },
//   {
//     label: "Central Ohio Technical College",
//     value: "Central Ohio Technical College"
//   },
//   {
//     label: "Central School of Practical Nursing",
//     value: "Central School of Practical Nursing"
//   },
//   { label: "Central State University", value: "Central State University" },
//   { label: "Chatfield College", value: "Chatfield College" },
//   {
//     label: "Choffin Career  and Technical Center",
//     value: "Choffin Career  and Technical Center"
//   },
//   {
//     label: "The Christ College of Nursing and Health Sciences",
//     value: "The Christ College of Nursing and Health Sciences"
//   },
//   {
//     label: "Cincinnati Christian University",
//     value: "Cincinnati Christian University"
//   },
//   {
//     label: "Cincinnati College of Mortuary Science",
//     value: "Cincinnati College of Mortuary Science"
//   },
//   {
//     label: "University of Cincinnati-Main Campus",
//     value: "University of Cincinnati-Main Campus"
//   },
//   {
//     label: "Cincinnati State Technical and Community College",
//     value: "Cincinnati State Technical and Community College"
//   },
//   {
//     label: "University of Cincinnati-Clermont College",
//     value: "University of Cincinnati-Clermont College"
//   },
//   {
//     label: "University of Cincinnati-Blue Ash College",
//     value: "University of Cincinnati-Blue Ash College"
//   },
//   {
//     label: "Ohio Christian University",
//     value: "Ohio Christian University"
//   },
//   {
//     label: "Clark State Community College",
//     value: "Clark State Community College"
//   },
//   {
//     label: "Scott College of Cosmetology",
//     value: "Scott College of Cosmetology"
//   },
//   {
//     label: "Cleveland Institute of Art",
//     value: "Cleveland Institute of Art"
//   },
//   {
//     label: "Cleveland Institute of Dental-Medical Assistants-Cleveland",
//     value: "Cleveland Institute of Dental-Medical Assistants-Cleveland"
//   },
//   {
//     label: "Cleveland Institute of Music",
//     value: "Cleveland Institute of Music"
//   },
//   {
//     label: "Cleveland State University",
//     value: "Cleveland State University"
//   },
//   {
//     label: "Columbiana County Career and Technical Center",
//     value: "Columbiana County Career and Technical Center"
//   },
//   { label: "Bradford School", value: "Bradford School" },
//   {
//     label: "Columbus College of Art and Design",
//     value: "Columbus College of Art and Design"
//   },
//   { label: "Kaplan College-Columbus", value: "Kaplan College-Columbus" },
//   {
//     label: "Columbus State Community College",
//     value: "Columbus State Community College"
//   },
//   {
//     label: "Cuyahoga Community College District",
//     value: "Cuyahoga Community College District"
//   },
//   { label: "Davis College", value: "Davis College" },
//   { label: "Dayton Barber College", value: "Dayton Barber College" },
//   { label: "University of Dayton", value: "University of Dayton" },
//   { label: "Defiance College", value: "Defiance College" },
//   { label: "Denison University", value: "Denison University" },
//   { label: "DeVry University-Ohio", value: "DeVry University-Ohio" },
//   { label: "Chancellor University", value: "Chancellor University" },
//   {
//     label: "Eastern Hills Academy of Hair Design",
//     value: "Eastern Hills Academy of Hair Design"
//   },
//   {
//     label: "Edison State Community College",
//     value: "Edison State Community College"
//   },
//   { label: "EHOVE Career Center", value: "EHOVE Career Center" },
//   {
//     label: "Bryant & Stratton College-Cleveland",
//     value: "Bryant & Stratton College-Cleveland"
//   },
//   {
//     label: "Regency Beauty Institute-Cleveland",
//     value: "Regency Beauty Institute-Cleveland"
//   },
//   {
//     label: "The University of Findlay",
//     value: "The University of Findlay"
//   },
//   { label: "Franklin University", value: "Franklin University" },
//   {
//     label: "Gerbers Akron Beauty School",
//     value: "Gerbers Akron Beauty School"
//   },
//   {
//     label: "Gods Bible School and College",
//     value: "Gods Bible School and College"
//   },
//   {
//     label: "Good Samaritan College of Nursing and Health Science",
//     value: "Good Samaritan College of Nursing and Health Science"
//   },
//   {
//     label: "Great Oaks Institute of Technology and Career Development",
//     value: "Great Oaks Institute of Technology and Career Development"
//   },
//   {
//     label: "Hannah E Mullins School of Practical Nursing",
//     value: "Hannah E Mullins School of Practical Nursing"
//   },
//   {
//     label: "Adult and Community Education-Hudson",
//     value: "Adult and Community Education-Hudson"
//   },
//   {
//     label: "Hebrew Union College-Jewish Institute of Religion",
//     value: "Hebrew Union College-Jewish Institute of Religion"
//   },
//   { label: "Heidelberg University", value: "Heidelberg University" },
//   { label: "Hiram College", value: "Hiram College" },
//   {
//     label: "Hobart Institute of Welding Technology",
//     value: "Hobart Institute of Welding Technology"
//   },
//   { label: "Hocking College", value: "Hocking College" },
//   {
//     label: "American School of Technology",
//     value: "American School of Technology"
//   },
//   {
//     label: "Ross Medical Education Center-Cincinnati",
//     value: "Ross Medical Education Center-Cincinnati"
//   },
//   {
//     label: "International College of Broadcasting",
//     value: "International College of Broadcasting"
//   },
//   {
//     label: "ITT Technical Institute-Dayton",
//     value: "ITT Technical Institute-Dayton"
//   },
//   {
//     label: "Eastern Gateway Community College",
//     value: "Eastern Gateway Community College"
//   },
//   { label: "John Carroll University", value: "John Carroll University" },
//   { label: "Hondros College", value: "Hondros College" },
//   { label: "Casal Aveda Institute", value: "Casal Aveda Institute" },
//   {
//     label: "Kent State University at Ashtabula",
//     value: "Kent State University at Ashtabula"
//   },
//   {
//     label: "Kent State University at East Liverpool",
//     value: "Kent State University at East Liverpool"
//   },
//   {
//     label: "Kent State University at Stark",
//     value: "Kent State University at Stark"
//   },
//   {
//     label: "Kent State University at Trumbull",
//     value: "Kent State University at Trumbull"
//   },
//   {
//     label: "Kent State University at Tuscarawas",
//     value: "Kent State University at Tuscarawas"
//   },
//   {
//     label: "Kent State University at Salem",
//     value: "Kent State University at Salem"
//   },
//   {
//     label: "Kent State University at Kent",
//     value: "Kent State University at Kent"
//   },
//   {
//     label: "Kent State University at Geauga",
//     value: "Kent State University at Geauga"
//   },
//   { label: "Kenyon College", value: "Kenyon College" },
//   { label: "Kettering College", value: "Kettering College" },
//   { label: "Lake Erie College", value: "Lake Erie College" },
//   {
//     label: "Lakeland Community College",
//     value: "Lakeland Community College"
//   },
//   {
//     label: "O C Collins Career Center",
//     value: "O C Collins Career Center"
//   },
//   {
//     label: "James A Rhodes State College",
//     value: "James A Rhodes State College"
//   },
//   {
//     label: "Ohio Business College-Sheffield",
//     value: "Ohio Business College-Sheffield"
//   },
//   {
//     label: "Ohio Business College-Sandusky",
//     value: "Ohio Business College-Sandusky"
//   },
//   {
//     label: "Lorain County Community College",
//     value: "Lorain County Community College"
//   },
//   { label: "Lourdes University", value: "Lourdes University" },
//   { label: "Malone University", value: "Malone University" },
//   { label: "Marietta College", value: "Marietta College" },
//   { label: "Marion Technical College", value: "Marion Technical College" },
//   {
//     label: "Medina County Career Center",
//     value: "Medina County Career Center"
//   },
//   { label: "Mercy College of Ohio", value: "Mercy College of Ohio" },
//   {
//     label: "Methodist Theological School in Ohio",
//     value: "Methodist Theological School in Ohio"
//   },
//   {
//     label: "Miami University-Hamilton",
//     value: "Miami University-Hamilton"
//   },
//   {
//     label: "Miami University-Middletown",
//     value: "Miami University-Middletown"
//   },
//   { label: "Miami University-Oxford", value: "Miami University-Oxford" },
//   {
//     label: "Miami-Jacobs Career College-Dayton",
//     value: "Miami-Jacobs Career College-Dayton"
//   },
//   {
//     label: "Moler Hollywood Beauty Academy",
//     value: "Moler Hollywood Beauty Academy"
//   },
//   {
//     label: "Miami Valley Career Technology Center",
//     value: "Miami Valley Career Technology Center"
//   },
//   {
//     label: "Mount Carmel College of Nursing",
//     value: "Mount Carmel College of Nursing"
//   },
//   {
//     label: "University of Mount Union",
//     value: "University of Mount Union"
//   },
//   {
//     label: "Mount Vernon Nazarene University",
//     value: "Mount Vernon Nazarene University"
//   },
//   {
//     label: "College of Mount St Joseph",
//     value: "College of Mount St Joseph"
//   },
//   { label: "Zane State College", value: "Zane State College" },
//   { label: "Muskingum University", value: "Muskingum University" },
//   {
//     label: "Fortis College-Cuyahoga Falls",
//     value: "Fortis College-Cuyahoga Falls"
//   },
//   {
//     label: "Brown Mackie College-North Canton",
//     value: "Brown Mackie College-North Canton"
//   },
//   { label: "National Beauty College", value: "National Beauty College" },
//   {
//     label: "North Central State College",
//     value: "North Central State College"
//   },
//   {
//     label: "Northern Institute of Cosmetology",
//     value: "Northern Institute of Cosmetology"
//   },
//   {
//     label: "Northwest State Community College",
//     value: "Northwest State Community College"
//   },
//   {
//     label: "Toledo Public Schools Adult and Continuing Education",
//     value: "Toledo Public Schools Adult and Continuing Education"
//   },
//   { label: "Notre Dame College", value: "Notre Dame College" },
//   {
//     label: "Northeast Ohio Medical University",
//     value: "Northeast Ohio Medical University"
//   },
//   {
//     label: "University of Northwestern Ohio",
//     value: "University of Northwestern Ohio"
//   },
//   { label: "Oberlin College", value: "Oberlin College" },
//   {
//     label: "Ohio College of Massotherapy Inc",
//     value: "Ohio College of Massotherapy Inc"
//   },
//   { label: "Ohio Technical College", value: "Ohio Technical College" },
//   {
//     label: "Ohio Dominican University",
//     value: "Ohio Dominican University"
//   },
//   { label: "Kaplan College-Dayton", value: "Kaplan College-Dayton" },
//   { label: "Ohio Northern University", value: "Ohio Northern University" },
//   {
//     label: "Ohio State University Agricultural Technical Institute",
//     value: "Ohio State University Agricultural Technical Institute"
//   },
//   {
//     label: "Ohio State University-Lima Campus",
//     value: "Ohio State University-Lima Campus"
//   },
//   {
//     label: "Ohio State University-Mansfield Campus",
//     value: "Ohio State University-Mansfield Campus"
//   },
//   {
//     label: "Ohio State University-Marion Campus",
//     value: "Ohio State University-Marion Campus"
//   },
//   {
//     label: "Ohio State University-Newark Campus",
//     value: "Ohio State University-Newark Campus"
//   },
//   {
//     label: "Ohio State Beauty Academy",
//     value: "Ohio State Beauty Academy"
//   },
//   {
//     label: "Ohio State College of Barber Styling",
//     value: "Ohio State College of Barber Styling"
//   },
//   {
//     label: "Ohio State School of Cosmetology & Experts Barber School",
//     value: "Ohio State School of Cosmetology & Experts Barber School"
//   },
//   { label: "The Spa School", value: "The Spa School" },
//   {
//     label: "Ohio State School of Cosmetology-Canal Winchester",
//     value: "Ohio State School of Cosmetology-Canal Winchester"
//   },
//   {
//     label: "Ohio State University-Main Campus",
//     value: "Ohio State University-Main Campus"
//   },
//   {
//     label: "Ohio University-Eastern Campus",
//     value: "Ohio University-Eastern Campus"
//   },
//   {
//     label: "Ohio University-Chillicothe Campus",
//     value: "Ohio University-Chillicothe Campus"
//   },
//   {
//     label: "Ohio University-Southern Campus",
//     value: "Ohio University-Southern Campus"
//   },
//   {
//     label: "Ohio University-Lancaster Campus",
//     value: "Ohio University-Lancaster Campus"
//   },
//   {
//     label: "Ohio University-Main Campus",
//     value: "Ohio University-Main Campus"
//   },
//   {
//     label: "Ohio University-Zanesville Campus",
//     value: "Ohio University-Zanesville Campus"
//   },
//   {
//     label: "Ohio Valley College of Technology",
//     value: "Ohio Valley College of Technology"
//   },
//   {
//     label: "Trinity Health System School of Nursing",
//     value: "Trinity Health System School of Nursing"
//   },
//   { label: "Ohio Wesleyan University", value: "Ohio Wesleyan University" },
//   { label: "Otterbein University", value: "Otterbein University" },
//   { label: "Owens Community College", value: "Owens Community College" },
//   { label: "Paramount Beauty Academy", value: "Paramount Beauty Academy" },
//   {
//     label: "Cuyahoga Valley Career Center",
//     value: "Cuyahoga Valley Career Center"
//   },
//   {
//     label: "Payne Theological Seminary",
//     value: "Payne Theological Seminary"
//   },
//   {
//     label: "Pontifical College Josephinum",
//     value: "Pontifical College Josephinum"
//   },
//   {
//     label: "Professional Skills Institute",
//     value: "Professional Skills Institute"
//   },
//   {
//     label: "Firelands Regional Medical Center School of Nursing",
//     value: "Firelands Regional Medical Center School of Nursing"
//   },
//   {
//     label: "Rabbinical College Telshe",
//     value: "Rabbinical College Telshe"
//   },
//   {
//     label: "Raphael's School of Beauty Culture Inc-Niles",
//     value: "Raphael's School of Beauty Culture Inc-Niles"
//   },
//   {
//     label: "Fortis College-Centerville",
//     value: "Fortis College-Centerville"
//   },
//   { label: "University of Rio Grande", value: "University of Rio Grande" },
//   {
//     label: "Advertising Art Educational Services DBA School of Advertising Art",
//     value: "Advertising Art Educational Services DBA School of Advertising Art"
//   },
//   { label: "Shawnee State University", value: "Shawnee State University" },
//   {
//     label: "Sinclair Community College",
//     value: "Sinclair Community College"
//   },
//   {
//     label: "Gallipolis Career College",
//     value: "Gallipolis Career College"
//   },
//   {
//     label: "Daymar College-New Boston",
//     value: "Daymar College-New Boston"
//   },
//   { label: "Daymar College-Jackson", value: "Daymar College-Jackson" },
//   { label: "Daymar College-Lancaster", value: "Daymar College-Lancaster" },
//   {
//     label: "Daymar College-Chillicothe",
//     value: "Daymar College-Chillicothe"
//   },
//   {
//     label: "Brown Mackie College-Cincinnati",
//     value: "Brown Mackie College-Cincinnati"
//   },
//   {
//     label: "Brown Mackie College-Akron",
//     value: "Brown Mackie College-Akron"
//   },
//   {
//     label: "Lincoln College of Technology-Franklin LCT",
//     value: "Lincoln College of Technology-Franklin LCT"
//   },
//   {
//     label: "Lincoln College of Technology-Tri-County",
//     value: "Lincoln College of Technology-Tri-County"
//   },
//   {
//     label: "Lincoln College of Technology-Vine Street",
//     value: "Lincoln College of Technology-Vine Street"
//   },
//   {
//     label: "Lincoln College of Technology-Dayton",
//     value: "Lincoln College of Technology-Dayton"
//   },
//   { label: "Stark State College", value: "Stark State College" },
//   {
//     label: "Stautzenberger College-Maumee",
//     value: "Stautzenberger College-Maumee"
//   },
//   {
//     label: "Franciscan University of Steubenville",
//     value: "Franciscan University of Steubenville"
//   },
//   {
//     label: "Southern State Community College",
//     value: "Southern State Community College"
//   },
//   { label: "Ohio Mid-Western College", value: "Ohio Mid-Western College" },
//   {
//     label: "Terra State Community College",
//     value: "Terra State Community College"
//   },
//   {
//     label: "Tiffin Academy of Hair Design",
//     value: "Tiffin Academy of Hair Design"
//   },
//   { label: "Tiffin University", value: "Tiffin University" },
//   { label: "University of Toledo", value: "University of Toledo" },
//   {
//     label: "Kaplan Career Institute-Cleveland",
//     value: "Kaplan Career Institute-Cleveland"
//   },
//   { label: "Tri-State Bible College", value: "Tri-State Bible College" },
//   {
//     label: "Tri-County Adult Career Center",
//     value: "Tri-County Adult Career Center"
//   },
//   { label: "Tri-Rivers Career Center", value: "Tri-Rivers Career Center" },
//   {
//     label: "Trinity Lutheran Seminary",
//     value: "Trinity Lutheran Seminary"
//   },
//   {
//     label: "Trumbull Business College",
//     value: "Trumbull Business College"
//   },
//   {
//     label: "Union Institute & University",
//     value: "Union Institute & University"
//   },
//   {
//     label: "United Theological Seminary",
//     value: "United Theological Seminary"
//   },
//   {
//     label: "Upper Valley Career Center",
//     value: "Upper Valley Career Center"
//   },
//   { label: "Urbana University", value: "Urbana University" },
//   { label: "Ursuline College", value: "Ursuline College" },
//   { label: "Valley Beauty School", value: "Valley Beauty School" },
//   {
//     label: "Virginia Marti College of Art and Design",
//     value: "Virginia Marti College of Art and Design"
//   },
//   { label: "Cut Beauty School", value: "Cut Beauty School" },
//   {
//     label: "W Howard Nicol School of Practical Nursing",
//     value: "W Howard Nicol School of Practical Nursing"
//   },
//   { label: "Walsh University", value: "Walsh University" },
//   {
//     label: "Washington State Community College",
//     value: "Washington State Community College"
//   },
//   {
//     label: "Western Hills School of Beauty and Hair Design",
//     value: "Western Hills School of Beauty and Hair Design"
//   },
//   { label: "Wilberforce University", value: "Wilberforce University" },
//   { label: "Wilmington College", value: "Wilmington College" },
//   {
//     label: "Winebrenner Theological Seminary",
//     value: "Winebrenner Theological Seminary"
//   },
//   { label: "Wittenberg University", value: "Wittenberg University" },
//   { label: "The College of Wooster", value: "The College of Wooster" },
//   {
//     label: "Wright State University-Main Campus",
//     value: "Wright State University-Main Campus"
//   },
//   {
//     label: "Wright State University-Lake Campus",
//     value: "Wright State University-Lake Campus"
//   },
//   { label: "Xavier University", value: "Xavier University" },
//   {
//     label: "ITT Technical Institute-Youngstown",
//     value: "ITT Technical Institute-Youngstown"
//   },
//   {
//     label: "Youngstown State University",
//     value: "Youngstown State University"
//   },
//   {
//     label: "American Broadcasting School-Oklahoma City",
//     value: "American Broadcasting School-Oklahoma City"
//   },
//   { label: "Bacone College", value: "Bacone College" },
//   {
//     label: "Oklahoma Wesleyan University",
//     value: "Oklahoma Wesleyan University"
//   },
//   {
//     label: "Southern Nazarene University",
//     value: "Southern Nazarene University"
//   },
//   {
//     label: "Broken Arrow Beauty College-Broken Arrow",
//     value: "Broken Arrow Beauty College-Broken Arrow"
//   },
//   {
//     label: "Pontotoc Technology Center",
//     value: "Pontotoc Technology Center"
//   },
//   { label: "Cameron University", value: "Cameron University" },
//   {
//     label: "Carl Albert State College",
//     value: "Carl Albert State College"
//   },
//   {
//     label: "Central State Beauty Academy",
//     value: "Central State Beauty Academy"
//   },
//   {
//     label: "University of Central Oklahoma",
//     value: "University of Central Oklahoma"
//   },
//   { label: "Claremore Beauty College", value: "Claremore Beauty College" },
//   { label: "Connors State College", value: "Connors State College" },
//   { label: "East Central University", value: "East Central University" },
//   {
//     label: "Eastern Oklahoma State College",
//     value: "Eastern Oklahoma State College"
//   },
//   {
//     label: "Redlands Community College",
//     value: "Redlands Community College"
//   },
//   { label: "Enid Beauty College", value: "Enid Beauty College" },
//   {
//     label: "Eves College of Hairstyling",
//     value: "Eves College of Hairstyling"
//   },
//   {
//     label: "Hillsdale Free Will Baptist College",
//     value: "Hillsdale Free Will Baptist College"
//   },
//   {
//     label: "Hollywood Cosmetology Center",
//     value: "Hollywood Cosmetology Center"
//   },
//   { label: "Langston University", value: "Langston University" },
//   { label: "Murray State College", value: "Murray State College" },
//   {
//     label: "Spartan College of Aeronautics and Technology",
//     value: "Spartan College of Aeronautics and Technology"
//   },
//   {
//     label: "Northeastern State University",
//     value: "Northeastern State University"
//   },
//   {
//     label: "Beauty Technical College Inc",
//     value: "Beauty Technical College Inc"
//   },
//   {
//     label: "Northern Oklahoma College",
//     value: "Northern Oklahoma College"
//   },
//   {
//     label: "Northeastern Oklahoma A&M College",
//     value: "Northeastern Oklahoma A&M College"
//   },
//   {
//     label: "Northwestern Oklahoma State University",
//     value: "Northwestern Oklahoma State University"
//   },
//   {
//     label: "Oklahoma State University Center for Health Sciences",
//     value: "Oklahoma State University Center for Health Sciences"
//   },
//   {
//     label: "Oklahoma Christian University",
//     value: "Oklahoma Christian University"
//   },
//   {
//     label: "University of Oklahoma-Health Sciences Center",
//     value: "University of Oklahoma-Health Sciences Center"
//   },
//   {
//     label: "Oklahoma Panhandle State University",
//     value: "Oklahoma Panhandle State University"
//   },
//   {
//     label: "Oklahoma State University-Main Campus",
//     value: "Oklahoma State University-Main Campus"
//   },
//   {
//     label: "Oklahoma State University-Oklahoma City",
//     value: "Oklahoma State University-Oklahoma City"
//   },
//   {
//     label: "Oklahoma Baptist University",
//     value: "Oklahoma Baptist University"
//   },
//   {
//     label: "Oklahoma City Community College",
//     value: "Oklahoma City Community College"
//   },
//   { label: "Oklahoma City University", value: "Oklahoma City University" },
//   {
//     label: "University of Oklahoma-Norman Campus",
//     value: "University of Oklahoma-Norman Campus"
//   },
//   {
//     label: "Oklahoma School of Photography",
//     value: "Oklahoma School of Photography"
//   },
//   {
//     label: "Oklahoma State University Institute of Technology",
//     value: "Oklahoma State University Institute of Technology"
//   },
//   { label: "Oral Roberts University", value: "Oral Roberts University" },
//   {
//     label: "Tulsa Technology Center-Peoria Campus",
//     value: "Tulsa Technology Center-Peoria Campus"
//   },
//   {
//     label: "Platt College-Central OKC",
//     value: "Platt College-Central OKC"
//   },
//   { label: "Rogers State University", value: "Rogers State University" },
//   { label: "Rose State College", value: "Rose State College" },
//   {
//     label: "Saint Gregory's University",
//     value: "Saint Gregory's University"
//   },
//   {
//     label: "Standard Beauty College of Oklahoma",
//     value: "Standard Beauty College of Oklahoma"
//   },
//   {
//     label: "University of Science and Arts of Oklahoma",
//     value: "University of Science and Arts of Oklahoma"
//   },
//   { label: "Seminole State College", value: "Seminole State College" },
//   {
//     label: "Southern School of Beauty Inc",
//     value: "Southern School of Beauty Inc"
//   },
//   {
//     label: "Southeastern Oklahoma State University",
//     value: "Southeastern Oklahoma State University"
//   },
//   {
//     label: "Southwestern Christian University",
//     value: "Southwestern Christian University"
//   },
//   {
//     label: "Southwestern Oklahoma State University",
//     value: "Southwestern Oklahoma State University"
//   },
//   { label: "Tulsa Community College", value: "Tulsa Community College" },
//   {
//     label: "Tulsa Welding School-Tulsa",
//     value: "Tulsa Welding School-Tulsa"
//   },
//   { label: "University of Tulsa", value: "University of Tulsa" },
//   { label: "Virgil's Beauty College", value: "Virgil's Beauty College" },
//   {
//     label: "Indian Capital Technology Center-Tahlequah",
//     value: "Indian Capital Technology Center-Tahlequah"
//   },
//   {
//     label: "Western Oklahoma State College",
//     value: "Western Oklahoma State College"
//   },
//   { label: "Woodward Beauty College", value: "Woodward Beauty College" },
//   {
//     label: "High Plains Technology Center",
//     value: "High Plains Technology Center"
//   },
//   {
//     label: "Academy of Hair Design-Salem",
//     value: "Academy of Hair Design-Salem"
//   },
//   {
//     label: "Abdill Career College Inc",
//     value: "Abdill Career College Inc"
//   },
//   {
//     label: "Paul Mitchell the School-Portland",
//     value: "Paul Mitchell the School-Portland"
//   },
//   {
//     label: "The Art Institute of Portland",
//     value: "The Art Institute of Portland"
//   },
//   {
//     label: "Beau Monde College of Hair Design",
//     value: "Beau Monde College of Hair Design"
//   },
//   {
//     label: "Blue Mountain Community College",
//     value: "Blue Mountain Community College"
//   },
//   {
//     label: "Central Oregon Community College",
//     value: "Central Oregon Community College"
//   },
//   {
//     label: "Chemeketa Community College",
//     value: "Chemeketa Community College"
//   },
//   {
//     label: "Clackamas Community College",
//     value: "Clackamas Community College"
//   },
//   {
//     label: "Clatsop Community College",
//     value: "Clatsop Community College"
//   },
//   {
//     label: "College of Hair Design Careers",
//     value: "College of Hair Design Careers"
//   },
//   {
//     label: "Concorde Career College-Portland",
//     value: "Concorde Career College-Portland"
//   },
//   {
//     label: "Concordia University-Portland",
//     value: "Concordia University-Portland"
//   },
//   { label: "Sumner College", value: "Sumner College" },
//   {
//     label: "East West College of the Healing Arts",
//     value: "East West College of the Healing Arts"
//   },
//   {
//     label: "Eastern Oregon University",
//     value: "Eastern Oregon University"
//   },
//   {
//     label: "Phagans School of Hair Design-Portland",
//     value: "Phagans School of Hair Design-Portland"
//   },
//   {
//     label: "New Hope Christian College-Eugene",
//     value: "New Hope Christian College-Eugene"
//   },
//   { label: "George Fox University", value: "George Fox University" },
//   {
//     label: "Phagans Grants Pass College of Beauty",
//     value: "Phagans Grants Pass College of Beauty"
//   },
//   {
//     label: "ITT Technical Institute-Portland",
//     value: "ITT Technical Institute-Portland"
//   },
//   { label: "Lane Community College", value: "Lane Community College" },
//   { label: "Lewis & Clark College", value: "Lewis & Clark College" },
//   {
//     label: "Linfield College-McMinnville Campus",
//     value: "Linfield College-McMinnville Campus"
//   },
//   {
//     label: "Linn-Benton Community College",
//     value: "Linn-Benton Community College"
//   },
//   {
//     label: "Northwest College-Beaverton",
//     value: "Northwest College-Beaverton"
//   },
//   { label: "Marylhurst University", value: "Marylhurst University" },
//   {
//     label: "Phagans Medford Beauty School",
//     value: "Phagans Medford Beauty School"
//   },
//   {
//     label: "Northwest College-Clackamas",
//     value: "Northwest College-Clackamas"
//   },
//   { label: "Mount Angel Seminary", value: "Mount Angel Seminary" },
//   {
//     label: "Mt Hood Community College",
//     value: "Mt Hood Community College"
//   },
//   { label: "Multnomah University", value: "Multnomah University" },
//   {
//     label: "National College of Natural Medicine",
//     value: "National College of Natural Medicine"
//   },
//   {
//     label: "Northwest Nannies Institute",
//     value: "Northwest Nannies Institute"
//   },
//   {
//     label: "Northwest Christian University",
//     value: "Northwest Christian University"
//   },
//   { label: "Oregon University System", value: "Oregon University System" },
//   {
//     label: "Oregon Health & Science University",
//     value: "Oregon Health & Science University"
//   },
//   {
//     label: "Oregon Institute of Technology",
//     value: "Oregon Institute of Technology"
//   },
//   {
//     label: "Oregon College of Art and Craft",
//     value: "Oregon College of Art and Craft"
//   },
//   { label: "Oregon State University", value: "Oregon State University" },
//   { label: "University of Oregon", value: "University of Oregon" },
//   {
//     label: "Pacific Northwest College of Art",
//     value: "Pacific Northwest College of Art"
//   },
//   { label: "Pacific University", value: "Pacific University" },
//   { label: "Phagans Beauty College", value: "Phagans Beauty College" },
//   {
//     label: "Phagans Central Oregon Beauty College",
//     value: "Phagans Central Oregon Beauty College"
//   },
//   { label: "Phagans School of Beauty", value: "Phagans School of Beauty" },
//   {
//     label: "Phagans School of Hair Design",
//     value: "Phagans School of Hair Design"
//   },
//   {
//     label: "Phagans Tigard Beauty School",
//     value: "Phagans Tigard Beauty School"
//   },
//   {
//     label: "Portland Community College",
//     value: "Portland Community College"
//   },
//   {
//     label: "Portland State University",
//     value: "Portland State University"
//   },
//   { label: "University of Portland", value: "University of Portland" },
//   { label: "Reed College", value: "Reed College" },
//   { label: "Rogue Community College", value: "Rogue Community College" },
//   { label: "Roseburg Beauty College", value: "Roseburg Beauty College" },
//   { label: "Pioneer Pacific College", value: "Pioneer Pacific College" },
//   {
//     label: "Springfield College of Beauty",
//     value: "Springfield College of Beauty"
//   },
//   {
//     label: "Southern Oregon University",
//     value: "Southern Oregon University"
//   },
//   {
//     label: "Southwestern Oregon Community College",
//     value: "Southwestern Oregon Community College"
//   },
//   {
//     label: "Treasure Valley Community College",
//     value: "Treasure Valley Community College"
//   },
//   { label: "Umpqua Community College", value: "Umpqua Community College" },
//   { label: "Warner Pacific College", value: "Warner Pacific College" },
//   { label: "Corban University", value: "Corban University" },
//   { label: "College of Cosmetology", value: "College of Cosmetology" },
//   { label: "Everest College-Portland", value: "Everest College-Portland" },
//   { label: "Western Seminary", value: "Western Seminary" },
//   { label: "Willamette University", value: "Willamette University" },
//   {
//     label: "Western Oregon University",
//     value: "Western Oregon University"
//   },
//   {
//     label: "University of Western States",
//     value: "University of Western States"
//   },
//   {
//     label: "Abington Memorial Hospital Dixon School of Nursing",
//     value: "Abington Memorial Hospital Dixon School of Nursing"
//   },
//   {
//     label: "Jolie Hair and Beauty Academy-Hazleton",
//     value: "Jolie Hair and Beauty Academy-Hazleton"
//   },
//   {
//     label: "Keystone Technical Institute",
//     value: "Keystone Technical Institute"
//   },
//   {
//     label: "Bryn Athyn College of the New Church",
//     value: "Bryn Athyn College of the New Church"
//   },
//   { label: "Academy of Vocal Arts", value: "Academy of Vocal Arts" },
//   { label: "Albright College", value: "Albright College" },
//   {
//     label: "All-State Career School-Lester",
//     value: "All-State Career School-Lester"
//   },
//   {
//     label: "Community College of Allegheny County",
//     value: "Community College of Allegheny County"
//   },
//   { label: "Allegheny College", value: "Allegheny College" },
//   { label: "The Vision Academy", value: "The Vision Academy" },
//   { label: "DeSales University", value: "DeSales University" },
//   {
//     label: "Altoona Beauty School Inc",
//     value: "Altoona Beauty School Inc"
//   },
//   { label: "Alvernia University", value: "Alvernia University" },
//   { label: "Magnolia School", value: "Magnolia School" },
//   {
//     label: "American College of Financial Services",
//     value: "American College of Financial Services"
//   },
//   { label: "Antonelli Institute", value: "Antonelli Institute" },
//   {
//     label: "The Art Institutes of York-PA",
//     value: "The Art Institutes of York-PA"
//   },
//   {
//     label: "The Art Institute of Philadelphia",
//     value: "The Art Institute of Philadelphia"
//   },
//   {
//     label: "Career Training Academy-New Kensington",
//     value: "Career Training Academy-New Kensington"
//   },
//   {
//     label: "The Art Institute of Pittsburgh",
//     value: "The Art Institute of Pittsburgh"
//   },
//   {
//     label: "Automotive Training Center-Exton",
//     value: "Automotive Training Center-Exton"
//   },
//   {
//     label: "Baptist Bible College & Seminary of Pennsylvania",
//     value: "Baptist Bible College & Seminary of Pennsylvania"
//   },
//   {
//     label: "Community College of Beaver County",
//     value: "Community College of Beaver County"
//   },
//   { label: "Arcadia University", value: "Arcadia University" },
//   {
//     label: "Biblical Theological Seminary",
//     value: "Biblical Theological Seminary"
//   },
//   {
//     label: "Bidwell Training Center Inc",
//     value: "Bidwell Training Center Inc"
//   },
//   {
//     label: "Bloomsburg University of Pennsylvania",
//     value: "Bloomsburg University of Pennsylvania"
//   },
//   { label: "Bradford School", value: "Bradford School" },
//   { label: "Bryn Mawr College", value: "Bryn Mawr College" },
//   { label: "Bucknell University", value: "Bucknell University" },
//   {
//     label: "Bucks County Community College",
//     value: "Bucks County Community College"
//   },
//   {
//     label: "Buck's County School of Beauty Culture Inc",
//     value: "Buck's County School of Beauty Culture Inc"
//   },
//   { label: "Butler Beauty Academy", value: "Butler Beauty Academy" },
//   {
//     label: "Butler County Community College",
//     value: "Butler County Community College"
//   },
//   { label: "Cabrini College", value: "Cabrini College" },
//   {
//     label: "California University of Pennsylvania",
//     value: "California University of Pennsylvania"
//   },
//   {
//     label: "Calvary Baptist Theological Seminary",
//     value: "Calvary Baptist Theological Seminary"
//   },
//   {
//     label: "Cambria-Rowe Business College-Johnstown",
//     value: "Cambria-Rowe Business College-Johnstown"
//   },
//   { label: "Carlow University", value: "Carlow University" },
//   {
//     label: "Carnegie Mellon University",
//     value: "Carnegie Mellon University"
//   },
//   { label: "Cedar Crest College", value: "Cedar Crest College" },
//   { label: "Central Penn College", value: "Central Penn College" },
//   { label: "Chatham University", value: "Chatham University" },
//   { label: "Chestnut Hill College", value: "Chestnut Hill College" },
//   {
//     label: "Cheyney University of Pennsylvania",
//     value: "Cheyney University of Pennsylvania"
//   },
//   {
//     label: "Kaplan Career Institute-Franklin Mills",
//     value: "Kaplan Career Institute-Franklin Mills"
//   },
//   {
//     label: "Citizens School of Nursing",
//     value: "Citizens School of Nursing"
//   },
//   {
//     label: "Clarion University of Pennsylvania",
//     value: "Clarion University of Pennsylvania"
//   },
//   {
//     label: "YTI Career Institute-Capital Region",
//     value: "YTI Career Institute-Capital Region"
//   },
//   {
//     label: "Conemaugh Valley Memorial Hospital",
//     value: "Conemaugh Valley Memorial Hospital"
//   },
//   {
//     label: "Consolidated School of Business-York",
//     value: "Consolidated School of Business-York"
//   },
//   {
//     label: "Curtis Institute of Music",
//     value: "Curtis Institute of Music"
//   },
//   {
//     label: "Dean Institute of Technology",
//     value: "Dean Institute of Technology"
//   },
//   {
//     label: "Delaware County Community College",
//     value: "Delaware County Community College"
//   },
//   { label: "Delaware Valley College", value: "Delaware Valley College" },
//   { label: "Dickinson College", value: "Dickinson College" },
//   {
//     label: "The Dickinson School of Law of the Pennsylvania State University",
//     value: "The Dickinson School of Law of the Pennsylvania State University"
//   },
//   { label: "Douglas Education Center", value: "Douglas Education Center" },
//   { label: "Drexel University", value: "Drexel University" },
//   {
//     label: "Du Bois Business College-Du Bois",
//     value: "Du Bois Business College-Du Bois"
//   },
//   {
//     label: "Everest Institute-Pittsburgh",
//     value: "Everest Institute-Pittsburgh"
//   },
//   { label: "Duquesne University", value: "Duquesne University" },
//   {
//     label: "East Stroudsburg University of Pennsylvania",
//     value: "East Stroudsburg University of Pennsylvania"
//   },
//   { label: "Eastern University", value: "Eastern University" },
//   {
//     label: "Edinboro University of Pennsylvania",
//     value: "Edinboro University of Pennsylvania"
//   },
//   { label: "Elizabethtown College", value: "Elizabethtown College" },
//   {
//     label: "Empire Beauty School-State College",
//     value: "Empire Beauty School-State College"
//   },
//   {
//     label: "Empire Beauty School-Lebanon",
//     value: "Empire Beauty School-Lebanon"
//   },
//   {
//     label: "Empire Beauty School-York",
//     value: "Empire Beauty School-York"
//   },
//   {
//     label: "Empire Beauty School-Lancaster",
//     value: "Empire Beauty School-Lancaster"
//   },
//   {
//     label: "Empire Beauty School-Williamsport",
//     value: "Empire Beauty School-Williamsport"
//   },
//   {
//     label: "Empire Beauty School-Shamokin Dam",
//     value: "Empire Beauty School-Shamokin Dam"
//   },
//   {
//     label: "Empire Beauty School-Pottsville",
//     value: "Empire Beauty School-Pottsville"
//   },
//   {
//     label: "Empire Beauty  School-Lehigh Valley",
//     value: "Empire Beauty  School-Lehigh Valley"
//   },
//   {
//     label: "Empire Beauty School-Gwinnett",
//     value: "Empire Beauty School-Gwinnett"
//   },
//   {
//     label: "Empire Beauty School-Wyoming Valley",
//     value: "Empire Beauty School-Wyoming Valley"
//   },
//   {
//     label: "Empire Beauty School-Warminster",
//     value: "Empire Beauty School-Warminster"
//   },
//   {
//     label: "Empire Beauty School-Harrisburg",
//     value: "Empire Beauty School-Harrisburg"
//   },
//   {
//     label: "Empire Beauty School-Reading",
//     value: "Empire Beauty School-Reading"
//   },
//   {
//     label: "Erie Business Center-Erie",
//     value: "Erie Business Center-Erie"
//   },
//   {
//     label: "Erie Institute of Technology Inc",
//     value: "Erie Institute of Technology Inc"
//   },
//   {
//     label: "Evangelical Theological Seminary",
//     value: "Evangelical Theological Seminary"
//   },
//   {
//     label: "Faith Theological Seminary",
//     value: "Faith Theological Seminary"
//   },
//   {
//     label: "Aria Health School of Nursing",
//     value: "Aria Health School of Nursing"
//   },
//   {
//     label: "Franklin and Marshall College",
//     value: "Franklin and Marshall College"
//   },
//   { label: "Gannon University", value: "Gannon University" },
//   { label: "Geneva College", value: "Geneva College" },
//   { label: "Gettysburg College", value: "Gettysburg College" },
//   {
//     label: "Empire Beauty School-Exton",
//     value: "Empire Beauty School-Exton"
//   },
//   {
//     label: "Empire Beauty School-Laurel Springs",
//     value: "Empire Beauty School-Laurel Springs"
//   },
//   {
//     label: "Empire Beauty School-NE Philadelphia",
//     value: "Empire Beauty School-NE Philadelphia"
//   },
//   { label: "Gratz College", value: "Gratz College" },
//   { label: "Grove City College", value: "Grove City College" },
//   { label: "Gwynedd Mercy University", value: "Gwynedd Mercy University" },
//   { label: "Harcum College", value: "Harcum College" },
//   {
//     label: "Harrisburg Area Community College-Harrisburg",
//     value: "Harrisburg Area Community College-Harrisburg"
//   },
//   { label: "Haverford College", value: "Haverford College" },
//   {
//     label: "Commonwealth Technical Institute",
//     value: "Commonwealth Technical Institute"
//   },
//   { label: "Holy Family University", value: "Holy Family University" },
//   { label: "Hussian School of Art", value: "Hussian School of Art" },
//   {
//     label: "Kaplan Career Institute-Pittsburgh",
//     value: "Kaplan Career Institute-Pittsburgh"
//   },
//   { label: "Immaculata University", value: "Immaculata University" },
//   {
//     label: "Indiana University of Pennsylvania-Main Campus",
//     value: "Indiana University of Pennsylvania-Main Campus"
//   },
//   {
//     label: "Pennsylvania School of Business",
//     value: "Pennsylvania School of Business"
//   },
//   { label: "Jameson Health System", value: "Jameson Health System" },
//   {
//     label: "Great Lakes Institute of Technology",
//     value: "Great Lakes Institute of Technology"
//   },
//   {
//     label: "Jolie Hair and Beauty Academy-Wilkes-Barre",
//     value: "Jolie Hair and Beauty Academy-Wilkes-Barre"
//   },
//   { label: "Johnson College", value: "Johnson College" },
//   { label: "Juniata College", value: "Juniata College" },
//   { label: "Keystone College", value: "Keystone College" },
//   {
//     label: "Anthem Institute-Springfield",
//     value: "Anthem Institute-Springfield"
//   },
//   { label: "King's College", value: "King's College" },
//   { label: "Kittanning Beauty School", value: "Kittanning Beauty School" },
//   {
//     label: "Kutztown University of Pennsylvania",
//     value: "Kutztown University of Pennsylvania"
//   },
//   { label: "La Roche College", value: "La Roche College" },
//   { label: "La Salle University", value: "La Salle University" },
//   { label: "Lackawanna College", value: "Lackawanna College" },
//   { label: "Lafayette College", value: "Lafayette College" },
//   { label: "Lancaster Bible College", value: "Lancaster Bible College" },
//   {
//     label: "Lancaster Theological Seminary",
//     value: "Lancaster Theological Seminary"
//   },
//   {
//     label: "Lancaster School of Cosmetology",
//     value: "Lancaster School of Cosmetology"
//   },
//   {
//     label: "Lansdale School of Business",
//     value: "Lansdale School of Business"
//   },
//   {
//     label: "Lansdale School of Cosmetology Inc",
//     value: "Lansdale School of Cosmetology Inc"
//   },
//   { label: "Lebanon Valley College", value: "Lebanon Valley College" },
//   {
//     label: "Lehigh Carbon Community College",
//     value: "Lehigh Carbon Community College"
//   },
//   {
//     label: "Berks Technical Institute",
//     value: "Berks Technical Institute"
//   },
//   { label: "Lehigh University", value: "Lehigh University" },
//   { label: "Levittown Beauty Academy", value: "Levittown Beauty Academy" },
//   {
//     label: "Lincoln Technical Institute-Allentown",
//     value: "Lincoln Technical Institute-Allentown"
//   },
//   {
//     label: "Lincoln Technical Institute-Philadelphia",
//     value: "Lincoln Technical Institute-Philadelphia"
//   },
//   {
//     label: "Lincoln University of Pennsylvania",
//     value: "Lincoln University of Pennsylvania"
//   },
//   { label: "Lock Haven University", value: "Lock Haven University" },
//   {
//     label: "St Margaret School of Nursing",
//     value: "St Margaret School of Nursing"
//   },
//   {
//     label: "Lutheran Theological Seminary at Gettysburg",
//     value: "Lutheran Theological Seminary at Gettysburg"
//   },
//   {
//     label: "Lutheran Theological Seminary at Philadelphia",
//     value: "Lutheran Theological Seminary at Philadelphia"
//   },
//   {
//     label: "Luzerne County Community College",
//     value: "Luzerne County Community College"
//   },
//   { label: "Lycoming College", value: "Lycoming College" },
//   {
//     label: "Erie Business Center-New Castle",
//     value: "Erie Business Center-New Castle"
//   },
//   { label: "Manor College", value: "Manor College" },
//   {
//     label: "Mansfield University of Pennsylvania",
//     value: "Mansfield University of Pennsylvania"
//   },
//   { label: "Marywood University", value: "Marywood University" },
//   { label: "Vet Tech Institute", value: "Vet Tech Institute" },
//   {
//     label: "Roxborough Memorial Hospital School of Nursing",
//     value: "Roxborough Memorial Hospital School of Nursing"
//   },
//   { label: "Mercyhurst University", value: "Mercyhurst University" },
//   { label: "Messiah College", value: "Messiah College" },
//   {
//     label: "Metropolitan Career Center Computer Technology Institute",
//     value: "Metropolitan Career Center Computer Technology Institute"
//   },
//   {
//     label: "Millersville University of Pennsylvania",
//     value: "Millersville University of Pennsylvania"
//   },
//   { label: "Misericordia University", value: "Misericordia University" },
//   {
//     label: "Montgomery County Community College",
//     value: "Montgomery County Community College"
//   },
//   {
//     label: "Moore College of Art and Design",
//     value: "Moore College of Art and Design"
//   },
//   { label: "Moravian College", value: "Moravian College" },
//   { label: "Mount Aloysius College", value: "Mount Aloysius College" },
//   { label: "Muhlenberg College", value: "Muhlenberg College" },
//   {
//     label: "Kaplan Career Institute-Philadelphia",
//     value: "Kaplan Career Institute-Philadelphia"
//   },
//   { label: "Neumann University", value: "Neumann University" },
//   {
//     label: "New Castle School of Trades",
//     value: "New Castle School of Trades"
//   },
//   {
//     label: "Newport Business Institute-Lower Burrell",
//     value: "Newport Business Institute-Lower Burrell"
//   },
//   {
//     label: "Northampton County Area Community College",
//     value: "Northampton County Area Community College"
//   },
//   {
//     label: "Pittsburgh's Ohio Valley Hospital School of Nursing",
//     value: "Pittsburgh's Ohio Valley Hospital School of Nursing"
//   },
//   {
//     label: "Orleans Technical Institute",
//     value: "Orleans Technical Institute"
//   },
//   {
//     label: "Pennsylvania Academy of Cosmetology Arts and Sciences-Johnstown",
//     value: "Pennsylvania Academy of Cosmetology Arts and Sciences-Johnstown"
//   },
//   { label: "Salus University", value: "Salus University" },
//   {
//     label: "Pennsylvania Institute of Technology",
//     value: "Pennsylvania Institute of Technology"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Erie-Behrend College",
//     value: "Pennsylvania State University-Penn State Erie-Behrend College"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Great Valley",
//     value: "Pennsylvania State University-Penn State Great Valley"
//   },
//   {
//     label: "Pennsylvania State University-College of Medicine",
//     value: "Pennsylvania State University-College of Medicine"
//   },
//   {
//     label: "Pennsylvania State University-Penn State New Kensington",
//     value: "Pennsylvania State University-Penn State New Kensington"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Shenango",
//     value: "Pennsylvania State University-Penn State Shenango"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Wilkes-Barre",
//     value: "Pennsylvania State University-Penn State Wilkes-Barre"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Worthington Scranton",
//     value: "Pennsylvania State University-Penn State Worthington Scranton"
//   },
//   {
//     label: "Pennsylvania State System of Higher Education-Central Office",
//     value: "Pennsylvania State System of Higher Education-Central Office"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Lehigh Valley",
//     value: "Pennsylvania State University-Penn State Lehigh Valley"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Altoona",
//     value: "Pennsylvania State University-Penn State Altoona"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Beaver",
//     value: "Pennsylvania State University-Penn State Beaver"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Berks",
//     value: "Pennsylvania State University-Penn State Berks"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Harrisburg",
//     value: "Pennsylvania State University-Penn State Harrisburg"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Brandywine",
//     value: "Pennsylvania State University-Penn State Brandywine"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Dubois",
//     value: "Pennsylvania State University-Penn State Dubois"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Fayette- Eberly",
//     value: "Pennsylvania State University-Penn State Fayette- Eberly"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Hazleton",
//     value: "Pennsylvania State University-Penn State Hazleton"
//   },
//   {
//     label: "Pennsylvania State University-Main Campus",
//     value: "Pennsylvania State University-Main Campus"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Greater Allegheny",
//     value: "Pennsylvania State University-Penn State Greater Allegheny"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Mont Alto",
//     value: "Pennsylvania State University-Penn State Mont Alto"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Abington",
//     value: "Pennsylvania State University-Penn State Abington"
//   },
//   {
//     label: "Pennsylvania State University-Penn State Schuylkill",
//     value: "Pennsylvania State University-Penn State Schuylkill"
//   },
//   {
//     label: "Pennsylvania State University-Penn State York",
//     value: "Pennsylvania State University-Penn State York"
//   },
//   { label: "Pace Institute", value: "Pace Institute" },
//   { label: "Peirce College", value: "Peirce College" },
//   {
//     label: "Penn Commercial Business/Technical School",
//     value: "Penn Commercial Business/Technical School"
//   },
//   { label: "Pennco Tech-Bristol", value: "Pennco Tech-Bristol" },
//   {
//     label: "Pennsylvania Academy of Cosmetology Arts and Sciences-Du Bois",
//     value: "Pennsylvania Academy of Cosmetology Arts and Sciences-Du Bois"
//   },
//   {
//     label: "Pennsylvania Academy of the Fine Arts",
//     value: "Pennsylvania Academy of the Fine Arts"
//   },
//   {
//     label: "Pennsylvania Gunsmith School",
//     value: "Pennsylvania Gunsmith School"
//   },
//   {
//     label: "Pennsylvania Institute of Taxidermy Inc",
//     value: "Pennsylvania Institute of Taxidermy Inc"
//   },
//   {
//     label: "Cortiva Institute-Pennsylvania School of Muscle Therapy",
//     value: "Cortiva Institute-Pennsylvania School of Muscle Therapy"
//   },
//   {
//     label: "Pennsylvania College of Art and Design",
//     value: "Pennsylvania College of Art and Design"
//   },
//   {
//     label: "University of Pennsylvania",
//     value: "University of Pennsylvania"
//   },
//   { label: "Philadelphia University", value: "Philadelphia University" },
//   {
//     label: "The University of the Arts",
//     value: "The University of the Arts"
//   },
//   {
//     label: "Cairn University-Langhorne",
//     value: "Cairn University-Langhorne"
//   },
//   {
//     label: "Philadelphia College of Osteopathic Medicine",
//     value: "Philadelphia College of Osteopathic Medicine"
//   },
//   {
//     label: "University of the Sciences",
//     value: "University of the Sciences"
//   },
//   {
//     label: "Community College of Philadelphia",
//     value: "Community College of Philadelphia"
//   },
//   {
//     label: "University of Pittsburgh-Bradford",
//     value: "University of Pittsburgh-Bradford"
//   },
//   {
//     label: "University of Pittsburgh-Greensburg",
//     value: "University of Pittsburgh-Greensburg"
//   },
//   {
//     label: "University of Pittsburgh-Johnstown",
//     value: "University of Pittsburgh-Johnstown"
//   },
//   {
//     label: "University of Pittsburgh-Pittsburgh Campus",
//     value: "University of Pittsburgh-Pittsburgh Campus"
//   },
//   {
//     label: "University of Pittsburgh-Titusville",
//     value: "University of Pittsburgh-Titusville"
//   },
//   {
//     label: "Beaver Falls Beauty Academy",
//     value: "Beaver Falls Beauty Academy"
//   },
//   {
//     label: "Pittsburgh Institute of Aeronautics",
//     value: "Pittsburgh Institute of Aeronautics"
//   },
//   {
//     label: "Pittsburgh Institute of Mortuary Science Inc",
//     value: "Pittsburgh Institute of Mortuary Science Inc"
//   },
//   {
//     label: "Pittsburgh Technical Institute",
//     value: "Pittsburgh Technical Institute"
//   },
//   {
//     label: "Pittsburgh Theological Seminary",
//     value: "Pittsburgh Theological Seminary"
//   },
//   {
//     label: "Prism Career Institute-Upper Darby",
//     value: "Prism Career Institute-Upper Darby"
//   },
//   { label: "Point Park University", value: "Point Park University" },
//   {
//     label: "Joseph F McCloskey School of Nursing at Schuylkill Health",
//     value: "Joseph F McCloskey School of Nursing at Schuylkill Health"
//   },
//   {
//     label: "The Salon Professional Academy-Altoona",
//     value: "The Salon Professional Academy-Altoona"
//   },
//   {
//     label: "Reading Area Community College",
//     value: "Reading Area Community College"
//   },
//   {
//     label: "Reading Hospital School of Health Sciences",
//     value: "Reading Hospital School of Health Sciences"
//   },
//   {
//     label: "Reconstructionist Rabbinical College",
//     value: "Reconstructionist Rabbinical College"
//   },
//   {
//     label: "Reformed Presbyterian Theological Seminary",
//     value: "Reformed Presbyterian Theological Seminary"
//   },
//   {
//     label: "The Restaurant School at Walnut Hill College",
//     value: "The Restaurant School at Walnut Hill College"
//   },
//   {
//     label: "Kaplan Career Institute-Broomall",
//     value: "Kaplan Career Institute-Broomall"
//   },
//   { label: "Robert Morris University", value: "Robert Morris University" },
//   {
//     label: "Rosedale Technical Institute",
//     value: "Rosedale Technical Institute"
//   },
//   { label: "Rosemont College", value: "Rosemont College" },
//   { label: "Saint Francis University", value: "Saint Francis University" },
//   {
//     label: "Saint Joseph's University",
//     value: "Saint Joseph's University"
//   },
//   { label: "Saint Vincent College", value: "Saint Vincent College" },
//   { label: "Saint Vincent Seminary", value: "Saint Vincent Seminary" },
//   {
//     label: "Schuylkill Technology Center",
//     value: "Schuylkill Technology Center"
//   },
//   { label: "University of Scranton", value: "University of Scranton" },
//   { label: "Seton Hill University", value: "Seton Hill University" },
//   {
//     label: "Heritage Valley Sewickley School of Nursing",
//     value: "Heritage Valley Sewickley School of Nursing"
//   },
//   {
//     label: "University of Pittsburgh Medical Center-Shadyside School of Nursing",
//     value: "University of Pittsburgh Medical Center-Shadyside School of Nursing"
//   },
//   {
//     label: "Sharon Regional Health System School of Nursing",
//     value: "Sharon Regional Health System School of Nursing"
//   },
//   {
//     label: "Laurel Technical Institute",
//     value: "Laurel Technical Institute"
//   },
//   {
//     label: "Shippensburg University of Pennsylvania",
//     value: "Shippensburg University of Pennsylvania"
//   },
//   {
//     label: "Slippery Rock University of Pennsylvania",
//     value: "Slippery Rock University of Pennsylvania"
//   },
//   {
//     label: "Saint Charles Borromeo Seminary-Overbrook",
//     value: "Saint Charles Borromeo Seminary-Overbrook"
//   },
//   {
//     label: "South Hills Beauty Academy Inc",
//     value: "South Hills Beauty Academy Inc"
//   },
//   {
//     label: "South Hills School of Business & Technology",
//     value: "South Hills School of Business & Technology"
//   },
//   {
//     label: "St Lukes Hospital School of Nursing",
//     value: "St Lukes Hospital School of Nursing"
//   },
//   {
//     label: "Stroudsburg School of Cosmetology",
//     value: "Stroudsburg School of Cosmetology"
//   },
//   { label: "Susquehanna University", value: "Susquehanna University" },
//   { label: "Swarthmore College", value: "Swarthmore College" },
//   {
//     label: "Thaddeus Stevens College of Technology",
//     value: "Thaddeus Stevens College of Technology"
//   },
//   {
//     label: "Talmudical Yeshiva of Philadelphia",
//     value: "Talmudical Yeshiva of Philadelphia"
//   },
//   { label: "Temple University", value: "Temple University" },
//   {
//     label: "Theological Seminary of the Reformed Episcopal Church",
//     value: "Theological Seminary of the Reformed Episcopal Church"
//   },
//   { label: "Thiel College", value: "Thiel College" },
//   {
//     label: "Thomas Jefferson University",
//     value: "Thomas Jefferson University"
//   },
//   { label: "Fortis Institute-Erie", value: "Fortis Institute-Erie" },
//   { label: "Triangle Tech Inc-Erie", value: "Triangle Tech Inc-Erie" },
//   {
//     label: "Triangle Tech Inc-Pittsburgh",
//     value: "Triangle Tech Inc-Pittsburgh"
//   },
//   {
//     label: "Triangle Tech Inc-Greensburg",
//     value: "Triangle Tech Inc-Greensburg"
//   },
//   { label: "Triangle Tech Inc-Dubois", value: "Triangle Tech Inc-Dubois" },
//   {
//     label: "Trinity Episcopal School for Ministry",
//     value: "Trinity Episcopal School for Ministry"
//   },
//   { label: "Ursinus College", value: "Ursinus College" },
//   {
//     label: "Valley Forge Christian College",
//     value: "Valley Forge Christian College"
//   },
//   {
//     label: "Valley Forge Military College",
//     value: "Valley Forge Military College"
//   },
//   { label: "Venus Beauty Academy", value: "Venus Beauty Academy" },
//   { label: "Villanova University", value: "Villanova University" },
//   {
//     label: "Washington Hospital School of Nursing",
//     value: "Washington Hospital School of Nursing"
//   },
//   {
//     label: "Washington Hospital School of Radiography",
//     value: "Washington Hospital School of Radiography"
//   },
//   {
//     label: "Washington & Jefferson College",
//     value: "Washington & Jefferson College"
//   },
//   { label: "Waynesburg University", value: "Waynesburg University" },
//   {
//     label: "Welder Training and Testing Institute",
//     value: "Welder Training and Testing Institute"
//   },
//   {
//     label: "West Chester University of Pennsylvania",
//     value: "West Chester University of Pennsylvania"
//   },
//   {
//     label: "Western Pennsylvania Hospital School of Nursing",
//     value: "Western Pennsylvania Hospital School of Nursing"
//   },
//   {
//     label: "Sanford-Brown Institute-Pittsburgh",
//     value: "Sanford-Brown Institute-Pittsburgh"
//   },
//   { label: "Westminster College", value: "Westminster College" },
//   {
//     label: "Westminster Theological Seminary",
//     value: "Westminster Theological Seminary"
//   },
//   {
//     label: "Westmoreland County Community College",
//     value: "Westmoreland County Community College"
//   },
//   {
//     label: "Widener University-Main Campus",
//     value: "Widener University-Main Campus"
//   },
//   { label: "Wilkes University", value: "Wilkes University" },
//   {
//     label: "Newport Business Institute-Williamsport",
//     value: "Newport Business Institute-Williamsport"
//   },
//   { label: "Wilson College", value: "Wilson College" },
//   { label: "Yeshivath Beth Moshe", value: "Yeshivath Beth Moshe" },
//   {
//     label: "York College Pennsylvania",
//     value: "York College Pennsylvania"
//   },
//   {
//     label: "YTI Career Institute-York",
//     value: "YTI Career Institute-York"
//   },
//   {
//     label: "Yorktowne Business Institute",
//     value: "Yorktowne Business Institute"
//   },
//   {
//     label: "Empire Beauty School-Providence",
//     value: "Empire Beauty School-Providence"
//   },
//   { label: "Brown University", value: "Brown University" },
//   { label: "Bryant University", value: "Bryant University" },
//   {
//     label: "Johnson & Wales University-Providence",
//     value: "Johnson & Wales University-Providence"
//   },
//   {
//     label: "Sanford-Brown Institute-Cranston",
//     value: "Sanford-Brown Institute-Cranston"
//   },
//   {
//     label: "New England Institute of Technology",
//     value: "New England Institute of Technology"
//   },
//   {
//     label: "New England Tractor Trailer Training School of Rhode Island",
//     value: "New England Tractor Trailer Training School of Rhode Island"
//   },
//   {
//     label: "Newport School of Hairdressing-Main Campus",
//     value: "Newport School of Hairdressing-Main Campus"
//   },
//   { label: "Providence College", value: "Providence College" },
//   { label: "Rhode Island College", value: "Rhode Island College" },
//   {
//     label: "Community College of Rhode Island",
//     value: "Community College of Rhode Island"
//   },
//   {
//     label: "University of Rhode Island",
//     value: "University of Rhode Island"
//   },
//   {
//     label: "Rhode Island School of Design",
//     value: "Rhode Island School of Design"
//   },
//   {
//     label: "Roger Williams University",
//     value: "Roger Williams University"
//   },
//   { label: "Salve Regina University", value: "Salve Regina University" },
//   {
//     label: "St Joseph School of Nursing",
//     value: "St Joseph School of Nursing"
//   },
//   {
//     label: "Empire Beauty School-Warwick",
//     value: "Empire Beauty School-Warwick"
//   },
//   { label: "Northpoint Bible College", value: "Northpoint Bible College" },
//   { label: "Aiken Technical College", value: "Aiken Technical College" },
//   { label: "Allen University", value: "Allen University" },
//   { label: "Anderson University", value: "Anderson University" },
//   {
//     label: "Charleston Southern University",
//     value: "Charleston Southern University"
//   },
//   {
//     label: "Technical College of the Lowcountry",
//     value: "Technical College of the Lowcountry"
//   },
//   { label: "Benedict College", value: "Benedict College" },
//   { label: "Bob Jones University", value: "Bob Jones University" },
//   {
//     label: "Southern Wesleyan University",
//     value: "Southern Wesleyan University"
//   },
//   {
//     label: "Charleston Cosmetology Institute",
//     value: "Charleston Cosmetology Institute"
//   },
//   { label: "College of Charleston", value: "College of Charleston" },
//   { label: "Charzanne Beauty College", value: "Charzanne Beauty College" },
//   {
//     label: "Northeastern Technical College",
//     value: "Northeastern Technical College"
//   },
//   {
//     label: "Citadel Military College of South Carolina",
//     value: "Citadel Military College of South Carolina"
//   },
//   { label: "Claflin University", value: "Claflin University" },
//   { label: "Clemson University", value: "Clemson University" },
//   { label: "Clinton College", value: "Clinton College" },
//   { label: "Coker College", value: "Coker College" },
//   {
//     label: "Columbia International University",
//     value: "Columbia International University"
//   },
//   { label: "Columbia College", value: "Columbia College" },
//   { label: "Converse College", value: "Converse College" },
//   {
//     label: "Denmark Technical College",
//     value: "Denmark Technical College"
//   },
//   { label: "Erskine College", value: "Erskine College" },
//   {
//     label: "Florence-Darlington Technical College",
//     value: "Florence-Darlington Technical College"
//   },
//   { label: "Forrest College", value: "Forrest College" },
//   {
//     label: "Francis Marion University",
//     value: "Francis Marion University"
//   },
//   { label: "Furman University", value: "Furman University" },
//   { label: "Cathedral Bible College", value: "Cathedral Bible College" },
//   {
//     label: "Greenville Technical College",
//     value: "Greenville Technical College"
//   },
//   {
//     label: "Horry-Georgetown Technical College",
//     value: "Horry-Georgetown Technical College"
//   },
//   {
//     label: "Kenneth Shuler School of Cosmetology-North Augusta",
//     value: "Kenneth Shuler School of Cosmetology-North Augusta"
//   },
//   {
//     label: "Kenneth Shuler School of Cosmetology and Nails-Columbia",
//     value: "Kenneth Shuler School of Cosmetology and Nails-Columbia"
//   },
//   { label: "Lander University", value: "Lander University" },
//   { label: "Limestone College", value: "Limestone College" },
//   {
//     label: "Lenoir-Rhyne University-Lutheran Theological Southern Seminary",
//     value: "Lenoir-Rhyne University-Lutheran Theological Southern Seminary"
//   },
//   {
//     label: "Medical University of South Carolina",
//     value: "Medical University of South Carolina"
//   },
//   {
//     label: "Midlands Technical College",
//     value: "Midlands Technical College"
//   },
//   { label: "Morris College", value: "Morris College" },
//   { label: "Newberry College", value: "Newberry College" },
//   {
//     label: "North Greenville University",
//     value: "North Greenville University"
//   },
//   {
//     label: "Orangeburg Calhoun Technical College",
//     value: "Orangeburg Calhoun Technical College"
//   },
//   {
//     label: "Piedmont Technical College",
//     value: "Piedmont Technical College"
//   },
//   { label: "Presbyterian College", value: "Presbyterian College" },
//   {
//     label: "University of South Carolina-Aiken",
//     value: "University of South Carolina-Aiken"
//   },
//   {
//     label: "University of South Carolina-Beaufort",
//     value: "University of South Carolina-Beaufort"
//   },
//   {
//     label: "University of South Carolina-Columbia",
//     value: "University of South Carolina-Columbia"
//   },
//   {
//     label: "University of South Carolina-Lancaster",
//     value: "University of South Carolina-Lancaster"
//   },
//   {
//     label: "University of South Carolina-Salkehatchie",
//     value: "University of South Carolina-Salkehatchie"
//   },
//   {
//     label: "University of South Carolina-Sumter",
//     value: "University of South Carolina-Sumter"
//   },
//   {
//     label: "University of South Carolina-Union",
//     value: "University of South Carolina-Union"
//   },
//   {
//     label: "Coastal Carolina University",
//     value: "Coastal Carolina University"
//   },
//   {
//     label: "South Carolina State University",
//     value: "South Carolina State University"
//   },
//   {
//     label: "University of South Carolina-Upstate",
//     value: "University of South Carolina-Upstate"
//   },
//   {
//     label: "Sherman College of Straight Chiropractic",
//     value: "Sherman College of Straight Chiropractic"
//   },
//   {
//     label: "Spartanburg Methodist College",
//     value: "Spartanburg Methodist College"
//   },
//   {
//     label: "Spartanburg Community College",
//     value: "Spartanburg Community College"
//   },
//   {
//     label: "Central Carolina Technical College",
//     value: "Central Carolina Technical College"
//   },
//   { label: "Sumter Beauty College", value: "Sumter Beauty College" },
//   {
//     label: "Tri-County Technical College",
//     value: "Tri-County Technical College"
//   },
//   {
//     label: "Trident Technical College",
//     value: "Trident Technical College"
//   },
//   { label: "Voorhees College", value: "Voorhees College" },
//   {
//     label: "Williamsburg Technical College",
//     value: "Williamsburg Technical College"
//   },
//   { label: "Winthrop University", value: "Winthrop University" },
//   { label: "Wofford College", value: "Wofford College" },
//   { label: "York Technical College", value: "York Technical College" },
//   { label: "Augustana College", value: "Augustana College" },
//   {
//     label: "Black Hills Beauty College",
//     value: "Black Hills Beauty College"
//   },
//   {
//     label: "Black Hills State University",
//     value: "Black Hills State University"
//   },
//   { label: "Kilian Community College", value: "Kilian Community College" },
//   { label: "Dakota State University", value: "Dakota State University" },
//   {
//     label: "Dakota Wesleyan University",
//     value: "Dakota Wesleyan University"
//   },
//   { label: "Headlines Academy Inc", value: "Headlines Academy Inc" },
//   {
//     label: "Lake Area Technical Institute",
//     value: "Lake Area Technical Institute"
//   },
//   {
//     label: "Avera McKennan Hospital School of Radiologic Technology",
//     value: "Avera McKennan Hospital School of Radiologic Technology"
//   },
//   {
//     label: "Mitchell Technical Institute",
//     value: "Mitchell Technical Institute"
//   },
//   { label: "Mount Marty College", value: "Mount Marty College" },
//   {
//     label: "National American University-Rapid City",
//     value: "National American University-Rapid City"
//   },
//   {
//     label: "National American University-Sioux Falls",
//     value: "National American University-Sioux Falls"
//   },
//   { label: "Sioux Falls Seminary", value: "Sioux Falls Seminary" },
//   {
//     label: "Northern State University",
//     value: "Northern State University"
//   },
//   { label: "Oglala Lakota College", value: "Oglala Lakota College" },
//   { label: "Presentation College", value: "Presentation College" },
//   {
//     label: "Avera Sacred Heart Hospital",
//     value: "Avera Sacred Heart Hospital"
//   },
//   {
//     label: "South Dakota School of Mines and Technology",
//     value: "South Dakota School of Mines and Technology"
//   },
//   {
//     label: "South Dakota State University",
//     value: "South Dakota State University"
//   },
//   { label: "Sinte Gleska University", value: "Sinte Gleska University" },
//   {
//     label: "University of Sioux Falls",
//     value: "University of Sioux Falls"
//   },
//   { label: "Sanford Medical Center", value: "Sanford Medical Center" },
//   {
//     label: "Sisseton Wahpeton College",
//     value: "Sisseton Wahpeton College"
//   },
//   {
//     label: "Southeast Technical Institute",
//     value: "Southeast Technical Institute"
//   },
//   { label: "Stewart School", value: "Stewart School" },
//   {
//     label: "University of South Dakota",
//     value: "University of South Dakota"
//   },
//   {
//     label: "Western Dakota Technical Institute",
//     value: "Western Dakota Technical Institute"
//   },
//   { label: "American Baptist College", value: "American Baptist College" },
//   { label: "Aquinas College", value: "Aquinas College" },
//   { label: "Arnolds Beauty School", value: "Arnolds Beauty School" },
//   {
//     label: "Tennessee College of Applied Technology-Athens",
//     value: "Tennessee College of Applied Technology-Athens"
//   },
//   {
//     label: "Austin Peay State University",
//     value: "Austin Peay State University"
//   },
//   {
//     label: "Baptist Memorial College of Health Sciences",
//     value: "Baptist Memorial College of Health Sciences"
//   },
//   { label: "Belmont University", value: "Belmont University" },
//   { label: "Bethel University", value: "Bethel University" },
//   { label: "Bryan College-Dayton", value: "Bryan College-Dayton" },
//   { label: "Carson-Newman University", value: "Carson-Newman University" },
//   {
//     label: "Chattanooga State Community College",
//     value: "Chattanooga State Community College"
//   },
//   {
//     label: "Christian Brothers University",
//     value: "Christian Brothers University"
//   },
//   {
//     label: "Pentecostal Theological Seminary",
//     value: "Pentecostal Theological Seminary"
//   },
//   {
//     label: "Cleveland State Community College",
//     value: "Cleveland State Community College"
//   },
//   {
//     label: "Columbia State Community College",
//     value: "Columbia State Community College"
//   },
//   {
//     label: "Concorde Career College-Memphis",
//     value: "Concorde Career College-Memphis"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Covington",
//     value: "Tennessee College of Applied Technology-Covington"
//   },
//   { label: "Cumberland University", value: "Cumberland University" },
//   { label: "Lipscomb University", value: "Lipscomb University" },
//   {
//     label: "Tennessee College of Applied Technology-Dickson",
//     value: "Tennessee College of Applied Technology-Dickson"
//   },
//   {
//     label: "Daymar Institute-Nashville",
//     value: "Daymar Institute-Nashville"
//   },
//   {
//     label: "Dyersburg State Community College",
//     value: "Dyersburg State Community College"
//   },
//   {
//     label: "East Tennessee State University",
//     value: "East Tennessee State University"
//   },
//   {
//     label: "Chattanooga College Medical Dental and Technical Careers",
//     value: "Chattanooga College Medical Dental and Technical Careers"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Elizabethton",
//     value: "Tennessee College of Applied Technology-Elizabethton"
//   },
//   {
//     label: "Emmanuel Christian Seminary",
//     value: "Emmanuel Christian Seminary"
//   },
//   {
//     label: "Fayetteville College of Cosmetology Arts and Sciences",
//     value: "Fayetteville College of Cosmetology Arts and Sciences"
//   },
//   { label: "Fisk University", value: "Fisk University" },
//   { label: "Welch College", value: "Welch College" },
//   {
//     label: "Freed-Hardeman University",
//     value: "Freed-Hardeman University"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Harriman",
//     value: "Tennessee College of Applied Technology-Harriman"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Hartsville",
//     value: "Tennessee College of Applied Technology-Hartsville"
//   },
//   { label: "Hiwassee College", value: "Hiwassee College" },
//   {
//     label: "Tennessee College of Applied Technology-Hohenwald",
//     value: "Tennessee College of Applied Technology-Hohenwald"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Jacksboro",
//     value: "Tennessee College of Applied Technology-Jacksboro"
//   },
//   {
//     label: "Jackson State Community College",
//     value: "Jackson State Community College"
//   },
//   { label: "John A Gupton College", value: "John A Gupton College" },
//   { label: "Johnson University", value: "Johnson University" },
//   {
//     label: "Paul Mitchell the School-Nashville",
//     value: "Paul Mitchell the School-Nashville"
//   },
//   { label: "King University", value: "King University" },
//   { label: "South College", value: "South College" },
//   {
//     label: "Knoxville Institute of Hair Design",
//     value: "Knoxville Institute of Hair Design"
//   },
//   { label: "Lane College", value: "Lane College" },
//   { label: "Le Moyne-Owen College", value: "Le Moyne-Owen College" },
//   { label: "Lee University", value: "Lee University" },
//   {
//     label: "Lincoln Memorial University",
//     value: "Lincoln Memorial University"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Livingston",
//     value: "Tennessee College of Applied Technology-Livingston"
//   },
//   { label: "Martin Methodist College", value: "Martin Methodist College" },
//   { label: "Maryville College", value: "Maryville College" },
//   {
//     label: "Tennessee College of Applied Technology-McKenzie",
//     value: "Tennessee College of Applied Technology-McKenzie"
//   },
//   {
//     label: "Genesis Career College-Cookeville",
//     value: "Genesis Career College-Cookeville"
//   },
//   { label: "Meharry Medical College", value: "Meharry Medical College" },
//   { label: "Memphis College of Art", value: "Memphis College of Art" },
//   {
//     label: "Tennessee College of Applied Technology-Memphis",
//     value: "Tennessee College of Applied Technology-Memphis"
//   },
//   { label: "University of Memphis", value: "University of Memphis" },
//   {
//     label: "Memphis Theological Seminary",
//     value: "Memphis Theological Seminary"
//   },
//   { label: "Victory University", value: "Victory University" },
//   {
//     label: "Middle Tennessee State University",
//     value: "Middle Tennessee State University"
//   },
//   {
//     label: "Middle Tennessee School of Anesthesia Inc",
//     value: "Middle Tennessee School of Anesthesia Inc"
//   },
//   { label: "Milligan College", value: "Milligan College" },
//   {
//     label: "Tennessee College of Applied Technology-Morristown",
//     value: "Tennessee College of Applied Technology-Morristown"
//   },
//   {
//     label: "Motlow State Community College",
//     value: "Motlow State Community College"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Murfreesboro",
//     value: "Tennessee College of Applied Technology-Murfreesboro"
//   },
//   {
//     label: "Lincoln College of Technology-Nashville",
//     value: "Lincoln College of Technology-Nashville"
//   },
//   {
//     label: "Nashville College of Medical Careers",
//     value: "Nashville College of Medical Careers"
//   },
//   {
//     label: "Nashville State Community College",
//     value: "Nashville State Community College"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Newbern",
//     value: "Tennessee College of Applied Technology-Newbern"
//   },
//   { label: "O'More College of Design", value: "O'More College of Design" },
//   {
//     label: "Tennessee College of Applied Technology-Paris",
//     value: "Tennessee College of Applied Technology-Paris"
//   },
//   { label: "Plaza Beauty School", value: "Plaza Beauty School" },
//   {
//     label: "Tennessee College of Applied Technology-Pulaski",
//     value: "Tennessee College of Applied Technology-Pulaski"
//   },
//   { label: "Rhodes College", value: "Rhodes College" },
//   {
//     label: "Tennessee College of Applied Technology-Ripley",
//     value: "Tennessee College of Applied Technology-Ripley"
//   },
//   {
//     label: "Roane State Community College",
//     value: "Roane State Community College"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Crump",
//     value: "Tennessee College of Applied Technology-Crump"
//   },
//   {
//     label: "Southwest Tennessee Community College",
//     value: "Southwest Tennessee Community College"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Shelbyville",
//     value: "Tennessee College of Applied Technology-Shelbyville"
//   },
//   {
//     label: "Sewanee-The University of the South",
//     value: "Sewanee-The University of the South"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Oneida-Huntsville",
//     value: "Tennessee College of Applied Technology-Oneida-Huntsville"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Crossville",
//     value: "Tennessee College of Applied Technology-Crossville"
//   },
//   {
//     label: "Tennessee College of Applied Technology-McMinnville",
//     value: "Tennessee College of Applied Technology-McMinnville"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Jackson",
//     value: "Tennessee College of Applied Technology-Jackson"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Knoxville",
//     value: "Tennessee College of Applied Technology-Knoxville"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Whiteville",
//     value: "Tennessee College of Applied Technology-Whiteville"
//   },
//   {
//     label: "Pellissippi State Community College",
//     value: "Pellissippi State Community College"
//   },
//   {
//     label: "Southern Adventist University",
//     value: "Southern Adventist University"
//   },
//   {
//     label: "Southern College of Optometry",
//     value: "Southern College of Optometry"
//   },
//   {
//     label: "Tennessee Wesleyan College",
//     value: "Tennessee Wesleyan College"
//   },
//   {
//     label: "The University of Tennessee-Chattanooga",
//     value: "The University of Tennessee-Chattanooga"
//   },
//   {
//     label: "The University of Tennessee-Knoxville",
//     value: "The University of Tennessee-Knoxville"
//   },
//   {
//     label: "The University of Tennessee-Martin",
//     value: "The University of Tennessee-Martin"
//   },
//   {
//     label: "Fountainhead College of Technology",
//     value: "Fountainhead College of Technology"
//   },
//   {
//     label: "Tennessee School of Beauty of Knoxville Inc",
//     value: "Tennessee School of Beauty of Knoxville Inc"
//   },
//   {
//     label: "Tennessee State University",
//     value: "Tennessee State University"
//   },
//   {
//     label: "Tennessee Technological University",
//     value: "Tennessee Technological University"
//   },
//   {
//     label: "Tennessee Temple University",
//     value: "Tennessee Temple University"
//   },
//   {
//     label: "Trevecca Nazarene University",
//     value: "Trevecca Nazarene University"
//   },
//   {
//     label: "Northeast State Community College",
//     value: "Northeast State Community College"
//   },
//   { label: "Tusculum College", value: "Tusculum College" },
//   { label: "Union University", value: "Union University" },
//   {
//     label: "New Concepts School of Cosmetology",
//     value: "New Concepts School of Cosmetology"
//   },
//   { label: "Vanderbilt University", value: "Vanderbilt University" },
//   {
//     label: "Volunteer Beauty Academy-Dyersburg",
//     value: "Volunteer Beauty Academy-Dyersburg"
//   },
//   {
//     label: "Volunteer State Community College",
//     value: "Volunteer State Community College"
//   },
//   {
//     label: "Walters State Community College",
//     value: "Walters State Community College"
//   },
//   {
//     label: "West Tennessee Business College",
//     value: "West Tennessee Business College"
//   },
//   {
//     label: "William Moore College of Technology",
//     value: "William Moore College of Technology"
//   },
//   {
//     label: "Abilene Christian University",
//     value: "Abilene Christian University"
//   },
//   {
//     label: "Alamo Community College District Central Office",
//     value: "Alamo Community College District Central Office"
//   },
//   { label: "Alvin Community College", value: "Alvin Community College" },
//   { label: "Amarillo College", value: "Amarillo College" },
//   { label: "Amberton University", value: "Amberton University" },
//   {
//     label: "American Commercial College-San Angelo",
//     value: "American Commercial College-San Angelo"
//   },
//   {
//     label: "American Commercial College-Abilene",
//     value: "American Commercial College-Abilene"
//   },
//   {
//     label: "American Commercial College-Odessa",
//     value: "American Commercial College-Odessa"
//   },
//   { label: "Angelina College", value: "Angelina College" },
//   { label: "Angelo State University", value: "Angelo State University" },
//   {
//     label: "Arlington Baptist College",
//     value: "Arlington Baptist College"
//   },
//   {
//     label: "Arlington Career Institute",
//     value: "Arlington Career Institute"
//   },
//   {
//     label: "The Art Institute of Houston",
//     value: "The Art Institute of Houston"
//   },
//   { label: "Austin College", value: "Austin College" },
//   {
//     label: "Austin Community College District",
//     value: "Austin Community College District"
//   },
//   {
//     label: "Austin Presbyterian Theological Seminary",
//     value: "Austin Presbyterian Theological Seminary"
//   },
//   {
//     label: "Baldwin Beauty School-South Austin",
//     value: "Baldwin Beauty School-South Austin"
//   },
//   {
//     label: "Baptist Health System School of Health Professions",
//     value: "Baptist Health System School of Health Professions"
//   },
//   {
//     label: "Baptist Missionary Association Theological Seminary",
//     value: "Baptist Missionary Association Theological Seminary"
//   },
//   {
//     label: "Texas A & M University Health Science Center",
//     value: "Texas A & M University Health Science Center"
//   },
//   {
//     label: "Baylor College of Medicine",
//     value: "Baylor College of Medicine"
//   },
//   { label: "Baylor University", value: "Baylor University" },
//   { label: "Coastal Bend College", value: "Coastal Bend College" },
//   { label: "Blinn College", value: "Blinn College" },
//   {
//     label: "Remington College-Dallas Campus",
//     value: "Remington College-Dallas Campus"
//   },
//   {
//     label: "Vet Tech Institute of Houston",
//     value: "Vet Tech Institute of Houston"
//   },
//   { label: "Brazosport College", value: "Brazosport College" },
//   { label: "Brookhaven College", value: "Brookhaven College" },
//   {
//     label: "Capitol City Trade and Technical School",
//     value: "Capitol City Trade and Technical School"
//   },
//   { label: "Capitol City Careers", value: "Capitol City Careers" },
//   { label: "Cedar Valley College", value: "Cedar Valley College" },
//   { label: "Central Texas College", value: "Central Texas College" },
//   {
//     label: "Charles and Sues School of Hair Design",
//     value: "Charles and Sues School of Hair Design"
//   },
//   { label: "Cisco College", value: "Cisco College" },
//   { label: "Clarendon College", value: "Clarendon College" },
//   {
//     label: "Concordia University-Texas",
//     value: "Concordia University-Texas"
//   },
//   {
//     label: "Conlee's College of Cosmetology",
//     value: "Conlee's College of Cosmetology"
//   },
//   {
//     label: "North Central Texas College",
//     value: "North Central Texas College"
//   },
//   {
//     label: "Texas A & M University-Corpus Christi",
//     value: "Texas A & M University-Corpus Christi"
//   },
//   {
//     label: "Cosmetology Career Center LLC",
//     value: "Cosmetology Career Center LLC"
//   },
//   {
//     label: "Court Reporting Institute of Dallas",
//     value: "Court Reporting Institute of Dallas"
//   },
//   {
//     label: "Dallas Baptist University",
//     value: "Dallas Baptist University"
//   },
//   { label: "Dallas Christian College", value: "Dallas Christian College" },
//   {
//     label: "Dallas County Community College District",
//     value: "Dallas County Community College District"
//   },
//   {
//     label: "Dallas Institute of Funeral Service",
//     value: "Dallas Institute of Funeral Service"
//   },
//   {
//     label: "Dallas Theological Seminary",
//     value: "Dallas Theological Seminary"
//   },
//   { label: "University of Dallas", value: "University of Dallas" },
//   { label: "Del Mar College", value: "Del Mar College" },
//   { label: "DeVry University-Texas", value: "DeVry University-Texas" },
//   { label: "Career Point College", value: "Career Point College" },
//   {
//     label: "East Texas Baptist University",
//     value: "East Texas Baptist University"
//   },
//   {
//     label: "Texas A & M University-Texarkana",
//     value: "Texas A & M University-Texarkana"
//   },
//   {
//     label: "Texas A & M University-Commerce",
//     value: "Texas A & M University-Commerce"
//   },
//   { label: "Eastfield College", value: "Eastfield College" },
//   { label: "El Centro College", value: "El Centro College" },
//   {
//     label: "El Paso Community College",
//     value: "El Paso Community College"
//   },
//   {
//     label: "Western Technical College",
//     value: "Western Technical College"
//   },
//   {
//     label: "Western Technical College",
//     value: "Western Technical College"
//   },
//   {
//     label: "Episcopal Theological Seminary of the Southwest",
//     value: "Episcopal Theological Seminary of the Southwest"
//   },
//   {
//     label: "Exposito School of Hair Design",
//     value: "Exposito School of Hair Design"
//   },
//   {
//     label: "South University-The Art Institute of Dallas",
//     value: "South University-The Art Institute of Dallas"
//   },
//   { label: "Fort Worth Beauty School", value: "Fort Worth Beauty School" },
//   { label: "Frank Phillips College", value: "Frank Phillips College" },
//   { label: "Franklin Beauty School", value: "Franklin Beauty School" },
//   { label: "Galveston College", value: "Galveston College" },
//   { label: "Grayson College", value: "Grayson College" },
//   { label: "Hallmark College", value: "Hallmark College" },
//   {
//     label: "Hardin-Simmons University",
//     value: "Hardin-Simmons University"
//   },
//   {
//     label: "Trinity Valley Community College",
//     value: "Trinity Valley Community College"
//   },
//   { label: "Hill College", value: "Hill College" },
//   {
//     label: "Houston Baptist University",
//     value: "Houston Baptist University"
//   },
//   {
//     label: "University of Houston-Clear Lake",
//     value: "University of Houston-Clear Lake"
//   },
//   {
//     label: "Houston Community College",
//     value: "Houston Community College"
//   },
//   {
//     label: "University of Houston-Downtown",
//     value: "University of Houston-Downtown"
//   },
//   {
//     label: "University of Houston-Victoria",
//     value: "University of Houston-Victoria"
//   },
//   { label: "University of Houston", value: "University of Houston" },
//   { label: "Howard College", value: "Howard College" },
//   { label: "Howard Payne University", value: "Howard Payne University" },
//   {
//     label: "Huston-Tillotson University",
//     value: "Huston-Tillotson University"
//   },
//   {
//     label: "University of the Incarnate Word",
//     value: "University of the Incarnate Word"
//   },
//   {
//     label: "International Business College-El Paso",
//     value: "International Business College-El Paso"
//   },
//   {
//     label: "International Business College-El Paso",
//     value: "International Business College-El Paso"
//   },
//   {
//     label: "International Business College-El Paso",
//     value: "International Business College-El Paso"
//   },
//   {
//     label: "ITT Technical Institute-Arlington",
//     value: "ITT Technical Institute-Arlington"
//   },
//   {
//     label: "ITT Technical Institute-Houston West",
//     value: "ITT Technical Institute-Houston West"
//   },
//   {
//     label: "Jacksonville College-Main Campus",
//     value: "Jacksonville College-Main Campus"
//   },
//   { label: "Jarvis Christian College", value: "Jarvis Christian College" },
//   {
//     label: "KD College Conservatory of Film and Dramatic Arts",
//     value: "KD College Conservatory of Film and Dramatic Arts"
//   },
//   { label: "Kilgore College", value: "Kilgore College" },
//   { label: "Lamar University", value: "Lamar University" },
//   {
//     label: "Lamar State College-Orange",
//     value: "Lamar State College-Orange"
//   },
//   {
//     label: "Lamar State College-Port Arthur",
//     value: "Lamar State College-Port Arthur"
//   },
//   {
//     label: "Laredo Beauty College Inc",
//     value: "Laredo Beauty College Inc"
//   },
//   { label: "Laredo Community College", value: "Laredo Community College" },
//   {
//     label: "Texas A & M International University",
//     value: "Texas A & M International University"
//   },
//   { label: "Lee College", value: "Lee College" },
//   { label: "LeTourneau University", value: "LeTourneau University" },
//   {
//     label: "Lincoln College of Technology-Grand Prairie",
//     value: "Lincoln College of Technology-Grand Prairie"
//   },
//   { label: "Lubbock Hair Academy", value: "Lubbock Hair Academy" },
//   {
//     label: "Lubbock Christian University",
//     value: "Lubbock Christian University"
//   },
//   { label: "College of the Mainland", value: "College of the Mainland" },
//   {
//     label: "University of Mary Hardin-Baylor",
//     value: "University of Mary Hardin-Baylor"
//   },
//   {
//     label: "McLennan Community College",
//     value: "McLennan Community College"
//   },
//   { label: "McMurry University", value: "McMurry University" },
//   {
//     label: "Covenant School of Nursing and Allied Health",
//     value: "Covenant School of Nursing and Allied Health"
//   },
//   { label: "Metroplex Beauty School", value: "Metroplex Beauty School" },
//   { label: "Midland College", value: "Midland College" },
//   {
//     label: "Midwestern State University",
//     value: "Midwestern State University"
//   },
//   {
//     label: "Mims Classic Beauty College",
//     value: "Mims Classic Beauty College"
//   },
//   { label: "Wade College", value: "Wade College" },
//   {
//     label: "Southern Careers Institute-Austin",
//     value: "Southern Careers Institute-Austin"
//   },
//   { label: "Mountain View College", value: "Mountain View College" },
//   {
//     label: "Everest Institute-San Antonio",
//     value: "Everest Institute-San Antonio"
//   },
//   {
//     label: "Tint School of Makeup and Cosmetology-Irving",
//     value: "Tint School of Makeup and Cosmetology-Irving"
//   },
//   { label: "Navarro College", value: "Navarro College" },
//   { label: "Neilson Beauty College", value: "Neilson Beauty College" },
//   { label: "Lone Star College System", value: "Lone Star College System" },
//   { label: "North Lake College", value: "North Lake College" },
//   {
//     label: "University of North Texas",
//     value: "University of North Texas"
//   },
//   {
//     label: "Northeast Texas Community College",
//     value: "Northeast Texas Community College"
//   },
//   {
//     label: "Northwood University-Texas",
//     value: "Northwood University-Texas"
//   },
//   {
//     label: "Oblate School of Theology",
//     value: "Oblate School of Theology"
//   },
//   { label: "Ocean Corporation", value: "Ocean Corporation" },
//   { label: "Odessa College", value: "Odessa College" },
//   {
//     label: "Ogle School Hair Skin Nails-Arlington",
//     value: "Ogle School Hair Skin Nails-Arlington"
//   },
//   {
//     label: "Ogle School Hair Skin Nails-Ft Worth",
//     value: "Ogle School Hair Skin Nails-Ft Worth"
//   },
//   {
//     label: "Our Lady of the Lake University",
//     value: "Our Lady of the Lake University"
//   },
//   {
//     label: "The University of Texas-Pan American",
//     value: "The University of Texas-Pan American"
//   },
//   {
//     label: "The University of Texas at Brownsville",
//     value: "The University of Texas at Brownsville"
//   },
//   { label: "Panola College", value: "Panola College" },
//   { label: "Paris Junior College", value: "Paris Junior College" },
//   { label: "Paul Quinn College", value: "Paul Quinn College" },
//   {
//     label: "Prairie View A & M University",
//     value: "Prairie View A & M University"
//   },
//   { label: "Ranger College", value: "Ranger College" },
//   {
//     label: "Aviation Institute of Maintenance-Houston",
//     value: "Aviation Institute of Maintenance-Houston"
//   },
//   { label: "Rice University", value: "Rice University" },
//   { label: "Richland College", value: "Richland College" },
//   { label: "Kaplan College-McAllen", value: "Kaplan College-McAllen" },
//   {
//     label: "Saint Edward's University",
//     value: "Saint Edward's University"
//   },
//   { label: "St Philip's College", value: "St Philip's College" },
//   { label: "University of St Thomas", value: "University of St Thomas" },
//   {
//     label: "Sam Houston State University",
//     value: "Sam Houston State University"
//   },
//   { label: "San Antonio College", value: "San Antonio College" },
//   {
//     label: "San Jacinto Community College",
//     value: "San Jacinto Community College"
//   },
//   { label: "Schreiner University", value: "Schreiner University" },
//   {
//     label: "Seguin Beauty School-Seguin",
//     value: "Seguin Beauty School-Seguin"
//   },
//   { label: "St Mary's University", value: "St Mary's University" },
//   { label: "South Plains College", value: "South Plains College" },
//   {
//     label: "South Texas Barber College Inc",
//     value: "South Texas Barber College Inc"
//   },
//   {
//     label: "South Texas College of Law",
//     value: "South Texas College of Law"
//   },
//   {
//     label: "South Texas Vo-Tech Institute",
//     value: "South Texas Vo-Tech Institute"
//   },
//   {
//     label: "South Texas Vocational Technical Institute-McAllen",
//     value: "South Texas Vocational Technical Institute-McAllen"
//   },
//   {
//     label: "Southern Methodist University",
//     value: "Southern Methodist University"
//   },
//   {
//     label: "Southwest School of Business and Technical Careers-San Antonio",
//     value: "Southwest School of Business and Technical Careers-San Antonio"
//   },
//   {
//     label: "Southwest Institute of Technology",
//     value: "Southwest Institute of Technology"
//   },
//   {
//     label: "Southwest Texas Junior College",
//     value: "Southwest Texas Junior College"
//   },
//   {
//     label: "Southwestern Assemblies of God University",
//     value: "Southwestern Assemblies of God University"
//   },
//   { label: "Southwestern University", value: "Southwestern University" },
//   {
//     label: "Stephen F Austin State University",
//     value: "Stephen F Austin State University"
//   },
//   { label: "Texas State University", value: "Texas State University" },
//   {
//     label: "Southwestern Adventist University",
//     value: "Southwestern Adventist University"
//   },
//   {
//     label: "Southwestern Christian College",
//     value: "Southwestern Christian College"
//   },
//   {
//     label: "Sul Ross State University",
//     value: "Sul Ross State University"
//   },
//   {
//     label: "Tarleton State University",
//     value: "Tarleton State University"
//   },
//   {
//     label: "Tarrant County College District",
//     value: "Tarrant County College District"
//   },
//   { label: "Temple College", value: "Temple College" },
//   {
//     label: "University of Texas Southwestern Medical Center",
//     value: "University of Texas Southwestern Medical Center"
//   },
//   {
//     label: "The University of Texas Health Science Center at San Antonio",
//     value: "The University of Texas Health Science Center at San Antonio"
//   },
//   {
//     label: "The University of Texas Medical Branch",
//     value: "The University of Texas Medical Branch"
//   },
//   {
//     label: "Texas State Technical College-System",
//     value: "Texas State Technical College-System"
//   },
//   {
//     label: "Texas State Technical College-Waco",
//     value: "Texas State Technical College-Waco"
//   },
//   { label: "Texarkana College", value: "Texarkana College" },
//   {
//     label: "Texas A & M University-Kingsville",
//     value: "Texas A & M University-Kingsville"
//   },
//   {
//     label: "Texas A & M University-Galveston",
//     value: "Texas A & M University-Galveston"
//   },
//   {
//     label: "Texas A & M University-College Station",
//     value: "Texas A & M University-College Station"
//   },
//   {
//     label: "Texas A & M University-System Office",
//     value: "Texas A & M University-System Office"
//   },
//   {
//     label: "The University of Texas at Arlington",
//     value: "The University of Texas at Arlington"
//   },
//   {
//     label: "The University of Texas at Austin",
//     value: "The University of Texas at Austin"
//   },
//   {
//     label: "The University of Texas at Dallas",
//     value: "The University of Texas at Dallas"
//   },
//   {
//     label: "The University of Texas at El Paso",
//     value: "The University of Texas at El Paso"
//   },
//   {
//     label: "The University of Texas at Tyler",
//     value: "The University of Texas at Tyler"
//   },
//   {
//     label: "Texas Chiropractic College Foundation Inc",
//     value: "Texas Chiropractic College Foundation Inc"
//   },
//   {
//     label: "Texas Christian University",
//     value: "Texas Christian University"
//   },
//   { label: "Texas College", value: "Texas College" },
//   {
//     label: "University of North Texas Health Science Center",
//     value: "University of North Texas Health Science Center"
//   },
//   {
//     label: "Texas Lutheran University",
//     value: "Texas Lutheran University"
//   },
//   {
//     label: "The University of Texas of the Permian Basin",
//     value: "The University of Texas of the Permian Basin"
//   },
//   {
//     label: "The University of Texas at San Antonio",
//     value: "The University of Texas at San Antonio"
//   },
//   {
//     label: "Texas School of Business-North Campus",
//     value: "Texas School of Business-North Campus"
//   },
//   {
//     label: "Texas Southern University",
//     value: "Texas Southern University"
//   },
//   {
//     label: "The University of Texas System Office",
//     value: "The University of Texas System Office"
//   },
//   { label: "Texas Tech University", value: "Texas Tech University" },
//   {
//     label: "Texas Vocational Schools Inc",
//     value: "Texas Vocational Schools Inc"
//   },
//   {
//     label: "Texas Wesleyan University",
//     value: "Texas Wesleyan University"
//   },
//   { label: "Texas Woman's University", value: "Texas Woman's University" },
//   { label: "Trinity University", value: "Trinity University" },
//   {
//     label: "The University of Texas Health Science Center at Houston",
//     value: "The University of Texas Health Science Center at Houston"
//   },
//   {
//     label: "Texas State Technical College-Harlingen",
//     value: "Texas State Technical College-Harlingen"
//   },
//   {
//     label: "Texas State Technical College-West Texas",
//     value: "Texas State Technical College-West Texas"
//   },
//   {
//     label: "Texas Tech University Health Sciences Center",
//     value: "Texas Tech University Health Sciences Center"
//   },
//   { label: "Tyler Junior College", value: "Tyler Junior College" },
//   {
//     label: "University of Houston-System Administration",
//     value: "University of Houston-System Administration"
//   },
//   {
//     label: "Universal Technical Institute of Texas Inc.",
//     value: "Universal Technical Institute of Texas Inc."
//   },
//   {
//     label: "University of Cosmetology Arts & Sciences-McAllen",
//     value: "University of Cosmetology Arts & Sciences-McAllen"
//   },
//   { label: "Vernon College", value: "Vernon College" },
//   {
//     label: "Victoria Beauty College Inc",
//     value: "Victoria Beauty College Inc"
//   },
//   { label: "Victoria College", value: "Victoria College" },
//   {
//     label: "Vogue College of Cosmetology-McAllen",
//     value: "Vogue College of Cosmetology-McAllen"
//   },
//   {
//     label: "Wayland Baptist University",
//     value: "Wayland Baptist University"
//   },
//   { label: "Weatherford College", value: "Weatherford College" },
//   {
//     label: "West Texas A & M University",
//     value: "West Texas A & M University"
//   },
//   { label: "Western Texas College", value: "Western Texas College" },
//   {
//     label: "Wharton County Junior College",
//     value: "Wharton County Junior College"
//   },
//   { label: "Wiley College", value: "Wiley College" },
//   { label: "AmeriTech College-Provo", value: "AmeriTech College-Provo" },
//   {
//     label: "Bridgerland Applied Technology College",
//     value: "Bridgerland Applied Technology College"
//   },
//   {
//     label: "Brigham Young University-Provo",
//     value: "Brigham Young University-Provo"
//   },
//   {
//     label: "Brigham Young University-Hawaii",
//     value: "Brigham Young University-Hawaii"
//   },
//   {
//     label: "Broadview University-West Jordan",
//     value: "Broadview University-West Jordan"
//   },
//   {
//     label: "Cameo College of Essential Beauty",
//     value: "Cameo College of Essential Beauty"
//   },
//   {
//     label: "Sherman Kendall Academy-Salt Lake City",
//     value: "Sherman Kendall Academy-Salt Lake City"
//   },
//   {
//     label: "Sherman Kendall Academy-Midvale",
//     value: "Sherman Kendall Academy-Midvale"
//   },
//   {
//     label: "Davis Applied Technology College",
//     value: "Davis Applied Technology College"
//   },
//   { label: "Dixie State University", value: "Dixie State University" },
//   {
//     label: "Evans Hairstyling College-Cedar City",
//     value: "Evans Hairstyling College-Cedar City"
//   },
//   {
//     label: "Evans Hairstyling College-St George",
//     value: "Evans Hairstyling College-St George"
//   },
//   {
//     label: "Paul Mitchell the School-Salt Lake City",
//     value: "Paul Mitchell the School-Salt Lake City"
//   },
//   {
//     label: "Eagle Gate College-Murray",
//     value: "Eagle Gate College-Murray"
//   },
//   {
//     label: "ITT Technical Institute-Murray",
//     value: "ITT Technical Institute-Murray"
//   },
//   {
//     label: "Latter-day Saints Business College",
//     value: "Latter-day Saints Business College"
//   },
//   {
//     label: "Everest College-Salt Lake City",
//     value: "Everest College-Salt Lake City"
//   },
//   {
//     label: "Ogden-Weber Applied Technology College",
//     value: "Ogden-Weber Applied Technology College"
//   },
//   { label: "Snow College", value: "Snow College" },
//   { label: "Southern Utah University", value: "Southern Utah University" },
//   {
//     label: "Stevens-Henager College-Ogden",
//     value: "Stevens-Henager College-Ogden"
//   },
//   {
//     label: "Stevens-Henager College of Business-Provo",
//     value: "Stevens-Henager College of Business-Provo"
//   },
//   {
//     label: "Uintah Basin Applied Technology College",
//     value: "Uintah Basin Applied Technology College"
//   },
//   { label: "Utah State University", value: "Utah State University" },
//   { label: "Utah Valley University", value: "Utah Valley University" },
//   {
//     label: "Salt Lake Community College",
//     value: "Salt Lake Community College"
//   },
//   { label: "University of Utah", value: "University of Utah" },
//   { label: "Weber State University", value: "Weber State University" },
//   { label: "Westminster College", value: "Westminster College" },
//   { label: "Bennington College", value: "Bennington College" },
//   { label: "Burlington College", value: "Burlington College" },
//   { label: "Castleton State College", value: "Castleton State College" },
//   { label: "Champlain College", value: "Champlain College" },
//   {
//     label: "Community College of Vermont",
//     value: "Community College of Vermont"
//   },
//   { label: "Goddard College", value: "Goddard College" },
//   { label: "Green Mountain College", value: "Green Mountain College" },
//   { label: "Johnson State College", value: "Johnson State College" },
//   { label: "Lyndon State College", value: "Lyndon State College" },
//   { label: "Marlboro College", value: "Marlboro College" },
//   { label: "Middlebury College", value: "Middlebury College" },
//   {
//     label: "New England Culinary Institute",
//     value: "New England Culinary Institute"
//   },
//   { label: "Norwich University", value: "Norwich University" },
//   { label: "O'Briens Aveda Institute", value: "O'Briens Aveda Institute" },
//   { label: "Saint Michael's College", value: "Saint Michael's College" },
//   { label: "SIT Graduate Institute", value: "SIT Graduate Institute" },
//   { label: "College of St Joseph", value: "College of St Joseph" },
//   { label: "Southern Vermont College", value: "Southern Vermont College" },
//   { label: "Sterling College", value: "Sterling College" },
//   { label: "Vermont Law School", value: "Vermont Law School" },
//   {
//     label: "Vermont State Colleges-Office of the Chancellor",
//     value: "Vermont State Colleges-Office of the Chancellor"
//   },
//   {
//     label: "Vermont Technical College",
//     value: "Vermont Technical College"
//   },
//   { label: "University of Vermont", value: "University of Vermont" },
//   {
//     label: "Bar Palma Beauty Careers Academy",
//     value: "Bar Palma Beauty Careers Academy"
//   },
//   {
//     label: "Advanced Technology Institute",
//     value: "Advanced Technology Institute"
//   },
//   { label: "Averett University", value: "Averett University" },
//   {
//     label: "Blue Ridge Community College",
//     value: "Blue Ridge Community College"
//   },
//   { label: "Bluefield College", value: "Bluefield College" },
//   { label: "Bridgewater College", value: "Bridgewater College" },
//   {
//     label: "College of William and Mary",
//     value: "College of William and Mary"
//   },
//   { label: "Regent University", value: "Regent University" },
//   {
//     label: "Central School of Practical Nursing",
//     value: "Central School of Practical Nursing"
//   },
//   {
//     label: "Central Virginia Community College",
//     value: "Central Virginia Community College"
//   },
//   {
//     label: "Christopher Newport University",
//     value: "Christopher Newport University"
//   },
//   { label: "Suffolk Beauty Academy", value: "Suffolk Beauty Academy" },
//   {
//     label: "Bryant & Stratton College-Virginia Beach",
//     value: "Bryant & Stratton College-Virginia Beach"
//   },
//   {
//     label: "Bryant & Stratton College-Richmond",
//     value: "Bryant & Stratton College-Richmond"
//   },
//   {
//     label: "Jefferson College of Health Sciences",
//     value: "Jefferson College of Health Sciences"
//   },
//   {
//     label: "Dabney S Lancaster Community College",
//     value: "Dabney S Lancaster Community College"
//   },
//   {
//     label: "Danville Community College",
//     value: "Danville Community College"
//   },
//   {
//     label: "Eastern Virginia Medical School",
//     value: "Eastern Virginia Medical School"
//   },
//   {
//     label: "Centura College-Virginia Beach",
//     value: "Centura College-Virginia Beach"
//   },
//   { label: "Emory & Henry College", value: "Emory & Henry College" },
//   {
//     label: "Eastern Mennonite University",
//     value: "Eastern Mennonite University"
//   },
//   {
//     label: "Eastern Shore Community College",
//     value: "Eastern Shore Community College"
//   },
//   { label: "Ferrum College", value: "Ferrum College" },
//   { label: "George Mason University", value: "George Mason University" },
//   {
//     label: "Germanna Community College",
//     value: "Germanna Community College"
//   },
//   { label: "Hampden-Sydney College", value: "Hampden-Sydney College" },
//   { label: "Hampton University", value: "Hampton University" },
//   { label: "Hollins University", value: "Hollins University" },
//   {
//     label: "J Sargeant Reynolds Community College",
//     value: "J Sargeant Reynolds Community College"
//   },
//   { label: "James Madison University", value: "James Madison University" },
//   {
//     label: "John Tyler Community College",
//     value: "John Tyler Community College"
//   },
//   {
//     label: "Everest College-Newport News",
//     value: "Everest College-Newport News"
//   },
//   { label: "Liberty University", value: "Liberty University" },
//   { label: "Longwood University", value: "Longwood University" },
//   {
//     label: "Lord Fairfax Community College",
//     value: "Lord Fairfax Community College"
//   },
//   { label: "Lynchburg College", value: "Lynchburg College" },
//   {
//     label: "Lynchburg General Hospital School of Nursing",
//     value: "Lynchburg General Hospital School of Nursing"
//   },
//   { label: "Mary Baldwin College", value: "Mary Baldwin College" },
//   {
//     label: "University of Mary Washington",
//     value: "University of Mary Washington"
//   },
//   { label: "Marymount University", value: "Marymount University" },
//   {
//     label: "Danville Regional Medical Center School of Health Professions",
//     value: "Danville Regional Medical Center School of Health Professions"
//   },
//   {
//     label: "Mountain Empire Community College",
//     value: "Mountain Empire Community College"
//   },
//   {
//     label: "American National University",
//     value: "American National University"
//   },
//   {
//     label: "New River Community College",
//     value: "New River Community College"
//   },
//   {
//     label: "Sentara College of Health Sciences",
//     value: "Sentara College of Health Sciences"
//   },
//   { label: "Tidewater Tech-Trades", value: "Tidewater Tech-Trades" },
//   { label: "Norfolk State University", value: "Norfolk State University" },
//   {
//     label: "Northern Virginia Community College",
//     value: "Northern Virginia Community College"
//   },
//   { label: "Old Dominion University", value: "Old Dominion University" },
//   {
//     label: "Patrick Henry Community College",
//     value: "Patrick Henry Community College"
//   },
//   {
//     label: "Paul D Camp Community College",
//     value: "Paul D Camp Community College"
//   },
//   {
//     label: "Southside Regional Medical Center Professional Schools",
//     value: "Southside Regional Medical Center Professional Schools"
//   },
//   {
//     label: "Miller-Motte Technical College-Lynchburg",
//     value: "Miller-Motte Technical College-Lynchburg"
//   },
//   {
//     label: "Piedmont Virginia Community College",
//     value: "Piedmont Virginia Community College"
//   },
//   { label: "Radford University", value: "Radford University" },
//   {
//     label: "Sylvain Melloul International Hair Academy",
//     value: "Sylvain Melloul International Hair Academy"
//   },
//   { label: "Randolph-Macon College", value: "Randolph-Macon College" },
//   { label: "Randolph College", value: "Randolph College" },
//   {
//     label: "Rappahannock Community College",
//     value: "Rappahannock Community College"
//   },
//   { label: "Fortis College-Norfolk", value: "Fortis College-Norfolk" },
//   {
//     label: "Richard Bland College of the College of William and Mary",
//     value: "Richard Bland College of the College of William and Mary"
//   },
//   {
//     label: "Bon Secours Memorial College of Nursing",
//     value: "Bon Secours Memorial College of Nursing"
//   },
//   { label: "University of Richmond", value: "University of Richmond" },
//   {
//     label: "Riverside School of Health Careers",
//     value: "Riverside School of Health Careers"
//   },
//   { label: "Roanoke College", value: "Roanoke College" },
//   {
//     label: "Bon Secours St Mary's Hospital School of Medical Imaging",
//     value: "Bon Secours St Mary's Hospital School of Medical Imaging"
//   },
//   { label: "Saint Pauls College", value: "Saint Pauls College" },
//   { label: "Shenandoah University", value: "Shenandoah University" },
//   {
//     label: "Southern Virginia University",
//     value: "Southern Virginia University"
//   },
//   {
//     label: "Southside Virginia Community College",
//     value: "Southside Virginia Community College"
//   },
//   {
//     label: "Southwest Virginia Community College",
//     value: "Southwest Virginia Community College"
//   },
//   {
//     label: "Springfield Beauty Academy",
//     value: "Springfield Beauty Academy"
//   },
//   {
//     label: "Staunton School of Cosmetology",
//     value: "Staunton School of Cosmetology"
//   },
//   {
//     label: "Strayer University-Virginia",
//     value: "Strayer University-Virginia"
//   },
//   { label: "Sweet Briar College", value: "Sweet Briar College" },
//   {
//     label: "Thomas Nelson Community College",
//     value: "Thomas Nelson Community College"
//   },
//   {
//     label: "Tidewater Community College",
//     value: "Tidewater Community College"
//   },
//   {
//     label: "Union Presbyterian Seminary",
//     value: "Union Presbyterian Seminary"
//   },
//   {
//     label: "The University of Virginia's College at Wise",
//     value: "The University of Virginia's College at Wise"
//   },
//   {
//     label: "Virginia Highlands Community College",
//     value: "Virginia Highlands Community College"
//   },
//   {
//     label: "Virginia Intermont College",
//     value: "Virginia Intermont College"
//   },
//   {
//     label: "Virginia Polytechnic Institute and State University",
//     value: "Virginia Polytechnic Institute and State University"
//   },
//   {
//     label: "Virginia Western Community College",
//     value: "Virginia Western Community College"
//   },
//   {
//     label: "Virginia Commonwealth University",
//     value: "Virginia Commonwealth University"
//   },
//   {
//     label: "University of Virginia-Main Campus",
//     value: "University of Virginia-Main Campus"
//   },
//   {
//     label: "Virginia Military Institute",
//     value: "Virginia Military Institute"
//   },
//   {
//     label: "Virginia School of Hair Design",
//     value: "Virginia School of Hair Design"
//   },
//   {
//     label: "Virginia University of Lynchburg",
//     value: "Virginia University of Lynchburg"
//   },
//   {
//     label: "Virginia State University",
//     value: "Virginia State University"
//   },
//   {
//     label: "Virginia Union University",
//     value: "Virginia Union University"
//   },
//   {
//     label: "Virginia Wesleyan College",
//     value: "Virginia Wesleyan College"
//   },
//   {
//     label: "Wards Corner Beauty Academy-Norfolk",
//     value: "Wards Corner Beauty Academy-Norfolk"
//   },
//   {
//     label: "Washington and Lee University",
//     value: "Washington and Lee University"
//   },
//   {
//     label: "Sanford-Brown College-Tysons Corner",
//     value: "Sanford-Brown College-Tysons Corner"
//   },
//   {
//     label: "Washington County Adult Skill Center",
//     value: "Washington County Adult Skill Center"
//   },
//   {
//     label: "Woodrow Wilson Rehabilitation Center",
//     value: "Woodrow Wilson Rehabilitation Center"
//   },
//   {
//     label: "Wytheville Community College",
//     value: "Wytheville Community College"
//   },
//   { label: "Beauty Academy", value: "Beauty Academy" },
//   {
//     label: "The Art Institute of Seattle",
//     value: "The Art Institute of Seattle"
//   },
//   {
//     label: "Evergreen Beauty and Barber College-Bellevue",
//     value: "Evergreen Beauty and Barber College-Bellevue"
//   },
//   { label: "Bellevue College", value: "Bellevue College" },
//   { label: "Bellingham Beauty School", value: "Bellingham Beauty School" },
//   {
//     label: "Bellingham Technical College",
//     value: "Bellingham Technical College"
//   },
//   {
//     label: "Big Bend Community College",
//     value: "Big Bend Community College"
//   },
//   {
//     label: "Everest College-Bremerton",
//     value: "Everest College-Bremerton"
//   },
//   { label: "Everest College-Renton", value: "Everest College-Renton" },
//   {
//     label: "Central Washington University",
//     value: "Central Washington University"
//   },
//   { label: "Centralia College", value: "Centralia College" },
//   {
//     label: "City University of Seattle",
//     value: "City University of Seattle"
//   },
//   { label: "Lucas Marc Academy", value: "Lucas Marc Academy" },
//   { label: "Clark College", value: "Clark College" },
//   {
//     label: "Clover Park Technical College",
//     value: "Clover Park Technical College"
//   },
//   { label: "Columbia Basin College", value: "Columbia Basin College" },
//   {
//     label: "Cornish College of the Arts",
//     value: "Cornish College of the Arts"
//   },
//   {
//     label: "Divers Institute of Technology",
//     value: "Divers Institute of Technology"
//   },
//   {
//     label: "Eastern Washington University",
//     value: "Eastern Washington University"
//   },
//   {
//     label: "Edmonds Community College",
//     value: "Edmonds Community College"
//   },
//   {
//     label: "Everett Community College",
//     value: "Everett Community College"
//   },
//   {
//     label: "Paroba College of Cosmetology",
//     value: "Paroba College of Cosmetology"
//   },
//   {
//     label: "The Evergreen State College",
//     value: "The Evergreen State College"
//   },
//   {
//     label: "Pierce College at Fort Steilacoom",
//     value: "Pierce College at Fort Steilacoom"
//   },
//   {
//     label: "Glen Dow Academy of Hair Design",
//     value: "Glen Dow Academy of Hair Design"
//   },
//   { label: "Gonzaga University", value: "Gonzaga University" },
//   { label: "Grays Harbor College", value: "Grays Harbor College" },
//   {
//     label: "Green River Community College",
//     value: "Green River Community College"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Shoreline",
//     value: "Toni & Guy Hairdressing Academy-Shoreline"
//   },
//   { label: "Heritage University", value: "Heritage University" },
//   {
//     label: "Highline Community College",
//     value: "Highline Community College"
//   },
//   {
//     label: "Interface College-Spokane",
//     value: "Interface College-Spokane"
//   },
//   {
//     label: "International Air and Hospitality Academy",
//     value: "International Air and Hospitality Academy"
//   },
//   {
//     label: "ITT Technical Institute-Seattle",
//     value: "ITT Technical Institute-Seattle"
//   },
//   {
//     label: "ITT Technical Institute-Spokane Valley",
//     value: "ITT Technical Institute-Spokane Valley"
//   },
//   { label: "Bastyr University", value: "Bastyr University" },
//   {
//     label: "Gene Juarez Academy of Beauty-Mountlake Terrace",
//     value: "Gene Juarez Academy of Beauty-Mountlake Terrace"
//   },
//   { label: "Bates Technical College", value: "Bates Technical College" },
//   {
//     label: "Lake Washington Institute of Technology",
//     value: "Lake Washington Institute of Technology"
//   },
//   { label: "Lower Columbia College", value: "Lower Columbia College" },
//   { label: "Trinity Lutheran College", value: "Trinity Lutheran College" },
//   { label: "Cascade Beauty College", value: "Cascade Beauty College" },
//   {
//     label: "BJ's Beauty & Barber College",
//     value: "BJ's Beauty & Barber College"
//   },
//   { label: "Northwest Hair Academy", value: "Northwest Hair Academy" },
//   {
//     label: "Seattle Community College-North Campus",
//     value: "Seattle Community College-North Campus"
//   },
//   { label: "Northwest University", value: "Northwest University" },
//   { label: "Olympic College", value: "Olympic College" },
//   {
//     label: "Perry Technical Institute",
//     value: "Perry Technical Institute"
//   },
//   {
//     label: "Pacific Lutheran University",
//     value: "Pacific Lutheran University"
//   },
//   { label: "Peninsula College", value: "Peninsula College" },
//   {
//     label: "University of Puget Sound",
//     value: "University of Puget Sound"
//   },
//   { label: "Renton Technical College", value: "Renton Technical College" },
//   {
//     label: "Saint Martin's University",
//     value: "Saint Martin's University"
//   },
//   {
//     label: "Seattle Community College-South Campus",
//     value: "Seattle Community College-South Campus"
//   },
//   { label: "Seattle Central College", value: "Seattle Central College" },
//   { label: "Everest College-Seattle", value: "Everest College-Seattle" },
//   {
//     label: "Seattle Pacific University",
//     value: "Seattle Pacific University"
//   },
//   { label: "Seattle University", value: "Seattle University" },
//   {
//     label: "Shoreline Community College",
//     value: "Shoreline Community College"
//   },
//   { label: "Skagit Valley College", value: "Skagit Valley College" },
//   {
//     label: "South Puget Sound Community College",
//     value: "South Puget Sound Community College"
//   },
//   {
//     label: "Spokane Community College",
//     value: "Spokane Community College"
//   },
//   {
//     label: "Spokane Falls Community College",
//     value: "Spokane Falls Community College"
//   },
//   {
//     label: "Stylemaster College of Hair Design",
//     value: "Stylemaster College of Hair Design"
//   },
//   { label: "Tacoma Community College", value: "Tacoma Community College" },
//   { label: "The Hair School", value: "The Hair School" },
//   {
//     label: "Walla Walla Community College",
//     value: "Walla Walla Community College"
//   },
//   { label: "Walla Walla University", value: "Walla Walla University" },
//   {
//     label: "Washington State University",
//     value: "Washington State University"
//   },
//   {
//     label: "University of Washington-Seattle Campus",
//     value: "University of Washington-Seattle Campus"
//   },
//   { label: "Wenatchee Valley College", value: "Wenatchee Valley College" },
//   {
//     label: "Everest College-Vancouver",
//     value: "Everest College-Vancouver"
//   },
//   {
//     label: "Western Washington University",
//     value: "Western Washington University"
//   },
//   {
//     label: "Whatcom Community College",
//     value: "Whatcom Community College"
//   },
//   { label: "Whitman College", value: "Whitman College" },
//   { label: "Whitworth University", value: "Whitworth University" },
//   {
//     label: "Yakima Valley Community College",
//     value: "Yakima Valley Community College"
//   },
//   {
//     label: "Alderson Broaddus University",
//     value: "Alderson Broaddus University"
//   },
//   {
//     label: "Appalachian Beauty School",
//     value: "Appalachian Beauty School"
//   },
//   {
//     label: "Appalachian Bible College",
//     value: "Appalachian Bible College"
//   },
//   {
//     label: "B M Spurr School of Practical Nursing",
//     value: "B M Spurr School of Practical Nursing"
//   },
//   {
//     label: "Ben Franklin Career Center",
//     value: "Ben Franklin Career Center"
//   },
//   { label: "Bethany College", value: "Bethany College" },
//   { label: "Bluefield State College", value: "Bluefield State College" },
//   {
//     label: "Cabell County Career Technology Center",
//     value: "Cabell County Career Technology Center"
//   },
//   {
//     label: "Charleston School of Beauty Culture",
//     value: "Charleston School of Beauty Culture"
//   },
//   { label: "University of Charleston", value: "University of Charleston" },
//   {
//     label: "Clarksburg Beauty Academy and School of Massage Therapy",
//     value: "Clarksburg Beauty Academy and School of Massage Therapy"
//   },
//   { label: "Concord University", value: "Concord University" },
//   { label: "Davis & Elkins College", value: "Davis & Elkins College" },
//   {
//     label: "Fairmont State University",
//     value: "Fairmont State University"
//   },
//   { label: "Glenville State College", value: "Glenville State College" },
//   {
//     label: "HRDE-Stanley Technical Institute-Clarksburg",
//     value: "HRDE-Stanley Technical Institute-Clarksburg"
//   },
//   {
//     label: "Huntington Junior College",
//     value: "Huntington Junior College"
//   },
//   {
//     label: "James Rumsey Technical Institute",
//     value: "James Rumsey Technical Institute"
//   },
//   {
//     label: "Ralph R Willis Career and Technical Center",
//     value: "Ralph R Willis Career and Technical Center"
//   },
//   {
//     label: "Human Resource Development and Employment Inc",
//     value: "Human Resource Development and Employment Inc"
//   },
//   { label: "Marshall University", value: "Marshall University" },
//   {
//     label: "Mercer County Technical Education Center",
//     value: "Mercer County Technical Education Center"
//   },
//   {
//     label: "Meredith Manor International Equestrian Center",
//     value: "Meredith Manor International Equestrian Center"
//   },
//   {
//     label: "Monongalia County Technical Education Center",
//     value: "Monongalia County Technical Education Center"
//   },
//   {
//     label: "Morgantown Beauty College Inc",
//     value: "Morgantown Beauty College Inc"
//   },
//   { label: "Mountain State College", value: "Mountain State College" },
//   {
//     label: "Everest Institute-Cross Lanes",
//     value: "Everest Institute-Cross Lanes"
//   },
//   {
//     label: "Opportunities Industrialization Center",
//     value: "Opportunities Industrialization Center"
//   },
//   { label: "Ohio Valley University", value: "Ohio Valley University" },
//   {
//     label: "West Virginia University at Parkersburg",
//     value: "West Virginia University at Parkersburg"
//   },
//   {
//     label: "Potomac State College of West Virginia University",
//     value: "Potomac State College of West Virginia University"
//   },
//   {
//     label: "Academy of Careers and Technology",
//     value: "Academy of Careers and Technology"
//   },
//   {
//     label: "Salem International University",
//     value: "Salem International University"
//   },
//   { label: "Shepherd University", value: "Shepherd University" },
//   {
//     label: "Southern West Virginia Community and Technical College",
//     value: "Southern West Virginia Community and Technical College"
//   },
//   {
//     label: "Fred W Eberle Technical Center",
//     value: "Fred W Eberle Technical Center"
//   },
//   {
//     label: "West Virginia School of Osteopathic Medicine",
//     value: "West Virginia School of Osteopathic Medicine"
//   },
//   {
//     label: "West Virginia State University",
//     value: "West Virginia State University"
//   },
//   {
//     label: "West Virginia University Hospital Departments of Rad Tech and Nutrition",
//     value: "West Virginia University Hospital Departments of Rad Tech and Nutrition"
//   },
//   { label: "West Liberty University", value: "West Liberty University" },
//   {
//     label: "West Virginia University Institute of Technology",
//     value: "West Virginia University Institute of Technology"
//   },
//   {
//     label: "West Virginia Wesleyan College",
//     value: "West Virginia Wesleyan College"
//   },
//   {
//     label: "West Virginia Business College-Wheeling",
//     value: "West Virginia Business College-Wheeling"
//   },
//   {
//     label: "West Virginia Junior College-Charleston",
//     value: "West Virginia Junior College-Charleston"
//   },
//   {
//     label: "West Virginia Junior College-Morgantown",
//     value: "West Virginia Junior College-Morgantown"
//   },
//   {
//     label: "International Beauty School 4",
//     value: "International Beauty School 4"
//   },
//   {
//     label: "West Virginia Northern Community College",
//     value: "West Virginia Northern Community College"
//   },
//   { label: "West Virginia University", value: "West Virginia University" },
//   {
//     label: "Wheeling Jesuit University",
//     value: "Wheeling Jesuit University"
//   },
//   {
//     label: "Wood County School of Practical Nursing",
//     value: "Wood County School of Practical Nursing"
//   },
//   {
//     label: "Advanced Institute of Hair Design-Glendale",
//     value: "Advanced Institute of Hair Design-Glendale"
//   },
//   { label: "VICI Aveda Institute", value: "VICI Aveda Institute" },
//   { label: "Alverno College", value: "Alverno College" },
//   {
//     label: "Madison Area Technical College",
//     value: "Madison Area Technical College"
//   },
//   { label: "Bellin College", value: "Bellin College" },
//   { label: "Beloit College", value: "Beloit College" },
//   {
//     label: "Blackhawk Technical College",
//     value: "Blackhawk Technical College"
//   },
//   {
//     label: "Cardinal Stritch University",
//     value: "Cardinal Stritch University"
//   },
//   { label: "Carroll University", value: "Carroll University" },
//   { label: "Carthage College", value: "Carthage College" },
//   {
//     label: "Columbia College of Nursing",
//     value: "Columbia College of Nursing"
//   },
//   {
//     label: "Concordia University-Wisconsin",
//     value: "Concordia University-Wisconsin"
//   },
//   { label: "Edgewood College", value: "Edgewood College" },
//   {
//     label: "Fox Valley Technical College",
//     value: "Fox Valley Technical College"
//   },
//   {
//     label: "Gateway Technical College",
//     value: "Gateway Technical College"
//   },
//   {
//     label: "Gill-Tech Academy of Hair Design",
//     value: "Gill-Tech Academy of Hair Design"
//   },
//   {
//     label: "The Salon Professional Academy-Eau Claire",
//     value: "The Salon Professional Academy-Eau Claire"
//   },
//   {
//     label: "ITT Technical Institute-Greenfield",
//     value: "ITT Technical Institute-Greenfield"
//   },
//   {
//     label: "DeVry University-Wisconsin",
//     value: "DeVry University-Wisconsin"
//   },
//   { label: "Lakeland College", value: "Lakeland College" },
//   {
//     label: "Lakeshore Technical College",
//     value: "Lakeshore Technical College"
//   },
//   { label: "Lawrence University", value: "Lawrence University" },
//   {
//     label: "Maranatha Baptist University",
//     value: "Maranatha Baptist University"
//   },
//   { label: "Marian University", value: "Marian University" },
//   { label: "Marquette University", value: "Marquette University" },
//   {
//     label: "Empire Beauty School-Madison",
//     value: "Empire Beauty School-Madison"
//   },
//   {
//     label: "Medical College of Wisconsin",
//     value: "Medical College of Wisconsin"
//   },
//   {
//     label: "Mid-State Technical College",
//     value: "Mid-State Technical College"
//   },
//   {
//     label: "Milwaukee Area Technical College",
//     value: "Milwaukee Area Technical College"
//   },
//   {
//     label: "Milwaukee Institute of Art & Design",
//     value: "Milwaukee Institute of Art & Design"
//   },
//   {
//     label: "Milwaukee School of Engineering",
//     value: "Milwaukee School of Engineering"
//   },
//   {
//     label: "Moraine Park Technical College",
//     value: "Moraine Park Technical College"
//   },
//   { label: "Mount Mary University", value: "Mount Mary University" },
//   { label: "Nashotah House", value: "Nashotah House" },
//   {
//     label: "Nicolet Area Technical College",
//     value: "Nicolet Area Technical College"
//   },
//   {
//     label: "Northcentral Technical College",
//     value: "Northcentral Technical College"
//   },
//   {
//     label: "Northeast Wisconsin Technical College",
//     value: "Northeast Wisconsin Technical College"
//   },
//   {
//     label: "Northland International University",
//     value: "Northland International University"
//   },
//   { label: "Northland College", value: "Northland College" },
//   { label: "Ripon College", value: "Ripon College" },
//   {
//     label: "Sacred Heart School of Theology",
//     value: "Sacred Heart School of Theology"
//   },
//   { label: "Saint Norbert College", value: "Saint Norbert College" },
//   {
//     label: "Silver Lake College of the Holy Family",
//     value: "Silver Lake College of the Holy Family"
//   },
//   {
//     label: "State College of Beauty Culture Inc",
//     value: "State College of Beauty Culture Inc"
//   },
//   {
//     label: "Southwest Wisconsin Technical College",
//     value: "Southwest Wisconsin Technical College"
//   },
//   {
//     label: "Bryant & Stratton College-Milwaukee",
//     value: "Bryant & Stratton College-Milwaukee"
//   },
//   {
//     label: "University of Wisconsin Colleges",
//     value: "University of Wisconsin Colleges"
//   },
//   { label: "Viterbo University", value: "Viterbo University" },
//   {
//     label: "Chippewa Valley Technical College",
//     value: "Chippewa Valley Technical College"
//   },
//   {
//     label: "Waukesha County Technical College",
//     value: "Waukesha County Technical College"
//   },
//   {
//     label: "Western Technical College",
//     value: "Western Technical College"
//   },
//   {
//     label: "University of Wisconsin-Whitewater",
//     value: "University of Wisconsin-Whitewater"
//   },
//   {
//     label: "Wisconsin Indianhead Technical College",
//     value: "Wisconsin Indianhead Technical College"
//   },
//   {
//     label: "Wisconsin School of Professional Psychology",
//     value: "Wisconsin School of Professional Psychology"
//   },
//   {
//     label: "Paul Mitchell the School-Green Bay",
//     value: "Paul Mitchell the School-Green Bay"
//   },
//   {
//     label: "University of Wisconsin-Eau Claire",
//     value: "University of Wisconsin-Eau Claire"
//   },
//   {
//     label: "University of Wisconsin-Green Bay",
//     value: "University of Wisconsin-Green Bay"
//   },
//   {
//     label: "University of Wisconsin-La Crosse",
//     value: "University of Wisconsin-La Crosse"
//   },
//   {
//     label: "Wisconsin Lutheran College",
//     value: "Wisconsin Lutheran College"
//   },
//   {
//     label: "University of Wisconsin-Oshkosh",
//     value: "University of Wisconsin-Oshkosh"
//   },
//   {
//     label: "University of Wisconsin-Parkside",
//     value: "University of Wisconsin-Parkside"
//   },
//   {
//     label: "Herzing University-Madison",
//     value: "Herzing University-Madison"
//   },
//   {
//     label: "University of Wisconsin-Stout",
//     value: "University of Wisconsin-Stout"
//   },
//   {
//     label: "University of Wisconsin-Superior",
//     value: "University of Wisconsin-Superior"
//   },
//   {
//     label: "University of Wisconsin-System Administration",
//     value: "University of Wisconsin-System Administration"
//   },
//   {
//     label: "University of Wisconsin-Madison",
//     value: "University of Wisconsin-Madison"
//   },
//   {
//     label: "University of Wisconsin-Milwaukee",
//     value: "University of Wisconsin-Milwaukee"
//   },
//   {
//     label: "University of Wisconsin-Platteville",
//     value: "University of Wisconsin-Platteville"
//   },
//   {
//     label: "University of Wisconsin-River Falls",
//     value: "University of Wisconsin-River Falls"
//   },
//   {
//     label: "University of Wisconsin-Stevens Point",
//     value: "University of Wisconsin-Stevens Point"
//   },
//   { label: "Casper College", value: "Casper College" },
//   { label: "Central Wyoming College", value: "Central Wyoming College" },
//   { label: "Eastern Wyoming College", value: "Eastern Wyoming College" },
//   {
//     label: "Laramie County Community College",
//     value: "Laramie County Community College"
//   },
//   { label: "Northwest College", value: "Northwest College" },
//   { label: "Sheridan College", value: "Sheridan College" },
//   {
//     label: "Western Wyoming Community College",
//     value: "Western Wyoming Community College"
//   },
//   {
//     label: "Cheeks International Academy of Beauty Culture-Cheyenne",
//     value: "Cheeks International Academy of Beauty Culture-Cheyenne"
//   },
//   { label: "Wyotech-Laramie", value: "Wyotech-Laramie" },
//   { label: "University of Wyoming", value: "University of Wyoming" },
//   {
//     label: "American Samoa Community College",
//     value: "American Samoa Community College"
//   },
//   { label: "Guam Community College", value: "Guam Community College" },
//   { label: "University of Guam", value: "University of Guam" },
//   {
//     label: "Northern Marianas College",
//     value: "Northern Marianas College"
//   },
//   {
//     label: "Institute of Beauty Careers",
//     value: "Institute of Beauty Careers"
//   },
//   {
//     label: "Educational Technical College-Recinto de Bayamon",
//     value: "Educational Technical College-Recinto de Bayamon"
//   },
//   {
//     label: "American University of Puerto Rico",
//     value: "American University of Puerto Rico"
//   },
//   {
//     label: "American University of Puerto Rico",
//     value: "American University of Puerto Rico"
//   },
//   {
//     label: "American Educational College",
//     value: "American Educational College"
//   },
//   {
//     label: "Antilles School of Technical Careers",
//     value: "Antilles School of Technical Careers"
//   },
//   {
//     label: "Universidad Adventista de las Antillas",
//     value: "Universidad Adventista de las Antillas"
//   },
//   {
//     label: "Atlantic University College",
//     value: "Atlantic University College"
//   },
//   {
//     label: "Bayamon Central University",
//     value: "Bayamon Central University"
//   },
//   {
//     label: "Columbia Centro Universitario-Caguas",
//     value: "Columbia Centro Universitario-Caguas"
//   },
//   {
//     label: "Carlos Albizu University-San Juan",
//     value: "Carlos Albizu University-San Juan"
//   },
//   {
//     label: "Caribbean University-Bayamon",
//     value: "Caribbean University-Bayamon"
//   },
//   {
//     label: "Caribbean University-Carolina",
//     value: "Caribbean University-Carolina"
//   },
//   {
//     label: "Pontifical Catholic University of Puerto Rico-Arecibo",
//     value: "Pontifical Catholic University of Puerto Rico-Arecibo"
//   },
//   {
//     label: "Pontifical Catholic University of Puerto Rico-Ponce",
//     value: "Pontifical Catholic University of Puerto Rico-Ponce"
//   },
//   {
//     label: "Centro de Estudios Multidisciplinarios-San Juan",
//     value: "Centro de Estudios Multidisciplinarios-San Juan"
//   },
//   {
//     label: "Universidad Teologica del Caribe",
//     value: "Universidad Teologica del Caribe"
//   },
//   {
//     label: "Colegio Universitario de San Juan",
//     value: "Colegio Universitario de San Juan"
//   },
//   {
//     label: "Universidad Metropolitana",
//     value: "Universidad Metropolitana"
//   },
//   {
//     label: "Puerto Rico Conservatory of Music",
//     value: "Puerto Rico Conservatory of Music"
//   },
//   {
//     label: "Center for Advanced Studies On Puerto Rico and the Caribbean",
//     value: "Center for Advanced Studies On Puerto Rico and the Caribbean"
//   },
//   {
//     label: "EDP University of Puerto Rico Inc-San Sebastian",
//     value: "EDP University of Puerto Rico Inc-San Sebastian"
//   },
//   {
//     label: "Emma's Beauty Academy-Mayaguez",
//     value: "Emma's Beauty Academy-Mayaguez"
//   },
//   {
//     label: "Escuela de Artes Plasticas de Puerto Rico",
//     value: "Escuela de Artes Plasticas de Puerto Rico"
//   },
//   {
//     label: "Instituto Tecnologico de Puerto Rico-Recinto de Manati",
//     value: "Instituto Tecnologico de Puerto Rico-Recinto de Manati"
//   },
//   {
//     label: "Sistema Universitario Ana G Mendez",
//     value: "Sistema Universitario Ana G Mendez"
//   },
//   { label: "Huertas College", value: "Huertas College" },
//   {
//     label: "Humacao Community College",
//     value: "Humacao Community College"
//   },
//   {
//     label: "ICPR Junior College-Arecibo",
//     value: "ICPR Junior College-Arecibo"
//   },
//   {
//     label: "ICPR Junior College-Mayaguez",
//     value: "ICPR Junior College-Mayaguez"
//   },
//   {
//     label: "Instituto de Educacion Tecnica Ocupacional La Reine-Manati",
//     value: "Instituto de Educacion Tecnica Ocupacional La Reine-Manati"
//   },
//   {
//     label: "Hispanic American College",
//     value: "Hispanic American College"
//   },
//   {
//     label: "Instituto de Banca y Comercio Inc",
//     value: "Instituto de Banca y Comercio Inc"
//   },
//   {
//     label: "Instituto Tecnologico de Puerto Rico-Recinto de Guayama",
//     value: "Instituto Tecnologico de Puerto Rico-Recinto de Guayama"
//   },
//   {
//     label: "Instituto Tecnologico de Puerto Rico-Recinto de Ponce",
//     value: "Instituto Tecnologico de Puerto Rico-Recinto de Ponce"
//   },
//   {
//     label: "Instituto Tecnologico de Puerto Rico-Recinto de San Juan",
//     value: "Instituto Tecnologico de Puerto Rico-Recinto de San Juan"
//   },
//   {
//     label: "Inter American University of Puerto Rico-San German",
//     value: "Inter American University of Puerto Rico-San German"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Aguadilla",
//     value: "Inter American University of Puerto Rico-Aguadilla"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Arecibo",
//     value: "Inter American University of Puerto Rico-Arecibo"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Barranquitas",
//     value: "Inter American University of Puerto Rico-Barranquitas"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Metro",
//     value: "Inter American University of Puerto Rico-Metro"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Ponce",
//     value: "Inter American University of Puerto Rico-Ponce"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Central Office",
//     value: "Inter American University of Puerto Rico-Central Office"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Fajardo",
//     value: "Inter American University of Puerto Rico-Fajardo"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Guayama",
//     value: "Inter American University of Puerto Rico-Guayama"
//   },
//   {
//     label: "Inter American University of Puerto Rico-Bayamon",
//     value: "Inter American University of Puerto Rico-Bayamon"
//   },
//   {
//     label: "Inter American University of Puerto Rico-School of Law",
//     value: "Inter American University of Puerto Rico-School of Law"
//   },
//   {
//     label: "International Technical College",
//     value: "International Technical College"
//   },
//   {
//     label: "Liceo de Arte y Tecnologia",
//     value: "Liceo de Arte y Tecnologia"
//   },
//   {
//     label: "MBTI Business Training Institute",
//     value: "MBTI Business Training Institute"
//   },
//   {
//     label: "Modern Hairstyling Institute-Bayamon",
//     value: "Modern Hairstyling Institute-Bayamon"
//   },
//   {
//     label: "Modern Hairstyling Institute-Arecibo",
//     value: "Modern Hairstyling Institute-Arecibo"
//   },
//   {
//     label: "National University College-Bayamon",
//     value: "National University College-Bayamon"
//   },
//   {
//     label: "National University College-Arecibo",
//     value: "National University College-Arecibo"
//   },
//   {
//     label: "Ponce Paramedical College Inc",
//     value: "Ponce Paramedical College Inc"
//   },
//   {
//     label: "Ponce School of Medicine and Health Sciences",
//     value: "Ponce School of Medicine and Health Sciences"
//   },
//   {
//     label: "University of Puerto Rico-Aguadilla",
//     value: "University of Puerto Rico-Aguadilla"
//   },
//   {
//     label: "University of Puerto Rico-Arecibo",
//     value: "University of Puerto Rico-Arecibo"
//   },
//   {
//     label: "University of Puerto Rico-Bayamon",
//     value: "University of Puerto Rico-Bayamon"
//   },
//   {
//     label: "University of Puerto Rico-Carolina",
//     value: "University of Puerto Rico-Carolina"
//   },
//   {
//     label: "University of Puerto Rico-Cayey",
//     value: "University of Puerto Rico-Cayey"
//   },
//   {
//     label: "University of Puerto Rico-Central Administration",
//     value: "University of Puerto Rico-Central Administration"
//   },
//   {
//     label: "University of Puerto Rico-Humacao",
//     value: "University of Puerto Rico-Humacao"
//   },
//   {
//     label: "University of Puerto Rico-Utuado",
//     value: "University of Puerto Rico-Utuado"
//   },
//   {
//     label: "University of Puerto Rico-Mayaguez",
//     value: "University of Puerto Rico-Mayaguez"
//   },
//   {
//     label: "University of Puerto Rico-Medical Sciences",
//     value: "University of Puerto Rico-Medical Sciences"
//   },
//   {
//     label: "University of Puerto Rico-Ponce",
//     value: "University of Puerto Rico-Ponce"
//   },
//   {
//     label: "University of Puerto Rico-Rio Piedras",
//     value: "University of Puerto Rico-Rio Piedras"
//   },
//   { label: "Universidad Del Este", value: "Universidad Del Este" },
//   {
//     label: "Ryder Memorial School for Practical Nursing",
//     value: "Ryder Memorial School for Practical Nursing"
//   },
//   {
//     label: "Rogies School of Beauty Culture",
//     value: "Rogies School of Beauty Culture"
//   },
//   {
//     label: "Universidad del Sagrado Corazon",
//     value: "Universidad del Sagrado Corazon"
//   },
//   {
//     label: "Seminario Evangelico de Puerto Rico",
//     value: "Seminario Evangelico de Puerto Rico"
//   },
//   {
//     label: "Universidad Central Del Caribe",
//     value: "Universidad Central Del Caribe"
//   },
//   {
//     label: "Universidad Politecnica de Puerto Rico",
//     value: "Universidad Politecnica de Puerto Rico"
//   },
//   {
//     label: "Pontifical Catholic University of Puerto Rico-Mayaguez",
//     value: "Pontifical Catholic University of Puerto Rico-Mayaguez"
//   },
//   { label: "Universidad Del Turabo", value: "Universidad Del Turabo" },
//   {
//     label: "College of Micronesia-FSM",
//     value: "College of Micronesia-FSM"
//   },
//   { label: "Palau Community College", value: "Palau Community College" },
//   {
//     label: "University of the Virgin Islands",
//     value: "University of the Virgin Islands"
//   },
//   { label: "Stanford University", value: "Stanford University" },
//   {
//     label: "Purdue University-Main Campus",
//     value: "Purdue University-Main Campus"
//   },
//   {
//     label: "Blue Hills Regional Technical School",
//     value: "Blue Hills Regional Technical School"
//   },
//   { label: "Parker University", value: "Parker University" },
//   {
//     label: "EDP Univeristy of Puerto Rico Inc-San Juan",
//     value: "EDP Univeristy of Puerto Rico Inc-San Juan"
//   },
//   {
//     label: "ICPR Junior College-General Institutional",
//     value: "ICPR Junior College-General Institutional"
//   },
//   {
//     label: "ITT Technical Institute-Sylmar",
//     value: "ITT Technical Institute-Sylmar"
//   },
//   {
//     label: "ITT Technical Institute-Westminster",
//     value: "ITT Technical Institute-Westminster"
//   },
//   {
//     label: "Widener University-Delaware Campus",
//     value: "Widener University-Delaware Campus"
//   },
//   {
//     label: "City College-Fort Lauderdale",
//     value: "City College-Fort Lauderdale"
//   },
//   { label: "Meridian College", value: "Meridian College" },
//   {
//     label: "Georgia Perimeter College",
//     value: "Georgia Perimeter College"
//   },
//   {
//     label: "Georgia Piedmont Technical College",
//     value: "Georgia Piedmont Technical College"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Coeur D Alene",
//     value: "Toni & Guy Hairdressing Academy-Coeur D Alene"
//   },
//   {
//     label: "Cortiva Institute-Chicago",
//     value: "Cortiva Institute-Chicago"
//   },
//   {
//     label: "ETI School of Skilled Trades",
//     value: "ETI School of Skilled Trades"
//   },
//   {
//     label: "Lincoln College of Technology-Florence",
//     value: "Lincoln College of Technology-Florence"
//   },
//   {
//     label: "Trend Setters' Academy of Beauty Culture-Elizabethtown",
//     value: "Trend Setters' Academy of Beauty Culture-Elizabethtown"
//   },
//   { label: "Traxlers School of Hair", value: "Traxlers School of Hair" },
//   { label: "Infinity Career College", value: "Infinity Career College" },
//   {
//     label: "Vatterott College-Berkeley",
//     value: "Vatterott College-Berkeley"
//   },
//   {
//     label: "Metro Business College-Rolla",
//     value: "Metro Business College-Rolla"
//   },
//   {
//     label: "Metro Business College-Jefferson City",
//     value: "Metro Business College-Jefferson City"
//   },
//   {
//     label: "Warren County Community College",
//     value: "Warren County Community College"
//   },
//   { label: "St John's College", value: "St John's College" },
//   {
//     label: "Yeshiva and Kollel Harbotzas Torah",
//     value: "Yeshiva and Kollel Harbotzas Torah"
//   },
//   { label: "Bais Medrash Elyon", value: "Bais Medrash Elyon" },
//   {
//     label: "Antioch University-Los Angeles",
//     value: "Antioch University-Los Angeles"
//   },
//   {
//     label: "Antioch University-Santa Barbara",
//     value: "Antioch University-Santa Barbara"
//   },
//   {
//     label: "Antioch University-New England",
//     value: "Antioch University-New England"
//   },
//   {
//     label: "Antioch University-Seattle",
//     value: "Antioch University-Seattle"
//   },
//   {
//     label: "Antioch University-Midwest",
//     value: "Antioch University-Midwest"
//   },
//   {
//     label: "Mid-America Christian University",
//     value: "Mid-America Christian University"
//   },
//   { label: "Platt College-Tulsa", value: "Platt College-Tulsa" },
//   {
//     label: "Ponca City Beauty College",
//     value: "Ponca City Beauty College"
//   },
//   {
//     label: "Francis Tuttle Technology Center",
//     value: "Francis Tuttle Technology Center"
//   },
//   { label: "Career Point College", value: "Career Point College" },
//   {
//     label: "Central Technology Center",
//     value: "Central Technology Center"
//   },
//   {
//     label: "Carrington College-Portland",
//     value: "Carrington College-Portland"
//   },
//   {
//     label: "Career Technology Center of Lackawanna County",
//     value: "Career Technology Center of Lackawanna County"
//   },
//   {
//     label: "Kaplan Career Institute-Nashville",
//     value: "Kaplan Career Institute-Nashville"
//   },
//   { label: "Kaplan College-El Paso", value: "Kaplan College-El Paso" },
//   {
//     label: "Houston Graduate School of Theology",
//     value: "Houston Graduate School of Theology"
//   },
//   { label: "Palo Alto College", value: "Palo Alto College" },
//   {
//     label: "Sebring Career Schools-Huntsville",
//     value: "Sebring Career Schools-Huntsville"
//   },
//   {
//     label: "University of Cosmetology Arts & Sciences-San Antonio Perrin",
//     value: "University of Cosmetology Arts & Sciences-San Antonio Perrin"
//   },
//   {
//     label: "Central Texas Beauty College-Round Rock",
//     value: "Central Texas Beauty College-Round Rock"
//   },
//   {
//     label: "Empire Beauty School-Manitowoc",
//     value: "Empire Beauty School-Manitowoc"
//   },
//   {
//     label: "Unification Theological Seminary",
//     value: "Unification Theological Seminary"
//   },
//   { label: "Athens Technical College", value: "Athens Technical College" },
//   { label: "Maricopa Skill Center", value: "Maricopa Skill Center" },
//   {
//     label: "Carrington College California-San Leandro",
//     value: "Carrington College California-San Leandro"
//   },
//   {
//     label: "Headmasters School of Hair Design",
//     value: "Headmasters School of Hair Design"
//   },
//   {
//     label: "Razzle Dazzle College of Hair Design Inc",
//     value: "Razzle Dazzle College of Hair Design Inc"
//   },
//   {
//     label: "Beckfield College-Florence",
//     value: "Beckfield College-Florence"
//   },
//   {
//     label: "University of Louisiana-System Administration",
//     value: "University of Louisiana-System Administration"
//   },
//   {
//     label: "Dorsey Business Schools-Wayne",
//     value: "Dorsey Business Schools-Wayne"
//   },
//   {
//     label: "Ecumenical Theological Seminary",
//     value: "Ecumenical Theological Seminary"
//   },
//   {
//     label: "Ross Medical Education Center-Saginaw",
//     value: "Ross Medical Education Center-Saginaw"
//   },
//   {
//     label: "Sussex County Community College",
//     value: "Sussex County Community College"
//   },
//   { label: "Landmark College", value: "Landmark College" },
//   {
//     label: "National American University-Independence",
//     value: "National American University-Independence"
//   },
//   {
//     label: "Mississippi Community College Board",
//     value: "Mississippi Community College Board"
//   },
//   {
//     label: "Yeshiva Gedolah of Greater Detroit",
//     value: "Yeshiva Gedolah of Greater Detroit"
//   },
//   {
//     label: "Austin Graduate School of Theology",
//     value: "Austin Graduate School of Theology"
//   },
//   {
//     label: "Collin County Community College District",
//     value: "Collin County Community College District"
//   },
//   {
//     label: "Owensboro Community and Technical College",
//     value: "Owensboro Community and Technical College"
//   },
//   {
//     label: "Heads West Kentucky Beauty College",
//     value: "Heads West Kentucky Beauty College"
//   },
//   {
//     label: "Jenny Lea Academy of Cosmetology",
//     value: "Jenny Lea Academy of Cosmetology"
//   },
//   {
//     label: "Empire Beauty School-Hurstborne",
//     value: "Empire Beauty School-Hurstborne"
//   },
//   {
//     label: "Southeast School of Cosmetology",
//     value: "Southeast School of Cosmetology"
//   },
//   {
//     label: "Cloyd's Beauty School 3 Inc",
//     value: "Cloyd's Beauty School 3 Inc"
//   },
//   {
//     label: "Moore Norman Technology Center",
//     value: "Moore Norman Technology Center"
//   },
//   {
//     label: "Fayette County Career & Technical Institute Practical Nursing Program",
//     value: "Fayette County Career & Technical Institute Practical Nursing Program"
//   },
//   {
//     label: "Franklin County Career and Technology Center",
//     value: "Franklin County Career and Technology Center"
//   },
//   {
//     label: "Paul Mitchell the School-Knoxville",
//     value: "Paul Mitchell the School-Knoxville"
//   },
//   {
//     label: "Ogle School Hair Skin Nails-Hurst",
//     value: "Ogle School Hair Skin Nails-Hurst"
//   },
//   {
//     label: "Okefenokee Technical College",
//     value: "Okefenokee Technical College"
//   },
//   {
//     label: "Fashion Institute of Design & Merchandising-San Diego",
//     value: "Fashion Institute of Design & Merchandising-San Diego"
//   },
//   {
//     label: "National American University-Albuquerque",
//     value: "National American University-Albuquerque"
//   },
//   {
//     label: "Tennessee College of Applied Technology-Nashville",
//     value: "Tennessee College of Applied Technology-Nashville"
//   },
//   { label: "ECPI University", value: "ECPI University" },
//   {
//     label: "Ms Robert's Academy of Beauty Culture-Villa Park",
//     value: "Ms Robert's Academy of Beauty Culture-Villa Park"
//   },
//   {
//     label: "Anthem Institute-Jersey City",
//     value: "Anthem Institute-Jersey City"
//   },
//   {
//     label: "Paul Mitchell the School-Houston",
//     value: "Paul Mitchell the School-Houston"
//   },
//   {
//     label: "ATI Career Training Center-Dallas",
//     value: "ATI Career Training Center-Dallas"
//   },
//   { label: "TDDS Technical Institute", value: "TDDS Technical Institute" },
//   {
//     label: "Fortis Institute-Forty Fort",
//     value: "Fortis Institute-Forty Fort"
//   },
//   {
//     label: "Laurel Business Institute",
//     value: "Laurel Business Institute"
//   },
//   {
//     label: "Antonelli Medical and Professional Institute",
//     value: "Antonelli Medical and Professional Institute"
//   },
//   {
//     label: "Aviation Institute of Maintenance-Philadelphia",
//     value: "Aviation Institute of Maintenance-Philadelphia"
//   },
//   {
//     label: "Sanford-Brown Institute-Trevose",
//     value: "Sanford-Brown Institute-Trevose"
//   },
//   {
//     label: "Fortis Institute-Mulberry",
//     value: "Fortis Institute-Mulberry"
//   },
//   {
//     label: "Carrington College-Phoenix Westside",
//     value: "Carrington College-Phoenix Westside"
//   },
//   {
//     label: "Dorsey Business Schools-Roseville",
//     value: "Dorsey Business Schools-Roseville"
//   },
//   {
//     label: "The Salon Professional Academy-Williston",
//     value: "The Salon Professional Academy-Williston"
//   },
//   {
//     label: "Moler-Pickens Beauty Academy",
//     value: "Moler-Pickens Beauty Academy"
//   },
//   {
//     label: "Red River Technology Center",
//     value: "Red River Technology Center"
//   },
//   {
//     label: "Kaplan Career Institute-Harrisburg",
//     value: "Kaplan Career Institute-Harrisburg"
//   },
//   {
//     label: "ITT Technical Institute-Newburgh",
//     value: "ITT Technical Institute-Newburgh"
//   },
//   {
//     label: "Southern Union State Community College",
//     value: "Southern Union State Community College"
//   },
//   {
//     label: "South University-Columbia",
//     value: "South University-Columbia"
//   },
//   {
//     label: "Everest University-Brandon",
//     value: "Everest University-Brandon"
//   },
//   { label: "Clinton Technical School", value: "Clinton Technical School" },
//   {
//     label: "Consolidated School of Business-Lancaster",
//     value: "Consolidated School of Business-Lancaster"
//   },
//   {
//     label: "Greene County Career and Technology Center",
//     value: "Greene County Career and Technology Center"
//   },
//   {
//     label: "Lac Courte Oreilles Ojibwa Community College",
//     value: "Lac Courte Oreilles Ojibwa Community College"
//   },
//   {
//     label: "University of Wisconsin Extension",
//     value: "University of Wisconsin Extension"
//   },
//   {
//     label: "Diesel Driving Academy-Shreveport",
//     value: "Diesel Driving Academy-Shreveport"
//   },
//   {
//     label: "Pima Medical Institute-Mesa",
//     value: "Pima Medical Institute-Mesa"
//   },
//   {
//     label: "Platt College-Los Angeles",
//     value: "Platt College-Los Angeles"
//   },
//   { label: "Platt College-Aurora", value: "Platt College-Aurora" },
//   {
//     label: "Kaplan University-Davenport Campus",
//     value: "Kaplan University-Davenport Campus"
//   },
//   {
//     label: "Kaplan University-Cedar Falls Campus",
//     value: "Kaplan University-Cedar Falls Campus"
//   },
//   {
//     label: "Paul Mitchell the School-Boise",
//     value: "Paul Mitchell the School-Boise"
//   },
//   { label: "Christian Life College", value: "Christian Life College" },
//   {
//     label: "Knowledge Systems Institute",
//     value: "Knowledge Systems Institute"
//   },
//   {
//     label: "Educators of Beauty College of Cosmetology-Rockford",
//     value: "Educators of Beauty College of Cosmetology-Rockford"
//   },
//   {
//     label: "ITT Technical Institute-Arlington Heights",
//     value: "ITT Technical Institute-Arlington Heights"
//   },
//   {
//     label: "Northwestern College-Southwestern Campus",
//     value: "Northwestern College-Southwestern Campus"
//   },
//   {
//     label: "Tulsa Technology Center-Lemley Campus",
//     value: "Tulsa Technology Center-Lemley Campus"
//   },
//   {
//     label: "Tulsa Technology Center-Riverside Campus",
//     value: "Tulsa Technology Center-Riverside Campus"
//   },
//   {
//     label: "Tulsa Technology Center-Broken Arrow Campus",
//     value: "Tulsa Technology Center-Broken Arrow Campus"
//   },
//   {
//     label: "Douglas J Aveda Institute",
//     value: "Douglas J Aveda Institute"
//   },
//   {
//     label: "ITT Technical Institute-Troy",
//     value: "ITT Technical Institute-Troy"
//   },
//   {
//     label: "Ross Medical Education Center-Brighton",
//     value: "Ross Medical Education Center-Brighton"
//   },
//   {
//     label: "Ross Medical Education Center-Ann Arbor",
//     value: "Ross Medical Education Center-Ann Arbor"
//   },
//   {
//     label: "Taylortown School of Beauty Inc",
//     value: "Taylortown School of Beauty Inc"
//   },
//   {
//     label: "Pike-Lincoln Technical Center",
//     value: "Pike-Lincoln Technical Center"
//   },
//   {
//     label: "Pennsylvania Institute of Health and Technology",
//     value: "Pennsylvania Institute of Health and Technology"
//   },
//   { label: "Skyline College-Roanoke", value: "Skyline College-Roanoke" },
//   {
//     label: "Bethel Seminary-San Diego",
//     value: "Bethel Seminary-San Diego"
//   },
//   {
//     label: "St Charles Community College",
//     value: "St Charles Community College"
//   },
//   { label: "Brandman University", value: "Brandman University" },
//   { label: "New College of Florida", value: "New College of Florida" },
//   { label: "Montana Bible College", value: "Montana Bible College" },
//   {
//     label: "Arizona Academy of Beauty-North",
//     value: "Arizona Academy of Beauty-North"
//   },
//   {
//     label: "Empire Beauty School-Prescott",
//     value: "Empire Beauty School-Prescott"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Scottsdale",
//     value: "Le Cordon Bleu College of Culinary Arts-Scottsdale"
//   },
//   {
//     label: "Conservatory of Recording Arts and Sciences",
//     value: "Conservatory of Recording Arts and Sciences"
//   },
//   {
//     label: "Adrian's College of Beauty Turlock",
//     value: "Adrian's College of Beauty Turlock"
//   },
//   { label: "California Career School", value: "California Career School" },
//   {
//     label: "San Joaquin Valley College-Fresno",
//     value: "San Joaquin Valley College-Fresno"
//   },
//   {
//     label: "Rolf Institute of Structural Integration",
//     value: "Rolf Institute of Structural Integration"
//   },
//   { label: "Heritage College-Denver", value: "Heritage College-Denver" },
//   {
//     label: "Empire Beauty School-Highland",
//     value: "Empire Beauty School-Highland"
//   },
//   { label: "Sunstate Academy", value: "Sunstate Academy" },
//   {
//     label: "Elizabeth Grady School of Esthetics and Massage Therapy",
//     value: "Elizabeth Grady School of Esthetics and Massage Therapy"
//   },
//   {
//     label: "Ross Medical Education Center-Port Huron",
//     value: "Ross Medical Education Center-Port Huron"
//   },
//   {
//     label: "Capri Institute of Hair Design-Clifton",
//     value: "Capri Institute of Hair Design-Clifton"
//   },
//   {
//     label: "Raphael's School of Beauty Culture Inc-Alliance",
//     value: "Raphael's School of Beauty Culture Inc-Alliance"
//   },
//   { label: "Metro Technology Centers", value: "Metro Technology Centers" },
//   { label: "Heald College-Roseville", value: "Heald College-Roseville" },
//   {
//     label: "Daymar College-Bowling Green",
//     value: "Daymar College-Bowling Green"
//   },
//   { label: "Everest College-Everett", value: "Everest College-Everett" },
//   { label: "Luna Community College", value: "Luna Community College" },
//   {
//     label: "Grabber School of Hair Design",
//     value: "Grabber School of Hair Design"
//   },
//   {
//     label: "Yeshivah Gedolah Rabbinical College",
//     value: "Yeshivah Gedolah Rabbinical College"
//   },
//   {
//     label: "University of the District of Columbia-David A Clarke School of Law",
//     value: "University of the District of Columbia-David A Clarke School of Law"
//   },
//   {
//     label: "Raphael's School of Beauty Culture Inc-Brunswick",
//     value: "Raphael's School of Beauty Culture Inc-Brunswick"
//   },
//   {
//     label: "Caribbean University-Ponce",
//     value: "Caribbean University-Ponce"
//   },
//   {
//     label: "Caribbean University-Vega Baja",
//     value: "Caribbean University-Vega Baja"
//   },
//   {
//     label: "University of Advancing Technology",
//     value: "University of Advancing Technology"
//   },
//   {
//     label: "Paradise Valley Community College",
//     value: "Paradise Valley Community College"
//   },
//   {
//     label: "Chandler-Gilbert Community College",
//     value: "Chandler-Gilbert Community College"
//   },
//   {
//     label: "St John's Hospital School of Clinical Lab Science",
//     value: "St John's Hospital School of Clinical Lab Science"
//   },
//   { label: "Madison Media Institute", value: "Madison Media Institute" },
//   {
//     label: "Sanford-Brown Institute-Landover",
//     value: "Sanford-Brown Institute-Landover"
//   },
//   {
//     label: "Sanford-Brown Institute-White Plains",
//     value: "Sanford-Brown Institute-White Plains"
//   },
//   {
//     label: "Sanford-Brown Institute-Garden City",
//     value: "Sanford-Brown Institute-Garden City"
//   },
//   {
//     label: "Great Plains Technology Center",
//     value: "Great Plains Technology Center"
//   },
//   {
//     label: "Montebello Beauty College",
//     value: "Montebello Beauty College"
//   },
//   {
//     label: "Roane-Jackson Technical Center",
//     value: "Roane-Jackson Technical Center"
//   },
//   {
//     label: "Total Cosmetology Training Center",
//     value: "Total Cosmetology Training Center"
//   },
//   { label: "Iverson Business School", value: "Iverson Business School" },
//   {
//     label: "Lawrence County Career and Technical Center-Practical Nursing Program",
//     value: "Lawrence County Career and Technical Center-Practical Nursing Program"
//   },
//   {
//     label: "Pioneer Technology Center",
//     value: "Pioneer Technology Center"
//   },
//   {
//     label: "Portage Lakes Career Center",
//     value: "Portage Lakes Career Center"
//   },
//   {
//     label: "Eastern College of Health Vocations-New Orleans",
//     value: "Eastern College of Health Vocations-New Orleans"
//   },
//   { label: "Bell Mar Beauty College", value: "Bell Mar Beauty College" },
//   {
//     label: "Cannella School of Hair Design-Chicago",
//     value: "Cannella School of Hair Design-Chicago"
//   },
//   {
//     label: "Caddo Kiowa Technology Center",
//     value: "Caddo Kiowa Technology Center"
//   },
//   {
//     label: "Kaplan College-San Antonio-San Pedro",
//     value: "Kaplan College-San Antonio-San Pedro"
//   },
//   { label: "Oswego County BOCES", value: "Oswego County BOCES" },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Austin",
//     value: "Le Cordon Bleu College of Culinary Arts-Austin"
//   },
//   {
//     label: "The Art Institute of New York City",
//     value: "The Art Institute of New York City"
//   },
//   {
//     label: "Paris II Educational Center",
//     value: "Paris II Educational Center"
//   },
//   {
//     label: "International School of Skin Nailcare & Massage Therapy",
//     value: "International School of Skin Nailcare & Massage Therapy"
//   },
//   {
//     label: "Palomar Institute of Cosmetology",
//     value: "Palomar Institute of Cosmetology"
//   },
//   {
//     label: "Southern Oklahoma Technology Center",
//     value: "Southern Oklahoma Technology Center"
//   },
//   { label: "Vista College", value: "Vista College" },
//   { label: "Autry Technology Center", value: "Autry Technology Center" },
//   {
//     label: "Greene County Vocational School District",
//     value: "Greene County Vocational School District"
//   },
//   {
//     label: "Canadian Valley Technology Center",
//     value: "Canadian Valley Technology Center"
//   },
//   {
//     label: "Wilkes-Barre Area Career and Technical Center Practical Nursing",
//     value: "Wilkes-Barre Area Career and Technical Center Practical Nursing"
//   },
//   { label: "Mayo Graduate School", value: "Mayo Graduate School" },
//   {
//     label: "American Beauty Institute",
//     value: "American Beauty Institute"
//   },
//   {
//     label: "Meridian Technology Center",
//     value: "Meridian Technology Center"
//   },
//   {
//     label: "Waynesville Career Center",
//     value: "Waynesville Career Center"
//   },
//   {
//     label: "Connecticut Institute of Hair Design",
//     value: "Connecticut Institute of Hair Design"
//   },
//   {
//     label: "Capitol School of Hairstyling and Esthetics",
//     value: "Capitol School of Hairstyling and Esthetics"
//   },
//   {
//     label: "Morris County Vocational School District",
//     value: "Morris County Vocational School District"
//   },
//   {
//     label: "Ross Medical Education Center-Roosevelt Park",
//     value: "Ross Medical Education Center-Roosevelt Park"
//   },
//   {
//     label: "Ross Medical Education Center-Kentwood",
//     value: "Ross Medical Education Center-Kentwood"
//   },
//   {
//     label: "South Florida Bible College and Theological Seminary",
//     value: "South Florida Bible College and Theological Seminary"
//   },
//   {
//     label: "Cloyd's Barber School 2 Inc",
//     value: "Cloyd's Barber School 2 Inc"
//   },
//   {
//     label: "Universal Technical Institute of Illinois Inc",
//     value: "Universal Technical Institute of Illinois Inc"
//   },
//   {
//     label: "Pennsylvania College of Technology",
//     value: "Pennsylvania College of Technology"
//   },
//   {
//     label: "Commonwealth Institute of Funeral Service",
//     value: "Commonwealth Institute of Funeral Service"
//   },
//   {
//     label: "Delta College of Arts & Technology",
//     value: "Delta College of Arts & Technology"
//   },
//   {
//     label: "InterCoast Colleges-Orange",
//     value: "InterCoast Colleges-Orange"
//   },
//   { label: "Stone Child College", value: "Stone Child College" },
//   { label: "New York Academy of Art", value: "New York Academy of Art" },
//   {
//     label: "Suffolk County Community College",
//     value: "Suffolk County Community College"
//   },
//   { label: "Las Positas College", value: "Las Positas College" },
//   {
//     label: "Blades School of Hair Design",
//     value: "Blades School of Hair Design"
//   },
//   {
//     label: "Altamaha Technical College",
//     value: "Altamaha Technical College"
//   },
//   {
//     label: "Ogeechee Technical College",
//     value: "Ogeechee Technical College"
//   },
//   {
//     label: "Remington College-Mobile Campus",
//     value: "Remington College-Mobile Campus"
//   },
//   { label: "Everest College-Aurora", value: "Everest College-Aurora" },
//   {
//     label: "Southwest Florida College",
//     value: "Southwest Florida College"
//   },
//   {
//     label: "Mercy-St Luke's School of Radiologic Technology",
//     value: "Mercy-St Luke's School of Radiologic Technology"
//   },
//   {
//     label: "ITT Technical Institute-Norwood",
//     value: "ITT Technical Institute-Norwood"
//   },
//   {
//     label: "Southwest Acupuncture College-Santa Fe",
//     value: "Southwest Acupuncture College-Santa Fe"
//   },
//   {
//     label: "Northwest Technology Center-Alva",
//     value: "Northwest Technology Center-Alva"
//   },
//   {
//     label: "Mercer County Career Center",
//     value: "Mercer County Career Center"
//   },
//   {
//     label: "ITT Technical Institute-Knoxville",
//     value: "ITT Technical Institute-Knoxville"
//   },
//   {
//     label: "ITT Technical Institute-Austin",
//     value: "ITT Technical Institute-Austin"
//   },
//   {
//     label: "ITT Technical Institute-Houston North",
//     value: "ITT Technical Institute-Houston North"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Arizona",
//     value: "DeVry University's Keller Graduate School of Management-Arizona"
//   },
//   {
//     label: "California State University-San Marcos",
//     value: "California State University-San Marcos"
//   },
//   { label: "Argosy University-Hawaii", value: "Argosy University-Hawaii" },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Missouri",
//     value: "DeVry University's Keller Graduate School of Management-Missouri"
//   },
//   {
//     label: "Baptist Theological Seminary at Richmond",
//     value: "Baptist Theological Seminary at Richmond"
//   },
//   { label: "Kaplan College-Modesto", value: "Kaplan College-Modesto" },
//   {
//     label: "Kaplan University-Des Moines Campus",
//     value: "Kaplan University-Des Moines Campus"
//   },
//   {
//     label: "Hairmasters Institute of Cosmetology",
//     value: "Hairmasters Institute of Cosmetology"
//   },
//   { label: "Hair Arts Academy", value: "Hair Arts Academy" },
//   {
//     label: "Pinnacle Career Institute-Lawrence",
//     value: "Pinnacle Career Institute-Lawrence"
//   },
//   {
//     label: "Interactive College of Technology-Newport",
//     value: "Interactive College of Technology-Newport"
//   },
//   {
//     label: "Career Technical College-Monroe",
//     value: "Career Technical College-Monroe"
//   },
//   {
//     label: "Empire Beauty School-Lowell",
//     value: "Empire Beauty School-Lowell"
//   },
//   {
//     label: "Ross Medical Education Center-Taylor",
//     value: "Ross Medical Education Center-Taylor"
//   },
//   {
//     label: "McNally Smith College of Music",
//     value: "McNally Smith College of Music"
//   },
//   { label: "Allied Health Careers", value: "Allied Health Careers" },
//   {
//     label: "National Tractor Trailer School Inc-Liverpool",
//     value: "National Tractor Trailer School Inc-Liverpool"
//   },
//   {
//     label: "Interactive Learning Systems-Houston",
//     value: "Interactive Learning Systems-Houston"
//   },
//   {
//     label: "Star Career Academy�Brick",
//     value: "Star Career Academy�Brick"
//   },
//   {
//     label: "New Castle Beauty Academy",
//     value: "New Castle Beauty Academy"
//   },
//   {
//     label: "NorthWest Arkansas Community College",
//     value: "NorthWest Arkansas Community College"
//   },
//   { label: "Madera Beauty College", value: "Madera Beauty College" },
//   {
//     label: "Colorado Heights University",
//     value: "Colorado Heights University"
//   },
//   {
//     label: "Brewster Technical Center",
//     value: "Brewster Technical Center"
//   },
//   { label: "Hodges University", value: "Hodges University" },
//   {
//     label: "Everest University-Lakeland",
//     value: "Everest University-Lakeland"
//   },
//   {
//     label: "Argosy University-Atlanta",
//     value: "Argosy University-Atlanta"
//   },
//   {
//     label: "University of St Augustine for Health Sciences",
//     value: "University of St Augustine for Health Sciences"
//   },
//   {
//     label: "Capital Area School of Practical Nursing",
//     value: "Capital Area School of Practical Nursing"
//   },
//   {
//     label: "Hair Professionals Career College",
//     value: "Hair Professionals Career College"
//   },
//   {
//     label: "Alexandria School of Scientific Therapeutics",
//     value: "Alexandria School of Scientific Therapeutics"
//   },
//   {
//     label: "Empire Beauty School-Bloomfield",
//     value: "Empire Beauty School-Bloomfield"
//   },
//   {
//     label: "Southwest Technology Center",
//     value: "Southwest Technology Center"
//   },
//   {
//     label: "Western Area Career and Technology Center",
//     value: "Western Area Career and Technology Center"
//   },
//   {
//     label: "Daymar Institute-Clarksville",
//     value: "Daymar Institute-Clarksville"
//   },
//   { label: "Nossi College of Art", value: "Nossi College of Art" },
//   {
//     label: "Seguin Beauty School-New Braunfels",
//     value: "Seguin Beauty School-New Braunfels"
//   },
//   {
//     label: "ITT Technical Institute-Norfolk",
//     value: "ITT Technical Institute-Norfolk"
//   },
//   {
//     label: "Pima Medical Institute-Seattle",
//     value: "Pima Medical Institute-Seattle"
//   },
//   {
//     label: "Mineral County Vocational Technical Center",
//     value: "Mineral County Vocational Technical Center"
//   },
//   {
//     label: "Hypnosis Motivation Institute",
//     value: "Hypnosis Motivation Institute"
//   },
//   {
//     label: "Los Angeles ORT College-Los Angeles Campus",
//     value: "Los Angeles ORT College-Los Angeles Campus"
//   },
//   {
//     label: "Everest College-West Los Angeles",
//     value: "Everest College-West Los Angeles"
//   },
//   {
//     label: "Thanh Le College School of Cosmetology",
//     value: "Thanh Le College School of Cosmetology"
//   },
//   {
//     label: "Southeastern Technical College",
//     value: "Southeastern Technical College"
//   },
//   {
//     label: "Massachusetts School of Law",
//     value: "Massachusetts School of Law"
//   },
//   {
//     label: "ITT Technical Institute-Albuquerque",
//     value: "ITT Technical Institute-Albuquerque"
//   },
//   {
//     label: "Community Services Division-Alliance City",
//     value: "Community Services Division-Alliance City"
//   },
//   {
//     label: "Universal Technical Institute-Auto Motorcycle & Marine Mechanics Institute Division-Orlando",
//     value: "Universal Technical Institute-Auto Motorcycle & Marine Mechanics Institute Division-Orlando"
//   },
//   {
//     label: "D G Erwin Technical Center",
//     value: "D G Erwin Technical Center"
//   },
//   {
//     label: "Rosel School of Cosmetology",
//     value: "Rosel School of Cosmetology"
//   },
//   {
//     label: "Worsham College of Mortuary Science",
//     value: "Worsham College of Mortuary Science"
//   },
//   { label: "Bryan University", value: "Bryan University" },
//   {
//     label: "Oregon College of Oriental Medicine",
//     value: "Oregon College of Oriental Medicine"
//   },
//   {
//     label: "Central Pennsylvania Institute of Science and Technology",
//     value: "Central Pennsylvania Institute of Science and Technology"
//   },
//   {
//     label: "Northwest Educational Center",
//     value: "Northwest Educational Center"
//   },
//   {
//     label: "Sebring Career Schools-Houston",
//     value: "Sebring Career Schools-Houston"
//   },
//   {
//     label: "PCI Health Training Center",
//     value: "PCI Health Training Center"
//   },
//   {
//     label: "Windham Memorial Hospital-Radiologic Technology Program",
//     value: "Windham Memorial Hospital-Radiologic Technology Program"
//   },
//   {
//     label: "Bethel Seminary of the East",
//     value: "Bethel Seminary of the East"
//   },
//   {
//     label: "Miami-Jacobs Career College-Columbus",
//     value: "Miami-Jacobs Career College-Columbus"
//   },
//   {
//     label: "Bryant & Stratton College-Eastlake",
//     value: "Bryant & Stratton College-Eastlake"
//   },
//   { label: "Hamrick School", value: "Hamrick School" },
//   {
//     label: "Alabama State College of Barber Styling",
//     value: "Alabama State College of Barber Styling"
//   },
//   { label: "Fortis College-Mobile", value: "Fortis College-Mobile" },
//   { label: "Arkansas Beauty School", value: "Arkansas Beauty School" },
//   { label: "Everest College-Ontario", value: "Everest College-Ontario" },
//   { label: "Downey Adult School", value: "Downey Adult School" },
//   { label: "Heald College-Stockton", value: "Heald College-Stockton" },
//   { label: "Heald College-Hayward", value: "Heald College-Hayward" },
//   { label: "CRU Institute", value: "CRU Institute" },
//   { label: "Modern Technology School", value: "Modern Technology School" },
//   {
//     label: "National Career Education",
//     value: "National Career Education"
//   },
//   { label: "Everest College-Anaheim", value: "Everest College-Anaheim" },
//   {
//     label: "Thuy Princess Beauty College",
//     value: "Thuy Princess Beauty College"
//   },
//   {
//     label: "North-West College-Glendale",
//     value: "North-West College-Glendale"
//   },
//   {
//     label: "Everest College-City of Industry",
//     value: "Everest College-City of Industry"
//   },
//   { label: "Fremont College", value: "Fremont College" },
//   {
//     label: "Pomona Unified School District Adult and Career Education",
//     value: "Pomona Unified School District Adult and Career Education"
//   },
//   {
//     label: "University of Phoenix-Online Campus",
//     value: "University of Phoenix-Online Campus"
//   },
//   {
//     label: "University of Phoenix-San Diego Campus",
//     value: "University of Phoenix-San Diego Campus"
//   },
//   {
//     label: "Universal College of Beauty Inc-Los Angeles 2",
//     value: "Universal College of Beauty Inc-Los Angeles 2"
//   },
//   { label: "IBMC College", value: "IBMC College" },
//   {
//     label: "Xenon International Academy-Denver",
//     value: "Xenon International Academy-Denver"
//   },
//   { label: "Academy of Cosmetology", value: "Academy of Cosmetology" },
//   {
//     label: "ITT Technical Institute-Lake Mary",
//     value: "ITT Technical Institute-Lake Mary"
//   },
//   { label: "Sunstate Academy", value: "Sunstate Academy" },
//   {
//     label: "Heritage Institute-Jacksonville",
//     value: "Heritage Institute-Jacksonville"
//   },
//   { label: "Fortis College-Smyrna", value: "Fortis College-Smyrna" },
//   {
//     label: "Remington College-Honolulu Campus",
//     value: "Remington College-Honolulu Campus"
//   },
//   {
//     label: "Vatterott College-Des Moines",
//     value: "Vatterott College-Des Moines"
//   },
//   {
//     label: "Brown Mackie College-Quad Cities",
//     value: "Brown Mackie College-Quad Cities"
//   },
//   {
//     label: "ETI School of Skilled Trades",
//     value: "ETI School of Skilled Trades"
//   },
//   {
//     label: "Pivot Point Academy-Bloomingdale",
//     value: "Pivot Point Academy-Bloomingdale"
//   },
//   {
//     label: "Xenon International Academy-Kansas City",
//     value: "Xenon International Academy-Kansas City"
//   },
//   { label: "Baton Rouge College", value: "Baton Rouge College" },
//   {
//     label: "Diesel Driving Academy-Baton Rouge",
//     value: "Diesel Driving Academy-Baton Rouge"
//   },
//   { label: "Jonesville Beauty School", value: "Jonesville Beauty School" },
//   { label: "New England Hair Academy", value: "New England Hair Academy" },
//   {
//     label: "Rob Roy Academy-Worcester",
//     value: "Rob Roy Academy-Worcester"
//   },
//   {
//     label: "Upper Cape Cod Regional Technical School",
//     value: "Upper Cape Cod Regional Technical School"
//   },
//   {
//     label: "All-State Career-Baltimore",
//     value: "All-State Career-Baltimore"
//   },
//   {
//     label: "New England School of Communications",
//     value: "New England School of Communications"
//   },
//   {
//     label: "Everest Institute-Kalamazoo",
//     value: "Everest Institute-Kalamazoo"
//   },
//   { label: "Adler Graduate School", value: "Adler Graduate School" },
//   {
//     label: "Lebanon Technology and Career Center",
//     value: "Lebanon Technology and Career Center"
//   },
//   {
//     label: "Academy of Hair Design-Jackson",
//     value: "Academy of Hair Design-Jackson"
//   },
//   {
//     label: "KC's School of Hair Design",
//     value: "KC's School of Hair Design"
//   },
//   {
//     label: "Mitchells Hairstyling Academy-Goldsboro",
//     value: "Mitchells Hairstyling Academy-Goldsboro"
//   },
//   {
//     label: "Lincoln Technical Institute-Moorestown",
//     value: "Lincoln Technical Institute-Moorestown"
//   },
//   {
//     label: "Monmouth County Vocational School District",
//     value: "Monmouth County Vocational School District"
//   },
//   { label: "Kaplan College-Las Vegas", value: "Kaplan College-Las Vegas" },
//   {
//     label: "Beauty School of Middletown",
//     value: "Beauty School of Middletown"
//   },
//   {
//     label: "Bryant & Stratton College-Southtowns",
//     value: "Bryant & Stratton College-Southtowns"
//   },
//   {
//     label: "Continental School of Beauty Culture-Olean",
//     value: "Continental School of Beauty Culture-Olean"
//   },
//   {
//     label: "National Tractor Trailer School Inc-Buffalo",
//     value: "National Tractor Trailer School Inc-Buffalo"
//   },
//   {
//     label: "Yeshiva Gedolah Imrei Yosef D'spinka",
//     value: "Yeshiva Gedolah Imrei Yosef D'spinka"
//   },
//   {
//     label: "Cleveland Institute of Dental-Medical Assistants-Mentor",
//     value: "Cleveland Institute of Dental-Medical Assistants-Mentor"
//   },
//   {
//     label: "Cleveland Institute of Dental-Medical Assistants-Lyndhurst",
//     value: "Cleveland Institute of Dental-Medical Assistants-Lyndhurst"
//   },
//   {
//     label: "Knox County Career Center",
//     value: "Knox County Career Center"
//   },
//   {
//     label: "Madison Adult Career Center",
//     value: "Madison Adult Career Center"
//   },
//   {
//     label: "Remington College-Cleveland Campus",
//     value: "Remington College-Cleveland Campus"
//   },
//   {
//     label: "Brown Mackie College-Findlay",
//     value: "Brown Mackie College-Findlay"
//   },
//   {
//     label: "Toledo Academy of Beauty Culture-East",
//     value: "Toledo Academy of Beauty Culture-East"
//   },
//   {
//     label: "U S Grant Joint Vocational School",
//     value: "U S Grant Joint Vocational School"
//   },
//   { label: "CC's Cosmetology College", value: "CC's Cosmetology College" },
//   {
//     label: "Chisholm Trail Technology Center",
//     value: "Chisholm Trail Technology Center"
//   },
//   {
//     label: "Gordon Cooper Technology Center",
//     value: "Gordon Cooper Technology Center"
//   },
//   {
//     label: "Kiamichi Technology Center-Atoka",
//     value: "Kiamichi Technology Center-Atoka"
//   },
//   {
//     label: "Kiamichi Technology Center-Durant",
//     value: "Kiamichi Technology Center-Durant"
//   },
//   {
//     label: "Kiamichi Technology Center-Hugo",
//     value: "Kiamichi Technology Center-Hugo"
//   },
//   {
//     label: "Kiamichi Technology Center-McAlester",
//     value: "Kiamichi Technology Center-McAlester"
//   },
//   {
//     label: "Kiamichi Technology Center-Idabel",
//     value: "Kiamichi Technology Center-Idabel"
//   },
//   {
//     label: "Kiamichi Technology Center-Poteau",
//     value: "Kiamichi Technology Center-Poteau"
//   },
//   {
//     label: "Kiamichi Technology Center-Spiro",
//     value: "Kiamichi Technology Center-Spiro"
//   },
//   {
//     label: "Kiamichi Technology Center-Talihina",
//     value: "Kiamichi Technology Center-Talihina"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Portland",
//     value: "Le Cordon Bleu College of Culinary Arts-Portland"
//   },
//   {
//     label: "YTI Career Institute-Altoona",
//     value: "YTI Career Institute-Altoona"
//   },
//   {
//     label: "Eastern Center for Arts and Technology",
//     value: "Eastern Center for Arts and Technology"
//   },
//   {
//     label: "Empire Beauty School-Center City Philadelphia",
//     value: "Empire Beauty School-Center City Philadelphia"
//   },
//   {
//     label: "Oakbridge Academy of Arts",
//     value: "Oakbridge Academy of Arts"
//   },
//   {
//     label: "Sanford-Brown Institute-Wilkins Township",
//     value: "Sanford-Brown Institute-Wilkins Township"
//   },
//   {
//     label: "Centro de Estudios Multidisciplinarios-Humacao",
//     value: "Centro de Estudios Multidisciplinarios-Humacao"
//   },
//   {
//     label: "Colegio Mayor de Tecnologia Inc",
//     value: "Colegio Mayor de Tecnologia Inc"
//   },
//   {
//     label: "Institucion Chaviano de Mayaguez",
//     value: "Institucion Chaviano de Mayaguez"
//   },
//   { label: "EDIC College", value: "EDIC College" },
//   {
//     label: "Liceo de Arte-Dise-O y Comercio",
//     value: "Liceo de Arte-Dise-O y Comercio"
//   },
//   {
//     label: "Universal Technology College of Puerto Rico",
//     value: "Universal Technology College of Puerto Rico"
//   },
//   {
//     label: "Academy of Hair Technology",
//     value: "Academy of Hair Technology"
//   },
//   {
//     label: "Mr Wayne's School of Unisex Hair Design",
//     value: "Mr Wayne's School of Unisex Hair Design"
//   },
//   {
//     label: "Southern Institute of Cosmetology",
//     value: "Southern Institute of Cosmetology"
//   },
//   { label: "Queen City College", value: "Queen City College" },
//   {
//     label: "College of the Marshall Islands",
//     value: "College of the Marshall Islands"
//   },
//   {
//     label: "American National College",
//     value: "American National College"
//   },
//   {
//     label: "ITT Technical Institute-San Antonio",
//     value: "ITT Technical Institute-San Antonio"
//   },
//   {
//     label: "Remington College-Fort Worth Campus",
//     value: "Remington College-Fort Worth Campus"
//   },
//   {
//     label: "University of Cosmetology Arts & Sciences-San Antonio Jamar",
//     value: "University of Cosmetology Arts & Sciences-San Antonio Jamar"
//   },
//   {
//     label: "School of Automotive Machinists",
//     value: "School of Automotive Machinists"
//   },
//   {
//     label: "SW School of Business and Technical Careers-Cosmetology",
//     value: "SW School of Business and Technical Careers-Cosmetology"
//   },
//   {
//     label: "SW School of Business and Technical Careers",
//     value: "SW School of Business and Technical Careers"
//   },
//   {
//     label: "Texas College of Cosmetology-Abilene",
//     value: "Texas College of Cosmetology-Abilene"
//   },
//   { label: "Vista College-Online", value: "Vista College-Online" },
//   {
//     label: "Centura College-Newport News",
//     value: "Centura College-Newport News"
//   },
//   { label: "Centura College-Norfolk", value: "Centura College-Norfolk" },
//   {
//     label: "Virginia Beach City Public Schools School of Practical Nursing",
//     value: "Virginia Beach City Public Schools School of Practical Nursing"
//   },
//   {
//     label: "Northwest College of Art & Design",
//     value: "Northwest College of Art & Design"
//   },
//   {
//     label: "University of Washington-Bothell Campus",
//     value: "University of Washington-Bothell Campus"
//   },
//   {
//     label: "University of Washington-Tacoma Campus",
//     value: "University of Washington-Tacoma Campus"
//   },
//   {
//     label: "Huntington School of Beauty Culture-Main Campus",
//     value: "Huntington School of Beauty Culture-Main Campus"
//   },
//   { label: "Valley College-Beckley", value: "Valley College-Beckley" },
//   {
//     label: "Valley College-Martinsburg",
//     value: "Valley College-Martinsburg"
//   },
//   { label: "Valley College-Princeton", value: "Valley College-Princeton" },
//   { label: "Bellus Academy-Poway", value: "Bellus Academy-Poway" },
//   { label: "Capstone College", value: "Capstone College" },
//   { label: "Central Coast College", value: "Central Coast College" },
//   {
//     label: "ITT Technical Institute-Torrance",
//     value: "ITT Technical Institute-Torrance"
//   },
//   {
//     label: "Pacific College of Oriental Medicine-San Diego",
//     value: "Pacific College of Oriental Medicine-San Diego"
//   },
//   {
//     label: "Artistic Nails and Beauty Academy-Tampa",
//     value: "Artistic Nails and Beauty Academy-Tampa"
//   },
//   {
//     label: "National Aviation Academy of Tampa Bay",
//     value: "National Aviation Academy of Tampa Bay"
//   },
//   {
//     label: "Sanford-Brown Institute-Tampa",
//     value: "Sanford-Brown Institute-Tampa"
//   },
//   {
//     label: "Cain's Barber College Inc",
//     value: "Cain's Barber College Inc"
//   },
//   {
//     label: "Lawton Career Institute-Oak Park Campus",
//     value: "Lawton Career Institute-Oak Park Campus"
//   },
//   {
//     label: "Madison Oneida BOCES-Practical Nursing Program",
//     value: "Madison Oneida BOCES-Practical Nursing Program"
//   },
//   { label: "Astrodome Career Centers", value: "Astrodome Career Centers" },
//   {
//     label: "Center for Advanced Legal Studies",
//     value: "Center for Advanced Legal Studies"
//   },
//   {
//     label: "Houston Training School-Main Campus",
//     value: "Houston Training School-Main Campus"
//   },
//   {
//     label: "Remington College-Houston Campus",
//     value: "Remington College-Houston Campus"
//   },
//   {
//     label: "Bay Mills Community College",
//     value: "Bay Mills Community College"
//   },
//   {
//     label: "Fond du Lac Tribal and Community College",
//     value: "Fond du Lac Tribal and Community College"
//   },
//   { label: "Northwest Indian College", value: "Northwest Indian College" },
//   {
//     label: "Marinello Schools of Beauty-Provo",
//     value: "Marinello Schools of Beauty-Provo"
//   },
//   { label: "Provo College", value: "Provo College" },
//   {
//     label: "Paul Mitchell the School-Provo",
//     value: "Paul Mitchell the School-Provo"
//   },
//   {
//     label: "University of Phoenix-Utah Campus",
//     value: "University of Phoenix-Utah Campus"
//   },
//   {
//     label: "Utah College of Massage Therapy-Salt Lake City",
//     value: "Utah College of Massage Therapy-Salt Lake City"
//   },
//   { label: "CET-Coachella", value: "CET-Coachella" },
//   { label: "CET-Oxnard", value: "CET-Oxnard" },
//   { label: "CET-Santa Maria", value: "CET-Santa Maria" },
//   { label: "CET-Rancho Temecula", value: "CET-Rancho Temecula" },
//   {
//     label: "Colorado School of Traditional Chinese Medicine",
//     value: "Colorado School of Traditional Chinese Medicine"
//   },
//   {
//     label: "Massage Therapy Institute of Colorado",
//     value: "Massage Therapy Institute of Colorado"
//   },
//   {
//     label: "Michigan College of Beauty-Troy",
//     value: "Michigan College of Beauty-Troy"
//   },
//   {
//     label: "Ogle School Hair Skin Nails-Dallas",
//     value: "Ogle School Hair Skin Nails-Dallas"
//   },
//   { label: "Phoenix Seminary", value: "Phoenix Seminary" },
//   {
//     label: "Faust Institute of Cosmetology-Spirit Lake",
//     value: "Faust Institute of Cosmetology-Spirit Lake"
//   },
//   {
//     label: "Seattle Vocational Institute",
//     value: "Seattle Vocational Institute"
//   },
//   {
//     label: "Baker College of Port Huron",
//     value: "Baker College of Port Huron"
//   },
//   {
//     label: "Empire Beauty School-Hyannis",
//     value: "Empire Beauty School-Hyannis"
//   },
//   {
//     label: "Brookstone College-Greensboro",
//     value: "Brookstone College-Greensboro"
//   },
//   {
//     label: "Cheeks International Academy of Beauty Culture-Fort Collins",
//     value: "Cheeks International Academy of Beauty Culture-Fort Collins"
//   },
//   {
//     label: "Cheeks International Academy of Beauty Culture-Greeley",
//     value: "Cheeks International Academy of Beauty Culture-Greeley"
//   },
//   {
//     label: "Colorado School of Healing Arts",
//     value: "Colorado School of Healing Arts"
//   },
//   {
//     label: "Remington College-Colorado Springs Campus",
//     value: "Remington College-Colorado Springs Campus"
//   },
//   {
//     label: "Empire Beauty School-Arvada",
//     value: "Empire Beauty School-Arvada"
//   },
//   {
//     label: "Westwood College-Denver South",
//     value: "Westwood College-Denver South"
//   },
//   { label: "Kaplan College-Denver", value: "Kaplan College-Denver" },
//   { label: "Healing Arts Institute", value: "Healing Arts Institute" },
//   {
//     label: "ITT Technical Institute-San Bernardino",
//     value: "ITT Technical Institute-San Bernardino"
//   },
//   {
//     label: "Los Angeles ORT College-Van Nuys Campus",
//     value: "Los Angeles ORT College-Van Nuys Campus"
//   },
//   {
//     label: "Texas School of Business-Southwest",
//     value: "Texas School of Business-Southwest"
//   },
//   {
//     label: "University of Phoenix-Puerto Rico Campus",
//     value: "University of Phoenix-Puerto Rico Campus"
//   },
//   {
//     label: "Mt Diablo Adult Education",
//     value: "Mt Diablo Adult Education"
//   },
//   { label: "Royale College of Beauty", value: "Royale College of Beauty" },
//   { label: "Westech College", value: "Westech College" },
//   {
//     label: "Greater Lowell Technical School",
//     value: "Greater Lowell Technical School"
//   },
//   {
//     label: "Academy of Hair Design-Pearl",
//     value: "Academy of Hair Design-Pearl"
//   },
//   { label: "King's College", value: "King's College" },
//   {
//     label: "Miller-Motte Technical College-Clarksville",
//     value: "Miller-Motte Technical College-Clarksville"
//   },
//   {
//     label: "Genesis Career College-Lebanon",
//     value: "Genesis Career College-Lebanon"
//   },
//   { label: "Kaplan College-Dallas", value: "Kaplan College-Dallas" },
//   {
//     label: "Star College of Cosmetology 2",
//     value: "Star College of Cosmetology 2"
//   },
//   {
//     label: "Southwest Collegiate Institute for the Deaf",
//     value: "Southwest Collegiate Institute for the Deaf"
//   },
//   { label: "Fortis College-Richmond", value: "Fortis College-Richmond" },
//   {
//     label: "Midwest College of Oriental Medicine-Racine",
//     value: "Midwest College of Oriental Medicine-Racine"
//   },
//   {
//     label: "Hacienda La Puente Adult Education",
//     value: "Hacienda La Puente Adult Education"
//   },
//   { label: "La Belle Beauty Academy", value: "La Belle Beauty Academy" },
//   {
//     label: "Advanced Technical Centers",
//     value: "Advanced Technical Centers"
//   },
//   { label: "Hawaii Community College", value: "Hawaii Community College" },
//   {
//     label: "Regency Beauty Institute-Winston-Salem",
//     value: "Regency Beauty Institute-Winston-Salem"
//   },
//   {
//     label: "Robert Fiance Beauty Schools-North Plainfield",
//     value: "Robert Fiance Beauty Schools-North Plainfield"
//   },
//   {
//     label: "Long Island Beauty School-Hauppauge",
//     value: "Long Island Beauty School-Hauppauge"
//   },
//   {
//     label: "Buckeye Joint Vocational School",
//     value: "Buckeye Joint Vocational School"
//   },
//   { label: "Sandusky Career Center", value: "Sandusky Career Center" },
//   {
//     label: "Greater Altoona Career & Technology Center",
//     value: "Greater Altoona Career & Technology Center"
//   },
//   {
//     label: "Northeastern Hospital School of Nursing",
//     value: "Northeastern Hospital School of Nursing"
//   },
//   {
//     label: "Central Texas Beauty College-Temple",
//     value: "Central Texas Beauty College-Temple"
//   },
//   {
//     label: "Dance Theatre of Harlem Inc",
//     value: "Dance Theatre of Harlem Inc"
//   },
//   {
//     label: "Erie 2 Chautauqua Cattaraugus BOCES-Practical Nursing Program",
//     value: "Erie 2 Chautauqua Cattaraugus BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Empire Beauty School-Brooklyn",
//     value: "Empire Beauty School-Brooklyn"
//   },
//   {
//     label: "Houston Training School-Gulfgate",
//     value: "Houston Training School-Gulfgate"
//   },
//   {
//     label: "Star Career Academy-Philadelphia",
//     value: "Star Career Academy-Philadelphia"
//   },
//   {
//     label: "Antonelli College-Hattiesburg",
//     value: "Antonelli College-Hattiesburg"
//   },
//   {
//     label: "Eastern New Mexico University-Ruidoso Campus",
//     value: "Eastern New Mexico University-Ruidoso Campus"
//   },
//   {
//     label: "Newbridge College-Santa Ana",
//     value: "Newbridge College-Santa Ana"
//   },
//   { label: "Kaplan College-Stockton", value: "Kaplan College-Stockton" },
//   {
//     label: "The Bryman School of Arizona",
//     value: "The Bryman School of Arizona"
//   },
//   { label: "Beacon College", value: "Beacon College" },
//   {
//     label: "Acupuncture and Integrative Medicine College-Berkeley",
//     value: "Acupuncture and Integrative Medicine College-Berkeley"
//   },
//   {
//     label: "Estrella Mountain Community College",
//     value: "Estrella Mountain Community College"
//   },
//   {
//     label: "Heartland Community College",
//     value: "Heartland Community College"
//   },
//   {
//     label: "University of the Potomac-Washington DC Campus",
//     value: "University of the Potomac-Washington DC Campus"
//   },
//   {
//     label: "Rabbi Jacob Joseph School",
//     value: "Rabbi Jacob Joseph School"
//   },
//   {
//     label: "Sanford-Brown Institute-Ft Lauderdale",
//     value: "Sanford-Brown Institute-Ft Lauderdale"
//   },
//   {
//     label: "The Salon Professional Academy-Melbourne",
//     value: "The Salon Professional Academy-Melbourne"
//   },
//   {
//     label: "Fortis Institute-Scranton",
//     value: "Fortis Institute-Scranton"
//   },
//   {
//     label: "Milan Institute of Cosmetology-Amarillo",
//     value: "Milan Institute of Cosmetology-Amarillo"
//   },
//   { label: "Everglades University", value: "Everglades University" },
//   {
//     label: "Seminar L'moros Bais Yaakov",
//     value: "Seminar L'moros Bais Yaakov"
//   },
//   {
//     label: "Herzing University-Winter Park",
//     value: "Herzing University-Winter Park"
//   },
//   {
//     label: "Coral Ridge Nurses Assistant Training School Inc",
//     value: "Coral Ridge Nurses Assistant Training School Inc"
//   },
//   {
//     label: "Emil Fries Piano Hospital and Training Center",
//     value: "Emil Fries Piano Hospital and Training Center"
//   },
//   { label: "Fairview Beauty Academy", value: "Fairview Beauty Academy" },
//   {
//     label: "Florida College of Natural Health-Pompano Beach",
//     value: "Florida College of Natural Health-Pompano Beach"
//   },
//   {
//     label: "National College-Nashville",
//     value: "National College-Nashville"
//   },
//   {
//     label: "College of Biblical Studies-Houston",
//     value: "College of Biblical Studies-Houston"
//   },
//   {
//     label: "Inner State Beauty School",
//     value: "Inner State Beauty School"
//   },
//   {
//     label: "Virginia College-Pensacola",
//     value: "Virginia College-Pensacola"
//   },
//   {
//     label: "Mid-EastCTC-Adult Education",
//     value: "Mid-EastCTC-Adult Education"
//   },
//   {
//     label: "Everest University-South Orlando",
//     value: "Everest University-South Orlando"
//   },
//   { label: "Polaris Career Center", value: "Polaris Career Center" },
//   {
//     label: "P&A Scholars Beauty School",
//     value: "P&A Scholars Beauty School"
//   },
//   {
//     label: "Rensselaer BOCES-Practical Nursing Program",
//     value: "Rensselaer BOCES-Practical Nursing Program"
//   },
//   { label: "ASM Beauty World Academy", value: "ASM Beauty World Academy" },
//   {
//     label: "The Salter School-Tewksbury Campus",
//     value: "The Salter School-Tewksbury Campus"
//   },
//   {
//     label: "Sanford-Brown College-Collinsville",
//     value: "Sanford-Brown College-Collinsville"
//   },
//   {
//     label: "Sharps Academy of Hair Styling",
//     value: "Sharps Academy of Hair Styling"
//   },
//   { label: "ICC Technical Institute", value: "ICC Technical Institute" },
//   {
//     label: "College of Health Care Professions-Northwest",
//     value: "College of Health Care Professions-Northwest"
//   },
//   {
//     label: "School of Professional Horticulture at the New York Botanical Garden",
//     value: "School of Professional Horticulture at the New York Botanical Garden"
//   },
//   { label: "Fortis College-Houston", value: "Fortis College-Houston" },
//   {
//     label: "Volunteer Beauty Academy-Madison",
//     value: "Volunteer Beauty Academy-Madison"
//   },
//   {
//     label: "Watkins College of Art Design & Film",
//     value: "Watkins College of Art Design & Film"
//   },
//   {
//     label: "Chicago ORT Technical Institute",
//     value: "Chicago ORT Technical Institute"
//   },
//   { label: "Alhambra Beauty College", value: "Alhambra Beauty College" },
//   { label: "American Auto Institute", value: "American Auto Institute" },
//   {
//     label: "Asian American International Beauty College",
//     value: "Asian American International Beauty College"
//   },
//   { label: "Avance Beauty College", value: "Avance Beauty College" },
//   {
//     label: "Colton-Redlands-Yucaipa Regional Occupational Program",
//     value: "Colton-Redlands-Yucaipa Regional Occupational Program"
//   },
//   {
//     label: "Copper Mountain Community College",
//     value: "Copper Mountain Community College"
//   },
//   {
//     label: "Diversified Vocational College",
//     value: "Diversified Vocational College"
//   },
//   { label: "Bristol University", value: "Bristol University" },
//   { label: "UEI College-Fresno", value: "UEI College-Fresno" },
//   { label: "Mt Sierra College", value: "Mt Sierra College" },
//   { label: "Wyotech-Long Beach", value: "Wyotech-Long Beach" },
//   { label: "Santiago Canyon College", value: "Santiago Canyon College" },
//   {
//     label: "Southern California Institute of Technology",
//     value: "Southern California Institute of Technology"
//   },
//   {
//     label: "Soka University of America",
//     value: "Soka University of America"
//   },
//   { label: "Summit College", value: "Summit College" },
//   { label: "Advance Beauty College", value: "Advance Beauty College" },
//   {
//     label: "Career Colleges of America",
//     value: "Career Colleges of America"
//   },
//   { label: "World Mission University", value: "World Mission University" },
//   {
//     label: "Yo San University of Traditional Chinese Medicine",
//     value: "Yo San University of Traditional Chinese Medicine"
//   },
//   { label: "Coast Career Institute", value: "Coast Career Institute" },
//   {
//     label: "Cannella School of Hair Design-Blue Island",
//     value: "Cannella School of Hair Design-Blue Island"
//   },
//   { label: "Delta College Inc", value: "Delta College Inc" },
//   {
//     label: "Colorado Technical University-Sioux Falls",
//     value: "Colorado Technical University-Sioux Falls"
//   },
//   {
//     label: "Southwest University of Visual Arts-Albuquerque",
//     value: "Southwest University of Visual Arts-Albuquerque"
//   },
//   {
//     label: "Tri-State Cosmetology Institute",
//     value: "Tri-State Cosmetology Institute"
//   },
//   {
//     label: "Widener University-Harrisburg Campus",
//     value: "Widener University-Harrisburg Campus"
//   },
//   {
//     label: "Volunteer Beauty Academy-System Office",
//     value: "Volunteer Beauty Academy-System Office"
//   },
//   {
//     label: "Volunteer Beauty Academy-Nashville",
//     value: "Volunteer Beauty Academy-Nashville"
//   },
//   {
//     label: "Frontier Community College",
//     value: "Frontier Community College"
//   },
//   { label: "Lincoln Trail College", value: "Lincoln Trail College" },
//   { label: "Wabash Valley College", value: "Wabash Valley College" },
//   {
//     label: "American Institute of Interior Design",
//     value: "American Institute of Interior Design"
//   },
//   { label: "Brookline College-Tempe", value: "Brookline College-Tempe" },
//   {
//     label: "Baker College of Auburn Hills",
//     value: "Baker College of Auburn Hills"
//   },
//   {
//     label: "Baker College of Clinton Township",
//     value: "Baker College of Clinton Township"
//   },
//   {
//     label: "Inter American University of Puerto Rico-School of Optometry",
//     value: "Inter American University of Puerto Rico-School of Optometry"
//   },
//   {
//     label: "Schiller International University",
//     value: "Schiller International University"
//   },
//   {
//     label: "Vatterott College-Springfield",
//     value: "Vatterott College-Springfield"
//   },
//   { label: "Vatterott College-Joplin", value: "Vatterott College-Joplin" },
//   {
//     label: "Vatterott College-Kansas City",
//     value: "Vatterott College-Kansas City"
//   },
//   {
//     label: "Coconino Community College",
//     value: "Coconino Community College"
//   },
//   {
//     label: "University System of Maryland-Research Centers",
//     value: "University System of Maryland-Research Centers"
//   },
//   {
//     label: "Sanford-Brown College-Houston",
//     value: "Sanford-Brown College-Houston"
//   },
//   {
//     label: "Sanford-Brown Institute-Jacksonville",
//     value: "Sanford-Brown Institute-Jacksonville"
//   },
//   {
//     label: "Sanford-Brown College-Dallas",
//     value: "Sanford-Brown College-Dallas"
//   },
//   {
//     label: "Baker College of Cadillac",
//     value: "Baker College of Cadillac"
//   },
//   {
//     label: "Emma's Beauty Academy-Juana Diaz",
//     value: "Emma's Beauty Academy-Juana Diaz"
//   },
//   { label: "Franklin Academy", value: "Franklin Academy" },
//   {
//     label: "Columbia Centro Universitario-Yauco",
//     value: "Columbia Centro Universitario-Yauco"
//   },
//   {
//     label: "Pima Medical Institute-Denver",
//     value: "Pima Medical Institute-Denver"
//   },
//   { label: "Fortis College-Miami", value: "Fortis College-Miami" },
//   { label: "ASA College", value: "ASA College" },
//   {
//     label: "Ohio State School of Cosmetology-Westerville",
//     value: "Ohio State School of Cosmetology-Westerville"
//   },
//   {
//     label: "Nationwide Beauty Academy",
//     value: "Nationwide Beauty Academy"
//   },
//   { label: "Yeshivas Novominsk", value: "Yeshivas Novominsk" },
//   {
//     label: "Southern Careers Institute-Corpus Christi",
//     value: "Southern Careers Institute-Corpus Christi"
//   },
//   {
//     label: "Kiamichi Technology Center-Stigler",
//     value: "Kiamichi Technology Center-Stigler"
//   },
//   {
//     label: "Rabbinical College of Ohr Shimon Yisroel",
//     value: "Rabbinical College of Ohr Shimon Yisroel"
//   },
//   {
//     label: "Carroll Community College",
//     value: "Carroll Community College"
//   },
//   {
//     label: "University of Phoenix-Southern Arizona Campus",
//     value: "University of Phoenix-Southern Arizona Campus"
//   },
//   {
//     label: "University of Phoenix-Colorado Campus",
//     value: "University of Phoenix-Colorado Campus"
//   },
//   {
//     label: "University of Phoenix-Albuquerque Campus",
//     value: "University of Phoenix-Albuquerque Campus"
//   },
//   {
//     label: "University of Phoenix-Bay Area Campus",
//     value: "University of Phoenix-Bay Area Campus"
//   },
//   {
//     label: "University of Phoenix-Southern California Campus",
//     value: "University of Phoenix-Southern California Campus"
//   },
//   {
//     label: "Galen College of Nursing-Tampa Bay",
//     value: "Galen College of Nursing-Tampa Bay"
//   },
//   {
//     label: "Galen College of Nursing-San Antonio",
//     value: "Galen College of Nursing-San Antonio"
//   },
//   {
//     label: "Southeastern Beauty School-Columbus North Lumpkin",
//     value: "Southeastern Beauty School-Columbus North Lumpkin"
//   },
//   {
//     label: "Southeastern Beauty School-Columbus Midtown",
//     value: "Southeastern Beauty School-Columbus Midtown"
//   },
//   {
//     label: "Sarasota School of Massage Therapy",
//     value: "Sarasota School of Massage Therapy"
//   },
//   { label: "Westwood College-Dupage", value: "Westwood College-Dupage" },
//   { label: "Wright Career College", value: "Wright Career College" },
//   {
//     label: "Daymar College-Louisville",
//     value: "Daymar College-Louisville"
//   },
//   {
//     label: "Sanford-Brown College-Hazelwood",
//     value: "Sanford-Brown College-Hazelwood"
//   },
//   {
//     label: "Schuyler Steuben Chemung Tioga Allegany BOCES",
//     value: "Schuyler Steuben Chemung Tioga Allegany BOCES"
//   },
//   {
//     label: "Delaware Chenango Madison Otsego BOCES-Practical Nursing Program",
//     value: "Delaware Chenango Madison Otsego BOCES-Practical Nursing Program"
//   },
//   { label: "DCI Career Institute", value: "DCI Career Institute" },
//   {
//     label: "Central Susquehanna Intermediate Unit LPN Career",
//     value: "Central Susquehanna Intermediate Unit LPN Career"
//   },
//   {
//     label: "Myotherapy College of Utah",
//     value: "Myotherapy College of Utah"
//   },
//   {
//     label: "Graham Webb International Academy of Hair",
//     value: "Graham Webb International Academy of Hair"
//   },
//   { label: "City College-Gainesville", value: "City College-Gainesville" },
//   {
//     label: "Arizona State University-West",
//     value: "Arizona State University-West"
//   },
//   {
//     label: "Connecticut Center for Massage Therapy-Westport",
//     value: "Connecticut Center for Massage Therapy-Westport"
//   },
//   {
//     label: "ITT Technical Institute-Jacksonville",
//     value: "ITT Technical Institute-Jacksonville"
//   },
//   {
//     label: "G Skin & Beauty Institute",
//     value: "G Skin & Beauty Institute"
//   },
//   {
//     label: "Cosmetology Training Center",
//     value: "Cosmetology Training Center"
//   },
//   {
//     label: "Stage One-The Hair School",
//     value: "Stage One-The Hair School"
//   },
//   {
//     label: "Empire Beauty School-Malden",
//     value: "Empire Beauty School-Malden"
//   },
//   {
//     label: "Minnesota School of Business-Brooklyn Center",
//     value: "Minnesota School of Business-Brooklyn Center"
//   },
//   {
//     label: "ITT Technical Institute-Omaha",
//     value: "ITT Technical Institute-Omaha"
//   },
//   {
//     label: "Omaha School of Massage and Healthcare of Herzing University",
//     value: "Omaha School of Massage and Healthcare of Herzing University"
//   },
//   {
//     label: "Xenon International Academy-Omaha",
//     value: "Xenon International Academy-Omaha"
//   },
//   {
//     label: "Capri Institute of Hair Design-Brick",
//     value: "Capri Institute of Hair Design-Brick"
//   },
//   {
//     label: "Capri Institute of Hair Design-Kenilworth",
//     value: "Capri Institute of Hair Design-Kenilworth"
//   },
//   {
//     label: "Capri Institute of Hair Design-Paramus",
//     value: "Capri Institute of Hair Design-Paramus"
//   },
//   {
//     label: "Orlo School of Hair Design and Cosmetology",
//     value: "Orlo School of Hair Design and Cosmetology"
//   },
//   {
//     label: "Delaware Area Career Center",
//     value: "Delaware Area Career Center"
//   },
//   {
//     label: "Eastland-Fairfield Career and Technical Schools",
//     value: "Eastland-Fairfield Career and Technical Schools"
//   },
//   {
//     label: "Empire Beauty School-Cincinnati",
//     value: "Empire Beauty School-Cincinnati"
//   },
//   {
//     label: "Mahoning County Career and Technical Center",
//     value: "Mahoning County Career and Technical Center"
//   },
//   {
//     label: "Ohio Hi Point Joint Vocational School District",
//     value: "Ohio Hi Point Joint Vocational School District"
//   },
//   {
//     label: "Pickaway Ross Joint Vocational School District",
//     value: "Pickaway Ross Joint Vocational School District"
//   },
//   {
//     label: "Pioneer Career and Technology Center",
//     value: "Pioneer Career and Technology Center"
//   },
//   {
//     label: "Raphael's School of Beauty Culture Inc-Boardman",
//     value: "Raphael's School of Beauty Culture Inc-Boardman"
//   },
//   {
//     label: "Scioto County Career Technical Center",
//     value: "Scioto County Career Technical Center"
//   },
//   {
//     label: "Trumbull Career & Technical Center",
//     value: "Trumbull Career & Technical Center"
//   },
//   {
//     label: "Northwest Technology Center-Fairview",
//     value: "Northwest Technology Center-Fairview"
//   },
//   {
//     label: "Lake Erie College of Osteopathic Medicine",
//     value: "Lake Erie College of Osteopathic Medicine"
//   },
//   {
//     label: "University of Cosmetology Arts & Sciences-Harlingen",
//     value: "University of Cosmetology Arts & Sciences-Harlingen"
//   },
//   {
//     label: "Gene Juarez Academy of Beauty-Federal Way",
//     value: "Gene Juarez Academy of Beauty-Federal Way"
//   },
//   {
//     label: "Empire Beauty School-Appleton",
//     value: "Empire Beauty School-Appleton"
//   },
//   {
//     label: "Empire Beauty School-Green Bay",
//     value: "Empire Beauty School-Green Bay"
//   },
//   {
//     label: "Warren County Career Center",
//     value: "Warren County Career Center"
//   },
//   {
//     label: "Brown Mackie College-Fort Wayne",
//     value: "Brown Mackie College-Fort Wayne"
//   },
//   {
//     label: "Paul Mitchell the School-Wichita",
//     value: "Paul Mitchell the School-Wichita"
//   },
//   {
//     label: "Pinnacle Institute of Cosmetology",
//     value: "Pinnacle Institute of Cosmetology"
//   },
//   {
//     label: "Career Training Academy-Monroeville",
//     value: "Career Training Academy-Monroeville"
//   },
//   {
//     label: "Southern Careers Institute-Pharr",
//     value: "Southern Careers Institute-Pharr"
//   },
//   {
//     label: "Texas State Technical College-Marshall",
//     value: "Texas State Technical College-Marshall"
//   },
//   {
//     label: "Florida National University-Main Campus",
//     value: "Florida National University-Main Campus"
//   },
//   {
//     label: "Georgia Institute of Cosmetology",
//     value: "Georgia Institute of Cosmetology"
//   },
//   { label: "Nouvelle Institute", value: "Nouvelle Institute" },
//   {
//     label: "ITT Technical Institute-Fort Lauderdale",
//     value: "ITT Technical Institute-Fort Lauderdale"
//   },
//   { label: "Franklin Technology-MSSU", value: "Franklin Technology-MSSU" },
//   {
//     label: "Carson City Beauty Academy",
//     value: "Carson City Beauty Academy"
//   },
//   {
//     label: "Professional Technical Institution Inc",
//     value: "Professional Technical Institution Inc"
//   },
//   { label: "Erikson Institute", value: "Erikson Institute" },
//   { label: "South Texas College", value: "South Texas College" },
//   {
//     label: "Tennessee Board of Regents",
//     value: "Tennessee Board of Regents"
//   },
//   {
//     label: "Pike County Joint Vocational School District",
//     value: "Pike County Joint Vocational School District"
//   },
//   {
//     label: "Lorain County Joint Vocational School District",
//     value: "Lorain County Joint Vocational School District"
//   },
//   {
//     label: "Roger Williams University School of Law",
//     value: "Roger Williams University School of Law"
//   },
//   {
//     label: "Everest Institute-Kendall",
//     value: "Everest Institute-Kendall"
//   },
//   {
//     label: "California State University-Monterey Bay",
//     value: "California State University-Monterey Bay"
//   },
//   {
//     label: "Sanford-Brown College-St Peters",
//     value: "Sanford-Brown College-St Peters"
//   },
//   {
//     label: "Colorado Technical University-Kansas City",
//     value: "Colorado Technical University-Kansas City"
//   },
//   { label: "Heald College-Salinas", value: "Heald College-Salinas" },
//   {
//     label: "Academy of Somatic Healing Arts",
//     value: "Academy of Somatic Healing Arts"
//   },
//   {
//     label: "Heritage College-Oklahoma City",
//     value: "Heritage College-Oklahoma City"
//   },
//   {
//     label: "Ann Arbor Institute of Massage Therapy",
//     value: "Ann Arbor Institute of Massage Therapy"
//   },
//   {
//     label: "Brown Mackie College-Atlanta",
//     value: "Brown Mackie College-Atlanta"
//   },
//   {
//     label: "Bryant & Stratton College-Henrietta",
//     value: "Bryant & Stratton College-Henrietta"
//   },
//   {
//     label: "The Art Institute of California-Argosy University Hollywood",
//     value: "The Art Institute of California-Argosy University Hollywood"
//   },
//   { label: "Sage College", value: "Sage College" },
//   { label: "Anthem College-Denver", value: "Anthem College-Denver" },
//   {
//     label: "Lincoln Technical Institute-Hartford",
//     value: "Lincoln Technical Institute-Hartford"
//   },
//   {
//     label: "Ohio Center for Broadcasting-Valley View",
//     value: "Ohio Center for Broadcasting-Valley View"
//   },
//   { label: "EINE Inc", value: "EINE Inc" },
//   {
//     label: "Laurus Technical Institute",
//     value: "Laurus Technical Institute"
//   },
//   {
//     label: "Illinois School of Health Careers-Chicago Campus",
//     value: "Illinois School of Health Careers-Chicago Campus"
//   },
//   {
//     label: "Marian Health Careers Center-Los Angeles Campus",
//     value: "Marian Health Careers Center-Los Angeles Campus"
//   },
//   {
//     label: "Cleveland Clinic Health System-School of Diagnostic Imaging",
//     value: "Cleveland Clinic Health System-School of Diagnostic Imaging"
//   },
//   {
//     label: "National Institute of Massotherapy",
//     value: "National Institute of Massotherapy"
//   },
//   {
//     label: "Academy for Nursing and Health Occupations",
//     value: "Academy for Nursing and Health Occupations"
//   },
//   {
//     label: "Shawsheen Valley Regional Vocational Technical School",
//     value: "Shawsheen Valley Regional Vocational Technical School"
//   },
//   {
//     label: "Shear Ego International School of Hair Design",
//     value: "Shear Ego International School of Hair Design"
//   },
//   {
//     label: "Remington College-Memphis Campus",
//     value: "Remington College-Memphis Campus"
//   },
//   {
//     label: "Star Truck Driving School-Hickory Hills",
//     value: "Star Truck Driving School-Hickory Hills"
//   },
//   {
//     label: "Fayette Institute of Technology",
//     value: "Fayette Institute of Technology"
//   },
//   {
//     label: "Professional Beauty School",
//     value: "Professional Beauty School"
//   },
//   { label: "Capella University", value: "Capella University" },
//   {
//     label: "College of Menominee Nation",
//     value: "College of Menominee Nation"
//   },
//   {
//     label: "Leech Lake Tribal College",
//     value: "Leech Lake Tribal College"
//   },
//   {
//     label: "Anthem College-Sacramento",
//     value: "Anthem College-Sacramento"
//   },
//   {
//     label: "Southwest Acupuncture College-Albuquerque",
//     value: "Southwest Acupuncture College-Albuquerque"
//   },
//   {
//     label: "Crimson Technical College",
//     value: "Crimson Technical College"
//   },
//   { label: "Stone Academy-Waterbury", value: "Stone Academy-Waterbury" },
//   {
//     label: "East San Gabriel Valley Regional Occupational Program",
//     value: "East San Gabriel Valley Regional Occupational Program"
//   },
//   { label: "Yukon Beauty College Inc", value: "Yukon Beauty College Inc" },
//   {
//     label: "ITT Technical Institute-Little Rock",
//     value: "ITT Technical Institute-Little Rock"
//   },
//   {
//     label: "ITT Technical Institute-Oxnard",
//     value: "ITT Technical Institute-Oxnard"
//   },
//   {
//     label: "ITT Technical Institute-Louisville",
//     value: "ITT Technical Institute-Louisville"
//   },
//   {
//     label: "ITT Technical Institute-Greenville",
//     value: "ITT Technical Institute-Greenville"
//   },
//   {
//     label: "ITT Technical Institute-Cordova",
//     value: "ITT Technical Institute-Cordova"
//   },
//   {
//     label: "Cairn University-Wisconsin Wilderness",
//     value: "Cairn University-Wisconsin Wilderness"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Atlanta",
//     value: "Toni & Guy Hairdressing Academy-Atlanta"
//   },
//   {
//     label: "Mitchell's Hair Styling Academy-Raleigh",
//     value: "Mitchell's Hair Styling Academy-Raleigh"
//   },
//   { label: "Salon Academy", value: "Salon Academy" },
//   {
//     label: "Artistic Academy of Hair Design",
//     value: "Artistic Academy of Hair Design"
//   },
//   {
//     label: "Motoring Technical Training Institute",
//     value: "Motoring Technical Training Institute"
//   },
//   { label: "Baker College of Jackson", value: "Baker College of Jackson" },
//   {
//     label: "Phagans Newport Academy of Cosmetology Careers",
//     value: "Phagans Newport Academy of Cosmetology Careers"
//   },
//   { label: "Mech-Tech College", value: "Mech-Tech College" },
//   {
//     label: "Baldwin Beauty School-North Austin",
//     value: "Baldwin Beauty School-North Austin"
//   },
//   {
//     label: "ITT Technical Institute-Everett",
//     value: "ITT Technical Institute-Everett"
//   },
//   {
//     label: "Jean Madeline Aveda Institute",
//     value: "Jean Madeline Aveda Institute"
//   },
//   { label: "Cosmetology Schools Inc", value: "Cosmetology Schools Inc" },
//   {
//     label: "ITT Technical Institute-Bessemer",
//     value: "ITT Technical Institute-Bessemer"
//   },
//   {
//     label: "ITT Technical Institute-Orland Park",
//     value: "ITT Technical Institute-Orland Park"
//   },
//   {
//     label: "Pacific College of Oriental Medicine-New York",
//     value: "Pacific College of Oriental Medicine-New York"
//   },
//   {
//     label: "Baker College Center for Graduate Studies",
//     value: "Baker College Center for Graduate Studies"
//   },
//   {
//     label: "Johnson & Wales University-North Miami",
//     value: "Johnson & Wales University-North Miami"
//   },
//   {
//     label: "ITT Technical Institute-Pittsburgh",
//     value: "ITT Technical Institute-Pittsburgh"
//   },
//   {
//     label: "Tricoci University of Beauty Culture-Indianapolis",
//     value: "Tricoci University of Beauty Culture-Indianapolis"
//   },
//   {
//     label: "Trine University-Regional/Non-Traditional Campuses",
//     value: "Trine University-Regional/Non-Traditional Campuses"
//   },
//   {
//     label: "Pennsylvania Highlands Community College",
//     value: "Pennsylvania Highlands Community College"
//   },
//   { label: "Nevada Career Institute", value: "Nevada Career Institute" },
//   {
//     label: "Phillips Theological Seminary",
//     value: "Phillips Theological Seminary"
//   },
//   {
//     label: "Empire Beauty School-Hanover",
//     value: "Empire Beauty School-Hanover"
//   },
//   {
//     label: "Industrial Management Training Institute",
//     value: "Industrial Management Training Institute"
//   },
//   {
//     label: "Faris Technical Institute Inc",
//     value: "Faris Technical Institute Inc"
//   },
//   { label: "Four-D College", value: "Four-D College" },
//   { label: "Allen School-Jamaica", value: "Allen School-Jamaica" },
//   { label: "Premiere Career College", value: "Premiere Career College" },
//   {
//     label: "Tennessee Academy of Cosmetology-Stage Road",
//     value: "Tennessee Academy of Cosmetology-Stage Road"
//   },
//   {
//     label: "The University of Texas MD Anderson Cancer Center",
//     value: "The University of Texas MD Anderson Cancer Center"
//   },
//   {
//     label: "University of Phoenix-Las Vegas Campus",
//     value: "University of Phoenix-Las Vegas Campus"
//   },
//   {
//     label: "Carousel Beauty College-Springfield",
//     value: "Carousel Beauty College-Springfield"
//   },
//   {
//     label: "Carousel Beauty College-Kettering",
//     value: "Carousel Beauty College-Kettering"
//   },
//   {
//     label: "Paul Mitchell the School-Huntsville",
//     value: "Paul Mitchell the School-Huntsville"
//   },
//   {
//     label: "Estes Institute of Cosmetology Arts and Science",
//     value: "Estes Institute of Cosmetology Arts and Science"
//   },
//   {
//     label: "Baldwin Park Adult & Community Education",
//     value: "Baldwin Park Adult & Community Education"
//   },
//   {
//     label: "Ventura Adult and Continuing Education",
//     value: "Ventura Adult and Continuing Education"
//   },
//   {
//     label: "Marinello Schools of Beauty-Sacramento",
//     value: "Marinello Schools of Beauty-Sacramento"
//   },
//   {
//     label: "Albert I Prince Technical High School",
//     value: "Albert I Prince Technical High School"
//   },
//   {
//     label: "Bullard-Havens Technical High School",
//     value: "Bullard-Havens Technical High School"
//   },
//   {
//     label: "Howell Cheney Technical High School",
//     value: "Howell Cheney Technical High School"
//   },
//   {
//     label: "W F Kaynor Technical High School",
//     value: "W F Kaynor Technical High School"
//   },
//   {
//     label: "Platt Technical High School",
//     value: "Platt Technical High School"
//   },
//   {
//     label: "College of Business and Technology-Kendall",
//     value: "College of Business and Technology-Kendall"
//   },
//   {
//     label: "City College-Altamonte Springs",
//     value: "City College-Altamonte Springs"
//   },
//   {
//     label: "Augusta Area Dietetic Internship-University Hospital",
//     value: "Augusta Area Dietetic Internship-University Hospital"
//   },
//   {
//     label: "Empire Beauty School-Dunwoody",
//     value: "Empire Beauty School-Dunwoody"
//   },
//   {
//     label: "Michael's School of Beauty",
//     value: "Michael's School of Beauty"
//   },
//   { label: "Cobb Beauty College Inc", value: "Cobb Beauty College Inc" },
//   {
//     label: "Career Center of Southern Illinois",
//     value: "Career Center of Southern Illinois"
//   },
//   {
//     label: "Xenon International Academy-Wichita",
//     value: "Xenon International Academy-Wichita"
//   },
//   { label: "Camelot College", value: "Camelot College" },
//   {
//     label: "Mr Bernard's School of Hair Fashion Inc",
//     value: "Mr Bernard's School of Hair Fashion Inc"
//   },
//   { label: "Hastings Beauty School", value: "Hastings Beauty School" },
//   {
//     label: "Kirksville Area Technical Center",
//     value: "Kirksville Area Technical Center"
//   },
//   {
//     label: "South Central Career Center",
//     value: "South Central Career Center"
//   },
//   {
//     label: "Saline County Career Center",
//     value: "Saline County Career Center"
//   },
//   {
//     label: "Warrensburg Area Career Center",
//     value: "Warrensburg Area Career Center"
//   },
//   {
//     label: "Nevada Regional Technical Center",
//     value: "Nevada Regional Technical Center"
//   },
//   { label: "Cass Career Center", value: "Cass Career Center" },
//   {
//     label: "Applied Technology Services",
//     value: "Applied Technology Services"
//   },
//   {
//     label: "Central College of Cosmetology",
//     value: "Central College of Cosmetology"
//   },
//   {
//     label: "Southeast Missouri Hospital College of Nursing and Health Sciences",
//     value: "Southeast Missouri Hospital College of Nursing and Health Sciences"
//   },
//   {
//     label: "Dallas County Technical Center",
//     value: "Dallas County Technical Center"
//   },
//   { label: "Messenger College", value: "Messenger College" },
//   {
//     label: "Tennessee Academy of Cosmetology-Shelby Drive",
//     value: "Tennessee Academy of Cosmetology-Shelby Drive"
//   },
//   {
//     label: "Cheveux School of Hair Design",
//     value: "Cheveux School of Hair Design"
//   },
//   { label: "Durham Beauty Academy", value: "Durham Beauty Academy" },
//   {
//     label: "Union County Vocational Technical School",
//     value: "Union County Vocational Technical School"
//   },
//   {
//     label: "Prism Career Institute-Philadelphia",
//     value: "Prism Career Institute-Philadelphia"
//   },
//   {
//     label: "Clinton Essex Warren Washington BOCES-Practical Nursing Program",
//     value: "Clinton Essex Warren Washington BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Jefferson Lewis BOCES-Practical Nursing Program",
//     value: "Jefferson Lewis BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Rochester General Hospital School of Medical Technology",
//     value: "Rochester General Hospital School of Medical Technology"
//   },
//   {
//     label: "Veeb Nassau County School of Practical Nursing",
//     value: "Veeb Nassau County School of Practical Nursing"
//   },
//   {
//     label: "Syracuse City Schools Practical Nursing Program",
//     value: "Syracuse City Schools Practical Nursing Program"
//   },
//   {
//     label: "Cattaraugus Allegany BOCES-Practical Nursing Program",
//     value: "Cattaraugus Allegany BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Orange Ulster BOCES-Practical Nursing Program",
//     value: "Orange Ulster BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Wayne Finger Lakes BOCES-Practical Nursing Program",
//     value: "Wayne Finger Lakes BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Broome Delaware Tioga BOCES-Practical Nursing Program",
//     value: "Broome Delaware Tioga BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Washington Saratoga Warren Hamilton Essex BOCES-Practical Nursing Program",
//     value: "Washington Saratoga Warren Hamilton Essex BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Albany BOCES-Adult Practical Nursing Program",
//     value: "Albany BOCES-Adult Practical Nursing Program"
//   },
//   {
//     label: "Ulster County BOCES-Practical Nursing Program",
//     value: "Ulster County BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Eastern Suffolk BOCES-Practical Nursing Program",
//     value: "Eastern Suffolk BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Rockland County BOCES-Practical Nursing Program",
//     value: "Rockland County BOCES-Practical Nursing Program"
//   },
//   {
//     label: "New York College of Health Professions",
//     value: "New York College of Health Professions"
//   },
//   {
//     label: "Career Institute of Health and Technology",
//     value: "Career Institute of Health and Technology"
//   },
//   {
//     label: "Charles Stuart School of Diamond Setting",
//     value: "Charles Stuart School of Diamond Setting"
//   },
//   {
//     label: "Penta County Joint Vocational School",
//     value: "Penta County Joint Vocational School"
//   },
//   {
//     label: "Career and Technology Education Centers of Licking County",
//     value: "Career and Technology Education Centers of Licking County"
//   },
//   {
//     label: "Willoughby-Eastlake School of Practical Nursing",
//     value: "Willoughby-Eastlake School of Practical Nursing"
//   },
//   {
//     label: "Washington County Career Center-Adult Technical Training",
//     value: "Washington County Career Center-Adult Technical Training"
//   },
//   {
//     label: "Ohio Center for Broadcasting-Cincinnati",
//     value: "Ohio Center for Broadcasting-Cincinnati"
//   },
//   { label: "Vantage Career Center", value: "Vantage Career Center" },
//   {
//     label: "Tri County Technology Center",
//     value: "Tri County Technology Center"
//   },
//   {
//     label: "Indian Capital Technology Center-Muskogee",
//     value: "Indian Capital Technology Center-Muskogee"
//   },
//   {
//     label: "Western Technology Center",
//     value: "Western Technology Center"
//   },
//   {
//     label: "Mid-America Technology Center",
//     value: "Mid-America Technology Center"
//   },
//   {
//     label: "Northeast Technology Center-Pryor",
//     value: "Northeast Technology Center-Pryor"
//   },
//   {
//     label: "Eastern Oklahoma County Technology Center",
//     value: "Eastern Oklahoma County Technology Center"
//   },
//   {
//     label: "Wes Watkins Technology Center",
//     value: "Wes Watkins Technology Center"
//   },
//   {
//     label: "Technical Institute of Cosmetology Arts and Sciences",
//     value: "Technical Institute of Cosmetology Arts and Sciences"
//   },
//   {
//     label: "York County School of Technology-Adult & Continuing Education",
//     value: "York County School of Technology-Adult & Continuing Education"
//   },
//   {
//     label: "Chester County Intermediate Unit",
//     value: "Chester County Intermediate Unit"
//   },
//   {
//     label: "Jefferson County Dubois Area Vocational Technical Practical Nursing Program",
//     value: "Jefferson County Dubois Area Vocational Technical Practical Nursing Program"
//   },
//   {
//     label: "Greater Johnstown Career and Technology Center",
//     value: "Greater Johnstown Career and Technology Center"
//   },
//   {
//     label: "Mifflin-Juniata Career and Technology Center",
//     value: "Mifflin-Juniata Career and Technology Center"
//   },
//   {
//     label: "Hanover Public School District Practical Nursing Program",
//     value: "Hanover Public School District Practical Nursing Program"
//   },
//   {
//     label: "Lenape Technical School Practical Nursing Program",
//     value: "Lenape Technical School Practical Nursing Program"
//   },
//   {
//     label: "Venango County Area Vocational Technical School",
//     value: "Venango County Area Vocational Technical School"
//   },
//   {
//     label: "Lancaster County Career and Technology Center",
//     value: "Lancaster County Career and Technology Center"
//   },
//   {
//     label: "Lebanon County Area Vocational Technical School",
//     value: "Lebanon County Area Vocational Technical School"
//   },
//   {
//     label: "Indiana County Technology Center",
//     value: "Indiana County Technology Center"
//   },
//   {
//     label: "Northern Tier Career Center",
//     value: "Northern Tier Career Center"
//   },
//   {
//     label: "Clarion County Career Center Practical Nursing Program",
//     value: "Clarion County Career Center Practical Nursing Program"
//   },
//   {
//     label: "Hazleton Area Career Center",
//     value: "Hazleton Area Career Center"
//   },
//   {
//     label: "All-State Career School-Pittsburgh",
//     value: "All-State Career School-Pittsburgh"
//   },
//   {
//     label: "Carlos F Daniels Area Vocational School",
//     value: "Carlos F Daniels Area Vocational School"
//   },
//   {
//     label: "Serbias Technical College",
//     value: "Serbias Technical College"
//   },
//   {
//     label: "Colegio Tecnologico y Comercial de Puerto Rico",
//     value: "Colegio Tecnologico y Comercial de Puerto Rico"
//   },
//   {
//     label: "Quality Technical and Beauty College",
//     value: "Quality Technical and Beauty College"
//   },
//   { label: "D'Mart Institute", value: "D'Mart Institute" },
//   {
//     label: "Automeca Technical College-Aguadilla",
//     value: "Automeca Technical College-Aguadilla"
//   },
//   {
//     label: "Fortis Institute-Cookeville",
//     value: "Fortis Institute-Cookeville"
//   },
//   { label: "North Central Institute", value: "North Central Institute" },
//   {
//     label: "Pipo Academy of Hair Design",
//     value: "Pipo Academy of Hair Design"
//   },
//   {
//     label: "Tint School of Makeup and Cosmetology-Dallas",
//     value: "Tint School of Makeup and Cosmetology-Dallas"
//   },
//   { label: "United Technical Center", value: "United Technical Center" },
//   {
//     label: "Charles H McCann Technical School",
//     value: "Charles H McCann Technical School"
//   },
//   {
//     label: "Ailano School of Cosmetology",
//     value: "Ailano School of Cosmetology"
//   },
//   {
//     label: "Carsten Institute of Cosmetology",
//     value: "Carsten Institute of Cosmetology"
//   },
//   {
//     label: "Central California School",
//     value: "Central California School"
//   },
//   {
//     label: "Mercy Hospital School of Practical Nursing-Plantation General Hospital",
//     value: "Mercy Hospital School of Practical Nursing-Plantation General Hospital"
//   },
//   {
//     label: "Marion County Community Technical and Adult Education Center",
//     value: "Marion County Community Technical and Adult Education Center"
//   },
//   {
//     label: "Rivertown School of Beauty Barber Skin Care and Nails",
//     value: "Rivertown School of Beauty Barber Skin Care and Nails"
//   },
//   {
//     label: "Atlanta Institute of Music",
//     value: "Atlanta Institute of Music"
//   },
//   {
//     label: "Illinois Center for Broadcasting",
//     value: "Illinois Center for Broadcasting"
//   },
//   {
//     label: "Marion Community Schools-Tucker Career & Technology Center",
//     value: "Marion Community Schools-Tucker Career & Technology Center"
//   },
//   { label: "St Louis Hair Academy", value: "St Louis Hair Academy" },
//   {
//     label: "New Dimensions School of Hair Design",
//     value: "New Dimensions School of Hair Design"
//   },
//   { label: "Adirondack Beauty School", value: "Adirondack Beauty School" },
//   {
//     label: "Forbes Road Career and Technology Center",
//     value: "Forbes Road Career and Technology Center"
//   },
//   {
//     label: "Jna Institute of Culinary Arts",
//     value: "Jna Institute of Culinary Arts"
//   },
//   {
//     label: "Cortiva Institute-Seattle",
//     value: "Cortiva Institute-Seattle"
//   },
//   {
//     label: "Putnam Career and Technical Center",
//     value: "Putnam Career and Technical Center"
//   },
//   {
//     label: "Argosy University-Washington DC",
//     value: "Argosy University-Washington DC"
//   },
//   {
//     label: "Crawford County Career and Technical Center Practical Nursing Program",
//     value: "Crawford County Career and Technical Center Practical Nursing Program"
//   },
//   {
//     label: "University of Phoenix-Sacramento Valley Campus",
//     value: "University of Phoenix-Sacramento Valley Campus"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Georgia",
//     value: "DeVry University's Keller Graduate School of Management-Georgia"
//   },
//   {
//     label: "Texas College of Cosmetology-San Angelo",
//     value: "Texas College of Cosmetology-San Angelo"
//   },
//   {
//     label: "Beauty Schools of America-Hialeah",
//     value: "Beauty Schools of America-Hialeah"
//   },
//   {
//     label: "Automeca Technical College-Bayamon",
//     value: "Automeca Technical College-Bayamon"
//   },
//   {
//     label: "Automeca Technical College-Caguas",
//     value: "Automeca Technical College-Caguas"
//   },
//   {
//     label: "Automeca Technical College-Ponce",
//     value: "Automeca Technical College-Ponce"
//   },
//   {
//     label: "Everest University-Melbourne",
//     value: "Everest University-Melbourne"
//   },
//   {
//     label: "Centura College-Chesapeake",
//     value: "Centura College-Chesapeake"
//   },
//   {
//     label: "University of Phoenix-Hawaii Campus",
//     value: "University of Phoenix-Hawaii Campus"
//   },
//   {
//     label: "Florida College of Natural Health-Miami",
//     value: "Florida College of Natural Health-Miami"
//   },
//   {
//     label: "Prism Career Institute-Cherry Hill",
//     value: "Prism Career Institute-Cherry Hill"
//   },
//   { label: "Amerian National College", value: "Amerian National College" },
//   {
//     label: "Francois D College of Hair Skin and Nails",
//     value: "Francois D College of Hair Skin and Nails"
//   },
//   {
//     label: "Southwest College of Naturopathic Medicine & Health Sciences",
//     value: "Southwest College of Naturopathic Medicine & Health Sciences"
//   },
//   {
//     label: "Escuela de Peritos Electricistas de Isabela Inc",
//     value: "Escuela de Peritos Electricistas de Isabela Inc"
//   },
//   {
//     label: "Virginia College-Birmingham",
//     value: "Virginia College-Birmingham"
//   },
//   {
//     label: "Virginia College-Huntsville",
//     value: "Virginia College-Huntsville"
//   },
//   {
//     label: "Yeshiva D'monsey Rabbinical College",
//     value: "Yeshiva D'monsey Rabbinical College"
//   },
//   {
//     label: "Lincoln Technical Institute-Mahwah",
//     value: "Lincoln Technical Institute-Mahwah"
//   },
//   {
//     label: "Career Technical Institute",
//     value: "Career Technical Institute"
//   },
//   { label: "Northwest Vista College", value: "Northwest Vista College" },
//   {
//     label: "ITT Technical Institute-Getzville",
//     value: "ITT Technical Institute-Getzville"
//   },
//   {
//     label: "Oconee Fall Line Technical College",
//     value: "Oconee Fall Line Technical College"
//   },
//   {
//     label: "York County Community College",
//     value: "York County Community College"
//   },
//   {
//     label: "Northeast Technology Center-Afton",
//     value: "Northeast Technology Center-Afton"
//   },
//   { label: "Western Suffolk BOCES", value: "Western Suffolk BOCES" },
//   {
//     label: "Sanford-Brown College-Atlanta",
//     value: "Sanford-Brown College-Atlanta"
//   },
//   {
//     label: "Sanford-Brown College-Middleburg Heights",
//     value: "Sanford-Brown College-Middleburg Heights"
//   },
//   {
//     label: "Arkansas State University-Mountain Home",
//     value: "Arkansas State University-Mountain Home"
//   },
//   {
//     label: "Columbia Gorge Community College",
//     value: "Columbia Gorge Community College"
//   },
//   {
//     label: "Arizona State University-Polytechnic",
//     value: "Arizona State University-Polytechnic"
//   },
//   {
//     label: "Colleen O'Haras Beauty Academy",
//     value: "Colleen O'Haras Beauty Academy"
//   },
//   {
//     label: "Bakke Graduate University",
//     value: "Bakke Graduate University"
//   },
//   {
//     label: "Tillamook Bay Community College",
//     value: "Tillamook Bay Community College"
//   },
//   { label: "Arizona Board of Regents", value: "Arizona Board of Regents" },
//   {
//     label: "Argosy University-Schaumburg",
//     value: "Argosy University-Schaumburg"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-California",
//     value: "DeVry University's Keller Graduate School of Management-California"
//   },
//   {
//     label: "Manhattan School of Computer Technology",
//     value: "Manhattan School of Computer Technology"
//   },
//   {
//     label: "University of Phoenix-Louisiana Campus",
//     value: "University of Phoenix-Louisiana Campus"
//   },
//   {
//     label: "University of Phoenix-Detroit Campus",
//     value: "University of Phoenix-Detroit Campus"
//   },
//   {
//     label: "Brown Mackie College-Hopkinsville",
//     value: "Brown Mackie College-Hopkinsville"
//   },
//   {
//     label: "Indian Capital Technology Center-Sallisaw",
//     value: "Indian Capital Technology Center-Sallisaw"
//   },
//   {
//     label: "Indian Capital Technology Center-Stilwell",
//     value: "Indian Capital Technology Center-Stilwell"
//   },
//   {
//     label: "Globelle Technical Institute",
//     value: "Globelle Technical Institute"
//   },
//   { label: "Hairitage Hair Academy", value: "Hairitage Hair Academy" },
//   {
//     label: "Houghton Lake Institute of Cosmetology",
//     value: "Houghton Lake Institute of Cosmetology"
//   },
//   { label: "Arizona College-Glendale", value: "Arizona College-Glendale" },
//   {
//     label: "Vanguard-Sentinel Adult Career and Technology Center",
//     value: "Vanguard-Sentinel Adult Career and Technology Center"
//   },
//   {
//     label: "House of Heavilin Beauty College-Raymore",
//     value: "House of Heavilin Beauty College-Raymore"
//   },
//   { label: "Living Arts College", value: "Living Arts College" },
//   {
//     label: "New York Conservatory for Dramatic Arts",
//     value: "New York Conservatory for Dramatic Arts"
//   },
//   {
//     label: "Eastern International College-Jersey City",
//     value: "Eastern International College-Jersey City"
//   },
//   { label: "Academia Serrant Inc", value: "Academia Serrant Inc" },
//   {
//     label: "San Joaquin Valley College-Fresno Aviation",
//     value: "San Joaquin Valley College-Fresno Aviation"
//   },
//   {
//     label: "Champion Institute of Cosmetology",
//     value: "Champion Institute of Cosmetology"
//   },
//   { label: "Pacific College", value: "Pacific College" },
//   {
//     label: "American College of Healthcare",
//     value: "American College of Healthcare"
//   },
//   {
//     label: "Compu-Med Vocational Careers Corp",
//     value: "Compu-Med Vocational Careers Corp"
//   },
//   {
//     label: "Professional Electrical School Inc",
//     value: "Professional Electrical School Inc"
//   },
//   {
//     label: "American Commercial College-Wichita Falls",
//     value: "American Commercial College-Wichita Falls"
//   },
//   {
//     label: "Midwestern University-Glendale",
//     value: "Midwestern University-Glendale"
//   },
//   {
//     label: "Oregon Coast Community College",
//     value: "Oregon Coast Community College"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Pasadena",
//     value: "Le Cordon Bleu College of Culinary Arts-Pasadena"
//   },
//   {
//     label: "Gwinnett College-Sandy Springs",
//     value: "Gwinnett College-Sandy Springs"
//   },
//   {
//     label: "Central Mass School of Massage and Therapy Inc",
//     value: "Central Mass School of Massage and Therapy Inc"
//   },
//   {
//     label: "Lincoln Technical Institute-Brockton",
//     value: "Lincoln Technical Institute-Brockton"
//   },
//   {
//     label: "Mildred Elley-Pittsfield Campus",
//     value: "Mildred Elley-Pittsfield Campus"
//   },
//   {
//     label: "Embry-Riddle Aeronautical University-Worldwide",
//     value: "Embry-Riddle Aeronautical University-Worldwide"
//   },
//   {
//     label: "Computer Systems Institute",
//     value: "Computer Systems Institute"
//   },
//   {
//     label: "Merkaz Bnos-Business School",
//     value: "Merkaz Bnos-Business School"
//   },
//   {
//     label: "Lia Schorr Institute of Cosmetic Skin Care Training",
//     value: "Lia Schorr Institute of Cosmetic Skin Care Training"
//   },
//   {
//     label: "ITT Technical Institute-Webster",
//     value: "ITT Technical Institute-Webster"
//   },
//   { label: "CET-Alexandria", value: "CET-Alexandria" },
//   { label: "CET-Durham", value: "CET-Durham" },
//   {
//     label: "Aviation Institute of Maintenance-Chesapeake",
//     value: "Aviation Institute of Maintenance-Chesapeake"
//   },
//   {
//     label: "Centura College-Richmond Main",
//     value: "Centura College-Richmond Main"
//   },
//   {
//     label: "Technical Education Center-Osceola",
//     value: "Technical Education Center-Osceola"
//   },
//   {
//     label: "Miami Ad School-Miami Beach",
//     value: "Miami Ad School-Miami Beach"
//   },
//   {
//     label: "Green Country Technology Center",
//     value: "Green Country Technology Center"
//   },
//   {
//     label: "Nova College de Puerto Rico",
//     value: "Nova College de Puerto Rico"
//   },
//   {
//     label: "Styles and Profiles Beauty College",
//     value: "Styles and Profiles Beauty College"
//   },
//   {
//     label: "John Wesley International Barber and Beauty College",
//     value: "John Wesley International Barber and Beauty College"
//   },
//   { label: "Platt College-Lawton", value: "Platt College-Lawton" },
//   {
//     label: "Southeastern College-Greenacres",
//     value: "Southeastern College-Greenacres"
//   },
//   {
//     label: "Ottawa University-Milwaukee",
//     value: "Ottawa University-Milwaukee"
//   },
//   { label: "Argosy University-Tampa", value: "Argosy University-Tampa" },
//   {
//     label: "The Illinois Institute of Art-Schaumburg",
//     value: "The Illinois Institute of Art-Schaumburg"
//   },
//   {
//     label: "Star Truck Driving School-Bensenville",
//     value: "Star Truck Driving School-Bensenville"
//   },
//   {
//     label: "Cambria-Rowe Business College-Indiana",
//     value: "Cambria-Rowe Business College-Indiana"
//   },
//   {
//     label: "Facultad de Derecho Eugenio Maria de Hostos",
//     value: "Facultad de Derecho Eugenio Maria de Hostos"
//   },
//   {
//     label: "Klamath Community College",
//     value: "Klamath Community College"
//   },
//   {
//     label: "San Bernardino Community College District",
//     value: "San Bernardino Community College District"
//   },
//   {
//     label: "The Art Institute of Phoenix",
//     value: "The Art Institute of Phoenix"
//   },
//   { label: "Aerosim Flight Academy", value: "Aerosim Flight Academy" },
//   {
//     label: "American College of Acupuncture and Oriental Med",
//     value: "American College of Acupuncture and Oriental Med"
//   },
//   {
//     label: "AOMA Graduate School of Integrative Medicine",
//     value: "AOMA Graduate School of Integrative Medicine"
//   },
//   {
//     label: "Arlington Medical Institute",
//     value: "Arlington Medical Institute"
//   },
//   { label: "Urban College of Boston", value: "Urban College of Boston" },
//   {
//     label: "ITT Technical Institute-Henderson",
//     value: "ITT Technical Institute-Henderson"
//   },
//   { label: "Anthem College-Minnesota", value: "Anthem College-Minnesota" },
//   {
//     label: "Colorado Technical University-Greenwood Village",
//     value: "Colorado Technical University-Greenwood Village"
//   },
//   {
//     label: "Branford Hall Career Institute-Windsor Campus",
//     value: "Branford Hall Career Institute-Windsor Campus"
//   },
//   { label: "Heald College-Portland", value: "Heald College-Portland" },
//   {
//     label: "Golf Academy of America-Altamonte Springs",
//     value: "Golf Academy of America-Altamonte Springs"
//   },
//   {
//     label: "Golf Academy of America-Phoenix",
//     value: "Golf Academy of America-Phoenix"
//   },
//   {
//     label: "Everest College-Merrillville",
//     value: "Everest College-Merrillville"
//   },
//   {
//     label: "Strayer University-Maryland",
//     value: "Strayer University-Maryland"
//   },
//   {
//     label: "Empire Beauty School-Bordentown",
//     value: "Empire Beauty School-Bordentown"
//   },
//   {
//     label: "Empire Beauty School-Monroeville",
//     value: "Empire Beauty School-Monroeville"
//   },
//   {
//     label: "Southern Careers Institute-San Antonio",
//     value: "Southern Careers Institute-San Antonio"
//   },
//   {
//     label: "Virginia School of Massage",
//     value: "Virginia School of Massage"
//   },
//   {
//     label: "ITT Technical Institute-Miami",
//     value: "ITT Technical Institute-Miami"
//   },
//   {
//     label: "Cayce Reilly School of Massotherapy",
//     value: "Cayce Reilly School of Massotherapy"
//   },
//   { label: "CET-Sacramento", value: "CET-Sacramento" },
//   {
//     label: "ITT Technical Institute-Harrisburg",
//     value: "ITT Technical Institute-Harrisburg"
//   },
//   {
//     label: "ITT Technical Institute-Tarentum",
//     value: "ITT Technical Institute-Tarentum"
//   },
//   {
//     label: "ITT Technical Institute-Norwood",
//     value: "ITT Technical Institute-Norwood"
//   },
//   {
//     label: "ITT Technical Institute-Strongsville",
//     value: "ITT Technical Institute-Strongsville"
//   },
//   {
//     label: "Prism Career Institute-West Atlantic City",
//     value: "Prism Career Institute-West Atlantic City"
//   },
//   {
//     label: "Everest Institute-Marietta",
//     value: "Everest Institute-Marietta"
//   },
//   { label: "The Creative Center", value: "The Creative Center" },
//   { label: "Studio Jewelers", value: "Studio Jewelers" },
//   { label: "Praxis Institute", value: "Praxis Institute" },
//   {
//     label: "American College of Traditional Chinese Medicine",
//     value: "American College of Traditional Chinese Medicine"
//   },
//   { label: "Herndon Career Center", value: "Herndon Career Center" },
//   {
//     label: "San Juan Bautista School of Medicine",
//     value: "San Juan Bautista School of Medicine"
//   },
//   {
//     label: "Texas Health and Science University",
//     value: "Texas Health and Science University"
//   },
//   { label: "Carver Career Center", value: "Carver Career Center" },
//   {
//     label: "New Hampshire Institute of Art",
//     value: "New Hampshire Institute of Art"
//   },
//   {
//     label: "StenoTech Career Institute-Fairfield",
//     value: "StenoTech Career Institute-Fairfield"
//   },
//   {
//     label: "Cayuga Onondaga BOCES-Practical Nursing Program",
//     value: "Cayuga Onondaga BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Clearfield County Career and Technology Center",
//     value: "Clearfield County Career and Technology Center"
//   },
//   {
//     label: "Colegio de Cinematograf�a Artes y Television",
//     value: "Colegio de Cinematograf�a Artes y Television"
//   },
//   {
//     label: "Delaware County Technical School-Practical Nursing Program",
//     value: "Delaware County Technical School-Practical Nursing Program"
//   },
//   { label: "Everest College-Torrance", value: "Everest College-Torrance" },
//   {
//     label: "The Institute for Health Education",
//     value: "The Institute for Health Education"
//   },
//   {
//     label: "Mid-Del Technology Center",
//     value: "Mid-Del Technology Center"
//   },
//   { label: "BIR Training Center", value: "BIR Training Center" },
//   {
//     label: "New York Institute of Massage Inc",
//     value: "New York Institute of Massage Inc"
//   },
//   {
//     label: "Jolie Hair and Beauty Academy-Ludlow",
//     value: "Jolie Hair and Beauty Academy-Ludlow"
//   },
//   {
//     label: "Dutchess BOCES-Practical Nursing Program",
//     value: "Dutchess BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Escuela Tecnica de Electricidad",
//     value: "Escuela Tecnica de Electricidad"
//   },
//   {
//     label: "Institute of Technology Inc",
//     value: "Institute of Technology Inc"
//   },
//   { label: "Garnet Career Center", value: "Garnet Career Center" },
//   {
//     label: "Bristol Technical Education Center",
//     value: "Bristol Technical Education Center"
//   },
//   {
//     label: "Genesee Valley BOCES-Practical Nursing Program",
//     value: "Genesee Valley BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Hamilton Fulton Montgomery BOCES-Practical Nursing Program",
//     value: "Hamilton Fulton Montgomery BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Henrico County-Saint Marys Hospital School of Practical Nursing",
//     value: "Henrico County-Saint Marys Hospital School of Practical Nursing"
//   },
//   {
//     label: "Herkimer County BOCES-Practical Nursing Program",
//     value: "Herkimer County BOCES-Practical Nursing Program"
//   },
//   {
//     label: "International Beauty College",
//     value: "International Beauty College"
//   },
//   {
//     label: "Dewey University-Hato Rey",
//     value: "Dewey University-Hato Rey"
//   },
//   {
//     label: "Cape Coral Institute of Technology",
//     value: "Cape Coral Institute of Technology"
//   },
//   {
//     label: "Massachusetts General Hospital Dietetic Internship",
//     value: "Massachusetts General Hospital Dietetic Internship"
//   },
//   {
//     label: "Mercy Hospital School of Nursing",
//     value: "Mercy Hospital School of Nursing"
//   },
//   { label: "American Beauty Academy", value: "American Beauty Academy" },
//   { label: "Northland Career Center", value: "Northland Career Center" },
//   {
//     label: "Norwich Technical High School",
//     value: "Norwich Technical High School"
//   },
//   {
//     label: "Ocean County Vocational-Technical School",
//     value: "Ocean County Vocational-Technical School"
//   },
//   {
//     label: "Putnam Westchester BOCES-Practical Nursing Program",
//     value: "Putnam Westchester BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Sullivan County BOCES-Practical Nursing Program",
//     value: "Sullivan County BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Kaplan College-San Antonio-Ingram",
//     value: "Kaplan College-San Antonio-Ingram"
//   },
//   {
//     label: "Trinity College of Puerto Rico",
//     value: "Trinity College of Puerto Rico"
//   },
//   {
//     label: "Virginia Sewing Machines and School Center",
//     value: "Virginia Sewing Machines and School Center"
//   },
//   {
//     label: "Vogue Beauty and Barber School",
//     value: "Vogue Beauty and Barber School"
//   },
//   {
//     label: "Yeshiva of the Telshe Alumni",
//     value: "Yeshiva of the Telshe Alumni"
//   },
//   {
//     label: "Northeast Technology Center-Kansas",
//     value: "Northeast Technology Center-Kansas"
//   },
//   {
//     label: "Kenneth Shuler School of Cosmetology-Rock Hill",
//     value: "Kenneth Shuler School of Cosmetology-Rock Hill"
//   },
//   {
//     label: "South Orange County Community College District",
//     value: "South Orange County Community College District"
//   },
//   {
//     label: "DeVry College of New York",
//     value: "DeVry College of New York"
//   },
//   { label: "DeVry University-Indiana", value: "DeVry University-Indiana" },
//   {
//     label: "University of Phoenix-Western Washington Campus",
//     value: "University of Phoenix-Western Washington Campus"
//   },
//   {
//     label: "University of Phoenix-Central Florida Campus",
//     value: "University of Phoenix-Central Florida Campus"
//   },
//   {
//     label: "University of Phoenix-Oregon Campus",
//     value: "University of Phoenix-Oregon Campus"
//   },
//   { label: "CET-El Paso", value: "CET-El Paso" },
//   { label: "Kaplan College-Riverside", value: "Kaplan College-Riverside" },
//   {
//     label: "Appalachian School of Law",
//     value: "Appalachian School of Law"
//   },
//   {
//     label: "LIU Hudson at Westchester",
//     value: "LIU Hudson at Westchester"
//   },
//   { label: "Platt College-Ontario", value: "Platt College-Ontario" },
//   {
//     label: "Delaware College of Art and Design",
//     value: "Delaware College of Art and Design"
//   },
//   {
//     label: "The Art Institute of California-Argosy University Los Angeles",
//     value: "The Art Institute of California-Argosy University Los Angeles"
//   },
//   {
//     label: "American University of Health Sciences",
//     value: "American University of Health Sciences"
//   },
//   {
//     label: "Career Networks Institute",
//     value: "Career Networks Institute"
//   },
//   { label: "Monty Tech", value: "Monty Tech" },
//   {
//     label: "CHOICE High School and Technical Center",
//     value: "CHOICE High School and Technical Center"
//   },
//   {
//     label: "Lincoln Technical Institute-Lincoln",
//     value: "Lincoln Technical Institute-Lincoln"
//   },
//   {
//     label: "Wayne County Schools Career Center",
//     value: "Wayne County Schools Career Center"
//   },
//   {
//     label: "Blessing Hospital School of Medical Laboratory Technology",
//     value: "Blessing Hospital School of Medical Laboratory Technology"
//   },
//   {
//     label: "Carolinas College of Health Sciences",
//     value: "Carolinas College of Health Sciences"
//   },
//   {
//     label: "Lester E Cox Medical Center-School of Medical Technology",
//     value: "Lester E Cox Medical Center-School of Medical Technology"
//   },
//   {
//     label: "Western Governors University",
//     value: "Western Governors University"
//   },
//   {
//     label: "Santa Barbara Business College-Ventura",
//     value: "Santa Barbara Business College-Ventura"
//   },
//   {
//     label: "Sullivan and Cogliano Training Center",
//     value: "Sullivan and Cogliano Training Center"
//   },
//   {
//     label: "Herzing University-Kenner",
//     value: "Herzing University-Kenner"
//   },
//   {
//     label: "Spencerian College-Lexington",
//     value: "Spencerian College-Lexington"
//   },
//   {
//     label: "Florida Gulf Coast University",
//     value: "Florida Gulf Coast University"
//   },
//   {
//     label: "Seacoast Career Schools-Sanford Campus",
//     value: "Seacoast Career Schools-Sanford Campus"
//   },
//   {
//     label: "Little Priest Tribal College",
//     value: "Little Priest Tribal College"
//   },
//   { label: "National Labor College", value: "National Labor College" },
//   {
//     label: "ITT Technical Institute-Richardson",
//     value: "ITT Technical Institute-Richardson"
//   },
//   {
//     label: "South Louisiana Community College",
//     value: "South Louisiana Community College"
//   },
//   {
//     label: "HRDE-Stanley Technical Institute-Parkersburg",
//     value: "HRDE-Stanley Technical Institute-Parkersburg"
//   },
//   {
//     label: "Pima Medical Institute-Chula Vista",
//     value: "Pima Medical Institute-Chula Vista"
//   },
//   {
//     label: "Lincoln College of Technology-Marietta",
//     value: "Lincoln College of Technology-Marietta"
//   },
//   {
//     label: "Academy of Hair Design-Lufkin",
//     value: "Academy of Hair Design-Lufkin"
//   },
//   {
//     label: "Academy of Hair Design-Beaumont",
//     value: "Academy of Hair Design-Beaumont"
//   },
//   {
//     label: "Baltimore School of Massage-Linthicum",
//     value: "Baltimore School of Massage-Linthicum"
//   },
//   {
//     label: "Charter College-Canyon Country",
//     value: "Charter College-Canyon Country"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Worcester",
//     value: "Toni & Guy Hairdressing Academy-Worcester"
//   },
//   {
//     label: "Northwest HVAC/R Training Center",
//     value: "Northwest HVAC/R Training Center"
//   },
//   {
//     label: "L T International Beauty School",
//     value: "L T International Beauty School"
//   },
//   {
//     label: "Michigan Jewish Institute",
//     value: "Michigan Jewish Institute"
//   },
//   { label: "Myotherapy Institute", value: "Myotherapy Institute" },
//   {
//     label: "Florida College of Integrative Medicine",
//     value: "Florida College of Integrative Medicine"
//   },
//   {
//     label: "New Professions Technical Institute",
//     value: "New Professions Technical Institute"
//   },
//   {
//     label: "Strand College of Hair Design",
//     value: "Strand College of Hair Design"
//   },
//   {
//     label: "Cosmetology Career Institute",
//     value: "Cosmetology Career Institute"
//   },
//   {
//     label: "Branford Hall Career Institute-Southington Campus",
//     value: "Branford Hall Career Institute-Southington Campus"
//   },
//   { label: "City College-Miami", value: "City College-Miami" },
//   {
//     label: "ITT Technical Institute-Arnold",
//     value: "ITT Technical Institute-Arnold"
//   },
//   {
//     label: "ITT Technical Institute-Oak Brook",
//     value: "ITT Technical Institute-Oak Brook"
//   },
//   {
//     label: "ITT Technical Institute-Albany",
//     value: "ITT Technical Institute-Albany"
//   },
//   {
//     label: "ITT Technical Institute-Liverpool",
//     value: "ITT Technical Institute-Liverpool"
//   },
//   { label: "Ilisagvik College", value: "Ilisagvik College" },
//   {
//     label: "The Community College of Baltimore County",
//     value: "The Community College of Baltimore County"
//   },
//   {
//     label: "Golf Academy of America-Myrtle Beach",
//     value: "Golf Academy of America-Myrtle Beach"
//   },
//   {
//     label: "Florida Coastal School of Law",
//     value: "Florida Coastal School of Law"
//   },
//   {
//     label: "White Earth Tribal and Community College",
//     value: "White Earth Tribal and Community College"
//   },
//   {
//     label: "Centura College-North Charleston",
//     value: "Centura College-North Charleston"
//   },
//   {
//     label: "Blue Cliff College-Metairie",
//     value: "Blue Cliff College-Metairie"
//   },
//   {
//     label: "Creative Images Institute of Cosmetology-North Dayton",
//     value: "Creative Images Institute of Cosmetology-North Dayton"
//   },
//   {
//     label: "Dewey University-Carolina",
//     value: "Dewey University-Carolina"
//   },
//   {
//     label: "Yeshiva College of the Nations Capital",
//     value: "Yeshiva College of the Nations Capital"
//   },
//   {
//     label: "University of Phoenix-South Florida Campus",
//     value: "University of Phoenix-South Florida Campus"
//   },
//   {
//     label: "University of Phoenix-North Florida Campus",
//     value: "University of Phoenix-North Florida Campus"
//   },
//   {
//     label: "University of Phoenix-West Florida Campus",
//     value: "University of Phoenix-West Florida Campus"
//   },
//   {
//     label: "University of Phoenix-Maryland Campus",
//     value: "University of Phoenix-Maryland Campus"
//   },
//   {
//     label: "University of Phoenix-Oklahoma City Campus",
//     value: "University of Phoenix-Oklahoma City Campus"
//   },
//   {
//     label: "University of Phoenix-Tulsa Campus",
//     value: "University of Phoenix-Tulsa Campus"
//   },
//   {
//     label: "Louisiana State University Health Sciences Center-Shreveport",
//     value: "Louisiana State University Health Sciences Center-Shreveport"
//   },
//   {
//     label: "Central Career Institute LLC",
//     value: "Central Career Institute LLC"
//   },
//   {
//     label: "Franklin Career Institute",
//     value: "Franklin Career Institute"
//   },
//   {
//     label: "Montessori Institute of Milwaukee",
//     value: "Montessori Institute of Milwaukee"
//   },
//   { label: "Hair Academy II", value: "Hair Academy II" },
//   { label: "Pryor Beauty College", value: "Pryor Beauty College" },
//   {
//     label: "Argosy University-Phoenix",
//     value: "Argosy University-Phoenix"
//   },
//   {
//     label: "Mr Leon's School of Hair Design-Lewiston",
//     value: "Mr Leon's School of Hair Design-Lewiston"
//   },
//   {
//     label: "Vatterott College-St Joseph",
//     value: "Vatterott College-St Joseph"
//   },
//   {
//     label: "Vatterott College-Sunset Hills",
//     value: "Vatterott College-Sunset Hills"
//   },
//   { label: "Anthem College-Orlando", value: "Anthem College-Orlando" },
//   {
//     label: "Southwest Acupuncture College-Boulder",
//     value: "Southwest Acupuncture College-Boulder"
//   },
//   {
//     label: "Utah College of Massage Therapy-Utah Valley",
//     value: "Utah College of Massage Therapy-Utah Valley"
//   },
//   {
//     label: "River Parishes Community College",
//     value: "River Parishes Community College"
//   },
//   {
//     label: "Watson School of Biological Sciences at Cold Spring Harbor Laboratory",
//     value: "Watson School of Biological Sciences at Cold Spring Harbor Laboratory"
//   },
//   { label: "Los Angeles Film School", value: "Los Angeles Film School" },
//   {
//     label: "Argosy University-Orange County",
//     value: "Argosy University-Orange County"
//   },
//   { label: "Dewey University-Bayamon", value: "Dewey University-Bayamon" },
//   {
//     label: "National American University-Bloomington",
//     value: "National American University-Bloomington"
//   },
//   {
//     label: "A.B.I. School of Barbering & Cosmetology of Chelsea Inc.",
//     value: "A.B.I. School of Barbering & Cosmetology of Chelsea Inc."
//   },
//   { label: "Century College", value: "Century College" },
//   { label: "FINE Mortuary College", value: "FINE Mortuary College" },
//   {
//     label: "International Baptist College and Seminary",
//     value: "International Baptist College and Seminary"
//   },
//   { label: "The Medical Arts School", value: "The Medical Arts School" },
//   { label: "Fortis College-Foley", value: "Fortis College-Foley" },
//   { label: "Medical Training College", value: "Medical Training College" },
//   {
//     label: "Professional Training Centers",
//     value: "Professional Training Centers"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Carrollton",
//     value: "Toni & Guy Hairdressing Academy-Carrollton"
//   },
//   {
//     label: "University of Connecticut-Tri-Campus",
//     value: "University of Connecticut-Tri-Campus"
//   },
//   {
//     label: "University of Connecticut-Avery Point",
//     value: "University of Connecticut-Avery Point"
//   },
//   {
//     label: "University of Connecticut-Stamford",
//     value: "University of Connecticut-Stamford"
//   },
//   {
//     label: "ITT Technical Institute-Saint Rose",
//     value: "ITT Technical Institute-Saint Rose"
//   },
//   {
//     label: "ITT Technical Institute-Richmond",
//     value: "ITT Technical Institute-Richmond"
//   },
//   {
//     label: "Vatterott College-Oklahoma City",
//     value: "Vatterott College-Oklahoma City"
//   },
//   {
//     label: "University of Management and Technology",
//     value: "University of Management and Technology"
//   },
//   {
//     label: "Baton Rouge Community College",
//     value: "Baton Rouge Community College"
//   },
//   {
//     label: "ITT Technical Institute-Lathrop",
//     value: "ITT Technical Institute-Lathrop"
//   },
//   {
//     label: "International Yacht Restoration School",
//     value: "International Yacht Restoration School"
//   },
//   {
//     label: "Linfield College-School of Nursing",
//     value: "Linfield College-School of Nursing"
//   },
//   {
//     label: "Linfield College-Adult Degree Program",
//     value: "Linfield College-Adult Degree Program"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Virginia",
//     value: "DeVry University's Keller Graduate School of Management-Virginia"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Wisconsin",
//     value: "DeVry University's Keller Graduate School of Management-Wisconsin"
//   },
//   {
//     label: "Academy of Massage Therapy",
//     value: "Academy of Massage Therapy"
//   },
//   {
//     label: "Star Career Academy-Syosset",
//     value: "Star Career Academy-Syosset"
//   },
//   {
//     label: "Midwest Technical Institute-Springfield",
//     value: "Midwest Technical Institute-Springfield"
//   },
//   {
//     label: "Advanced Barber College and Hair Design",
//     value: "Advanced Barber College and Hair Design"
//   },
//   {
//     label: "The College of Health Care Professions-Austin",
//     value: "The College of Health Care Professions-Austin"
//   },
//   { label: "The English Center", value: "The English Center" },
//   { label: "ICDC College", value: "ICDC College" },
//   {
//     label: "Monteclaro Escuela de Hoteleria y Artes Culinarias",
//     value: "Monteclaro Escuela de Hoteleria y Artes Culinarias"
//   },
//   {
//     label: "New Community Workforce Development Center",
//     value: "New Community Workforce Development Center"
//   },
//   { label: "Dallas Nursing Institute", value: "Dallas Nursing Institute" },
//   {
//     label: "Professional Golfers Career College",
//     value: "Professional Golfers Career College"
//   },
//   {
//     label: "Richmond School of Health and Technology",
//     value: "Richmond School of Health and Technology"
//   },
//   {
//     label: "Milan Institute-San Antonio Ingram",
//     value: "Milan Institute-San Antonio Ingram"
//   },
//   { label: "Westwood College-Anaheim", value: "Westwood College-Anaheim" },
//   {
//     label: "Rudae's School of Beauty Culture-Ft Wayne",
//     value: "Rudae's School of Beauty Culture-Ft Wayne"
//   },
//   {
//     label: "InterCoast Colleges-Burbank",
//     value: "InterCoast Colleges-Burbank"
//   },
//   {
//     label: "Carrington College California-Antioch",
//     value: "Carrington College California-Antioch"
//   },
//   {
//     label: "Carrington College California-San Jose",
//     value: "Carrington College California-San Jose"
//   },
//   {
//     label: "Lincoln Technical Institute-Cromwell",
//     value: "Lincoln Technical Institute-Cromwell"
//   },
//   {
//     label: "Stevens-Henager College-Murray",
//     value: "Stevens-Henager College-Murray"
//   },
//   { label: "Brookline College-Tucson", value: "Brookline College-Tucson" },
//   {
//     label: "Everest Institute-Jonesboro",
//     value: "Everest Institute-Jonesboro"
//   },
//   {
//     label: "McCann School of Business & Technology",
//     value: "McCann School of Business & Technology"
//   },
//   {
//     label: "Carrington College California-Pleasant Hill",
//     value: "Carrington College California-Pleasant Hill"
//   },
//   {
//     label: "Ridley-Lowell Business & Technical Institute-Poughkeepsie",
//     value: "Ridley-Lowell Business & Technical Institute-Poughkeepsie"
//   },
//   {
//     label: "Florida College of Natural Health-Maitland",
//     value: "Florida College of Natural Health-Maitland"
//   },
//   {
//     label: "Florida College of Natural Health-Bradenton",
//     value: "Florida College of Natural Health-Bradenton"
//   },
//   {
//     label: "Modern Hairstyling Institute-Carolina",
//     value: "Modern Hairstyling Institute-Carolina"
//   },
//   {
//     label: "University of Phoenix-Southern Colorado Campus",
//     value: "University of Phoenix-Southern Colorado Campus"
//   },
//   {
//     label: "University of Phoenix-West Michigan Campus",
//     value: "University of Phoenix-West Michigan Campus"
//   },
//   { label: "Stratford University", value: "Stratford University" },
//   {
//     label: "Universal Technical Institute of California Inc",
//     value: "Universal Technical Institute of California Inc"
//   },
//   {
//     label: "American InterContinental University-Atlanta",
//     value: "American InterContinental University-Atlanta"
//   },
//   {
//     label: "American InterContinental University-South Florida",
//     value: "American InterContinental University-South Florida"
//   },
//   {
//     label: "University of Phoenix-Philadelphia Campus",
//     value: "University of Phoenix-Philadelphia Campus"
//   },
//   {
//     label: "University of Phoenix-Pittsburgh Campus",
//     value: "University of Phoenix-Pittsburgh Campus"
//   },
//   {
//     label: "Everest Institute-Decatur",
//     value: "Everest Institute-Decatur"
//   },
//   {
//     label: "Everest College-Chesapeake",
//     value: "Everest College-Chesapeake"
//   },
//   {
//     label: "Everest Institute-Greenspoint",
//     value: "Everest Institute-Greenspoint"
//   },
//   {
//     label: "Rancho Santiago Community College District Office",
//     value: "Rancho Santiago Community College District Office"
//   },
//   {
//     label: "The Academy of Hair Design Six",
//     value: "The Academy of Hair Design Six"
//   },
//   {
//     label: "Eastern West Virginia Community and Technical College",
//     value: "Eastern West Virginia Community and Technical College"
//   },
//   {
//     label: "Aviation Institute of Maintenance-Indianapolis",
//     value: "Aviation Institute of Maintenance-Indianapolis"
//   },
//   {
//     label: "Branford Hall Career Institute-Springfield Campus",
//     value: "Branford Hall Career Institute-Springfield Campus"
//   },
//   {
//     label: "Remington College-Little Rock Campus",
//     value: "Remington College-Little Rock Campus"
//   },
//   {
//     label: "Newbridge College-San Diego East",
//     value: "Newbridge College-San Diego East"
//   },
//   {
//     label: "Everest University-Jacksonville",
//     value: "Everest University-Jacksonville"
//   },
//   { label: "IVAEM College", value: "IVAEM College" },
//   {
//     label: "Midwest College of Oriental Medicine-Chicago",
//     value: "Midwest College of Oriental Medicine-Chicago"
//   },
//   {
//     label: "Lincoln Technical Institute-Hamden",
//     value: "Lincoln Technical Institute-Hamden"
//   },
//   {
//     label: "Argosy University-Seattle",
//     value: "Argosy University-Seattle"
//   },
//   {
//     label: "Carrington College-Spokane",
//     value: "Carrington College-Spokane"
//   },
//   {
//     label: "Texas School of Business-Friendswood",
//     value: "Texas School of Business-Friendswood"
//   },
//   {
//     label: "ITT Technical Institute-Wilmington",
//     value: "ITT Technical Institute-Wilmington"
//   },
//   {
//     label: "Pierce College at Puyallup",
//     value: "Pierce College at Puyallup"
//   },
//   {
//     label: "Texas Tech University System Administration",
//     value: "Texas Tech University System Administration"
//   },
//   { label: "DeVry University-Florida", value: "DeVry University-Florida" },
//   {
//     label: "Cascadia Community College",
//     value: "Cascadia Community College"
//   },
//   {
//     label: "University of Phoenix-St Louis Campus",
//     value: "University of Phoenix-St Louis Campus"
//   },
//   {
//     label: "Johnson & Wales University-Denver",
//     value: "Johnson & Wales University-Denver"
//   },
//   {
//     label: "University of Phoenix-Cleveland Campus",
//     value: "University of Phoenix-Cleveland Campus"
//   },
//   {
//     label: "Du Bois Business College-Huntingdon",
//     value: "Du Bois Business College-Huntingdon"
//   },
//   {
//     label: "Du Bois Business College-Oil City",
//     value: "Du Bois Business College-Oil City"
//   },
//   {
//     label: "DeVry University-Maryland",
//     value: "DeVry University-Maryland"
//   },
//   { label: "CBD College", value: "CBD College" },
//   {
//     label: "East West College of Natural Medicine",
//     value: "East West College of Natural Medicine"
//   },
//   { label: "Infinity Career College", value: "Infinity Career College" },
//   {
//     label: "Lincoln Technical Institute-Fern Park",
//     value: "Lincoln Technical Institute-Fern Park"
//   },
//   {
//     label: "Atlantic Institute of Oriental Medicine",
//     value: "Atlantic Institute of Oriental Medicine"
//   },
//   {
//     label: "ATS Institute of Technology",
//     value: "ATS Institute of Technology"
//   },
//   { label: "Bennett Career Institute", value: "Bennett Career Institute" },
//   {
//     label: "Blue Cliff College-Shreveport",
//     value: "Blue Cliff College-Shreveport"
//   },
//   {
//     label: "Blue Cliff College-Lafayette",
//     value: "Blue Cliff College-Lafayette"
//   },
//   { label: "Quest College", value: "Quest College" },
//   {
//     label: "Central Florida Institute",
//     value: "Central Florida Institute"
//   },
//   { label: "Community Care College", value: "Community Care College" },
//   {
//     label: "Marinello Schools of Beauty-Topeka",
//     value: "Marinello Schools of Beauty-Topeka"
//   },
//   { label: "Crossroads Bible College", value: "Crossroads Bible College" },
//   { label: "Erie 1 BOCES", value: "Erie 1 BOCES" },
//   { label: "Fayette Beauty Academy", value: "Fayette Beauty Academy" },
//   {
//     label: "HDS Truck Driving Institute",
//     value: "HDS Truck Driving Institute"
//   },
//   {
//     label: "International Training Careers",
//     value: "International Training Careers"
//   },
//   { label: "King's University", value: "King's University" },
//   {
//     label: "Lacy Cosmetology School-Aiken",
//     value: "Lacy Cosmetology School-Aiken"
//   },
//   {
//     label: "Fortis College-Baton Rouge",
//     value: "Fortis College-Baton Rouge"
//   },
//   { label: "My Le's Beauty College", value: "My Le's Beauty College" },
//   {
//     label: "New Concept Massage and Beauty School",
//     value: "New Concept Massage and Beauty School"
//   },
//   {
//     label: "New York College of Traditional Chinese Medicine",
//     value: "New York College of Traditional Chinese Medicine"
//   },
//   {
//     label: "Fortis College-Orange Park",
//     value: "Fortis College-Orange Park"
//   },
//   { label: "Northeastern Seminary", value: "Northeastern Seminary" },
//   { label: "Bryan College-Gold River", value: "Bryan College-Gold River" },
//   {
//     label: "Omega Institute of Cosmetology",
//     value: "Omega Institute of Cosmetology"
//   },
//   {
//     label: "Pacific Islands University",
//     value: "Pacific Islands University"
//   },
//   { label: "PCI College", value: "PCI College" },
//   { label: "Rosedale Bible College", value: "Rosedale Bible College" },
//   {
//     label: "American Career College at St Francis",
//     value: "American Career College at St Francis"
//   },
//   {
//     label: "Seattle Institute of Oriental Medicine",
//     value: "Seattle Institute of Oriental Medicine"
//   },
//   { label: "Shawnee Beauty College", value: "Shawnee Beauty College" },
//   {
//     label: "Acupuncture and Massage College",
//     value: "Acupuncture and Massage College"
//   },
//   {
//     label: "Southeastern School of Cosmetology",
//     value: "Southeastern School of Cosmetology"
//   },
//   {
//     label: "Universal Therapeutic Massage Institute",
//     value: "Universal Therapeutic Massage Institute"
//   },
//   {
//     label: "Upper Valley Educators Institute",
//     value: "Upper Valley Educators Institute"
//   },
//   { label: "Keck Graduate Institute", value: "Keck Graduate Institute" },
//   {
//     label: "Aviation Institute of Maintenance-Atlanta",
//     value: "Aviation Institute of Maintenance-Atlanta"
//   },
//   { label: "National Beauty College", value: "National Beauty College" },
//   {
//     label: "Star Career Academy-Egg Harbor",
//     value: "Star Career Academy-Egg Harbor"
//   },
//   {
//     label: "Empire Beauty School-Kennesaw",
//     value: "Empire Beauty School-Kennesaw"
//   },
//   {
//     label: "Anthem Career College-Nashville",
//     value: "Anthem Career College-Nashville"
//   },
//   { label: "Anthem College-Irving", value: "Anthem College-Irving" },
//   {
//     label: "Antioch University-System Administration",
//     value: "Antioch University-System Administration"
//   },
//   {
//     label: "Westwood College-River Oaks",
//     value: "Westwood College-River Oaks"
//   },
//   {
//     label: "ITT Technical Institute-Green Bay",
//     value: "ITT Technical Institute-Green Bay"
//   },
//   {
//     label: "Career Training Academy-Pittsburgh",
//     value: "Career Training Academy-Pittsburgh"
//   },
//   {
//     label: "Huntingdon County Career and Technology Center",
//     value: "Huntingdon County Career and Technology Center"
//   },
//   {
//     label: "Missouri College of Cosmetology North",
//     value: "Missouri College of Cosmetology North"
//   },
//   {
//     label: "New York Automotive and Diesel Institute",
//     value: "New York Automotive and Diesel Institute"
//   },
//   {
//     label: "Remington College-Baton Rouge Campus",
//     value: "Remington College-Baton Rouge Campus"
//   },
//   {
//     label: "Everest College-Ontario Metro",
//     value: "Everest College-Ontario Metro"
//   },
//   { label: "Kaplan College-Beaumont", value: "Kaplan College-Beaumont" },
//   { label: "Kaplan College-Laredo", value: "Kaplan College-Laredo" },
//   {
//     label: "The Art Institute of Washington",
//     value: "The Art Institute of Washington"
//   },
//   {
//     label: "Everest Institute-Dearborn",
//     value: "Everest Institute-Dearborn"
//   },
//   {
//     label: "Centura College-Richmond Westend",
//     value: "Centura College-Richmond Westend"
//   },
//   {
//     label: "New Saint Andrews College",
//     value: "New Saint Andrews College"
//   },
//   {
//     label: "Arkansas State University-Newport",
//     value: "Arkansas State University-Newport"
//   },
//   {
//     label: "Marlboro College-Graduate School",
//     value: "Marlboro College-Graduate School"
//   },
//   {
//     label: "University of Phoenix-Boston Campus",
//     value: "University of Phoenix-Boston Campus"
//   },
//   {
//     label: "University of Phoenix-Dallas Campus",
//     value: "University of Phoenix-Dallas Campus"
//   },
//   {
//     label: "University of Phoenix-Houston Campus",
//     value: "University of Phoenix-Houston Campus"
//   },
//   {
//     label: "University of Phoenix-Milwaukee Campus",
//     value: "University of Phoenix-Milwaukee Campus"
//   },
//   {
//     label: "University of Phoenix-Idaho Campus",
//     value: "University of Phoenix-Idaho Campus"
//   },
//   {
//     label: "Westwood College-Inland Empire",
//     value: "Westwood College-Inland Empire"
//   },
//   {
//     label: "DeVry University-Virginia",
//     value: "DeVry University-Virginia"
//   },
//   {
//     label: "DeVry University-Washington",
//     value: "DeVry University-Washington"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Ohio",
//     value: "DeVry University's Keller Graduate School of Management-Ohio"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Texas",
//     value: "DeVry University's Keller Graduate School of Management-Texas"
//   },
//   {
//     label: "DeVry University-Colorado",
//     value: "DeVry University-Colorado"
//   },
//   {
//     label: "Louisiana Delta Community College",
//     value: "Louisiana Delta Community College"
//   },
//   {
//     label: "ITT Technical Institute-Levittown",
//     value: "ITT Technical Institute-Levittown"
//   },
//   { label: "Atenas College", value: "Atenas College" },
//   {
//     label: "Southwest Skill Center-Campus of Estrella Mountain Community College",
//     value: "Southwest Skill Center-Campus of Estrella Mountain Community College"
//   },
//   {
//     label: "Onondaga Cortland Madison BOCES",
//     value: "Onondaga Cortland Madison BOCES"
//   },
//   {
//     label: "National American University-Ellsworth AFB Extension",
//     value: "National American University-Ellsworth AFB Extension"
//   },
//   {
//     label: "National American University-Albuquerque West",
//     value: "National American University-Albuquerque West"
//   },
//   {
//     label: "National American University-Brooklyn Center",
//     value: "National American University-Brooklyn Center"
//   },
//   {
//     label: "Interactive Learning Systems-Pasadena",
//     value: "Interactive Learning Systems-Pasadena"
//   },
//   { label: "Pillar College", value: "Pillar College" },
//   {
//     label: "Miami Ad School-Minneapolis",
//     value: "Miami Ad School-Minneapolis"
//   },
//   {
//     label: "Miami Ad School-San Francisco",
//     value: "Miami Ad School-San Francisco"
//   },
//   {
//     label: "Oregon State University-Cascades Campus",
//     value: "Oregon State University-Cascades Campus"
//   },
//   { label: "Milan Institute-Boise", value: "Milan Institute-Boise" },
//   { label: "Milan Institute-Amarillo", value: "Milan Institute-Amarillo" },
//   {
//     label: "Vatterott College-Dividend",
//     value: "Vatterott College-Dividend"
//   },
//   { label: "Vatterott College-Tulsa", value: "Vatterott College-Tulsa" },
//   {
//     label: "Vatterott College-Wichita",
//     value: "Vatterott College-Wichita"
//   },
//   {
//     label: "Star Career Academy-Newark",
//     value: "Star Career Academy-Newark"
//   },
//   {
//     label: "Southern University Law Center",
//     value: "Southern University Law Center"
//   },
//   {
//     label: "International Academy of Design and Technology-Orlando",
//     value: "International Academy of Design and Technology-Orlando"
//   },
//   {
//     label: "Lincoln Technical Institute-Lowell",
//     value: "Lincoln Technical Institute-Lowell"
//   },
//   {
//     label: "Everest College-Vancouver Massage Therapy",
//     value: "Everest College-Vancouver Massage Therapy"
//   },
//   {
//     label: "Texas Barber Colleges and Hairstyling Schools",
//     value: "Texas Barber Colleges and Hairstyling Schools"
//   },
//   { label: "Everest Institute-Hobby", value: "Everest Institute-Hobby" },
//   {
//     label: "Miller-Motte Technical College-North Charleston",
//     value: "Miller-Motte Technical College-North Charleston"
//   },
//   {
//     label: "American Career College-Anaheim",
//     value: "American Career College-Anaheim"
//   },
//   {
//     label: "Saginaw Chippewa Tribal College",
//     value: "Saginaw Chippewa Tribal College"
//   },
//   { label: "Wyo Tech-Blairsville", value: "Wyo Tech-Blairsville" },
//   {
//     label: "Richmont Graduate University",
//     value: "Richmont Graduate University"
//   },
//   {
//     label: "The Seattle School of Theology & Psychology",
//     value: "The Seattle School of Theology & Psychology"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Washington",
//     value: "DeVry University's Keller Graduate School of Management-Washington"
//   },
//   {
//     label: "Northwest College-Hillsboro",
//     value: "Northwest College-Hillsboro"
//   },
//   {
//     label: "San Diego State University-Imperial Valley Campus",
//     value: "San Diego State University-Imperial Valley Campus"
//   },
//   {
//     label: "American Broadcasting School-Arlington",
//     value: "American Broadcasting School-Arlington"
//   },
//   {
//     label: "Miami-Jacobs Career College-Sharonville",
//     value: "Miami-Jacobs Career College-Sharonville"
//   },
//   {
//     label: "East Valley Institute of Technology",
//     value: "East Valley Institute of Technology"
//   },
//   {
//     label: "West Coast Ultrasound Institute",
//     value: "West Coast Ultrasound Institute"
//   },
//   {
//     label: "Irell & Manella Graduate School of Biological Sciences at City of Hope",
//     value: "Irell & Manella Graduate School of Biological Sciences at City of Hope"
//   },
//   {
//     label: "Design's School of Cosmetology",
//     value: "Design's School of Cosmetology"
//   },
//   {
//     label: "Paul Mitchell the School-Santa Barbara",
//     value: "Paul Mitchell the School-Santa Barbara"
//   },
//   {
//     label: "University of the Rockies",
//     value: "University of the Rockies"
//   },
//   {
//     label: "Eli Whitney Technical High School",
//     value: "Eli Whitney Technical High School"
//   },
//   {
//     label: "Vinal Technical High School",
//     value: "Vinal Technical High School"
//   },
//   {
//     label: "Windham Technical High School",
//     value: "Windham Technical High School"
//   },
//   {
//     label: "Harris School of Business-Wilmington Campus",
//     value: "Harris School of Business-Wilmington Campus"
//   },
//   {
//     label: "Ultimate Medical Academy-Clearwater",
//     value: "Ultimate Medical Academy-Clearwater"
//   },
//   { label: "Florida Barber Academy", value: "Florida Barber Academy" },
//   {
//     label: "Jacksonville Beauty Institute",
//     value: "Jacksonville Beauty Institute"
//   },
//   {
//     label: "M-DCPS The English Center",
//     value: "M-DCPS The English Center"
//   },
//   {
//     label: "Florida Education Institute",
//     value: "Florida Education Institute"
//   },
//   {
//     label: "Superior Career Institute",
//     value: "Superior Career Institute"
//   },
//   {
//     label: "Institute of Technical Arts",
//     value: "Institute of Technical Arts"
//   },
//   {
//     label: "National Graduate School of Quality Management",
//     value: "National Graduate School of Quality Management"
//   },
//   {
//     label: "Texas County Technical College",
//     value: "Texas County Technical College"
//   },
//   {
//     label: "Aviation Institute of Maintenance-Kansas City",
//     value: "Aviation Institute of Maintenance-Kansas City"
//   },
//   {
//     label: "Blue Cliff College-Gulfport",
//     value: "Blue Cliff College-Gulfport"
//   },
//   { label: "Apex School of Theology", value: "Apex School of Theology" },
//   {
//     label: "Institute for Therapeutic Massage",
//     value: "Institute for Therapeutic Massage"
//   },
//   {
//     label: "Metropolitan Learning Institute",
//     value: "Metropolitan Learning Institute"
//   },
//   {
//     label: "Orleans Niagara BOCES-Practical Nursing Program",
//     value: "Orleans Niagara BOCES-Practical Nursing Program"
//   },
//   {
//     label: "Yeshiva Shaarei Torah of Rockland",
//     value: "Yeshiva Shaarei Torah of Rockland"
//   },
//   {
//     label: "Leon Studio One School of Hair Design",
//     value: "Leon Studio One School of Hair Design"
//   },
//   {
//     label: "St Joseph's Medical Center School of Radiography",
//     value: "St Joseph's Medical Center School of Radiography"
//   },
//   {
//     label: "American Institute of Alternative Medicine",
//     value: "American Institute of Alternative Medicine"
//   },
//   {
//     label: "Brown Aveda Institute-Mentor",
//     value: "Brown Aveda Institute-Mentor"
//   },
//   {
//     label: "Institute of Technology Inc",
//     value: "Institute of Technology Inc"
//   },
//   {
//     label: "Susquehanna County Career and Technology Center",
//     value: "Susquehanna County Career and Technology Center"
//   },
//   {
//     label: "Centro de Capacitacion y Asesoramiento Vetelba",
//     value: "Centro de Capacitacion y Asesoramiento Vetelba"
//   },
//   {
//     label: "Universidad Pentecostal Mizpa",
//     value: "Universidad Pentecostal Mizpa"
//   },
//   {
//     label: "Caribbean Forensic and Technical College",
//     value: "Caribbean Forensic and Technical College"
//   },
//   {
//     label: "Concorde Career College-Grand Prairie",
//     value: "Concorde Career College-Grand Prairie"
//   },
//   {
//     label: "Kussad Institute of Court Reporting",
//     value: "Kussad Institute of Court Reporting"
//   },
//   {
//     label: "Lamar Institute of Technology",
//     value: "Lamar Institute of Technology"
//   },
//   { label: "MJ's Beauty Academy Inc", value: "MJ's Beauty Academy Inc" },
//   {
//     label: "Aviation Institute of Maintenance-Dallas",
//     value: "Aviation Institute of Maintenance-Dallas"
//   },
//   {
//     label: "Healing Mountain Massage School",
//     value: "Healing Mountain Massage School"
//   },
//   {
//     label: "Career Training Solutions",
//     value: "Career Training Solutions"
//   },
//   {
//     label: "Rudy & Kelly Academy of Hair and Nails",
//     value: "Rudy & Kelly Academy of Hair and Nails"
//   },
//   {
//     label: "South Branch Career and Technical Center",
//     value: "South Branch Career and Technical Center"
//   },
//   { label: "Nevada State College", value: "Nevada State College" },
//   { label: "Virginia College-Jackson", value: "Virginia College-Jackson" },
//   { label: "Virginia College-Austin", value: "Virginia College-Austin" },
//   {
//     label: "California State University-Channel Islands",
//     value: "California State University-Channel Islands"
//   },
//   {
//     label: "ITT Technical Institute-Springfield",
//     value: "ITT Technical Institute-Springfield"
//   },
//   {
//     label: "ITT Technical Institute-Chantilly",
//     value: "ITT Technical Institute-Chantilly"
//   },
//   {
//     label: "The Art Institute of California-Argosy University Orange County",
//     value: "The Art Institute of California-Argosy University Orange County"
//   },
//   {
//     label: "Franklin W Olin College of Engineering",
//     value: "Franklin W Olin College of Engineering"
//   },
//   {
//     label: "Lincoln Technical Institute-Northeast Philadelphia",
//     value: "Lincoln Technical Institute-Northeast Philadelphia"
//   },
//   {
//     label: "Lincoln Technical Institute-Center City Philadelphia",
//     value: "Lincoln Technical Institute-Center City Philadelphia"
//   },
//   {
//     label: "Won Institute of Graduate Studies",
//     value: "Won Institute of Graduate Studies"
//   },
//   {
//     label: "Lincoln Technical Institute-Paramus",
//     value: "Lincoln Technical Institute-Paramus"
//   },
//   {
//     label: "Pima Medical Institute-Colorado Springs",
//     value: "Pima Medical Institute-Colorado Springs"
//   },
//   {
//     label: "University of Phoenix-Kansas City Campus",
//     value: "University of Phoenix-Kansas City Campus"
//   },
//   {
//     label: "University of Phoenix-Atlanta Campus",
//     value: "University of Phoenix-Atlanta Campus"
//   },
//   {
//     label: "University of Phoenix-Chicago Campus",
//     value: "University of Phoenix-Chicago Campus"
//   },
//   {
//     label: "University of Phoenix-Nashville Campus",
//     value: "University of Phoenix-Nashville Campus"
//   },
//   {
//     label: "University of Phoenix-Northern Virginia Campus",
//     value: "University of Phoenix-Northern Virginia Campus"
//   },
//   {
//     label: "David's Academy of Beauty",
//     value: "David's Academy of Beauty"
//   },
//   {
//     label: "Birthwise Midwifery School",
//     value: "Birthwise Midwifery School"
//   },
//   { label: "Argosy University-Dallas", value: "Argosy University-Dallas" },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Orlando",
//     value: "Le Cordon Bleu College of Culinary Arts-Orlando"
//   },
//   {
//     label: "Paul Mitchell the School-Costa Mesa",
//     value: "Paul Mitchell the School-Costa Mesa"
//   },
//   { label: "Ave Maria School of Law", value: "Ave Maria School of Law" },
//   {
//     label: "Everest College-Arlington",
//     value: "Everest College-Arlington"
//   },
//   {
//     label: "Tulsa Welding School-Jacksonville",
//     value: "Tulsa Welding School-Jacksonville"
//   },
//   {
//     label: "ITT Technical Institute-Canton",
//     value: "ITT Technical Institute-Canton"
//   },
//   {
//     label: "ITT Technical Institute-Plymouth Meeting",
//     value: "ITT Technical Institute-Plymouth Meeting"
//   },
//   {
//     label: "Pennsylvania College of Health Sciences",
//     value: "Pennsylvania College of Health Sciences"
//   },
//   {
//     label: "DeVry University-North Carolina",
//     value: "DeVry University-North Carolina"
//   },
//   {
//     label: "West Virginia Junior College-Bridgeport",
//     value: "West Virginia Junior College-Bridgeport"
//   },
//   {
//     label: "Antioch University-PhD Program in Leadership and Change",
//     value: "Antioch University-PhD Program in Leadership and Change"
//   },
//   {
//     label: "Vatterott College-Cleveland",
//     value: "Vatterott College-Cleveland"
//   },
//   {
//     label: "St Louis College of Health Careers-Fenton",
//     value: "St Louis College of Health Careers-Fenton"
//   },
//   {
//     label: "Interactive College of Technology-Gainesville",
//     value: "Interactive College of Technology-Gainesville"
//   },
//   {
//     label: "San Joaquin Valley College-Ontario",
//     value: "San Joaquin Valley College-Ontario"
//   },
//   {
//     label: "Anthem Institute-Cherry Hill",
//     value: "Anthem Institute-Cherry Hill"
//   },
//   {
//     label: "Westwood College-Ft Worth",
//     value: "Westwood College-Ft Worth"
//   },
//   { label: "Westwood College-Dallas", value: "Westwood College-Dallas" },
//   { label: "Alaska Christian College", value: "Alaska Christian College" },
//   { label: "Grantham University", value: "Grantham University" },
//   {
//     label: "Minnesota School of Business-Plymouth",
//     value: "Minnesota School of Business-Plymouth"
//   },
//   {
//     label: "Carrington College-Albuquerque",
//     value: "Carrington College-Albuquerque"
//   },
//   {
//     label: "NASCAR Technical Institute",
//     value: "NASCAR Technical Institute"
//   },
//   { label: "Everest Institute-Tigard", value: "Everest Institute-Tigard" },
//   {
//     label: "University of the Potomac-VA Campus",
//     value: "University of the Potomac-VA Campus"
//   },
//   {
//     label: "Anthem Institute-Las Vegas",
//     value: "Anthem Institute-Las Vegas"
//   },
//   {
//     label: "Milan Institute-Palm Desert",
//     value: "Milan Institute-Palm Desert"
//   },
//   {
//     label: "Stenotype Institute of Jacksonville Inc-Orlando",
//     value: "Stenotype Institute of Jacksonville Inc-Orlando"
//   },
//   {
//     label: "National American University-Overland Park",
//     value: "National American University-Overland Park"
//   },
//   { label: "Everest Institute-Austin", value: "Everest Institute-Austin" },
//   {
//     label: "Everest College-Burr Ridge",
//     value: "Everest College-Burr Ridge"
//   },
//   {
//     label: "Medvance Institute-West Palm",
//     value: "Medvance Institute-West Palm"
//   },
//   {
//     label: "Tohono O'Odham Community College",
//     value: "Tohono O'Odham Community College"
//   },
//   { label: "Everest College-Dallas", value: "Everest College-Dallas" },
//   {
//     label: "Edward Via College of Osteopathic Medicine",
//     value: "Edward Via College of Osteopathic Medicine"
//   },
//   {
//     label: "The Salter School-Malden Campus",
//     value: "The Salter School-Malden Campus"
//   },
//   {
//     label: "DeVry University-Pennsylvania",
//     value: "DeVry University-Pennsylvania"
//   },
//   {
//     label: "Pacific College of Oriental Medicine-Chicago",
//     value: "Pacific College of Oriental Medicine-Chicago"
//   },
//   { label: "Ronny J's Barber Styling", value: "Ronny J's Barber Styling" },
//   {
//     label: "Southwest Institute of Healing Arts",
//     value: "Southwest Institute of Healing Arts"
//   },
//   {
//     label: "InterCoast Colleges-Riverside",
//     value: "InterCoast Colleges-Riverside"
//   },
//   {
//     label: "Ottawa University-Jeffersonville",
//     value: "Ottawa University-Jeffersonville"
//   },
//   {
//     label: "University of Antelope Valley",
//     value: "University of Antelope Valley"
//   },
//   {
//     label: "Birthingway College of Midwifery",
//     value: "Birthingway College of Midwifery"
//   },
//   {
//     label: "Blue Water College of Cosmetology Inc",
//     value: "Blue Water College of Cosmetology Inc"
//   },
//   {
//     label: "Pima Medical Institute-Albuquerque West",
//     value: "Pima Medical Institute-Albuquerque West"
//   },
//   {
//     label: "Brighton Center's Center for Employment Training",
//     value: "Brighton Center's Center for Employment Training"
//   },
//   {
//     label: "California Healing Arts College",
//     value: "California Healing Arts College"
//   },
//   {
//     label: "Dallas Barber & Stylist College",
//     value: "Dallas Barber & Stylist College"
//   },
//   {
//     label: "NorthShore University HealthSystem School of Nurse Anesthesia",
//     value: "NorthShore University HealthSystem School of Nurse Anesthesia"
//   },
//   {
//     label: "Faith Evangelical College & Seminary",
//     value: "Faith Evangelical College & Seminary"
//   },
//   { label: "Family of Faith College", value: "Family of Faith College" },
//   {
//     label: "Hood Theological Seminary",
//     value: "Hood Theological Seminary"
//   },
//   {
//     label: "Colegio Educativo Tecnologico Industrial Inc",
//     value: "Colegio Educativo Tecnologico Industrial Inc"
//   },
//   {
//     label: "International Technological University",
//     value: "International Technological University"
//   },
//   {
//     label: "Irene's Myomassology Institute",
//     value: "Irene's Myomassology Institute"
//   },
//   {
//     label: "Jay's Technical Institute",
//     value: "Jay's Technical Institute"
//   },
//   {
//     label: "Mr John's School of Cosmetology Esthetics & Nails-Jacksonville",
//     value: "Mr John's School of Cosmetology Esthetics & Nails-Jacksonville"
//   },
//   {
//     label: "NTMA Training Centers of Southern California",
//     value: "NTMA Training Centers of Southern California"
//   },
//   { label: "P C Age-Jersey City", value: "P C Age-Jersey City" },
//   { label: "P C Age-Edison", value: "P C Age-Edison" },
//   {
//     label: "American Institute-Margate",
//     value: "American Institute-Margate"
//   },
//   {
//     label: "South Florida Institute of Technology",
//     value: "South Florida Institute of Technology"
//   },
//   {
//     label: "Southeastern Institute-Charleston",
//     value: "Southeastern Institute-Charleston"
//   },
//   {
//     label: "Southeastern College-Jacksonville",
//     value: "Southeastern College-Jacksonville"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Colorado Springs",
//     value: "Toni & Guy Hairdressing Academy-Colorado Springs"
//   },
//   { label: "Trend Barber College", value: "Trend Barber College" },
//   {
//     label: "Illinois CareerPath Institute",
//     value: "Illinois CareerPath Institute"
//   },
//   {
//     label: "Valley Grande Institute for Academic Studies",
//     value: "Valley Grande Institute for Academic Studies"
//   },
//   {
//     label: "West Coast University-Los Angeles",
//     value: "West Coast University-Los Angeles"
//   },
//   {
//     label: "Williamson Christian College",
//     value: "Williamson Christian College"
//   },
//   {
//     label: "International Barber & Style College",
//     value: "International Barber & Style College"
//   },
//   {
//     label: "Illinois Eastern Community College-System Office",
//     value: "Illinois Eastern Community College-System Office"
//   },
//   {
//     label: "Triangle Tech Inc-Sunbury",
//     value: "Triangle Tech Inc-Sunbury"
//   },
//   {
//     label: "DigiPen Institute of Technology",
//     value: "DigiPen Institute of Technology"
//   },
//   {
//     label: "California College of Vocational Careers",
//     value: "California College of Vocational Careers"
//   },
//   {
//     label: "Fortis Institute-Fort Lauderdale",
//     value: "Fortis Institute-Fort Lauderdale"
//   },
//   {
//     label: "University of Phoenix-Cincinnati Campus",
//     value: "University of Phoenix-Cincinnati Campus"
//   },
//   {
//     label: "University of Phoenix-Wichita Campus",
//     value: "University of Phoenix-Wichita Campus"
//   },
//   {
//     label: "University of Phoenix-Charlotte Campus",
//     value: "University of Phoenix-Charlotte Campus"
//   },
//   {
//     label: "Connecticut Center for Massage Therapy-Groton",
//     value: "Connecticut Center for Massage Therapy-Groton"
//   },
//   {
//     label: "Pierpont Community and Technical College",
//     value: "Pierpont Community and Technical College"
//   },
//   {
//     label: "ITT Technical Institute-Duluth",
//     value: "ITT Technical Institute-Duluth"
//   },
//   {
//     label: "ITT Technical Institute-Hilliard",
//     value: "ITT Technical Institute-Hilliard"
//   },
//   {
//     label: "University of Phoenix-Indianapolis Campus",
//     value: "University of Phoenix-Indianapolis Campus"
//   },
//   {
//     label: "Career Institute of Health and Technology",
//     value: "Career Institute of Health and Technology"
//   },
//   {
//     label: "Dewey University-Hato Rey",
//     value: "Dewey University-Hato Rey"
//   },
//   {
//     label: "InterCoast Colleges-West Covina",
//     value: "InterCoast Colleges-West Covina"
//   },
//   {
//     label: "American College of Healthcare Sciences",
//     value: "American College of Healthcare Sciences"
//   },
//   {
//     label: "Texas School of Business-East",
//     value: "Texas School of Business-East"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Atlanta",
//     value: "Le Cordon Bleu College of Culinary Arts-Atlanta"
//   },
//   { label: "Colorado Media School", value: "Colorado Media School" },
//   {
//     label: "Paul Mitchell the School-Rhode Island",
//     value: "Paul Mitchell the School-Rhode Island"
//   },
//   {
//     label: "Miller-Motte Technical College-Chattanooga",
//     value: "Miller-Motte Technical College-Chattanooga"
//   },
//   { label: "Milan Institute-Sparks", value: "Milan Institute-Sparks" },
//   {
//     label: "Empire Beauty School-Framingham",
//     value: "Empire Beauty School-Framingham"
//   },
//   {
//     label: "Westwood College-Chicago Loop",
//     value: "Westwood College-Chicago Loop"
//   },
//   {
//     label: "Interactive Learning Systems-North Houston",
//     value: "Interactive Learning Systems-North Houston"
//   },
//   {
//     label: "Bexley Hall Episcopal Seminary",
//     value: "Bexley Hall Episcopal Seminary"
//   },
//   {
//     label: "University of North Texas System",
//     value: "University of North Texas System"
//   },
//   { label: "Anthem College-Fenton", value: "Anthem College-Fenton" },
//   {
//     label: "Everest Institute-Norcross",
//     value: "Everest Institute-Norcross"
//   },
//   {
//     label: "Strayer University-Tennessee",
//     value: "Strayer University-Tennessee"
//   },
//   {
//     label: "Strayer University-Pennsylvania",
//     value: "Strayer University-Pennsylvania"
//   },
//   {
//     label: "Kaplan College-Brownsville",
//     value: "Kaplan College-Brownsville"
//   },
//   {
//     label: "Kaplan College-Corpus Christi",
//     value: "Kaplan College-Corpus Christi"
//   },
//   { label: "School of Health", value: "School of Health" },
//   {
//     label: "Everest College-Arlington",
//     value: "Everest College-Arlington"
//   },
//   {
//     label: "University of Phoenix-Columbus Georgia Campus",
//     value: "University of Phoenix-Columbus Georgia Campus"
//   },
//   {
//     label: "University of Phoenix-Memphis Campus",
//     value: "University of Phoenix-Memphis Campus"
//   },
//   {
//     label: "University of Phoenix-Columbus Ohio Campus",
//     value: "University of Phoenix-Columbus Ohio Campus"
//   },
//   {
//     label: "University of Phoenix-Little Rock Campus",
//     value: "University of Phoenix-Little Rock Campus"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Boise",
//     value: "Toni & Guy Hairdressing Academy-Boise"
//   },
//   {
//     label: "Charlie's Guard-Detective Bureau and Academy Inc",
//     value: "Charlie's Guard-Detective Bureau and Academy Inc"
//   },
//   { label: "PCI Academy-Plymouth", value: "PCI Academy-Plymouth" },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Pennsylvania",
//     value: "DeVry University's Keller Graduate School of Management-Pennsylvania"
//   },
//   { label: "DeVry University-Nevada", value: "DeVry University-Nevada" },
//   { label: "Everest College-Tacoma", value: "Everest College-Tacoma" },
//   { label: "DeVry University-Oregon", value: "DeVry University-Oregon" },
//   {
//     label: "National University College-Rio Grande",
//     value: "National University College-Rio Grande"
//   },
//   {
//     label: "Creative Images Institute of Cosmetology-South Dayton",
//     value: "Creative Images Institute of Cosmetology-South Dayton"
//   },
//   {
//     label: "Westwood College-Houston South",
//     value: "Westwood College-Houston South"
//   },
//   {
//     label: "Fortis Institute-Jacksonville",
//     value: "Fortis Institute-Jacksonville"
//   },
//   {
//     label: "Brookline College-Albuquerque",
//     value: "Brookline College-Albuquerque"
//   },
//   {
//     label: "Byzantine Catholic Seminary of Saints Cyril and Methodius",
//     value: "Byzantine Catholic Seminary of Saints Cyril and Methodius"
//   },
//   {
//     label: "Remington College-Cleveland West Campus",
//     value: "Remington College-Cleveland West Campus"
//   },
//   { label: "Northcentral University", value: "Northcentral University" },
//   {
//     label: "Colorado Technical University-Online",
//     value: "Colorado Technical University-Online"
//   },
//   {
//     label: "Baker College of Allen Park",
//     value: "Baker College of Allen Park"
//   },
//   {
//     label: "Bayamon Community College",
//     value: "Bayamon Community College"
//   },
//   {
//     label: "Harris School of Business-Dover Campus",
//     value: "Harris School of Business-Dover Campus"
//   },
//   { label: "Folsom Lake College", value: "Folsom Lake College" },
//   {
//     label: "LeGrand Institute of Cosmetology Inc",
//     value: "LeGrand Institute of Cosmetology Inc"
//   },
//   {
//     label: "Everest Institute-Detroit",
//     value: "Everest Institute-Detroit"
//   },
//   {
//     label: "Daymar Institute-Murfreesboro",
//     value: "Daymar Institute-Murfreesboro"
//   },
//   {
//     label: "Cambridge Technical Institute",
//     value: "Cambridge Technical Institute"
//   },
//   {
//     label: "Empire Beauty School-Midlothian",
//     value: "Empire Beauty School-Midlothian"
//   },
//   {
//     label: "Empire Beauty School-Owings Mills",
//     value: "Empire Beauty School-Owings Mills"
//   },
//   {
//     label: "Empire Beauty School-West Mifflin",
//     value: "Empire Beauty School-West Mifflin"
//   },
//   { label: "Bold Beauty Academy", value: "Bold Beauty Academy" },
//   { label: "ATI College-Norwalk", value: "ATI College-Norwalk" },
//   {
//     label: "Advance Science Institute",
//     value: "Advance Science Institute"
//   },
//   { label: "Advanced College", value: "Advanced College" },
//   { label: "Advance Tech College", value: "Advance Tech College" },
//   {
//     label: "Advanced Training Associates",
//     value: "Advanced Training Associates"
//   },
//   {
//     label: "American Advanced Technicians Institute",
//     value: "American Advanced Technicians Institute"
//   },
//   {
//     label: "Anamarc College-El Paso Central",
//     value: "Anamarc College-El Paso Central"
//   },
//   {
//     label: "Baptist University of the Americas",
//     value: "Baptist University of the Americas"
//   },
//   { label: "The Beauty Institute", value: "The Beauty Institute" },
//   {
//     label: "Beis Medrash Heichal Dovid",
//     value: "Beis Medrash Heichal Dovid"
//   },
//   {
//     label: "Bellefonte Academy of Beauty",
//     value: "Bellefonte Academy of Beauty"
//   },
//   {
//     label: "Blue Cliff Career College",
//     value: "Blue Cliff Career College"
//   },
//   { label: "Career Beauty College", value: "Career Beauty College" },
//   {
//     label: "Paul Mitchell the School-Gastonia",
//     value: "Paul Mitchell the School-Gastonia"
//   },
//   { label: "CES College", value: "CES College" },
//   {
//     label: "Computer Tutor Business and Technical Institute",
//     value: "Computer Tutor Business and Technical Institute"
//   },
//   {
//     label: "Court Reporting Institute of Louisiana",
//     value: "Court Reporting Institute of Louisiana"
//   },
//   {
//     label: "Auguste Escoffier School of Culinary Arts-Austin",
//     value: "Auguste Escoffier School of Culinary Arts-Austin"
//   },
//   { label: "Culinary Institute Inc", value: "Culinary Institute Inc" },
//   {
//     label: "Dade Medical College-Miami",
//     value: "Dade Medical College-Miami"
//   },
//   {
//     label: "Escuela Hotelera de San Juan",
//     value: "Escuela Hotelera de San Juan"
//   },
//   {
//     label: "Expertise Cosmetology Institute",
//     value: "Expertise Cosmetology Institute"
//   },
//   {
//     label: "Paul Mitchell the School-Monroe",
//     value: "Paul Mitchell the School-Monroe"
//   },
//   { label: "Healing Arts Institute", value: "Healing Arts Institute" },
//   { label: "Health Works Institute", value: "Health Works Institute" },
//   {
//     label: "In Session Arts of Cosmetology Beauty School",
//     value: "In Session Arts of Cosmetology Beauty School"
//   },
//   { label: "Moore Career College", value: "Moore Career College" },
//   {
//     label: "Industrial Technical College",
//     value: "Industrial Technical College"
//   },
//   {
//     label: "Institute of Beauty Occupation and Technology Course",
//     value: "Institute of Beauty Occupation and Technology Course"
//   },
//   {
//     label: "Institute of Clinical Acupuncture & Oriental Med",
//     value: "Institute of Clinical Acupuncture & Oriental Med"
//   },
//   { label: "Institute of Hair Design", value: "Institute of Hair Design" },
//   {
//     label: "MedTech Institute-Atlanta Campus",
//     value: "MedTech Institute-Atlanta Campus"
//   },
//   {
//     label: "Jones International University",
//     value: "Jones International University"
//   },
//   { label: "Leston College", value: "Leston College" },
//   {
//     label: "Lynndale Fundamentals of Beauty School",
//     value: "Lynndale Fundamentals of Beauty School"
//   },
//   {
//     label: "Medical Professional Institute",
//     value: "Medical Professional Institute"
//   },
//   {
//     label: "New Life Theological Seminary",
//     value: "New Life Theological Seminary"
//   },
//   { label: "Nightingale College", value: "Nightingale College" },
//   { label: "Omnitech Institute", value: "Omnitech Institute" },
//   { label: "PITC Institute", value: "PITC Institute" },
//   {
//     label: "Skinworks School of Advanced Skincare",
//     value: "Skinworks School of Advanced Skincare"
//   },
//   {
//     label: "Southeastern Institute-Columbia",
//     value: "Southeastern Institute-Columbia"
//   },
//   {
//     label: "Technical Learning Centers Inc",
//     value: "Technical Learning Centers Inc"
//   },
//   {
//     label: "Total Look School of Cosmetology & Massage Therapy",
//     value: "Total Look School of Cosmetology & Massage Therapy"
//   },
//   {
//     label: "The Art Institute of Tucson",
//     value: "The Art Institute of Tucson"
//   },
//   {
//     label: "Turning Point Beauty College",
//     value: "Turning Point Beauty College"
//   },
//   {
//     label: "Unitech Training Academy-Lafayette",
//     value: "Unitech Training Academy-Lafayette"
//   },
//   {
//     label: "Mountwest Community and Technical College",
//     value: "Mountwest Community and Technical College"
//   },
//   { label: "Centura College-Columbia", value: "Centura College-Columbia" },
//   {
//     label: "Flagler College-Tallahassee",
//     value: "Flagler College-Tallahassee"
//   },
//   {
//     label: "Kanawha Valley Community and Technical College",
//     value: "Kanawha Valley Community and Technical College"
//   },
//   {
//     label: "American InterContinental University-Online",
//     value: "American InterContinental University-Online"
//   },
//   {
//     label: "Westwood College-Atlanta Midtown",
//     value: "Westwood College-Atlanta Midtown"
//   },
//   {
//     label: "ITT Technical Institute-Eden Prairie",
//     value: "ITT Technical Institute-Eden Prairie"
//   },
//   { label: "Virginia College-Mobile", value: "Virginia College-Mobile" },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Las Vegas",
//     value: "Le Cordon Bleu College of Culinary Arts-Las Vegas"
//   },
//   {
//     label: "International Academy of Design and Technology-Troy",
//     value: "International Academy of Design and Technology-Troy"
//   },
//   {
//     label: "American InterContinental University-Houston",
//     value: "American InterContinental University-Houston"
//   },
//   {
//     label: "Sanford-Brown College-Houston North Loop",
//     value: "Sanford-Brown College-Houston North Loop"
//   },
//   {
//     label: "University of California-Merced",
//     value: "University of California-Merced"
//   },
//   {
//     label: "Everest College-Fort Worth",
//     value: "Everest College-Fort Worth"
//   },
//   {
//     label: "Remington College-North Houston Campus",
//     value: "Remington College-North Houston Campus"
//   },
//   {
//     label: "Paul Mitchell the School-Orlando",
//     value: "Paul Mitchell the School-Orlando"
//   },
//   {
//     label: "Regency Beauty Institute-Maplewood",
//     value: "Regency Beauty Institute-Maplewood"
//   },
//   {
//     label: "Pima Medical Institute-Las Vegas",
//     value: "Pima Medical Institute-Las Vegas"
//   },
//   {
//     label: "Remington College-Nashville Campus",
//     value: "Remington College-Nashville Campus"
//   },
//   { label: "Platt College-North OKC", value: "Platt College-North OKC" },
//   {
//     label: "Central Methodist University-College of Graduate and Extended Studies",
//     value: "Central Methodist University-College of Graduate and Extended Studies"
//   },
//   {
//     label: "Westwood College-Northlake",
//     value: "Westwood College-Northlake"
//   },
//   {
//     label: "University of Phoenix-Jersey City Campus",
//     value: "University of Phoenix-Jersey City Campus"
//   },
//   {
//     label: "University of Phoenix-Minneapolis St Paul Campus",
//     value: "University of Phoenix-Minneapolis St Paul Campus"
//   },
//   {
//     label: "Kaplan College-Fort Worth",
//     value: "Kaplan College-Fort Worth"
//   },
//   { label: "Kaplan College-Midland", value: "Kaplan College-Midland" },
//   { label: "Kaplan College-Lubbock", value: "Kaplan College-Lubbock" },
//   {
//     label: "Carrington College California-Emeryville",
//     value: "Carrington College California-Emeryville"
//   },
//   {
//     label: "North-West College-Riverside",
//     value: "North-West College-Riverside"
//   },
//   {
//     label: "Everest Institute-Chelsea",
//     value: "Everest Institute-Chelsea"
//   },
//   { label: "Everest Institute-Eagan", value: "Everest Institute-Eagan" },
//   {
//     label: "University of Phoenix-Louisville Campus",
//     value: "University of Phoenix-Louisville Campus"
//   },
//   {
//     label: "DeVry University-Minnesota",
//     value: "DeVry University-Minnesota"
//   },
//   {
//     label: "Kaplan University-Council Bluffs Campus",
//     value: "Kaplan University-Council Bluffs Campus"
//   },
//   {
//     label: "Everest University-Orange Park",
//     value: "Everest University-Orange Park"
//   },
//   { label: "Wyotech-West Sacramento", value: "Wyotech-West Sacramento" },
//   {
//     label: "Everest Institute-Bissonnet",
//     value: "Everest Institute-Bissonnet"
//   },
//   { label: "Everest College-McLean", value: "Everest College-McLean" },
//   {
//     label: "Colegio Tecnico de Electricidad Galloza",
//     value: "Colegio Tecnico de Electricidad Galloza"
//   },
//   {
//     label: "Empire Beauty School-St Paul",
//     value: "Empire Beauty School-St Paul"
//   },
//   {
//     label: "Arthur's Beauty School Inc-Pine Bluff",
//     value: "Arthur's Beauty School Inc-Pine Bluff"
//   },
//   {
//     label: "Arthur's Beauty School Inc-Conway",
//     value: "Arthur's Beauty School Inc-Conway"
//   },
//   {
//     label: "Vatterott College-St Charles",
//     value: "Vatterott College-St Charles"
//   },
//   {
//     label: "Anthem Institute-North Brunswick",
//     value: "Anthem Institute-North Brunswick"
//   },
//   {
//     label: "Anthem Career College-Memphis",
//     value: "Anthem Career College-Memphis"
//   },
//   {
//     label: "Anthem College-Kansas City",
//     value: "Anthem College-Kansas City"
//   },
//   {
//     label: "Spa Tech Institute-Ipswich",
//     value: "Spa Tech Institute-Ipswich"
//   },
//   {
//     label: "Spa Tech Institute-Westboro",
//     value: "Spa Tech Institute-Westboro"
//   },
//   {
//     label: "Spa Tech Institute-Plymouth",
//     value: "Spa Tech Institute-Plymouth"
//   },
//   {
//     label: "Milan Institute of Cosmetology-San Antonio Walzem",
//     value: "Milan Institute of Cosmetology-San Antonio Walzem"
//   },
//   {
//     label: "Bridgemont Community and Technical College",
//     value: "Bridgemont Community and Technical College"
//   },
//   {
//     label: "Wards Corner Beauty Academy-Virginia Beach",
//     value: "Wards Corner Beauty Academy-Virginia Beach"
//   },
//   { label: "Neumont University", value: "Neumont University" },
//   {
//     label: "Johnson & Wales University-Charlotte",
//     value: "Johnson & Wales University-Charlotte"
//   },
//   {
//     label: "University of Phoenix-Central Valley Campus",
//     value: "University of Phoenix-Central Valley Campus"
//   },
//   {
//     label: "L'Ecole Culinaire-St Louis",
//     value: "L'Ecole Culinaire-St Louis"
//   },
//   {
//     label: "Roseman University of Health Sciences",
//     value: "Roseman University of Health Sciences"
//   },
//   {
//     label: "Fortis Institute-Port Saint Lucie",
//     value: "Fortis Institute-Port Saint Lucie"
//   },
//   { label: "Fortis Institute-Miami", value: "Fortis Institute-Miami" },
//   {
//     label: "Aviation Institute of Maintenance-Manassas",
//     value: "Aviation Institute of Maintenance-Manassas"
//   },
//   {
//     label: "Everest College-North Aurora",
//     value: "Everest College-North Aurora"
//   },
//   {
//     label: "Cosmetology School of Arts and Sciences",
//     value: "Cosmetology School of Arts and Sciences"
//   },
//   {
//     label: "Universal Technical Institute of Pennsylvania Inc",
//     value: "Universal Technical Institute of Pennsylvania Inc"
//   },
//   {
//     label: "Heritage College-Kansas City",
//     value: "Heritage College-Kansas City"
//   },
//   {
//     label: "Kenneth Shuler School of Cosmetology-Spartanburg",
//     value: "Kenneth Shuler School of Cosmetology-Spartanburg"
//   },
//   {
//     label: "Kenneth Shuler School of Cosmetology-Columbia",
//     value: "Kenneth Shuler School of Cosmetology-Columbia"
//   },
//   {
//     label: "Institute for the Psychological Sciences",
//     value: "Institute for the Psychological Sciences"
//   },
//   {
//     label: "Pivot Point Academy-Chicago",
//     value: "Pivot Point Academy-Chicago"
//   },
//   {
//     label: "Lincoln Technical Institute-Shelton",
//     value: "Lincoln Technical Institute-Shelton"
//   },
//   {
//     label: "Minnesota School of Business-Waite Park",
//     value: "Minnesota School of Business-Waite Park"
//   },
//   {
//     label: "Minnesota School of Business-Shakopee",
//     value: "Minnesota School of Business-Shakopee"
//   },
//   { label: "Northwest Career College", value: "Northwest Career College" },
//   {
//     label: "Soma Institute-The National School of Clinical Massage Therapy",
//     value: "Soma Institute-The National School of Clinical Massage Therapy"
//   },
//   { label: "Xtreme Career Institute", value: "Xtreme Career Institute" },
//   {
//     label: "Marinello Schools of Beauty-Niantic",
//     value: "Marinello Schools of Beauty-Niantic"
//   },
//   {
//     label: "American Academy of Acupuncture and Oriental Medicine",
//     value: "American Academy of Acupuncture and Oriental Medicine"
//   },
//   {
//     label: "Arizona School of Acupuncture and Oriental Medicine",
//     value: "Arizona School of Acupuncture and Oriental Medicine"
//   },
//   { label: "Ave Maria University", value: "Ave Maria University" },
//   {
//     label: "Blue Sky School of Professional Massage and Therapeutic Bodywork",
//     value: "Blue Sky School of Professional Massage and Therapeutic Bodywork"
//   },
//   { label: "Buchanan Beauty College", value: "Buchanan Beauty College" },
//   {
//     label: "CALC Institute of Technology",
//     value: "CALC Institute of Technology"
//   },
//   {
//     label: "Cambridge Junior College-Yuba City",
//     value: "Cambridge Junior College-Yuba City"
//   },
//   {
//     label: "Cambridge Institute of Allied Health & Technology",
//     value: "Cambridge Institute of Allied Health & Technology"
//   },
//   { label: "Career Care Institute", value: "Career Care Institute" },
//   { label: "ATA Career Education", value: "ATA Career Education" },
//   {
//     label: "Career Quest Learning Centers-Lansing",
//     value: "Career Quest Learning Centers-Lansing"
//   },
//   {
//     label: "Central State Massage Academy",
//     value: "Central State Massage Academy"
//   },
//   {
//     label: "Community Christian College",
//     value: "Community Christian College"
//   },
//   {
//     label: "Crossett School of Cosmetology",
//     value: "Crossett School of Cosmetology"
//   },
//   {
//     label: "Culpeper Cosmetology Training Center",
//     value: "Culpeper Cosmetology Training Center"
//   },
//   { label: "Day Spa Career College", value: "Day Spa Career College" },
//   {
//     label: "Eastern School of Acupuncture and Traditional Medicine",
//     value: "Eastern School of Acupuncture and Traditional Medicine"
//   },
//   { label: "Ecclesia College", value: "Ecclesia College" },
//   {
//     label: "Employment Solutions-College for Technical Education",
//     value: "Employment Solutions-College for Technical Education"
//   },
//   {
//     label: "European Massage Therapy School-Skokie",
//     value: "European Massage Therapy School-Skokie"
//   },
//   {
//     label: "Evergreen Beauty and Barber College-Everett",
//     value: "Evergreen Beauty and Barber College-Everett"
//   },
//   {
//     label: "Paul Mitchell the School-Great Lakes",
//     value: "Paul Mitchell the School-Great Lakes"
//   },
//   {
//     label: "Healthcare Training Institute",
//     value: "Healthcare Training Institute"
//   },
//   {
//     label: "John D Rockefeller IV Career Center",
//     value: "John D Rockefeller IV Career Center"
//   },
//   {
//     label: "Ladera Career Paths Training Centers",
//     value: "Ladera Career Paths Training Centers"
//   },
//   {
//     label: "Los Angeles Music Academy",
//     value: "Los Angeles Music Academy"
//   },
//   {
//     label: "Maple Springs Baptist Bible College and Seminary",
//     value: "Maple Springs Baptist Bible College and Seminary"
//   },
//   {
//     label: "MCI Institute of Technology",
//     value: "MCI Institute of Technology"
//   },
//   {
//     label: "Oregon Career & Technology Center",
//     value: "Oregon Career & Technology Center"
//   },
//   {
//     label: "Performance Training Institute",
//     value: "Performance Training Institute"
//   },
//   {
//     label: "Pacific Coast Trade School",
//     value: "Pacific Coast Trade School"
//   },
//   { label: "Centura Institute", value: "Centura Institute" },
//   {
//     label: "Precision Manufacturing Institute",
//     value: "Precision Manufacturing Institute"
//   },
//   {
//     label: "Professional Massage Training Center",
//     value: "Professional Massage Training Center"
//   },
//   {
//     label: "Regency School of Hair Design",
//     value: "Regency School of Hair Design"
//   },
//   {
//     label: "Renaissance College-Massage Program",
//     value: "Renaissance College-Massage Program"
//   },
//   {
//     label: "Rosslyn Training Academy of Cosmetology",
//     value: "Rosslyn Training Academy of Cosmetology"
//   },
//   {
//     label: "SAE Institute of Technology-Nashville",
//     value: "SAE Institute of Technology-Nashville"
//   },
//   {
//     label: "eClips School of Cosmetology and Barbering",
//     value: "eClips School of Cosmetology and Barbering"
//   },
//   { label: "Shear Academy", value: "Shear Academy" },
//   {
//     label: "Southern Technical College",
//     value: "Southern Technical College"
//   },
//   { label: "Stanbridge College", value: "Stanbridge College" },
//   {
//     label: "Styletrends Barber and Hairstyling Academy",
//     value: "Styletrends Barber and Hairstyling Academy"
//   },
//   { label: "Universal Career School", value: "Universal Career School" },
//   {
//     label: "Universal College of Healing Arts",
//     value: "Universal College of Healing Arts"
//   },
//   {
//     label: "Uta Mesivta of Kiryas Joel",
//     value: "Uta Mesivta of Kiryas Joel"
//   },
//   { label: "W L Bonner College", value: "W L Bonner College" },
//   {
//     label: "Harrisburg University of Science and Technology",
//     value: "Harrisburg University of Science and Technology"
//   },
//   {
//     label: "The Art Institute of Ohio-Cincinnati",
//     value: "The Art Institute of Ohio-Cincinnati"
//   },
//   {
//     label: "Stevens-Henager College-Logan",
//     value: "Stevens-Henager College-Logan"
//   },
//   {
//     label: "University of Phoenix-Cheyenne Campus",
//     value: "University of Phoenix-Cheyenne Campus"
//   },
//   {
//     label: "University of Phoenix-Springfield  Campus",
//     value: "University of Phoenix-Springfield  Campus"
//   },
//   {
//     label: "University of Phoenix-Des Moines Campus",
//     value: "University of Phoenix-Des Moines Campus"
//   },
//   {
//     label: "University of Phoenix-San Antonio Campus",
//     value: "University of Phoenix-San Antonio Campus"
//   },
//   {
//     label: "University of Phoenix-Austin Campus",
//     value: "University of Phoenix-Austin Campus"
//   },
//   {
//     label: "University of Phoenix-Richmond-Virginia Beach Campus",
//     value: "University of Phoenix-Richmond-Virginia Beach Campus"
//   },
//   {
//     label: "University of Phoenix-Raleigh Campus",
//     value: "University of Phoenix-Raleigh Campus"
//   },
//   {
//     label: "Blue Ridge Community and Technical College",
//     value: "Blue Ridge Community and Technical College"
//   },
//   {
//     label: "Lincoln Technical Institute-Suffield",
//     value: "Lincoln Technical Institute-Suffield"
//   },
//   {
//     label: "International Academy of Design and Technology-Henderson",
//     value: "International Academy of Design and Technology-Henderson"
//   },
//   {
//     label: "International Academy of Design and Technology-Seattle",
//     value: "International Academy of Design and Technology-Seattle"
//   },
//   {
//     label: "International Academy of Design and Technology-Nashville",
//     value: "International Academy of Design and Technology-Nashville"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Miami",
//     value: "Le Cordon Bleu College of Culinary Arts-Miami"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Minneapolis",
//     value: "Le Cordon Bleu College of Culinary Arts-Minneapolis"
//   },
//   { label: "Anthem College-Portland", value: "Anthem College-Portland" },
//   {
//     label: "Career Technical College-Shreveport",
//     value: "Career Technical College-Shreveport"
//   },
//   {
//     label: "ITT Technical Institute-Kansas City",
//     value: "ITT Technical Institute-Kansas City"
//   },
//   {
//     label: "ITT Technical Institute-Kennesaw",
//     value: "ITT Technical Institute-Kennesaw"
//   },
//   {
//     label: "ITT Technical Institute-Owings Mills",
//     value: "ITT Technical Institute-Owings Mills"
//   },
//   {
//     label: "ITT Technical Institute-Warrensville Heights",
//     value: "ITT Technical Institute-Warrensville Heights"
//   },
//   { label: "Union Graduate College", value: "Union Graduate College" },
//   {
//     label: "Colorado State University-System Office",
//     value: "Colorado State University-System Office"
//   },
//   {
//     label: "Chambersburg Beauty School",
//     value: "Chambersburg Beauty School"
//   },
//   { label: "Daytona College", value: "Daytona College" },
//   { label: "Delta Technical College", value: "Delta Technical College" },
//   { label: "United States University", value: "United States University" },
//   {
//     label: "Westwood College-Arlington Ballston",
//     value: "Westwood College-Arlington Ballston"
//   },
//   {
//     label: "Kaplan College-Bakersfield",
//     value: "Kaplan College-Bakersfield"
//   },
//   { label: "Kaplan College-Fresno", value: "Kaplan College-Fresno" },
//   {
//     label: "Empire Beauty School-Avondale",
//     value: "Empire Beauty School-Avondale"
//   },
//   {
//     label: "Empire Beauty School-North Tucson",
//     value: "Empire Beauty School-North Tucson"
//   },
//   {
//     label: "Empire Beauty School-Littleton",
//     value: "Empire Beauty School-Littleton"
//   },
//   {
//     label: "Empire Beauty School-Aurora",
//     value: "Empire Beauty School-Aurora"
//   },
//   {
//     label: "Everest Institute-Gahanna",
//     value: "Everest Institute-Gahanna"
//   },
//   {
//     label: "Everest College-Merrionette Park",
//     value: "Everest College-Merrionette Park"
//   },
//   {
//     label: "Everest College-Earth City",
//     value: "Everest College-Earth City"
//   },
//   { label: "Everest College-Mesa", value: "Everest College-Mesa" },
//   {
//     label: "Everest Institute-Silver Spring",
//     value: "Everest Institute-Silver Spring"
//   },
//   {
//     label: "Alvareitas College of Cosmetology-Belleville",
//     value: "Alvareitas College of Cosmetology-Belleville"
//   },
//   { label: "AmeriTech College-Draper", value: "AmeriTech College-Draper" },
//   {
//     label: "Argosy University-Los Angeles",
//     value: "Argosy University-Los Angeles"
//   },
//   {
//     label: "Brown Mackie College-Miami",
//     value: "Brown Mackie College-Miami"
//   },
//   {
//     label: "Regency Beauty Institute-Darien",
//     value: "Regency Beauty Institute-Darien"
//   },
//   {
//     label: "Regency Beauty Institute-Aurora",
//     value: "Regency Beauty Institute-Aurora"
//   },
//   {
//     label: "Regency Beauty Institute-Madison",
//     value: "Regency Beauty Institute-Madison"
//   },
//   {
//     label: "Regency Beauty Institute-Ridgedale",
//     value: "Regency Beauty Institute-Ridgedale"
//   },
//   {
//     label: "San Joaquin Valley College-Modesto",
//     value: "San Joaquin Valley College-Modesto"
//   },
//   { label: "Fortis College-Largo", value: "Fortis College-Largo" },
//   { label: "Platt College-Moore", value: "Platt College-Moore" },
//   { label: "Platt College-Dallas", value: "Platt College-Dallas" },
//   {
//     label: "Universal Technical Institute of Massachusetts Inc",
//     value: "Universal Technical Institute of Massachusetts Inc"
//   },
//   {
//     label: "Eagle Gate College-Layton",
//     value: "Eagle Gate College-Layton"
//   },
//   {
//     label: "Carsten Institute of Cosmetology",
//     value: "Carsten Institute of Cosmetology"
//   },
//   {
//     label: "Academy of Hair Design-Jasper",
//     value: "Academy of Hair Design-Jasper"
//   },
//   {
//     label: "Expression College for Digital Arts",
//     value: "Expression College for Digital Arts"
//   },
//   {
//     label: "Unitech Training Academy-West Monroe",
//     value: "Unitech Training Academy-West Monroe"
//   },
//   { label: "Daymar College-Bellevue", value: "Daymar College-Bellevue" },
//   {
//     label: "DeVry University-Oklahoma",
//     value: "DeVry University-Oklahoma"
//   },
//   { label: "Salter School-Fall River", value: "Salter School-Fall River" },
//   {
//     label: "Seacoast Career School-Manchester Campus",
//     value: "Seacoast Career School-Manchester Campus"
//   },
//   {
//     label: "Instituto de Educacion Tecnica Ocupacional La Reine-Aguadilla",
//     value: "Instituto de Educacion Tecnica Ocupacional La Reine-Aguadilla"
//   },
//   {
//     label: "New River Community and Technical College",
//     value: "New River Community and Technical College"
//   },
//   {
//     label: "The College of Health Care Professions-Southwest Houston",
//     value: "The College of Health Care Professions-Southwest Houston"
//   },
//   {
//     label: "Eagle Gate College-Salt Lake City",
//     value: "Eagle Gate College-Salt Lake City"
//   },
//   {
//     label: "Kaplan College-Palm Springs",
//     value: "Kaplan College-Palm Springs"
//   },
//   {
//     label: "University of Phoenix-Savannah Campus",
//     value: "University of Phoenix-Savannah Campus"
//   },
//   {
//     label: "University of Phoenix-Northern Nevada Campus",
//     value: "University of Phoenix-Northern Nevada Campus"
//   },
//   {
//     label: "Minnesota School of Business-Rochester",
//     value: "Minnesota School of Business-Rochester"
//   },
//   { label: "Georgia Gwinnett College", value: "Georgia Gwinnett College" },
//   {
//     label: "Phoenix Institute of Herbal Medicine & Acupuncture",
//     value: "Phoenix Institute of Herbal Medicine & Acupuncture"
//   },
//   { label: "Tucson College of Beauty", value: "Tucson College of Beauty" },
//   {
//     label: "California Career College",
//     value: "California Career College"
//   },
//   {
//     label: "Palladium Technical Academy",
//     value: "Palladium Technical Academy"
//   },
//   { label: "Palace Beauty College", value: "Palace Beauty College" },
//   {
//     label: "National Polytechnic College",
//     value: "National Polytechnic College"
//   },
//   {
//     label: "American Career College-Ontario",
//     value: "American Career College-Ontario"
//   },
//   { label: "Asher College", value: "Asher College" },
//   {
//     label: "American Institute of Massage Therapy",
//     value: "American Institute of Massage Therapy"
//   },
//   {
//     label: "University of East-West Medicine",
//     value: "University of East-West Medicine"
//   },
//   { label: "Blake Austin College", value: "Blake Austin College" },
//   { label: "Mojave Barber College", value: "Mojave Barber College" },
//   {
//     label: "Aviator College of Aeronautical Science and Technology",
//     value: "Aviator College of Aeronautical Science and Technology"
//   },
//   {
//     label: "Total International Career Institute",
//     value: "Total International Career Institute"
//   },
//   {
//     label: "Trendsetters School of Beauty & Barbering",
//     value: "Trendsetters School of Beauty & Barbering"
//   },
//   { label: "CDA Technical Institute", value: "CDA Technical Institute" },
//   {
//     label: "American Institute of Beauty",
//     value: "American Institute of Beauty"
//   },
//   {
//     label: "North Florida Cosmetology Institute Inc",
//     value: "North Florida Cosmetology Institute Inc"
//   },
//   {
//     label: "Florida Academy of Health & Beauty",
//     value: "Florida Academy of Health & Beauty"
//   },
//   {
//     label: "Augusta School of Massage",
//     value: "Augusta School of Massage"
//   },
//   { label: "ATA College", value: "ATA College" },
//   {
//     label: "SUM Bible College and Theological Seminary",
//     value: "SUM Bible College and Theological Seminary"
//   },
//   { label: "Compass Career College", value: "Compass Career College" },
//   { label: "Hair Expressions Academy", value: "Hair Expressions Academy" },
//   {
//     label: "Nuvo College of Cosmetology",
//     value: "Nuvo College of Cosmetology"
//   },
//   {
//     label: "WellSpring School of Allied Health-Kansas City",
//     value: "WellSpring School of Allied Health-Kansas City"
//   },
//   { label: "Hair Academy 110", value: "Hair Academy 110" },
//   {
//     label: "Healing Touch Career College",
//     value: "Healing Touch Career College"
//   },
//   {
//     label: "The Salon Professional Academy-Fargo",
//     value: "The Salon Professional Academy-Fargo"
//   },
//   {
//     label: "Massage Therapy Trainining Institute",
//     value: "Massage Therapy Trainining Institute"
//   },
//   {
//     label: "Institute of Professional Careers",
//     value: "Institute of Professional Careers"
//   },
//   {
//     label: "Elite Academy of Beauty Arts",
//     value: "Elite Academy of Beauty Arts"
//   },
//   { label: "Aveda Institute-New York", value: "Aveda Institute-New York" },
//   {
//     label: "Brookline College-Oklahoma City",
//     value: "Brookline College-Oklahoma City"
//   },
//   {
//     label: "Northwest Regional Technology Institute",
//     value: "Northwest Regional Technology Institute"
//   },
//   {
//     label: "National Massage Therapy Institute",
//     value: "National Massage Therapy Institute"
//   },
//   {
//     label: "MyrAngel Beauty Institute",
//     value: "MyrAngel Beauty Institute"
//   },
//   { label: "Institute of Hair Design", value: "Institute of Hair Design" },
//   {
//     label: "Tennessee Career Institute",
//     value: "Tennessee Career Institute"
//   },
//   { label: "Texas Health School", value: "Texas Health School" },
//   { label: "Mai-trix Beauty College", value: "Mai-trix Beauty College" },
//   { label: "North West Beauty School", value: "North West Beauty School" },
//   {
//     label: "Maximum Style Tec School of Cosmetology",
//     value: "Maximum Style Tec School of Cosmetology"
//   },
//   { label: "Careers Unlimited", value: "Careers Unlimited" },
//   {
//     label: "Mountainland Applied Technology College",
//     value: "Mountainland Applied Technology College"
//   },
//   { label: "Avi Career Training", value: "Avi Career Training" },
//   { label: "Yakima Beauty School", value: "Yakima Beauty School" },
//   {
//     label: "Mountain State School of Massage",
//     value: "Mountain State School of Massage"
//   },
//   {
//     label: "Doane College-Lincoln Grand Island and Master",
//     value: "Doane College-Lincoln Grand Island and Master"
//   },
//   {
//     label: "Shorter University-College of Adult & Professional Programs",
//     value: "Shorter University-College of Adult & Professional Programs"
//   },
//   {
//     label: "Arkansas State University-System Office",
//     value: "Arkansas State University-System Office"
//   },
//   {
//     label: "The Art Institute of Indianapolis",
//     value: "The Art Institute of Indianapolis"
//   },
//   {
//     label: "Eastern International College-Belleville",
//     value: "Eastern International College-Belleville"
//   },
//   {
//     label: "San Joaquin Valley College-Rancho Cordova",
//     value: "San Joaquin Valley College-Rancho Cordova"
//   },
//   {
//     label: "San Joaquin Valley College-Central Administrative Office",
//     value: "San Joaquin Valley College-Central Administrative Office"
//   },
//   {
//     label: "Illinois School of Health Careers-O'Hare Campus",
//     value: "Illinois School of Health Careers-O'Hare Campus"
//   },
//   { label: "MedTech College", value: "MedTech College" },
//   {
//     label: "Broken Arrow Beauty College-Tulsa",
//     value: "Broken Arrow Beauty College-Tulsa"
//   },
//   {
//     label: "Universal Technical Institute of Northern California Inc",
//     value: "Universal Technical Institute of Northern California Inc"
//   },
//   {
//     label: "ITT Technical Institute-Charlotte South",
//     value: "ITT Technical Institute-Charlotte South"
//   },
//   {
//     label: "ITT Technical Institute-Clovis",
//     value: "ITT Technical Institute-Clovis"
//   },
//   {
//     label: "ITT Technical Institute-Dunmore",
//     value: "ITT Technical Institute-Dunmore"
//   },
//   {
//     label: "ITT Technical Institute-Swartz Creek",
//     value: "ITT Technical Institute-Swartz Creek"
//   },
//   {
//     label: "ITT Technical Institute-Lexington",
//     value: "ITT Technical Institute-Lexington"
//   },
//   {
//     label: "ITT Technical Institute-Maumee",
//     value: "ITT Technical Institute-Maumee"
//   },
//   {
//     label: "ITT Technical Institute-Oklahoma City",
//     value: "ITT Technical Institute-Oklahoma City"
//   },
//   {
//     label: "ITT Technical Institute-Tulsa",
//     value: "ITT Technical Institute-Tulsa"
//   },
//   {
//     label: "University of Phoenix-Omaha Campus",
//     value: "University of Phoenix-Omaha Campus"
//   },
//   {
//     label: "University of Phoenix-Northwest Arkansas Campus",
//     value: "University of Phoenix-Northwest Arkansas Campus"
//   },
//   {
//     label: "University of Phoenix-Madison Campus",
//     value: "University of Phoenix-Madison Campus"
//   },
//   {
//     label: "University of Phoenix-Columbia Campus",
//     value: "University of Phoenix-Columbia Campus"
//   },
//   {
//     label: "The Art Institute of California-Argosy University Inland Empire",
//     value: "The Art Institute of California-Argosy University Inland Empire"
//   },
//   {
//     label: "National American University-Zona Rosa",
//     value: "National American University-Zona Rosa"
//   },
//   {
//     label: "West Hills College-Lemoore",
//     value: "West Hills College-Lemoore"
//   },
//   {
//     label: "Stautzenberger College-Brecksville",
//     value: "Stautzenberger College-Brecksville"
//   },
//   {
//     label: "Stone Academy-East Hartford",
//     value: "Stone Academy-East Hartford"
//   },
//   {
//     label: "Westwood College-Annandale",
//     value: "Westwood College-Annandale"
//   },
//   {
//     label: "West Hills Community College District",
//     value: "West Hills Community College District"
//   },
//   {
//     label: "Unitech Training Academy-Houma",
//     value: "Unitech Training Academy-Houma"
//   },
//   { label: "Kaplan College-Milwaukee", value: "Kaplan College-Milwaukee" },
//   {
//     label: "Miller-Motte Technical College-Madison",
//     value: "Miller-Motte Technical College-Madison"
//   },
//   {
//     label: "Rasmussen College-Illinois",
//     value: "Rasmussen College-Illinois"
//   },
//   {
//     label: "International Institute for Restorative Practices",
//     value: "International Institute for Restorative Practices"
//   },
//   {
//     label: "Educational Technical College-Recinto de Coamo",
//     value: "Educational Technical College-Recinto de Coamo"
//   },
//   {
//     label: "Educational Technical College-Recinto de san Sebastian",
//     value: "Educational Technical College-Recinto de san Sebastian"
//   },
//   { label: "Argosy University-Denver", value: "Argosy University-Denver" },
//   {
//     label: "College America-Colorado Springs",
//     value: "College America-Colorado Springs"
//   },
//   {
//     label: "College America-Fort Collins",
//     value: "College America-Fort Collins"
//   },
//   {
//     label: "Automotive Training Center-Warminster",
//     value: "Automotive Training Center-Warminster"
//   },
//   {
//     label: "Sanford-Brown College-West Allis",
//     value: "Sanford-Brown College-West Allis"
//   },
//   {
//     label: "Empire Beauty School-Milwaukee",
//     value: "Empire Beauty School-Milwaukee"
//   },
//   {
//     label: "The Robert B Miller College",
//     value: "The Robert B Miller College"
//   },
//   {
//     label: "University of Phoenix-Fairfield County Campus",
//     value: "University of Phoenix-Fairfield County Campus"
//   },
//   {
//     label: "University of Phoenix-Harrisburg Campus",
//     value: "University of Phoenix-Harrisburg Campus"
//   },
//   {
//     label: "University of South Florida-St Petersburg",
//     value: "University of South Florida-St Petersburg"
//   },
//   {
//     label: "Triangle Tech Inc-Bethlehem",
//     value: "Triangle Tech Inc-Bethlehem"
//   },
//   { label: "DeVry University-Utah", value: "DeVry University-Utah" },
//   {
//     label: "Arizona State University-Downtown Phoenix",
//     value: "Arizona State University-Downtown Phoenix"
//   },
//   { label: "Milan Institute-Clovis", value: "Milan Institute-Clovis" },
//   {
//     label: "Branford Hall Career Institute-Albany Campus",
//     value: "Branford Hall Career Institute-Albany Campus"
//   },
//   {
//     label: "Harris School of Business-Linwood Campus",
//     value: "Harris School of Business-Linwood Campus"
//   },
//   {
//     label: "The Art Institute of Tennessee-Nashville",
//     value: "The Art Institute of Tennessee-Nashville"
//   },
//   {
//     label: "Strayer University-Florida",
//     value: "Strayer University-Florida"
//   },
//   {
//     label: "Pima Medical Institute-Renton",
//     value: "Pima Medical Institute-Renton"
//   },
//   {
//     label: "College of Business and Technology-Flagler",
//     value: "College of Business and Technology-Flagler"
//   },
//   {
//     label: "College of Business and Technology-Hialeah",
//     value: "College of Business and Technology-Hialeah"
//   },
//   {
//     label: "Miller-Motte College-Cary",
//     value: "Miller-Motte College-Cary"
//   },
//   {
//     label: "Miami-Jacobs Career College-Springboro",
//     value: "Miami-Jacobs Career College-Springboro"
//   },
//   {
//     label: "Dewey University-Juana D�az",
//     value: "Dewey University-Juana D�az"
//   },
//   { label: "Dewey University-Fajardo", value: "Dewey University-Fajardo" },
//   { label: "Dewey University-Arroyo", value: "Dewey University-Arroyo" },
//   {
//     label: "Regency Beauty Institute-Independence",
//     value: "Regency Beauty Institute-Independence"
//   },
//   {
//     label: "Regency Beauty Institute-St Peters",
//     value: "Regency Beauty Institute-St Peters"
//   },
//   {
//     label: "Regency Beauty Institute-Peoria",
//     value: "Regency Beauty Institute-Peoria"
//   },
//   {
//     label: "Regency Beauty Institute-Greenwood",
//     value: "Regency Beauty Institute-Greenwood"
//   },
//   {
//     label: "Regency Beauty Institute-Mehlville",
//     value: "Regency Beauty Institute-Mehlville"
//   },
//   {
//     label: "Regency Beauty Institute-Duluth",
//     value: "Regency Beauty Institute-Duluth"
//   },
//   {
//     label: "Regency Beauty Institute-Fairview Heights",
//     value: "Regency Beauty Institute-Fairview Heights"
//   },
//   {
//     label: "Regency Beauty Institute-Champaign",
//     value: "Regency Beauty Institute-Champaign"
//   },
//   {
//     label: "Regency Beauty Institute-Olathe",
//     value: "Regency Beauty Institute-Olathe"
//   },
//   {
//     label: "The College of Health Care Professions-San Antonio",
//     value: "The College of Health Care Professions-San Antonio"
//   },
//   {
//     label: "Everest Institute-South Plainfield",
//     value: "Everest Institute-South Plainfield"
//   },
//   {
//     label: "Kaplan Career Institute-Detroit",
//     value: "Kaplan Career Institute-Detroit"
//   },
//   {
//     label: "Daymar College-Madisonville",
//     value: "Daymar College-Madisonville"
//   },
//   { label: "Brittany Beauty School", value: "Brittany Beauty School" },
//   {
//     label: "Lincoln Technical Institute-Whitestone",
//     value: "Lincoln Technical Institute-Whitestone"
//   },
//   {
//     label: "American Public University System",
//     value: "American Public University System"
//   },
//   { label: "Huntsville Bible College", value: "Huntsville Bible College" },
//   { label: "Beaumont Adult School", value: "Beaumont Adult School" },
//   { label: "Make-up Designory", value: "Make-up Designory" },
//   {
//     label: "Video Symphony EnterTraining Inc",
//     value: "Video Symphony EnterTraining Inc"
//   },
//   {
//     label: "Gnomon School of Visual Effects",
//     value: "Gnomon School of Visual Effects"
//   },
//   {
//     label: "Coachella Valley Beauty College",
//     value: "Coachella Valley Beauty College"
//   },
//   {
//     label: "Career College of California",
//     value: "Career College of California"
//   },
//   {
//     label: "Valley College of Medical Careers",
//     value: "Valley College of Medical Careers"
//   },
//   {
//     label: "Academy of Natural Therapy Inc",
//     value: "Academy of Natural Therapy Inc"
//   },
//   {
//     label: "Academy Di Capelli-School of Cosmetology",
//     value: "Academy Di Capelli-School of Cosmetology"
//   },
//   {
//     label: "Delaware Learning Institute of Cosmetology",
//     value: "Delaware Learning Institute of Cosmetology"
//   },
//   {
//     label: "Dragon Rises College of Oriental Medicine",
//     value: "Dragon Rises College of Oriental Medicine"
//   },
//   {
//     label: "Palm Beach Academy of Health & Beauty",
//     value: "Palm Beach Academy of Health & Beauty"
//   },
//   { label: "SABER College", value: "SABER College" },
//   { label: "Taylor College", value: "Taylor College" },
//   {
//     label: "Pensacola School of Massage Therapy & Health Careers",
//     value: "Pensacola School of Massage Therapy & Health Careers"
//   },
//   {
//     label: "Hawaii College of Oriental Medicine",
//     value: "Hawaii College of Oriental Medicine"
//   },
//   { label: "Ideal Beauty Academy", value: "Ideal Beauty Academy" },
//   { label: "Success Schools", value: "Success Schools" },
//   {
//     label: "Louisiana Culinary Institute",
//     value: "Louisiana Culinary Institute"
//   },
//   {
//     label: "Bais Medrash Toras Chesed",
//     value: "Bais Medrash Toras Chesed"
//   },
//   {
//     label: "Center for Natural Wellness School of Massage Therapy",
//     value: "Center for Natural Wellness School of Massage Therapy"
//   },
//   {
//     label: "Ace Computer Training Center",
//     value: "Ace Computer Training Center"
//   },
//   { label: "New Age Training", value: "New Age Training" },
//   {
//     label: "Dayton School of Medical Massage",
//     value: "Dayton School of Medical Massage"
//   },
//   {
//     label: "Northcoast Medical Training Academy",
//     value: "Northcoast Medical Training Academy"
//   },
//   {
//     label: "American Institute of Medical Technology",
//     value: "American Institute of Medical Technology"
//   },
//   {
//     label: "Carib Technological Institute",
//     value: "Carib Technological Institute"
//   },
//   { label: "Visible Music College", value: "Visible Music College" },
//   {
//     label: "CCI Training Center-Arlington",
//     value: "CCI Training Center-Arlington"
//   },
//   { label: "Champion Beauty College", value: "Champion Beauty College" },
//   {
//     label: "Professional Careers Institute",
//     value: "Professional Careers Institute"
//   },
//   {
//     label: "Southeast Texas Career Institute",
//     value: "Southeast Texas Career Institute"
//   },
//   {
//     label: "Southwest Applied Technology Center",
//     value: "Southwest Applied Technology Center"
//   },
//   { label: "Academy of Cosmetology", value: "Academy of Cosmetology" },
//   { label: "Milwaukee Career College", value: "Milwaukee Career College" },
//   { label: "University of the West", value: "University of the West" },
//   {
//     label: "American College of Education",
//     value: "American College of Education"
//   },
//   { label: "South University-Tampa", value: "South University-Tampa" },
//   {
//     label: "Milan Institute of Cosmetology-San Antonio Military",
//     value: "Milan Institute of Cosmetology-San Antonio Military"
//   },
//   {
//     label: "Appalachian College of Pharmacy",
//     value: "Appalachian College of Pharmacy"
//   },
//   {
//     label: "Averett University-Non-Traditional Programs",
//     value: "Averett University-Non-Traditional Programs"
//   },
//   {
//     label: "Paul Mitchell the School-Tampa",
//     value: "Paul Mitchell the School-Tampa"
//   },
//   {
//     label: "Paul Mitchell the School-San Diego",
//     value: "Paul Mitchell the School-San Diego"
//   },
//   {
//     label: "Paul Mitchell the School-Michigan",
//     value: "Paul Mitchell the School-Michigan"
//   },
//   {
//     label: "Paul Mitchell the School-Sherman Oaks",
//     value: "Paul Mitchell the School-Sherman Oaks"
//   },
//   {
//     label: "Paul Mitchell the School-Mclean",
//     value: "Paul Mitchell the School-Mclean"
//   },
//   {
//     label: "Miami-Jacobs Career College-Troy",
//     value: "Miami-Jacobs Career College-Troy"
//   },
//   { label: "ATI College-Santa Ana", value: "ATI College-Santa Ana" },
//   { label: "Blue Cliff College-Houma", value: "Blue Cliff College-Houma" },
//   {
//     label: "The Art Institute of Salt Lake City",
//     value: "The Art Institute of Salt Lake City"
//   },
//   { label: "Fortis College-Columbus", value: "Fortis College-Columbus" },
//   {
//     label: "Fortis College-Cincinnati",
//     value: "Fortis College-Cincinnati"
//   },
//   {
//     label: "Fortis Institute-Baltimore",
//     value: "Fortis Institute-Baltimore"
//   },
//   {
//     label: "The Art Institute of Charleston",
//     value: "The Art Institute of Charleston"
//   },
//   {
//     label: "The Art Institute of California-Argosy University Sacramento",
//     value: "The Art Institute of California-Argosy University Sacramento"
//   },
//   {
//     label: "Blue Cliff College-Fayetteville",
//     value: "Blue Cliff College-Fayetteville"
//   },
//   {
//     label: "Blue Cliff College-Alexandria",
//     value: "Blue Cliff College-Alexandria"
//   },
//   {
//     label: "StenoTech Career Institute-Piscataway",
//     value: "StenoTech Career Institute-Piscataway"
//   },
//   {
//     label: "Anthem College-Brookfield",
//     value: "Anthem College-Brookfield"
//   },
//   {
//     label: "Ultimate Medical Academy-Tampa",
//     value: "Ultimate Medical Academy-Tampa"
//   },
//   {
//     label: "Beauty Schools of America-North Miami Beach",
//     value: "Beauty Schools of America-North Miami Beach"
//   },
//   { label: "Virginia College-Biloxi", value: "Virginia College-Biloxi" },
//   {
//     label: "ITT Technical Institute-St Petersburg",
//     value: "ITT Technical Institute-St Petersburg"
//   },
//   {
//     label: "ITT Technical Institute-Baton Rouge",
//     value: "ITT Technical Institute-Baton Rouge"
//   },
//   {
//     label: "ITT Technical Institute-Columbia",
//     value: "ITT Technical Institute-Columbia"
//   },
//   {
//     label: "ITT Technical Institute-Wichita",
//     value: "ITT Technical Institute-Wichita"
//   },
//   {
//     label: "ITT Technical Institute-Atlanta",
//     value: "ITT Technical Institute-Atlanta"
//   },
//   {
//     label: "ITT Technical Institute-Mobile",
//     value: "ITT Technical Institute-Mobile"
//   },
//   {
//     label: "ITT Technical Institute-Chattanooga",
//     value: "ITT Technical Institute-Chattanooga"
//   },
//   {
//     label: "ITT Technical Institute-South Bend",
//     value: "ITT Technical Institute-South Bend"
//   },
//   {
//     label: "Virginia College-School of Business and Health-Chattanooga",
//     value: "Virginia College-School of Business and Health-Chattanooga"
//   },
//   {
//     label: "Strayer University-Delaware",
//     value: "Strayer University-Delaware"
//   },
//   { label: "Brite Divinity School", value: "Brite Divinity School" },
//   {
//     label: "Strayer University-Alabama",
//     value: "Strayer University-Alabama"
//   },
//   {
//     label: "Brown Aveda Institute-Rocky River",
//     value: "Brown Aveda Institute-Rocky River"
//   },
//   { label: "Clary Sage College", value: "Clary Sage College" },
//   {
//     label: "Broadview University-Layton",
//     value: "Broadview University-Layton"
//   },
//   {
//     label: "International Academy of Design and Technology-Sacramento",
//     value: "International Academy of Design and Technology-Sacramento"
//   },
//   {
//     label: "University of Phoenix-Birmingham Campus",
//     value: "University of Phoenix-Birmingham Campus"
//   },
//   {
//     label: "International Academy of Design and Technology-San Antonio",
//     value: "International Academy of Design and Technology-San Antonio"
//   },
//   {
//     label: "University of Phoenix-Augusta Campus",
//     value: "University of Phoenix-Augusta Campus"
//   },
//   {
//     label: "University of Phoenix-Washington DC Campus",
//     value: "University of Phoenix-Washington DC Campus"
//   },
//   {
//     label: "University of Phoenix-Chattanooga Campus",
//     value: "University of Phoenix-Chattanooga Campus"
//   },
//   {
//     label: "DeVry University-Michigan",
//     value: "DeVry University-Michigan"
//   },
//   {
//     label: "DeVry University-Tennessee",
//     value: "DeVry University-Tennessee"
//   },
//   {
//     label: "Argosy University-Inland Empire",
//     value: "Argosy University-Inland Empire"
//   },
//   {
//     label: "Argosy University-Nashville",
//     value: "Argosy University-Nashville"
//   },
//   {
//     label: "Argosy University-San Diego",
//     value: "Argosy University-San Diego"
//   },
//   {
//     label: "Rasmussen College-Wisconsin",
//     value: "Rasmussen College-Wisconsin"
//   },
//   {
//     label: "Empire Beauty School-Lisle",
//     value: "Empire Beauty School-Lisle"
//   },
//   {
//     label: "Empire Beauty School-Richmond",
//     value: "Empire Beauty School-Richmond"
//   },
//   {
//     label: "Empire Beauty School-North Hills",
//     value: "Empire Beauty School-North Hills"
//   },
//   {
//     label: "Empire Beauty School-Concord",
//     value: "Empire Beauty School-Concord"
//   },
//   {
//     label: "Empire Beauty School-Arlington Heights",
//     value: "Empire Beauty School-Arlington Heights"
//   },
//   {
//     label: "Lexington Healing Arts Academy",
//     value: "Lexington Healing Arts Academy"
//   },
//   {
//     label: "Empire Beauty School-Hooksett",
//     value: "Empire Beauty School-Hooksett"
//   },
//   {
//     label: "The Institute of Beauty and Wellness",
//     value: "The Institute of Beauty and Wellness"
//   },
//   {
//     label: "InterCoast Colleges-Carson",
//     value: "InterCoast Colleges-Carson"
//   },
//   {
//     label: "InterCoast Career Institute-South Portland",
//     value: "InterCoast Career Institute-South Portland"
//   },
//   {
//     label: "Carrington College California-Stockton",
//     value: "Carrington College California-Stockton"
//   },
//   {
//     label: "Carrington College California-Citrus Heights",
//     value: "Carrington College California-Citrus Heights"
//   },
//   {
//     label: "Euphoria Institute of Beauty Arts & Sciences-Summerlin",
//     value: "Euphoria Institute of Beauty Arts & Sciences-Summerlin"
//   },
//   {
//     label: "Euphoria Institute of Beauty Arts & Sciences-Green Valley",
//     value: "Euphoria Institute of Beauty Arts & Sciences-Green Valley"
//   },
//   {
//     label: "Empire Beauty School-Portsmouth",
//     value: "Empire Beauty School-Portsmouth"
//   },
//   { label: "LIU Riverhead", value: "LIU Riverhead" },
//   {
//     label: "Newbridge College-Long Beach",
//     value: "Newbridge College-Long Beach"
//   },
//   {
//     label: "Regency Beauty Institute-Lakewood",
//     value: "Regency Beauty Institute-Lakewood"
//   },
//   {
//     label: "Regency Beauty Institute-Westminster",
//     value: "Regency Beauty Institute-Westminster"
//   },
//   {
//     label: "Regency Beauty Institute-Avon",
//     value: "Regency Beauty Institute-Avon"
//   },
//   {
//     label: "Regency Beauty Institute-Joliet",
//     value: "Regency Beauty Institute-Joliet"
//   },
//   {
//     label: "Regency Beauty Institute-Rockford",
//     value: "Regency Beauty Institute-Rockford"
//   },
//   {
//     label: "Regency Beauty Institute-Greenfield",
//     value: "Regency Beauty Institute-Greenfield"
//   },
//   {
//     label: "Regency Beauty Institute-Metro Center",
//     value: "Regency Beauty Institute-Metro Center"
//   },
//   {
//     label: "Regency Beauty Institute-East Tucson",
//     value: "Regency Beauty Institute-East Tucson"
//   },
//   {
//     label: "Regency Beauty Institute-Tri-County",
//     value: "Regency Beauty Institute-Tri-County"
//   },
//   {
//     label: "Regency Beauty Institute-Eastgate",
//     value: "Regency Beauty Institute-Eastgate"
//   },
//   {
//     label: "Regency Beauty Institute-Topeka",
//     value: "Regency Beauty Institute-Topeka"
//   },
//   {
//     label: "Columbia Southern University",
//     value: "Columbia Southern University"
//   },
//   {
//     label: "Arizona Summit Law School",
//     value: "Arizona Summit Law School"
//   },
//   {
//     label: "Arizona Culinary Institute",
//     value: "Arizona Culinary Institute"
//   },
//   { label: "InfoTech Career College", value: "InfoTech Career College" },
//   {
//     label: "Trident University International",
//     value: "Trident University International"
//   },
//   { label: "Coastline Beauty College", value: "Coastline Beauty College" },
//   {
//     label: "Career College Consultants",
//     value: "Career College Consultants"
//   },
//   { label: "San Diego College", value: "San Diego College" },
//   {
//     label: "Montessori Casa International",
//     value: "Montessori Casa International"
//   },
//   {
//     label: "Branford Academy of Hair and Cosmetology",
//     value: "Branford Academy of Hair and Cosmetology"
//   },
//   {
//     label: "Academy of Massage and Bodywork",
//     value: "Academy of Massage and Bodywork"
//   },
//   {
//     label: "Digital Media Arts College",
//     value: "Digital Media Arts College"
//   },
//   {
//     label: "Academy for Five Element Acupuncture",
//     value: "Academy for Five Element Acupuncture"
//   },
//   {
//     label: "Academy of Career Training",
//     value: "Academy of Career Training"
//   },
//   {
//     label: "Management Resources Institute",
//     value: "Management Resources Institute"
//   },
//   {
//     label: "Paul Mitchell the School-Miami",
//     value: "Paul Mitchell the School-Miami"
//   },
//   { label: "Wolford College", value: "Wolford College" },
//   {
//     label: "Aveda Institute-South Florida",
//     value: "Aveda Institute-South Florida"
//   },
//   {
//     label: "Aveda Institute-Tallahassee",
//     value: "Aveda Institute-Tallahassee"
//   },
//   {
//     label: "Shear Excellence Hair Academy",
//     value: "Shear Excellence Hair Academy"
//   },
//   {
//     label: "Carlson College of Massage Therapy",
//     value: "Carlson College of Massage Therapy"
//   },
//   {
//     label: "Bio-Chi Institute of Massage Therapy",
//     value: "Bio-Chi Institute of Massage Therapy"
//   },
//   { label: "SOLEX Medical Academy", value: "SOLEX Medical Academy" },
//   {
//     label: "MyComputerCareer.com-Indianapolis",
//     value: "MyComputerCareer.com-Indianapolis"
//   },
//   { label: "Z Hair Academy", value: "Z Hair Academy" },
//   {
//     label: "DiGrigoli School of Cosmetology",
//     value: "DiGrigoli School of Cosmetology"
//   },
//   {
//     label: "Millennium Training Institute",
//     value: "Millennium Training Institute"
//   },
//   {
//     label: "Gallery College of Beauty",
//     value: "Gallery College of Beauty"
//   },
//   {
//     label: "Lakewood School of Therapeutic Massage",
//     value: "Lakewood School of Therapeutic Massage"
//   },
//   { label: "The Salon Spa Academy", value: "The Salon Spa Academy" },
//   {
//     label: "Trend Setters School of Cosmetology",
//     value: "Trend Setters School of Cosmetology"
//   },
//   {
//     label: "Academy of Hair Design-Springfield",
//     value: "Academy of Hair Design-Springfield"
//   },
//   {
//     label: "Corinth Academy of Cosmetology",
//     value: "Corinth Academy of Cosmetology"
//   },
//   {
//     label: "Southeastern Institute-Charlotte",
//     value: "Southeastern Institute-Charlotte"
//   },
//   {
//     label: "Gentle Healing School of Massage",
//     value: "Gentle Healing School of Massage"
//   },
//   { label: "Yeshivas Be'er Yitzchok", value: "Yeshivas Be'er Yitzchok" },
//   { label: "Yeshiva Toras Chaim", value: "Yeshiva Toras Chaim" },
//   {
//     label: "Talmudical Seminary of Bobov",
//     value: "Talmudical Seminary of Bobov"
//   },
//   {
//     label: "New York Methodist Hospital Center for Allied Health Education",
//     value: "New York Methodist Hospital Center for Allied Health Education"
//   },
//   {
//     label: "Institute of Allied Medical Professions-New York",
//     value: "Institute of Allied Medical Professions-New York"
//   },
//   {
//     label: "Micropower Career Institute",
//     value: "Micropower Career Institute"
//   },
//   {
//     label: "Monroe 2 Orleans BOCES-Center for Workforce Development",
//     value: "Monroe 2 Orleans BOCES-Center for Workforce Development"
//   },
//   {
//     label: "Aveda Fredric's Institute-Cincinnati",
//     value: "Aveda Fredric's Institute-Cincinnati"
//   },
//   {
//     label: "MyComputerCareer.com-TechSkills",
//     value: "MyComputerCareer.com-TechSkills"
//   },
//   { label: "CDE Career Institute", value: "CDE Career Institute" },
//   {
//     label: "Instituto Educativo Premier",
//     value: "Instituto Educativo Premier"
//   },
//   { label: "Charleston School of Law", value: "Charleston School of Law" },
//   {
//     label: "Elite College of Cosmetology",
//     value: "Elite College of Cosmetology"
//   },
//   {
//     label: "Memphis Institute of Barbering",
//     value: "Memphis Institute of Barbering"
//   },
//   {
//     label: "Manuel and Theresa's School of Hair Design-Bryan",
//     value: "Manuel and Theresa's School of Hair Design-Bryan"
//   },
//   {
//     label: "Southwest University at El Paso",
//     value: "Southwest University at El Paso"
//   },
//   {
//     label: "Paul Mitchell the School-Austin",
//     value: "Paul Mitchell the School-Austin"
//   },
//   { label: "Aveda Institute-Provo", value: "Aveda Institute-Provo" },
//   {
//     label: "Dixie Applied Technology College",
//     value: "Dixie Applied Technology College"
//   },
//   {
//     label: "Centura College-Alexandria",
//     value: "Centura College-Alexandria"
//   },
//   {
//     label: "Southeast Culinary & Hospitality College",
//     value: "Southeast Culinary & Hospitality College"
//   },
//   {
//     label: "Dominion School of Hair Design",
//     value: "Dominion School of Hair Design"
//   },
//   {
//     label: "Victoria's Academy of Cosmetology",
//     value: "Victoria's Academy of Cosmetology"
//   },
//   { label: "Inland Massage Institute", value: "Inland Massage Institute" },
//   { label: "Sunnyside Beauty Academy", value: "Sunnyside Beauty Academy" },
//   { label: "Wisconsin Academy", value: "Wisconsin Academy" },
//   {
//     label: "The Art Institute of Pittsburgh-Online Division",
//     value: "The Art Institute of Pittsburgh-Online Division"
//   },
//   {
//     label: "University of South Florida-Sarasota-Manatee",
//     value: "University of South Florida-Sarasota-Manatee"
//   },
//   {
//     label: "Brown Mackie College-Indianapolis",
//     value: "Brown Mackie College-Indianapolis"
//   },
//   { label: "College America-Cheyenne", value: "College America-Cheyenne" },
//   {
//     label: "Paul Mitchell the School-San Antonio",
//     value: "Paul Mitchell the School-San Antonio"
//   },
//   {
//     label: "Centro de Estudios Multidisciplinarios-Bayamon",
//     value: "Centro de Estudios Multidisciplinarios-Bayamon"
//   },
//   {
//     label: "Bryant & Stratton College-Wauwatosa",
//     value: "Bryant & Stratton College-Wauwatosa"
//   },
//   {
//     label: "Minnesota School of Business-Blaine",
//     value: "Minnesota School of Business-Blaine"
//   },
//   {
//     label: "The Art Institute of Michigan",
//     value: "The Art Institute of Michigan"
//   },
//   {
//     label: "Lacy Cosmetology School-Lexington",
//     value: "Lacy Cosmetology School-Lexington"
//   },
//   {
//     label: "Lacy Cosmetology School-Goose Creek",
//     value: "Lacy Cosmetology School-Goose Creek"
//   },
//   {
//     label: "The Art Institute of Austin",
//     value: "The Art Institute of Austin"
//   },
//   {
//     label: "The Art Institute of California-Argosy University-Silicon Valley",
//     value: "The Art Institute of California-Argosy University-Silicon Valley"
//   },
//   {
//     label: "Remington College-Houston Southeast Campus",
//     value: "Remington College-Houston Southeast Campus"
//   },
//   {
//     label: "Remington College-Shreveport Campus",
//     value: "Remington College-Shreveport Campus"
//   },
//   {
//     label: "National American University-Austin",
//     value: "National American University-Austin"
//   },
//   {
//     label: "National American University-Wichita",
//     value: "National American University-Wichita"
//   },
//   {
//     label: "Lawton Career Institute-Warren Main Campus",
//     value: "Lawton Career Institute-Warren Main Campus"
//   },
//   { label: "Fortis College-Landover", value: "Fortis College-Landover" },
//   {
//     label: "Jenny Lea Academy of Cosmetology and Aesthetics",
//     value: "Jenny Lea Academy of Cosmetology and Aesthetics"
//   },
//   {
//     label: "ITT Technical Institute-Cary",
//     value: "ITT Technical Institute-Cary"
//   },
//   {
//     label: "ITT Technical Institute-Madison",
//     value: "ITT Technical Institute-Madison"
//   },
//   {
//     label: "ITT Technical Institute-Clive",
//     value: "ITT Technical Institute-Clive"
//   },
//   {
//     label: "ITT Technical Institute-Columbus",
//     value: "ITT Technical Institute-Columbus"
//   },
//   {
//     label: "ITT Technical Institute-Phoenix",
//     value: "ITT Technical Institute-Phoenix"
//   },
//   {
//     label: "ITT Technical Institute-Madison",
//     value: "ITT Technical Institute-Madison"
//   },
//   {
//     label: "ITT Technical Institute-High Point",
//     value: "ITT Technical Institute-High Point"
//   },
//   { label: "The Hair Academy", value: "The Hair Academy" },
//   {
//     label: "The Art Institutes International�Kansas City",
//     value: "The Art Institutes International�Kansas City"
//   },
//   {
//     label: "The Art Institute of Raleigh-Durham",
//     value: "The Art Institute of Raleigh-Durham"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Sacramento",
//     value: "Le Cordon Bleu College of Culinary Arts-Sacramento"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Seattle",
//     value: "Le Cordon Bleu College of Culinary Arts-Seattle"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Cambridge",
//     value: "Le Cordon Bleu College of Culinary Arts-Cambridge"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-Dallas",
//     value: "Le Cordon Bleu College of Culinary Arts-Dallas"
//   },
//   {
//     label: "Ross Medical Education Center-New Baltimore",
//     value: "Ross Medical Education Center-New Baltimore"
//   },
//   { label: "Ross College-Sylvania", value: "Ross College-Sylvania" },
//   {
//     label: "Argosy University-Salt Lake City",
//     value: "Argosy University-Salt Lake City"
//   },
//   {
//     label: "Escuela De Troqueleria Y Herramentaje",
//     value: "Escuela De Troqueleria Y Herramentaje"
//   },
//   {
//     label: "Virginia College-Montgomery",
//     value: "Virginia College-Montgomery"
//   },
//   {
//     label: "Fortis Institute-Nashville",
//     value: "Fortis Institute-Nashville"
//   },
//   {
//     label: "Beckfield College-Tri-County",
//     value: "Beckfield College-Tri-County"
//   },
//   {
//     label: "Community Technology Learning Center of Portage",
//     value: "Community Technology Learning Center of Portage"
//   },
//   {
//     label: "David-Curtis School of Floral Design",
//     value: "David-Curtis School of Floral Design"
//   },
//   {
//     label: "Dental Assistant Pro LLC-Columbus",
//     value: "Dental Assistant Pro LLC-Columbus"
//   },
//   {
//     label: "Dental Assistant Pro-Lebanon",
//     value: "Dental Assistant Pro-Lebanon"
//   },
//   { label: "Iverson Institute", value: "Iverson Institute" },
//   {
//     label: "Galen College of Nursing-Cincinnati",
//     value: "Galen College of Nursing-Cincinnati"
//   },
//   {
//     label: "Harmony Path School of Massage Therapy",
//     value: "Harmony Path School of Massage Therapy"
//   },
//   {
//     label: "Institute of Therapeutic Massage",
//     value: "Institute of Therapeutic Massage"
//   },
//   {
//     label: "Pinnacle Career Institute-North Kansas City",
//     value: "Pinnacle Career Institute-North Kansas City"
//   },
//   {
//     label: "Strayer University-Kentucky",
//     value: "Strayer University-Kentucky"
//   },
//   {
//     label: "Strayer University-North Carolina",
//     value: "Strayer University-North Carolina"
//   },
//   {
//     label: "Strayer University-New Jersey",
//     value: "Strayer University-New Jersey"
//   },
//   {
//     label: "International Culinary Arts and Sciences Institute",
//     value: "International Culinary Arts and Sciences Institute"
//   },
//   {
//     label: "Kaplan College-Cincinnati",
//     value: "Kaplan College-Cincinnati"
//   },
//   { label: "National College-Dayton", value: "National College-Dayton" },
//   {
//     label: "National College-Youngstown",
//     value: "National College-Youngstown"
//   },
//   {
//     label: "National College-Cincinnati",
//     value: "National College-Cincinnati"
//   },
//   { label: "National College-Stow", value: "National College-Stow" },
//   {
//     label: "Harris School of Business-Hamilton Campus",
//     value: "Harris School of Business-Hamilton Campus"
//   },
//   {
//     label: "Empire Beauty School-Eden Prairie",
//     value: "Empire Beauty School-Eden Prairie"
//   },
//   {
//     label: "Ohio Business College-Hilliard",
//     value: "Ohio Business College-Hilliard"
//   },
//   {
//     label: "Ohio Center for Broadcasting-Columbus",
//     value: "Ohio Center for Broadcasting-Columbus"
//   },
//   {
//     label: "Ohio Medical Career Center",
//     value: "Ohio Medical Career Center"
//   },
//   {
//     label: "Ohio Technical College-PowerSport Institute",
//     value: "Ohio Technical College-PowerSport Institute"
//   },
//   {
//     label: "Reflexology Certification Institute",
//     value: "Reflexology Certification Institute"
//   },
//   {
//     label: "Toledo Restaurant Training Center",
//     value: "Toledo Restaurant Training Center"
//   },
//   {
//     label: "Dade Medical College-Miami Lakes",
//     value: "Dade Medical College-Miami Lakes"
//   },
//   { label: "The King�s College", value: "The King�s College" },
//   {
//     label: "DeVry University-Kentucky",
//     value: "DeVry University-Kentucky"
//   },
//   {
//     label: "Chamberlain College of Nursing-Administrative Office",
//     value: "Chamberlain College of Nursing-Administrative Office"
//   },
//   {
//     label: "Chamberlain College of Nursing-Illinois",
//     value: "Chamberlain College of Nursing-Illinois"
//   },
//   {
//     label: "Chamberlain College of Nursing-Ohio",
//     value: "Chamberlain College of Nursing-Ohio"
//   },
//   {
//     label: "Chamberlain College of Nursing-Arizona",
//     value: "Chamberlain College of Nursing-Arizona"
//   },
//   {
//     label: "Career Quest Learning Centers-Jackson",
//     value: "Career Quest Learning Centers-Jackson"
//   },
//   {
//     label: "Regency Beauty Institute-Fort Collins",
//     value: "Regency Beauty Institute-Fort Collins"
//   },
//   {
//     label: "Regency Beauty Institute-Tolleson",
//     value: "Regency Beauty Institute-Tolleson"
//   },
//   {
//     label: "Regency Beauty Institute-Pasadena",
//     value: "Regency Beauty Institute-Pasadena"
//   },
//   {
//     label: "Regency Beauty Institute-Dayton",
//     value: "Regency Beauty Institute-Dayton"
//   },
//   {
//     label: "Regency Beauty Institute-Akron",
//     value: "Regency Beauty Institute-Akron"
//   },
//   {
//     label: "Regency Beauty Institute-Detroit Southgate",
//     value: "Regency Beauty Institute-Detroit Southgate"
//   },
//   {
//     label: "Regency Beauty Institute-Flint",
//     value: "Regency Beauty Institute-Flint"
//   },
//   {
//     label: "Regency Beauty Institute-Grand Rapids",
//     value: "Regency Beauty Institute-Grand Rapids"
//   },
//   {
//     label: "Regency Beauty Institute-Cypresswood",
//     value: "Regency Beauty Institute-Cypresswood"
//   },
//   { label: "Bryan University", value: "Bryan University" },
//   {
//     label: "Regency Beauty Institute-Austin",
//     value: "Regency Beauty Institute-Austin"
//   },
//   {
//     label: "Regency Beauty Institute-Mesa",
//     value: "Regency Beauty Institute-Mesa"
//   },
//   {
//     label: "Regency Beauty Institute-Nashville",
//     value: "Regency Beauty Institute-Nashville"
//   },
//   {
//     label: "Regency Beauty Institute-Charlotte",
//     value: "Regency Beauty Institute-Charlotte"
//   },
//   {
//     label: "Regency Beauty Institute-North Olmsted",
//     value: "Regency Beauty Institute-North Olmsted"
//   },
//   {
//     label: "Regency Beauty Institute-Columbus",
//     value: "Regency Beauty Institute-Columbus"
//   },
//   {
//     label: "Regency Beauty Institute-Elgin",
//     value: "Regency Beauty Institute-Elgin"
//   },
//   {
//     label: "The Salon Professional Academy-Appleton",
//     value: "The Salon Professional Academy-Appleton"
//   },
//   {
//     label: "Milan Institute of Cosmetology-Fairfield",
//     value: "Milan Institute of Cosmetology-Fairfield"
//   },
//   {
//     label: "Milan Institute of Cosmetology-Reno",
//     value: "Milan Institute of Cosmetology-Reno"
//   },
//   {
//     label: "Milan Institute of Cosmetology-Visalia",
//     value: "Milan Institute of Cosmetology-Visalia"
//   },
//   { label: "Ottawa University-Online", value: "Ottawa University-Online" },
//   {
//     label: "Broadview University-Orem",
//     value: "Broadview University-Orem"
//   },
//   {
//     label: "Paul Mitchell the School-Esani",
//     value: "Paul Mitchell the School-Esani"
//   },
//   {
//     label: "Institute of Production and Recording",
//     value: "Institute of Production and Recording"
//   },
//   {
//     label: "Virginia College-Greenville",
//     value: "Virginia College-Greenville"
//   },
//   {
//     label: "Paul Mitchell the School-Birmingham",
//     value: "Paul Mitchell the School-Birmingham"
//   },
//   { label: "Taft University System", value: "Taft University System" },
//   { label: "Mayfield College", value: "Mayfield College" },
//   {
//     label: "International Polytechnic Institute",
//     value: "International Polytechnic Institute"
//   },
//   {
//     label: "Academy of Esthetics and Cosmetology",
//     value: "Academy of Esthetics and Cosmetology"
//   },
//   { label: "BioHealth College", value: "BioHealth College" },
//   {
//     label: "International Professional School of Bodywork",
//     value: "International Professional School of Bodywork"
//   },
//   { label: "Borner's Barber College", value: "Borner's Barber College" },
//   {
//     label: "Paul Mitchell the School-Pasadena",
//     value: "Paul Mitchell the School-Pasadena"
//   },
//   {
//     label: "San Francisco Institute of Esthetics and Cosmetology",
//     value: "San Francisco Institute of Esthetics and Cosmetology"
//   },
//   { label: "Laurus College", value: "Laurus College" },
//   {
//     label: "Healing Hands School of Holistic Health",
//     value: "Healing Hands School of Holistic Health"
//   },
//   {
//     label: "Career Development Institute",
//     value: "Career Development Institute"
//   },
//   {
//     label: "Auguste Escoffier School of Culinary Arts-Boulder",
//     value: "Auguste Escoffier School of Culinary Arts-Boulder"
//   },
//   { label: "Aspen University", value: "Aspen University" },
//   {
//     label: "Institute of Taoist Education and Acupuncture",
//     value: "Institute of Taoist Education and Acupuncture"
//   },
//   { label: "National Beauty College", value: "National Beauty College" },
//   { label: "Denver School of Nursing", value: "Denver School of Nursing" },
//   {
//     label: "Cambridge Institute of Health & Technology",
//     value: "Cambridge Institute of Health & Technology"
//   },
//   { label: "Cozmo The School", value: "Cozmo The School" },
//   { label: "Allied Health Institute", value: "Allied Health Institute" },
//   { label: "North Florida Academy", value: "North Florida Academy" },
//   {
//     label: "Professional Hands Institute",
//     value: "Professional Hands Institute"
//   },
//   {
//     label: "Celebrity School of Beauty",
//     value: "Celebrity School of Beauty"
//   },
//   {
//     label: "Paul Mitchell the School-Atlanta",
//     value: "Paul Mitchell the School-Atlanta"
//   },
//   {
//     label: "Evans Hairstyling College-Rexburg",
//     value: "Evans Hairstyling College-Rexburg"
//   },
//   {
//     label: "Hair Academy Paul Mitchell Partner School",
//     value: "Hair Academy Paul Mitchell Partner School"
//   },
//   {
//     label: "University of Aesthetics-Chicago",
//     value: "University of Aesthetics-Chicago"
//   },
//   {
//     label: "University of Aesthetics-Downers Grove",
//     value: "University of Aesthetics-Downers Grove"
//   },
//   {
//     label: "Tricoci University of Beauty Culture-Chicago",
//     value: "Tricoci University of Beauty Culture-Chicago"
//   },
//   {
//     label: "Tricoci University of Beauty Culture-Glendale Heights",
//     value: "Tricoci University of Beauty Culture-Glendale Heights"
//   },
//   {
//     label: "Tricoci University of Beauty Culture-Peoria",
//     value: "Tricoci University of Beauty Culture-Peoria"
//   },
//   {
//     label: "Tricoci University of Beauty Culture-Rockford",
//     value: "Tricoci University of Beauty Culture-Rockford"
//   },
//   {
//     label: "Frederick School of Cosmetology",
//     value: "Frederick School of Cosmetology"
//   },
//   {
//     label: "Omega Studios' School of Applied Recording Arts & Sciences",
//     value: "Omega Studios' School of Applied Recording Arts & Sciences"
//   },
//   {
//     label: "Focus-Hope Information Technologies Center",
//     value: "Focus-Hope Information Technologies Center"
//   },
//   {
//     label: "International Cosmetology Academy",
//     value: "International Cosmetology Academy"
//   },
//   {
//     label: "French Academy of Cosmetology",
//     value: "French Academy of Cosmetology"
//   },
//   { label: "Healing Arts Center", value: "Healing Arts Center" },
//   {
//     label: "Paul Mitchell the School-Springfield",
//     value: "Paul Mitchell the School-Springfield"
//   },
//   {
//     label: "Urshan Graduate School of Theology",
//     value: "Urshan Graduate School of Theology"
//   },
//   {
//     label: "Mississippi Institute of Aesthetics Nails & Cosmetology",
//     value: "Mississippi Institute of Aesthetics Nails & Cosmetology"
//   },
//   { label: "College of Western Idaho", value: "College of Western Idaho" },
//   {
//     label: "Aveda Institute-Chapel Hill",
//     value: "Aveda Institute-Chapel Hill"
//   },
//   { label: "Charlotte School of Law", value: "Charlotte School of Law" },
//   {
//     label: "Daoist Traditions College of Chinese Medical Arts",
//     value: "Daoist Traditions College of Chinese Medical Arts"
//   },
//   {
//     label: "Total Image Beauty Academy",
//     value: "Total Image Beauty Academy"
//   },
//   { label: "Jersey College", value: "Jersey College" },
//   {
//     label: "American Institute of Medical Sciences & Education",
//     value: "American Institute of Medical Sciences & Education"
//   },
//   {
//     label: "Casal Institute of Nevada",
//     value: "Casal Institute of Nevada"
//   },
//   { label: "Career School of NY", value: "Career School of NY" },
//   {
//     label: "John Paolo's Xtreme Beauty Institute-Goldwell Product Artistry",
//     value: "John Paolo's Xtreme Beauty Institute-Goldwell Product Artistry"
//   },
//   {
//     label: "Ann Marie's World of Beauty School",
//     value: "Ann Marie's World of Beauty School"
//   },
//   {
//     label: "Yeshiva of Machzikai Hadas",
//     value: "Yeshiva of Machzikai Hadas"
//   },
//   { label: "Aveda Institute-Columbus", value: "Aveda Institute-Columbus" },
//   {
//     label: "Paul Mitchell the School-Cincinnati",
//     value: "Paul Mitchell the School-Cincinnati"
//   },
//   {
//     label: "Cutter's Edge School of Cosmetology",
//     value: "Cutter's Edge School of Cosmetology"
//   },
//   { label: "Hands on Therapy", value: "Hands on Therapy" },
//   {
//     label: "MediaTech Institute-Dallas",
//     value: "MediaTech Institute-Dallas"
//   },
//   { label: "PCCenter", value: "PCCenter" },
//   {
//     label: "Aveda Institute-San Antonio",
//     value: "Aveda Institute-San Antonio"
//   },
//   { label: "Skin Institute", value: "Skin Institute" },
//   { label: "Skin Science Institute", value: "Skin Science Institute" },
//   { label: "Global Health College", value: "Global Health College" },
//   {
//     label: "Pacific Northwest University of Health Sciences",
//     value: "Pacific Northwest University of Health Sciences"
//   },
//   {
//     label: "Visions in Hair Design Institute of Cosmetology",
//     value: "Visions in Hair Design Institute of Cosmetology"
//   },
//   { label: "Brensten Education", value: "Brensten Education" },
//   {
//     label: "The Chicago School of Professional Psychology at Irvine",
//     value: "The Chicago School of Professional Psychology at Irvine"
//   },
//   {
//     label: "California InterContinental University",
//     value: "California InterContinental University"
//   },
//   { label: "Fortis College-Dothan", value: "Fortis College-Dothan" },
//   {
//     label: "Fortis Institute-Pensacola",
//     value: "Fortis Institute-Pensacola"
//   },
//   {
//     label: "Fortis College-Montgomery",
//     value: "Fortis College-Montgomery"
//   },
//   {
//     label: "Fortis College School of Cosmetology",
//     value: "Fortis College School of Cosmetology"
//   },
//   {
//     label: "Woodland Community College",
//     value: "Woodland Community College"
//   },
//   {
//     label: "Dorsey Business Schools-Farmington Hills",
//     value: "Dorsey Business Schools-Farmington Hills"
//   },
//   {
//     label: "Dorsey Business Schools-Roseville Culinary Academy",
//     value: "Dorsey Business Schools-Roseville Culinary Academy"
//   },
//   {
//     label: "Vatterott College-Appling Farms",
//     value: "Vatterott College-Appling Farms"
//   },
//   {
//     label: "Minnesota School of Business-Moorhead",
//     value: "Minnesota School of Business-Moorhead"
//   },
//   {
//     label: "Brown Mackie College-Boise",
//     value: "Brown Mackie College-Boise"
//   },
//   {
//     label: "Brown Mackie College-Tulsa",
//     value: "Brown Mackie College-Tulsa"
//   },
//   {
//     label: "Fortis Institute-Birmingham",
//     value: "Fortis Institute-Birmingham"
//   },
//   {
//     label: "Daymar College-Scottsville",
//     value: "Daymar College-Scottsville"
//   },
//   {
//     label: "Miller-Motte College-Greenville",
//     value: "Miller-Motte College-Greenville"
//   },
//   {
//     label: "The Chicago School of Professional Psychology at Los Angeles",
//     value: "The Chicago School of Professional Psychology at Los Angeles"
//   },
//   {
//     label: "Metro Business College-Arnold",
//     value: "Metro Business College-Arnold"
//   },
//   {
//     label: "The Chicago School of Professional Psychology at Westwood",
//     value: "The Chicago School of Professional Psychology at Westwood"
//   },
//   {
//     label: "Cardiac and Vascular Institute of Ultrasound",
//     value: "Cardiac and Vascular Institute of Ultrasound"
//   },
//   {
//     label: "Virginia College-Jacksonville",
//     value: "Virginia College-Jacksonville"
//   },
//   { label: "Studio Academy of Beauty", value: "Studio Academy of Beauty" },
//   {
//     label: "California Nurses Educational Institute",
//     value: "California Nurses Educational Institute"
//   },
//   { label: "Central Nursing College", value: "Central Nursing College" },
//   { label: "RWM Fiber Optics", value: "RWM Fiber Optics" },
//   {
//     label: "Paul Mitchell the School-Sacramento",
//     value: "Paul Mitchell the School-Sacramento"
//   },
//   {
//     label: "Providence Christian College",
//     value: "Providence Christian College"
//   },
//   {
//     label: "Summit Salon & Beauty School",
//     value: "Summit Salon & Beauty School"
//   },
//   {
//     label: "Oxford Academy of Hair Design",
//     value: "Oxford Academy of Hair Design"
//   },
//   {
//     label: "Institute of World Politics",
//     value: "Institute of World Politics"
//   },
//   {
//     label: "Pontifical John Paul II Institute for Studies on Marriage and Family",
//     value: "Pontifical John Paul II Institute for Studies on Marriage and Family"
//   },
//   {
//     label: "Medical Institute of Palm Beach",
//     value: "Medical Institute of Palm Beach"
//   },
//   {
//     label: "Lake Lanier School of Massage",
//     value: "Lake Lanier School of Massage"
//   },
//   {
//     label: "Oliver Finley Academy of Cosmetology",
//     value: "Oliver Finley Academy of Cosmetology"
//   },
//   { label: "National Career College", value: "National Career College" },
//   { label: "Aveda Institute-Chicago", value: "Aveda Institute-Chicago" },
//   {
//     label: "Tricoci University of Beauty Culture-Libertyville",
//     value: "Tricoci University of Beauty Culture-Libertyville"
//   },
//   {
//     label: "Tricoci University of Beauty Culture-Bridgeview",
//     value: "Tricoci University of Beauty Culture-Bridgeview"
//   },
//   {
//     label: "The Temple-A Paul Mitchell Partner School",
//     value: "The Temple-A Paul Mitchell Partner School"
//   },
//   {
//     label: "Center for Massage & Natural Health",
//     value: "Center for Massage & Natural Health"
//   },
//   {
//     label: "Academy of Hair Design-Oklahoma City",
//     value: "Academy of Hair Design-Oklahoma City"
//   },
//   {
//     label: "Education and Technology Institute",
//     value: "Education and Technology Institute"
//   },
//   {
//     label: "Pulse Beauty Academy-A Paul Mitchell Partner School",
//     value: "Pulse Beauty Academy-A Paul Mitchell Partner School"
//   },
//   {
//     label: "Liberty Technical College",
//     value: "Liberty Technical College"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Cranston",
//     value: "Toni & Guy Hairdressing Academy-Cranston"
//   },
//   {
//     label: "South Texas Training Center",
//     value: "South Texas Training Center"
//   },
//   { label: "Columbia College", value: "Columbia College" },
//   {
//     label: "Vermont College of Fine Arts",
//     value: "Vermont College of Fine Arts"
//   },
//   {
//     label: "Advanced Welding Institute",
//     value: "Advanced Welding Institute"
//   },
//   {
//     label: "The Art Institute of Washington-Dulles",
//     value: "The Art Institute of Washington-Dulles"
//   },
//   {
//     label: "Paul Mitchell the School-Memphis",
//     value: "Paul Mitchell the School-Memphis"
//   },
//   {
//     label: "Pima Medical Institute-East Valley",
//     value: "Pima Medical Institute-East Valley"
//   },
//   {
//     label: "Virginia College-Charleston",
//     value: "Virginia College-Charleston"
//   },
//   {
//     label: "The Ohio Academy Paul Mitchell Partner School-Cleveland",
//     value: "The Ohio Academy Paul Mitchell Partner School-Cleveland"
//   },
//   {
//     label: "The Ohio Academy Paul Mitchell Partner School-Columbus",
//     value: "The Ohio Academy Paul Mitchell Partner School-Columbus"
//   },
//   { label: "Georgia Beauty Academy", value: "Georgia Beauty Academy" },
//   {
//     label: "Stautzenberger Institute-Allen Park",
//     value: "Stautzenberger Institute-Allen Park"
//   },
//   {
//     label: "Empire Beauty School-Lauderhill",
//     value: "Empire Beauty School-Lauderhill"
//   },
//   {
//     label: "Empire Beauty School-Spring Lake Park",
//     value: "Empire Beauty School-Spring Lake Park"
//   },
//   {
//     label: "MediaTech Institute-Austin",
//     value: "MediaTech Institute-Austin"
//   },
//   {
//     label: "MediaTech Institute-Houston",
//     value: "MediaTech Institute-Houston"
//   },
//   { label: "Fortis College-Phoenix", value: "Fortis College-Phoenix" },
//   {
//     label: "Miller-Motte College-Raleigh",
//     value: "Miller-Motte College-Raleigh"
//   },
//   { label: "Lamson Institute", value: "Lamson Institute" },
//   {
//     label: "Euphoria Institute of Beauty Arts & Sciences-Las Vegas",
//     value: "Euphoria Institute of Beauty Arts & Sciences-Las Vegas"
//   },
//   {
//     label: "Lincoln College of Technology-Toledo",
//     value: "Lincoln College of Technology-Toledo"
//   },
//   {
//     label: "College of Hair Design-East Campus",
//     value: "College of Hair Design-East Campus"
//   },
//   {
//     label: "International Academy of Design and Technology-Online",
//     value: "International Academy of Design and Technology-Online"
//   },
//   {
//     label: "Le Cordon Bleu College of Culinary Arts-St Louis",
//     value: "Le Cordon Bleu College of Culinary Arts-St Louis"
//   },
//   {
//     label: "Sanford-Brown College-San Antonio",
//     value: "Sanford-Brown College-San Antonio"
//   },
//   { label: "Heritage College-Wichita", value: "Heritage College-Wichita" },
//   {
//     label: "Heritage College-Little Rock",
//     value: "Heritage College-Little Rock"
//   },
//   {
//     label: "Argosy University-Phoenix Online Division",
//     value: "Argosy University-Phoenix Online Division"
//   },
//   {
//     label: "MedTech College-Greenwood Campus",
//     value: "MedTech College-Greenwood Campus"
//   },
//   {
//     label: "MedTech College-Ft Wayne Campus",
//     value: "MedTech College-Ft Wayne Campus"
//   },
//   {
//     label: "MedTech College-Lexington Campus",
//     value: "MedTech College-Lexington Campus"
//   },
//   {
//     label: "ITT Technical Institute-Madison",
//     value: "ITT Technical Institute-Madison"
//   },
//   {
//     label: "ITT Technical Institute-Springfield",
//     value: "ITT Technical Institute-Springfield"
//   },
//   {
//     label: "ITT Technical Institute-Huntington",
//     value: "ITT Technical Institute-Huntington"
//   },
//   {
//     label: "ITT Technical Institute-Concord",
//     value: "ITT Technical Institute-Concord"
//   },
//   {
//     label: "ITT Technical Institute-Fort Myers",
//     value: "ITT Technical Institute-Fort Myers"
//   },
//   {
//     label: "ITT Technical Institute-Charlotte North",
//     value: "ITT Technical Institute-Charlotte North"
//   },
//   {
//     label: "Fortis College-Salt Lake City",
//     value: "Fortis College-Salt Lake City"
//   },
//   {
//     label: "Polytechnic University of Puerto Rico-Miami",
//     value: "Polytechnic University of Puerto Rico-Miami"
//   },
//   {
//     label: "Polytechnic University of Puerto Rico-Orlando",
//     value: "Polytechnic University of Puerto Rico-Orlando"
//   },
//   {
//     label: "Ross Medical Education Center-Fort Wayne",
//     value: "Ross Medical Education Center-Fort Wayne"
//   },
//   {
//     label: "Ross Medical Education Center-Portage",
//     value: "Ross Medical Education Center-Portage"
//   },
//   {
//     label: "The Commonwealth Medical College",
//     value: "The Commonwealth Medical College"
//   },
//   {
//     label: "Josef's School of Hair Design Inc-Fargo West",
//     value: "Josef's School of Hair Design Inc-Fargo West"
//   },
//   {
//     label: "Northeast Technology Center-Claremore",
//     value: "Northeast Technology Center-Claremore"
//   },
//   {
//     label: "Salon Success Academy-Fontana",
//     value: "Salon Success Academy-Fontana"
//   },
//   {
//     label: "Salon Success Academy-Redlands",
//     value: "Salon Success Academy-Redlands"
//   },
//   {
//     label: "Brown Mackie College-Phoenix",
//     value: "Brown Mackie College-Phoenix"
//   },
//   {
//     label: "Strayer University-West Virginia",
//     value: "Strayer University-West Virginia"
//   },
//   { label: "Strayer University-Utah", value: "Strayer University-Utah" },
//   { label: "Strayer University-Ohio", value: "Strayer University-Ohio" },
//   {
//     label: "Regency Beauty Institute-Tinley Park",
//     value: "Regency Beauty Institute-Tinley Park"
//   },
//   {
//     label: "Regency Beauty Institute-Columbia",
//     value: "Regency Beauty Institute-Columbia"
//   },
//   {
//     label: "Regency Beauty Institute-South Bend",
//     value: "Regency Beauty Institute-South Bend"
//   },
//   {
//     label: "Regency Beauty Institute-Detroit Lakeside",
//     value: "Regency Beauty Institute-Detroit Lakeside"
//   },
//   {
//     label: "Regency Beauty Institute-Fort Myers",
//     value: "Regency Beauty Institute-Fort Myers"
//   },
//   {
//     label: "Regency Beauty Institute-Arlington",
//     value: "Regency Beauty Institute-Arlington"
//   },
//   {
//     label: "Regency Beauty Institute-Durham",
//     value: "Regency Beauty Institute-Durham"
//   },
//   {
//     label: "Minnesota School of Business-Elk River",
//     value: "Minnesota School of Business-Elk River"
//   },
//   {
//     label: "Brown Mackie College-Greenville",
//     value: "Brown Mackie College-Greenville"
//   },
//   {
//     label: "Globe University-Sioux Falls",
//     value: "Globe University-Sioux Falls"
//   },
//   {
//     label: "Globe University-Eau Claire",
//     value: "Globe University-Eau Claire"
//   },
//   {
//     label: "Vanguard College of Cosmetology-Baton Rouge",
//     value: "Vanguard College of Cosmetology-Baton Rouge"
//   },
//   {
//     label: "Globe University-Minneapolis",
//     value: "Globe University-Minneapolis"
//   },
//   {
//     label: "San Joaquin Valley College-Hesperia",
//     value: "San Joaquin Valley College-Hesperia"
//   },
//   {
//     label: "Beauty Schools of America-Homestead",
//     value: "Beauty Schools of America-Homestead"
//   },
//   {
//     label: "ATI Career Training Center-Dallas",
//     value: "ATI Career Training Center-Dallas"
//   },
//   {
//     label: "South Texas Vocational Technical Institute-Brownsville",
//     value: "South Texas Vocational Technical Institute-Brownsville"
//   },
//   {
//     label: "South Texas Vocational Technical Institute-Corpus Christi",
//     value: "South Texas Vocational Technical Institute-Corpus Christi"
//   },
//   {
//     label: "L'Ecole Culinaire-Memphis",
//     value: "L'Ecole Culinaire-Memphis"
//   },
//   {
//     label: "University of Minnesota-Rochester",
//     value: "University of Minnesota-Rochester"
//   },
//   {
//     label: "Health And Style Institute",
//     value: "Health And Style Institute"
//   },
//   { label: "CBT College-Cutler Bay", value: "CBT College-Cutler Bay" },
//   {
//     label: "Provo College�American Fork",
//     value: "Provo College�American Fork"
//   },
//   {
//     label: "National College-Columbus",
//     value: "National College-Columbus"
//   },
//   {
//     label: "Kaplan Career Institute-Boston",
//     value: "Kaplan Career Institute-Boston"
//   },
//   {
//     label: "Herzing University-Toledo",
//     value: "Herzing University-Toledo"
//   },
//   { label: "Capri Beauty College", value: "Capri Beauty College" },
//   {
//     label: "Milan Institute of Cosmetology-Concord",
//     value: "Milan Institute of Cosmetology-Concord"
//   },
//   {
//     label: "Milan Institute-Bakersfield",
//     value: "Milan Institute-Bakersfield"
//   },
//   { label: "Homestead Schools", value: "Homestead Schools" },
//   {
//     label: "Carrington College-Las Vegas",
//     value: "Carrington College-Las Vegas"
//   },
//   { label: "Carrington College-Reno", value: "Carrington College-Reno" },
//   {
//     label: "Chamberlain College of Nursing-Florida",
//     value: "Chamberlain College of Nursing-Florida"
//   },
//   {
//     label: "Remington College-Columbia Campus",
//     value: "Remington College-Columbia Campus"
//   },
//   {
//     label: "Remington College of Nursing Orlando",
//     value: "Remington College of Nursing Orlando"
//   },
//   {
//     label: "Washington Barber College Inc",
//     value: "Washington Barber College Inc"
//   },
//   {
//     label: "InterCoast Colleges-Elk Grove",
//     value: "InterCoast Colleges-Elk Grove"
//   },
//   { label: "Universal Barber College", value: "Universal Barber College" },
//   { label: "Horizon University", value: "Horizon University" },
//   {
//     label: "San Diego Culinary Institute",
//     value: "San Diego Culinary Institute"
//   },
//   {
//     label: "Beyond 21st Century Beauty Academy",
//     value: "Beyond 21st Century Beauty Academy"
//   },
//   { label: "Franklin Career College", value: "Franklin Career College" },
//   {
//     label: "Academy for Jewish Religion-California",
//     value: "Academy for Jewish Religion-California"
//   },
//   { label: "Hollywood Beauty College", value: "Hollywood Beauty College" },
//   { label: "Angeles College", value: "Angeles College" },
//   { label: "Angeles Institute", value: "Angeles Institute" },
//   {
//     label: "Paul Mitchell the School-Temecula",
//     value: "Paul Mitchell the School-Temecula"
//   },
//   {
//     label: "European Academy of Cosmetology and Hairdressing",
//     value: "European Academy of Cosmetology and Hairdressing"
//   },
//   {
//     label: "International Institute of Cosmetology",
//     value: "International Institute of Cosmetology"
//   },
//   {
//     label: "Florida School of Traditional Midwifery",
//     value: "Florida School of Traditional Midwifery"
//   },
//   {
//     label: "Walton Career Development Center",
//     value: "Walton Career Development Center"
//   },
//   {
//     label: "Immokalee Technical Center",
//     value: "Immokalee Technical Center"
//   },
//   {
//     label: "American Academy of Cosmetology",
//     value: "American Academy of Cosmetology"
//   },
//   {
//     label: "University of Fort Lauderdale",
//     value: "University of Fort Lauderdale"
//   },
//   {
//     label: "Aviation Institute of Maintenance-Orlando",
//     value: "Aviation Institute of Maintenance-Orlando"
//   },
//   {
//     label: "The Salon Professional Academy-Tampa",
//     value: "The Salon Professional Academy-Tampa"
//   },
//   {
//     label: "The Salon Professional Academy-Gainesville",
//     value: "The Salon Professional Academy-Gainesville"
//   },
//   {
//     label: "The Salon Professional Academy-The Villages",
//     value: "The Salon Professional Academy-The Villages"
//   },
//   { label: "The Hair Academy Inc", value: "The Hair Academy Inc" },
//   {
//     label: "Profile Institute of Barber-Styling",
//     value: "Profile Institute of Barber-Styling"
//   },
//   {
//     label: "The Process Institute of Cosmetology",
//     value: "The Process Institute of Cosmetology"
//   },
//   {
//     label: "New Hope Christian College-Honolulu",
//     value: "New Hope Christian College-Honolulu"
//   },
//   {
//     label: "D & L Academy of Hair Design",
//     value: "D & L Academy of Hair Design"
//   },
//   {
//     label: "Master Educators Beauty School",
//     value: "Master Educators Beauty School"
//   },
//   {
//     label: "Ambria College of Nursing",
//     value: "Ambria College of Nursing"
//   },
//   {
//     label: "Midwestern Career College",
//     value: "Midwestern Career College"
//   },
//   {
//     label: "Paul Mitchell the School-Normal",
//     value: "Paul Mitchell the School-Normal"
//   },
//   {
//     label: "Innovations Design Academy",
//     value: "Innovations Design Academy"
//   },
//   {
//     label: "Aveda Fredric's Institute-Indianapolis",
//     value: "Aveda Fredric's Institute-Indianapolis"
//   },
//   {
//     label: "The Salon Professional Academy-Anderson",
//     value: "The Salon Professional Academy-Anderson"
//   },
//   { label: "Eric Fisher Academy", value: "Eric Fisher Academy" },
//   {
//     label: "A & W Healthcare Educators",
//     value: "A & W Healthcare Educators"
//   },
//   { label: "My Le's Beauty College", value: "My Le's Beauty College" },
//   {
//     label: "Blackstone Valley Vocational Regional School District",
//     value: "Blackstone Valley Vocational Regional School District"
//   },
//   {
//     label: "Southern Worcester County Regional Voc School District",
//     value: "Southern Worcester County Regional Voc School District"
//   },
//   { label: "L'esprit Academy", value: "L'esprit Academy" },
//   {
//     label: "Marketti Academy of Cosmetology",
//     value: "Marketti Academy of Cosmetology"
//   },
//   {
//     label: "CenterPoint Massage and Shiatsu Therapy School and Clinic",
//     value: "CenterPoint Massage and Shiatsu Therapy School and Clinic"
//   },
//   {
//     label: "Avalon School of Cosmetology",
//     value: "Avalon School of Cosmetology"
//   },
//   {
//     label: "American Business and Technology University",
//     value: "American Business and Technology University"
//   },
//   { label: "City Vision College", value: "City Vision College" },
//   {
//     label: "Transformed Barber and Cosmetology Academy",
//     value: "Transformed Barber and Cosmetology Academy"
//   },
//   {
//     label: "Bitterroot School of Cosmetology",
//     value: "Bitterroot School of Cosmetology"
//   },
//   {
//     label: "Atlanta Beauty & Barber Academy",
//     value: "Atlanta Beauty & Barber Academy"
//   },
//   {
//     label: "The Salon Professional Academy-Great Falls",
//     value: "The Salon Professional Academy-Great Falls"
//   },
//   { label: "Park West Barber School", value: "Park West Barber School" },
//   {
//     label: "National Career Institute",
//     value: "National Career Institute"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Albuquerque",
//     value: "Toni & Guy Hairdressing Academy-Albuquerque"
//   },
//   {
//     label: "International Academy of Style",
//     value: "International Academy of Style"
//   },
//   {
//     label: "EDP School of Computer Programming",
//     value: "EDP School of Computer Programming"
//   },
//   {
//     label: "New York Medical Career Training Center",
//     value: "New York Medical Career Training Center"
//   },
//   {
//     label: "Institute of Culinary Education",
//     value: "Institute of Culinary Education"
//   },
//   {
//     label: "New Life Business Institute",
//     value: "New Life Business Institute"
//   },
//   {
//     label: "The Salon Professional Academy-Tonawanda",
//     value: "The Salon Professional Academy-Tonawanda"
//   },
//   {
//     label: "Onondaga School of Therapeutic Massage-Syracuse",
//     value: "Onondaga School of Therapeutic Massage-Syracuse"
//   },
//   {
//     label: "Academy of Cosmetology and Esthetics NYC",
//     value: "Academy of Cosmetology and Esthetics NYC"
//   },
//   {
//     label: "Finger Lakes School of Massage",
//     value: "Finger Lakes School of Massage"
//   },
//   {
//     label: "Four County Career Center",
//     value: "Four County Career Center"
//   },
//   {
//     label: "Vanity School of Cosmetology",
//     value: "Vanity School of Cosmetology"
//   },
//   {
//     label: "Tolles Career and Technical Center",
//     value: "Tolles Career and Technical Center"
//   },
//   {
//     label: "The Salon Professional Academy-Perrysburg",
//     value: "The Salon Professional Academy-Perrysburg"
//   },
//   {
//     label: "Portland Actors Conservatory",
//     value: "Portland Actors Conservatory"
//   },
//   {
//     label: "Somerset County Technology Center",
//     value: "Somerset County Technology Center"
//   },
//   { label: "Metro Beauty Academy", value: "Metro Beauty Academy" },
//   { label: "Barone Beauty Academy", value: "Barone Beauty Academy" },
//   {
//     label: "Academy for Careers and Technology",
//     value: "Academy for Careers and Technology"
//   },
//   {
//     label: "Aiken School of Cosmetology",
//     value: "Aiken School of Cosmetology"
//   },
//   { label: "Love Beauty School Inc", value: "Love Beauty School Inc" },
//   {
//     label: "Professional Career Training Institute",
//     value: "Professional Career Training Institute"
//   },
//   {
//     label: "Cannon Institute of Higher Learning",
//     value: "Cannon Institute of Higher Learning"
//   },
//   {
//     label: "Cardiotech Ultrasound School",
//     value: "Cardiotech Ultrasound School"
//   },
//   {
//     label: "DuVall's School of Cosmetology",
//     value: "DuVall's School of Cosmetology"
//   },
//   { label: "Advanced Beauty College", value: "Advanced Beauty College" },
//   { label: "Texas Beauty College", value: "Texas Beauty College" },
//   { label: "Avenue Five Institute", value: "Avenue Five Institute" },
//   {
//     label: "Corpus Christi Beauty Academy",
//     value: "Corpus Christi Beauty Academy"
//   },
//   {
//     label: "The Salon Professional Academy-Lewisville",
//     value: "The Salon Professional Academy-Lewisville"
//   },
//   { label: "Renaissance Academie", value: "Renaissance Academie" },
//   { label: "Bethel College", value: "Bethel College" },
//   {
//     label: "Institute of Advanced Medical Esthetics",
//     value: "Institute of Advanced Medical Esthetics"
//   },
//   {
//     label: "Gary Manuel Aveda Institute",
//     value: "Gary Manuel Aveda Institute"
//   },
//   {
//     label: "Northwest School of Wooden Boat Building",
//     value: "Northwest School of Wooden Boat Building"
//   },
//   {
//     label: "Bainbridge Graduate Institute",
//     value: "Bainbridge Graduate Institute"
//   },
//   {
//     label: "The Salon Professional Academy-Onalaska",
//     value: "The Salon Professional Academy-Onalaska"
//   },
//   {
//     label: "Regency Beauty Institute-North Tucson",
//     value: "Regency Beauty Institute-North Tucson"
//   },
//   {
//     label: "Kaplan College-Chula Vista",
//     value: "Kaplan College-Chula Vista"
//   },
//   {
//     label: "InterCoast Colleges-Roseville",
//     value: "InterCoast Colleges-Roseville"
//   },
//   {
//     label: "West Coast University-Orange County",
//     value: "West Coast University-Orange County"
//   },
//   {
//     label: "West Coast University-Ontario",
//     value: "West Coast University-Ontario"
//   },
//   {
//     label: "Kaplan College-Pembroke Pines",
//     value: "Kaplan College-Pembroke Pines"
//   },
//   {
//     label: "Dade Medical College-Homestead",
//     value: "Dade Medical College-Homestead"
//   },
//   { label: "Virginia College-Augusta", value: "Virginia College-Augusta" },
//   {
//     label: "Midwest Technical Institute-East Peoria",
//     value: "Midwest Technical Institute-East Peoria"
//   },
//   {
//     label: "Paul Mitchell the School-Chicago",
//     value: "Paul Mitchell the School-Chicago"
//   },
//   {
//     label: "Kaplan College-Indianapolis",
//     value: "Kaplan College-Indianapolis"
//   },
//   {
//     label: "Regency Beauty Institute-Evansville",
//     value: "Regency Beauty Institute-Evansville"
//   },
//   {
//     label: "Regency Beauty Institute-Wichita",
//     value: "Regency Beauty Institute-Wichita"
//   },
//   {
//     label: "Regency Beauty Institute-Shreveport",
//     value: "Regency Beauty Institute-Shreveport"
//   },
//   {
//     label: "Regency Beauty Institute-Springfield",
//     value: "Regency Beauty Institute-Springfield"
//   },
//   {
//     label: "Regency Beauty Institute-Canton",
//     value: "Regency Beauty Institute-Canton"
//   },
//   {
//     label: "Regency Beauty Institute-Spartanburg",
//     value: "Regency Beauty Institute-Spartanburg"
//   },
//   {
//     label: "Regency Beauty Institute-Chattanooga",
//     value: "Regency Beauty Institute-Chattanooga"
//   },
//   {
//     label: "Regency Beauty Institute-Mesquite",
//     value: "Regency Beauty Institute-Mesquite"
//   },
//   {
//     label: "Kaplan Career Institute-Dearborn",
//     value: "Kaplan Career Institute-Dearborn"
//   },
//   {
//     label: "Dorsey Business Schools-Waterford Pontiac",
//     value: "Dorsey Business Schools-Waterford Pontiac"
//   },
//   {
//     label: "Regina's College of Beauty-High Point",
//     value: "Regina's College of Beauty-High Point"
//   },
//   {
//     label: "Miller-Motte College-Fayetteville",
//     value: "Miller-Motte College-Fayetteville"
//   },
//   {
//     label: "Drake College of Business-Newark",
//     value: "Drake College of Business-Newark"
//   },
//   {
//     label: "European Massage Therapy School-Las Vegas",
//     value: "European Massage Therapy School-Las Vegas"
//   },
//   {
//     label: "Harrison College-Grove City",
//     value: "Harrison College-Grove City"
//   },
//   {
//     label: "Miller-Motte Technical College-Columbus",
//     value: "Miller-Motte Technical College-Columbus"
//   },
//   {
//     label: "National University College-Ponce",
//     value: "National University College-Ponce"
//   },
//   {
//     label: "Fortis Institute-Grand Prairie",
//     value: "Fortis Institute-Grand Prairie"
//   },
//   {
//     label: "Paul Mitchell the School-St George",
//     value: "Paul Mitchell the School-St George"
//   },
//   {
//     label: "The Art Institute of Virginia Beach",
//     value: "The Art Institute of Virginia Beach"
//   },
//   {
//     label: "Bryant & Stratton College-Bayshore",
//     value: "Bryant & Stratton College-Bayshore"
//   },
//   {
//     label: "Gerstner Sloan-Kettering Graduate School of Biomedical Sciences",
//     value: "Gerstner Sloan-Kettering Graduate School of Biomedical Sciences"
//   },
//   { label: "Daymar College-Online", value: "Daymar College-Online" },
//   {
//     label: "Virginia College-Columbia",
//     value: "Virginia College-Columbia"
//   },
//   {
//     label: "Sanford-Brown College-Dearborn",
//     value: "Sanford-Brown College-Dearborn"
//   },
//   {
//     label: "Sanford-Brown College-Grand Rapids",
//     value: "Sanford-Brown College-Grand Rapids"
//   },
//   {
//     label: "Sanford-Brown College-Indianapolis",
//     value: "Sanford-Brown College-Indianapolis"
//   },
//   {
//     label: "Sanford-Brown College-Hillside",
//     value: "Sanford-Brown College-Hillside"
//   },
//   {
//     label: "Sanford-Brown College-Tinley Park",
//     value: "Sanford-Brown College-Tinley Park"
//   },
//   {
//     label: "Sanford-Brown College-Phoenix",
//     value: "Sanford-Brown College-Phoenix"
//   },
//   {
//     label: "Sanford-Brown Institute-Orlando",
//     value: "Sanford-Brown Institute-Orlando"
//   },
//   {
//     label: "Fortis College-Indianapolis",
//     value: "Fortis College-Indianapolis"
//   },
//   { label: "Kaplan College-Arlington", value: "Kaplan College-Arlington" },
//   { label: "Kaplan College-Charlotte", value: "Kaplan College-Charlotte" },
//   {
//     label: "Kaplan College-Jacksonville",
//     value: "Kaplan College-Jacksonville"
//   },
//   {
//     label: "Globe University-Madison East",
//     value: "Globe University-Madison East"
//   },
//   {
//     label: "Minnesota School of Business-Lakeville",
//     value: "Minnesota School of Business-Lakeville"
//   },
//   {
//     label: "Globe University�Green Bay",
//     value: "Globe University�Green Bay"
//   },
//   {
//     label: "Globe University�Madison West",
//     value: "Globe University�Madison West"
//   },
//   { label: "Globe University�Wausau", value: "Globe University�Wausau" },
//   {
//     label: "Dade Medical College-Hollywood",
//     value: "Dade Medical College-Hollywood"
//   },
//   {
//     label: "Empire Beauty School-E Memphis",
//     value: "Empire Beauty School-E Memphis"
//   },
//   {
//     label: "Empire Beauty School-Nashville",
//     value: "Empire Beauty School-Nashville"
//   },
//   {
//     label: "Empire Beauty School-Jackson",
//     value: "Empire Beauty School-Jackson"
//   },
//   {
//     label: "Empire Beauty School-Springfield",
//     value: "Empire Beauty School-Springfield"
//   },
//   {
//     label: "Empire Beauty School-Paramus",
//     value: "Empire Beauty School-Paramus"
//   },
//   {
//     label: "Empire Beauty School-Speedway",
//     value: "Empire Beauty School-Speedway"
//   },
//   {
//     label: "Empire Beauty School-Morrow",
//     value: "Empire Beauty School-Morrow"
//   },
//   {
//     label: "Strayer University-Arkansas",
//     value: "Strayer University-Arkansas"
//   },
//   {
//     label: "Strayer University-Georgia",
//     value: "Strayer University-Georgia"
//   },
//   {
//     label: "Strayer University-Louisiana",
//     value: "Strayer University-Louisiana"
//   },
//   {
//     label: "Strayer University-Mississippi",
//     value: "Strayer University-Mississippi"
//   },
//   {
//     label: "Strayer University-South Carolina",
//     value: "Strayer University-South Carolina"
//   },
//   { label: "Strayer University-Texas", value: "Strayer University-Texas" },
//   {
//     label: "The Art Institute of San Antonio",
//     value: "The Art Institute of San Antonio"
//   },
//   {
//     label: "Globe University-La Crosse",
//     value: "Globe University-La Crosse"
//   },
//   {
//     label: "The Hair Design School-S Memphis",
//     value: "The Hair Design School-S Memphis"
//   },
//   {
//     label: "The Hair Design School-Charlotte",
//     value: "The Hair Design School-Charlotte"
//   },
//   {
//     label: "The Hair Design School-Durham",
//     value: "The Hair Design School-Durham"
//   },
//   {
//     label: "The Hair Design School-E Greensboro",
//     value: "The Hair Design School-E Greensboro"
//   },
//   {
//     label: "The Hair Design School-Winston-Salem",
//     value: "The Hair Design School-Winston-Salem"
//   },
//   {
//     label: "Empire Beauty School-West Palm",
//     value: "Empire Beauty School-West Palm"
//   },
//   {
//     label: "Empire Beauty School-Pineville",
//     value: "Empire Beauty School-Pineville"
//   },
//   {
//     label: "The Hair Design School-N Memphis",
//     value: "The Hair Design School-N Memphis"
//   },
//   {
//     label: "Broadview Entertainment Arts University",
//     value: "Broadview Entertainment Arts University"
//   },
//   {
//     label: "Bryant & Stratton College-Hampton",
//     value: "Bryant & Stratton College-Hampton"
//   },
//   {
//     label: "Paul Mitchell the School-Phoenix",
//     value: "Paul Mitchell the School-Phoenix"
//   },
//   { label: "All Beauty College", value: "All Beauty College" },
//   {
//     label: "Northern California Institute of Cosmetology Inc",
//     value: "Northern California Institute of Cosmetology Inc"
//   },
//   {
//     label: "Golden State College of Court Reporting",
//     value: "Golden State College of Court Reporting"
//   },
//   {
//     label: "Preferred College of Nursing-Los Angeles",
//     value: "Preferred College of Nursing-Los Angeles"
//   },
//   {
//     label: "Trinity Vocational Center",
//     value: "Trinity Vocational Center"
//   },
//   {
//     label: "SICE Paul Mitchell Partner School",
//     value: "SICE Paul Mitchell Partner School"
//   },
//   { label: "Cosmo Beauty Academy", value: "Cosmo Beauty Academy" },
//   {
//     label: "Paul Mitchell the School-Fresno",
//     value: "Paul Mitchell the School-Fresno"
//   },
//   { label: "Unitek College", value: "Unitek College" },
//   {
//     label: "Gurnick Academy of Medical Arts",
//     value: "Gurnick Academy of Medical Arts"
//   },
//   {
//     label: "Southern California University SOMA",
//     value: "Southern California University SOMA"
//   },
//   {
//     label: "Paul Mitchell the School-East Bay",
//     value: "Paul Mitchell the School-East Bay"
//   },
//   {
//     label: "South University�Richmond",
//     value: "South University�Richmond"
//   },
//   {
//     label: "South University�Virginia Beach",
//     value: "South University�Virginia Beach"
//   },
//   { label: "Aveda Institute-Denver", value: "Aveda Institute-Denver" },
//   {
//     label: "Paul Mitchell the School-Colorado Springs",
//     value: "Paul Mitchell the School-Colorado Springs"
//   },
//   {
//     label: "The Salon Professional Academy-Colorado Springs",
//     value: "The Salon Professional Academy-Colorado Springs"
//   },
//   {
//     label: "Paul Mitchell the School-Delaware",
//     value: "Paul Mitchell the School-Delaware"
//   },
//   { label: "Future-Tech Institute", value: "Future-Tech Institute" },
//   {
//     label: "Marchman Technical Education Center",
//     value: "Marchman Technical Education Center"
//   },
//   {
//     label: "Eureka Institute of Health and Beauty",
//     value: "Eureka Institute of Health and Beauty"
//   },
//   {
//     label: "The Salon Professional Academy-Ft Myers",
//     value: "The Salon Professional Academy-Ft Myers"
//   },
//   { label: "SOLEX College", value: "SOLEX College" },
//   {
//     label: "Unity Cosmetology College",
//     value: "Unity Cosmetology College"
//   },
//   {
//     label: "Universal Spa Training Academy",
//     value: "Universal Spa Training Academy"
//   },
//   {
//     label: "The Salon Professional Academy-Evansville",
//     value: "The Salon Professional Academy-Evansville"
//   },
//   {
//     label: "Tri County Regional Vocational Technical High School",
//     value: "Tri County Regional Vocational Technical High School"
//   },
//   {
//     label: "Compass College of Cinematic Arts",
//     value: "Compass College of Cinematic Arts"
//   },
//   {
//     label: "Nova Academy of Cosmetology",
//     value: "Nova Academy of Cosmetology"
//   },
//   { label: "Victory Trade School", value: "Victory Trade School" },
//   { label: "Starting Points Inc", value: "Starting Points Inc" },
//   {
//     label: "The Lab-Paul Mitchell Partner School",
//     value: "The Lab-Paul Mitchell Partner School"
//   },
//   {
//     label: "SAE Institute of Technology-New York",
//     value: "SAE Institute of Technology-New York"
//   },
//   {
//     label: "John Paolo's Xtreme Beauty Institute-Goldwell Product Artistry",
//     value: "John Paolo's Xtreme Beauty Institute-Goldwell Product Artistry"
//   },
//   {
//     label: "The Artisan College of Cosmetology",
//     value: "The Artisan College of Cosmetology"
//   },
//   { label: "Sage School of Massage", value: "Sage School of Massage" },
//   {
//     label: "Lawyer's Assistant School of Dallas",
//     value: "Lawyer's Assistant School of Dallas"
//   },
//   { label: "ABC Beauty Academy", value: "ABC Beauty Academy" },
//   { label: "Salon & Spa Institute", value: "Salon & Spa Institute" },
//   { label: "American Beauty Academy", value: "American Beauty Academy" },
//   {
//     label: "The Salon Professional Academy-Tacoma",
//     value: "The Salon Professional Academy-Tacoma"
//   },
//   { label: "Academy of Cosmetology", value: "Academy of Cosmetology" },
//   { label: "The Academy Waukesha", value: "The Academy Waukesha" },
//   {
//     label: "ITT Technical Institute-Merrillville",
//     value: "ITT Technical Institute-Merrillville"
//   },
//   {
//     label: "ITT Technical Institute-Tallahassee",
//     value: "ITT Technical Institute-Tallahassee"
//   },
//   {
//     label: "ITT Technical Institute-Salem",
//     value: "ITT Technical Institute-Salem"
//   },
//   {
//     label: "ITT Technical Institute-Akron",
//     value: "ITT Technical Institute-Akron"
//   },
//   {
//     label: "ITT Technical Institute-Cedar Rapids",
//     value: "ITT Technical Institute-Cedar Rapids"
//   },
//   {
//     label: "ITT Technical Institute-Corona",
//     value: "ITT Technical Institute-Corona"
//   },
//   {
//     label: "ITT Technical Institute-Johnson City",
//     value: "ITT Technical Institute-Johnson City"
//   },
//   {
//     label: "ITT Technical Institute-DeSoto",
//     value: "ITT Technical Institute-DeSoto"
//   },
//   {
//     label: "ITT Technical Institute-North Charleston",
//     value: "ITT Technical Institute-North Charleston"
//   },
//   {
//     label: "ITT Technical Institute-Aurora",
//     value: "ITT Technical Institute-Aurora"
//   },
//   {
//     label: "ITT Technical Institute-West Covina",
//     value: "ITT Technical Institute-West Covina"
//   },
//   {
//     label: "ITT Technical Institute-Culver City",
//     value: "ITT Technical Institute-Culver City"
//   },
//   {
//     label: "ITT Technical Institute-Dearborn",
//     value: "ITT Technical Institute-Dearborn"
//   },
//   {
//     label: "ITT Technical Institute-Las Vegas",
//     value: "ITT Technical Institute-Las Vegas"
//   },
//   {
//     label: "Touro University Worldwide",
//     value: "Touro University Worldwide"
//   },
//   {
//     label: "Touro University California",
//     value: "Touro University California"
//   },
//   {
//     label: "The Chicago School of Professional Psychology at Washington DC",
//     value: "The Chicago School of Professional Psychology at Washington DC"
//   },
//   {
//     label: "Anamarc College-Santa Teresa",
//     value: "Anamarc College-Santa Teresa"
//   },
//   { label: "Touro University Nevada", value: "Touro University Nevada" },
//   {
//     label: "National College-Willoughby Hills",
//     value: "National College-Willoughby Hills"
//   },
//   {
//     label: "Herzing University-Kenosha",
//     value: "Herzing University-Kenosha"
//   },
//   {
//     label: "Herzing University-Brookfield",
//     value: "Herzing University-Brookfield"
//   },
//   { label: "Heald College-Modesto", value: "Heald College-Modesto" },
//   { label: "Fortis Institute-Houston", value: "Fortis Institute-Houston" },
//   {
//     label: "Southern Careers Institute-Brownsville",
//     value: "Southern Careers Institute-Brownsville"
//   },
//   {
//     label: "Southern Careers Institute-Corpus Christi 2",
//     value: "Southern Careers Institute-Corpus Christi 2"
//   },
//   {
//     label: "Southern Careers Institute-Harlingen",
//     value: "Southern Careers Institute-Harlingen"
//   },
//   {
//     label: "Strayer University-Global Region",
//     value: "Strayer University-Global Region"
//   },
//   {
//     label: "Regina's College of Beauty-Charlotte",
//     value: "Regina's College of Beauty-Charlotte"
//   },
//   {
//     label: "Kenneth Shuler School of Cosmetology-Florence",
//     value: "Kenneth Shuler School of Cosmetology-Florence"
//   },
//   { label: "Fortis College-Columbia", value: "Fortis College-Columbia" },
//   {
//     label: "Brown Mackie College-Albuquerque",
//     value: "Brown Mackie College-Albuquerque"
//   },
//   {
//     label: "Brown Mackie College-St Louis",
//     value: "Brown Mackie College-St Louis"
//   },
//   { label: "Avant Gard The School", value: "Avant Gard The School" },
//   {
//     label: "Toni & Guy Hairdressing Academy-Bellingham",
//     value: "Toni & Guy Hairdressing Academy-Bellingham"
//   },
//   {
//     label: "California University of Management and Sciences",
//     value: "California University of Management and Sciences"
//   },
//   {
//     label: "Ross Medical Education Center-Davison",
//     value: "Ross Medical Education Center-Davison"
//   },
//   {
//     label: "Ross Medical Education Center-Granger",
//     value: "Ross Medical Education Center-Granger"
//   },
//   {
//     label: "Ross Medical Education Center-Niles",
//     value: "Ross Medical Education Center-Niles"
//   },
//   {
//     label: "Ross Medical Education Center-Canton",
//     value: "Ross Medical Education Center-Canton"
//   },
//   {
//     label: "Pima Medical Institute-Houston",
//     value: "Pima Medical Institute-Houston"
//   },
//   {
//     label: "Illinois Center for Broadcasting�Chicago Campus",
//     value: "Illinois Center for Broadcasting�Chicago Campus"
//   },
//   {
//     label: "South Texas Vocational Technical Institute-San Antonio",
//     value: "South Texas Vocational Technical Institute-San Antonio"
//   },
//   {
//     label: "Concorde Career Institute-Dallas",
//     value: "Concorde Career Institute-Dallas"
//   },
//   {
//     label: "Concorde Career Institute-Orlando",
//     value: "Concorde Career Institute-Orlando"
//   },
//   {
//     label: "Concorde Career Institute-San Antonio",
//     value: "Concorde Career Institute-San Antonio"
//   },
//   { label: "Ecotech Institute", value: "Ecotech Institute" },
//   {
//     label: "Johnson & Wales University-Online",
//     value: "Johnson & Wales University-Online"
//   },
//   {
//     label: "Everest College-Fort Worth South",
//     value: "Everest College-Fort Worth South"
//   },
//   {
//     label: "Everest College-Santa Ana",
//     value: "Everest College-Santa Ana"
//   },
//   {
//     label: "Geisinger-Lewistown Hospital School of Nursing",
//     value: "Geisinger-Lewistown Hospital School of Nursing"
//   },
//   { label: "Moreno Valley College", value: "Moreno Valley College" },
//   {
//     label: "Hair Design Institute at Fifth Avenue-New York",
//     value: "Hair Design Institute at Fifth Avenue-New York"
//   },
//   {
//     label: "Onondaga School of Therapeutic Massage-Rochester",
//     value: "Onondaga School of Therapeutic Massage-Rochester"
//   },
//   { label: "Norco College", value: "Norco College" },
//   {
//     label: "Daymar College-Louisville",
//     value: "Daymar College-Louisville"
//   },
//   {
//     label: "Dorsey Business Schools-Saginaw",
//     value: "Dorsey Business Schools-Saginaw"
//   },
//   {
//     label: "Milan Institute of Cosmetology-La Quinta",
//     value: "Milan Institute of Cosmetology-La Quinta"
//   },
//   { label: "Milan Institute-Nampa", value: "Milan Institute-Nampa" },
//   {
//     label: "Milan Institute of Cosmetology-El Paso",
//     value: "Milan Institute of Cosmetology-El Paso"
//   },
//   {
//     label: "Universal Technical Institute - Dallas Fort Worth",
//     value: "Universal Technical Institute - Dallas Fort Worth"
//   },
//   {
//     label: "Finger Lakes School of Massage",
//     value: "Finger Lakes School of Massage"
//   },
//   {
//     label: "Park Avenue School of Cosmetology",
//     value: "Park Avenue School of Cosmetology"
//   },
//   {
//     label: "Salter School of Nursing and Allied Health",
//     value: "Salter School of Nursing and Allied Health"
//   },
//   {
//     label: "Salter School-New Bedford",
//     value: "Salter School-New Bedford"
//   },
//   {
//     label: "Harris School of Business-Upper Darby Campus",
//     value: "Harris School of Business-Upper Darby Campus"
//   },
//   {
//     label: "Stratford School of Aviation Maintenance Technicians",
//     value: "Stratford School of Aviation Maintenance Technicians"
//   },
//   {
//     label: "Brown Mackie College-San Antonio",
//     value: "Brown Mackie College-San Antonio"
//   },
//   {
//     label: "Hollywood Institute of Beauty Careers",
//     value: "Hollywood Institute of Beauty Careers"
//   },
//   {
//     label: "Cortiva Institute-New Jersey",
//     value: "Cortiva Institute-New Jersey"
//   },
//   {
//     label: "Cambridge Junior College-Woodland",
//     value: "Cambridge Junior College-Woodland"
//   },
//   { label: "Anthem College-Atlanta", value: "Anthem College-Atlanta" },
//   {
//     label: "ICPR Junior College-Manati",
//     value: "ICPR Junior College-Manati"
//   },
//   { label: "Western Beauty Institute", value: "Western Beauty Institute" },
//   {
//     label: "Ridley-Lowell Business & Technical Institute-Danbury",
//     value: "Ridley-Lowell Business & Technical Institute-Danbury"
//   },
//   {
//     label: "Artistic Nails and Beauty Academy-Lakeland",
//     value: "Artistic Nails and Beauty Academy-Lakeland"
//   },
//   {
//     label: "Paul Mitchell the School-Murfreesboro",
//     value: "Paul Mitchell the School-Murfreesboro"
//   },
//   {
//     label: "Allied American University",
//     value: "Allied American University"
//   },
//   {
//     label: "American Sentinel University",
//     value: "American Sentinel University"
//   },
//   {
//     label: "Tribeca Flashpoint Media Arts Academy",
//     value: "Tribeca Flashpoint Media Arts Academy"
//   },
//   { label: "Hawaii Medical College", value: "Hawaii Medical College" },
//   {
//     label: "Carolina College of Hair Design",
//     value: "Carolina College of Hair Design"
//   },
//   {
//     label: "Virginia College-Baton Rouge",
//     value: "Virginia College-Baton Rouge"
//   },
//   {
//     label: "Remington College-Heathrow Campus",
//     value: "Remington College-Heathrow Campus"
//   },
//   {
//     label: "College of Massage Therapy",
//     value: "College of Massage Therapy"
//   },
//   {
//     label: "Miller-Motte College-Jacksonville",
//     value: "Miller-Motte College-Jacksonville"
//   },
//   {
//     label: "Miller-Motte Technical College-Augusta",
//     value: "Miller-Motte Technical College-Augusta"
//   },
//   {
//     label: "Miller-Motte Technical College-Conway",
//     value: "Miller-Motte Technical College-Conway"
//   },
//   { label: "Virginia College-Macon", value: "Virginia College-Macon" },
//   {
//     label: "Virginia College-Spartanburg",
//     value: "Virginia College-Spartanburg"
//   },
//   { label: "Aveda Institute-Portland", value: "Aveda Institute-Portland" },
//   {
//     label: "Chamberlain College of Nursing-Virginia",
//     value: "Chamberlain College of Nursing-Virginia"
//   },
//   {
//     label: "Stevens-Henager College-Boise",
//     value: "Stevens-Henager College-Boise"
//   },
//   {
//     label: "The Salon Professional Academy-Cincinnati",
//     value: "The Salon Professional Academy-Cincinnati"
//   },
//   { label: "Penrose Academy", value: "Penrose Academy" },
//   {
//     label: "Virginia College-Richmond",
//     value: "Virginia College-Richmond"
//   },
//   { label: "Skin Institute", value: "Skin Institute" },
//   {
//     label: "Northwest Institute of Literary Arts",
//     value: "Northwest Institute of Literary Arts"
//   },
//   { label: "Body Therapy Institute", value: "Body Therapy Institute" },
//   {
//     label: "Beauty Academy of South Florida",
//     value: "Beauty Academy of South Florida"
//   },
//   {
//     label: "Ogle School Hair Skin Nails-North Dallas",
//     value: "Ogle School Hair Skin Nails-North Dallas"
//   },
//   {
//     label: "The Salon Professional Academy-North Little Rock",
//     value: "The Salon Professional Academy-North Little Rock"
//   },
//   {
//     label: "The Salon Professional Academy-St Charles",
//     value: "The Salon Professional Academy-St Charles"
//   },
//   { label: "American Institute", value: "American Institute" },
//   {
//     label: "Mildred Elley-New York Campus",
//     value: "Mildred Elley-New York Campus"
//   },
//   {
//     label: "National Paralegal College",
//     value: "National Paralegal College"
//   },
//   {
//     label: "Carolina College of Biblical Studies",
//     value: "Carolina College of Biblical Studies"
//   },
//   {
//     label: "Star Career Academy-Audubon",
//     value: "Star Career Academy-Audubon"
//   },
//   { label: "St Luke University", value: "St Luke University" },
//   {
//     label: "Northeast Technology Center-System Office",
//     value: "Northeast Technology Center-System Office"
//   },
//   {
//     label: "Allstate Hairstyling & Barber College",
//     value: "Allstate Hairstyling & Barber College"
//   },
//   { label: "Oxford Graduate School", value: "Oxford Graduate School" },
//   {
//     label: "Jung Tao School of Classical Chinese Medicine",
//     value: "Jung Tao School of Classical Chinese Medicine"
//   },
//   { label: "New York Film Academy", value: "New York Film Academy" },
//   {
//     label: "The Collective School Of Music",
//     value: "The Collective School Of Music"
//   },
//   {
//     label: "International College of Cosmetology",
//     value: "International College of Cosmetology"
//   },
//   {
//     label: "GP Institute of Cosmetology",
//     value: "GP Institute of Cosmetology"
//   },
//   { label: "Bella Capelli Academy", value: "Bella Capelli Academy" },
//   {
//     label: "Institute of Medical Careers",
//     value: "Institute of Medical Careers"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Modesto",
//     value: "Toni & Guy Hairdressing Academy-Modesto"
//   },
//   {
//     label: "Georgia Christian University",
//     value: "Georgia Christian University"
//   },
//   {
//     label: "Flagler Technical Institute",
//     value: "Flagler Technical Institute"
//   },
//   { label: "Galaxy Medical College", value: "Galaxy Medical College" },
//   {
//     label: "American Medical Sciences Center",
//     value: "American Medical Sciences Center"
//   },
//   { label: "Mandalyn Academy", value: "Mandalyn Academy" },
//   {
//     label: "Jose Maria Vargas University",
//     value: "Jose Maria Vargas University"
//   },
//   {
//     label: "Laird Institute of Spa Therapy",
//     value: "Laird Institute of Spa Therapy"
//   },
//   {
//     label: "D A Dorsey Educational Center",
//     value: "D A Dorsey Educational Center"
//   },
//   {
//     label: "Keweenaw Bay Ojibwa Community College",
//     value: "Keweenaw Bay Ojibwa Community College"
//   },
//   {
//     label: "Meridian Institute of Surgical Assisting",
//     value: "Meridian Institute of Surgical Assisting"
//   },
//   { label: "Mauna Loa Helicopters", value: "Mauna Loa Helicopters" },
//   {
//     label: "Acaydia School of Aesthetics",
//     value: "Acaydia School of Aesthetics"
//   },
//   { label: "Manhattan Institute", value: "Manhattan Institute" },
//   { label: "Cosmetic Arts Institute", value: "Cosmetic Arts Institute" },
//   {
//     label: "Holistic Massage Training Institute",
//     value: "Holistic Massage Training Institute"
//   },
//   {
//     label: "Diamonds Cosmetology College",
//     value: "Diamonds Cosmetology College"
//   },
//   { label: "Tramy Beauty School", value: "Tramy Beauty School" },
//   {
//     label: "Scholars Cosmetology University",
//     value: "Scholars Cosmetology University"
//   },
//   {
//     label: "Northern Virginia School of Therapeutic Massage",
//     value: "Northern Virginia School of Therapeutic Massage"
//   },
//   {
//     label: "Paul Mitchell the School-St Louis",
//     value: "Paul Mitchell the School-St Louis"
//   },
//   {
//     label: "Advanced Training Institute",
//     value: "Advanced Training Institute"
//   },
//   {
//     label: "Cosmopolitan Beauty and Tech School",
//     value: "Cosmopolitan Beauty and Tech School"
//   },
//   {
//     label: "The Salon Professional Academy-Elgin",
//     value: "The Salon Professional Academy-Elgin"
//   },
//   { label: "CCIC Beauty College", value: "CCIC Beauty College" },
//   { label: "Salon 496 Barber Academy", value: "Salon 496 Barber Academy" },
//   {
//     label: "Shepherds Theological Seminary",
//     value: "Shepherds Theological Seminary"
//   },
//   {
//     label: "Taylor Andrews Academy of Hair Design-West Jordan",
//     value: "Taylor Andrews Academy of Hair Design-West Jordan"
//   },
//   { label: "Santa Ana Beauty Academy", value: "Santa Ana Beauty Academy" },
//   {
//     label: "Grace College of Divinity",
//     value: "Grace College of Divinity"
//   },
//   {
//     label: "Cosmetology College of Franklin County",
//     value: "Cosmetology College of Franklin County"
//   },
//   {
//     label: "Rochester School of Hair Design",
//     value: "Rochester School of Hair Design"
//   },
//   {
//     label: "Aveda Institute-New Mexico",
//     value: "Aveda Institute-New Mexico"
//   },
//   {
//     label: "Nashville Barber and Style Academy",
//     value: "Nashville Barber and Style Academy"
//   },
//   { label: "American Trade School", value: "American Trade School" },
//   {
//     label: "Estelle Skin Care and Spa Institute",
//     value: "Estelle Skin Care and Spa Institute"
//   },
//   {
//     label: "Paul Mitchell the School-Honolulu",
//     value: "Paul Mitchell the School-Honolulu"
//   },
//   { label: "Elite Cosmetology School", value: "Elite Cosmetology School" },
//   {
//     label: "Academy of Aesthetic Arts",
//     value: "Academy of Aesthetic Arts"
//   },
//   {
//     label: "American Technical Institute",
//     value: "American Technical Institute"
//   },
//   { label: "Twin Rivers Adult School", value: "Twin Rivers Adult School" },
//   {
//     label: "Bergin University of Canine Studies",
//     value: "Bergin University of Canine Studies"
//   },
//   { label: "Aveda Institute-Boise", value: "Aveda Institute-Boise" },
//   {
//     label: "Progressive Training Centers",
//     value: "Progressive Training Centers"
//   },
//   {
//     label: "American Health Institute",
//     value: "American Health Institute"
//   },
//   {
//     label: "Pima Medical Institute-South Denver",
//     value: "Pima Medical Institute-South Denver"
//   },
//   { label: "Real Barbers College", value: "Real Barbers College" },
//   {
//     label: "Capilo School of Hair Design",
//     value: "Capilo School of Hair Design"
//   },
//   { label: "Pure Aesthetics", value: "Pure Aesthetics" },
//   {
//     label: "Lindsey Institute of Cosmetology",
//     value: "Lindsey Institute of Cosmetology"
//   },
//   {
//     label: "The Salon Professional Academy-Iowa City",
//     value: "The Salon Professional Academy-Iowa City"
//   },
//   { label: "Buckner Barber School", value: "Buckner Barber School" },
//   {
//     label: "Simmons College of Kentucky",
//     value: "Simmons College of Kentucky"
//   },
//   {
//     label: "Atelier Esthetique Institute of Esthetics",
//     value: "Atelier Esthetique Institute of Esthetics"
//   },
//   {
//     label: "Ashdown College of Health Sciences",
//     value: "Ashdown College of Health Sciences"
//   },
//   {
//     label: "Advanced College of Cosmetology",
//     value: "Advanced College of Cosmetology"
//   },
//   {
//     label: "North American University",
//     value: "North American University"
//   },
//   {
//     label: "Entourage Institute of Beauty and Esthetics",
//     value: "Entourage Institute of Beauty and Esthetics"
//   },
//   { label: "United Beauty College", value: "United Beauty College" },
//   { label: "Cinta Aveda Institute", value: "Cinta Aveda Institute" },
//   {
//     label: "Long Island Nail & Skin Care Institute",
//     value: "Long Island Nail & Skin Care Institute"
//   },
//   { label: "Mesivta Keser Torah", value: "Mesivta Keser Torah" },
//   {
//     label: "Southern California Health Institute",
//     value: "Southern California Health Institute"
//   },
//   {
//     label: "Best Care Training Institute",
//     value: "Best Care Training Institute"
//   },
//   {
//     label: "First Class Cosmetology School",
//     value: "First Class Cosmetology School"
//   },
//   {
//     label: "Millennia Atlantic University",
//     value: "Millennia Atlantic University"
//   },
//   { label: "Abcott Institute", value: "Abcott Institute" },
//   {
//     label: "The Salon Professional Academy-Kenosha",
//     value: "The Salon Professional Academy-Kenosha"
//   },
//   {
//     label: "Paul Mitchell the School-Indianapolis",
//     value: "Paul Mitchell the School-Indianapolis"
//   },
//   {
//     label: "Taylor Andrews Academy-St George",
//     value: "Taylor Andrews Academy-St George"
//   },
//   { label: "Seymour Beauty Academy", value: "Seymour Beauty Academy" },
//   { label: "Protege Academy", value: "Protege Academy" },
//   {
//     label: "Colorado Academy of Veterinary Technology",
//     value: "Colorado Academy of Veterinary Technology"
//   },
//   {
//     label: "Northeast Technical Institute",
//     value: "Northeast Technical Institute"
//   },
//   {
//     label: "Salinas Beauty College Inc",
//     value: "Salinas Beauty College Inc"
//   },
//   {
//     label: "Academy for Salon Professionals",
//     value: "Academy for Salon Professionals"
//   },
//   {
//     label: "Elite School of Cosmetology",
//     value: "Elite School of Cosmetology"
//   },
//   {
//     label: "Paul Mitchell the School-Las Vegas",
//     value: "Paul Mitchell the School-Las Vegas"
//   },
//   {
//     label: "The Salon Professional Academy-Kokomo",
//     value: "The Salon Professional Academy-Kokomo"
//   },
//   { label: "Hair Academy", value: "Hair Academy" },
//   { label: "Florida Academy", value: "Florida Academy" },
//   {
//     label: "Institute for Doctoral Studies in the Visual Arts",
//     value: "Institute for Doctoral Studies in the Visual Arts"
//   },
//   { label: "State Career College", value: "State Career College" },
//   {
//     label: "Academy for Salon Professionals",
//     value: "Academy for Salon Professionals"
//   },
//   {
//     label: "Paul Mitchell The School-Spokane",
//     value: "Paul Mitchell The School-Spokane"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Maryland",
//     value: "DeVry University's Keller Graduate School of Management-Maryland"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-North Carolina",
//     value: "DeVry University's Keller Graduate School of Management-North Carolina"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Florida",
//     value: "DeVry University's Keller Graduate School of Management-Florida"
//   },
//   {
//     label: "DeVry College of New York's Keller Graduate School of Management",
//     value: "DeVry College of New York's Keller Graduate School of Management"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Indiana",
//     value: "DeVry University's Keller Graduate School of Management-Indiana"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Nevada",
//     value: "DeVry University's Keller Graduate School of Management-Nevada"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Colorado",
//     value: "DeVry University's Keller Graduate School of Management-Colorado"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Minnesota",
//     value: "DeVry University's Keller Graduate School of Management-Minnesota"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Oklahoma",
//     value: "DeVry University's Keller Graduate School of Management-Oklahoma"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Utah",
//     value: "DeVry University's Keller Graduate School of Management-Utah"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Tennessee",
//     value: "DeVry University's Keller Graduate School of Management-Tennessee"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Michigan",
//     value: "DeVry University's Keller Graduate School of Management-Michigan"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Kentucky",
//     value: "DeVry University's Keller Graduate School of Management-Kentucky"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-New Jersey",
//     value: "DeVry University's Keller Graduate School of Management-New Jersey"
//   },
//   {
//     label: "DeVry University's Keller Graduate School of Management-Oregon",
//     value: "DeVry University's Keller Graduate School of Management-Oregon"
//   },
//   {
//     label: "Lincoln College of New England-Hartford",
//     value: "Lincoln College of New England-Hartford"
//   },
//   {
//     label: "Lincoln College of Technology-Columbus",
//     value: "Lincoln College of Technology-Columbus"
//   },
//   {
//     label: "Lincoln College of Technology-Cleveland",
//     value: "Lincoln College of Technology-Cleveland"
//   },
//   {
//     label: "Northwestern Institute of Health and Technology",
//     value: "Northwestern Institute of Health and Technology"
//   },
//   {
//     label: "J Renee Career Facilitation",
//     value: "J Renee Career Facilitation"
//   },
//   {
//     label: "National Personal Training Institute of Colorado",
//     value: "National Personal Training Institute of Colorado"
//   },
//   {
//     label: "National Personal Training Institute of Colorado",
//     value: "National Personal Training Institute of Colorado"
//   },
//   {
//     label: "International College of Beauty Arts & Sciences",
//     value: "International College of Beauty Arts & Sciences"
//   },
//   {
//     label: "The Salon Professional Academy-Shorewood",
//     value: "The Salon Professional Academy-Shorewood"
//   },
//   {
//     label: "John Paul the Great Catholic University",
//     value: "John Paul the Great Catholic University"
//   },
//   {
//     label: "ITT Technical Institute-Durham",
//     value: "ITT Technical Institute-Durham"
//   },
//   {
//     label: "ITT Technical Institute-Hanover",
//     value: "ITT Technical Institute-Hanover"
//   },
//   {
//     label: "University of Phoenix-Jackson Campus",
//     value: "University of Phoenix-Jackson Campus"
//   },
//   {
//     label: "University of Phoenix-Delaware Campus",
//     value: "University of Phoenix-Delaware Campus"
//   },
//   {
//     label: "Everest College-Milwaukee",
//     value: "Everest College-Milwaukee"
//   },
//   { label: "Independence University", value: "Independence University" },
//   {
//     label: "National American University-Tulsa",
//     value: "National American University-Tulsa"
//   },
//   {
//     label: "National American University-Centennial",
//     value: "National American University-Centennial"
//   },
//   {
//     label: "National American University-Lee's Summit",
//     value: "National American University-Lee's Summit"
//   },
//   {
//     label: "National American University-Colorado Springs South",
//     value: "National American University-Colorado Springs South"
//   },
//   {
//     label: "Globe University-Appleton",
//     value: "Globe University-Appleton"
//   },
//   { label: "Salter College-Chicopee", value: "Salter College-Chicopee" },
//   {
//     label: "Chamberlain College of Nursing-Missouri",
//     value: "Chamberlain College of Nursing-Missouri"
//   },
//   {
//     label: "Chamberlain College of Nursing-Texas",
//     value: "Chamberlain College of Nursing-Texas"
//   },
//   {
//     label: "ITT Technical Institute-Oakland",
//     value: "ITT Technical Institute-Oakland"
//   },
//   {
//     label: "Continental School of Beauty Culture-Mattydale",
//     value: "Continental School of Beauty Culture-Mattydale"
//   },
//   {
//     label: "Everest College-Bedford Park",
//     value: "Everest College-Bedford Park"
//   },
//   { label: "Fortis College-Akron", value: "Fortis College-Akron" },
//   {
//     label: "Carrington College California-Pomona",
//     value: "Carrington College California-Pomona"
//   },
//   {
//     label: "Regency Beauty Institute-Copperwood",
//     value: "Regency Beauty Institute-Copperwood"
//   },
//   {
//     label: "Regency Beauty Institute-Little Rock",
//     value: "Regency Beauty Institute-Little Rock"
//   },
//   {
//     label: "Regency Beauty Institute-Baltimore Golden Ring",
//     value: "Regency Beauty Institute-Baltimore Golden Ring"
//   },
//   {
//     label: "Regency Beauty Institute-El Paso",
//     value: "Regency Beauty Institute-El Paso"
//   },
//   {
//     label: "Regency Beauty Institute-Jacksonville Regency",
//     value: "Regency Beauty Institute-Jacksonville Regency"
//   },
//   {
//     label: "Regency Beauty Institute-Knoxville",
//     value: "Regency Beauty Institute-Knoxville"
//   },
//   {
//     label: "Regency Beauty Institute-Fayetteville",
//     value: "Regency Beauty Institute-Fayetteville"
//   },
//   {
//     label: "Regency Beauty Institute-Lansing",
//     value: "Regency Beauty Institute-Lansing"
//   },
//   {
//     label: "Regency Beauty Institute-Jacksonville Orange Park",
//     value: "Regency Beauty Institute-Jacksonville Orange Park"
//   },
//   {
//     label: "Regency Beauty Institute-Crystal Lake",
//     value: "Regency Beauty Institute-Crystal Lake"
//   },
//   {
//     label: "Regency Beauty Institute-Manassas",
//     value: "Regency Beauty Institute-Manassas"
//   },
//   {
//     label: "Regency Beauty Institute-Castleton",
//     value: "Regency Beauty Institute-Castleton"
//   },
//   {
//     label: "Regency Beauty Institute-North Nashville",
//     value: "Regency Beauty Institute-North Nashville"
//   },
//   {
//     label: "Regency Beauty Institute-Round Rock",
//     value: "Regency Beauty Institute-Round Rock"
//   },
//   {
//     label: "Regency Beauty Institute-Merrillville",
//     value: "Regency Beauty Institute-Merrillville"
//   },
//   {
//     label: "Regency Beauty Institute-Roanoke",
//     value: "Regency Beauty Institute-Roanoke"
//   },
//   {
//     label: "Regency Beauty Institute-Toledo",
//     value: "Regency Beauty Institute-Toledo"
//   },
//   {
//     label: "Regency Beauty Institute-SW Houston",
//     value: "Regency Beauty Institute-SW Houston"
//   },
//   {
//     label: "Everest College-Atlanta West",
//     value: "Everest College-Atlanta West"
//   },
//   {
//     label: "Broadview University-Boise",
//     value: "Broadview University-Boise"
//   },
//   {
//     label: "Advanced Institute of Hair Design-Madison",
//     value: "Advanced Institute of Hair Design-Madison"
//   },
//   {
//     label: "Paul Mitchell The School-Columbia",
//     value: "Paul Mitchell The School-Columbia"
//   },
//   {
//     label: "Paul Mitchell The School-Charleston",
//     value: "Paul Mitchell The School-Charleston"
//   },
//   {
//     label: "Everest College-Melrose Park",
//     value: "Everest College-Melrose Park"
//   },
//   {
//     label: "Kenneth Shuler School of Cosmetology-Greenville",
//     value: "Kenneth Shuler School of Cosmetology-Greenville"
//   },
//   {
//     label: "South University-Accelerated Graduate Programs",
//     value: "South University-Accelerated Graduate Programs"
//   },
//   {
//     label: "South University-The Art Institute of Fort Worth",
//     value: "South University-The Art Institute of Fort Worth"
//   },
//   { label: "South University-Novi", value: "South University-Novi" },
//   { label: "Northwest College-Eugene", value: "Northwest College-Eugene" },
//   {
//     label: "Northwest College-Tualatin",
//     value: "Northwest College-Tualatin"
//   },
//   {
//     label: "Harrison College-Morrisville",
//     value: "Harrison College-Morrisville"
//   },
//   {
//     label: "Trend Setters' Academy of Beauty Culture-Louisville",
//     value: "Trend Setters' Academy of Beauty Culture-Louisville"
//   },
//   {
//     label: "National University College-Caguas",
//     value: "National University College-Caguas"
//   },
//   {
//     label: "Beauty Schools of America",
//     value: "Beauty Schools of America"
//   },
//   { label: "CET-Soledad", value: "CET-Soledad" },
//   {
//     label: "MarJon School of Beauty ltd-Lockport",
//     value: "MarJon School of Beauty ltd-Lockport"
//   },
//   {
//     label: "Houston Training Schools-Southwest",
//     value: "Houston Training Schools-Southwest"
//   },
//   {
//     label: "Vanguard College of Cosmetology-Metairie",
//     value: "Vanguard College of Cosmetology-Metairie"
//   },
//   {
//     label: "New England Tractor Trailer Training School of Massachusetts",
//     value: "New England Tractor Trailer Training School of Massachusetts"
//   },
//   {
//     label: "Heritage College-Columbus",
//     value: "Heritage College-Columbus"
//   },
//   {
//     label: "Utah College of Massage Therapy-Vegas",
//     value: "Utah College of Massage Therapy-Vegas"
//   },
//   {
//     label: "Utah College of Massage Therapy-Tempe",
//     value: "Utah College of Massage Therapy-Tempe"
//   },
//   {
//     label: "Utah College of Massage Therapy-Phoenix",
//     value: "Utah College of Massage Therapy-Phoenix"
//   },
//   {
//     label: "Utah College of Massage Therapy-Westminster",
//     value: "Utah College of Massage Therapy-Westminster"
//   },
//   {
//     label: "Utah College of Massage Therapy-Aurora",
//     value: "Utah College of Massage Therapy-Aurora"
//   },
//   {
//     label: "Sanford-Brown College-Portland",
//     value: "Sanford-Brown College-Portland"
//   },
//   {
//     label: "Tint School of Makeup and Cosmetology-Grand Prairie",
//     value: "Tint School of Makeup and Cosmetology-Grand Prairie"
//   },
//   { label: "Dewey University-Yabucoa", value: "Dewey University-Yabucoa" },
//   { label: "Dewey University-Hatillo", value: "Dewey University-Hatillo" },
//   { label: "Dewey University-Manati", value: "Dewey University-Manati" },
//   {
//     label: "Sanford-Brown College-Skokie",
//     value: "Sanford-Brown College-Skokie"
//   },
//   {
//     label: "Baltimore School of Massage-York",
//     value: "Baltimore School of Massage-York"
//   },
//   { label: "Allen School-Phoenix", value: "Allen School-Phoenix" },
//   {
//     label: "Oklahoma Technical College",
//     value: "Oklahoma Technical College"
//   },
//   {
//     label: "Midwest Technical Institute-Moline",
//     value: "Midwest Technical Institute-Moline"
//   },
//   {
//     label: "Star Career Academy-Clifton",
//     value: "Star Career Academy-Clifton"
//   },
//   {
//     label: "Unitech Training Academy-Alexandria",
//     value: "Unitech Training Academy-Alexandria"
//   },
//   {
//     label: "Unitech Training Academy-Lake Charles",
//     value: "Unitech Training Academy-Lake Charles"
//   },
//   {
//     label: "Aveda Institute-Los Angeles",
//     value: "Aveda Institute-Los Angeles"
//   },
//   {
//     label: "Career Quest Learning Center-Kalamazoo",
//     value: "Career Quest Learning Center-Kalamazoo"
//   },
//   { label: "Buchanan Beauty College", value: "Buchanan Beauty College" },
//   {
//     label: "WellSpring School of Allied Health-Lawrence",
//     value: "WellSpring School of Allied Health-Lawrence"
//   },
//   {
//     label: "The Art Institute of Wisconsin",
//     value: "The Art Institute of Wisconsin"
//   },
//   {
//     label: "Brown Mackie College-Birmingham",
//     value: "Brown Mackie College-Birmingham"
//   },
//   {
//     label: "Regina's College of Beauty",
//     value: "Regina's College of Beauty"
//   },
//   { label: "New York Film Academy", value: "New York Film Academy" },
//   {
//     label: "Manuel and Theresa's School of Hair Design-Victoria",
//     value: "Manuel and Theresa's School of Hair Design-Victoria"
//   },
//   { label: "Coast Career Institute", value: "Coast Career Institute" },
//   {
//     label: "Tricoci University of Beauty Culture-Chicago NE",
//     value: "Tricoci University of Beauty Culture-Chicago NE"
//   },
//   {
//     label: "ITT Technical Institute-Bradenton",
//     value: "ITT Technical Institute-Bradenton"
//   },
//   {
//     label: "ITT Technical Institute-Phoenix West",
//     value: "ITT Technical Institute-Phoenix West"
//   },
//   {
//     label: "ITT Technical Institute-Brooklyn Center",
//     value: "ITT Technical Institute-Brooklyn Center"
//   },
//   {
//     label: "ITT Technical Institute-Orlando",
//     value: "ITT Technical Institute-Orlando"
//   },
//   {
//     label: "ITT Technical Institute-Waco",
//     value: "ITT Technical Institute-Waco"
//   },
//   {
//     label: "ITT Technical Institute-Myrtle Beach",
//     value: "ITT Technical Institute-Myrtle Beach"
//   },
//   {
//     label: "University of Phoenix-Knoxville Campus",
//     value: "University of Phoenix-Knoxville Campus"
//   },
//   {
//     label: "Azusa Pacific Online University",
//     value: "Azusa Pacific Online University"
//   },
//   {
//     label: "Minneapolis Media Institute",
//     value: "Minneapolis Media Institute"
//   },
//   { label: "College America-Phoenix", value: "College America-Phoenix" },
//   {
//     label: "CollegeAmerica-Stevens Henager College",
//     value: "CollegeAmerica-Stevens Henager College"
//   },
//   {
//     label: "Avalon School of Cosmetology-Phoenix",
//     value: "Avalon School of Cosmetology-Phoenix"
//   },
//   {
//     label: "Avalon School of Cosmetology-Layton",
//     value: "Avalon School of Cosmetology-Layton"
//   },
//   { label: "Hair Design Institute", value: "Hair Design Institute" },
//   { label: "Hair Design Institute", value: "Hair Design Institute" },
//   {
//     label: "University of Phoenix-Baton Rouge Campus",
//     value: "University of Phoenix-Baton Rouge Campus"
//   },
//   {
//     label: "University of Phoenix-Lafayette Campus",
//     value: "University of Phoenix-Lafayette Campus"
//   },
//   {
//     label: "University of Phoenix-Shreveport-Bossier Campus",
//     value: "University of Phoenix-Shreveport-Bossier Campus"
//   },
//   {
//     label: "All-State Career School-Allied Health Campus",
//     value: "All-State Career School-Allied Health Campus"
//   },
//   {
//     label: "Aveda Institute-Des Moines",
//     value: "Aveda Institute-Des Moines"
//   },
//   {
//     label: "Fortis Institute-Lawrenceville",
//     value: "Fortis Institute-Lawrenceville"
//   },
//   {
//     label: "Relay Graduate School of Education",
//     value: "Relay Graduate School of Education"
//   },
//   {
//     label: "Brown Mackie College-Oklahoma City",
//     value: "Brown Mackie College-Oklahoma City"
//   },
//   {
//     label: "Sanford-Brown College-Austin",
//     value: "Sanford-Brown College-Austin"
//   },
//   {
//     label: "Miller-Motte Technical College-Macon",
//     value: "Miller-Motte Technical College-Macon"
//   },
//   {
//     label: "Miller-Motte Technical College-Gulfport",
//     value: "Miller-Motte Technical College-Gulfport"
//   },
//   {
//     label: "International Academy of Medical Reflexology",
//     value: "International Academy of Medical Reflexology"
//   },
//   {
//     label: "International Culinary Center-California",
//     value: "International Culinary Center-California"
//   },
//   {
//     label: "South University�Savannah Online",
//     value: "South University�Savannah Online"
//   },
//   {
//     label: "Fortis College-Montgomery",
//     value: "Fortis College-Montgomery"
//   },
//   {
//     label: "San Joaquin Valley College-Temecula",
//     value: "San Joaquin Valley College-Temecula"
//   },
//   {
//     label: "Rio Grande Bible Institute",
//     value: "Rio Grande Bible Institute"
//   },
//   {
//     label: "Miller-Motte Technical College-Roanoke",
//     value: "Miller-Motte Technical College-Roanoke"
//   },
//   {
//     label: "Whitworth University-Adult Degree Programs",
//     value: "Whitworth University-Adult Degree Programs"
//   },
//   {
//     label: "The Santa Barbara and Ventura Colleges of Law�Santa Barbara",
//     value: "The Santa Barbara and Ventura Colleges of Law�Santa Barbara"
//   },
//   {
//     label: "The University of America",
//     value: "The University of America"
//   },
//   {
//     label: "Kaplan College-Chesapeake",
//     value: "Kaplan College-Chesapeake"
//   },
//   {
//     label: "American Broadcasting School-Online Program",
//     value: "American Broadcasting School-Online Program"
//   },
//   {
//     label: "Springfield College-School of Human Services",
//     value: "Springfield College-School of Human Services"
//   },
//   {
//     label: "Marian Health Careers Center-Van Nuys Campus",
//     value: "Marian Health Careers Center-Van Nuys Campus"
//   },
//   {
//     label: "Brown College-Brooklyn Center",
//     value: "Brown College-Brooklyn Center"
//   },
//   {
//     label: "Milan Institute-Las Vegas",
//     value: "Milan Institute-Las Vegas"
//   },
//   {
//     label: "Williamson Free School of Mechanical Trades",
//     value: "Williamson Free School of Mechanical Trades"
//   },
//   {
//     label: "Virginia College-Savannah",
//     value: "Virginia College-Savannah"
//   },
//   {
//     label: "Virginia College-Columbus",
//     value: "Virginia College-Columbus"
//   },
//   {
//     label: "Donna's Academy of Hair Design",
//     value: "Donna's Academy of Hair Design"
//   },
//   {
//     label: "New York School of Esthetics & Day Spa",
//     value: "New York School of Esthetics & Day Spa"
//   },
//   {
//     label: "Panache Academy of Beauty",
//     value: "Panache Academy of Beauty"
//   },
//   {
//     label: "Finger Lakes Health College of Nursing",
//     value: "Finger Lakes Health College of Nursing"
//   },
//   { label: "ASI Career Institute", value: "ASI Career Institute" },
//   {
//     label: "Chicago School for Piano Technology",
//     value: "Chicago School for Piano Technology"
//   },
//   {
//     label: "Midwest Technical Institute-Ridgeland",
//     value: "Midwest Technical Institute-Ridgeland"
//   },
//   {
//     label: "Christine Valmy International School of Esthetics & Cosmetology",
//     value: "Christine Valmy International School of Esthetics & Cosmetology"
//   },
//   { label: "City College-Hollywood", value: "City College-Hollywood" },
//   {
//     label: "Paul Mitchell the School-Arlington",
//     value: "Paul Mitchell the School-Arlington"
//   },
//   {
//     label: "Rocky Mountain University of Health Professions",
//     value: "Rocky Mountain University of Health Professions"
//   },
//   {
//     label: "MediaTech Institute-Oceanside",
//     value: "MediaTech Institute-Oceanside"
//   },
//   { label: "Christie's Education", value: "Christie's Education" },
//   {
//     label: "Prince Institute-Great Lakes",
//     value: "Prince Institute-Great Lakes"
//   },
//   { label: "Palmetto Beauty School", value: "Palmetto Beauty School" },
//   {
//     label: "Paul Mitchell the School-Fort Myers",
//     value: "Paul Mitchell the School-Fort Myers"
//   },
//   {
//     label: "Paul Mitchell The School-Raleigh",
//     value: "Paul Mitchell The School-Raleigh"
//   },
//   {
//     label: "Stella and Charles Guttman Community College",
//     value: "Stella and Charles Guttman Community College"
//   },
//   { label: "Lil Lou's Barber College", value: "Lil Lou's Barber College" },
//   { label: "Bryan University", value: "Bryan University" },
//   { label: "Virginia College-Tulsa", value: "Virginia College-Tulsa" },
//   { label: "Criswell College", value: "Criswell College" },
//   {
//     label: "Virginia College-Knoxville",
//     value: "Virginia College-Knoxville"
//   },
//   {
//     label: "Columbia Academy of Cosmetology",
//     value: "Columbia Academy of Cosmetology"
//   },
//   { label: "Academy of Couture Art", value: "Academy of Couture Art" },
//   { label: "Global Institute", value: "Global Institute" },
//   {
//     label: "Shear Learning Academy of Cosmetology",
//     value: "Shear Learning Academy of Cosmetology"
//   },
//   {
//     label: "University of Cosmetology Arts & Sciences-La Joya",
//     value: "University of Cosmetology Arts & Sciences-La Joya"
//   },
//   {
//     label: "Preferred College of Nursing-Van Nuys",
//     value: "Preferred College of Nursing-Van Nuys"
//   },
//   {
//     label: "Bryant & Stratton College-Akron",
//     value: "Bryant & Stratton College-Akron"
//   },
//   {
//     label: "Annenberg School of Nursing",
//     value: "Annenberg School of Nursing"
//   },
//   { label: "American Medical Academy", value: "American Medical Academy" },
//   {
//     label: "Tooele Applied Technology College",
//     value: "Tooele Applied Technology College"
//   },
//   {
//     label: "Chamberlain College of Nursing-Georgia",
//     value: "Chamberlain College of Nursing-Georgia"
//   },
//   {
//     label: "Chamberlain College of Nursing-Indiana",
//     value: "Chamberlain College of Nursing-Indiana"
//   },
//   {
//     label: "Carrington College-Mesquite",
//     value: "Carrington College-Mesquite"
//   },
//   {
//     label: "Universidad Internacional Iberoamericana",
//     value: "Universidad Internacional Iberoamericana"
//   },
//   {
//     label: "Sessions College for Professional Design",
//     value: "Sessions College for Professional Design"
//   },
//   {
//     label: "Southeastern Technical Careers Institute Inc",
//     value: "Southeastern Technical Careers Institute Inc"
//   },
//   {
//     label: "Virginia College-Shreveport Bossier City",
//     value: "Virginia College-Shreveport Bossier City"
//   },
//   {
//     label: "Strayer University-Wisconsin",
//     value: "Strayer University-Wisconsin"
//   },
//   {
//     label: "Strayer University-Indiana",
//     value: "Strayer University-Indiana"
//   },
//   {
//     label: "Tulsa Welding School-Jacksonville",
//     value: "Tulsa Welding School-Jacksonville"
//   },
//   { label: "Herzing University", value: "Herzing University" },
//   {
//     label: "Regency Beauty Institute-Hoover",
//     value: "Regency Beauty Institute-Hoover"
//   },
//   {
//     label: "Regency Beauty Institute-San Antonio",
//     value: "Regency Beauty Institute-San Antonio"
//   },
//   {
//     label: "Regency Beauty Institute-Carrollwood",
//     value: "Regency Beauty Institute-Carrollwood"
//   },
//   {
//     label: "Regency Beauty Institute-Clearwater",
//     value: "Regency Beauty Institute-Clearwater"
//   },
//   {
//     label: "Regency Beauty Institute-Newport News",
//     value: "Regency Beauty Institute-Newport News"
//   },
//   {
//     label: "Regency Beauty Institute-Lewisville",
//     value: "Regency Beauty Institute-Lewisville"
//   },
//   {
//     label: "Regency Beauty Institute-Dallas",
//     value: "Regency Beauty Institute-Dallas"
//   },
//   {
//     label: "Regency Beauty Institute-Plano",
//     value: "Regency Beauty Institute-Plano"
//   },
//   {
//     label: "Empire Beauty School-Virginia Beach",
//     value: "Empire Beauty School-Virginia Beach"
//   },
//   {
//     label: "Sanford-Brown College-Columbus",
//     value: "Sanford-Brown College-Columbus"
//   },
//   {
//     label: "Ross Medical Education Center-Morgantown",
//     value: "Ross Medical Education Center-Morgantown"
//   },
//   {
//     label: "Paul Mitchell the School-Ogden",
//     value: "Paul Mitchell the School-Ogden"
//   },
//   {
//     label: "CollegeAmerica-Colorado Springs South",
//     value: "CollegeAmerica-Colorado Springs South"
//   },
//   {
//     label: "Everest Institute-Bensalem",
//     value: "Everest Institute-Bensalem"
//   },
//   {
//     label: "Golf Academy of America-Farmers Branch",
//     value: "Golf Academy of America-Farmers Branch"
//   },
//   {
//     label: "Utah College of Massage Therapy-Dallas",
//     value: "Utah College of Massage Therapy-Dallas"
//   },
//   { label: "Miami Ad School-New York", value: "Miami Ad School-New York" },
//   {
//     label: "Lacy Cosmetology School-West Ashley",
//     value: "Lacy Cosmetology School-West Ashley"
//   },
//   {
//     label: "Dade Medical College-West Palm Beach",
//     value: "Dade Medical College-West Palm Beach"
//   },
//   {
//     label: "Dade Medical College-Jacksonville",
//     value: "Dade Medical College-Jacksonville"
//   },
//   { label: "WestMed College", value: "WestMed College" },
//   { label: "Larry's Barber College", value: "Larry's Barber College" },
//   { label: "Futura Career Institute", value: "Futura Career Institute" },
//   { label: "Access Careers", value: "Access Careers" },
//   { label: "Flair Beauty College", value: "Flair Beauty College" },
//   {
//     label: "Eternity Cosmetology School",
//     value: "Eternity Cosmetology School"
//   },
//   {
//     label: "Tri-State Institute of Hair Design",
//     value: "Tri-State Institute of Hair Design"
//   },
//   {
//     label: "Vogue College of Cosmetology-San Antonio Fredericksburg",
//     value: "Vogue College of Cosmetology-San Antonio Fredericksburg"
//   },
//   {
//     label: "Vogue College of Cosmetology",
//     value: "Vogue College of Cosmetology"
//   },
//   {
//     label: "Tomorrow's Image Barber Academy of Virginia",
//     value: "Tomorrow's Image Barber Academy of Virginia"
//   },
//   { label: "Excel Learning Center", value: "Excel Learning Center" },
//   {
//     label: "College of International Esthetics Inc",
//     value: "College of International Esthetics Inc"
//   },
//   {
//     label: "Medical Allied Career Center",
//     value: "Medical Allied Career Center"
//   },
//   {
//     label: "Bais HaMedrash and Mesivta of Baltimore",
//     value: "Bais HaMedrash and Mesivta of Baltimore"
//   },
//   {
//     label: "Long Island Barber Institute",
//     value: "Long Island Barber Institute"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Toledo",
//     value: "Toni & Guy Hairdressing Academy-Toledo"
//   },
//   {
//     label: "American Institute of Medical Sonography",
//     value: "American Institute of Medical Sonography"
//   },
//   {
//     label: "Destination Academy for Spa and Salon Professionals",
//     value: "Destination Academy for Spa and Salon Professionals"
//   },
//   { label: "Classic Cooking Academy", value: "Classic Cooking Academy" },
//   {
//     label: "School of Court Reporting",
//     value: "School of Court Reporting"
//   },
//   {
//     label: "Curve Metric School of Hair Design",
//     value: "Curve Metric School of Hair Design"
//   },
//   { label: "Athena Career Academy", value: "Athena Career Academy" },
//   {
//     label: "Yeshiva Gedolah Zichron Leyma",
//     value: "Yeshiva Gedolah Zichron Leyma"
//   },
//   { label: "The Barber School", value: "The Barber School" },
//   {
//     label: "Be'er Yaakov Talmudic Seminary",
//     value: "Be'er Yaakov Talmudic Seminary"
//   },
//   { label: "RGV Careers", value: "RGV Careers" },
//   { label: "Alexander Academy", value: "Alexander Academy" },
//   {
//     label: "LeMelange Academy of Hair",
//     value: "LeMelange Academy of Hair"
//   },
//   { label: "Aveda Institute-Tucson", value: "Aveda Institute-Tucson" },
//   {
//     label: "Velvet Touch Academy of Cosmetology",
//     value: "Velvet Touch Academy of Cosmetology"
//   },
//   {
//     label: "Ambiance Beauty & Barber Academy Inc",
//     value: "Ambiance Beauty & Barber Academy Inc"
//   },
//   { label: "Diamond Beauty College", value: "Diamond Beauty College" },
//   {
//     label: "NCP College of Nursing-South San Francisco",
//     value: "NCP College of Nursing-South San Francisco"
//   },
//   {
//     label: "University Academy of Hair Design",
//     value: "University Academy of Hair Design"
//   },
//   {
//     label: "Florida Institute of Recording Sound and Technology",
//     value: "Florida Institute of Recording Sound and Technology"
//   },
//   {
//     label: "New Dimensions Beauty Academy Inc",
//     value: "New Dimensions Beauty Academy Inc"
//   },
//   { label: "Jolei's Hair Institute", value: "Jolei's Hair Institute" },
//   {
//     label: "Paul Mitchell the School-Reno",
//     value: "Paul Mitchell the School-Reno"
//   },
//   { label: "Boise Barber College", value: "Boise Barber College" },
//   { label: "Austin Kade Academy", value: "Austin Kade Academy" },
//   {
//     label: "Aesthetic Science Institute",
//     value: "Aesthetic Science Institute"
//   },
//   {
//     label: "Elaine Sterling Institute",
//     value: "Elaine Sterling Institute"
//   },
//   {
//     label: "Wade Gordon Hairdressing Academy",
//     value: "Wade Gordon Hairdressing Academy"
//   },
//   { label: "Mitsu Sato Hair Academy", value: "Mitsu Sato Hair Academy" },
//   {
//     label: "SAE Institute of Technology-Los Angeles",
//     value: "SAE Institute of Technology-Los Angeles"
//   },
//   {
//     label: "Florida Vocational Institute",
//     value: "Florida Vocational Institute"
//   },
//   {
//     label: "SAE Institute of Technology-Atlanta",
//     value: "SAE Institute of Technology-Atlanta"
//   },
//   { label: "Academy di Firenze", value: "Academy di Firenze" },
//   {
//     label: "SAE Institute of Technology-Miami",
//     value: "SAE Institute of Technology-Miami"
//   },
//   {
//     label: "Colorado State University-Global Campus",
//     value: "Colorado State University-Global Campus"
//   },
//   {
//     label: "Paul Mitchell the School-Overland Park",
//     value: "Paul Mitchell the School-Overland Park"
//   },
//   { label: "Medspa Academies", value: "Medspa Academies" },
//   {
//     label: "Brighton Institute of Cosmetology",
//     value: "Brighton Institute of Cosmetology"
//   },
//   {
//     label: "Strayer University-Minnesota",
//     value: "Strayer University-Minnesota"
//   },
//   {
//     label: "Strayer University-Illinois",
//     value: "Strayer University-Illinois"
//   },
//   {
//     label: "West Coast University-Dallas",
//     value: "West Coast University-Dallas"
//   },
//   {
//     label: "Stevens-Henager College-St George",
//     value: "Stevens-Henager College-St George"
//   },
//   {
//     label: "National American University-Bellevue",
//     value: "National American University-Bellevue"
//   },
//   {
//     label: "National American University-Burnsville",
//     value: "National American University-Burnsville"
//   },
//   {
//     label: "National American University-Mesquite",
//     value: "National American University-Mesquite"
//   },
//   {
//     label: "Empire Beauty School-Savannah",
//     value: "Empire Beauty School-Savannah"
//   },
//   {
//     label: "Ogle School Hair Skin Nails-Denton",
//     value: "Ogle School Hair Skin Nails-Denton"
//   },
//   {
//     label: "Empire Beauty School-West Greensboro",
//     value: "Empire Beauty School-West Greensboro"
//   },
//   {
//     label: "California College San Diego",
//     value: "California College San Diego"
//   },
//   {
//     label: "California College San Diego",
//     value: "California College San Diego"
//   },
//   {
//     label: "Old Town Barber College-Topeka",
//     value: "Old Town Barber College-Topeka"
//   },
//   {
//     label: "Jolie Hair and Beauty Academy-Northfield",
//     value: "Jolie Hair and Beauty Academy-Northfield"
//   },
//   {
//     label: "Hays Academy of Hair Design",
//     value: "Hays Academy of Hair Design"
//   },
//   { label: "Bellus Academy", value: "Bellus Academy" },
//   {
//     label: "Cortiva Institute-Seattle",
//     value: "Cortiva Institute-Seattle"
//   },
//   {
//     label: "MotoRing Technical Training Institute",
//     value: "MotoRing Technical Training Institute"
//   },
//   {
//     label: "Leon Studio One School of Hair Design & Career Training Center",
//     value: "Leon Studio One School of Hair Design & Career Training Center"
//   },
//   { label: "Columbia College", value: "Columbia College" },
//   {
//     label: "NCP College of Nursing-Hayward",
//     value: "NCP College of Nursing-Hayward"
//   },
//   {
//     label: "ITT Technical Institute-Philadelphia",
//     value: "ITT Technical Institute-Philadelphia"
//   },
//   {
//     label: "ITT Technical Institute-Marlton",
//     value: "ITT Technical Institute-Marlton"
//   },
//   {
//     label: "ITT Technical Institute-Germantown",
//     value: "ITT Technical Institute-Germantown"
//   },
//   {
//     label: "ITT Technical Institute-Grand Rapids",
//     value: "ITT Technical Institute-Grand Rapids"
//   },
//   {
//     label: "ITT Technical Institute-Southfield",
//     value: "ITT Technical Institute-Southfield"
//   },
//   {
//     label: "ITT Technical Institute-West Palm Beach",
//     value: "ITT Technical Institute-West Palm Beach"
//   },
//   {
//     label: "ITT Technical Institute-Salem",
//     value: "ITT Technical Institute-Salem"
//   },
//   {
//     label: "ITT Technical Institute-Deerfield Beach",
//     value: "ITT Technical Institute-Deerfield Beach"
//   },
//   {
//     label: "ITT Technical Institute-Indianapolis East",
//     value: "ITT Technical Institute-Indianapolis East"
//   },
//   {
//     label: "ITT Technical Institute-Douglasville",
//     value: "ITT Technical Institute-Douglasville"
//   },
//   {
//     label: "ITT Technical Institute-Overland Park",
//     value: "ITT Technical Institute-Overland Park"
//   },
//   {
//     label: "ITT Technical Institute-Springfield",
//     value: "ITT Technical Institute-Springfield"
//   },
//   {
//     label: "ITT Technical Institute-West Chester",
//     value: "ITT Technical Institute-West Chester"
//   },
//   {
//     label: "University of Phoenix-McAllen Campus",
//     value: "University of Phoenix-McAllen Campus"
//   },
//   {
//     label: "Pennsylvania State University-World Campus",
//     value: "Pennsylvania State University-World Campus"
//   },
//   { label: "Medical Career Institute", value: "Medical Career Institute" },
//   {
//     label: "Advance Beauty Techs Academy",
//     value: "Advance Beauty Techs Academy"
//   },
//   { label: "Longs Peak Academy", value: "Longs Peak Academy" },
//   { label: "Brand College", value: "Brand College" },
//   { label: "Hinton Barber College", value: "Hinton Barber College" },
//   {
//     label: "Advanced Career Institute",
//     value: "Advanced Career Institute"
//   },
//   { label: "Digital Film Academy", value: "Digital Film Academy" },
//   {
//     label: "MyComputerCareer.com-Raleigh",
//     value: "MyComputerCareer.com-Raleigh"
//   },
//   {
//     label: "Kaplan University-Augusta Campus",
//     value: "Kaplan University-Augusta Campus"
//   },
//   { label: "South University-Austin", value: "South University-Austin" },
//   {
//     label: "South University-Cleveland",
//     value: "South University-Cleveland"
//   },
//   {
//     label: "Bryant & Stratton College-Online",
//     value: "Bryant & Stratton College-Online"
//   },
//   {
//     label: "Virginia College-Florence",
//     value: "Virginia College-Florence"
//   },
//   {
//     label: "Ogle School Hair Skin Nails-San Antonio",
//     value: "Ogle School Hair Skin Nails-San Antonio"
//   },
//   {
//     label: "Elizabethtown College School of Continuing and Professional Studies",
//     value: "Elizabethtown College School of Continuing and Professional Studies"
//   },
//   {
//     label: "Fortis College-Cutler Bay",
//     value: "Fortis College-Cutler Bay"
//   },
//   {
//     label: "Anamarc College-El Paso East",
//     value: "Anamarc College-El Paso East"
//   },
//   { label: "Ideal Beauty Academy", value: "Ideal Beauty Academy" },
//   {
//     label: "Minnesota School of Cosmetology-Plymouth Campus",
//     value: "Minnesota School of Cosmetology-Plymouth Campus"
//   },
//   {
//     label: "Mercyhurst University-North East Campus",
//     value: "Mercyhurst University-North East Campus"
//   },
//   {
//     label: "Warner Pacific College Adult Degree Program",
//     value: "Warner Pacific College Adult Degree Program"
//   },
//   { label: "Platt College-Riverside", value: "Platt College-Riverside" },
//   { label: "Savannah Law School", value: "Savannah Law School" },
//   {
//     label: "Empire Beauty School-Glen Burnie",
//     value: "Empire Beauty School-Glen Burnie"
//   },
//   {
//     label: "Everest College-Woodbridge",
//     value: "Everest College-Woodbridge"
//   },
//   {
//     label: "Everest College-Kansas City",
//     value: "Everest College-Kansas City"
//   },
//   {
//     label: "International School of Cosmetology-Toni & Guy Hairdressing Academy",
//     value: "International School of Cosmetology-Toni & Guy Hairdressing Academy"
//   },
//   {
//     label: "InterCoast Career Institute-Salem",
//     value: "InterCoast Career Institute-Salem"
//   },
//   {
//     label: "International Sports Sciences Association",
//     value: "International Sports Sciences Association"
//   },
//   {
//     label: "Abraham Lincoln University",
//     value: "Abraham Lincoln University"
//   },
//   { label: "National College-Canton", value: "National College-Canton" },
//   { label: "Shiloh University", value: "Shiloh University" },
//   {
//     label: "Court Reporting Institute of Arlington",
//     value: "Court Reporting Institute of Arlington"
//   },
//   {
//     label: "Vatterott College-Fairview Heights",
//     value: "Vatterott College-Fairview Heights"
//   },
//   {
//     label: "Ross Medical Education Center-Dayton",
//     value: "Ross Medical Education Center-Dayton"
//   },
//   {
//     label: "Ross Medical Education Center-Ontario",
//     value: "Ross Medical Education Center-Ontario"
//   },
//   {
//     label: "Ross Medical Education Center-Bowling Green",
//     value: "Ross Medical Education Center-Bowling Green"
//   },
//   {
//     label: "Florida Institute of Technology-Online",
//     value: "Florida Institute of Technology-Online"
//   },
//   { label: "Rasmussen College-Kansas", value: "Rasmussen College-Kansas" },
//   {
//     label: "NewCourtland Education Center",
//     value: "NewCourtland Education Center"
//   },
//   { label: "Columbia Institute", value: "Columbia Institute" },
//   {
//     label: "Wadsworth Center-NY State Dept of Health",
//     value: "Wadsworth Center-NY State Dept of Health"
//   },
//   { label: "EMS Training Institute", value: "EMS Training Institute" },
//   {
//     label: "School of Missionary Aviation Technology",
//     value: "School of Missionary Aviation Technology"
//   },
//   {
//     label: "Ace Cosmetology and Barber Training Center",
//     value: "Ace Cosmetology and Barber Training Center"
//   },
//   {
//     label: "Salt Lake Baptist College",
//     value: "Salt Lake Baptist College"
//   },
//   {
//     label: "Manthano Christian College",
//     value: "Manthano Christian College"
//   },
//   {
//     label: "California Miramar University",
//     value: "California Miramar University"
//   },
//   { label: "Rocky Vista University", value: "Rocky Vista University" },
//   {
//     label: "Virginia College-Greensboro",
//     value: "Virginia College-Greensboro"
//   },
//   {
//     label: "The College of Health Care Professions-Dallas",
//     value: "The College of Health Care Professions-Dallas"
//   },
//   {
//     label: "The College of Health Care Professions-Fort Worth",
//     value: "The College of Health Care Professions-Fort Worth"
//   },
//   {
//     label: "Shear Finesse Hairstyling Academy",
//     value: "Shear Finesse Hairstyling Academy"
//   },
//   {
//     label: "Redstone College-Denver East",
//     value: "Redstone College-Denver East"
//   },
//   {
//     label: "Academy of Salon Professionals",
//     value: "Academy of Salon Professionals"
//   },
//   {
//     label: "CyberTex Institute of Technology",
//     value: "CyberTex Institute of Technology"
//   },
//   { label: "UEI College-Santa Cruz", value: "UEI College-Santa Cruz" },
//   {
//     label: "New England Tractor Trailer Training School of CT-Bridgeport",
//     value: "New England Tractor Trailer Training School of CT-Bridgeport"
//   },
//   {
//     label: "Gemini School of Visual Arts & Communication",
//     value: "Gemini School of Visual Arts & Communication"
//   },
//   {
//     label: "Paul Mitchell the School-Woodbridge",
//     value: "Paul Mitchell the School-Woodbridge"
//   },
//   {
//     label: "College of the Muscogee Nation",
//     value: "College of the Muscogee Nation"
//   },
//   {
//     label: "The Salon Professional Academy-Huntsville",
//     value: "The Salon Professional Academy-Huntsville"
//   },
//   { label: "Midwives College of Utah", value: "Midwives College of Utah" },
//   {
//     label: "Aspen Beauty Academy of Laurel",
//     value: "Aspen Beauty Academy of Laurel"
//   },
//   { label: "M T Training Center", value: "M T Training Center" },
//   {
//     label: "Berks Career & Technology Center",
//     value: "Berks Career & Technology Center"
//   },
//   {
//     label: "Future Generations Graduate School",
//     value: "Future Generations Graduate School"
//   },
//   {
//     label: "Carthage R9 School District-Carthage Technical Center",
//     value: "Carthage R9 School District-Carthage Technical Center"
//   },
//   { label: "Grace Mission University", value: "Grace Mission University" },
//   {
//     label: "World A Cuts Barber Institute",
//     value: "World A Cuts Barber Institute"
//   },
//   {
//     label: "Photographic Center Northwest",
//     value: "Photographic Center Northwest"
//   },
//   { label: "PCCTI IT and Healthcare", value: "PCCTI IT and Healthcare" },
//   {
//     label: "Sotheby's Institute of Art-NY",
//     value: "Sotheby's Institute of Art-NY"
//   },
//   {
//     label: "Top Nails & Hair Beauty School",
//     value: "Top Nails & Hair Beauty School"
//   },
//   { label: "Radians College", value: "Radians College" },
//   { label: "Santa Ana Beauty College", value: "Santa Ana Beauty College" },
//   { label: "Shepherds College", value: "Shepherds College" },
//   {
//     label: "Woodruff Medical Training and Testing",
//     value: "Woodruff Medical Training and Testing"
//   },
//   { label: "Helms College", value: "Helms College" },
//   {
//     label: "American Academy of Personal Training",
//     value: "American Academy of Personal Training"
//   },
//   { label: "Technology Center", value: "Technology Center" },
//   { label: "Ukiah Adult School", value: "Ukiah Adult School" },
//   {
//     label: "Riverside County Office of Education",
//     value: "Riverside County Office of Education"
//   },
//   {
//     label: "Institute of Health Sciences",
//     value: "Institute of Health Sciences"
//   },
//   {
//     label: "Mid-America Baptist Theological Seminary",
//     value: "Mid-America Baptist Theological Seminary"
//   },
//   {
//     label: "Mid-South Christian College",
//     value: "Mid-South Christian College"
//   },
//   {
//     label: "Advanced Computing Institute",
//     value: "Advanced Computing Institute"
//   },
//   {
//     label: "New York Institute of Beauty",
//     value: "New York Institute of Beauty"
//   },
//   {
//     label: "Ultrasound Medical Institute",
//     value: "Ultrasound Medical Institute"
//   },
//   {
//     label: "Beautiful You School of Nail Technology",
//     value: "Beautiful You School of Nail Technology"
//   },
//   { label: "Harmon's Beauty School", value: "Harmon's Beauty School" },
//   {
//     label: "Xavier College School of Nursing",
//     value: "Xavier College School of Nursing"
//   },
//   {
//     label: "Lawrence & Company College of Cosmetology",
//     value: "Lawrence & Company College of Cosmetology"
//   },
//   { label: "Cactus Academy", value: "Cactus Academy" },
//   { label: "Kaizen Beauty Academy", value: "Kaizen Beauty Academy" },
//   {
//     label: "Southern Texas Careers Academy",
//     value: "Southern Texas Careers Academy"
//   },
//   {
//     label: "Sharp Edgez Barber Institute",
//     value: "Sharp Edgez Barber Institute"
//   },
//   {
//     label: "Salon Professional Academy",
//     value: "Salon Professional Academy"
//   },
//   {
//     label: "Cosmotech School of Cosmetology",
//     value: "Cosmotech School of Cosmetology"
//   },
//   {
//     label: "Prestige Health & Beauty Sciences Academy",
//     value: "Prestige Health & Beauty Sciences Academy"
//   },
//   {
//     label: "Grace College of Barbering",
//     value: "Grace College of Barbering"
//   },
//   {
//     label: "California Career Institute",
//     value: "California Career Institute"
//   },
//   {
//     label: "Cosmo Factory Cosmetology Academy",
//     value: "Cosmo Factory Cosmetology Academy"
//   },
//   { label: "Grace School of Theology", value: "Grace School of Theology" },
//   {
//     label: "Yeshiva Gedolah Kesser Torah",
//     value: "Yeshiva Gedolah Kesser Torah"
//   },
//   {
//     label: "Universal Training Institute",
//     value: "Universal Training Institute"
//   },
//   { label: "Yeshiva Yesodei Hatorah", value: "Yeshiva Yesodei Hatorah" },
//   { label: "Rizzieri Institute", value: "Rizzieri Institute" },
//   {
//     label: "Bonnie Joseph Academy of Cosmetology and Barbering",
//     value: "Bonnie Joseph Academy of Cosmetology and Barbering"
//   },
//   {
//     label: "Healthcare Training Institute",
//     value: "Healthcare Training Institute"
//   },
//   {
//     label: "W Academy of Salon and Spa",
//     value: "W Academy of Salon and Spa"
//   },
//   { label: "Boca Beauty Academy", value: "Boca Beauty Academy" },
//   {
//     label: "United Medical and Business Institute",
//     value: "United Medical and Business Institute"
//   },
//   {
//     label: "Paul Mitchell the School-Jersey Shore",
//     value: "Paul Mitchell the School-Jersey Shore"
//   },
//   {
//     label: "City Pointe Beauty Academy",
//     value: "City Pointe Beauty Academy"
//   },
//   {
//     label: "Chrysm Institute of Esthetics",
//     value: "Chrysm Institute of Esthetics"
//   },
//   {
//     label: "Sanford-Burnham Medical Research Institute",
//     value: "Sanford-Burnham Medical Research Institute"
//   },
//   {
//     label: "National Personal Training Institute of Columbus",
//     value: "National Personal Training Institute of Columbus"
//   },
//   {
//     label: "Bly's School of Cosmetology",
//     value: "Bly's School of Cosmetology"
//   },
//   {
//     label: "Toni & Guy Hairdressing Academy-Manteca",
//     value: "Toni & Guy Hairdressing Academy-Manteca"
//   },
//   {
//     label: "Belle Academy of Cosmetology",
//     value: "Belle Academy of Cosmetology"
//   },
//   {
//     label: "Strayer University-Missouri",
//     value: "Strayer University-Missouri"
//   },
//   {
//     label: "Dorsey Business Schools-Lansing",
//     value: "Dorsey Business Schools-Lansing"
//   },
//   {
//     label: "ITT Technical Institute-Pensacola",
//     value: "ITT Technical Institute-Pensacola"
//   },
//   {
//     label: "ITT Technical Institute-San Antonio East",
//     value: "ITT Technical Institute-San Antonio East"
//   },
//   {
//     label: "MedTech Institute-Orlando Campus",
//     value: "MedTech Institute-Orlando Campus"
//   },
//   {
//     label: "Tulsa Welding School-Tulsa",
//     value: "Tulsa Welding School-Tulsa"
//   },
//   {
//     label: "Empire Beauty School-Augusta",
//     value: "Empire Beauty School-Augusta"
//   },
//   {
//     label: "South University-High Point",
//     value: "South University-High Point"
//   },
//   {
//     label: "Empire Beauty School-Vernon Hills",
//     value: "Empire Beauty School-Vernon Hills"
//   },
//   {
//     label: "Empire Beauty School-Stone Park",
//     value: "Empire Beauty School-Stone Park"
//   },
//   {
//     label: "Court Reporting Institute of St Louis",
//     value: "Court Reporting Institute of St Louis"
//   },
//   {
//     label: "San Joaquin Valley College-Lancaster",
//     value: "San Joaquin Valley College-Lancaster"
//   },
//   {
//     label: "San Joaquin Valley College-San Diego",
//     value: "San Joaquin Valley College-San Diego"
//   },
//   {
//     label: "Ohio Business College-Dayton",
//     value: "Ohio Business College-Dayton"
//   },
//   {
//     label: "Empire Beauty School-Rochester",
//     value: "Empire Beauty School-Rochester"
//   },
//   {
//     label: "American Career College-Long Beach",
//     value: "American Career College-Long Beach"
//   },
//   {
//     label: "Ross Medical Education Center-Kokomo",
//     value: "Ross Medical Education Center-Kokomo"
//   },
//   {
//     label: "Ross Medical Education Center-Erlanger",
//     value: "Ross Medical Education Center-Erlanger"
//   },
//   {
//     label: "Ross Medical Education Center-Charleston",
//     value: "Ross Medical Education Center-Charleston"
//   },
//   {
//     label: "L'Ecole Culinaire-Kansas City",
//     value: "L'Ecole Culinaire-Kansas City"
//   },
//   {
//     label: "Utah College of Massage Therapy-Houston",
//     value: "Utah College of Massage Therapy-Houston"
//   },
//   {
//     label: "InterCoast Colleges-Fairfield",
//     value: "InterCoast Colleges-Fairfield"
//   },
//   {
//     label: "Vatterott College-ex'treme Institute by Nelly-St Louis",
//     value: "Vatterott College-ex'treme Institute by Nelly-St Louis"
//   },
//   {
//     label: "Personal Fitness & Nutrition Center",
//     value: "Personal Fitness & Nutrition Center"
//   },
//   {
//     label: "Southern Careers Institute-San Antonio",
//     value: "Southern Careers Institute-San Antonio"
//   },
//   {
//     label: "College of Business and Technology-Miami Gardens",
//     value: "College of Business and Technology-Miami Gardens"
//   },
//   {
//     label: "Milan Institute of Cosmetology-Nampa",
//     value: "Milan Institute of Cosmetology-Nampa"
//   },
//   { label: "Milan Institute-Merced", value: "Milan Institute-Merced" },
//   {
//     label: "Midwest Technical Institute-Springfield",
//     value: "Midwest Technical Institute-Springfield"
//   },
//   {
//     label: "Finger Lakes School of Massage",
//     value: "Finger Lakes School of Massage"
//   },
//   {
//     label: "Georgia Regents University",
//     value: "Georgia Regents University"
//   },
//   {
//     label: "Middle Georgia State College",
//     value: "Middle Georgia State College"
//   },
//   { label: "Trenz Beauty Academy", value: "Trenz Beauty Academy" },
//   {
//     label: "Paul Mitchell the School-Denver",
//     value: "Paul Mitchell the School-Denver"
//   },
//   {
//     label: "Academy of Interactive Entertainment",
//     value: "Academy of Interactive Entertainment"
//   },
//   {
//     label: "Arrojo Cosmetology School",
//     value: "Arrojo Cosmetology School"
//   },
//   {
//     label: "Cosmetology Academy of Texarkana",
//     value: "Cosmetology Academy of Texarkana"
//   },
//   { label: "Virginia Baptist College", value: "Virginia Baptist College" },
//   { label: "Lynnes Welding Training", value: "Lynnes Welding Training" },
//   {
//     label: "Aviation Institute of Maintenance-Las Vegas",
//     value: "Aviation Institute of Maintenance-Las Vegas"
//   },
//   {
//     label: "Tulsa Technology Center-Owasso Campus",
//     value: "Tulsa Technology Center-Owasso Campus"
//   },
//   {
//     label: "Tulsa Technology Center-Sand Springs Campus",
//     value: "Tulsa Technology Center-Sand Springs Campus"
//   },
//   {
//     label: "National American University-Austin South",
//     value: "National American University-Austin South"
//   },
//   {
//     label: "National American University-Lewisville",
//     value: "National American University-Lewisville"
//   },
//   {
//     label: "National American University-Georgetown",
//     value: "National American University-Georgetown"
//   },
//   {
//     label: "National American University-Richardson",
//     value: "National American University-Richardson"
//   },
//   {
//     label: "National American University-Rochester",
//     value: "National American University-Rochester"
//   },
//   {
//     label: "National American University-Weldon Spring",
//     value: "National American University-Weldon Spring"
//   },
//   {
//     label: "National American University-Wichita West",
//     value: "National American University-Wichita West"
//   },
//   {
//     label: "National American University-Indianapolis",
//     value: "National American University-Indianapolis"
//   },
//   {
//     label: "National American University-Tigard",
//     value: "National American University-Tigard"
//   },
//   {
//     label: "The Art Institute of St Louis",
//     value: "The Art Institute of St Louis"
//   },
//   {
//     label: "DeVry College of New York",
//     value: "DeVry College of New York"
//   },
//   { label: "DeVry University-Arizona", value: "DeVry University-Arizona" },
//   {
//     label: "DeVry University-California",
//     value: "DeVry University-California"
//   },
//   {
//     label: "DeVry University-Colorado",
//     value: "DeVry University-Colorado"
//   },
//   { label: "DeVry University-Florida", value: "DeVry University-Florida" },
//   { label: "DeVry University-Georgia", value: "DeVry University-Georgia" },
//   {
//     label: "DeVry University-Illinois",
//     value: "DeVry University-Illinois"
//   },
//   { label: "DeVry University-Indiana", value: "DeVry University-Indiana" },
//   {
//     label: "DeVry University-Kentucky",
//     value: "DeVry University-Kentucky"
//   },
//   {
//     label: "DeVry University-Maryland",
//     value: "DeVry University-Maryland"
//   },
//   {
//     label: "DeVry University-Michigan",
//     value: "DeVry University-Michigan"
//   },
//   {
//     label: "DeVry University-Minnesota",
//     value: "DeVry University-Minnesota"
//   },
//   {
//     label: "DeVry University-Missouri",
//     value: "DeVry University-Missouri"
//   },
//   { label: "DeVry University-Nevada", value: "DeVry University-Nevada" },
//   {
//     label: "DeVry University-New Jersey",
//     value: "DeVry University-New Jersey"
//   },
//   {
//     label: "DeVry University-North Carolina",
//     value: "DeVry University-North Carolina"
//   },
//   { label: "DeVry University-Ohio", value: "DeVry University-Ohio" },
//   {
//     label: "DeVry University-Oklahoma",
//     value: "DeVry University-Oklahoma"
//   },
//   { label: "DeVry University-Oregon", value: "DeVry University-Oregon" },
//   {
//     label: "DeVry University-Pennsylvania",
//     value: "DeVry University-Pennsylvania"
//   },
//   {
//     label: "DeVry University-Tennessee",
//     value: "DeVry University-Tennessee"
//   },
//   { label: "DeVry University-Texas", value: "DeVry University-Texas" },
//   { label: "DeVry University-Utah", value: "DeVry University-Utah" },
//   {
//     label: "DeVry University-Virginia",
//     value: "DeVry University-Virginia"
//   },
//   {
//     label: "DeVry University-Washington",
//     value: "DeVry University-Washington"
//   },
//   {
//     label: "DeVry University-Wisconsin",
//     value: "DeVry University-Wisconsin"
//   },
//   {
//     label: "University of North Georgia",
//     value: "University of North Georgia"
//   },
//   {
//     label: "South Georgia State College",
//     value: "South Georgia State College"
//   },
//   {
//     label: "Northeastern University Global Network",
//     value: "Northeastern University Global Network"
//   },
//   {
//     label: "Georgia Military College-Distance Learning Campuses",
//     value: "Georgia Military College-Distance Learning Campuses"
//   },
//   {
//     label: "Florida Polytechnic University",
//     value: "Florida Polytechnic University"
//   },
//   {
//     label: "Brown Mackie College-Dallas",
//     value: "Brown Mackie College-Dallas"
//   },
//   {
//     label: "American Institute-Toms River",
//     value: "American Institute-Toms River"
//   },
//   { label: "Texas Covenant Education", value: "Texas Covenant Education" },
//   { label: "Arizona College-Mesa", value: "Arizona College-Mesa" },
//   {
//     label: "American College of Healthcare",
//     value: "American College of Healthcare"
//   },
//   { label: "Antioch College", value: "Antioch College" },
//   {
//     label: "Texas A & M University-Central Texas",
//     value: "Texas A & M University-Central Texas"
//   },
//   {
//     label: "Central Georgia Technical College",
//     value: "Central Georgia Technical College"
//   },
//   {
//     label: "Barber School of Pittsburgh",
//     value: "Barber School of Pittsburgh"
//   },
//   {
//     label: "EDMC Central Administrative Office",
//     value: "EDMC Central Administrative Office"
//   },
//   {
//     label: "The Salon Professional Academy-South Plainfield",
//     value: "The Salon Professional Academy-South Plainfield"
//   },
//   {
//     label: "Arizona State University-Skysong",
//     value: "Arizona State University-Skysong"
//   },
//   {
//     label: "Louisiana Delta Community College",
//     value: "Louisiana Delta Community College"
//   }
// ]


// let parsedColleges = {}
// colleges.forEach(college => {
//   if (!parsedColleges[college.value]) {
//     parsedColleges[college.value] = college.value
//   }
// })

// const jsonColleges = JSON.stringify(parsedColleges)
// fs.writeFile ("newColleges.json", jsonColleges, function(err) {
//   if (err) throw err;
//   console.log('complete');
//   }
// );