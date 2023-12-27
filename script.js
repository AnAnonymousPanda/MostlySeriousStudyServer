var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var coll = document.getElementsByClassName("collapsibleTwo");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


var coll = document.getElementsByClassName("collapsibleThree");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


//quotes
const generateQuote = function() {
    const quotes = [
    {
        quote: "I'll have to throw you out the window.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Trust me, I know the difference between a wound and a kill.",
        author: " - Mr. Schilp"
    },
    {
        quote: "So close your mouth, suck up the drool, and be excited!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I CAN'T INCREASE THE NUMBER OF PEOPLE PEEING!",
        author: " - Mr. Schilp"
    },
    {
        quote: "You peed on the cashier? \"Sir, put that away! You cannot pay for your transaction this way!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "We have a word to describe them. It's a synonym for 7 days.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Get in the bean water. I need to drink you now.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Let's do some Spontaneous Question Asking!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Shout at me boy!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Grant, you have 13 minutes left. Everyone else, you have 15 minutes.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Glowing churros. Mmmm yeeah.",
        author: " - Mr. Schilp"
    },
    {
        quote: "The hips of a belly dancer. They undulate. They speak to me.",
        author: " - Mr. Schilp"
    },
    {
        quote: "One might say \"circulating\".  Perhaps in a \"system\".",
        author: " - Mr. Schilp"
    },
    {
        quote: "THIS IS WHY I WORE MY TIE!! SO I CAN HANG MYSELF AFTER THIS CLASS!!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m just making sure that your brains are working. Spoiler alert: They aren’t.",
        author: " - Mr. Schilp"
    },
    {
        quote: "You were looking out the window wondering if those two floors are high enough.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Sweet mother of Jesus!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Oh I have OODLES of time!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Terrence, stop being a toolbox!",
        author: " - Mr. Schilp"
    },
    {
        quote: "*Strikes a yoga pose*  BALANCED, TERRENCE, BALANCED!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "The orange guys don’t give two mouse farts about what the purple guys are doing!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Nobody wants a floppy cucumber!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Have you met Neel, the big cucumber guy?",
        author: " - Mr. Schilp"
    },
    {
        quote: "What’s gonna poke out your eyes? My fingers!! I do goggle checks often.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Ben you don’t have to be nude it’s just a bust.\" \"You want to see a bust?\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Whenever possible, ignore things. That’s how I deal with Neel.",
        author: " - Mr. Schilp"
    },
    {
        quote: "What the hell else am I supposed to do? Snort it?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Well, that was a crap-tastic answer!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Jackwagons.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"What does this thing do?\" \"It makes toast\" \"We’ll call it a toaster\" \"You’re a genius!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "I find these bastards all over the place! I'm like, \"Mother fu- where did you come from?!?\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Gotcha, bitch!",
        author: " - Mr. Schilp"
    },
    {
        quote: "What did I tell you to do, dingbat?!?",
        author: " - Mr. Schilp"
    },
    {
        quote: "I need a bigger ass picture. There’s my bigger ass picture!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I will hurt you. Not physically, but emotionally.",
        author: " - Mr. Schilp"
    },
    {
        quote: "You can actually lean into a tree and hear the xylem suck the water up the roots; then you realize it's just you sucking at life.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Electrons, like small children, cannot be left unattended",
        author: " - Mr. Schilp"
    },
    {
        quote: "I'm like the opposite of Advil; I give you a headache.",
        author: " - Mr. Schilp"
    },
    {
        quote: "You know how I feel about the Middle School. They're the ball pit at McDonald’s. I don’t know what they do down there.",
        author: " - Mr. Schilp"
    },
    {
        quote: "There’s one freshman trying to get into the stairwell, and I’m like, \"that’s the roof access\", and he’s like, \"I know, I just wanna jump!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"My initials are F, so imma make my profile a big F!\" Oh, great! You’re just telling everyone your grades.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"That thing that starts with a C.\" Grant’s talking about his grades again.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Don’t die in my class. I’ll have to do paperwork, and I don’t like doing paperwork.",
        author: " - Mr. Schilp"
    },
    {
        quote: "*Student speaks really fast* What was that? Are you speaking in parseltongue? *Attempts to speak parseltongue* Are we trying to open the chamber of secrets?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Hmm, I’m not sure how pee would taste like. Maybe like apple juice?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Look at this picture and don’t tell me it doesn’t kinda look like boobs.",
        author: " - Mr. Schilp"
    },
    {
        quote: "The pictures on the test are gonna be like pandas. Black, white, and fuzzy.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Manila folders. They’re like the scalpel of office supplies.",
        author: " - Mr. Schilp"
    },
    {
        quote: "It’s fine, we’ll just wait for Neel to pull his shit together.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Protein phosphatases, also called PP’s. *Students starts giggling* See, Neel’s laughing since he’s small and immature.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Just know that you’re wrong, and sit there in your wrongness.",
        author: " - Mr. Schilp"
    },
    {
        quote: "There’s no way that’s a forehead. That’s a fivehead at least. Look at the size of that noggin!",
        author: " - Mr. Schilp"
    },
    {
        quote: "NOT HIS URINE, YOU IDIOT!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I can see PP, I need to know what size!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Big H big H big T big T, big H big H big T little T, big H little H big T big T, big H little H big T little T, big H big H big T little T, big H big H little T little T, big H little H big T little T, big H little H little T little T, big H little H big T big T, big H little H big T little T, little H little H big T big T, little H little H big T little T...",
        author: " - Mr. Schilp"
    },
    {
        quote: "*Locks door and pulls down the blinds when Neel forgets that it’s lab day*",
        author: " - Mr. Schilp"
    },
    {
        quote: "This is not rocket scie— well, it's rocket science for some of you.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’ve never stabbed myself in the eye with a marker, but there’s a first time for everything.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Dad made him a man. Mom made him colorblind.",
        author: " - Mr. Schilp"
    },
    {
        quote: "You know how I feel about test day! Test day's the best day!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Shit’s getting done when it's getting done.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Some kid walked into my class and asked, \"Is this the Asian Club?\" and I was like, \"Nope, just AP Bio.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Keigo, FYI— next time we have a pop quiz, everyone will know it was your fault. I’ll even call it a K-pop quiz!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Stop shouting numbers at me goddammit!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Do not use toaster in bathtub.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "If you die when if your toaster falls into your bathtub, that’s probably just natural selection just cleaning up the gene pool.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Two forks makes a bubble.",
        author: " - Mr. Schilp"
    },
    {
        quote: "This is why you invite your group members to your funeral, since they’ll let you down one last time.",
        author: " - Mr. Schilp"
    },
    {
        quote: "It’s like working on a group project with a bunch of sophomores! They’re a bunch of idiots!",
        author: " - Mr. Schilp"
    },
    {
        quote: "The polyadenylation signal, which has the sequence AAUAAA, pronounced aAAaAaAAUUuUUGgHHh",
        author: " - Mr. Schilp"
    },
    {
        quote: "Small Nuclear Ribonucleoproteins, called snRNPs. Not to be confused with smurfs. Don’t ask me why, it was like this when I got here.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Pragun, what have I told you about flirting with Tanush during my class? NO FLIRTING!!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "You forgot your phone. And your pants.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m a negative reinforcement type of guy.",
        author: " - Neel"
    },
    {
        quote: "\"Could I order a single page of the Bio textbook?\" \"Why would you need to do that?\" \"...Just in case I ripped out a page of the textbook...?\"",
        author: " - Grant"
    },
    {
        quote: "If looks could kill, I wouldn’t be here. I enter the room where they're taking the midterm, and everyone turns their head to glare at me like, \"Get out of here. Move onto the next classroom.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "He has reconsidered. Right after hearing Casey whisper the answer to him.",
        author: " - Mr. Schilp"
    },
    {
        quote: "You laugh, but within the next 10 minutes, someone is going to ask some stupid-ass question and the answer is prokaryotes.",
        author: " - Mr. Schilp"
    },
    {
        quote: "UAA! UAG! UGA! OOGA BOOGA!",
        author: " - Mr. Schilp"
    },
    {
        quote: "You guys need to get more sleep; it’s really starting to show. You guys look like you’re getting ready to audition for the Walking Dead. \"Hey! I like your makeup!\" \"It’s not makeup, this is my face.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "You’re very enthusiastic with that scalpel. You get scissors for now on.",
        author: " - Mr. Schilp"
    },
    {
        quote: "That’s CAP. \"It’s fake?\" No! Catabolite Activator Protein!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Maybe we should have an 8 day test! For each day of Hanukkah!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I don’t know if you guys know this, but I have a third nipple. It’ll bring diversity to your campus.",
        author: " - Mr. Schilp"
    },
    {
        quote: "They're tagged with a protein called ubiquitin. Not you-be-quitin’. People are like, \"even the textbook is telling me to quit!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Could you do this on a test? It’ll be harder because it’ll be in black and white. Don’t worry, I’ll add a key. That’ll also be in black and white.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Is this Scrödinger’s glowing monkey?",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"My parents are hitting me and not feeding me!\" \"And that’s my problem how?\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"I know you can donate blood, but can you donate breast milk?\" \"Uhh, yes you can. Why would you want do that??\" \"Artisanal cheeses.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "A little screwing with you is fun, but a lot of screwing is just annoying.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I want you to get the tears out when it doesn’t count. When it actually does count, I don’t want sobbing, but more just sniffling.",
        author: " - Mr. Schilp"
    },
    {
        quote: "It’s like Frank’s Red Hot Sauce. I put that shit on everything.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"We looked up buying a chimpanzee, and it's only like 50,000 dollars. It would be so fun to teach it stuff!\" \"Ohoho, I do that every day.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Their slogan is: \"Touched by His noodly appendage\". Out of context, that could sound really bad.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I just wanted to know if knucklehead over here knew what was going on.",
        author: " - Mr. Schilp"
    },
    {
        quote: "My favorite headline is that \"50-60% of human DNA is identical to a banana\", which suggests the fact that some people are 10% more banana than other humans.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Your child has hit rock bottom and begun to dig.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Aaron cracks me up because he’s the most clueless kid I’ve ever met. And I teach you guys.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m sorry, did you just say that \"I don’t need conditioner\"? Because your hair says otherwise.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Look at your hair. It has no shape, it has no body, it has no volume.\" (Neel): \"At least I’m not the one with the receding hairline\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Just wait. Time will catch up to you. It catches all of us. Karma’s a bitch. Just you wait.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"I’m a jedi. I can look into your soul and see what you’re missing.\" *Looks at Grant* \"Not hard with you. You’re missing just about everything.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "You live a very sheltered life, Edward.",
        author: " - Mr. Schilp"
    },
    {
        quote: "The big toe does most of the balancing. The pinkie toe does most of the finding furniture in the middle of the night.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Listen, you never know when you need an eyepatch!",
        author: " - Mr. Schilp"
    },
    {
        quote: "By the way, HIV virus is redundant. Like ATM machine.",
        author: " - Mr. Schilp"
    },
    {
        quote: "When people die of AIDS, they don’t die from AIDS. They die from anything else that isn’t AIDS.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Really?? First you infect all my cells, and now you turn into cancer?? You dick!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Dammit, we really have to stop making out with other species! Stop kissing chimpanzees!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "By the way, just so we’re on the same page, cannibalism is frowned upon at this establishment.",
        author: " - Mr. Schilp"
    },
    {
        quote: "*when discussing dissections* The best phrase I heard was, \"would you like light meat, or dark?\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Every year. Every year. There is always one person that is willing to eat other people.",
        author: " - Mr. Schilp"
    },
    {
        quote: "...Aaand we’ve circled back to cannibalism.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Not as my first line of defense. But if push comes to shove, I will tie a bunch of you together and form a raft. This is one of those things where if you disappear in the middle of the night, no one knows how, no one knows why...",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Don’t come for me, because I’ll come for you first.\" \"Well you can’t come for me if I’ve already come for you.\" \"That’s not how it works!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "There’s no crying in AP Bio. ...Well, let me take that back.",
        author: " - Mr. Schilp"
    },
    {
        quote: "What was that? I couldn't hear you over the sound of WHINING!",
        author: " - Mr. Schilp"
    },
    {
        quote: "It’s allergies! I’m allergic to failure!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Don’t breathe in elevators!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"If you don’t know what’s going on, 19 people in the class do.\" (looks at Nathan) \"18.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Touch the chicken and wash my hands. Move the chicken with a fork and wash my hands. Spill chicken juice on the floor, and leave the house and burn it down.",
        author: " - Mr. Schilp"
    },
    {
        quote: "*In a Frenchish accent* \"Would you like to join me for a dance with no pants?\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Grant, we are not talking about the dance with no pants! I know where your head was!",
        author: " - Mr. Schilp"
    },
    {
        quote: "That wasn’t even left field, that was a whole other stadium!",
        author: " - Mr. Schilp"
    },
    {
        quote: "It’s just tree sperm, relax!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I don’t know how I got myself to the front of the class, when I was always in the back horsing around. Much like Neel.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Neel, you remind me of a young me.\" (Neel): \"....I guess I should change my pace\" \"...I meant that as a compliment.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Now that’s a good nickname! \"Slightly ominous jazz music\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "He (Brendan) practices mischief like Tanush practices coding!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I'm the biggest nerd here. I'm the king of nerds and you guys are my little nerdlings. This is my nerdery where I grow you guys into full-fledged nerds.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Did you just say, \"Yo, Catch!\"?!?!",
        author: " - Mr. Schilp"
    },
    {
        quote: "It’s nice to see some of you working hard. Others of you are hardly working.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Wait. Did you just say biology fanfiction? And my name?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Wow. I could actually hear your brain stop working! *Chk* File not found, try again.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m gonna have to tackle this bastard.",
        author: " - Mr. Schilp"
    },
    {
        quote: "You guys are gonna be at the top of the food chain. You’re gonna eat other AP Bio students. ...Metaphorically, of course.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Test day is the best day!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Don’t get tetanus. It can cause lockjaw, where you can’t open your mouth. ...you know what, some of you should probably get tetanus.",
        author: " - Mr. Schilp"
    },
    {
        quote: "(To Keigo) I’m coming back for you, baby.",
        author: " - Mr. Schilp"
    },
    {
        quote: "*profuse giggling at the documentary narration*",
        author: " - Mr. Schilp"
    },
    {
        quote: "DO YOU THINK THE FEMALE BODY IS A BEVERAGE DISPENSER????",
        author: " - Mr. Schilp"
    },
    {
        quote: "(Charli): \"Wow. They sound like huge nerds.\" \"People in glass houses. Should not throw stones.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "You should thank the guy who invented window screens because I can’t easily throw you out the window.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Don’t take drugs kids. Drugs are bad.\" \"Are you speaking from experience?\" (Pause) \"...Noo...\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "We’re all broken on the inside. Some of us on the outside too.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Fossil dating! Now, I understand some of you might not know what [points at the word \"dating\"] this word is.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m gonna need some water and possibly a smack in the head.",
        author: " - Mr. Schilp"
    },
    {
        quote: "They would’ve kicked our ass six ways to Sunday.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Humans. We can’t beat ‘em, so let’s just bang em.",
        author: " - Mr. Schilp"
    },
    {
        quote: "By the way, Barnacles— largest penises in the animal kingdom. Eight times their body size.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Weregoingbacktotheoceanscrewyouguyswereout",
        author: " - Mr. Schilp"
    },
    {
        quote: "TAKE ME HOME! I HAVE BROKEN MY ASS!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I apologize to any vegetarians in here. You’re missing out.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"You shouldn’t eat the banana skin—\" \"They taste FINE!\"",
        author: " - Charli"
    },
    {
        quote: "I’m not a psychopath!!",
        author: " - Charli"
    },
    {
        quote: "(Charli): \"I literally have no memory of the qualifier.\" \"That’s called PTSD!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "You helped him wipe his butt?!",
        author: " - Mr. Schilp"
    },
    {
        quote: "True or false: you have a calculator holster.",
        author: " - Mr. Schilp"
    },
    {
        quote: "(To Charli) \"Do you have a question, or are you just stretching?\" \"...I could come up with a question.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m not allergic to sophomores. I just have a limit on how much idiocy I can listen to in one day before my brain gets sore.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Do you have questions? Because you were making the Ihavequestions face.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Do you need an ark? Because I Noah guy.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I had to say goodbye to my boiling water. It will be mist.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"What’s gene-ticks?\" \"ITS GENETICS!!!!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "(Nathan): \"Wait, so hypothetically.  If you’re attracted to glasses...\" \"Ed, look out. Zain, beware.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Don't worry, no one is going to check your search history.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Natural selection cannot yield a perfect organism. Just look around the room.",
        author: " - Mr. Schilp"
    },
    {
        quote: "We have small, incompletely done, undercooked babies!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Holy shit people, this isn’t like reading IKEA instructions!! We move it to the goddamn P site!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "The male has a nice mane. The male has nice colored feathers. The male has a nice rack!",
        author: " - Mr. Schilp"
    },
    {
        quote: "(To Terrence): \"We have a lizard that lives in a tree! What will we call him?\" \"Joe.\" \"Tree lizard, thank you for playing.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "I apologize in advance for this image. I normally don’t show boobies in class.",
        author: " - Mr. Schilp"
    },
    {
        quote: "This is the male boobie doing his dance. This is the female, and you can tell that she's enthralled.",
        author: " - Mr. Schilp"
    },
    {
        quote: "There’s a job for everyone, so if you want to become a snail sex guru, GET YOUR RESUME TOGETHER RIGHT NOW!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "HOLD ON, I GOT THIS! WE JUST NEED A DONKEY WITH DOWN SYNDROME!",
        author: " - Mr. Schilp"
    },
    {
        quote: "(The freshmen) \"They were the noisiest little bunch of bastards\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "This is a fairly robust Canyon. Some may even call it Grand.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Ed, unless you pull something out of your butt right now that’s the worst answer I’ve ever heard.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Babies have ENORMOUS noggins! They got GIGANTIC melons!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Neel, you won’t want to miss this lab because we’re mating. Well, not you and I.",
        author: " - Mr. Schilp"
    },
    {
        quote: "(in Italian accent) \"Look at zis guy, peanuts could kill him!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Sophomores my ass",
        author: " - Mr. Schilp"
    },
     {
        quote: "Are you gaslighting me right now?",
        author: " - Mr. Schilp"
    },
     {
        quote: "No, I'd use Wayne as a battering ram.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Isn’t he performing a ritualistic sacrifice today?",
        author: " - Mr. Schilp"
    },
    {
        quote: "We’re going to learn how the brain works. Or for some of you, why it doesn’t.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Polar bears are the bearist bears of them all.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"So, if there was a human with cell walls, would he be a fungi?\" \"I don’t know, but I bet he would be fun at parties.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Insofar as you are an idiot!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Some of you are very gullible. In fact, gullible is not even in the dictionary. It’s a made up word that we just collectively decide to use.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Ed? You coming in for a landing anytime soon?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Fermentation creates alcohol, which creates babies. Trust me, I’ve seen it.",
        author: " - Mr. Schilp"
    },
    {
        quote: "(Thomas): \"Oh YEAH!\" \"Oh YEAH is not the reproduction— it’s what you say during it!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Fixed Action Patterns, also known as FAP. Now, if you don’t know that that means, please do not look it up. Keep it that way.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Neel, what are you doing?\" \"Looking up ‘FAP’\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Vampires! Absolutely! Vampires will exhibit negative phototaxis.",
        author: " - Mr. Schilp"
    },
    {
        quote: "*immensely cringe-worthy rendition of the floss*",
        author: " - Mr. Schilp"
    },
    {
        quote: "And everyone lived happily ever after—NO, that bitch got EATEN!",
        author: " - Mr. Schilp"
    },
    {
        quote: "“Why did Pavlov have such great hair? He conditioned it!",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"But it’s more possible than...\" \"Your dating life? Yes.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"We’re trying to figure out how to access the black market on our school chromebooks.\" \"...you what?!\" \"Nothing!\"",
        author: " - Charli"
    },
    {
        quote: "The swans? Humans have sex with swans?! Please don’t do that! That’s a weird subreddit.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Do that at home... not on the school wi-fi.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Let’s say you ‘pretend’ to have another girlfriend, she goes to another school, that I wouldn’t know her.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m not making fun of you, it's just that you seem to be the guy most likely to get their hands on a mannequin.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I don't know what happening in YOUR gonads",
        author: " - Mr. Schilp"
    },
    {
        quote: "(Grant): \"I was gonna do the [Harry Potter] quiz, but I was too lazy to answer the questions.\" \"Hufflepuff.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "So you’re just sitting next to Keigo waiting for stuff to fall out of his head?",
        author: " - Mr. Schilp"
    },
    {
        quote: "IS THAT A STATE, YOU JACKWAGON?!?!?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Alright, you can’t be the eggplant emoji. No, you can’t be the peach one either.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Why are there no bebés?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Neel, true or false: you’re reading about orangutan porn.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I’m sorry, you want to watch the movie, Cocaine Bear??",
        author: " - Mr. Schilp"
    },
    {
        quote: "Cookie Monster has his eyes on the top of his head. This is key evidence that Cookie Monster is a submerged ambush predator, lurking in the swamps and waiting for your cookies.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Mullerian Mimicry is like wearing gang colors. If it’s black and yellow, you let it mellow.",
        author: " - Mr. Schilp"
    },
    {
        quote: "For the love of all that is good and holy. The arrows point to the thing that’s doing the eating.",
        author: " - Mr. Schilp"
    },
    {
        quote: "What is the difference between top-down and bottom-up models? Not that kind of model, Grant!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Alright! Tops down bottoms up! That’s sounds like my Friday night!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Your spirit animal is a puma, right? Or a cougar. Ed likes the cougars!",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Thomas likes it when his cheeks are clapped.\" (after Samraj slaps Thomas on the cheek)",
        author: " - Mr. Schilp"
    },
    {
        quote: "Gesticulating wildly is part of your personality!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Insane Bastard.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Should we make a topographic map of GPA? We’ll have Mount Fujita over there, and then the Grant Canyon.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I try to avoid all interaction with students outside of school, but sometimes I can’t avoid it. Like I can’t avoid hitting you with my car.",
        author: " - Mr. Schilp"
    },
    {
        quote: "After the AP exam, we can discuss karaoke.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Insane bastard.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Was it in Chapter 55?\" \"No.\" \"Then I don't give a shit about it.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Frog the Rock Johnson.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I have staplers in the back! Take them down, pass them around, Ninety-nine monkeys on the wall!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Clown College, here I come!!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "Listen, my only goal for today is to not stab anyone. That, however, does not exclude using the fisty-cuffs.",
        author: " - Mr. Schilp"
    },
    {
        quote: "The Peripheral Nervous System, also known as the PNS. But you have to say it slowly. \"Can I see your PNS?\" Can be taken differently.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Not everyone talks about their PNS.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I don't think I even have a PNS!",
        author: " - Charli"
    },
    {
        quote: "(Sam): \"My mom has a disease with her Peripheral Nervous System.\" \"Her PNS is broken?\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Outside! That's the place where all the scary things like sunlight and happiness are!",
        author: " - Mr. Schilp"
    },
    {
        quote: "You can have my wallet, and I'll have your soul.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"I meant gray matter, not dark matter— though some of us may have more dark matter than gray matter in our brains.\" (Looks at Aaron)",
        author: " - Mrs. Cocchiaro"
    },
    {
        quote: "If you're looking for an alibi, murderous koala is the way to go.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"Am I chasing a mammoth?!?\" \"No, you’re doing public speaking.\" \"THAT’S WORSE!! BRING ON THE MAMMOTH!!!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Unfortunately, society doesn't care, so get your ass in gear.",
        author: " - Mr. Schilp"
    },
    {
        quote: "ERIC!! HOW ARE WE DOING BACK THERE?? Eric has mastered the ability to keep his eyes open even while he’s sleeping— it’s really quite impressive.",
        author: " - Mr. Schilp"
    },
    {
        quote: "The dark web is a fantastic place.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Don't do anything that would make me remove you from the classroom. Or from the gene pool.",
        author: " - Mr. Schilp"
    },
    {
        quote: "You're not submitting shit.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Tiny is relative.",
        author: " - Neel"
    },
    {
        quote: "(To Eliana) \"GOODMAN!!\" \"...I don't know\" \"BADMAN!!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "You know what else comes from Mexico? Drugs.",
        author: " - Mr. Schilp"
    },
    {
        quote: "The homewrecker fish, yes.",
        author: " - Mr. Schilp"
    },
    {
        quote: "I don't know what's happening in YOUR gonads.",
        author: " - Mr. Schilp"
    },
    {
        quote: "So you're just sitting next to Keigo waiting for stuff to fall out of his head?",
        author: " - Mr. Schilp"
    },
    {
        quote: "(Grant): \"I was gonna do the Harry Potter quiz, but I was too lazy to answer the questions.\" \"Hufflepuff.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Marlin wouldn't give two tiny mose farts about Nemo!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "we're going to learn about the 18 ways to make a baby. And we're gonna go though all the positions.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Look, I'm aware that you need to learn how to start juggling for your future, but let's try and keep it to a minimum in class.",
        author: " - Mr. Schilp"
    },
    {
        quote: "There are several rules of life I live by. One of which is \"Dont' touch the kids\".",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"I don't wanna do work anymore!\" \"Well, I don't want to look at you anymore, but here we are!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Listen! He's talking about monkeys! You might have intimate knowlege about this subject! ...Not that type of intimate knowledge!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "I don't want my name besmirched bacause you guys are all being steaming piles of donkey dung!",
        author: " - Mr. Schilp"
    },
    {
        quote: "What's the difference between synonym and cinnamon? Synonyms are 2 words that mean the same thing, Cinnamon is a stripper's name.",
        author: " - Mr. Schilp"
    },
    {
        quote: "New job opening: Salmon Sperm Sampler!",
        author: " - Mr. Schilp"
    },
    {
        quote: "*clipping toenails during a test*",
        author: " - Mr. Schilp"
    },
    {
        quote: "We'll burn that bridge when we get there.",
        author: " - Mr. Schilp"
    },
    {
        quote: "\"You have friends?\" *shakes Schilp's hand and dabs*",
        author: " - Ethan"
    },
    {
        quote: "\"I want to shoot myself.\" \"No shooting yourself until after the AP Exam!!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "*Singing Instagram reel songs*",
        author: " - Mr. Schilp"
    },
    {
        quote: "NOTHINGGGG!!!!! BECAUSE WHEN I’M GRADING, IT’S LIKE YOUR GHOST OF SUCKTITUDE HAUNTS ME AND I GO AHHHHGHGHGHAHGHHDIHUHDKJGBLKSDFB!!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "What trolley problem? Choo choo motherf-",
        author: " - Mr. Schilp"
    },
    {
        quote: "You. Are. My. Repressor Protein.",
        author: " - Mr. Schilp"
    },
    {
        quote: "*fucking loses his shit laughing his ass off at the Caillou theme song*",
        author: " - Mr. Schilp"
    },
    {
        quote: "(Gavin): \"Can I donate my points on the test?\" \"...The problem is, you don't have enough.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Ah, yes, that was the night I took an IQ test and was very disappointed when I found out that 100 was not a perfect score.",
        author: " - Mr. Schilp"
    },
    {
        quote: "$10 is 10 dollars.",
        author: " - Mr. Schilp"
    },
    {
        quote: "It's like social security, but with rizz.",
        author: " - Mr. Schilp"
    },
    {
        quote: "Just keep doing what you've been doing, Grant. Riding coattails.",
        author: " - Mr. Schilp"
    },
    {
        quote: "(To Mr. Schilp): How may babies can you curl?",
        author: " - Sameer"
    },
    {
        quote: "Coackroach milk?!?",
        author: " - Mr. Schilp"
    },
    {
        quote: "(At textbook collection)\"NEEL!\" \"Wait, I need a moment alone with my textbook\" \"...NEEL, I WILL BE CHARGING YOU FOR PAGES THAT ARE STUCK TOGETHER!!!\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "Ed, are you a Disney princess?",
        author: " - Mr. Schilp"
    },
    {
        quote: "Yayyy I'm rooting for a snail to get laid!! This is weird!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "If you break my depression slides... I'll give you depression.",
        author: " - Mr. Schilp"
    },
    {
        quote: "So we took them over, and made them our sex slaves... yayyy",
        author: " - Mr. Schilp"
    },
    {
        quote: "You dance bollywood?!?",
        author: " - Mr. Schilp"
    },
    {
        quote: "PUT THE FRISBEE DOWN!!!",
        author: " - Mr. Schilp"
    },
    {
        quote: "(To Ethan): \"You remind me of me. Except you're more annoying. And not as good looking.\"",
        author: " - Mr. Schilp"
    },
    {
        quote: "This is a traditional Thai child beating stick.",
        author: " - Mr. Schilp"
    },
    {
        quote: "SHIT! Oh wait- uh I mean uh- ...fecal matter.",
        author: " - Sameer"
    },
    {
        quote: "Now I wanna bust out the Novocaine and try it myself!",
        author: " - Charli"
    },
    {
        quote: "JOHN HOOOOOOOSSS!!!",
        author: " - Mr. Grauer"
    },
    {
        quote: "Papas Fritas.",
        author: " - Grantissimo"
    },
    {
        quote: "\"Homiesexual\"",
        author: " - The Terrence"
    },
    {
        quote: "Suck my sweet, sugary balls.",
        author: " - The Terrence"
    },
    {
        quote: "Wait, isn't 15 and 18 legal?",
        author: " - Grantissimo"
    },
    {
        quote: "(Sub): \"My son's name is Tim.\" \"Mine too!\"",
        author: " - Grantissimo"
    },
    {
        quote: "\"Her mom died\" \"Aw... That's so sad.\" \"So Mr. Lipskar is conducting the rehersal\" \"LETS GOOOOOOOO!!!!!\"",
        author: " - Sameer"
    },
    {
        quote: "\"Her mom died\" \"LETS GOOOOOOOOO!!!!!!\" \"So Mr. Lispkar is conducting the rehersal\" \"Aw man...\"",
        author: " - Theo"
    },
    {
        quote: "y-yamete kudasaii...",
        author: " - Sameer"
    },
    {
        quote: "y-yamete kudasaii...",
        author: " - Sarvajit"
    },
    {
        quote: "I'm so respectful that when women wear bikinis, I only look at the covered parts.",
        author: " - Arya"
    },
    {
        quote: "¡Papas Fritas!",
        author: " - Sra. Vazquez"
    },
    {
        quote: "\"¿Tú me quieres?\" Of course I love you!",
        author: " - Sra. Vazquez"
    },
    {
        quote: "¡Mis cabecitos de coco y mis corazones de melón!",
        author: " - Sra. Vazquez"
    },
    {
        quote: "*aggressively approaches Cooper with a weapon in hand*",
        author: " - Sra. Vazquez"
    },
    {
        quote: "*pulls out scissors the size of a dagger*",
        author: " - Sra. Vazquez"
    },
    {
        quote: "*pulls out a hammer in the middle of class*",
        author: " - Sra. Vazquez"
    },
    {
        quote: "*randomly locks the door and pulls down the blinds*",
        author: " - Sra. Vazquez"
    },
    {
        quote: "¿¡Qué Qué!?",
        author: " - Sra. Vazquez"
    },
    {
        quote: "(Talking to the smartboard) ¿José? ¿Estás aquí?",
        author: " - Sra. Vazquez"
    },
    {
        quote: "\"Fewer bucks being charged to get into fairs.\"",
        author: " - PSAT"
    },
    {
        quote: "\"Decreased fiscal outlay for fair ingress.\"",
        author: " - PSAT"
    },
    {
        quote: "Anything goes in CPB.",
        author: " - Mrs. Murduca"
    },
    {
        quote: "(Brendan): \"If I drink two 5-hour energies, do I have energy for ten hours, or do I have double the energy for five hours?\"  \"Brendan, you are the last person who should be drinking 5-hour energy.\"",
        author: " - Mrs. Murduca"
    },
    {
        quote: "(Brus): \"M as in Mary, or N as in Nancy?\" \"M as in your Mom\"",
        author: " - Charli"
    },
    {
        quote: "Sus as the kids say. Mad sus.",
        author: " - Mr. Brus"
    },
    {
        quote: "Children are the worst. Children are the absolute worst.",
        author: " - Mr. Brus"
    },
    {
        quote: "It’s pretty dope. Do kids still say that anymore? Dope?",
        author: " - Mr. Brus"
    },
    {
        quote: "In some ways, I think the Jews have it better on Christmas. Chinese food. Movies. Nothing’s sadder than 6pm on Christmas. Everything fun happens in the morning.",
        author: " - Mr. Brus"
    },
    {
        quote: "Like Microsoft founding a colony.",
        author: " - Mr. Brus"
    },
    {
        quote: "Was that a burn? Do kids still call that a burn?",
        author: " - Mr. Brus"
    },
    {
        quote: "You know it’s a good day when someone uses the word hoodwinked.",
        author: " - Mr. Brus"
    },
    {
        quote: "\"Alright… 2 minutes left in the period, how about we do more notes?\" \"Nahhh, it's a Friday.\" \"Who do you think you are, Rebbecca Black?!\"",
        author: " - Mr. Brus"
    },
    {
        quote: "*Closes the window* \"I want to keep the Covid in!\"",
        author: " - Mr. Brus"
    },
    {
        quote: "He’s what I like to call the Big Daddy.",
        author: " - Mr. Brus"
    },
    {
        quote: "\"Our rights!\" \"Fox news! Okay, but more specific.\" \"Our right to bear arms!!\" \"Even more Fox news!\"",
        author: " - Mr. Brus"
    },
    {
        quote: "Sounds dope? Fire. Slay. Cap or no cap? (no response)",
        author: " - Mr. Brus"
    },
    {
        quote: "Throw the bums out!",
        author: " - Mr. Brus"
    },
    {
        quote: "Rowdy dudes? That’s the King’s English.",
        author: " - Mr. Brus"
    },
    {
        quote: "Clap back? What does that mean? I learn so much in this class.",
        author: " - Mr. Brus"
    },
    {
        quote: "Wouldn’t it be fire if they could get a dub like that?",
        author: " - Mr. Brus"
    },
    {
        quote: "What makes the Patriot movement sus, and not worth a dub, as the kids say.",
        author: " - Mr. Brus"
    },
    {
        quote: "What’s a dub? Tell a Gen X what a dub is.",
        author: " - Mr. Brus"
    },
    {
        quote: "Fire. Dope. Slay. Lit. Straight up facts. He's clapping back.",
        author: " - Mr. Brus"
    },
    {
        quote: "How's Congress gonna pay for that? A part-time job at Mickey D.’s? Jefferson’s flipping burgers?",
        author: " - Mr. Brus"
    },
    {
        quote: "A big dub, no doubt. Slay.",
        author: " - Mr. Brus"
    },
    {
        quote: "I like to say it’s the most beautiful middle finger ever given.",
        author: " - Mr. Brus"
    },
    {
        quote: "We got a fun noose hanging in the background there.",
        author: " - Mr. Brus"
    },
    {
        quote: "Who’s the boss on the farm? The farmer’s wife. Wise up, boys.",
        author: " - Mr. Brus"
    },
    {
        quote: "Ooh, 5 days behind! Schnikeys, we gotta cook!",
        author: " - Mr. Brus"
    },
    {
        quote: "Now we're cooking with gas!",
        author: " - Mr. Brus"
    },
    {
        quote: "Oops! My bad. *clicks off a super detailed map with certain houses highlighted* That was me stalking superintendent candidates.",
        author: " - Mr. Brus"
    },
    {
        quote: "The president must be 35 years old. So in a few years, I could run for president!",
        author: " - Mr. Brus"
    },
    {
        quote: "This is muy importante, as the French say.",
        author: " - Mr. Brus"
    },
    {
        quote: "Absolutely not, there is no going back! What do you think this is, History?",
        author: " - Mr. Brus"
    },
    {
        quote: "Let's say Vermont wanted to form the Socialist People’s Republic of Vermont under their tyrant, Bernard Sanders.",
        author: " - Mr. Brus"
    },
    {
        quote: "We are a nation of laws, not of men. And woe-men. ",
        author: " - Mr. Brus"
    },
    {
        quote: "I love elastic this time of year. I’m eating Christmas cookies and getting fatter by the minute.",
        author: " - Mr. Brus"
    },
    {
        quote: "No extra drugs today!",
        author: " - Mr. Brus"
    },
    {
        quote: "It’s snotty, isn’t it?!",
        author: " - Mr. Brus"
    },
    {
        quote: "Such wonderful students. Such a blessing to teach at Millburn... Jk",
        author: " - Mr. Brus"
    },
    {
        quote: "Look, you’re wearing a Michigan hoodie. Do you have the right to be a fan of losing football teams?— I guess. But it's not stated in the Constitution.",
        author: " - Mr. Brus"
    },
    {
        quote: "\"Big day for J bizness!\" \"Who’s J bizness?\" \"That’s me. It’s my rap name.\"",
        author: " - Mr. Brus"
    },
    {
        quote: "You know what my rap name would be if I was from Chicago? il’ Noize.",
        author: " - Mr. Brus"
    },
    {
        quote: "I like to use the Church of Brusism as an example. Where we perform human sacrifice in honor of me.",
        author: " - Mr. Brus"
    },
    {
        quote: "Sabotage!! They might let their baguettes grow stale, and start hitting people over the head with them!",
        author: " - Mr. Brus"
    },
    {
        quote: "What’s another one? Rizz? I heard that from Mr. Barry. He’s down with the Gen Z slang.",
        author: " - Mr. Brus"
    },
    {
        quote: "Who’s \"Him\"? Like Jesus or something?",
        author: " - Mr. Brus"
    },
    {
        quote: "I hate you with a burning passion.",
        author: " - Mr. Brus"
    },
    {
        quote: "*doing some sick kung fu tai chi moves in the middle of class*",
        author: " - Mr. Brus"
    },
    {
        quote: "He liked science, god knows why. Nobody’s perfect.",
        author: " - Mr. Brus"
    },
    {
        quote: "In the summer, I don’t wear shoes. I’m a hippie like that.",
        author: " - Mr. Brus"
    },
    {
        quote: "I wish my name was Timothy Pickles.",
        author: " - Mr. Brus"
    },
    {
        quote: "The Yazoo Land Company— The best company name in American history.",
        author: " - Mr. Brus"
    },
    {
        quote: "Hopefully I won’t see you guys tomorrow. Snow day calculator 37 percent.",
        author: " - Mr. Brus"
    },
    {
        quote: "We work, and we buy crap we don’t need. Why? Because that’s the American Dream.",
        author: " - Mr. Brus"
    },
    {
        quote: "¿Porque?, said the man in France.",
        author: " - Mr. Brus"
    },
    {
        quote: "Now! Who owes me a pop quiz?",
        author: " - Mr. Brus"
    },
    {
        quote: "\"Has anyone ever gotten a 100 before?\" \"In this class? No way— I’d consider resigning afterward. They’d think I’d let them down.\"",
        author: " - Mr. Brus"
    },
    {
        quote: "\"It’s like when children make mistakes, and aren’t embarrassed by them. RIGHT, ERIC?\" (Eric is sleeping)",
        author: " - Mr. Brus"
    },
    {
        quote: "Big W.",
        author: " - Mr. Brus"
    },
    {
        quote: " I have a pair of binoculars in the back of the room for anyone who needs them.",
        author: " - Mr. Brus"
    },
    {
        quote: "I call it Trumpslyvania.",
        author: " - Mr. Brus"
    },
    {
        quote: "One of the ugly truths of US I— the better the hair, the worse the person.",
        author: " - Mr. Brus"
    },
    {
        quote: "Back in the day, we had the Rent is Too Damn High Party.",
        author: " - Mr. Brus"
    },
    {
        quote: "So I’m walking back home and I see one of my neighbors putting a Trump flag on his pickup truck. I tell him, \"It's leaning a little too far to the right!\"",
        author: " - Mr. Brus"
    },
    {
        quote: "Kickin’ it in Short Hills! In da hills!",
        author: " - Mr. Brus"
    },
    {
        quote: "Back in the day, we had the Rent is Too Damn High Party.",
        author: " - Mr. Brus"
    },
     {
        quote: "\"Who did Mr. Brus sit behind in US History I: Andre Jackson or Donna Pency?\" (Charli): \"Well, Andrew Jackson seems about the right time period.\"",
        author: " - Mr. Brus"
    },
     {
        quote: "One of the best pictures of the year. Roger B. Taney is a straight-up goblin.",
        author: " - Mr. Brus"
    },
     {
        quote: "*Acts like a spaz*",
        author: " - Mr. Brus"
    },
     {
        quote: "I've been a klutz my entire life.",
        author: " - Mr. Brus"
    },
     {
        quote: "(Rohan): \"The uppity-up people.\" \"Is that a technical term?\"",
        author: " - Mr. Brus"
    },
     {
        quote: "Mrs. Brus let me know that I had to take the day off for... stuff.",
        author: " - Mr. Brus"
    },
     {
        quote: "If you have those air-buds, or whatever they're called. Or if you wear a pair of headphones every day as an accessory. *looks at Rohan*",
        author: " - Mr. Brus"
    },
    {
        quote: "From 1964. Just for the record, I was not alive back then.",
        author: " - Mr. Brus"
    },
     {
        quote: "I'm George W. Bush, and I approve of this message.",
        author: " - Mr. Brus"
    },
     {
        quote: "Trump. The guy who swiped right on the American Flag.",
        author: " - Mr. Brus"
    },
     {
        quote: "When I'm speaking, you should assume that it's the voice of God speaking.",
        author: " - Mr. Brus"
    },
     {
        quote: "I'm a beast at wiffleball. The sport of kings.",
        author: " - Mr. Brus"
    },
     {
        quote: "That'd be like sending me back to Ukraine. That's where the Bruses hail from. My people!",
        author: " - Mr. Brus"
    },
     {
        quote: "When I go to resturaunts, I use the name Donner.",
        author: " - Mr. Brus"
    },
     {
        quote: "\"As you may have heard, I'm not going to be here tomorrow.\" \"Oh noo....\" \"Wonderful acting.\"",
        author: " - Mr. Brus"
    },
    {
        quote: "Corlett. Ah, Timmy C.",
        author: " - Mr. Brus"
    },
     {
        quote: "Fifty-four forty, or fight. My locker combination.",
        author: " - Mr. Brus"
    },
     {
        quote: "What is this, Fox News?",
        author: " - Mr. Brus"
    },
     {
        quote: "#PopSov",
        author: " - Mr. Brus"
    },
     {
        quote: "You're always going to the bathroom. Always. You're what we call a frequent flier.",
        author: " - Mr. Brus"
    },
     {
        quote: "Whatevah, ah do what ah want!",
        author: " - Mr. Brus"
    },
     {
        quote: "Millburn Fever? mah gawd, ah gat the vapahs!",
        author: " - Mr. Brus"
    },
     {
        quote: "Daddy, I'm hungry. Daddy, I'm bored.",
        author: " - Mr. Brus"
    },
    {
        quote: "Together forever. Like Rick Astley once said. Together forever, and never to part.",
        author: " - Mr. Brus"
    },
     {
        quote: "Rohan, we'll consider that a fumble.",
        author: " - Mr. Brus"
    },
     {
        quote: "I learned a new word over the weekend: Drippy. I learned it on myspace.",
        author: " - Mr. Brus"
    },
     {
        quote: "(Giving a pop quiz): Drop it like it's pop!",
        author: " - Mr. Brus"
    },
     {
        quote: "Hey there crinkles, what you got there? Fruit snacks?",
        author: " - Mr. Brus"
    },
     {
        quote: "\"Pop Quiz!\" \"My chromebook is dead!\" \"So is your grade!\"",
        author: " - Mr. Brus"
    },
     {
        quote: "Son of a-",
        author: " - Mr. Brus"
    },
     {
        quote: "Et tu, John?",
        author: " - Mr. Brus"
    },
    {
        quote: "You'd be happy to know that this is the 19th year in a row that the North as won the civil war.",
        author: " - Mr. Brus"
    },
     {
        quote: "Because that's how J. Bizness rolls. Laziness for the people!",
        author: " - Mr. Brus"
    },
     {
        quote: "I will slay a child.",
        author: " - Mr. Brus"
    },
     {
        quote: "Burnt Sienna. My favorite crayola color.",
        author: " - Mr. Brus"
    },
    {
        quote: "*random slurping in the middle of class*",
        author: " - Sameer"
    },
    {
        quote: "Push the air out of your diaphragm! Hit the wall! *begins shrieking Led Zepplin*",
        author: " - Mr. Brus"
    },
    {
        quote: "Are you impressed by my extensive knowledge of T. Swizzle?",
        author: " - Mr. Brus"
    },
    {
        quote: "(Stella): \"Are you a Swiftie?\" \"I think I am!\"",
        author: " - Mr. Brus"
    },
    {
        quote: "\"Everything is fair game!\" \"You're not fair game.\" \"You've got no game!\"",
        author: " - Mr. Brus"
    },
    {
        quote: "Cool kid corner strikes again.",
        author: " - Mr. Brus"
    },
    {
        quote: "*Gregorian chants randomly begin blasting on his computer*",
        author: " - Mr. Brus"
    },
    {
        quote: "This is a fantastic porch!",
        author: " -Documentary"
    },
    {
        quote: "I want a porch with a house attached",
        author: " - Rutherford B. Hayes"
    },
    {
        quote: "Do the opposite of what you do on the leaderboard. Move up.",
        author: " - Mr. Brus"
    },
    {
        quote: "What is this, sanskrit? Hieroglyphics or something?",
        author: " - Mr. Brus"
    },
    {
        quote: "Just swallow your pride and ask for a Gossip Girl.",
        author: " - Mr. Brus"
    },
    {
        quote: "What's a Splendid Failure? That's the title of my memoir.",
        author: " - Mr. Brus"
    },
    {
        quote: "BTDubs.",
        author: " - Mr. Brus"
    },
    {
        quote: "DietBrus™",
        author: " - Mr. Brus"
    },
    {
        quote: "*Having a mental breakdown over the number of primary sources he put on his test*",
        author: " - Mr. Brus"
    },
    {
        quote: "\"Dear Diary, Mr. Brus sucks. Dear Diary, only one more day of this shit.\"",
        author: " - Mr. Brus"
    },
    {
        quote: "You know, a psychologist would say that this is you trying to impose control over an uncontrollable situation.",
        author: " - Mr. Brus"
    },
    {
        quote: "If you have to die, die outside the room. Otherwise, I'll have to fill out paperwork.",
        author: " - Mr. Barry"
    },
    {
        quote: "I have to kill Napoleon by Christmas",
        author: " - Mr. Barry"
    },
    {
        quote: "I'm opposed to murdering children. Or adults, I'm against the murdering of adults too-",
        author: " - Mr. Barry"
    },
     {
        quote: "Old McDonald had a farm, what was his name— Oh wait, wrong song.",
        author: " - Mr. Barry"
    },
    {
        quote: "I have no control over Waldo. He appears where he wants, he will show up throughout the year. Apparently, he likes massacres. He likes to pop up every now and then.",
        author: " - Mr. Barry"
    },
    {
        quote: "FYI, the guy on the left is one of his sons, not a Russian DJ.",
        author: " - Mr. Barry"
    },
    {
        quote: "She's very into getting stabbed.",
        author: " - Mr. Barry"
    },
    {
        quote: "It looks like a lyric from a pop song. Like if I wrote a diss track, that's going in there.",
        author: " - Mr. Barry"
    },
    {
        quote: "Please do not add a list of dead babies in your notes. That would be very creepy.",
        author: " - Mr. Barry"
    },
    {
        quote: "Sorry to anyone who's wearing a polyester blend right now, Bible says you should be killed.",
        author: " - Mr. Barry"
    },
    {
        quote: "He's handing a Bible to the religious figure, the one with the funny hat. Usually, the bigger the hat, the more religious.",
        author: " - Mr. Barry"
    },
    {
        quote: "You know they're monks because of their horrible haircuts. They just cut off the tops of their head. We should try that for Halloween in respect for Martin Luther. Don't actually do that. Don't do that to yourself.",
        author: " - Mr. Barry"
    },
    {
        quote: "We can see many different foreign dignitaries- And Waldo-",
        author: " - Mr. Barry"
    },
    {
        quote: "For a while, I was able to argue that the last time the Cubs won the World Series, the Ottoman Empire was around, but of course the Cubs had to win in 2016 and ruin the joke.",
        author: " - Mr. Barry"
    },
    {
        quote: "My only weakness is bullets.",
        author: " - Mr. Barry"
    },
    {
        quote: "Are you a 6'8 huge nutjob?",
        author: " - Mr. Barry"
    },
    {
        quote: "Sometimes people have existential crises when reading it. Which is fun. For me. Not for you.",
        author: " - Mr. Barry"
    },
    {
        quote: "That would be a great cover up for actual murder. But don't actually do it. I'm against murder. Guys, don't kill people. Murder is bad.",
        author: " - Mr. Barry"
    },
    {
        quote: "Obviously I'm here to eat food. I don't just sustain myself on primary source documents, I actually need food.",
        author: " - Mr. Barry"
    },
    {
        quote: "Hopefully there are no sociopaths in here.",
        author: " - Mr. Barry"
    },
    {
        quote: "\"Is lying wrong?\" \"It depends on the circu-\" \"WELL KANT DISAGREES WITH YOU\"",
        author: " - Mr. Barry"
    },
    {
        quote: "After the AP exam, we'll just be rolling dice and placing bets.",
        author: " - Mr. Barry"
    },
    {
        quote: "Okay, I'm pro-happiness. And anti-murder.",
        author: " - Mr. Barry"
    },
    {
        quote: "The French join the colonies with the intent to troll the English.",
        author: " - Mr. Barry"
    },
    {
        quote: "Napoleon overthrew the government when he was 30 years old, so don’t let anyone tell you that you’re too young to do something. Also please don’t overthrow the government.",
        author: " - Mr. Barry"
    },
    {
        quote: "Wait, what do you mean, World War One? It'd be like if I referred to my wife as ‘my first wife’. She would not be pleased.",
        author: " - Mr. Barry"
    },
    {
        quote: "In my second-period class, I heard someone call the sans-culottes ‘mob rule’, which is the most elitist thing I have heard.",
        author: " - Mr. Barry"
    },
    {
        quote: "\"Lets turn the lights back on, this is too dark.\" \"No!\" \"Wow, you really hate looking at my face that much?\"",
        author: " - Mr. Barry"
    },
    {
        quote: "He was known as the pimp killer. Not because he killed pimps, but because he was a pimp who murdered other people",
        author: " - Mr. Barry"
    },
    {
        quote: "Two fish are in a tank. One turns to the other and asks, \"Can you drive this thing?\"",
        author: " - Mr. Barry"
    },
    {
        quote: "Two muffins are in an oven. One turns to the other and says, \"boy it’s hot in here\". The other turns and says, \"Holy crap, a talking muffin!\"",
        author: " - Mr. Barry"
    },
    {
        quote: "Thanks, Alex, for making sure I didn’t get a unanimous vote. What is this, the House of Representatives?",
        author: " - Mr. Barry"
    },
    {
        quote: "“Listen, I know my Great British Bake Off, okay?” (clearly affronted by the suggestion that he wouldn’t)",
        author: " - Mr. Barry"
    },
    {
        quote: "That was the sassiest way you could’ve said that.",
        author: " - Mr. Barry"
    },
    {
        quote: "Why do you think I wear glasses? To look smart. Without glasses, I look like a doofus.",
        author: " - Mr. Barry"
    },
    {
        quote: "(Barry's Wife): \"Woah, is that a super priest?\" (Barry): \"Oh, that’s a bishop.\" (Barry's Wife): \"So a super priest\"",
        author: " - Mr. Barry"
    },
    {
        quote: "Trees are smug. You gotta admit it. They’re just standing there. They stay around for a long time and rub it in your face.",
        author: " - Mr. Barry"
    },
    {
        quote: "Tree district? I call that a forest.",
        author: " - Mr. Barry"
    },
    {
        quote: "You know, for the dead kids.",
        author: " - Mr. Barry"
    },
    {
        quote: "\"Where did the freshmen go?\" \"They went to the sewers.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "You know, I’m thinking of starting a cult. Seems profitable.",
        author: " - Mr. Barry"
    },
    {
        quote: "He’s basically a German emo— He falls in love, doesn’t tell her, she gets married, and he kills himself.",
        author: " - Mr. Barry"
    },
    {
        quote: "We need some more negative children’s stories. That’s what I’m going to teach my children. Krampus is gonna come and get you.",
        author: " - Mr. Barry"
    },
    {
        quote: "I’m sure you didn't expect me to give you a reading on eating children.",
        author: " - Mr. Barry"
    },
    {
        quote: "Don't vote for Mickey Mouse.",
        author: " - Mr. Barry"
    },
    {
        quote: "That turned out to be a pretty bad idea, both for the country, and his continued existence on Earth.",
        author: " - Mr. Barry"
    },
    {
        quote: "Air is free— at least for now.",
        author: " - Mr. Barry"
    },
    {
        quote: "Bear with me now— His name was Robert Peel, and he re-peeled the Corn Laws.",
        author: " - Mr. Barry"
    },
    {
        quote: "*Farzeen walks in with a water bottle* \"Well, people sure love buying plastic bottles. Hey, I’m just saying. I mean that’s what you’re buying, tap water from another place.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "My middle name is ‘Ranch Dressing’, so I can understand that.",
        author: " - Mr. Barry"
    },
    {
        quote: "(Miron): \"There were a lot of activities going on for sure.\" *Barry facepalms*",
        author: " - Mr. Barry"
    },
    {
        quote: "It’s an ottoman that...fell (picture of a piece of furniture). You’ve ruined the joke.",
        author: " - Mr. Barry"
    },
    {
        quote: "(Arya): \"Why are we always focusing on the past? We should focus on the future!\" (Barry): \"...This is history class.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "He looks healthy! Except for that mustache, but that was a symptom of the time.",
        author: " - Mr. Barry"
    },
    {
        quote: "In Naples, it just made sense that my wife got chased down the street by a stray dog. It felt like a very Naples thing. Or like when I tried walking down the street and felt terrified for my life. They have no regard for the law.",
        author: " - Mr. Barry"
    },
    {
        quote: "I don’t think you woke up today to expect to see an old man with a pool noodle today, but here it is!",
        author: " - Mr. Barry"
    },
    {
        quote: "smh",
        author: " - King Louis XIV"
    },
    {
        quote: "I hopped the turnstile, I ran through the airport, Home Alone style, and made it to my plane somehow.",
        author: " - Mr. Barry"
    },
    {
        quote: "The Mexicans, understandably unhappy with this, shot him in the face.",
        author: " - Mr. Barry"
    },
    {
        quote: "My grandfather, like most grandfathers, owned zero ferris wheels to my knowledge.",
        author: " - Mr. Barry"
    },
    {
        quote: "If I were going to burn someone’s house down, I would do it on the day the firefighters are on strike. (Pause) ...NOT that I would burn someone’s house down",
        author: " - Mr. Barry"
    },
    {
        quote: "That is also true— I do not tan. I burn, and then I turn back into- this.",
        author: " - Mr. Barry"
    },
    {
        quote: "(To Farzeen, Reva, Eliana, and Casey) \"You all can take anarchism. You look like a bunch of anarchists.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "\"Do you have Elmo in your presentation?\" (Sam): \"No-\" \"Big mistake. Why no Elmo?\"",
        author: " - Mr. Barry"
    },
    {
        quote: "(Referring to presentation) \"Oh you have memes in here. Very dangerous.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "Just remember that if I trip and fall to my death, Alex should be charged with murder.",
        author: " - Mr. Barry"
    },
    {
        quote: "Fire department— people... Firefighters! That’s what they’re called! You’d assume I’d know their name for someone whose house has burned down.",
        author: " - Mr. Barry"
    },
    {
        quote: "We’re currently on the fifth republic, who knows when we’ll get to the sixth. Sometime soon, probably.",
        author: " - Mr. Barry"
    },
    {
        quote: "Tomorrow we’ll be reading a very racist children’s book.",
        author: " - Mr. Barry"
    },
    {
        quote: "He has a tail!",
        author: " - Mr. Barry"
    },
    {
        quote: "Oh, so someone else is trying to kill me today. Naina should be charged for murder guys.",
        author: " - Mr. Barry"
    },
    {
        quote: "Their belief that they were immune to bullets was a bad idea and shockingly not true.",
        author: " - Mr. Barry"
    },
    {
        quote: "Because as we all know, Jesus’ half brother was Chinese, and 1800 years younger than him.",
        author: " - Mr. Barry"
    },
    {
        quote: "James Monroe, president of the most boring period of American History. The Era of Good Feelings, what a lame name.",
        author: " - Mr. Barry"
    },
    {
        quote: "That’s why you go to an Indian restaurant. Or Chinese. Or Italian. Anything but British.",
        author: " - Mr. Barry"
    },
    {
        quote: "I once read a DBQ where a kid wrote that Indian women went onto trains to give birth. Not to go somewhere to give birth. But to give birth on the train itself.",
        author: " - Mr. Barry"
    },
    {
        quote: "I’ve never given birth, but if I were to, I wouldn’t choose to do it on a train.",
        author: " - Mr. Barry"
    },
    {
        quote: "\"Was Wilhelm trying to seduce the Tsar of Russia?\" \"Well, no— They were first cousins. But that wouldn’t stop him-\"",
        author: " - Mr. Barry"
    },
    {
        quote: "He's only 19 and he starts World War One. So don't let anyone tell you that you're too young to make a difference.",
        author: " - Mr. Barry"
    },
    {
        quote: "Unterseeboot... which is an under sea boat.",
        author: " - Mr. Barry"
    },
    {
        quote: "Uhh... yes. Me gusta.",
        author: " - Mr. Barry"
    },
    {
        quote: "They still have the blood splatters. Which seems rude. Should’ve dry-cleaned it or something.",
        author: " - Mr. Barry"
    },
    {
        quote: "It’s like when I talked about the 30 Years War. Millions of deaths here and millions of deaths there, and no one bats an eye. But God forbid Wallenstein kills a couple of cats!",
        author: " - Mr. Barry"
    },
    {
        quote: "It’s the most aggressive carpooling poster in history.",
        author: " - Mr. Barry"
    },
    {
        quote: "Why are you wearing a CHATHAM sweatshirt???",
        author: " - Mr. Barry"
    },
    {
        quote: "If you think about it, WWI is just a weird family reunion. Just with a lot of murder.",
        author: " - Mr. Barry"
    },
    {
        quote: "Distractible Doofus Time.",
        author: " - Mr. Barry"
    },
    {
        quote: "Are we done in the sense that we're finished, or are we done in the sense that we're finished?",
        author: " - Mr. Barry"
    },
    {
        quote: "Being liquidated is typically not a good thing as a human being.",
        author: " - Mr. Barry"
    },
    {
        quote: "Here is Joseph Jughashvili— not a modern-day hipster in Brooklyn, but he might as well be.",
        author: " - Mr. Barry"
    },
    {
        quote: "I wouldn't tell it to his face. Well, I would now, since he's dead.",
        author: " - Mr. Barry"
    },
    {
        quote: "That's how I want to go. Bashed in the head by an ice pick.",
        author: " - Mr. Barry"
    },
    {
        quote: "This is the type of music I play in my house. This and the Kahoot music.",
        author: " - Mr. Barry"
    },
    {
        quote: "If you walk into someone's house and hear Kahoot music playing, leave it right there and burn it down immediately.",
        author: " - Mr. Barry"
    },
    {
        quote: "(To the girls in the back) \"You guys had quite the reaction to Stalin in 1903.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "That has to be the best mugshot of all time. His hair was spectacular.",
        author: " - Mr. Barry"
    },
    {
        quote: "If I die here, like a said before, find a trash can.",
        author: " - Mr. Barry"
    },
    {
        quote: "Charlie Chaplin and Fiddy-Cent. Why are you laughing? That's how he says it!",
        author: " - Mr. Barry"
    },
    {
        quote: "Don't kill babies.",
        author: " - Mr. Barry"
    },
    {
        quote: "Here's an original Hitler. (shows a painting by Hitler)",
        author: " - Mr. Barry"
    },
    {
        quote: "(To Casey) \"Ah yes, of course. You give me major Stalin vibes. Farzeen does too.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "I think you guys should call me Supreme Commander.",
        author: " - Mr. Barry"
    },
    {
        quote: "They also create this thing called COMECON. No, not that one.",
        author: " - Mr. Barry"
    },
    {
        quote: "\"I spent Friday attending a terrible wedding.\" \"What, did the bride run away?\" \"What?!? That would make a great wedding! I desperately want to go to a wedding where the bride runs away.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "I've already been married, and she didn't run away. Yet.",
        author: " - Mr. Barry"
    },
    {
        quote: "(About his wife) \"You could call her my ex-girlfriend. Or ex-fiancee.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "Fox News would explode.",
        author: " - Mr. Barry"
    },
    {
        quote: "Instead of a bald man, they picked a man with as much hair on his head as possible. (Brezhnev replacing Khrushchev)",
        author: " - Mr. Barry"
    },
    {
        quote: "He's sort of like Stalin, but no one wants a picture of him on their door. Well, not me. I have a huge picture of hime right on my front door. (Brezhnev)",
        author: " - Mr. Barry"
    },
    {
        quote: "I should not have mentioned toenails. That one's on me.",
        author: " - Mr. Barry"
    },
    {
        quote: "Asterisks... asteriskses...? ...Asterices? I don't like this word now.",
        author: " - Mr. Barry"
    },
    {
        quote: "That one island in Greece where you can ban women.",
        author: " - Mr. Barry"
    },
    {
        quote: "If it explodes, it explodes.",
        author: " - Mr. Barry"
    },
    {
        quote: "The rally of pep.",
        author: " - Mr. Barry"
    },
    {
        quote: "Don't trust anyone but me. I know I sound like a cult leader, but don't trust anything online but me.",
        author: " - Mr. Barry"
    },
    {
        quote: "\"What were the answers again?\" \"C-B-D. As seen on neon signs all over New Jersey.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "Aarman should probably close his computer. I don't know what's on it, but it probably shouldn't be.",
        author: " - Mr. Barry"
    },
    {
        quote: "I was baptized in Ranch Dressing",
        author: " - Mr. Barry"
    },
    {
        quote: "As far as I know, there was no murder of 20,000 protestants on my wedding day.",
        author: " - Mr. Barry"
    },
    {
        quote: "Madonna With the Long Neck. Which sounds like a rap lyric. Whenever I say it, I have the inclination to rap.",
        author: " - Mr. Barry"
    },
    {
        quote: "Their life is trash, and thier life continues to be trash.",
        author: " - Mr. Barry"
    },
    {
        quote: "Don't be an idiot. That's just good general life advice.",
        author: " - Mr. Barry"
    },
    {
        quote: "I'm no stabbing expert, but I don't think that's stabbing. They're not doing this (violently imitates stabbing), they're slicing, like how I slice a carrot. Except that there's a head instead of a carrot.",
        author: " - Mr. Barry"
    },
    {
        quote: "Just keep adding vowels. There's an infinite number of vowels in French words. It's a weird fact but it's true.",
        author: " - Mr. Barry"
    },
    {
        quote: "It's pretty baller.",
        author: " - Mr. Barry"
    },
    {
        quote: "Eliminate all sense of good writing. Because what you are producing is gilded garbage. Garbage that will make your reader want to throw up because it's garbage but they have to give you those 4 points. They hate you and want you to suffer, but they are compelled to give it to you.",
        author: " - Mr. Barry"
    },
    {
        quote: "(To Mr. Barry) I want you to be less approachable and friendly.",
        author: " - Sam"
    },
    {
        quote: "His whole vibe gives serial killer!",
        author: " - Mr. Barry"
    },
    {
        quote: "If they kissed right now, it'd be the greatest moment in TV history",
        author: " - Mr. Barry"
    },
    {
        quote: "(Scherbina): \"Let him finish!\" \"...because I'm in love with him.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "\"Sweet Caroline, my least favorite song.\" *someone begins singing* \"Alright, I'm convinced that you've failed this class.\"",
        author: " - Mr. Barry"
    },
    {
        quote: "Did you just describe Jerry Seinfeld as the guy from the Bee Movie??? I need a moment.",
        author: " - Mr. Barry"
    },
    {
        quote: "(No Hesitation) \"You're gaslighting yourself into liking him.\"",
        author: " - Casey"
    },
    {
        quote: "Cars don't talk—you can rip the heads off your toys, they won't feel anything.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "For example, when I try going through a wall... *bodyslams into the whiteboard*",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "A bell curve of baseballs.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It's like that one annoying person at a party who pulls out a guitar and plays Wonderwall... since it's the only song they know... in an effort to impress the invidiual they wish to romance.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "If you shoot a beam of tens of quintillions of humans at the screen, sure.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "You don't actually become the Fantastic Four when you're exposed to gamma rays—you just melt.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "When you join your college radio station in the future and annoy your friends to listen to you jazz-gregorian chants at 3am.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I have 37... 37 what? 37 big stacks of 100 dollar bills which would be great... 37 illegitimate children scattered across the wind, which you can interpret as a good or bad thing.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "My sidekick is a four foot guy with a red fro wearing athletic goggles and a purple jumpsuit with the nipples cut out.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "The two ions come together and snuggle.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I forgot to bring the aluminum foil from home... oh well, it was just to prevent your fingers from getting some mild discoloration from the reaction.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "So the program can run on chromebooks, because as we know, chromebooks are not computers.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "When your friends in CPA... well, most of you don't have friends.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "\"What's that on the floor?\" \"hydrochloric acid\" \"...eh just leave it for now.\"",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Johan verMagnusSterHansonJansen",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "John Johnson Junior is like Magnus verMagnuson verMagnuson, John son of John.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Snoop Dogg is a pretty good example of someone who gets high.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "If I climbed onto the roof and jump off the train I would actually make it there sooner than everyone else.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Like when a family of atoms go on a camping trip or something.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It won't kill you. It is highly explosive though.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "As a proud citizen of the commonwealth, I believe we should speak the Queen's English... well, the King's English now.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "They throw H+'s at things.'",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "\"Who thinks they’re Steph Curry? Try making the ball in the basket.\" (throws ball) (blocks ball) \"ahhhhhhh, get that out of here!\" (finger waggles)",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Many of you will have a future of moving so you better get used to it; I’ve seen your grades.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "If I go back to my pinup model days and I do a sultry pose, there are two normal forces acting upon me.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Here, here's some adrenaline.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "You can do this at home: rub a piece of sandpaper on your face and you can feel the friction on your face. Then take the smoothest of baby bottoms and then you feel almost no friction.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Friction is the reason that we have no homecoming dances anymore.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "If you want hyper mileage on your car you should aggressively tailgate people... it works.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It's really dangerous because you're tailgating someone while accelerating, but it gives you insane mileage.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "You can also save a few gallons if you never come to a stop at a stop sign.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "You know, if you want to inflict maximum pain on your sibling, walk up behind them and strech the rubber band as far as you can, and then call them a dumbass.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Period always has the same meaning except in English and Health class.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "George Clooney wouldn't float forever; he would enter orbit in his lifeless body.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Noted Canadian sexy man Ryan Gosling and his abs.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "You could replace the moon with a decorative plate with a picture of the moon on it.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "There are multiple ways to skin a cat, all of them end up producing a delicious stew.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Women are actually more efficient engines and can convert energy into work better.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I am going to risk my soft, supple body by subjecting it to a full bed of 2-inch carpenter nails.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I've unlocked air, water, and fire like the avatar, so I now have superpowers! ...I have developed the ability to levitate people using only my brain.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I actually cracked my ribs, but I didn't go to the doctor.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I wish there was audio... it would be fun to hear the screams of the other kids.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "You can't prove that lizard people don't run the government, so you can believe it.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "If you're one of those fancy D&D players, this would be a D6.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I need more blank pages... I lost my train of thought when I said I need more blank pages.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Oh, I messed up. I shouldn't have added that much acid. *continues to do the experiment anyway*",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Centimeters or inches? ...Let's do inches to be rebels.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It's more idiot-proof, which is why I think it's become more popular.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It's not that oil hates water, they just love themselves way more than they love each other. It'd be a pretty toxic relationship.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Alright, onto demo #2... now, where are my matches?",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "So hypothetically, if you burned a delicious snickers bar, you could raise 1 gram of water 260,000°C.",
        author: " - Mr. Bridgeman"
    },{
        quote: "We can observe this on a macroscopic scale if we blindfolded all of you and had half of you walk around the room and half of you run.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "\"How is there buoyancy if there's no water under it?\" \"Doesn't matter.\"",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It’s like a very large person being stuck in the door; It’s not the person pushing himself out, it's the people around him pushing him out.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "\"Ok, this is gonna be a stupid question-\" \"uh-huh.\"",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "\"Wait, is this HCl?\" *sniffs beaker to check*",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "...not that we're trying to make bombs here.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Everyone's least favorite dessert: a marshmellow.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "By the way, 14.7 lbs is about the weight of a full adult cat, so you actually have a full adult cat pushing down on every square inch of your body.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "\"...but I do have a hair dryer.\" *pulls a random hair dryer out of his desk*",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "*spills a can of boiling water on a student* \"ope.\"",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Very oxygen-rich atmosphere. Allegedly what they pump into casinos to keep you awake and gambling.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "Those that had their ED's come out, you might realize that you will have a career of paving roads ahead of you.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "I assume you all want to build a nuclear reactor in your backyard in your life sometime.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "...nah we're gonna make this more evil.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "*sips diet coke*",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "You're not special.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It was my worst class in college... mostly because I didn't show up every Wedensday.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "They forced us to do group work, and I refuse to work with other humans.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "It's been so long since I wrote this an hour ago.",
        author: " - Mr. Bridgeman"
    },
    {
        quote: "\"Before anything... is Brendan in this class?\" (class): \"No.\" \"Whew! We dodged a bullet!\"",
        author: " - Dr. Conlon"
    },
    {
        quote: "Whatever the hell they were doing, everyone was doing it!",
        author: " - Dr. Conlon"
    },
    {
        quote: "Catholicism Lite.",
        author: " - Dr. Conlon"
    },
    {
        quote: "They shoulda been kickin' ass!",
        author: " - Dr. Conlon"
    }, 
    {
        quote: "If that was the only answer, we woulda been sunk.",
        author: " - Dr. Conlon"
    },
    {
        quote: "They look at you now like you're a whack!",
        author: " - Dr. Conlon"
    },
    {
        quote: "A colossally bad year; an ass-whoopin'",
        author: " - Dr. Conlon"
    },
    {
        quote: "Newburgh is this crappy-ass town in the middle of nowhere.",
        author: " - Dr. Conlon"
    },
    {
        quote: "I dunno if he's in the nuthouse yet.",
        author: " - Dr. Conlon"
    },
    {
        quote: "\"Are you excited?\" \"Thrilled.\"",
        author: " - Dr. Conlon"
    },
    {
        quote: "Aarav shut up, blondie wants to work.",
        author: " - Dr. Conlon"
    },
    {
        quote: "Small d democracy",
        author: " - Dr. Conlon"
    },
    {
        quote: "If your bank president and secretary run off to Mexico to start a new life, you're SOL!",
        author: " - Dr. Conlon"
    },
    {
        quote: "I don't know what the hell you're talking about.",
        author: " - Dr. Conlon"
    },
    {
        quote: "It's your rotten brother who's Aryan.",
        author: " - Dr. Conlon"
    },
    {
        quote: "If you lost a point on this, I'd punch you in the head.",
        author: " - Dr. Conlon"
    },
    {
        quote: "(To Dr. Conlon): \"My back hurts from carrying you all these years.\"",
        author: " - Dr. Feeley"
    },
    {
        quote: "Or the self-admitted dumbest person in the class can join a group of three, since they really won't be contributing much.",
        author: " - Dr. Conlon"
    },
    {
        quote: "Lincoln may or may not have been a vampire slayer... it hasn't been verified.",
        author: " - Dr. Conlon"
    },
    {
        quote: "Apparently she dated both Lincoln and Douglas— she ended up being a nut, so Douglas dodged a real bullet.",
        author: " - Dr. Conlon"
    },
    {
        quote: "(To Aarav) \"Jackass.\"",
        author: " - Dr. Conlon"
    },
    {
        quote: "You know what, you guys suck.",
        author: " - Dr. Conlon"
    },
    {
        quote: "My poor, white cracker kinfolk.",
        author: " - Dr. Conlon"
    },
    {
        quote: "We've invented some kick-ass machinery.",
        author: " - Dr. Conlon"
    },
    {
        quote: "We're kick-ass farmers.",
        author: " - Dr. Conlon"
    },
    {
        quote: "The caterpillar... whatever the hell the caterpillar was.",
        author: " - Dr. Conlon"
    },
    {
        quote: "Nobody gives a rat's ass.",
        author: " - Dr. Conlon"
    },
    {
        quote: "The first known serial killer in America? It's a great story.",
        author: " - Dr. Conlon"
    },
    {
        quote: "Yeah, he was looking for sex.",
        author: " - Dr. Conlon"
    },
    {
        quote: "Nothing makes you laugh more than a good hangin', apparently.",
        author: " - Dr. Conlon"
    },
    {
        quote: "They bitch about life as a farmer.",
        author: " - Dr. Conlon"
    },
    {
        quote: "Sooner or later during theri bitching sessions, the granges realized they all wanted the same thing.",
        author: " - Dr. Conlon"
    },
    {
        quote: "I'm the puppetmaster— Ryan is elected, but I have the real power.",
        author: " - Dr. Conlon"
    },
    {
        quote: "\"Can we leave early?\" \"No! Absolutely not! Nobody leaves early in this class! Not even me.\" *walks out the room*",
        author: " - Dr. Conlon"
    },
    {
        quote: "Pullman was a total ass. He called the workers his children, so you can imagine how he treats his actual children.",
        author: " - Dr. Conlon"
    },
    {
        quote: "(To Dr. Conlon) \"I think you could hit a mean salsa.\"",
        author: " - Aarav"
    },
    {
        quote: "Even I could become the governor of North Dakota.",
        author: " - Mr. Raymond"
    },
    {
        quote: "Age of consent in NJ is 18, while the age of consent in Alabama is 12.",
        author: " - Mr. Raymond"
    },
    {
        quote: "Marijuana is legal in NJ; you can go to the shops, I've seen Simon there.",
        author: " - Mr. Raymond"
    },
    {
        quote: "Well, the edibles are my favorite.",
        author: " - Mr. Raymond"
    },
    {
        quote: "Matt Gates and the 7 dwarves.",
        author: " - Mr. Raymond"
    },
    {
        quote: "The distinguished gentlewoman from Tennessee... is a bitch.",
        author: " - Mr. Raymond"
    },
    {
        quote: "We did not dress up back in that day, but things might’ve changed, that was back in the 1860s.",
        author: " - Mr. Raymond"
    },
    {
        quote: "Mrs. Underwood was teaching the girls how to say no, and Mr. Raymond was teaching the boys to not take no as an answer.",
        author: " - Mr. Raymond"
    },
    {
        quote: "My doppleganger is Sir Isaac Newton.",
        author: " - Mr. Raymond"
    },
    {
        quote: "’m trying to find a picture of Sir Isaac Newton, no not Saddam Hussein.",
        author: " - Mr. Raymond"
    },
    {
        quote: "(Film shows scene of a strip club) \"You're welcome, Simon\"",
        author: " - Mr. Raymond"
    },
    {
        quote: "Paying teachers more for their abilities would be impossible— I would be making 3.7 million dollars a year.",
        author: " - Mr. Raymond"
    },
    {
        quote: "This clumsy-ass woman.",
        author: " - Mr. Raymond"
    },
    {
        quote: "If you can’t stop white guys in rebellion, how do you think you’re gonna stop black guys in rebellion?",
        author: " - Dr. Feeley"
    },
    {
        quote: "(To Brendan): \"There better be roses for your mother for dealing with you, get working on that. That poor woman will be a grandmother to your children one day.\"",
        author: " - Dr. Feeley"
    },
    {
        quote: "Be careful of Irish witches.",
        author: " - Dr. Feeley"
    },
    {
        quote: "\"I don’t wanna say we were full-on prostitutes, but you give us some money...\" *proceeds to run like a prostitute*",
        author: " - Dr. Feeley"
    },
    {
        quote: "And some dead children working in the factories.",
        author: " - Dr. Feeley"
    },
    {
        quote: "And no, I'm not drawing slaves, I need this job.",
        author: " - Dr. Feeley"
    },
    {
        quote: "You took on the Taliban all by yourself!",
        author: " - Dr. Feeley"
    },
    {
        quote: "Women don't really count. No, not like that, you know what I mean.",
        author: " - Dr. Feeley"
    },
    {
        quote: "I used to hate it when my wife didn’t talk to me but now I LOVE it.",
        author: " - Dr. Feeley"
    },
    {
        quote: "I don’t even care what my own kids think of me.",
        author: " - Dr. Feeley"
    },
    {
        quote: "Valentine’s day is just an excuse to get her a gift as if I haven’t given her the greatest gift already— my last name.",
        author: " - Dr. Feeley"
    },
    {
        quote: "I'm sweating bal-",
        author: " - Dr. Feeley"
    },
    {
        quote: "treeeeeeeeeeeeeeeeeeeeees",
        author: " - Dr. Feeley"
    },
    {
        quote: "This is the stuff you won't hear about from Brus or Paul... Hookers' & Lickers in Dr. Feeley's Class",
        author: " - Dr. Feeley"
    },
    {
        quote: "The Battle Royale with Bernie Sanders in the middle.",
        author: " - Dr. Feeley"
    },
    {
        quote: "(To Brendan): \"It's a good thing you're cute.\"",
        author: " - Dr. Feeley"
    },
    {
        quote: "I am Jesus incarnate.",
        author: " - Dr. Feeley"
    },
    {
        quote: "Hey Rose, why don't you move over a bit so I don't freeze to death?",
        author: " - Dr. Feeley"
    },
    {
        quote: "(Talking about the 19th amendment): \"After reading my daughter’s texts, I’m wondering if that was a good decision. Actually maybe just my daughter shouldn’t have the right to vote. She’s voted once, I’m not sure if that’s a good thing.\"",
        author: " - Dr. Feeley"
    },
    {
        quote: "I should be an influencer.",
        author: " - Dr. Feeley"
    },
    {
        quote: "My son would never get married because no sensible woman would ever marry him.",
        author: " - Dr. Feeley"
    },
    {
        quote: "I'm the old man and you're the teenage girl, I should be screaming right now cause I'll go to jail.",
        author: " - Dr. Feeley"
    },
    {
        quote: "Unit period 7 is the exact reason why I think CollegeBoard needs an enema.",
        author: " - Dr. Feeley"
    },
    {
        quote: "Damn, it feels good to be a gangster. Yes I know, I’m a rap god.",
        author: " - Dr. Feeley"
    },
    {
        quote: "What follows Starbucks? ...yes, white people.",
        author: " - Dr. Feeley"
    },
    {
        quote: "Cuz I'm all about the hood, yo.",
        author: " - Dr. Feeley"
    },
    {
        quote: "And you have to write! Oh no! And you have to think! That doesn't happen!",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Mary Shelly was a genius... well, not really... she had good genes.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "They fell in love... there were a few problems... for example, he was married.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "You're a peasant!",
        author: " - Mrs. Lazar"
    },
    {
        quote: "You're landed gentry! You own the land... well, you're a girl, you wouldn't count anyway.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "He chases her around the house going, \"Will you have sex with me now?\"",
        author: " - Mrs. Lazar"
    },
    {
        quote: "The sad part is kids graduate... how dare they!",
        author: " - Mrs. Lazar"
    },
    {
        quote: "When does this end?... 1:08... Let me think of some other evil thing I can make you do.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "He had triple chins because he ate so much.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Frankenstein's his daddy!",
        author: " - Mrs. Lazar"
    },
    {
        quote: "That's gonna be our next essay: will Victor get into college?",
        author: " - Mrs. Lazar"
    },
    {
        quote: "*tangent on how handsome she thought Paul Newman was *",
        author: " - Mrs. Lazar"
    },
    {
        quote: "*something about abandoning babies at a church*",
        author: " - Mrs. Lazar"
    },
    {
        quote: "*long-ass tangent about key lime pie and licorice or something*",
        author: " - Mrs. Lazar"
    },
    {
        quote: "I was right... imagine that.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "*tangent on how handsome she thought Paul Newman was*",
        author: " - Mrs. Lazar"
    },
    {
        quote: "\"I've had enough.\" *stops teaching for the rest of the period*",
        author: " - Mrs. Lazar"
    },
    {
        quote: "I don't think they have spaghetti down in hell... well, you never know.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "I'm gonna be evil Shirley.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "He's a happy moron!",
        author: " - Mrs. Lazar"
    },
    {
        quote: "He turns out to be mugly— really ugly.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "He probably looked ok... though I'm not sure he was Mr. Universe or anything.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "\"When does this thing end?\" \"Eight past.\" \"You mean I have eight more minuts that I'm not gonna use?\"",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Be quiet, vile wretches.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "To think I wrote a rec letter for one of these vile wretches.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "This isn't going to be very nice, since there are midgets out there...",
        author: " - Mrs. Lazar"
    },
    {
        quote: "A moral midget.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "I'm not omniscent... yet. I will be.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Starve, you wretch. Hope you die.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "I think they're both idiots, but that's ok.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "The pope said, \"Heck no!\"",
        author: " - Mrs. Lazar"
    },
    {
        quote: "\"Are you dressing up for halloween?\" \"No. Absolutely not. I hate halloween.\"",
        author: " - Mrs. Lazar"
    },
    {
        quote: "*something about starving grad students donating sperm to a sperm bank*",
        author: " - Mrs. Lazar"
    },
    {
        quote: "We're gonna talk about Oscar Wilde... who was wild.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "I think the people who wrote this are stupider than I am.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "You ain't seen nothing yet.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Oh, another kook.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Oh, he's another cannibal.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Even if my babies were ugly...",
        author: " - Mrs. Lazar"
    },
    {
        quote: "The three amigos",
        author: " - Mrs. Lazar"
    },
    {
        quote: "No more poodle business.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Cuz where's his soul? Up in the attic.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "Love... Deaath... Sex... sounds like stuff we can't do-Talk about in class.",
        author: " - Mrs. Lazar"
    },
    {
        quote: "A trial of what? Flamingos eating doughnuts?",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "I will break you.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "I stalk you. I am a creepy stalker.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "I will find you...",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "If you do this at 11:45, I'm judging you.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "I love logs. I have reached log nirvana.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "Goals here: We don't end up on the cover of NJ.com, and I don't get fired.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "Per capita consumption of trees and bedsheet strangulations",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "If you drink Prime energy drink— god, I hope not.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "Mountain dew... bueghleghh.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "Don't snort it.",
        author: " - Mrs. Piechnik"
    },
    {
        quote: "Aside from the troglodyte in the back, are we all ok?",
        author: " - Mr. Farrell"
    },
    {
        quote: "2B... 2B... to be, or not to be?",
        author: " - Mr. Farrell"
    },
    {
        quote: "I’m not a jerk… well, I might be. My kids think I am, but that’s ok.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Remember, there are no dumb questions, just dumb people asking questions.",
        author: " - Mr. Farrell"
    },
    {
        quote: "There is no cloud... well, there are clouds, but there aren’t any computers up there. Trust me, I’ve been there.",
        author: " - Mr. Farrell"
    },
    {
        quote: "People aren’t making eye contact with me, but I don’t care...",
        author: " - Mr. Farrell"
    },
    {
        quote: "You ACCIDENTALLY stared? Oh, I accidentally shot an arrow through your eye.",
        author: " - Mr. Farrell"
    },
    {
        quote: "That’s not accidental. That’s borderline criminal. In some states they call that a felony.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Troglodytes, really.",
        author: " - Mr. Farrell"
    },
    {
        quote: "I flipped it right from Barrons. Almost a copyright violation!",
        author: " - Mr. Farrell"
    },
    {
        quote: "Were you going anywhere fun this weekend? Not anymore. Not after mom and dad see this big fat zero.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Hey, if you’re going to be a failure, at least be a colossal failure.",
        author: " - Mr. Farrell"
    },
    {
        quote: "ALRIGHT HUMANS!",
        author: " - Mr. Farrell"
    },
    {
        quote: "Don’t worry about it, none of you will ever see a 95 next to your grades. Maybe if you two add yours up and multiply by 50.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Wow! A brain grows in Millburn!",
        author: " - Mr. Farrell"
    },
    {
        quote: "It's gone. Like your soul.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Two rules in here: #1 I'm always right. #2 If I'm wrong, see rule #1.",
        author: " - Mr. Farrell"
    },
    {
        quote: "The Jets fan scored a zero. Like his IQ.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Get away from me. Begone.",
        author: " - Mr. Farrell"
    },
    {
        quote: "ASCII— ask, and you shall see.",
        author: " - Mr. Farrell"
    },
    {
        quote: "You bus-thrower-underer!",
        author: " - Mr. Farrell"
    },
    {
        quote: "Since most of you listen to that acid-rock garbage.",
        author: " - Mr. Farrell"
    },
    {
        quote: "PRIVATE!!! PRIVAAAAATE!!! ATRIBUTES ARE PRIVATE!!!",
        author: " - Mr. Farrell"
    },
    {
        quote: "Fake news. Fake news. CNN. Fake news.",
        author: " - Mr. Farrell"
    },
    {
        quote: "I'm a straight shooter, baby.",
        author: " - Mr. Farrell"
    },
    {
        quote: "A) Get to work.  B) I lock you in a closet.  C) I throw you out of a window.",
        author: " - Mr. Farrell"
    },
    {
        quote: "By the way, someone left their laptop here two days ago. If no one claims it, I'll sell it on ebay.",
        author: " - Mr. Farrell"
    },
    {
        quote: "It's apparent that it's a parent.",
        author: " - Mr. Farrell"
    },
    {
        quote: "I'm flummoxed.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Nope! Too late! I'm offended.",
        author: " - Mr. Farrell"
    },
    {
        quote: "You're in the right church, but the wrong pew.",
        author: " - Mr. Farrell"
    },
    {
        quote: "AGGGHHHHH!!!!!",
        author: " - Mr. Farrell"
    },
    {
        quote: "IT DOESN'T TAKE IN AN ARRAYLIST MUJAMBO!!!",
        author: " - Mr. Farrell"
    },
    {
        quote: "Just like the red wagon I had when I was younger. That's how I got the dead bodies in to the backyard.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Ugh. Where did the school board find this guy, and why did they put him in my class?",
        author: " - Mr. Farrell"
    },
    {
        quote: "You owe me a lunch.",
        author: " - Mr. Farrell"
    },
    {
        quote: "YOU DIDN't CALL IT!!!",
        author: " - Mr. Farrell"
    },
    {
        quote: "NO FALDERAL!!!",
        author: " - Mr. Farrell"
    },
    {
        quote: "\"I'm not gonna be here on Thursday.\" \"Party Thursday.\"",
        author: " - Mr. Farrell"
    },
    {
        quote: "\"There you go again. You're like a cancer.\" \"Actually, I'm an aquarius.\"",
        author: " - Mr. Farrell"
    },
    {
        quote: "That's my kid, that's my son. Same thing. That's my annoying brat. Same thing.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Laziness, yes. Abstract laziness.",
        author: " - Mr. Farrell"
    },
    {
        quote: "Slow is in my name.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Are you watching CNBC?",
        author: " - Mr. Breslow"
    },
    {
        quote: "Dits",
        author: " - Mr. Breslow"
    },
    {
        quote: "MEEEEEYEEEA!!",
        author: " - Mr. Breslow"
    },
    {
        quote: "Ass ass ass ass ass ass ass",
        author: " - Mr. Breslow"
    },
    {
        quote: "Darn numbers huh. Whose idea was this?",
        author: " - Mr. Breslow"
    },
    {
        quote: "Study the perfect squares. Learn them. Live them. Be them.",
        author: " - Mr. Breslow"
    },
    {
        quote: "TABPSSLCPOOASSB",
        author: " - Mr. Breslow"
    },
    {
        quote: "You know, if you vomit and you close your teeth, you can save all the chunks.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Troiangle Schmoiangle",
        author: " - Mr. Breslow"
    },
    {
        quote: "Shimple, Zimple, Rizmple, Ditzple",
        author: " - Mr. Breslow"
    },
    {
        quote: "Dj Biggy Trig!!",
        author: " - Mr. Breslow"
    },
    {
        quote: "I’m trying to reboot but keep on getting this weird link popping up: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        author: " - Mr. Breslow"
    },
    {
        quote: "Stack Overflow is my street gang name. Don’t let anyone know.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Don’t make me do my crip walk.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Helloooooooo ladies... would you like some chocolate?",
        author: " - Mr. Breslow"
    },
    {
        quote: "Tickle my ass with a feather!",
        author: " - Mr. Breslow"
    },
    {
        quote: "Dog^2 + Smileyface^2 = Turd^2",
        author: " - Mr. Breslow"
    },
{
        quote: "IIIIIIIIIIIIIIT’S A PYTHAAAAAAAAGOREAN TRIIIIIIIIIIIIIIPLE!!!!!!",
        author: " - Mr. Breslow"
    },
    {
        quote: "MMMMMMMMNYAMNYAMYAMYAM",
        author: " - Mr. Breslow"
    },
    {
        quote: "Who doesn’t like some good cardboard?",
        author: " - Mr. Breslow"
    },
    {
        quote: "UNGABUNGABUNGA",
        author: " - Mr. Breslow"
    },
    {
        quote: "Moses supposes his toeses are roses.",
        author: " - Mr. Breslow"
    },
    {
        quote: "It’s a regular triangle that has regular bowel movements.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Just add a couple of swear words.",
        author: " - Mr. Breslow"
    },
    {
        quote: "HMMMM AHH THE SMELL OF FRESH QUIZZES!!!!",
        author: " - Mr. Breslow"
    },
    {
        quote: "Are you all high today?",
        author: " - Mr. Breslow"
    },
    {
        quote: "It’s smaller, for your pea sized brain.",
        author: " - Mr. Breslow"
    },
    {
        quote: "It’s my boi vats.",
        author: " - Mr. Breslow"
    },
    {
        quote: "You're delicious.",
        author: " - Mr. Breslow"
    },
    {
        quote: "UHHHGHGHGHGH UIEEEEEEEEE (basically chewbacca noises)",
        author: " - Mr. Breslow"
    },
    {
        quote: "YAS TRU DAT. TRU RIT.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Homie don’t play like dat.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Choose - choose - choose - choose - choose wisely. You have chosen poorly",
        author: " - Mr. Breslow"
    },
    {
        quote: "Hexagonal donut - that was my nickname in high school.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Cylander",
        author: " - Mr. Breslow"
    },
    {
        quote: "How many pyramids of saliva would I need to fill up this one?",
        author: " - Mr. Breslow"
    },
    {
        quote: "I’m gonna miss you next year, just about as much as my last case of athlete’s foot.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Time to find the answer ...of why Leonard is clicking",
        author: " - Mr. Breslow"
    },
    {
        quote: "Weeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        author: " - Mr. Breslow"
    },
    {
        quote: "(after vigorously licking a lifesaver) lady woman ma'am queen slay.",
        author: " - Mr. Breslow"
    },
    {
        quote: "\"Fedex clong monster\"",
        author: " - Mr. Breslow"
    },
    {
        quote: "I went for a walk with my dogs, and the dogs won.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Go ahead, Ulysses.",
        author: " - Mr. Breslow"
    },
    {
        quote: "Say that again, baby boy.",
        author: " - Mr. Breslow"
    },
{
        quote: "Time to find the answer ... of why Leonard is clicking.",
        author: " - Mr. Breslow"
    },
    {
        quote: "If you have something on your computer, im going to crush you and eat you.",
        author: " - Mr. Breslow"
    },
    {
        quote: "You’re a nincompoop.",
        author: " - Mr. Breslow"
    },
    {
        quote: "This quiz is gonna kick your ass!!",
        author: " - Mr. Breslow"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
