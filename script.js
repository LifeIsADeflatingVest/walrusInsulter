const sarcasticQuotes = [
  "I'm not arguing, I'm just explaining why I'm right.",
  "I'm not procrastinating, I'm just highly motivated to do nothing.",
  "I'm not a pessimist. I'm just an optimist with experience.",
  "It’s not that I’m smarter than others. It’s just that they're dumber than me.",
  "My favorite exercise is avoiding people who annoy me.",
  "I’m not bossy. I just have better ideas.",
  "I’m not bitter. I’m just selectively sweet.",
  "The bar for intelligence keeps getting lower, and somehow people still trip over it.",
  "Common sense is like deodorant. The people who need it most never use it.",
  "Stupidity is the only thing that gives some people purpose.",
  "Sometimes I wonder how some people made it out of the tutorial level of life.",
  "I'm surrounded by idiots, and they think I'm the problem.",
  "The more people I meet, the more I appreciate silence.",
  "It's amazing how some people can be so wrong with such confidence.",
  "Idiots are like germs: everywhere and impossible to avoid.",
  "There’s no vaccine for stupidity, but society sure could use one.",
  "Some minds are like concrete: thoroughly mixed and permanently set.",
  "It's incredible how ignorance can be so loud.",
  "Some people prove that evolution can go in reverse.",
  "If ignorance is bliss, some people must be ecstatic.",
  "The world is full of smart devices and dumb people.",
  "In a world full of geniuses, it’s shocking how many people still can’t find the door.",
  "Nothing travels faster than light… except stupidity.",
  "The problem with the world is that intelligence is finite, but stupidity knows no bounds.",
  "It’s hard to soar with eagles when you’re stuck with turkeys.",
  "Every village has an idiot. The world just feels like one big village now.",
  "The more I see of humanity, the more I appreciate solitude.",
  "Stupidity doesn’t hurt nearly as much as it should.",
  "I’m not a misanthrope, I’m just allergic to stupidity.",
  "I’d be more optimistic if people weren’t so consistently disappointing.",
  "Idiots exist just to remind me why I prefer staying home.",
  "Some people leave a mark on the world; others just leave a stain.",
  "In a perfect world, stupidity would come with a mute button.",
  "Why do people who think they know everything always know so little?",
  "Being surrounded by idiots isn’t a challenge, it’s a test of endurance.",
  "Sometimes I feel like the only adult in a world full of toddlers.",
  "It's not that I'm cynical; I just have more experience with stupidity than most.",
  "I miss the days when people kept their ignorance to themselves.",
  "The world isn't flat, but intelligence sure is.",
  "If I had a dollar for every stupid thing I hear, I wouldn’t need to work anymore.",
  "When stupidity becomes the norm, sanity feels like rebellion.",
  "There's not enough coffee in the world to deal with this level of nonsense.",
  "Every day is a reminder that common sense isn’t common at all.",
  "You can’t fix stupid, but you can watch it self-destruct.",
  "If brains were taxed, some people would get a refund.",
  "The older I get, the more ‘people’ becomes my least favorite category.",
  "You can’t make everyone happy, especially those determined to stay foolish.",
  "In the race between intelligence and stupidity, stupidity always finds a shortcut.",
  "The most consistent thing about humanity is its ability to disappoint.",
  "Some people treat ignorance like it’s an achievement.",
  "The truth hurts, but stupidity causes permanent damage.",
  "Sometimes I think the world is just a simulation with the difficulty set to ‘dumb.’",
  "We’ve reached a point where intelligence is considered an endangered species.",
  "Some days, I feel like I’m the only one who read the instruction manual for life.",
  "Stupidity is a renewable resource, unfortunately.",
  "If stupidity were a crime, we’d have to build more prisons.",
  "The trouble with the world is that fools are loud, and wisdom is silent.",
  "It's incredible how many people are on a lifelong journey to learn absolutely nothing.",
  "If ignorance is a choice, people are making it with pride.",
  "The more people I encounter, the more I consider living on an island.",
  "In a world full of noise, silence is the only intelligent response.",
  "The road to idiocy is always under construction.",
  "Some minds are so open, everything falls out.",
  "I used to think intelligence was a gift. Now I see it’s a burden in this world.",
  "I’m not bitter, I’m just tired of watching people celebrate their own mediocrity.",
  "The world is full of opinions, and very few of them come from informed minds.",
"Wisdom is scarce because stupidity is so generously distributed.",
  "Sometimes I think evolution hit the pause button a bit too early.",
  "If ignorance were a sport, some people would be world champions.",
  "They say knowledge is power, yet somehow stupidity runs the world.",
  "I didn’t know rock bottom had a basement until I saw people’s opinions online.",
  "In a world full of noise, it's clear why silence is underappreciated.",
  "Some days, I feel like the only one who's not a voluntary idiot.",
  "It's amazing how some people speak with authority about things they clearly don’t understand.",
  "The problem isn’t that people are dumb; it’s that they’re so confident about it.",
  "If only stupidity was painful, maybe the world would be quieter.",
  "You can’t underestimate people enough these days.",
  "It’s not the speed of stupidity that’s alarming, it’s how widespread it is.",
  "The deeper I dig for intelligent life, the more shallow it seems to be.",
  "Some folks act like they’re allergic to learning.",
  "You can’t argue with stupid, but you can certainly watch it dig its own hole.",
  "The best part about talking to myself is the lack of stupid responses.",
  "If common sense were a currency, we’d be in a global recession.",
  "The worst thing about ignorance is how proud it can be.",
  "The problem isn’t that people don’t know; it’s that they don’t care to.",
  "Every now and then, humanity really sets the bar lower.",
  "The more I understand people, the less I feel like explaining myself.",
  "Sometimes I wonder if I’m the last sane person left on the planet.",
  "It’s impressive how some people can be both empty and full of themselves.",
  "The greatest mystery is how people can be so clueless yet so certain.",
  "I used to think people would learn with time. Now I see they just get louder.",
  "You don’t have to be smart to have an opinion, but it helps if you want it to matter.",
  "The world’s biggest problem is that the loudest voices are often the least informed.",
  "It’s a miracle that some people can survive their own thinking.",
  "There’s no shortage of opinions, just a shortage of informed ones.",
  "Sometimes I wonder if people are deliberately missing the point just for the fun of it.",
];
shuffle(sarcasticQuotes);

