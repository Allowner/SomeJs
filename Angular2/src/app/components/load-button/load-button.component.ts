import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NewsModel } from "app/model/newsModel";

@Component({
  selector: "app-load-button",
  templateUrl: "./load-button.component.html",
  styleUrls: ["./load-button.component.css"]
})
export class LoadButtonComponent implements OnInit {
  allArticles = [
    {
      id: 1,
      createdByMe: false,
      source: {
        id: null,
        name: "Youtube.com"
      },
      author: null,
      title:
        "NASA Astronauts Spacewalk Outside the International Space Station on Jan. 20, 2020 - NASA",
      description:
        "On Monday, Jan. 20 starting at 6:50 a.m. EST, NASA astronauts Jessica Meir and Christina Koch will step outside of the International Space Station into the v...",
      url: "https://www.youtube.com/watch?v=3lRZd2EsqlA",
      urlToImage: "https://i.ytimg.com/vi/3lRZd2EsqlA/maxresdefault_live.jpg",
      publishedAt: "2020-01-20T10:30:12Z",
      content:
        "On Monday, Jan. 20 starting at 6:50 a.m. EST, NASA astronauts Jessica Meir and Christina Koch will step outside of the International Space Station into the vacuum of space together. The duo will wrap up the work of installing new lithium-ion batteries to upgr… [+98 chars]"
    },
    {
      id: 2,
      createdByMe: false,
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Hollie Silverman and Carma Hassan, CNN",
      title:
        "2 Honolulu police officers were shot and killed when they answered a call for help. Then the house they responded to went up in flames - CNN",
      description:
        "Two Honolulu police officers were shot and killed when they responded to a call for help Sunday in Waikiki. Following the shooting, a fire broke out at the home the officers had been called to. Three people, including the suspect, remain unaccounted in the fi…",
      url:
        "https://www.cnn.com/2020/01/20/us/honolulu-police-officers-killed-monday/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200120002047-honolulu-shooting-officers-split-super-tease.jpg",
      publishedAt: "2020-01-20T09:41:00Z",
      content:
        "My heart is with the Enriquez &amp; Kalama families, and their fellow officers, in the wake of this tragic shooting. They responded to a call for help, and paid the ultimate price. To the first responders still at the scene working to protect others from harm… [+97 chars]"
    },
    {
      id: 3,
      createdByMe: false,
      source: {
        id: "usa-today",
        name: "USA Today"
      },
      author: "Editors",
      title:
        "MLK Day, Virginia gun rights rally, SAG Awards: 5 things to know Monday - USA TODAY",
      description:
        "Civil rights hero Martin Luther King, Jr. is honored, the Australian Open begins and more things you need to know Monday.",
      url:
        "https://www.usatoday.com/story/news/2020/01/20/mlk-day-virginia-gun-rights-rally-sag-awards-5-things-know-monday/4452205002/?utm_source=google&utm_medium=amp&utm_campaign=speakable",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2020/01/17/USATODAY/usatsports/martin-luther-king-jr.jpg?width=1600&height=800&fit=crop",
      publishedAt: "2020-01-20T08:49:38Z",
      content:
        "Martin Luther King Jr.'s words continue to resonate, decades later\r\nOn the third Monday of January every year, the federal government closes up shop for a day to honor civil rights hero Martin Luther King, Jr., who was assassinated on Apr. 4, 1968 in Memphis.… [+3587 chars]"
    },
    {
      id: 4,
      createdByMe: false,
      source: {
        id: "abc-news",
        name: "ABC News"
      },
      author: "Jon Haworth",
      title: "At least 2 dead, 15 injured in Kansas City shooting - ABC News",
      description: "",
      url:
        "https://abcnews.go.com/US/dead-15-injured-kansas-city-shooting/story?id=68398118",
      urlToImage:
        "https://s.abcnews.com/images/General/Breaking-News-banner-abc-ps-181024_hpMain_16x9_992.jpg",
      publishedAt: "2020-01-20T07:52:51Z",
      content:
        "At least two people are dead and 15 people have been injured in a shooting in Kansas City, according to the Kansas City Police.\r\nOfficers were dispatched to the 4800 block of Noland Road in the southeastern part of the city at about 11:30 p.m. when they recei… [+825 chars]"
    },
    {
      id: 5,
      createdByMe: false,
      source: {
        id: "the-verge",
        name: "The Verge"
      },
      author: "Thomas Ricker",
      title: "Samsung names Roh Tae-moon new smartphone boss - The Verge",
      description:
        "Tae-moon Roh is the new chief of Samsung’s mobile division, taking over for DJ Koh. Roh is described as an engineering maven who’s meticulous about phone features. Roh joined Samsung in 1997 and has been a key player in the research and development of the Gal…",
      url:
        "https://www.theverge.com/2020/1/20/21073657/samsung-names-roh-tae-moon-new-smartphone-boss",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/3KacR_RjWeKvJuwEvmdwxNuO0Gs=/0x50:706x420/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19613567/TaeMoonRoh_Main_1.jpg",
      publishedAt: "2020-01-20T07:35:18Z",
      content:
        "Step aside DJ Koh\r\nSamsungs new mobile chief Roh Tae-moon.\r\nSamsung Electronics\r\nSamsung Electronics has appointed Roh Tae-moon its new mobile chief, taking over from co-ceo DJ Koh, wholl continue to lead the chaebols IT and mobile communications division. Ro… [+905 chars]"
    },
    {
      id: 6,
      createdByMe: false,
      source: {
        id: "cnbc",
        name: "CNBC"
      },
      author: "Huileng Tan",
      title:
        "China confirms some 140 new cases of Sars-like virus ahead of peak travel season - CNBC",
      description:
        "Health authorities in China confirmed nearly 140 new cases of a new Sars-like virus on Monday morning, which has killed three people so far.",
      url:
        "https://www.cnbc.com/2020/01/20/wuhan-pneumonia-new-cases-amid-china-travel-season-ahead-of-lunar-new-year.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106342692-1579285181347gettyimages-1194134356.jpeg?v=1579484931",
      publishedAt: "2020-01-20T07:09:00Z",
      content:
        "Health authorities in China on Monday confirmed nearly 140 new cases of a mysterious pneumonia-like virus, which has killed three people so far.\r\nIt comes as the country's peak holiday travel season kicks off ahead of the Lunar New Year, sparking concerns ove… [+4417 chars]"
    },
    {
      id: 7,
      createdByMe: false,
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Charles Riley, CNN Business",
      title:
        "22 men own more wealth than Africa's 326 million women, Oxfam says - CNN",
      description:
        'Global inequality is "out of control" because of biased economic systems that exclude many women while allowing billionaires to amass huge fortunes that do little for society, according to Oxfam International.',
      url:
        "https://www.cnn.com/2020/01/19/business/oxfam-billionaires/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/190612114122-britain-aid-oxfam-super-tease.jpg",
      publishedAt: "2020-01-20T07:02:00Z",
      content: null
    },
    {
      id: 8,
      createdByMe: false,
      source: {
        id: null,
        name: "Youtube.com"
      },
      author: null,
      title:
        "Roger Federer on-court interview | Australian Open 2020 (1R) - Australian Open TV",
      description:
        "Roger Federer on-court interview | Australian Open 2020 (1R)",
      url: "https://www.youtube.com/watch?v=jAS-FYitHGw",
      urlToImage: "https://i.ytimg.com/vi/jAS-FYitHGw/maxresdefault.jpg",
      publishedAt: "2020-01-20T06:23:08Z",
      content:
        "[[getSimpleString(data.title)]]\r\n[[getSimpleString(data.description)]]\r\n[[getSimpleString(data.videoCountText)]]"
    },
    {
      id: 9,
      createdByMe: false,
      source: {
        id: null,
        name: "Ghacks.net"
      },
      author: null,
      title:
        "Internet Explorer 11 on Windows 7 is no longer supported - Ghacks Technology News",
      description:
        "Microsoft ended support for the company's Windows 7 operating system on January 14, 2020. One day later, support for Internet Explorer 11 ended as well.",
      url:
        "https://www.ghacks.net/2020/01/20/internet-explorer-11-on-windows-7-is-no-longer-supported/",
      urlToImage:
        "https://www.ghacks.net/wp-content/uploads/2020/01/internet-explorer-11-unsupported.png",
      publishedAt: "2020-01-20T06:04:56Z",
      content:
        "Microsoft ended its support for the company's Windows 7 operating system last week officially. While Enterprise and business customers may extend support by up to three years, it is no longer supported for Home users and customers who don't purchase support e… [+2076 chars]"
    },
    {
      id: 10,
      createdByMe: false,
      source: {
        id: null,
        name: "Theguardian.com"
      },
      author: "Associated Press",
      title:
        "New York Times endorses Elizabeth Warren and Amy Klobuchar - The Guardian",
      description:
        "In a break with convention, endorsement by the paper’s editorial board names two candidates as its preferred Democratic nominees for president",
      url:
        "https://www.theguardian.com/us-news/2020/jan/20/new-york-times-endorses-elizabeth-warren-and-amy-klobuchar",
      urlToImage:
        "https://i.guim.co.uk/img/media/cf12ae9555c381f87e42c2933db0a2638b79951d/0_0_2990_1796/master/2990.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=dfe15f99b52d5b7a0a28825a06e8be54",
      publishedAt: "2020-01-20T05:38:00Z",
      content:
        "The New York Times has endorsed not one but two candidates for the Democratic nomination for president, Minnesota senator Amy Klobuchar from the partys moderate wing and Massachusetts senator Elizabeth Warren from the progressive wing.\r\nThe paper said on Sund… [+2154 chars]"
    },
    {
      id: 11,
      createdByMe: false,
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: "Mark John",
      title:
        "Capitalism seen doing 'more harm than good' in global survey - Reuters",
      description:
        "A majority of people around the world believe capitalism in its current form is doing more harm than good, a survey found ahead of this week's Davos meeting of business and political leaders.",
      url:
        "https://www.reuters.com/article/us-davos-meeting-trust-idUSKBN1ZJ0CW",
      urlToImage:
        "https://s3.reutersmedia.net/resources/r/?m=02&d=20200120&t=2&i=1478786018&w=1200&r=LYNXMPEG0J0BM",
      publishedAt: "2020-01-20T05:08:00Z",
      content:
        "LONDON (Reuters) - A majority of people around the world believe capitalism in its current form is doing more harm than good, a survey found ahead of this week’s Davos meeting of business and political leaders. \r\nThis year was the first time the “Edelman Trus… [+2891 chars]"
    },
    {
      id: 12,
      createdByMe: false,
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Analysis by Stephen Collinson, CNN",
      title:
        "Trump's Senate trial defense: Abuse of power is not impeachable - CNN",
      description:
        "President Donald Trump's legal team will go into his Senate trial on Tuesday arguing that he should never have been impeached because his conduct over Ukraine does not amount to a criminal offense.",
      url:
        "https://www.cnn.com/2020/01/20/politics/trump-senate-trial-defense/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200119213810-trump-farm-bureau-super-tease.jpg",
      publishedAt: "2020-01-20T05:02:00Z",
      content: null
    },
    {
      id: 13,
      createdByMe: false,
      source: {
        id: "the-next-web",
        name: "The Next Web"
      },
      author: "Ivan Mehta",
      title:
        "Elon Musk: SpaceX will send NASA astronauts to space in Q2 - The Next Web",
      description:
        "Elon Musk said last night that SpaceX plans to send NASA astronauts to space between April and June. The mission, dubbed as Demo-2, will see the crew rocket up to the International Space Station for several days. SpaceX just completed a successful uncrewed te…",
      url:
        "https://thenextweb.com/space/2020/01/20/elon-musk-spacex-will-send-nasa-astronauts-to-space-in-q2/",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F01%2F49179161792_403a4424e9_k.jpg&signature=6d7b904421fadf01fa5779e5bf7e4c9f",
      publishedAt: "2020-01-20T04:51:27Z",
      content:
        "Elon Musk said last night that SpaceX plans to send NASA astronauts to space between April and June. The mission, dubbed as Demo-2, will see the crew rocket up to the International Space Station for several days.\r\nSpaceX just completed a successful uncrewed t… [+2203 chars]"
    },
    {
      id: 14,
      createdByMe: false,
      source: {
        id: "fox-news",
        name: "Fox News"
      },
      author: "Associated Press",
      title:
        "Manhunt in San Antonio after shooting at bar kills 2, injures 5 - Fox News",
      description:
        "A manhunt was underway Sunday night after two people were killed and five others were injured following a shooting during a concert at a San Antonio club, Texas authorities said.",
      url:
        "https://www.foxnews.com/us/police-2-dead-5-injured-after-shooting-in-san-antonio-club",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2020/01/Crime-Scene-iStock.jpg",
      publishedAt: "2020-01-20T04:11:44Z",
      content:
        "A manhunt was underway Sunday night after two people were killed and five others were injured following a shooting during a concert at a San Antonio club, Texas authorities said.\r\nPolice said officers were called shortly after 8 p.m. Sunday to the Ventura, a … [+726 chars]"
    },
    {
      id: 15,
      createdByMe: false,
      source: {
        id: null,
        name: "Youtube.com"
      },
      author: null,
      title:
        "Jennifer Aniston Tears Up Winning SAG Award For 'The Morning Show': 'This Is So Unbelievable!' - Access",
      description:
        'Jennifer Aniston had quite a night! The actress won big at the 2020 SAG Awards for her role in "The Morning Show." The 50-year-old got emotional as they anno...',
      url: "https://www.youtube.com/watch?v=9Ld0y_z6JG4",
      urlToImage: "https://i.ytimg.com/vi/9Ld0y_z6JG4/maxresdefault.jpg",
      publishedAt: "2020-01-20T03:26:30Z",
      content:
        'Jennifer Aniston had quite a night! The actress won big at the 2020 SAG Awards for her role in "The Morning Show." The 50-year-old got emotional as they announced her name and also thanked Reese Witherspoon in her acceptance speech. She also gave a shout out … [+138 chars]'
    },
    {
      id: 16,
      createdByMe: false,
      source: {
        id: "the-washington-post",
        name: "The Washington Post"
      },
      author: "Matt Viser, Sean Sullivan, Cleve Wootson",
      title:
        "With two weeks until Iowa, the Democratic presidential candidates are getting aggressive — with each other - The Washington Post",
      description:
        "A race that was once largely issue-driven grew personal over the weekend.",
      url:
        "https://www.washingtonpost.com/politics/with-two-weeks-until-iowa-the-democratic-presidential-candidates-are-getting-aggressive--with-each-other/2020/01/19/783af338-3aff-11ea-8872-5df698785a4e_story.html",
      urlToImage:
        "https://www.washingtonpost.com/resizer/9-bj99q7CEupyYKtdZD2JxrRoRg=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NSRYVDB2H4I6VIP7YSGB2WNEUE.jpg",
      publishedAt: "2020-01-20T03:02:00Z",
      content:
        "Sen. Elizabeth Warren (D-Mass.) criticized Mike Bloomberg for postponing the release of his financial disclosure statements, saying that the billionaire and former New York mayor is trying to skip the democracy part of the election and that voters wont know o… [+10313 chars]"
    },
    {
      id: 17,
      createdByMe: false,
      source: {
        id: null,
        name: "Yahoo.com"
      },
      author: null,
      title:
        "Jennifer Aniston gives surprise shout-out to Adam Sandler in first SAG Awards win since Friends - Yahoo Entertainment",
      description:
        "Jennifer Aniston gives surprise shoutout to Adam Sandler in first SAG Awards win since Friends",
      url:
        "https://www.yahoo.com/entertainment/jennifer-aniston-gives-surprise-shout-022245097.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/gG9mGEvRXuNcRDIeyrFthg--~B/aD0xNjAwO3c9MjQwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/entertainment_weekly_785/bb2c38f42deb2a47d0724dba3f6b5faf",
      publishedAt: "2020-01-20T03:01:01Z",
      content:
        "Jennifer Aniston nabbed her first major trophy for The Morning Show at the 2020 SAG Awards on Sunday night, and it also marked her first time collecting the honor since Friends.\r\nNearly 25 years ago in 1996, Aniston and her Friends costars won the SAG Award f… [+1684 chars]"
    },
    {
      id: 18,
      createdByMe: false,
      source: {
        id: null,
        name: "Investing.com"
      },
      author: null,
      title:
        "Asia shares camp on high ground, oil jumps on Libya shutdown - Investing.com",
      description:
        "Feel good factor keeps world stocks near record highs, oil jumps",
      url:
        "https://www.investing.com/news/stock-market-news/asia-shares-camp-on-high-ground-oil-jumps-on-libya-shutdown-2062879",
      urlToImage:
        "https://i-invdn-com.akamaized.net/trkd-images/LYNXMPEG0J0P0_L.jpg",
      publishedAt: "2020-01-20T02:43:00Z",
      content:
        "By Dhara Ranasinghe\r\nLONDON (Reuters) - World stocks held near record highs on Monday as generally better data and earnings bolstered sentiment, while oil prices hit their highest in over a week after two large crude production bases in Libya began shutting d… [+3316 chars]"
    },
    {
      id: 19,
      createdByMe: false,
      source: {
        id: "nfl-news",
        name: "NFL News"
      },
      author: "Nick Shook",
      title: "49ers trounce Packers on way to Super Bowl - NFL.com",
      description:
        "The San Francisco 49ers ran out to a 27-point halftime lead and left the Green Bay Packers behind for a resounding 37-20 NFC Championship Game win on Sunday en route to Super Bowl LIV.",
      url:
        "http://www.nfl.com/news/story/0ap3000001097948/article/49ers-trounce-packers-en-route-to-super-bowl-liv",
      urlToImage:
        "http://static.nfl.com/static/content/public/photo/2020/01/19/0ap3000001097973_thumbnail_200_150.jpg",
      publishedAt: "2020-01-20T02:43:00Z",
      content:
        "With four wins just a season ago, the 49ers' terrific turnaround campaign took a monumental step on Sunday evening. Behind a smothering defense and an explosive offensive performance from running back Raheem Mostert, the San Francisco 49ers sprinted out to an… [+6985 chars]"
    },
    {
      id: 20,
      createdByMe: false,
      source: {
        id: null,
        name: "Youtube.com"
      },
      author: null,
      title:
        "Patrick Mahomes Post Game Press Conference: AFC Championship | CBS Sports HQ - CBS Sports",
      description:
        "Patrick Mahomes addresses the media after defeating the Tennessee Titans to lift Kansas City to its first Super Bowl appearance since 1969. SUBSCRIBE TO OUR ...",
      url: "https://www.youtube.com/watch?v=ZA76Ah0xJJs",
      urlToImage: "https://i.ytimg.com/vi/ZA76Ah0xJJs/maxresdefault.jpg",
      publishedAt: "2020-01-20T02:27:24Z",
      content:
        "Patrick Mahomes addresses the media after defeating the Tennessee Titans to lift Kansas City to its first Super Bowl appearance since 1969.\r\nSUBSCRIBE TO OUR CHANNEL:https://www.youtube.com/user/CBSSports\r\nFOLLOW US ON:Facebook - https://www.facebook.com/CBSS… [+92 chars]"
    }
  ];
  amount = 5;
  current = 0;
  constructor() {}

  @Output() onClick = new EventEmitter<NewsModel[]>();

  ngOnInit() {
    this.onClick.emit(this.getArticles());
  }

  getArticles() {
    var articles = this.allArticles.slice(
      this.current,
      this.current + this.amount
    );
    this.current += this.amount;

    console.log(this.current);
    console.log(articles);
    return articles;
  }
}
