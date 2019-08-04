function s(date, timeSensitive, tag) {
    return {date: date, timeSensitive: timeSensitive, tag: tag};
}

const subtitles = [
    s('2019-08-04', true, "I should have came in third"),
    s('2019-08-03', false, "We'll see how it goes"),
    s('2019-08-02', false, "At the tone, it will be the tone"),
    s('2019-08-01', false, "Achoo"),
    s('2019-07-31', false, "<a href='https://www.snailmail.band/' target='_blank'>You're always coming back a little older, but it looks alright on you</a>"),
    s('2019-07-30', true, "The debate is on CNN, but it's at the Fox theater?????"),
    s('2019-07-29', true, "This sucks."),
    s('2019-07-28', false, "Silence of the Adult Sheep"),
    s('2019-07-27', false, "We're sorry, the tagline you are trying to reach has been disconnected. Goodbye."),
    s('2019-07-26', false, "I was up early today"),
    s('2019-07-25', false, "You fools! You've fallen right into my trap"),
    s('2019-07-24', false, "Thanks for your patience"),
    s('2019-07-23', false, "Cool it, Planet Earth"),
    s('2019-07-22', false, "Could be better"),
    s('2019-07-21', false, "The wheels on the bus don't move because traffic's bad, traffic's bad, traffic's bad"),
    s('2019-07-20', true, "It's so hot. Milk was a bad choice"),
    s('2019-07-19', false, "<a href='https://sportsboyfriend.bandcamp.com/' target='_blank'>I only leave my house to dance with you</a>"),
    s('2019-07-18', false, "They call it long island but it's just the width that's long"),
    s('2019-07-17', false, "Large order up yours truly sorry"),
    s('2019-07-16', false, "Gross"),
    s('2019-07-15', false, "Boxer-briefcase"),
    s('2019-07-14', false, "It's legal to kill iguanas on your property in Florida now. That is all."),
    s('2019-07-13', false, '*Citizen Kane clapping gif*'),
    s('2019-07-12', false, "<a href='https://stefchuraband.bandcamp.com/' target='_blank'>All I do is lie</a>"),
    s('2019-07-11', true, "Hooray unlimited ice drink day"),
    s('2019-07-10', false, "<a href='https://www.palehound.com/' target='_blank'>You are music but not the kind they listen to, no</a>"),
    s('2019-07-09', false, "You're too early for today's tagline"),
    s('2019-07-08', false, "Most of thse are just movies quotes slightly altered"),
    s('2019-07-07', false, "Well, that's just like, facts, man."),
    s('2019-07-06', false, "Everybody knows"),
    s('2019-07-05', false, "I just thought it was 2017"),
    s('2019-07-04', true, "You're how old?"),
    s('2019-07-03', false, "Uuuuuugggggghhhhhh"),
    s('2019-07-02', false, "<a href='https://youtu.be/WYGIE7b07Y8' target='_blank'>I told some jokes</a>"),
    s('2019-07-01', true, "Today's the day!"),
    s('2019-06-30', false, "Never speak of this again"),
    s('2019-06-29', false, "Setup? Punchline."),
    s('2019-06-28', false, "Shrek is not a personality"),
    s('2019-06-27', true, "Faye Webster, I'm sorry I didn't bring you any scratch-offs. But I stand by my \"Go Marlins\""),
    s('2019-06-26', false, "<a href='https://www.fayewebster.com/' target='_blank'>Why won't you come to Atlanta?</a>"),
    s('2019-06-25', false, "Sorry, I have plans tonight"),
    s('2019-06-24', false, "Did you hear that? I think somebody's at the door"),
    s('2019-06-23', true, "Only one more month until I'm caught up on these"),
    s('2019-06-22', false, "I'm sorry, the tagline you are trying to reach has been disconnected"),
    s('2019-06-21', false, "This readership is making me consider quitting my day job"),
    s('2019-06-20', false, "Always tell me the odds"),
    s('2019-06-19', false, "What if horoscope were hororscope?"),
    s('2019-06-18', false, "What was the greatest thing before sliced bread?"),
    s('2019-06-17', false, "Womp womp"),
    s('2019-06-16', true, "Oh yes, I remember this week. It's when I got deathly ill"),
    s('2019-06-15', false, "Everything is Wednesday"),
    s('2019-06-14', false, "NUMTOTs will be the death of me"),
    s('2019-06-13', false, "Street Easy, Die Hard"),
    s('2019-06-12', false, 'Set phasers to "Did you feel something?"'),
    s('2019-06-11', false, "Turn on battery saver mode"),
    s('2019-06-10', false, "404 tagline not found"),
    s('2019-06-09', false, "This is why we can't have nice things"),
    s('2019-06-08', false, "<a href='https://frankiecosmosband.com/' target='_blank'>I'm 20, washed up already</a>"),
    s('2019-06-07', false, "Perfectly executed segue"),
    s('2019-06-06', false, "Papa's got a brand new L.L. Bean backpack"),
    s('2019-06-05', false, "I remember when this was all under water"),
    s('2019-06-04', false, "I hope you're sitting down for this"),
    s('2019-06-03', false, "<a href='https://remembersports.bandcamp.com/' target='_blank'>You can have alone time when you're dead</a>"),
    s('2019-06-02', false, "<a href='https://sopharela.bandcamp.com/' target='_blank'>will we still know each other when we're both grown</a>"),
    s('2019-06-01', true, "Today I have a rare double concert, so I'll be putting out tags for both the next two days. I know you're all dizzy with anticipation"),
    s('2019-05-31', false, "Suprise! It's nothing."),
    s('2019-05-30', false, "Oh boy here it comes"),
    s('2019-05-29', false, "It's almost time"),
    s('2019-05-28', false, "Batteries included"),
    s('2019-05-27', false, "If anybody's reading this, hello"),
    s('2019-05-26', false, "Excuse me?"),
    s('2019-05-25', false, "meh"),
    s('2019-05-24', false, "Quick!"),
    s('2019-05-23', false, "How dare you"),
    s('2019-05-22', false, "I didn't have anything good for today"),
    s('2019-05-21', false, "Das Boot or Das Keyboard. There can only be one"),
    s('2019-05-20', false, "Pithy, witty, perfuntory, and it only took 3 hours"),
    s('2019-05-19', false, "Bear witness vs bare witness. Know the difference."),
    s('2019-05-18', false, "This is unauthorized access to my personal blog I put on the internet"),
    s('2019-05-17', false, "It's a no from me, alpaca"),
    s('2019-05-16', false, "Dun dun-dun-dun-dun dun, bwam do-do dun-dun-dun bwa-duuuun...<a href='https://www.youtube.com/watch?v=C-SFhhnBwdA#t=107' target='_blank'>FRASIER</a>"),
    s('2019-05-15', true, "Beware the ides of May"),
    s('2019-05-14', false, "Emoji 🔪 ASCII ⚰️⚰️⚰️"),
    s('2019-05-13', false, "ASCII 4 lyfe"),
    s('2019-05-12', false, "Brought to you by the letter ü"),
    s('2019-05-11', false, "Brought to you by the Sony Runman"),
    s('2019-05-10', false, "...or so it would seem"),
    s('2019-05-09', false, "My my, hey hey, disco is dead."),
    s('2019-05-08', false, "Who is this for?"),
    s('2019-05-07', false, "Hey Google, set an alarm for 2:47am"),
    s('2019-05-06', false, "Remember to buy toilet paper"),
    s('2019-05-05', false, "Spider!"),
    s('2019-05-04', true, "Coming to you live from Copenhagen"),
    {date: '2019-05-03', timeSensitive: false, tag: 'In my amateur opinion'},
    {date: '2019-05-02', timeSensitive: false, tag: "CAN YOU WHIP UP BUTTERY SMOOTH CODE?"},
    {date: '2019-05-01', timeSensitive: true, tag: "No blooms yet"},
    {date: '2019-04-30', timeSensitive: false, tag: "Who, what, when, where, how come?"},
    {date: '2019-04-29', timeSensitive: false, tag: "Sealed for your protection"},
    {date: '2019-04-28', timeSensitive: false, tag: "I was voted most likely to change the world in high school, so now I'm doing this."},
    {date: '2019-04-27', timeSensitive: false, tag: "<a href='http://www.ratboysband.com/' target='_blank'>All I am is just a Ratboy</a>"},
    {date: '2019-04-26', timeSensitive: false, tag: "I can't find the remote"},
    {date: '2019-04-25', timeSensitive: false, tag: 'Hi Mom'},
    {date: '2019-04-24', timeSensitive: false, tag: "<a href='https://www.juliajacklin.com/' target='_blank'>Don't know how to keep loving you, know that I know you so well</a>"},
    {date: '2019-04-23', timeSensitive: true, tag: 'My roommate ate bread in front of me and now I\'m sad'},
    {date: '2019-04-22', timeSensitive: false, tag: '<a href="https://www.honeyblood.co.uk/" target="_blank">Time is against us \\ Circumstance likes to dick around</a>'},
    {date: '2019-04-21', timeSensitive: false, tag: 'Professional Straphanger'},
    {date: '2019-04-20', timeSensitive: false, tag: 'lol'},
    {date: '2019-04-19', timeSensitive: false, tag: 'Hello from the future'},
    {date: '2019-04-18', timeSensitive: false, tag: 'First they\'re sour, then they\'re more sour'},
    {date: '2019-04-17', timeSensitive: false, tag: 'Safe for work'},
    {date: '2019-04-16', timeSensitive: true, tag: 'I threw a complete game shut out at corporate softball today and I just need people to know that.'},
    {date: '2019-04-15', timeSensitive: false, tag: 'A face for radio and a voice for print'},
    {date: '2019-04-14', timeSensitive: false, tag: 'South Florida sports apologist'},
    {date: '2019-04-13', timeSensitive: false, tag: 'Most of this could be replaced by following Adhoc on Facebook'},
    {date: '2019-04-12', timeSensitive: false, tag: 'I\'m friends with the band'},
    {date: '2019-04-11', timeSensitive: false, tag: 'The refreshing taste of inescapable terror'},
    {date: '2019-04-10', timeSensitive: false, tag: 'Aaaaaaahhhhhhh'},
    {date: '2019-04-09', timeSensitive: true, tag: 'So they both explode for 80 points are you kidding me?'},
    {date: '2019-04-08', timeSensitive: true, tag: 'Under 118 lock of the century'},
    {date: '2019-04-07', timeSensitive: false, tag: 'Gesundheit'},
    {date: '2019-04-06', timeSensitive: false, tag: 'Don\'t test <a href="https://www.fayewebster.com/" target="_blank">Faye Webster</a> on NL East trivia'},
    {date: '2019-04-05', timeSensitive: false, tag: '<a href="https://stelladonnelly.bandcamp.com/" target="_blank">You only like me when I do my tricks for you</a>'},
    {date: '2019-04-04', timeSensitive: false, tag: 'a;rio hgaeriopy4PNA;'},
    {date: '2019-04-03', timeSensitive: false, tag: 'You don\'t look so hot'},
    {date: '2019-04-02', timeSensitive: false, tag: 'Toast!'},
    {date: '2019-04-01', timeSensitive: true, tag: ''},
    {date: '2019-03-31', timeSensitive: false, tag: 'True story'},
    {date: '2019-03-30', timeSensitive: false, tag: 'Somebody actually emailed me about this once'},
    {date: '2019-03-29', timeSensitive: false, tag: 'I\'m right behind you'},
    {date: '2019-03-28', timeSensitive: false, tag: 'This tagline only available to gold customers'},
    {date: '2019-03-27', timeSensitive: false, tag: 'Dictated but not read'},
    {date: '2019-03-26', timeSensitive: false, tag: 'From the bed of Max Haubenstock'},
    {date: '2019-03-25', timeSensitive: false, tag: 'Psh-yeah'},
    {date: '2019-03-24', timeSensitive: false, tag: '<a href="https://twitter.com/RexChapman/status/1108844817654734848" target="_blank">One shining moment</a>'},
    {date: '2019-03-23', timeSensitive: false, tag: 'Hey.'},
    {date: '2019-03-22', timeSensitive: true, tag: 'Everything is busted. Thanks for nothing, Old Dominion.'},
    {date: '2019-03-21', timeSensitive: true, tag: 'I\'m getting mad'},
    {date: '2019-03-20', timeSensitive: false, tag: '<a href="http://lucydacus.com/" target="_blank">I don\'t wanna be funny anymore</a>'},
    {date: '2019-03-19', timeSensitive: false, tag: 'Was that your phone or mine?'},
    {date: '2019-03-18', timeSensitive: false, tag: 'Extremely cold take.'},
    {date: '2019-03-17', timeSensitive: true, tag: 'Per tradition, I spent the whole day watching the DCOM "The Luck of the Irish"'},
    {date: '2019-03-16', timeSensitive: false, tag: 'Licensed. Bonded. Insured.'},
    {date: '2019-03-15', timeSensitive: false, tag: '<a href="https://getyarn.io/yarn-clip/69bd925c-0ddd-4092-b3f4-68b602412dd5">Perfectly executed Chewbacca sounds</a>'},
    
    
    {date: '2019-03-14', timeSensitive: false, tag: 'ȳ̷͖͋̐̓̽͆́̀͐̚ő̸̖̄̈́̒̓̏͘͘u̷̮͉̤̥̫̔̋̽̂̕͝ȓ̷̪̖̬̦̫̮̼̳̌͂͒̚͜ ̴̖̻̫̙̹̖̦͑̈̍̔̈́̍̽̌s̶̛̠̗͔̤̻͖̠͈͉̥̔̀̏͒̈́͠c̶̱̘̘̱̦̤̺͊̈̎̓́̚͝r̶̟̟̫̫̻̰͚̒́ͅę̴̹͖̥̞̣̗̜̤̪̏͂̔͒̎͗͆̄̕͝e̸̬̜͕͚͑̄͊͌̈́̕͠n̶̡̪͇̟̫̖̗̰̖̭͒̇̆̓̔̂ ̸̢̣̻͙͇̟̤͎̞̓̀̊̽̽̂̓̂ͅi̵̧̢͔͙̲̩͓̱̺͋̂̂̈́̋̉͑͊͜ͅs̴̛͇̹͎̈̽̓̂͐͒̉͠͝ ̵̮̩͔͔̮̏͛͌̿b̵̢̨̻͇̮̖̱̗͇͈̋̿r̷̨̮͉̜͙̲̱͖̆̑̏̃ͅo̶̢̨̻̝̻̖̪̞̖̩͌̌̓͆͂́̄͛̅k̶̢͎̉̂̕͝e̵̼̭̿̓͌͛̀̓͘̕͜͝͝ń̵̨̤̦͓̳̘͎̣͖͕̒̑́̓̑̎ͅ',},
    
    
    {date: '2019-03-13', timeSensitive: false, tag: 'At the tone, it will be March 13th.'},
    {date: '2019-03-12', timeSensitive: false, tag: 'How \'bout that weather, huh?'},
    {date: '2019-03-11', timeSensitive: false, tag: 'In theaters now.'},
    {date: '2019-03-10', timeSensitive: false, tag: 'Gone skiing. Be back tomorrow.'},
    {date: '2019-03-09', timeSensitive: false, tag: 'There\'s an XKCD for this'},
    {date: '2019-03-08', timeSensitive: false, tag: 'Loading...'},
    {date: '2019-03-07', timeSensitive: false, tag: 'This is still happening?'},
    {date: '2019-03-06', timeSensitive: false, tag: 'Oh God, the existential dread is kicking in'},
    {date: '2019-03-05', timeSensitive: true, tag: 'These are turning into legitimate ads for Visual Studio and I don\'t know how I feel about that.'},
    {date: '2019-03-04', timeSensitive: false, tag: 'No matter how hard I try, I will never be as good at social media as a 13 year old who just got their first cellphone right now.'},
    {date: '2019-03-03', timeSensitive: false, tag: 'Complicate, complicate.'},
    {date: '2019-03-02', timeSensitive: false, tag: 'I\'m going back to bed'},
    {date: '2019-03-01', timeSensitive: false, tag: '<a href="http://sidneygishnj.com/" target="_blank">I\'ll be homecoming serf, it seems</a>'},
    {date: '2019-02-28', timeSensitive: false, tag: 'Overly Underrated'},
    {date: '2019-02-27', timeSensitive: false, tag: 'Pass'},
    {date: '2019-02-26', timeSensitive: false, tag: 'Agree or disagree?'},
    {date: '2019-02-25', timeSensitive: false, tag: 'Six seasons and a movie'},
    {date: '2019-02-24', timeSensitive: false, tag: 'I lied, I did a bunch of these at once.'},
    {date: '2019-02-23', timeSensitive: false, tag: 'Other promotional consideration brought to you by attempting to thwart off being alone with my thoughts.'},
    {date: '2019-02-22', timeSensitive: false, tag: 'Breaking News: News Broken.'},
    {date: '2019-02-21', timeSensitive: false, tag: 'They\'re not all gonna be gems'},
    {date: '2019-02-20', timeSensitive: false, tag: 'I miss Yahoo Answers'},
    {date: '2019-02-19', timeSensitive: false, tag: 'I love you.'},
    {date: '2019-02-18', timeSensitive: false, tag: 'Extremely Offline'},
    {date: '2019-02-17', timeSensitive: false, tag: 'Why did I say I\'d come up with one of these every day?'},
    {date: '2019-02-16', timeSensitive: false, tag: 'A tame and calm guy.'},
    {date: '2019-02-15', timeSensitive: false, tag: 'Hurry now! Only while supplies last.'},
    {date: '2019-02-14', timeSensitive: true, tag: 'TCM was playing Casablanca, my phone and I thought it was very romantic'},
    {date: '2019-02-13', timeSensitive: false, tag: 'I\'ve got to be more consistent at this.'},
    {date: '2019-02-12', timeSensitive: false, tag: 'Help us, Andy Byford. You\'re our only hope'},
    {date: '2019-02-11', timeSensitive: false, tag: 'Oh look, another white guy talking about indie music'},
    {date: '2019-02-10', timeSensitive: false, tag: 'Full speed behind!'},
    {date: '2019-02-07', timeSensitive: false, tag: 'Oh boy, 1:48a.m.'},
    {date: '2019-02-06', timeSensitive: false, tag: '8:30 Eastern, 7:15 Central'},
    {date: '2019-02-04', timeSensitive: false, tag: 'We must not allow a mine shaft gap'},
    {date: '2019-02-03', timeSensitive: true, tag: 'My heart says Rams but my betslip says Pats -2, Gladys Knight will take more than 110 seconds'},
    {date: '2019-02-01', timeSensitive: false, tag: 'Bake at 350&deg; for 30 minutes, then serve with a nice Chianti'},
    {date: '2019-01-31', timeSensitive: false, tag: 'Relentlessly on brand'},
    {date: '2019-01-30', timeSensitive: false, tag: 'A chicken in every pot, and a new tagline every day.'},
    {date: '2019-01-29', timeSensitive: false, tag: 'Now with less functionality'},
    {date: '2019-01-28', timeSensitive: false, tag: 'Only twelve years too late'},
    {date: '2019-01-27', timeSensitive: false, tag: 'Doing this on the cheap'}
]