let mursuAnimations = ["mur.png", "mursu1.gif", "mursu2.gif", "mursu3.gif", "mursu4.gif", "mursu5.gif"];
shuffle(mursuAnimations);

let buttonTexts = ["I Can Do This All Night", "Want More?", "Still More?", "Get Another", "More Insults?", "Aren't You Bored Yet?", "Nothing Better To Do?"];
shuffle(buttonTexts);

const cycleGen = cycleArray(mursuAnimations);
const cycleGen2 = cycleArray(sarcasticQuotes);
const cycleGen3 = cycleArray(buttonTexts);

$(document).ready(function(){
  var dt = new Date().getFullYear();
  document.getElementById('theYr').innerHTML = (dt);
  $("#container").fadeIn(1000);
  setTimeout(function(){
    changeQuote();
  }, 1050);
});

function changeQuote() {
	$("#quote").animate({opacity: 0}, 350);
	$("#again").animate({opacity: 0}, 350);
        $("#walrusLink").animate({opacity: 0}, 350);
    $("#footer").fadeOut(350);
	$("#wiseAss").css("height", "2em");
	setTimeout(function(){
		$("#quote").html(cycleGen2.next().value);
        $("#again").html(cycleGen3.next().value);
		$("#wiseAss").css("height", "15em");
		setTimeout(function(){
			$("#quote").animate({opacity: 1}, 750);
			$("#again").animate({opacity: 1}, 750);
                        $("#walrusLink").animate({opacity: 1}, 750);
            $("#footer").fadeIn(750);
			$("#theMursu").attr("src", cycleGen.next().value);
		}, 720);
	}, 500);
}

function* cycleArray(array) {
  while (true) {
    for (let item of array) {
      yield item;
    }
  }
}

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
