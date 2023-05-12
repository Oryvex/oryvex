const searchlist = {
  se: {
    desc: "Search Engine",
    items: {
      Google: "https://google.com/search?q=",
      Bing: "https://www.bing.com/search?q=",
      Yahoo: "https://search.yahoo.com/search?p=",
      DuckDuckGo: "https://duckduckgo.com/?q=",
      YouDotCom: "https://you.com/search?q=",
      Brave: "https://search.brave.com/search?q=",
      Youtube: "https://www.youtube.com/results?search_query=",
      Maps: "https://www.google.com/maps/search/",
    },
    fa: "fa fa-search"
  },
  wb: {
    desc: "Web Browsing",
    items: {
      Open: "https://oryvex.in/goto/?url=",
      Similar: "https://www.similarsites.com/site/",
      Pagespeed: "https://developers.google.com/speed/pagespeed/insights/?url=",
      GoogleDomain: "https://domains.google.com/registrar/search?searchTerm=",
      GoDaddy: "https://godaddy.com/domainsearch/find?domainToCheck=",
      DownForMe: "https://downforeveryoneorjustme.com/",
    },
    fa: "uil uil-globe"
  },
  ed: {
    desc: "Education",
    items: {
      Github: "https://github.com/search?q=",
      Wikipedia: "https://en.wikipedia.org/wiki/",
      Replit: "https://replit.com/search?query=",
      Coursera: "https://www.coursera.org/search?query=",
      Udemy: "https://www.udemy.com/courses/search/?q=",
      KhanAcademy: "https://www.khanacademy.org/search?page_search_query=",
      edX: "https://www.edx.org/search?q=",
      Codecademy: "https://www.codecademy.com/search?query=",
    },
    fa: "fa fa-book"
  },
  sc: {
    desc: "Shopping",
    items: {
      Amazon: "https://www.amazon.com/s?field-keywords=",
      Flipkart: "https://www.flipkart.com/search?q=",
      Chroma: "https://www.croma.com/search/?text=",
      eBay: "https://www.ebay.com/sch/i.html?_nkw=",
      Walmart: "https://www.walmart.com/search/?query=",
      BestBuy: "https://www.bestbuy.com/site/searchpage.jsp?st=",
      Target: "https://www.target.com/s?searchTerm=",
      Etsy: "https://www.etsy.com/search?q=",
    },
    fa: "fa fa-shopping-cart"
  },
  fd: {
    desc: "Food Service",
    items: {
      Swiggy: "https://www.swiggy.com/search?query=",
      UberEats: "https://www.ubereats.com/search?diningMode=DELIVERY&q=",
      Grubhub: "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&queryText=chicken",
      AmazonFresh: "https://www.amazon.in/s?i=nowstore&k=",
      BigBasket: "https://www.bigbasket.com/ps/?q=",
      NaturesBasket: "https://www.naturesbasket.co.in/Online-grocery-shopping/",
      BlinkIt: "https://blinkit.com/s/?q=",
      DMartReady: "https://www.dmart.in/searchResult?searchTerm=",
      
    },
    fa: "fa fa-cutlery"
  },
  et: {
    desc: "Entertainment",
    items: {
      PrimeVideo: "https://www.primevideo.com/search/ref=atv_nb_sug?ie=UTF8&phrase=",
      YouTube: "https://www.youtube.com/results?search_query=",
      AppleTV: "https://tv.apple.com/search?term=",
      MxPlayer: "https://www.mxplayer.in/?search=true&q=",
      Zee5: "https://www.zee5.com/search?q=",
      ErosNow: "https://erosnow.com/search?q=",
      ViMoviesAndTv: "https://moviesandtv.myvi.in/Searchresults?query=",
      AirtelXtreme: "https://www.airtelxstream.in/search/spiderman?q=",
      JioSaavan : "https://www.jiosaavn.com/search/song/",
      Spotify: "https://open.spotify.com/search/",
      Gaana: "https://gaana.com/search/",
      AppleMusic: "https://music.apple.com/us/search?term=",
    },
    fa: "fa fa-film"
  },
  sm: {
    desc: "Social Media",
    items: {
      Facebook: "https://www.facebook.com/",
      Instagram: "https://www.instagram.com/",
      Twitter: "https://twitter.com/",
      LinkedIn: "https://www.linkedin.com/",
      YouTube: "https://www.youtube.com/",
      Pinterest: "https://www.pinterest.com/",
      Snapchat: "https://www.snapchat.com/",
      TikTok: "https://www.tiktok.com/",
      Reddit: "https://www.reddit.com/",
      Tumblr: "https://www.tumblr.com/",
      Weibo: "https://www.weibo.com/",
      VKontakte: "https://vk.com/",
      Line: "https://line.me/",
      WhatsApp: "https://www.whatsapp.com/",
      Telegram: "https://telegram.org/",
      Signal: "https://signal.org/",
    },
    fa: "fa fa-share-alt"
  },
  tv: {
    desc: "Travel & Booking",
    items: {
      OlaCabs: "https://www.olacabs.com",
      Uber: "https://www.uber.com",
      Expedia: "https://www.expedia.com/",
      Booking: "https://www.booking.com/",
      Airbnb: "https://www.airbnb.com/",
      TripAdvisor: "https://www.tripadvisor.com/",
      Kayak: "https://www.kayak.com/",
      Orbitz: "https://www.orbitz.com/",
      Hotels: "https://www.hotels.com/",
      Agoda: "https://www.agoda.com/",
      Skyscanner: "https://www.skyscanner.com/",
      Travelocity: "https://www.travelocity.com/",
      Priceline: "https://www.priceline.com/",
      GoogleFlights: "https://www.google.com/flights/",
      Hopper: "https://www.hopper.com/",
      RentalCars: "https://www.rentalcars.com/",
      Viator: "https://www.viator.com/",
      Rome2rio: "https://www.rome2rio.com/",
    },
    fa: "fa fa-plane"
  },
  bk: {
    desc: "Banking",
    items: {
      Chase: "https://www.chase.com/",
      BankOfAmerica: "https://www.bankofamerica.com/",
      WellsFargo: "https://www.wellsfargo.com/",
      Citibank: "https://online.citi.com/",
      JPMorgan: "https://www.jpmorgan.com/",
      GoldmanSachs: "https://www.gs.com/",
      MorganStanley: "https://www.morganstanley.com/",
      UBS: "https://www.ubs.com/",
      DeutscheBank: "https://www.db.com/",
      Barclays: "https://www.barclays.com/",
      CreditSuisse: "https://www.credit-suisse.com/",
      HSBC: "https://www.hsbc.com/",
      StandardChartered: "https://www.sc.com/",
      BNPParibas: "https://group.bnpparibas/en/",
      Santander: "https://www.santander.com/",
      BBVA: "https://www.bbva.com/",
      StateBankOfIndia: "https://www.onlinesbi.com/",
      HDFCBank: "https://www.hdfcbank.com/",
      ICICIBank: "https://www.icicibank.com/",
      AxisBank: "https://www.axisbank.com/",
      KotakMahindraBank: "https://www.kotak.com/",
      PunjabNationalBank: "https://www.pnbindia.in/",
      CanaraBank: "https://www.canarabank.in/",
      BankOfBaroda: "https://www.bankofbaroda.in/",
      UnionBankOfIndia: "https://www.unionbankofindia.co.in/"
    },
    fa: "fa fa-university"
  }
}

const others = ["se", "wb", "ed", "sc", "fd", "et"]
